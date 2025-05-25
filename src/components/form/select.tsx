"use client"
import { Field, useFormContext } from "houseform";
import React from "react";
import { ZodDefault, ZodEnum, ZodTypeAny } from "zod";

interface Options {
    label: string;
    value: string;
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: Options[];
    label: string;
    inputLabel?: string;
    error?: string[]
    onChangeValidate?: ZodTypeAny | ZodDefault<ZodEnum<["teacher", "student"]>>
    fullWidth?: boolean
    handleChange?: (value: unknown) => void
}
function UniSelect({ options, label, inputLabel, className = '', fullWidth = false, ...props }: Props) {
    return (
        <div className={fullWidth ? "flex flex-col gap-y-2" : `relative inline-block sm:w-full`}>
            {inputLabel && <div className="text-[#E5E7EB] text-[18px]">{inputLabel}</div>}
            <select
                className={`${className ?? 'md:w-fit sm:w-full max-w-full'} h-[42px] bg-[#FFFFFF10] text-[#E5E7EB] placeholder-[#ADAEBC] rounded-lg pr-10 pl-4 focus:outline-none appearance-none`}
                {...props}
            >
                {label && <option value="" disabled className="text-[#ADAEBC]">
                    {label}
                </option>}
                {options.map(({ label, value }) => (
                    <option style={{ color: '#E5E7EB', backgroundColor: '#172554' }} key={value} value={value} className="text-[#E5E7EB]">
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
    )
}
function Select({ onChangeValidate, defaultValue = '', name = '', handleChange, ...props }: Props) {
    const ctx = useFormContext();

    return ctx ? (
        <Field name={name} onChangeValidate={onChangeValidate}>
            {({ value, setValue, errors }) => (
                <UniSelect
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                        if (handleChange) handleChange(e.target.value)
                    }}
                    error={errors}
                    {...props}
                />
            )}
        </Field>
    ) : (
        <UniSelect defaultValue={defaultValue} name={name} {...props} />
    );
}

export default Select;

