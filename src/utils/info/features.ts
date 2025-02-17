import { FiUsers, FiBriefcase, FiGlobe, FiTool } from "react-icons/fi";
import { FaAward, FaBookOpenReader } from "react-icons/fa6";

export type Feature = {
    title: string;
    description: string;
    Icon: React.ComponentType<{ className?: string }>;
};

const features: Feature[] = [
    {
        title: "Accredited Courses",
        description: "Recognized globally by leading institutions and employers",
        Icon: FaAward, // Use component reference
    },
    {
        title: "Flexible Study",
        description: "Choose between online, offline, or hybrid learning modes",
        Icon: FaBookOpenReader,
    },
    {
        title: "Expert-led",
        description: "Industry-backed curriculum designed by leading experts",
        Icon: FiUsers,
    },
    {
        title: "Career Support",
        description: "Guidance and resources to help you land your dream job",
        Icon: FiBriefcase,
    },
    {
        title: "Global Community",
        description: "Join a network of learners and professionals worldwide",
        Icon: FiGlobe,
    },
    {
        title: "Digital Tools",
        description: "Access cutting-edge technology and resources for enhanced learning",
        Icon: FiTool,
    },
];

export default features;
