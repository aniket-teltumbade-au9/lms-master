// pages/api/auth/signup.ts
import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/models/User";
import bcrypt from "bcrypt";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.method)
    if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json({ error: "Missing required fields" });

    await connectDB();

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(409).json({ error: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
}
