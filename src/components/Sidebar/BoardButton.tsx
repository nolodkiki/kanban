import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { getCurrentBoard } from "../../Redux/slices/currentBoardSlice";


interface IBoardButtonProps {
    buttonText: string;
    id: number
}

const BoardButton: FC<IBoardButtonProps> = ({ id, buttonText }) => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.data.data.boards)

    const getid = () => {
        state.map(item => {
            item.id === id
                ? dispatch(getCurrentBoard(state[id]))
                : null
        })
    }
    const handleBoardButtonClick = () => {
        getid()
    }




    return (
        <button id={`${id}`} onClick={() => handleBoardButtonClick()} className={`group  flex items-center gap-3 py-2 pl-9 rounded-r-full hover:text-white ease-in duration-200 focus:bg-blue-300  focus:text-white w-full
        [&.active]:bg-blue-400
        `}>
            <svg className="fill-gray-300 group-hover:fill-white group-focus:fill-white ease-in duration-200" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" /></svg>
            <div className="overflow-hidden whitespace-nowrap text-ellipsis">{buttonText}</div>
        </button>
    )
}

export default BoardButton

