import { Testimonial } from '@/utils/info/stories';
import React from 'react';

interface CardProps extends Testimonial {
    index: number
}

const Card: React.FC<CardProps> = ({ quote, name, details, index }) => {
    return (
        <div className='p-8 bg-[#ffffff10] rounded-2xl flex flex-col gap-y-6'>
            <div className={`w-[64px] h-[64px] bg-cover bg-center rounded-full border-1 border-red-500`}
                style={{ backgroundImage: `url(/assets/images/img_${index + 1}.png` }}
            ></div>
            <p className=''>{quote}</p>
            <div>
                <p className='font-bold'>{name}</p>
                <p className='text-header'>{details}</p>
            </div>

        </div>
    );
};

export default Card;
