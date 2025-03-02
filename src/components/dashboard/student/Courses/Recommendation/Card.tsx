import Button from '@/components/form/Button';
import { Course } from '@/utils/info/courses';
import Image from 'next/image';

function Card({ title,
    recommendation,
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
            <div className='flex flex-col gap-y-[3px]'>
                <div className='font-semibold text-4 laeding-5 text-[#E5E7EB]'>{title}</div>
                <div className='font-normal text-[0.875rem] text-[#9CA3AF]'>{recommendation}</div>
            </div>
            <Button label={'Enroll now'} />
        </div>
    )
}

export default Card