import { FC } from "react"
import { useAppSelector } from "../../Redux/hooks"
import Column from "./Column"


export const Board: FC = () => {
    const board = useAppSelector(state => state.board.board)

    if (!board || !board.columns) {
        return <div>Choose a board or create a new one</div>;
    }
    console.log(board)
    const renderColumns = board.columns.map(item => <Column key={item.id} column={item} />)



    return (<>
        <div className="flex">
            {renderColumns}
        </div>
        {/* <Column column={boards.board.columns} /> */}

    </>
    )
}
