import { Assignment } from '@/utils/info/assignements'

function AssignmentCard({
    title,
    dueDuration,
    subject,
    status,
}: Assignment) {
    return (
        <div className="bg-[#FFFFFF05] rounded-lg p-[1rem] flex flex-col gap-[3px]">
            <div className='flex sm:flex-col md:flex-row justify-between items-center'>
                <div className='font-semibold text-[1rem] text-[#E5E7EB]'>{title}</div>
                <div className='font-normal text-[1rem] text-[#F59E0B]'>{dueDuration}</div>
            </div>
            <div className='flex sm:flex-col md:flex-row justify-between items-center'>
                <div className='font-normal text-[0.875rem] text-[#9CA3AF]'>{subject}</div>
                <div className='font-normal text-[0.875rem] text-[#9CA3AF]'>{status}</div>
            </div>
        </div>
    )
}

export default AssignmentCard