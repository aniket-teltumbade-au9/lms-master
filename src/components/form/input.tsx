'use client';
import { Field, FieldInstanceBaseProps, useFormContext } from "houseform";
import React from "react";

interface InputProps extends FieldInstanceBaseProps {
    label?: string;
    error?: string[];
    className?: string;
    value?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    type: 'email' | 'password' | 'text' | 'number' | 'date' | 'file' | 'checkbox' | 'radio';
}
const UniInput = ({ label, className = '', error, ...props }: Readonly<InputProps>) => (
    <div className="flex flex-col gap-y-2">
        {label && <div className="text-[#E5E7EB] text-[18px]">{label}</div>}
        <input
            className={`w-full bg-[#ffffff10] border border-[#ffffff20] px-4 py-2 rounded-lg ${className}`}
            {...props}
        />
        {error && <div className="text-red-500">{error.join(', ')}</div>}
    </div>
)
function Input({
    name = '',
    onChangeValidate,
    ...props
}: InputProps) {
    const ctx = useFormContext();
    return ctx ? (
        <Field name={name} onChangeValidate={onChangeValidate}>
            {({ value, setValue, errors }) => (
                <UniInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={errors}
                    name={name}
                    {...props}
                />
            )}
        </Field>
    ) : (
        <UniInput name={name} {...props} />
    );
}

export default Input