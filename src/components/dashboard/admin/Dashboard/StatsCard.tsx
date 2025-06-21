
interface StatsCardProps {
    title: string;
    value: string;
    change: string;
    iconSrc: string;
    changeColor: string;
}

export function StatsCard({ title, value, change, iconSrc, changeColor }: StatsCardProps) {
    return (
        <article className="p-6 mx-auto w-full rounded-xl bg-white bg-opacity-10 max-md:px-5 max-md:mt-6">
            <div className="flex gap-5 justify-between py-1 w-full bg-black bg-opacity-0">
                <h3 className="text-base leading-none text-white">
                    {title}
                </h3>
                <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                    <img
                        src={iconSrc}
                        className="object-contain self-stretch my-auto w-5 aspect-[1.25]"
                        alt={`${title} icon`}
                    />
                </div>
            </div>
            <div className="pt-px pb-2.5 mt-4 text-2xl font-bold text-gray-200 whitespace-nowrap bg-black bg-opacity-0 max-md:pr-5">
                {value}
            </div>
            <div className={`pt-px pb-2 text-sm ${changeColor} bg-black bg-opacity-0 max-md:pr-5`}>
                {change}
            </div>
        </article>
    );
}
