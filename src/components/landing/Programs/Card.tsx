import React from 'react';
import { BiSolidStar } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa6";

type CardProps = Readonly<{
    title: string;
    university: string;
    accreditation: string;
    duration: string;
    mode: string;
}>;

const Card: React.FC<CardProps> = ({ title, university, accreditation, duration, mode }) => {
    return (
        <div className='p-6 bg-[#ffffff10] rounded-2xl flex flex-col gap-y-7 h-full'>
            <h2 className="text-header font-bold text-2xl truncate w-full overflow-hidden whitespace-nowrap">
                {title}
            </h2>

            <div className='flex flex-col gap-y-2 flex-grow'>
                <p className='text-subtitle '>{university}</p>
                <p className='flex gap-x-2 items-center'><BiSolidStar />{accreditation}</p>
                <p className='flex gap-x-2 items-center'><FaRegClock />{duration}</p>
                <p className='flex gap-x-2 items-center'><FaLaptop />{mode}</p>
            </div>
            <button className="bg-header w-full hover:bg-opacity-80 transition duration-300 p-3 rounded-[8px]">
                View Details
            </button>
        </div>
    );
};

export default Card;
