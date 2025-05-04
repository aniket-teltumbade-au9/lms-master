// models/User.ts
import { getModelForClass, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

export class User {
    @prop({ required: true })
    password!: string;

    @prop({ required: true, unique: true })
    email!: string;

    @prop()
    image?: string;

    @prop()
    emailVerified?: Date;
}

// Prevent model overwrite during hot reload in dev
export const UserModel = mongoose.models.User || getModelForClass(User);
