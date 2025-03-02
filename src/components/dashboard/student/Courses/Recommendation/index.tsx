import { courses } from '@/utils/info/courses'
import Card from './Card'

function Recommendation() {
    return (
        <div className='w-full flex flex-col gap-y-[26px] pb-20'>
            <div className='font-bold text-[24px] leading-[29px] text-[#E5E7EB]'>Recommended For you</div>
            <div className='flex sm:flex-col md:flex-row md:flex-wrap gap-4 justify-between'>
                {courses.slice(0, 3).map((course, index) => (
                    <div className='sm:w-full md:w-[32%]' key={index}>
                        <Card  {...course} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recommendation