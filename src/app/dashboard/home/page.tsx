import ActiveCourses from "@/components/dashboard/Home/ActiveCourses"
import PerfAss from "@/components/dashboard/Home/PerfAsss"
import Welcome from "@/components/dashboard/Home/Welcome"

function Home() {
    return (
        <div className="w-full h-auto flex flex-col gap-y-8">
            <Welcome />
            <ActiveCourses />
            <PerfAss />
        </div>
    )
}

export default Home