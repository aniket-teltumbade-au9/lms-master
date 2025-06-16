import { ColumnDef } from '@tanstack/react-table';
import { BiPencil, BiToggleRight, BiTrash } from 'react-icons/bi';
interface User {
    name: string;
    email: string;
    phoneNumber: string;
    role: string;
    status: string;
}
export const userColumns: ColumnDef<User>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
    },
    {
        accessorKey: 'email',
        header: 'Email',
    },
    {
        accessorKey: 'phoneNumber',
        header: 'Phone Number',
    },
    {
        accessorKey: 'role',
        header: 'Role',
        cell: ({ row }) => (row.original.role ? row.original.role[0].toUpperCase() + row.original.role.slice(1) : ''),
    },
    {
        accessorKey: 'status',
        header: 'Status',
    },
    {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
            <div className="flex gap-x-2">
                <button onClick={() => console.log('Edit', row.original)}>
                    <BiPencil className="w-5 h-5" />
                </button>
                <button onClick={() => console.log('Delete', row.original)}>
                    <BiTrash className="w-5 h-5" />
                </button>
                <button onClick={() => console.log('Activate/Deactivate', row.original)}>
                    <BiToggleRight className="w-5 h-5" />
                </button>
            </div>
        ),
    },
];
