import { flexRender, Table } from '@tanstack/react-table';

export function TableComponent({ table }: { table: Table<unknown> }) {
    return (<div className="w-full flex">
        <table className='bg-[#17255410] flex-1 rounded-lg border border-[#ffffff10]'>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr className='border-b border-[#ffffff10] p-4' key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className='text-left p-2'>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr className='border-b border-[#ffffff10] p-4' key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id} className='text-left p-2'>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
            <tfoot>
                {table.getFooterGroups().map(footerGroup => (
                    <tr key={footerGroup.id}>
                        {footerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.footer,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
            </tfoot>
        </table>
    </div>
    )
}
