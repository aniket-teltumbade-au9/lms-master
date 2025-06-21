"use client";
// import { Header } from "./Header";
// import { StatsCard } from "./StatsCard";
// import { StudentsTable } from "./StudentsTable";
import { Header } from "./Header";
import { PendingActions } from "./PendingActions";
import { StatsCard } from "./StatsCard";
import { StudentsTable } from "./StudentsTable";

export default function Dashboard() {
    const statsData = [
        {
            title: "Total Students",
            value: "25,843",
            change: "+12% this semester",
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a8f5d999835360cba238ffd0f6749974a34e12f?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f",
            changeColor: "text-emerald-500"
        },
        {
            title: "Total Instructors",
            value: "1,238",
            change: "+23 this month",
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fb9298ab14fe889e2604e2e6cc51e78b994256c9?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f",
            changeColor: "text-emerald-500"
        },
        {
            title: "Active Courses",
            value: "580",
            change: "+45 new courses",
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a21689066d7cd536290855e9b2f40a74223125a?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f",
            changeColor: "text-emerald-500"
        },
        {
            title: "Revenue",
            value: "$145,320",
            change: "+8% vs last month",
            iconSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/4437c102bf08dbcf2f09d5e16da0693104857524?placeholderIfAbsent=true&apiKey=47a16c0f9acb4589a6e6caa37fc5b18f",
            changeColor: "text-emerald-500"
        }
    ];

    return (
        <main className="p-8 bg-black bg-opacity-0 w-full">
            <Header />

            <section className="mt-8 bg-black bg-opacity-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:">
                    {statsData.map((stat, index) => (
                        <div key={index} className="w-3/12 max-md:ml-0 max-md:w-full">
                            <StatsCard {...stat} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-8 bg-black bg-opacity-0 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:">
                    <div className="w-[67%] max-md:ml-0 max-md:w-full">
                        <StudentsTable />
                    </div>
                    <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <PendingActions />
                    </div>
                </div>
            </section>
        </main>
    );
}
