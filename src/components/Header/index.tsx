import { useAppSelector } from "../../Redux/hooks"
import { ReactComponent as VerticalIcon } from "../../assets/icon-vertical-ellipsis.svg"
import { FC } from "react"


interface IHeaderProps {
}

export const Header: FC<IHeaderProps> = () => {
    const state = useAppSelector(state => state.board.board)

    return (
        <div className=" w-full h-header-height bg-main-gray-400 text-white flex items-center justify-between font-bold">
            <h1 className="text-fs-custom pl-10">{state.name}</h1>
            <div className="flex items-center pr-10 gap-6">
                <button className="bg-blue-300 hover:bg-blue-200 py-3 px-5 rounded-3xl text-fs-300">
                    +Add New Task
                </button>
                <button>
                    <VerticalIcon />
                </button>
            </div>
        </div>
    )
}
