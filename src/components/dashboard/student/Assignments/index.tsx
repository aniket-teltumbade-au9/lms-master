import studentAssignments, { AssignmentStatus, AssignmentStatusKey, StudentAssignment } from '@/utils/info/studentAssignments';
import StatusCard from './StatusCard';

function Assignments() {

    const assignmentsObj = studentAssignments.reduce((acc: AssignmentStatus, assignment: StudentAssignment): AssignmentStatus => {
        acc[assignment.submissionStatus] = [...(acc[assignment.submissionStatus] || []), assignment]
        return acc
    }, {})

    const assignmetStutuses = Object.keys(assignmentsObj)

    return (
        <div className='w-full flex flex-col gap-y-8'>
            <div className="font-bold text-[36px] leading-[44px]">My Courses</div>
            <div className='w-full flex flex-col gap-y-6'>
                {assignmetStutuses.map((status: string, index: number) => (
                    <StatusCard
                        key={index}
                        status={status as AssignmentStatusKey}
                        assignments={assignmentsObj[status as AssignmentStatusKey]}
                    />
                ))}

            </div>
        </div>
    )
}

export default Assignments