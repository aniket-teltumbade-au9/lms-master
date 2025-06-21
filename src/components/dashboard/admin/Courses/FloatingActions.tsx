import React from 'react';

export const FloatingActions: React.FC = () => {
    return (
        <div className="flex shrink-0 gap-4 justify-center items-start w-44 h-12 max-md:fixed max-md:right-5 max-md:bottom-5 max-sm:flex-col max-sm:gap-2 max-sm:w-12">
            <button className="flex shrink-0 justify-center items-center p-4 w-12 h-12 bg-amber-500 rounded-full shadow-md cursor-pointer">
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            "<svg width=\"14\" height=\"16\" viewBox=\"0 0 14 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"floating-icon\" style=\"width: 16px; height: 16px; flex-shrink: 0\"> <path d=\"M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z\" fill=\"white\"></path> </svg>",
                    }}
                />
            </button>
            <button className="flex shrink-0 justify-center items-center p-4 w-12 h-12 rounded-full cursor-pointer bg-white bg-opacity-10">
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            "<svg width=\"18\" height=\"16\" viewBox=\"0 0 18 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"floating-icon\" style=\"width: 16px; height: 16px; flex-shrink: 0\"> <g clip-path=\"url(#clip0_264_2259)\"> <path d=\"M0 2C0 0.896875 0.896875 0 2 0H7V4C7 4.55312 7.44688 5 8 5H12V9H6.75C6.33437 9 6 9.33438 6 9.75C6 10.1656 6.33437 10.5 6.75 10.5H12V14C12 15.1031 11.1031 16 10 16H2C0.896875 16 0 15.1031 0 14V2ZM12 10.5V9H15.4406L14.2219 7.78125C13.9281 7.4875 13.9281 7.0125 14.2219 6.72188C14.5156 6.43125 14.9906 6.42813 15.2812 6.72188L17.7812 9.22188C18.075 9.51562 18.075 9.99063 17.7812 10.2812L15.2812 12.7812C14.9875 13.075 14.5125 13.075 14.2219 12.7812C13.9313 12.4875 13.9281 12.0125 14.2219 11.7219L15.4406 10.5031H12V10.5ZM12 4H8V0L12 4Z\" fill=\"white\"></path> </g> <defs> <clipPath id=\"clip0_264_2259\"> <path d=\"M0 0H18V16H0V0Z\" fill=\"white\"></path> </clipPath> </defs> </svg>",
                    }}
                />
            </button>
            <button className="flex shrink-0 justify-center items-center p-4 w-12 h-12 rounded-full cursor-pointer bg-white bg-opacity-10">
                <div
                    dangerouslySetInnerHTML={{
                        __html:
                            "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"floating-icon\" style=\"width: 16px; height: 16px; flex-shrink: 0\"> <path d=\"M3.28437 6.33203C3.525 5.65078 3.91562 5.01016 4.46562 4.46328C6.41875 2.51016 9.58438 2.51016 11.5375 4.46328L12.0719 5.00078H10.5C9.94687 5.00078 9.5 5.44766 9.5 6.00078C9.5 6.55391 9.94687 7.00078 10.5 7.00078H14.4844H14.4969C15.05 7.00078 15.4969 6.55391 15.4969 6.00078V2.00078C15.4969 1.44766 15.05 1.00078 14.4969 1.00078C13.9437 1.00078 13.4969 1.44766 13.4969 2.00078V3.60078L12.95 3.05078C10.2156 0.316406 5.78438 0.316406 3.05 3.05078C2.2875 3.81328 1.7375 4.71016 1.4 5.66953C1.21562 6.19141 1.49063 6.76016 2.00938 6.94453C2.52813 7.12891 3.1 6.85391 3.28437 6.33516V6.33203ZM1.21875 9.04141C1.0625 9.08828 0.9125 9.17266 0.790625 9.29766C0.665625 9.42266 0.58125 9.57266 0.5375 9.73516C0.528125 9.77266 0.51875 9.81328 0.5125 9.85391C0.503125 9.90703 0.5 9.96016 0.5 10.0133V14.0008C0.5 14.5539 0.946875 15.0008 1.5 15.0008C2.05313 15.0008 2.5 14.5539 2.5 14.0008V12.4039L3.05 12.9508C5.78438 15.682 10.2156 15.682 12.9469 12.9508C13.7094 12.1883 14.2625 11.2914 14.6 10.3352C14.7844 9.81328 14.5094 9.24453 13.9906 9.06016C13.4719 8.87578 12.9 9.15078 12.7156 9.66953C12.475 10.3508 12.0844 10.9914 11.5344 11.5383C9.58125 13.4914 6.41563 13.4914 4.4625 11.5383L4.45937 11.5352L3.925 11.0008H5.5C6.05312 11.0008 6.5 10.5539 6.5 10.0008C6.5 9.44766 6.05312 9.00078 5.5 9.00078H1.5125C1.4625 9.00078 1.4125 9.00391 1.3625 9.01016C1.3125 9.01641 1.26562 9.02578 1.21875 9.04141Z\" fill=\"white\"></path> </svg>",
                    }}
                />
            </button>
        </div>
    );
};
