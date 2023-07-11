import { FC } from "react"
import { ReactComponent as BoardIcon } from "../../assets/icon-board.svg";
import s from './index.module.css'


interface IBoardButtonProps {
    buttonText: string;
}

const BoardButton: FC<IBoardButtonProps> = ({ buttonText }) => {
    return (
        <button className={`${s.board_button} flex items-center gap-3 py-2 pl-9 rounded-r-full hover:text-white ease-in duration-200 hover:bg-blue-300 w-full`}>
            <BoardIcon />
            <div className="overflow-hidden whitespace-nowrap text-ellipsis">{buttonText}</div>
        </button>
    )
}

export default BoardButton

