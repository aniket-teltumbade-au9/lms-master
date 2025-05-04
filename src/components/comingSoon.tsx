import { FaRegClock, FaRocket } from "react-icons/fa";

function ComingSoon({ title }: { title?: string }) {
    return (
        <div className="flex items-center justify-center h-screen w-full">
            <div className="flex flex-col items-center justify-center bg-blue-900 w-full max-w-5xl p-10 rounded-lg shadow-lg">
                {/* Card Container */}
                <div className="flex flex-col items-center bg-opacity-10 p-8 rounded-xl w-full max-w-2xl">

                    {/* Header Icon */}
                    <div className="flex items-center justify-center w-20 h-20 bg-yellow-500 bg-opacity-20 rounded-full">
                        <FaRocket size={36} color='yellow' />
                    </div>

                    {/* Main Content */}
                    <div className="flex flex-col items-center text-center mt-6 space-y-4">
                        <h1 className="text-4xl font-bold text-gray-100">
                            {title ?? 'This Feature is Coming Soon!'}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-lg">
                            We{"'"}re working hard to bring this feature to you soon. Stay tuned!
                        </p>

                        {/* Expected Release */}
                        <div className="flex items-center space-x-2">
                            <FaRegClock size={16} color='yellow' />
                            <p className="text-lg text-yellow-500">Expected Release: Q3 2025</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-white bg-opacity-10 border border-gray-200 mt-6 h-2 rounded-full overflow-hidden">
                        <div className="bg-yellow-500 h-2 w-[75%]"></div>
                    </div>

                    {/* Notify Section */}
                    <div className="flex flex-col items-center w-full mt-8 space-y-3">
                        <button className="w-full bg-yellow-500 text-blue-900 font-semibold py-4 rounded-lg">
                            Get Notified When It{"'"}s Ready
                        </button>
                        <p className="text-sm text-gray-400">
                            We{"'"}ll notify you only when this feature becomes available.
                        </p>
                    </div>

                    {/* Floating Design Elements */}
                    <div className="flex justify-between w-full mt-4">
                        <div className="w-16 h-16 bg-yellow-500 bg-opacity-10 rounded-full"></div>
                        <div className="w-16 h-16 bg-blue-500 bg-opacity-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
