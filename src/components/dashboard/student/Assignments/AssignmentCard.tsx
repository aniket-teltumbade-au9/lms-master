import Button from "@/components/form/Button"
type AssignMentCardProps = {
    title: string
    dueDate: string
    submissionDate?: string
    grade?: number
    buttonText: string
    color: string
}
function AssignMentCard({
    title,
    dueDate,
    submissionDate,
    grade,
    buttonText,
    color
}: AssignMentCardProps) {
    return (
        <div className="w-full p-4 flex justify-between rounded-xl bg-[#17255430]">
            <div className="flex flex-col gap-y-[10px]" >
                <div className="flex flex-col" >
                    <div className="text-[1rem] leading-[22px] text-[#E5E7EB] font-normal">{title}</div>
                    <div className="text-[0.875rem] leading-[19px] text-[#9CA3AF]">{submissionDate ? 'Submitted' : 'Due'} on {submissionDate ?? dueDate}</div>
                </div>
                <div>
                    {grade && <div className="text-[#34D399] leading-4 text-[1rem]">
                        Graded {grade}/100
                    </div>}
                </div>
            </div>
            <div>
                <Button label={buttonText} style={{ border: `1px solid ${color}`, backgroundColor: `${color}50`, color, height: '2.5rem' }} />
            </div>
        </div>
    )
}

export default AssignMentCard