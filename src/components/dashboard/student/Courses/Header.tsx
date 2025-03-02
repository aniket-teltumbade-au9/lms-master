import Button from '@/components/form/Button'
import Search from '@/components/form/search'
import Select from '@/components/form/select'

function Header() {
    return (
        <div className='w-full flex flex-col gap-y-[1.375rem]'>
            <div className="font-bold text-[36px] leading-[44px]">My Courses</div>
            <div className='w-full flex sm:flex-col md:flex-row gap-4 '>
                <div className="sm:w-full md:w-[60%]">
                    <Search placeholder='Search for a course...' />
                </div>
                <div className="sm:w-full md:w-[40%] flex sm:flex-col md:flex-row gap-4">
                    <Select options={[]} label={'Latest'} />
                    <Select options={[]} label={'All Categories'} />
                    <Button label='Active Courses' />
                </div>
            </div>
        </div>
    )
}

export default Header