import { useState } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import useStore from "../stores";
import { toast } from "react-hot-toast";
import { IBoardData } from "../types";

interface IBoardCard {
    datas: IBoardData,
    onDelete: (id: number) => void
}

function BoardCard({ datas, onDelete }: IBoardCard) {
    const { toggleOpen, handleEdit, handleEditData, showMenuList, toggleMenuList } = useStore((state) => state);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuShow = () => {
        setIsMenuOpen(!isMenuOpen);
        toggleMenuList();
    };

    const toggleEdit = (data: IBoardData) => {
        handleEditData(data);
        toggleOpen();
        handleEdit();
    };

    const toggleDelete = (id: number) => {
        onDelete(id);
        toggleMenuShow();
        toast('Delete successfull', { icon: '🧺' });
    };

    const [{ isDragging }, dragRef] = useDrag(
        () => ({
            type: "boards",
            item: { id: datas.id },
            collect: (monitor: DragSourceMonitor) => ({
                isDragging: monitor.isDragging() ? true : false
            })
        }),
        []
    );

    return (
        <div>
            <div ref={dragRef} className={`card relative w-72 md:w-96 bg-white mx-3 md:mx-6 mb-5 py-3 px-5 rounded-md cursor-pointer border dark:bg-slate-900 dark:border-slate-100/30 ${isDragging ? "opacity-90" : "opacity-100"}`}>
                <div className="flex justify-between items-center">
                    {datas.priority === "High Priority" ? (
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-red-600 dark:text-red-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" /></svg>
                            <h1 className="text-red-600 text-xs font-semibold dark:text-red-400">{datas.priority}</h1>
                        </div>
                    ) : datas.priority === "Medium Priority" ? (
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-500 dark:text-yellow-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                            <h1 className="text-yellow-500 text-xs font-semibold dark:text-yellow-400">{datas.priority}</h1>
                        </div>
                    ) : datas.priority === "Low Priority" ? (
                        <div className="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500 dark:text-blue-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <h1 className="text-blue-500 text-xs font-semibold dark:text-blue-400">{datas.priority}</h1>
                        </div>
                    ) : null}

                    <button onClick={toggleMenuShow} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
                    </button>
                </div>

                <div className="menu-list">
                    <div className={showMenuList && isMenuOpen ? "absolute right-5 w-2/6 bg-white border drop-shadow-sm rounded-md dark:bg-slate-900 dark:border-slate-100/20" : "hidden"}>
                        <div onClick={() => toggleEdit(datas)} className="hover:bg-zinc-100 m-1 rounded-sm dark:hover:bg-gray-800">
                            <p className="text-xs pl-2 py-1.5">Edit</p>
                        </div>
                        <div onClick={() => toggleDelete(datas.id)} className="hover:bg-zinc-100 hover:text-red-500 m-1 rounded-sm dark:hover:bg-gray-800">
                            <p className="text-xs pl-2 py-1.5">Delete</p>
                        </div>
                    </div>
                </div>


                <h1 className="font-medium mt-2 mb-2 ml-1">{datas.title}</h1>

                <div className="date flex gap-2 ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-slate-500 dark:text-slate-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" /></svg>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-300">{datas.date}</p>
                </div>

                <button className={`${datas.color} text-xs font-medium mt-4 mb-2 px-4 py-2 ml-1 rounded-full border dark:border-slate-100/10`}>{datas.category}</button>
            </div>
        </div>
    )
}

export default BoardCard;