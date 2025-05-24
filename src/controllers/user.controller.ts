import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/models/user.model";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface TokenUser {
    id: string;
    // optionally add more fields like role, name, email etc.
}

interface ExtendedToken {
    user?: TokenUser;
}
export const updateRole = async (req: NextRequest) => {
    try {
        const token = await getToken({ req }) as ExtendedToken;

        if (!token?.user?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const data = await req.json();
        await connectDB();

        const userId = new mongoose.Types.ObjectId(token.user.id);
        const result = await UserModel.findOneAndUpdate(
            { _id: userId },
            data,
            { new: false }
        );

        if (!result) {
            return NextResponse.json({ error: "User not found or not updated" }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error: Error | unknown) {
        return NextResponse.json({ error: "Something went wrong: " + error }, { status: 500 });
    }
}