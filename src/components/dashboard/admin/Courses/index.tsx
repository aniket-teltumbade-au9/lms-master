'use client';
import { ListProvider } from '@/components/List/Provider';
import { userColumns } from './columnDef';
import Filters from './Filters';
import { FloatingActions } from './FloatingActions';
import { StatsCards } from './StatCards';

export function CourseList() {
    const fetchUsers = async (filters: Record<string, unknown>) => {
        const body = Object.keys(filters).reduce((acc, key) => (({ ...acc, [`${key}`]: filters[key] })), {})
        const response = await fetch('/api/user/get-users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return response.json();
    };
    const hClick = () => {
        alert('Add new course')
    }
    return (
        <main className="relative bg-black bg-opacity-0 h-[690px] w-[1184px] max-md:p-4 max-md:w-full max-md:max-w-screen-md max-md:h-auto max-sm:p-3">
            <ListProvider
                components={{ filter: Filters }}
                service={{ user: fetchUsers }}
                columns={userColumns}
                titleProps={{ title: 'Course Management', onClick: hClick }}
            />
            <div className="flex absolute left-8 shrink-0 gap-8 justify-center items-start h-36 top-[482px] w-[1120px] max-md:relative max-md:left-0 max-md:top-auto max-md:flex-col max-md:gap-4 max-md:mt-4 max-md:w-full max-md:h-auto max-sm:gap-3">
                <StatsCards />
            </div>

            <div className="flex absolute shrink-0 gap-4 justify-center items-start w-44 h-12 left-[976px] top-[1360px] max-md:fixed max-md:right-5 max-md:bottom-5 max-md:top-auto max-md:left-auto max-sm:flex-col max-sm:gap-2 max-sm:w-12">
                <FloatingActions />
            </div>
        </main>
    )
}
