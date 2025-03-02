import { courses } from "@/utils/info/courses"
import Card from "./Card"

function ActiveCourses() {
    return (
        <div className='w-full flex flex-col gap-y-[1.625rem]'>
            <div className="w-full font-bold text-[1.25rem]">Active Courses</div>
            <div className="flex sm:flex-col md:flex-row gap-x-6 gap-y-4">
                {courses
                    .slice(0, 3)
                    .map((course, index) => (
                        <div key={index} className="sm:w-full md:w-1/3">
                            <Card {...course} />
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default ActiveCourses