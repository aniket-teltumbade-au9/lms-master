export interface List {
    children?: React.ReactNode
    components: {
        filter?: React.JSX
        table?: React.JSX
    }
    columns: ColumnDef<unknown>[]
    service: Record<string, function>
}