import React from 'react'

function Section({ children, title }: Readonly<{ children: React.ReactNode, title: string }>) {
    return (
        <div className='w-full flex flex-col items-center gap-y-16 sm:p-4 md:p-20'>
            <div className='font-bold text-[36px] leading-[36px] md:text-center'>{title}</div>
            {children}
        </div>
    )
}

export default Section