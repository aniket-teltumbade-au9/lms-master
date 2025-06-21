
interface StatusBadgeProps {
    status: "Active" | "Pending";
}

export function StatusBadge({ status }: StatusBadgeProps) {
    const isActive = status === "Active";

    return (
        <span className={`px-2 pt-1 pb-2.5 rounded-full ${isActive
            ? "text-emerald-500 bg-emerald-500 bg-opacity-20"
            : "text-amber-500 bg-amber-500 bg-opacity-20"
            }`}>
            {status}
        </span>
    );
}
