import Input from '@/components/form/input'
import { ListForm } from '@/components/List/Form'

function CourseForm() {
  return (
    <ListForm>
      <h1 className='text-2xl font-bold'>Add Course</h1>
      <Input placeholder='Course Name' name='name' type='text' />
      <Input placeholder='Course Code' name='code' type='text' />
      <Input placeholder='Course Description' name='description' type='text' />
      <div className='flex justify-end'>
        <Input type='date' name='start_date' />
        <Input type='date' name='end_date' />
      </div>
    </ListForm>
  )
}

export default CourseForm