import { Feature } from '@/utils/info/features';
import React from 'react';

const Card: React.FC<Feature> = ({ title, description, Icon }) => {
    return (
        <div className='p-8 bg-[#ffffff10] rounded-2xl flex flex-col'>
            <Icon className='text-header w-[30px] h-[30px]' />
            <p className='font-bold text-[20px] leading-[28px] mt-[16px] mb-[8px]'>{title}</p>
            <p className='text-[20px] leading-[28px]'>{description}</p>
        </div>
    );
};

export default Card;
