import Button from '@/components/form/Button';
import Progress from '@/components/form/Progress';
import { Course } from '@/utils/info/courses';
import Image from 'next/image';
import { FaBook } from "react-icons/fa";
import { IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlineSchedule } from "react-icons/md";

function Card({ title,
    progress,
    nextClass,
    image }: Course) {
    return (
        <div className='w-full flex flex-col sm:p-2 md:p-6 gap-y-4 bg-[#FFFFFF10] rounded-[8px]'>
            <Image
                src={image}
                alt={title}
                width={0} // Auto width
                height={0} // Auto height
                layout="responsive" // Maintains aspect ratio
                className="rounded-[8px]"
            />
            <div className='flex flex-col gap-y-2'>
                <div className='font-bold text-[1.5rem] leading-[2rem] text-[#E5E7EB]'>
                    {title}
                </div>
                <div className='flex'>
                    <MdOutlineSchedule size={14} color='#9CA3AF' />
                    <div className='font-normal text-[0.875rem] text-[#9CA3AF] ml-2'>
                        Next class: {new Date(nextClass).toLocaleString()}
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col gap-[6px]'>
                <div className='flex justify-between'>
                    <div className='font-normal text-[14px] leading-[14px] text-[#E5E7EB]'>
                        Progress
                    </div>
                    <div className='font-normal text-[14px] leading-[14px] text-[#E5E7EB]'>
                        {progress}%
                    </div>
                </div>
                <Progress progress={progress} />
            </div>
            <div className='w-full flex gap-x-3'>
                <div className='flex flex-1'>
                    <Button label='Continue' style={{ height: '40px' }} />
                </div>
                <div className='p-3 rounded-lg bg-[#FFFFFF10]'>
                    <IoChatbubblesOutline size={16} />
                </div>
                <div className='p-3 rounded-lg bg-[#FFFFFF10]'>
                    <FaBook size={16} />
                </div>
            </div>
        </div>
    )
}

export default Card