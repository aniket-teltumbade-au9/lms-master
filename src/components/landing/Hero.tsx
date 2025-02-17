import React from 'react';

function Hero() {
    return (
        <div className='relative min-h-screen md:min-h-[842px] bg-[url(../assets/images/img.png)] bg-cover bg-center flex'>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className='relative md:m-[80px] xs:mx-2 w-full flex items-center py-10'>
                <div className='flex flex-col gap-y-10 w-full max-w-[768px] p-8'>
                    <div className='font-bold text-[48px] leading-[52px] text-white md:text-left'>
                        Empower Your Future with World-Class Education.
                    </div>
                    <div className='text-[24px] leading-[26px] text-white md:text-left'>
                        Explore accredited degree programs from globally recognized universities.
                    </div>
                    <div className='flex flex-col sm:gap-y-8 md:flex-row md:gap-x-4 w-full'>
                        <button className="bg-header xs:w-full md:w-[264px] py-[20px] rounded-full font-medium text-white hover:bg-opacity-80 transition duration-300">
                            Explore Programs
                        </button>
                        <button className="xs:w-full md:w-[264px] border-2 border-white py-[20px] rounded-full font-medium text-white hover:bg-white hover:text-black transition duration-300">
                            Get Brochure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
