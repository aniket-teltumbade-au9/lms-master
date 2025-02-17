export type Testimonial = {
    quote: string;
    name: string;
    details: string;
};

const testimonials: Testimonial[] = [
    {
        quote: "This program transformed my career. The flexibility and quality of education exceeded my expectations.",
        name: "Sarah Johnson",
        details: "MBA Graduate, Class of 2025"
    },
    {
        quote: "The faculty was incredibly supportive, and the curriculum was designed to match industry standards.",
        name: "Michael Carter",
        details: "B.Tech Graduate, Class of 2024"
    },
    {
        quote: "I was able to balance my studies with work seamlessly thanks to the online learning options.",
        name: "Emily Davis",
        details: "M.Sc. Computer Science, Class of 2023"
    },
    {
        quote: "The networking opportunities through this program helped me land my dream job.",
        name: "David Lee",
        details: "BBA Graduate, Class of 2022"
    },
    {
        quote: "A truly world-class education experience that prepared me for real-world challenges.",
        name: "Sophia Martinez",
        details: "PhD in Data Science, Class of 2026"
    }
];

export default testimonials;
