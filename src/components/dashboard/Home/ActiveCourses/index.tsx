import { courses } from "@/utils/info/courses"
import Card from "./Card"

function ActiveCourses() {
    return (
        <div className='w-full flex flex-col gap-y-[1.625rem]'>
            <div className="w-full font-bold text-[1.25rem]">Active Courses</div>
            <div className="flex gap-x-6">
                {courses
                    .slice(0, 3)
                    .map((course, index) => (
                        <Card key={index} {...course} />
                    ))}
            </div>
        </div>
    )
}

export default ActiveCourses