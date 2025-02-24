export interface Course {
    title: string;
    progress: number;
    nextClass: Date;
    continueLink: string;
    materialLink: string;
}
export const courses: Course[] = [
    {
        title: "Data Structures & Algorithms",
        progress: 80.5,
        nextClass: new Date("2025-03-01T10:00:00"),
        continueLink: "https://lms.example.com/continue/dsa",
        materialLink: "https://lms.example.com/materials/dsa"
    },
    {
        title: "Operating Systems",
        progress: 65.0,
        nextClass: new Date("2025-03-02T14:00:00"),
        continueLink: "https://lms.example.com/continue/os",
        materialLink: "https://lms.example.com/materials/os"
    },
    {
        title: "Database Management Systems",
        progress: 72.3,
        nextClass: new Date("2025-03-03T09:30:00"),
        continueLink: "https://lms.example.com/continue/dbms",
        materialLink: "https://lms.example.com/materials/dbms"
    },
    {
        title: "Computer Networks",
        progress: 58.7,
        nextClass: new Date("2025-03-04T11:00:00"),
        continueLink: "https://lms.example.com/continue/cn",
        materialLink: "https://lms.example.com/materials/cn"
    },
    {
        title: "Artificial Intelligence",
        progress: 90.1,
        nextClass: new Date("2025-03-05T13:00:00"),
        continueLink: "https://lms.example.com/continue/ai",
        materialLink: "https://lms.example.com/materials/ai"
    }
];

