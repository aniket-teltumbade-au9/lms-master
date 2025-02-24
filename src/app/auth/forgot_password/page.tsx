import Input from "@/components/form/input";
import Image from "next/image";
import Link from "next/link";

function ForgotPassword() {
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
                        <div className="font-bold text-[26px] leading-[32px] text-center">Forgot Your Password?</div>
                        <div className="text-[20px] leading-[20px] text-center">Enter your email to reset your password</div>
                    </div>
                    <div className="w-full h-auto gap-y-12 flex flex-col justify-between">
                        <Input
                            label='Email address'
                            type="email"
                            placeholder="Enter your email"
                        />
                        <div>
                            <button className="w-full bg-header rounded-[8px] p-[10.5px]">Send Reset Link</button>
                        </div>
                    </div>
                    <div className="w-full h-[7.73%] flex flex-col justify-between items-center">
                        <div className="text-[#E5E7EB] text-[16px]">Remembered your password? <Link href="/auth/sign_in" className="text-header">Sign In</Link></div>
                        <div className="flex text-[#E5E7EB] text-[14px] gap-x-6"><Link href="/">Home</Link> <Link href="/privacy">Privacy</Link> <Link href="/help">Help</Link> <Link href="/contact">Contact</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;

