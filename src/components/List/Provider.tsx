"use client"
import { List } from '@/types/list'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { ListForm } from './Form'
import { TableComponent } from './Table'
import { useTable } from './useTable'
interface ListContextType {
    filters: Record<string, unknown>
    setFilters?: React.Dispatch<React.SetStateAction<Record<string, unknown>>>
    data?: Record<string, unknown>[]
}

export const ListContext = React.createContext<ListContextType>({ filters: {} })
export const ListProvider = ({ components: { filter, table = TableComponent }, columns, service }: List) => {
    const [filters, setFilters] = React.useState<Record<string, unknown>>({});
    const Filters = filter;
    const queryKey = [...Object.keys(service), ...Object.values(filters).filter(el => typeof el === 'string')]
    const queryFunc = Object.values(service)[0]
    const { data, isLoading, error } = useQuery({
        queryKey,
        queryFn: () => queryFunc(filters).then((res: Response) => res),
    });
    const tableData = useTable(columns ?? [], data ?? []);

    if (isLoading) return 'Loading...';
    if (error) return 'An error occurred';
    const Table = table
    return (
        <ListContext.Provider value={{ data, filters, setFilters }}>
            {Filters && <ListForm><Filters /></ListForm>}
            <Table table={tableData} />
        </ListContext.Provider>
    )
}
