'use client';
import { ListProvider } from '@/components/List/Provider';
import Filters from './Filters';
import { userColumns } from './columnDef';

export function UserList() {
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
    return (
        <div className='w-full flex flex-col gap-y-[1.375rem]'>
            <ListProvider
                components={{ filter: Filters }}
                service={{ user: fetchUsers }}
                columns={userColumns}
                titleProps={{ title: 'User Management' }}
            />
        </div>
    )
}
