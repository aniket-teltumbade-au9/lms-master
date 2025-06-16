"use client";

import { easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BiBook, BiBrain, BiGlobe, BiLaptop } from "react-icons/bi";
import { MdOutlineScience, MdSchool, MdShield } from "react-icons/md";

// Animation variants
const animations = {
    pulse: {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.15, 1],
            transition: {
                duration: 2,
                ease: easeInOut,
                repeat: Infinity,
            },
        },
    },
    float: {
        initial: { y: 0 },
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 3,
                ease: easeInOut,
                repeat: Infinity,
            },
        },
    },
    rotate: {
        initial: { rotate: 0 },
        animate: {
            rotate: [0, 360],
            transition: {
                duration: 6,
                ease: easeInOut,
                repeat: Infinity,
            },
        },
    },
};

const iconSet = [MdSchool, BiBook, BiLaptop, MdShield, BiGlobe, BiBrain, MdOutlineScience];

const getRandomAnimation = () => {
    const keys = Object.keys(animations) as (keyof typeof animations)[];
    return keys[Math.floor(Math.random() * keys.length)];
};

const getRandomPosition = () => {
    const vertical = Math.random() > 0.5 ? "top" : "bottom";
    const horizontal = Math.random() > 0.5 ? "left" : "right";
    return {
        [vertical]: `${Math.floor(Math.random() * 80 + 10)}%`,
        [horizontal]: `${Math.floor(Math.random() * 80 + 10)}%`,
    };
};

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function Hero() {
    const animation = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } } as const,
    };

    const [animatedIcons, setAnimatedIcons] = useState<
        {
            Icon: typeof iconSet[number];
            animationKey: keyof typeof animations;
            position: { top?: string; bottom?: string; left?: string; right?: string };
            color: string;
            size: number;
            key: string;
        }[]
    >([]);

    useEffect(() => {
        const icons = iconSet.flatMap((Icon, index) =>
            Array.from({ length: 3 }).map((_, i) => ({
                Icon,
                animationKey: getRandomAnimation(),
                position: getRandomPosition(),
                color: getRandomColor(),
                size: Math.floor(Math.random() * 20 + 20),
                key: `icon-${index}-${i}`,
            }))
        );
        setAnimatedIcons(icons);
    }, []);

    return (
        <div className="relative h-screen bg-[url(../assets/images/img.png)] bg-cover bg-center flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Animated Icons */}
            {animatedIcons.map(({ Icon, animationKey, position, color, size, key }) => (
                <motion.div
                    key={key}
                    className="absolute text-white opacity-70 pointer-events-none"
                    style={{ ...position, color, width: `${size}px`, height: `${size}px` }}
                    initial={animations[animationKey].initial}
                    animate={animations[animationKey].animate}
                >
                    <Icon className="w-full h-full" />
                </motion.div>
            ))}

            {/* Hero Content */}
            <div className="relative z-10 md:max-w-[768px] mx-auto p-8 md:p-0">
                <div className="flex flex-col gap-y-10 w-full max-w-[768px] p-8">
                    <motion.div {...animation}>
                        <div className="font-bold text-[36px] leading-[39px] md:text-[48px] md:leading-[52px] text-white md:text-left">
                            Empower Your Future with World-Class Education.
                        </div>
                    </motion.div>
                    <motion.div {...animation}>
                        <div className="text-[24px] leading-[26px] text-white md:text-left">
                            Explore accredited degree programs from globally recognized universities.
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col sm:gap-y-8 md:flex-row md:gap-x-4 w-full mt-10">
                    <motion.button
                        {...animation}
                        className="bg-header xs:w-full md:w-[264px] py-[20px] rounded-full font-medium text-white hover:bg-opacity-80 transition duration-300"
                    >
                        Explore Programs
                    </motion.button>
                    <motion.button
                        {...animation}
                        className="xs:w-full md:w-[264px] border-2 border-white py-[20px] rounded-full font-medium text-white hover:bg-white hover:text-black transition duration-300"
                    >
                        Get Brochure
                    </motion.button>
                </div>
            </div>
        </div>
    );
}

export default Hero;