"use client"
import { getRoleFromPath } from '@/utils/function/getRoleFromPath'
import { signOut, useSession } from 'next-auth/react'
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
const hSignOut = () => {
    const cnfrm = confirm("Are you sure you want to logout?");
    if (cnfrm) signOut()
}
const colors: Record<string, { background: string, color: string }> = {
    "A": { "background": "00ffff", "color": "ff1493" },
    "B": { "background": "000000", "color": "00ffff" },
    "C": { "background": "d2691e", "color": "00ffff" },
    "D": { "background": "d2b6be", "color": "008080" },
    "E": { "background": "a26c36", "color": "00ced1" },
    "F": { "background": "f2e6dd", "color": "0066ff" },
    "G": { "background": "00ff00", "color": "8a2be2" },
    "H": { "background": "ae8934", "color": "00bfff" },
    "I": { "background": "4b0082", "color": "00ff7f" },
    "J": { "background": "fff4bb", "color": "ff4500" },
    "K": { "background": "749e4e", "color": "ff69b4" },
    "L": { "background": "fff700", "color": "8a2be2" },
    "M": { "background": "ff00ff", "color": "00ffff" },
    "N": { "background": "929292", "color": "00fa9a" },
    "O": { "background": "ffa500", "color": "0066ff" },
    "P": { "background": "ffc0cb", "color": "6a5acd" },
    "Q": { "background": "96838b", "color": "32cd32" },
    "R": { "background": "ff0000", "color": "00ffff" },
    "S": { "background": "f4c430", "color": "0000ff" },
    "T": { "background": "008080", "color": "ff8c00" },
    "U": { "background": "1805db", "color": "ffeb3b" },
    "V": { "background": "9a0eea", "color": "00ff7f" },
    "W": { "background": "ffffff", "color": "ff1493" },
    "X": { "background": "847e54", "color": "00ced1" },
    "Y": { "background": "ffff00", "color": "ff00ff" },
    "Z": { "background": "92898a", "color": "00bfff" }
}


function Layout({ children }: LayoutProps) {
    const pathname = usePathname(); // Get current route
    const role = getRoleFromPath(pathname)
    const { data: session } = useSession()
    const { name = "Anonymous", role: mainRole, image } = session?.user || {}
    const { background, color } = colors[(name).charAt(0).toUpperCase()]
    const imageName = name.replace(/ /g, '+')
    const placeholderImage = image ? image : `https://ui-avatars.com/api/?background=${background}&color=${color}&name=${imageName}`
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='md:flex md:flex-col sm:hidden md:w-[20vw] h-full bg-[#1E3A8A40] border border-[#FFFFFF10] p-6 gap-y-8'>
                <div className='w-full flex gap-x-4 border-b border-[#FFFFFF10] pb-6'>
                    <Image
                        src={placeholderImage}
                        alt="Logo"
                        width={48}
                        height={48}
                        className='rounded-full'
                    />
                    <div className='p-y-[6px]'>
                        <div className='text-[#E5E7EB] text-[14px] font-semibold'>
                            {name}
                        </div>
                        <div className='text-[#9CA3AF] text-[12px]'>
                            {(mainRole ?? "").toUpperCase()}
                        </div>
                    </div>
                </div>
                <div className='w-full border-b border-[#FFFFFF10] pb-1'>
                    <button onClick={hSignOut} className="w-full bg-yellow-500 text-blue-900 font-semibold py-2 rounded-lg">
                        Logout
                    </button>
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