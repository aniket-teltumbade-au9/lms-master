
function Performance() {
    return (
        <div className='flex flex-col gap-y-6 bg-[#1E40AF30]  rounded-xl p-[1.5625rem] w-full md:w-[1/2]'>
            <div className="font-bold text-[1.25rem] leading-[1.25rem] text-[#E5E7EB]">Assignments</div>
            <div className="flex flex-row w-full justify-between">
                <div className="flex flex-col sm:w-full md:w-[1/3]">
                    <div className="font-bold text-[#F59E0B] text-[36px] leading-[44px]">3.8</div>
                    <div className="font-normal text-[14px] leading-[14px] text-[#9CA3AF]">Current GPA</div>
                </div>
                <div className="flex flex-col sm:w-full md:w-[1/3]">
                    <div className="font-bold text-[#F59E0B] text-[36px] leading-[44px]">85%</div>
                    <div className="font-normal text-[14px] leading-[14px] text-[#9CA3AF]">Attendance</div>
                </div>
                <div className="flex flex-col sm:w-full md:w-[1/3]">
                    <div className="font-bold text-[#F59E0B] text-[36px] leading-[44px]">92%</div>
                    <div className="font-normal text-[14px] leading-[14px] text-[#9CA3AF]"> Completion</div>
                </div>
            </div>
        </div>
    )
}

export default Performance