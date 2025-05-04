// src/app/api/auth/sign_up/route.ts
import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
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
