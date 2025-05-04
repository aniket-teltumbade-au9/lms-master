'use client';
import Input from "@/components/form/input";
import { Form } from "houseform";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";

const schema = {
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters")
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/, "Password must contain at least one lowercase letter, one uppercase letter, and one number"),
    confirmPassword: z.string()
};
function SignUp() {
    const router = useRouter();
    const hSubmit = async (values: unknown) => {
        const res = await fetch("/api/auth/sign_up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
        });

        const data = await res.json();
        if (data.error) {
            alert(data.error);
        } else if (!res.ok) {
            alert("Something went wrong");
        } else {
            router.push("/auth/sign_in");
        }
    }
    return (
        <div className="w-full flex items-center h-[100vh]">
            <div className="hidden md:w-[65%] md:flex items-center justify-center relative h-full">
                <Image
                    src="/assets/img.png"
                    alt="Banner"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="w-full md:w-[35%] h-full flex items-center justify-center p-[16px] md:p-[50px]">
                <div className="w-full flex flex-col justify-between bg-[#ffffff10] p-8 rounded-2xl flex-1 h-full">
                    <div className="w-full h-[17.26%] flex flex-col justify-between">
                        <div className="font-bold text-[26px] leading-[32px] text-center">Welcome Back to Unicode!</div>
                        <div className="text-[20px] leading-[20px] text-center">Register to continue your learning journey</div>
                    </div>
                    <div className="w-full h-auto gap-y-6 flex flex-col justify-between">
                        <Form
                            onSubmit={hSubmit}
                            submitWhenInvalid={false}
                        >
                            {({
                                submit, getFieldValue
                            }) => {
                                const confirmPasswordSchema = schema.confirmPassword.refine(
                                    (value) => value === getFieldValue("password")?.value,
                                    {
                                        message: "Passwords do not match",
                                        path: ["confirmPassword"]
                                    }
                                );
                                return (
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            submit();
                                        }}
                                    >
                                        <Input
                                            label='Email address'
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            onChangeValidate={schema.email}
                                        />
                                        <Input
                                            label='Password'
                                            type="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            onChangeValidate={schema.password}
                                        />
                                        <Input
                                            label='Confirm Password'
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Enter your password"
                                            onChangeValidate={confirmPasswordSchema}
                                        />
                                        <div className="w-full flex justify-between">
                                            <div className="flex items-center gap-x-2">

                                            </div>
                                            <div className="text-[#E5E7EB] text-[16px]">
                                                <Link
                                                    href="/auth/forgot_password"
                                                    className="text-header"
                                                >
                                                    Forgot Password?
                                                </Link>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type='submit'
                                                // disabled={!isValid}
                                                className="w-full bg-header rounded-[8px] p-[10.5px]"
                                            >
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                )
                            }}
                        </Form>
                    </div>
                    <div className="w-full h-[7.73%] flex flex-col justify-between items-center">
                        <div className="text-[#E5E7EB] text-[16px]">Already have an account? <Link href="/auth/sign_in" className="text-header"> Sign In</Link></div>
                        <div className="flex text-[#E5E7EB] text-[14px] gap-x-6"><Link href="/">Home</Link> <Link href="/privacy">Privacy</Link> <Link href="/help">Help</Link> <Link href="/contact">Contact</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
