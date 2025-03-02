export interface Course {
    title: string;
    progress: number;
    nextClass: Date;
    continueLink: string;
    materialLink: string;
    image: string;
    recommendation: string;
}
export const courses: Course[] = [
    {
        title: "Data Structures & Algorithms",
        progress: 80.5,
        nextClass: new Date("2025-03-01T10:00:00"),
        continueLink: "https://lms.example.com/continue/dsa",
        materialLink: "https://lms.example.com/materials/dsa",
        image: "https://res.cloudinary.com/dry6lyjyx/image/upload/v1740867579/ilp3acr3hr0p8sff1gpv.png",
        recommendation: "Perfect next step after ML 101"
    },
    {
        title: "Operating Systems",
        progress: 65.0,
        nextClass: new Date("2025-03-02T14:00:00"),
        continueLink: "https://lms.example.com/continue/os",
        materialLink: "https://lms.example.com/materials/os",
        image: "https://res.cloudinary.com/dry6lyjyx/image/upload/v1740867579/ilp3acr3hr0p8sff1gpv.png",
        recommendation: "Great for deepening system-level understanding"
    },
    {
        title: "Database Management Systems",
        progress: 72.3,
        nextClass: new Date("2025-03-03T09:30:00"),
        continueLink: "https://lms.example.com/continue/dbms",
        materialLink: "https://lms.example.com/materials/dbms",
        image: "https://res.cloudinary.com/dry6lyjyx/image/upload/v1740867579/ilp3acr3hr0p8sff1gpv.png",
        recommendation: "Essential for backend developers & data engineers"
    },
    {
        title: "Computer Networks",
        progress: 58.7,
        nextClass: new Date("2025-03-04T11:00:00"),
        continueLink: "https://lms.example.com/continue/cn",
        materialLink: "https://lms.example.com/materials/cn",
        image: "https://res.cloudinary.com/dry6lyjyx/image/upload/v1740867579/ilp3acr3hr0p8sff1gpv.png",
        recommendation: "Must-have for aspiring network engineers & security experts"
    },
    {
        title: "Artificial Intelligence",
        progress: 90.1,
        nextClass: new Date("2025-03-05T13:00:00"),
        continueLink: "https://lms.example.com/continue/ai",
        materialLink: "https://lms.example.com/materials/ai",
        image: "https://res.cloudinary.com/dry6lyjyx/image/upload/v1740867579/ilp3acr3hr0p8sff1gpv.png",
        recommendation: "A crucial course after mastering Machine Learning"
    }
];

export default courses;


