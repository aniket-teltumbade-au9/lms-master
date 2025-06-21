
interface ActionItem {
    title: string;
    count: number;
    description: string;
    type: "warning" | "danger";
}

export function PendingActions() {
    const actions: ActionItem[] = [
        {
            title: "Assignments Review",
            count: 132,
            description: "Instructor approval pending",
            type: "warning"
        },
        {
            title: "Course Approvals",
            count: 45,
            description: "Review required",
            type: "warning"
        },
        {
            title: "Flagged Posts",
            count: 8,
            description: "Moderation needed",
            type: "danger"
        }
    ];

    return (
        <aside className="grow p-6 w-full rounded-xl bg-white bg-opacity-10 max-md:px-5 max-md:mt-6">
            <h2 className="py-1 text-xl font-bold text-gray-200 bg-black bg-opacity-0 max-md:pr-5">
                Pending Actions
            </h2>

            <div className="mt-6 bg-black bg-opacity-0">
                {actions.map((action, index) => (
                    <article
                        key={index}
                        className={`p-4 w-full rounded-lg bg-white bg-opacity-10 ${index > 0 ? 'mt-4' : ''}`}
                    >
                        <div className={`flex gap-5 justify-between bg-black bg-opacity-0 ${action.type === "danger" ? "text-red-500" : "text-amber-500"
                            }`}>
                            <h3 className="text-base leading-none">
                                {action.title}
                            </h3>
                            <span className={`px-2 pt-1.5 pb-3.5 text-sm whitespace-nowrap rounded-full ${action.type === "danger"
                                ? "bg-red-500 bg-opacity-20"
                                : "bg-amber-500 bg-opacity-20"
                                }`}>
                                {action.count}
                            </span>
                        </div>
                        <p className="py-1 mt-2 text-sm text-white bg-black bg-opacity-0 max-md:pr-5">
                            {action.description}
                        </p>
                    </article>
                ))}
            </div>
        </aside>
    );
}
