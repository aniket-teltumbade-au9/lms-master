import React from "react";

interface Options {
    label: string;
    value: string;
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Options[];
    label: string;
}

function Select({ options, label, defaultValue = '', ...props }: Props) {
    return (
        <div className="relative inline-block sm:w-full">
            <select
                defaultValue={defaultValue}
                {...props}
                className="md:w-fit sm:w-full max-w-full h-[50px] bg-[#FFFFFF10] text-[#E5E7EB] placeholder-[#ADAEBC] rounded-lg pr-10 pl-4 focus:outline-none appearance-none"
            >
                <option value="" disabled className="text-[#ADAEBC]">
                    {label}
                </option>
                {options.map(({ label, value }) => (
                    <option key={value} value={value} className="text-[#E5E7EB]">
                        {label}
                    </option>
                ))}
            </select>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#FFFFFF10"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
    );
}

export default Select;
