"use client"
import { getRoleFromPath } from '@/utils/function/getRoleFromPath'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiBookOpen, BiCalendar, BiHome, BiUser } from "react-icons/bi"
import { LiaListAlt } from "react-icons/lia"
import { MdAssignment, MdClass } from "react-icons/md"
import { PiGraduationCapDuotone } from "react-icons/pi"

interface LayoutProps {
    children: React.ReactNode
}

const sidebarItems = {
    student: [
        { Icon: BiHome, text: "Dashboard", link: "home" },
        { Icon: PiGraduationCapDuotone, text: "Courses", link: "courses" },
        { Icon: LiaListAlt, text: "Assignments", link: "assignments" },
        { Icon: BiCalendar, text: "Schedule", link: "schedule" },
    ],
    admin: [
        { Icon: BiHome, text: "Dashboard", link: "home" },
        { Icon: BiUser, text: "Users", link: "users" },
        { Icon: BiBookOpen, text: "Courses", link: "courses" },
        { Icon: MdAssignment, text: "Assignments", link: "assignments" },
        { Icon: MdClass, text: "Classes", link: "classes" },
    ],
    unknown: [],
};

function Layout({ children }: LayoutProps) {
    const pathname = usePathname(); // Get current route
    const role = getRoleFromPath(pathname)
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='md:flex md:flex-col sm:hidden md:w-[20vw] h-full bg-[#1E3A8A40] border border-[#FFFFFF10] p-6 gap-y-8'>
                <div className='w-full flex gap-x-4 border-b border-[#FFFFFF10] pb-6'>
                    <Image
                        src="/assets/images/img_1.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        className='rounded-full'
                    />
                    <div className='p-y-[6px]'>
                        <div className='text-[#E5E7EB] text-[14px] font-semibold'>
                            John Doe
                        </div>
                        <div className='text-[#9CA3AF] text-[12px]'>
                            Tech Computer Science
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-y-1'>
                    {sidebarItems[role].map(({ Icon, text, link }, index) => (
                        <Link
                            href={`/dashboard/${role}/${link}`}
                            key={index}
                            className={`w-full flex px-3 py-4 gap-x-4 ${pathname === `/dashboard/${role}/${link}` ? 'bg-[#F59E0B10] text-header rounded-lg' : ''}`}>
                            <Icon className='text-[20px]' />
                            <div className='text-[16px]'>{text}</div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex sm:w-full md:w-[80vw] h-full p-2 md:p-8'>{children}</div>
        </div>
    )
}

export default Layout