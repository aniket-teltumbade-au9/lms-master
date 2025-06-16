import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}
function Button({ label, className, ...props }: ButtonProps) {
    return (
        <button {...props} className={`bg-[#F59E0B] h-[50px] flex-1 rounded-[8px] text-[#000000] font-normal text-[16px] leading-[20px] px-4 ${className}`}>
            {label}
        </button>

    )
}

export default Button