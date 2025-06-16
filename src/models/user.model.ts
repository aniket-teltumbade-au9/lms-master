import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
import mongoose from "mongoose";

enum Status {
    ONBOARDING = "onboarding",
    UNDER_REVIEW = "under_review",
    ACTIVE = "active",
    INACTIVE = "inactive",
}
enum Role {
    Admin = "admin",
    Student = "student",
    Teacher = "teacher",
}

@modelOptions({
    schemaOptions: {
        timestamps: true,
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

    @prop({ enum: Role })
    role!: Role;

    @prop()
    phoneNumber!: string;

    @prop()
    emailVerified?: Date;

    @prop({ default: false })
    active!: boolean;

    @prop({ enum: Status, default: Status.ONBOARDING })
    status!: Status;

    createdAt?: Date;
    updatedAt?: Date;
}

// Prevent model overwrite during hot reload in dev
export const UserModel = mongoose.models.User || getModelForClass(User);
