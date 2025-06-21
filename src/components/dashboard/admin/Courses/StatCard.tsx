import React from 'react';
import { Stat } from './types';

interface StatCardProps {
    stat: Stat;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
    return (
        <div className="flex flex-col shrink-0 gap-4 justify-center items-start p-6 h-36 rounded-xl bg-black bg-opacity-20 w-[352px] max-md:w-full">
            <div className="flex justify-between items-start w-full h-[60px]">
                <div className="flex flex-col gap-0.5 justify-center items-start h-[60px]">
                    <p className="text-base leading-4 text-gray-400">
                        {stat.label}
                    </p>
                    <h3 className="text-3xl font-bold leading-8 text-white">
                        {stat.value}
                    </h3>
                </div>
                <div className={`flex justify-center items-center p-3 w-10 h-10 rounded-lg ${stat.iconBgColor}`}>
                    <div dangerouslySetInnerHTML={{ __html: stat.icon }} />
                </div>
            </div>
            <div className="flex gap-1 items-end h-5">
                <span className="text-sm text-emerald-500">
                    {stat.change}
                </span>
                <div>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:
                                "<svg width=\"11\" height=\"14\" viewBox=\"0 0 11 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"growth-arrow\" style=\"width: 10.5px; height: 14px\"> <g clip-path=\"url(#clip0_264_2239)\"> <path d=\"M5.86807 1.13135C5.52627 0.789551 4.97119 0.789551 4.6294 1.13135L0.254395 5.50635C-0.0874024 5.84814 -0.0874024 6.40322 0.254395 6.74502C0.596191 7.08682 1.15127 7.08682 1.49307 6.74502L4.3751 3.86025V12.2493C4.3751 12.7333 4.76611 13.1243 5.2501 13.1243C5.73408 13.1243 6.1251 12.7333 6.1251 12.2493V3.86025L9.00713 6.74229C9.34893 7.08408 9.90401 7.08408 10.2458 6.74229C10.5876 6.40049 10.5876 5.84541 10.2458 5.50361L5.8708 1.12861L5.86807 1.13135Z\" fill=\"#10B981\"></path> </g> <defs> <clipPath id=\"clip0_264_2239\"> <path d=\"M0 0H10.5V14H0V0Z\" fill=\"white\"></path> </clipPath> </defs> </svg>",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
