import { AssignmentStatusKey, statusInfo, StudentAssignment } from "@/utils/info/studentAssignments"
import AssignMentCard from "./AssignmentCard"

function StatusCard({ status, assignments = [] }: { status: AssignmentStatusKey, assignments?: StudentAssignment[] }) {
    const { Icon, color, buttonText } = statusInfo[status]
    return (
        <div
            className="w-full flex flex-col gap-y-4 p-6 rounded-[12px]"
            style={{ backgroundColor: `${color}10`, border: `1px solid ${color}30` }}>
            <div className="w-full flex gap-x-2 items-center">
                <Icon size={20} color={color} />
                <div className={`font-normal text-[${color}] leading-[27px] text-[20px]`}>{status}</div>
            </div>
            <div className="w-full flex flex-col gap-y-2">
                {assignments.map((assignment, index) => (
                    <AssignMentCard
                        key={index}
                        buttonText={buttonText}
                        color={color}
                        dueDate={assignment.dueDate}
                        title={assignment.title}
                        submissionDate={assignment.submissionDate}
                        grade={assignment.grade}
                    />
                ))}
            </div>
        </div>
    )
}

export default StatusCard