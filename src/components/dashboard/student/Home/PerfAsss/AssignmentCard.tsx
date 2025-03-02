import { Assignment } from '@/utils/info/assignements'

function AssignmentCard({
    title,
    dueDuration,
    subject,
    status,
}: Assignment) {
    return (
        <div className="w-full bg-[#FFFFFF05] rounded-lg p-[1rem] flex justify-between">
            {/* Left Section (Title & Subject) */}
            <div className="flex flex-col justify-between gap-[3px]">
                <div className="font-semibold text-[1rem] text-[#E5E7EB]">{title}</div>
                <div className="font-normal text-[0.875rem] text-[#9CA3AF]">{subject}</div>
            </div>

            {/* Right Section (Due Duration & Status) */}
            <div className="flex flex-col justify-between gap-[3px] text-right ml-auto">
                <div className="font-normal text-[1rem] text-[#F59E0B]">{dueDuration}</div>
                <div className="font-normal text-[0.875rem] text-[#9CA3AF]">{status}</div>
            </div>
        </div>
    )
}

export default AssignmentCard