import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/models/user.model";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

interface TokenUser {
    id: string;
    // optionally add more fields like role, name, email etc.
}

interface ExtendedToken {
    user?: TokenUser;
    id?: string;
}
export const updateRole = async (req: NextRequest) => {
    try {
        const token = await getToken({ req }) as ExtendedToken;
        console.log(token, 'test it once')
        if (!token?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const data = await req.json();
        await connectDB();

        const userId = new mongoose.Types.ObjectId(token.id);
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
export const getUsers = async (req: NextRequest) => {
    try {
        const token = await getToken({ req }) as ExtendedToken;
        if (!token?.id) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        await connectDB();
        const filter = {}
        // req.body as RootFilterQuery<typeof UserModel>;
        const users = await UserModel.find(filter);
        return NextResponse.json(users);
    } catch (error: Error | unknown) {
        return NextResponse.json({ error: "Something went wrong: " + error }, { status: 500 });
    }
}

export async function registerUser(req: Request) {
    const body = await req.json();
    console.log(body)
    const { email, password } = body;

    if (!email || !password)
        return NextResponse.json({ error: "Missing required fields" }, { status: 400 });

    await connectDB();

    const existingUser = await UserModel.findOne({ email });
    if (existingUser)
        return NextResponse.json({ error: "User already exists" }, { status: 409 });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, password: hashedPassword });
    await newUser.save();
    console.log(newUser)
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
}