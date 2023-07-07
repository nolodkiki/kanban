import { FC } from "react"
import s from './Sidebar.module.css'
import logoLight from '../../assets/logo-light.svg'
import iconLightTheme from '../../assets/icon-light-theme.svg'
import iconDarkTheme from '../../assets/icon-dark-theme.svg'
import iconHideSidebar from '../../assets/icon-hide-sidebar.svg'
import BoardButton from "./BoardButton"
import Switch from "../../util/Switch"


const Sidebar: FC = () => {
    return (
        <div className="w-sidebar-width h-screen pb-10 bg-main-gray-400 border-r-1 border-r-gray-500 text-fs-100 text-gray-300 font-bold flex flex-col">
            <div className="pl-9 pt-9">
                <img src={logoLight} alt="" />
                <div className=" mt-12">
                    <div className=" uppercase tracking-spacing-sidebar">All boards (8)</div>
                </div>

            </div>
            <div className="text-fs-400 pr-5 mt-5">
                <div className="flex flex-col gap-1 items-start ">
                    <BoardButton buttonText={'Platform Launch'} />
                    <BoardButton buttonText={'Marketing Plan'} />
                    <BoardButton buttonText={'Roadmap'} />
                </div>
                <button className={`${s.board_button_create} flex items-center gap-3 py-3 pl-9 rounded-r-full text-blue-300 hover:text-blue-300-opacity ease-in duration-200 w-full`}>
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" /></svg>
                    <div className=" overflow-hidden whitespace-nowrap text-ellipsis">+Create New Board</div>
                </button>
            </div>
            <div className="flex items-center justify-center gap-4 bg-gray-600 mx-9 py-3 rounded-md mt-auto">
                <img src={iconLightTheme} alt="lightTheme" />
                <Switch />
                <img src={iconDarkTheme} alt="darkTheme" />
            </div>
            <button className="pl-9 mt-5 flex gap-3 items-center">
                <img src={iconHideSidebar} alt="iconHideSidebar" />
                <div className="text-fs-200">Hide Sidebar</div>
            </button>
        </div>

    )
}

export default Sidebar