import { FaCheck } from "react-icons/fa";

function Card() {
    return (
        <div className='w-full flex p-4 bg-[#FFFFFF10] rounded-lg items-center gap-x-4'>
            <div className='w-[30px] h-[30px] flex justify-center items-center bg-[#10B98120]'>
                <FaCheck size={10} color="#10B981" />
            </div>
            <div className='flex flex-col gap-y-[3px]'>
                <div className='font-semibold text-[1rem] text-[#E5E7EB]'>
                    Introduction to Python
                </div>
                <div className='font-normal text-[0.875rem] text-[#9CA3AF]'>Completed on Jan 15, 2025</div>
            </div>
        </div>
    )
}

export default Card