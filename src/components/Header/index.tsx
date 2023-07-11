import { ReactComponent as VerticalIcon } from "../../assets/icon-vertical-ellipsis.svg"


export const Header = () => {
    return (
        <div className=" w-full h-header-height bg-main-gray-400 text-white flex items-center justify-between font-bold">
            <h1 className="text-fs-custom pl-10">Platform Launch</h1>
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
