import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
function Input({ label, ...props }: Readonly<InputProps>) {
    return (
        <div className="flex flex-col gap-y-2">
            <div className="text-[#E5E7EB] text-[18px]">{label}</div>
            <input
                className="w-full bg-[#ffffff10] border border-[#ffffff20] px-4 py-2 rounded-lg"
                {...props}
            />
        </div>
    )
}

export default Input