import { courses } from '@/utils/info/courses'
import Card from './Card'

function CourseList() {
    return (
        <div className='flex sm:flex-col md:flex-row md:flex-wrap gap-4'>
            {courses.slice(0, 2).map((course, index) => (
                <div className='sm:w-full md:w-[49%]' key={index}>
                    <Card  {...course} />
                </div>
            ))}
        </div>
    )
}

export default CourseList