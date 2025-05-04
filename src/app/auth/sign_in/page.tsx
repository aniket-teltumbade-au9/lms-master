"use client"; // Required for useRouter in App Router

import Input from "@/components/form/input";
import { Form } from "houseform";
import { signIn } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { z } from "zod";

const schema = {
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*/, "Password must contain at least one lowercase letter, one uppercase letter, and one number"),
};

function SignIn() {
  const router = useRouter();
  const hSubmit = async (values: { email: string; password: string; }) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false
    })

    if (res?.error) {
      alert(res.error)
    } else if (!res?.ok) {
      alert("Something went wrong")
    } else {
      router.push("/dashboard/student/home")
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
            <div className="text-[20px] leading-[20px] text-center">Sign in to continue your learning journey</div>
          </div>
          <div className="w-full h-auto gap-y-6 flex flex-col justify-between">
            <Form
              onSubmit={hSubmit}
              submitWhenInvalid={false}
            >
              {({
                submit,
              }) => (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    submit();
                  }}
                >
                  <Input
                    label='Email address'
                    type="email"
                    placeholder="Enter your email"
                    onChangeValidate={schema.email}
                    name='email'
                  />
                  <Input
                    label='Password'
                    type="password"
                    placeholder="Enter your password"
                    onChangeValidate={schema.password}
                    name='password'
                  />
                  <div className="w-full flex justify-between">
                    <div className="flex items-center gap-x-2">
                      <input type="checkbox" />
                      <div className="text-[#E5E7EB] text-[16px]">Remember me</div>
                    </div>
                    <div className="text-[#E5E7EB] text-[16px]">
                      <Link href="/auth/forgot_password" className="text-header">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                  <div>
                    <button type='submit' className="w-full bg-header rounded-[8px] p-[10.5px]">
                      Sign In
                    </button>
                  </div>
                </form>
              )}
            </Form>
            <div className="flex items-center gap-4">
              <div className="flex-1 border-t border-[#FFFFFF20]"></div>
              <span className="text-[#E5E7EB] text-[16px]">OR</span>
              <div className="flex-1 border-t border-[#FFFFFF20]"></div>
            </div>

            <div className="w-full flex justify-center gap-x-6">
              <button><Image src="/assets/google.png" alt="Google" width={48} height={48} /></button>
              <button><Image src="/assets/facebook.png" alt="Facebook" width={48} height={48} /></button>
              <button><Image src="/assets/linkedIn.png" alt="LinkedIn" width={48} height={48} /></button>
            </div>
          </div>
          <div className="w-full h-[7.73%] flex flex-col justify-between items-center">
            <div className="text-[#E5E7EB] text-[16px]">New user? <Link href="/auth/sign_up" className="text-header"> Create an account</Link></div>
            <div className="flex text-[#E5E7EB] text-[14px] gap-x-6"><Link href="/">Home</Link> <Link href="/privacy">Privacy</Link> <Link href="/help">Help</Link> <Link href="/contact">Contact</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
