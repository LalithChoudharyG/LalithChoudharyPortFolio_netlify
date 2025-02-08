import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    python,
    django,
    silentalk,
    IAGPS,
    EDB,
} from "../assets";

export const navLinks = [
    { id: "about", title: "About" },
    { id: "works", title: "Projects" },
    { id: "contact", title: "Contact" },
];

const services = [
    { title: "Web Developer", icon: web },
    { title: "React Native Developer", icon: mobile },
    { title: "AI/ML Enthusiast", icon: backend },
    { title: "Content Creator", icon: creator },
];

const technologies = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "React JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "Three JS", icon: threejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Django", icon: django },
    { name: "git", icon: git },
    { name: "docker", icon: docker },
    { name: "Python", icon: python },
];

const testimonials = [
    {
        testimonial: "He built a beautiful, mobile-friendly website for my café!",
        name: "Aadvik",
        company: "Cafe A'",
    },
    {
        testimonial: "He is my go-to for coding advice. His passion and expertise are truly inspiring!",
        name: "Chris",
        company: "SHU",
    },
    {
        testimonial: "I've known Lalith for years, and his passion for web development is unmatched. Whether it's crafting clean, efficient code or staying up-to-date with the latest tech trends, he always goes the extra mile!",
        name: "Hansh",
        company: "TCS",
    },
];

const projects = [
    {
        subheading: "YOLO-Powered Sign Language Translator",
        name: "SilenTalk",
        description: "A web-based platform that enables real-time translation of sign language gestures into text and audio, bridging the communication gap for hearing-impaired individuals. This project utilizes advanced computer vision techniques, including YOLOv5, to accurately interpret gestures.",
        tags: [
            { name: "bootstrap", color: "blue-text-gradient" },
            { name: "Django", color: "green-text-gradient" },
            { name: "Python", color: "pink-text-gradient" },
            { name: "Computer Vision", color: "orange-text-gradient" },
            { name: "YOLOv5", color: "blue-text-gradient" },
        ],
        image: silentalk,
        source_code_link: "https://github.com/LalithChoudharyG/INTUITIVE-AUGMENTED-GRAPHICAL-PASSWORD-AUTHENTICATION-SYSTEM",
    },
    {
        subheading: "Database Solution for E-Sports",
        name: "E-Sports Tournament Management System",
        description: "A comprehensive database solution designed for managing E-sports tournaments. It ensures data integrity and scalability while showcasing expertise in database modeling and normalization techniques (4NF). This project addresses key challenges in structuring and analyzing E-sports data.",
        tags: [
            { name: "MySql", color: "blue-text-gradient" },
            { name: "EER", color: "green-text-gradient" },
        ],
        image: EDB,
        source_code_link: "https://github.com/LalithChoudharyG/E-Sports_Tournament_Management_System_ESTMS",
    },
    {
        subheading: "Graphical Password Authentication",
        name: "Intuitive Augmented Graphical Password Authentication System",
        description: "This innovative project enhances user authentication through the use of graphical passwords and the SURF algorithm for feature extraction. It offers a fast, user-friendly, and secure alternative to traditional text-based passwords, improving overall security.",
        tags: [
            { name: "Django", color: "blue-text-gradient" },
            { name: "SURF algorithm", color: "green-text-gradient" },
            { name: "python", color: "pink-text-gradient" },
            { name: "Vite", color: "orange-text-gradient" },
        ],
        image: IAGPS,
        source_code_link: "https://github.com/LalithChoudharyG/INTUITIVE-AUGMENTED-GRAPHICAL-PASSWORD-AUTHENTICATION-SYSTEM",
    },
];

export { services, technologies, testimonials, projects };
