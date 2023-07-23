import { FC } from "react"

interface IProps {
    title: string
}

export const BoardItem: FC<IProps> = ({ title }) => {
    return (
        <div className='bg-main-gray-400 p-6 rounded-xl min-h-card-height min-w-[280px] font-bold cursor-grab mb-4'>
            <div className='text-fs-300 mb-2'>{title}</div>
            <div className='text-fs-100 text-gray-300'>1 of 3 subtasks</div>
        </div>
    )
}
