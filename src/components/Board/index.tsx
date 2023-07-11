export const Board = () => {
    return (
        <div className="ml-4 w-card-width">
            <div className='flex items-center gap-3 mb-5 text-fs-100 text-gray-300 font-bold tracking-spacing-sidebar'>
                <span className='block w-4 h-4 bg-blue-200 rounded-full'></span>
                <span>TODO(4)</span>
            </div>
            <div className='bg-main-gray-400 p-6 rounded-xl border-1 border-gray-500 min-h-card-height font-bold cursor-grab'>
                <div className='text-fs-300 mb-2'>Build UI for onboarding flow</div>
                <div className='text-fs-100 text-gray-300'>1 of 3 subtasks</div>
            </div>
        </div>
    )
}
