// /pages/api/auth/[...nextauth].ts OR /app/api/auth/[...nextauth]/route.ts

import { connectDB } from "@/lib/mongoose";
import { UserModel } from "@/models/User";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                console.log(credentials)
                await connectDB();
                const user = await UserModel.findOne({ email: credentials?.email });

                if (!user) throw new Error("User not found");

                const isValid = await bcrypt.compare(credentials!.password, user.password);
                if (!isValid) throw new Error("Invalid credentials");

                return { id: user._id, email: user.email };
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user;
            return token;
        },
        async session({ session, token }) {
            if (token?.user) session.user = token.user;
            return session;
        }
    }
});

export { handler as GET, handler as POST };

