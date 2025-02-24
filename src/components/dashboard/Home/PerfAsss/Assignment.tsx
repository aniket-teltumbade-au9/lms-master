import { assignments } from "@/utils/info/assignements"
import AssignmentCard from "./AssignmentCard"

function Assignment() {
    return (
        <div className='flex flex-col gap-y-6 bg-[#1E40AF30]  rounded-xl p-[1.5625rem] w-full md:w-[1/2]'>
            <div className="font-bold text-[1.25rem] leading-[1.25rem] text-[#E5E7EB]">Assignments</div>
            <div className="flex flex-col w-full gap-y-4">
                {assignments.slice(0, 2).map((assignment, index) => (
                    <AssignmentCard key={index} {...assignment} />
                ))}
            </div>
        </div>
    )
}

export default Assignment