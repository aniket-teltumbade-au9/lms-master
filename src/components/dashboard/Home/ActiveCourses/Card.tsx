import LinkButton from "@/components/form/LinkButton"
import { Course } from "@/utils/info/courses"

function Card({
    title,
    progress,
    nextClass,
    continueLink,
    materialLink,
}: Course) {
    return (
        <div className="flex flex-col gap-4 bg-[#1E40AF30] border border-[#FFFFFF10] rounded-xl p-[1.5625rem] w-full md:w-1/3">
            <div className="w-full flex justify-between">
                <div className='font-semibold text-[#E5E7EB] text-[1rem] leading-[1rem]'>{title}</div>
                <div className="font-normal text-[#F59E0B] text-[1rem] leading-[1rem]">{progress}%</div>
            </div>
            <div className="w-full bg-[#FFFFFF10] border border-[#E5E7EB] rounded-[9999px]">
                <div
                    className="h-[0.5rem] bg-[#F59E0B] rounded-[9999px] transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="w-full font-normal text-[0.875rem] text-[#9CA3AF]">
                Next Class: {new Date(nextClass).toLocaleString()}
            </div>
            <div className="flex gap-x-2">
                <LinkButton href={continueLink}>Continue</LinkButton>
                <LinkButton href={materialLink}>Materials</LinkButton>
            </div>
        </div>
    )
}

export default Card