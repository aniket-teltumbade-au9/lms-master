import Button from '../form/Button'

interface Props {
    title: string,
    onClick?: () => void
}
export function TitleComponent({ title, onClick }: Props) {
    return (
        <div className='flex justify-between align-middle p-1'>
            <p className='font-bold text-2xl'>{title}</p>
            <div>
                {onClick && <Button label="Create" onClick={onClick} />}
            </div>
        </div>
    )
}
