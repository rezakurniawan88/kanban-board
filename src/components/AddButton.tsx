import useStore from "../stores";

function AddButton() {
    const { toggleOpen, handleEditReset } = useStore((state) => state);

    const handlerAddButton = () => {
        toggleOpen();
        handleEditReset();
    };

    return (
        <button onClick={handlerAddButton} className="fixed bottom-5 right-5 p-4 hover:py-4 hover:px-5 flex items-center bg-slate-900 text-white rounded-full group hover:transition-all dark:bg-slate-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
            <p className="text-xs font-semibold hidden group-hover:block">Add Task</p>
        </button>
    )
}

export default AddButton;