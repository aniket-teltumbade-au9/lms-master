import * as React from "react";

export function Header() {
    return (
        <header className="flex flex-wrap w-full bg-black bg-opacity-0 max-md:max-w-full">
            <div className="flex flex-col grow shrink-0 items-start basis-0 bg-black bg-opacity-0 w-fit max-md:max-w-full">
                <div className="max-w-full bg-black bg-opacity-0 w-[672px]">
                    <div className="flex flex-wrap gap-3 px-3 py-3.5 w-full rounded-lg border border-solid bg-white bg-opacity-10 border-white border-opacity-20 max-md:max-w-full">
                        <div className="flex overflow-hidden justify-center items-center self-start min-h-4">
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b82e84181ecaea052892706f54d9813c032d03a1?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f"
                                className="object-contain self-stretch my-auto w-4 aspect-square"
                                alt="Search icon"
                            />
                        </div>
                        <div className="flex-auto text-base text-gray-400 w-[617px] max-md:max-w-full">
                            Search...
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 self-start bg-black bg-opacity-0">
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d96c42ab5c670629a5d3062ce71ff63eeb891a4?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f"
                    className="object-contain shrink-0 my-auto rounded-lg aspect-[0.94] w-[30px]"
                    alt="Notification"
                />
                <div className="flex gap-3.5 px-3 py-1 rounded-lg bg-black bg-opacity-0">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/19455d1a9d574668eb117733cab8049ad97164ee?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f"
                        className="object-contain shrink-0 w-8 rounded-full aspect-square"
                        alt="Admin User avatar"
                    />
                    <div className="self-start text-base leading-none text-gray-200">
                        Admin User
                    </div>
                    <div className="flex overflow-hidden justify-center items-center my-auto min-h-3.5">
                        <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05dbc1c9cd03880bb2512e776691fc8bb8e84a3?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f"
                            className="object-contain self-stretch my-auto w-3.5 aspect-square"
                            alt="Dropdown arrow"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
