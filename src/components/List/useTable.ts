import {
    ColumnDef,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'


export function useTable(columns: ColumnDef<unknown>[], data: Record<string, unknown>[]) {
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
    })
    return table
}