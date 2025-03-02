import Card from './Card'

function CompletedCourse() {
    return (
        <div className='w-full flex flex-col gap-y-[26px]'>
            <div className='font-bold text-[24px] leading-[29px] text-[#E5E7EB]'>Completed Courses</div>
            <div className='w-full flex flex-col gap-y-2'>
                <Card />
            </div>
        </div>
    )
}

export default CompletedCourse