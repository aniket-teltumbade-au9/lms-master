import Assignment from './Assignment'
import Performance from './Performance'

function PerfAss() {
    return (
        <div className='flex sm:flex-col md:flex-row gap-8'>
            <Assignment />
            <Performance />
        </div>
    )
}

export default PerfAss