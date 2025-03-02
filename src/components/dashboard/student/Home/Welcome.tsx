import Input from "@/components/form/input"

function Welcome() {
    return (
        <div className="w-full">
            <div className="border border-[#FFFFFF10] rounded-2xl w-full p-4 md:p-[33px] flex flex-col md:flex-row bg-gradient-to-r from-[#1E40AF50] to-[#1E3A8A50] h-auto sm:gap-y-4">
                <div className="md:w-[52%] flex flex-col gap-y-3 md:gap-y-[10px]">
                    <div className="font-bold text-[26px] md:text-[30px] leading-[32px] md:leading-[36px] text-[#E5E7EB]">
                        Welcome back, John!
                    </div>
                    <div className="text-[18px] md:text-[20px] leading-[22px] md:leading-[24px] text-[#9CA3AF]">
                        Let{"'"}s continue your learning journey
                    </div>
                </div>

                <div className="md:w-[48%] flex flex-col md:flex-row gap-4 md:gap-x-4 items-center mt-4 md:mt-0">
                    <button className="bg-header rounded-lg font-medium text-white hover:bg-opacity-80 leading-[20px] transition duration-300 py-3 px-6 md:w-auto">
                        Resume Course
                    </button>
                    <div className="flex-1">
                        <Input className="w-full bg-[#ffffff10] border border-[#ffffff20] px-4 py-2 rounded-lg" placeholder="Search courses" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Welcome