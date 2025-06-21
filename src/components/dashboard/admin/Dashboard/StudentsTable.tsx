import { StatusBadge } from "./StatusBadge";

interface Student {
    name: string;
    email: string;
    course: string;
    status: "Active" | "Pending";
    avatarSrc: string;
}

export function StudentsTable() {
    const students: Student[] = [
        {
            name: "Sarah Johnson",
            email: "sarah.j@example.com",
            course: "Computer Science",
            status: "Active",
            avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/570bfe1e9406f753642573165b24500c480c1ec4?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f"
        },
        {
            name: "Michael Chen",
            email: "m.chen@example.com",
            course: "Data Science",
            status: "Pending",
            avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d397364753356ab67659a844a6343a8766d2cab?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f"
        },
        {
            name: "Emma Wilson",
            email: "e.wilson@example.com",
            course: "Business Admin",
            status: "Active",
            avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c7e0af730b3faee69778bf73f5d7d53dd2c042c?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f"
        }
    ];

    return (
        <section className="px-6 pt-6 pb-24 mx-auto w-full rounded-xl bg-white bg-opacity-10 max-md:px-5 max-md:mt-6 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between py-0.5 bg-black bg-opacity-0 max-md:max-w-full">
                <h2 className="text-xl font-bold leading-none text-gray-200">
                    Recent Students
                </h2>
                <button className="px-px pt-0.5 pb-2.5 text-base text-center text-amber-500 bg-black bg-opacity-0">
                    View All
                </button>
            </div>

            <div className="mt-6 bg-black bg-opacity-0 max-md:max-w-full">
                <table className="w-full text-base font-bold text-white whitespace-nowrap bg-black bg-opacity-0 max-md:max-w-full">
                    <thead>
                        <tr className="flex flex-wrap bg-black bg-opacity-0 max-md:max-w-full">
                            <th className="px-px pt-px pb-6 bg-black bg-opacity-0 max-md:pr-5 text-left">
                                Name
                            </th>
                            <th className="px-px pt-px pb-6 bg-black bg-opacity-0 max-md:pr-5 text-left">
                                Email
                            </th>
                            <th className="px-px pt-px pb-6 bg-black bg-opacity-0 max-md:pr-5 text-left">
                                Course
                            </th>
                            <th className="px-px pt-px pb-6 bg-black bg-opacity-0 max-md:pr-5 text-left">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody className="w-full text-sm text-black bg-black bg-opacity-0 max-md:max-w-full">
                        {students.map((student, index) => (
                            <tr key={index} className="flex flex-wrap bg-black bg-opacity-0 max-md:max-w-full">
                                <td className="flex flex-col justify-center px-px py-4 leading-none bg-black bg-opacity-0">
                                    <div className="flex gap-3 bg-black bg-opacity-0">
                                        <img
                                            src={student.avatarSrc}
                                            className="object-contain shrink-0 w-8 rounded-full aspect-square"
                                            alt={`${student.name} avatar`}
                                        />
                                        <div className="grow shrink my-auto w-[148px] text-white">
                                            {student.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="px-px py-7 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5 text-white">
                                    {student.email}
                                </td>
                                <td className="px-px py-7 bg-black bg-opacity-0 max-md:pr-5 text-white">
                                    {student.course}
                                </td>
                                <td className="flex flex-col justify-center items-start px-px py-5 whitespace-nowrap bg-black bg-opacity-0">
                                    <StatusBadge status={student.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
