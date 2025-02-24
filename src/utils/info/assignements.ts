export interface Assignment {
    title: string;
    dueDuration: string; // Example: "2 days left"
    subject: string;
    status: "Pending" | "Completed" | "Overdue"; // Status options
}

export const assignments: Assignment[] = [
    {
        title: "Sorting Algorithms Analysis",
        dueDuration: "2 days left",
        subject: "Data Structures & Algorithms",
        status: "Pending"
    },
    {
        title: "Process Synchronization Report",
        dueDuration: "5 hours left",
        subject: "Operating Systems",
        status: "Overdue"
    },
    {
        title: "SQL Query Optimization",
        dueDuration: "1 day left",
        subject: "Database Management Systems",
        status: "Pending"
    },
    {
        title: "Network Security Protocols",
        dueDuration: "Completed",
        subject: "Computer Networks",
        status: "Completed"
    },
    {
        title: "AI Ethics and Bias Paper",
        dueDuration: "4 days left",
        subject: "Artificial Intelligence",
        status: "Pending"
    }
];

