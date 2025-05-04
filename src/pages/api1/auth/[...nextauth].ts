import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/models/User";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },

            authorize: async (credentials) => {
                await connectDB();
                const user = await UserModel.findOne({
                    email: credentials?.email,
                }).lean();

                if (!user) {
                    return null;
                }
                if (!user.password || !credentials?.password) return null
                const isPasswordValid = await bcrypt.compare(
                    credentials?.password,
                    user.password
                );

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                };
            },
        }),
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: async ({ session, token }) => {
            if (typeof token.id === "string" && token.id) {
                session.user.id = token.id;
            }
            return session;
        },
    },
});
