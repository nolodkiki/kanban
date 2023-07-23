import { FC } from "react"
import s from './index.module.css'
import { ReactComponent as BoardIcon } from "../../assets/icon-board.svg";
import { ReactComponent as LogoLight } from '../../assets/logo-light.svg'
import { ReactComponent as IconLightTheme } from '../../assets/icon-light-theme.svg'
import { ReactComponent as IconDarkTheme } from '../../assets/icon-dark-theme.svg'
import { ReactComponent as IconHideSidebar } from '../../assets/icon-hide-sidebar.svg'
import BoardButton from "./BoardButton"
import Switch from "../../util/Switch"
import { useAppSelector } from "../../Redux/hooks";


interface ISidebarProps {
}

const Sidebar: FC<ISidebarProps> = () => {
    const state = useAppSelector(state => state.data.data.boards)
    console.log(state)

    const renderBoards = state.map(({ id, name }) => {
        return <BoardButton key={id} id={id} buttonText={name} />
    })


    return (
        <div className="min-w-sidebar-width h-screen pb-10 bg-main-gray-400 border-r-1 border-r-gray-500 text-fs-100 text-gray-300 font-bold flex flex-col">
            <div className="pl-9 pt-9">
                <LogoLight />
                <div className=" mt-12">
                    <div className=" uppercase tracking-spacing-sidebar">All boards (8)</div>
                </div>

            </div>
            <div className="text-fs-400 pr-5 mt-5">
                <div className="flex flex-col gap-1 items-start ">
                    {renderBoards}
                </div>
                <button className={`${s.board_button_create} flex items-center gap-3 py-3 pl-9 rounded-r-full text-blue-300 hover:text-blue-300-opacity ease-in duration-200 w-full`}>
                    <BoardIcon />
                    <div className=" overflow-hidden whitespace-nowrap text-ellipsis">+Create New Board</div>
                </button>
            </div>
            <div className="flex items-center justify-center gap-4 bg-gray-600 mx-9 py-3 rounded-md mt-auto">
                <IconLightTheme />
                <Switch />
                <IconDarkTheme />
            </div>
            <button className="pl-9 mt-5 flex gap-3 items-center hover:fill-red">
                <IconHideSidebar />
                <div className="text-fs-200">Hide Sidebar</div>
            </button>
        </div>

    )
}

export default Sidebar