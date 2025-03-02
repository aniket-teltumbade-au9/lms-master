import { FaCheckCircle, FaClock, FaExclamationTriangle, FaHourglassHalf, FaStar } from "react-icons/fa";
// Define the Assignment Type
export type StudentAssignment = {
    id: number;
    title: string;
    course: string;
    dueDate: string; // UTC Date String
    submissionDate?: string; // UTC Date String (if submitted)
    submissionStatus: "Overdue" | "Upcoming" | "Pending" | "Submitted" | "Graded";
    instructor: string;
    submissionType: "File Upload" | "Text Entry" | "Code Submission";
    grade?: number; // Float percentage (if graded)
    feedback?: string; // Instructor comments
    resubmissionAllowed: boolean;
};
type StatusInfo = {
    [key in StudentAssignment["submissionStatus"]]: {
        Icon: React.ComponentType<{ className?: string, size?: number, color?: string }>;
        color: string;
        buttonText: string;
    };
}

export interface AssignmentStatus {
    Overdue?: StudentAssignment[];
    Upcoming?: StudentAssignment[];
    Pending?: StudentAssignment[];
    Submitted?: StudentAssignment[];
    Graded?: StudentAssignment[];
}
export type AssignmentStatusKey = keyof AssignmentStatus;
// Status to Icon Mapping
export const statusInfo: StatusInfo = {
    Overdue: { Icon: FaExclamationTriangle, buttonText: 'Submit now', color: '#F87171' },
    Upcoming: { Icon: FaClock, buttonText: 'Submit', color: '#FBBF24' },
    Pending: { Icon: FaHourglassHalf, buttonText: 'View Details', color: '#34D399' },
    Submitted: { Icon: FaCheckCircle, buttonText: 'Resubmit', color: '#60A5FA', },
    Graded: { Icon: FaStar, buttonText: 'Graded', color: '#60A5FA' },
};
// Assignments Data
const assignments: StudentAssignment[] = [
    // 🟥 Overdue Assignments (Missed Deadline)
    {
        id: 1,
        title: "Data Structures & Algorithms - Week 3",
        course: "Computer Science 101",
        dueDate: "2024-02-20T23:59:59Z",
        submissionStatus: "Overdue",
        instructor: "Prof. John Doe",
        submissionType: "File Upload",
        resubmissionAllowed: true
    },

    // 🟡 Upcoming Assignments (Due Soon)
    {
        id: 2,
        title: "Marketing Strategy Report",
        course: "Business Administration",
        dueDate: "2024-03-05T23:59:59Z",
        submissionStatus: "Upcoming",
        instructor: "Dr. Lisa Carter",
        submissionType: "Text Entry",
        resubmissionAllowed: false
    },

    {
        id: 3,
        title: "Linear Algebra Homework",
        course: "Mathematics 201",
        dueDate: "2024-03-07T23:59:59Z",
        submissionStatus: "Upcoming",
        instructor: "Dr. James Smith",
        submissionType: "File Upload",
        resubmissionAllowed: true
    },

    // 🟢 Pending Assignments (Assigned but Not Submitted)
    {
        id: 4,
        title: "Physics Lab Report",
        course: "Physics 102",
        dueDate: "2024-03-10T23:59:59Z",
        submissionStatus: "Pending",
        instructor: "Prof. Albert Newton",
        submissionType: "File Upload",
        resubmissionAllowed: false
    },

    {
        id: 5,
        title: "History Research Paper",
        course: "World History",
        dueDate: "2024-03-12T23:59:59Z",
        submissionStatus: "Pending",
        instructor: "Dr. Henry Ford",
        submissionType: "Text Entry",
        resubmissionAllowed: true
    },

    // 🔵 Submitted Assignments (Waiting for Grading)
    {
        id: 6,
        title: "Software Engineering Case Study",
        course: "Software Engineering",
        dueDate: "2024-02-25T23:59:59Z",
        submissionDate: "2024-02-24T15:30:00Z",
        submissionStatus: "Submitted",
        instructor: "Prof. Sarah Williams",
        submissionType: "File Upload",
        feedback: "Awaiting grading",
        resubmissionAllowed: false
    },

    // ✅ Graded Assignments (Completed with Grades & Feedback)
    {
        id: 7,
        title: "Machine Learning Project",
        course: "Artificial Intelligence",
        dueDate: "2024-02-15T23:59:59Z",
        submissionDate: "2024-02-14T14:45:00Z",
        submissionStatus: "Graded",
        instructor: "Dr. Emily Zhang",
        submissionType: "File Upload",
        grade: 88.5,
        feedback: "Good work! Try improving feature selection for better accuracy.",
        resubmissionAllowed: false
    },

    {
        id: 8,
        title: "Ethical Hacking Report",
        course: "Cybersecurity",
        dueDate: "2024-02-10T23:59:59Z",
        submissionDate: "2024-02-09T18:10:00Z",
        submissionStatus: "Graded",
        instructor: "Prof. David Miller",
        submissionType: "Text Entry",
        grade: 95.2,
        feedback: "Excellent research and practical demonstration.",
        resubmissionAllowed: false
    },

    {
        id: 9,
        title: "Database Normalization Exercise",
        course: "Database Systems",
        dueDate: "2024-02-05T23:59:59Z",
        submissionDate: "2024-02-04T10:20:00Z",
        submissionStatus: "Graded",
        instructor: "Dr. Olivia Carter",
        submissionType: "File Upload",
        grade: 76.4,
        feedback: "Needs better explanations in normalization steps.",
        resubmissionAllowed: true
    }
];

export default assignments;
