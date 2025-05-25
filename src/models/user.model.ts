import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

@modelOptions({
    schemaOptions: {
        timestamps: true, // creates `createdAt` and `updatedAt` automatically
    },
})
export class User {
    @prop({ required: true })
    password!: string;

    @prop({ required: true, unique: true })
    email!: string;

    @prop()
    image?: string;

    @prop()
    name!: string;

    @prop()
    role!: string;

    @prop()
    phoneNumber!: string;

    @prop()
    emailVerified?: Date;
}

// Prevent model overwrite during hot reload in dev
export const UserModel = mongoose.models.User || getModelForClass(User);
