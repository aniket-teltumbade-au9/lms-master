"use client"
import CompletedCourse from "@/components/dashboard/student/Courses/CompletedCourses.tsx"
import Header from "@/components/dashboard/student/Courses/Header"
import CourseList from "@/components/dashboard/student/Courses/List/CourseList"
import Recommendation from "@/components/dashboard/student/Courses/Recommendation"

function Courses() {
    return (
        <div className="w-full flex flex-col gap-y-12">
            <Header />
            <CourseList />
            <CompletedCourse />
            <Recommendation />
        </div>)
}

export default Courses