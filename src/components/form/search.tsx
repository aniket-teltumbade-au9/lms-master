import React from 'react'

function Search(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search..."
                className="w-full h-[50px] bg-[#FFFFFF10] text-[#E5E7EB] placeholder-[#ADAEBC] rounded-lg pl-12 pr-4 focus:outline-none"
                {...props}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#FFFFFF10"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M16.65 10.65a6 6 0 1 0-8.49 8.49 6 6 0 0 0 8.49-8.49z"
                />
            </svg>
        </div>

    )
}

export default Search