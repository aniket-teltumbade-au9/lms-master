"use client"
import { List } from '@/types/list'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { TitleComponent } from '../Title'
import { ListForm } from './Form'
import { TableComponent } from './Table'
import { useTable } from './useTable'
interface ListContextType {
    filters: Record<string, unknown>
    setFilters?: React.Dispatch<React.SetStateAction<Record<string, unknown>>>
    data?: Record<string, unknown>[]
}

export const ListContext = React.createContext<ListContextType>({ filters: {} })
export const ListProvider = (
    {
        components: {
            filter,
            table = TableComponent,
            Title = TitleComponent
        },
        columns,
        service,
        titleProps = { title: '' }
    }: List) => {
    const [filters, setFilters] = React.useState<Record<string, unknown>>({});
    const Filters = filter;
    const queryKey = [...Object.keys(service), ...Object.values(filters).filter(el => typeof el === 'string')]
    const queryFunc = Object.values(service)[0]
    const { data, isLoading, error } = useQuery({
        queryKey,
        queryFn: () => queryFunc(filters).then((res: Response) => res),
    });
    const tableData = useTable(columns ?? [], data ?? []);

    const Table = table
    return (
        <ListContext.Provider value={{ data, filters, setFilters }}>
            {Title && <Title {...titleProps} />}
            {Filters && <ListForm><Filters /></ListForm>}
            {isLoading ? 'Loading...' : error ? 'An error occurred' : <Table table={tableData} />}
        </ListContext.Provider>
    )
}
