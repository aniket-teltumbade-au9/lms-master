"use client"
import Input from "@/components/form/input";
import Select from '@/components/form/select';
import { Form } from "houseform";
import { z } from "zod";
import Logout from "./Logout";

const schema = {
    name: z.string().min(3, "Full name must be at least 3 characters"),
    phoneNumber: z.string().min(10, "Phone number must be at least 10 characters"),
    role: z.enum(["teacher", "student"]).default("student")
};
const roleOptions = [
    { label: 'Select Role', value: '' },
    { label: "Student", value: "student" },
    { label: "Teacher", value: "teacher" },
]
interface Data { email: string; password: string; }
function Onboarding({ submit }: { submit: (values: Data) => void }) {
    const hSubmit = async (values: Data) => {
        const res = await fetch("/api/user/update-role", {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!res.ok) {
            alert("Something went wrong");
        }
        else submit(values)
    }
    return (
        <div className="w-full flex items-center h-[100vh]">
            <div className="w-full md:w-[35%] m-auto h-[70%] flex items-center justify-center p-[16px] md:p-[50px]">
                <div className="w-full flex flex-col justify-between bg-[#ffffff10] p-8 rounded-2xl flex-1 h-full">
                    <div className="w-full h-[17.26%] flex flex-col justify-between">
                        <div className="font-bold text-[26px] leading-[32px] text-center">Complete Your Onboarding</div>
                        <div className="text-[20px] leading-[20px] text-center">Please fill in the required details to continue.</div>
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
                                        label='Full Name'
                                        type="text"
                                        placeholder="Enter your full name"
                                        onChangeValidate={schema.name}
                                        name='name'
                                    />
                                    <Input
                                        label='Phone Number'
                                        type="number"
                                        placeholder="Enter your phone number"
                                        onChangeValidate={schema.phoneNumber}
                                        name='phoneNumber'
                                    />
                                    <Select
                                        options={roleOptions}
                                        label=''
                                        inputLabel='Role'
                                        name='role'
                                        className="w-full"
                                        fullWidth
                                        onChangeValidate={schema.role}
                                    />
                                    <div>
                                        <button type='submit' className="w-full bg-header rounded-[8px] p-[10.5px]">
                                            Submit for Approval
                                        </button>
                                    </div>
                                    <div className="py-2">
                                        <Logout />
                                    </div>
                                </form>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboarding
