
function Progress({ progress }: { progress: number }) {
    return (

        <div className="w-full bg-[#FFFFFF10] border border-[#E5E7EB] rounded-[9999px]">
            <div
                className="h-[0.5rem] bg-[#F59E0B] rounded-[9999px] transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}

export default Progress