// import ComingSoon from "@/components/comingSoon"

import LMSCalendar from "@/components/dashboard/student/Home/schedule/Calendar"
import classSchedule from "@/utils/info/classSchedule"

function Home() {
    return (
        <div className='w-full flex flex-col gap-y-[1.375rem]'>
            <div className="font-bold text-[36px] leading-[44px]">Class Schedule</div>
            {/* <ComingSoon /> */}
            <LMSCalendar events={classSchedule} />
        </div>
    )
}

export default Home