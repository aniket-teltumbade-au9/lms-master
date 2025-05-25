import Input from '@/components/form/input';
import Select from '@/components/form/select';
import { ListContext } from '@/components/List/Provider';
import React from 'react';
const roleOptions = [
    { label: "Student", value: "student" },
    { label: "Teacher", value: "teacher" },
]
const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
]
function Filters() {
    const { setFilters = () => { } } = React.useContext(ListContext);
    return (
        <div className='w-full flex gap-x-1 gap-y-2'>
            <div className='flex-1'>
                <Input
                    placeholder='Search'
                    name='search'
                    type='text'
                    className='w-full bg-[#ffffff10] border border-[#ffffff20] rounded-lg'
                    handleChange={(val: string) => setFilters((filters) => (({ ...filters, name: new RegExp(val, "i") })))}
                />
            </div>
            <div className='flex-1'>
                <Select
                    options={roleOptions}
                    label='Role'
                    name='role'
                    className='w-full bg-[#ffffff10] border border-[#ffffff20] rounded-lg'
                    handleChange={(val) => setFilters((filters) => (({ ...filters, role: val })))}
                />
            </div>
            <div className='flex-1'>
                <Select
                    options={statusOptions}
                    label='Status'
                    name='status'
                    className='w-full bg-[#ffffff10] border border-[#ffffff20] px-4 py-2 rounded-lg'
                    handleChange={(val) => setFilters((filters) => (({ ...filters, status: val })))}
                />
            </div>
        </div>
    )
}

export default Filters