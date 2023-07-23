import { Column as ColumnData } from "../../interfaces/data";
import { BoardItem } from "./BoardItem";
import { FC } from "react"

interface IProps {
    column: ColumnData,
}
const Column: FC<IProps> = ({ column }) => {

    const renderTasks = column.tasks.map(item => <BoardItem title={item.title} />)
    console.log(column)
    return (
        <div className="w-card-width mr-7">
            <div className='flex items-center gap-3 mb-5 text-fs-100 text-gray-300 font-bold tracking-spacing-sidebar'>
                <span className='block w-4 h-4 bg-blue-200 rounded-full'></span>
                <span>{column.name}</span>
            </div>
            {renderTasks}
        </div>

    )
}

export default Column