import { useEffect } from "react";
import BoardCard from "./BoardCard"
import useStore from "../stores";
import { useDrop, DropTargetMonitor } from "react-dnd";

interface IBoardSection {
    section: string,
    border: string
}

interface IBoardItem {
    id: number;
}

function BoardSection({ section, border }: IBoardSection) {
    const { board, setBoard, deleteCard, moveCard } = useStore((state) => state);

    useEffect(() => {
        const getDataLocalStorage = () => {
            const data = localStorage.getItem("boardKanban");
            const parsedData = data ? JSON.parse(data) : [];
            return parsedData;
        };

        const initialData = getDataLocalStorage();
        setBoard(initialData);

    }, [setBoard])

    const [{ isOver }, dropRef] = useDrop(
        () => ({
            accept: "boards",
            drop: (item: IBoardItem) => moveCard(item.id, section.toLowerCase()),
            collect: (monitor: DropTargetMonitor) => ({
                isOver: monitor.isOver() ? true : false
            })
        }),
        [section, moveCard]
    )

    const countByStatus = (status: string) => {
        return board.filter(data => data.status === status).length;
    };

    return (
        <div ref={dropRef} className={`list-section w-full md:w-2/6 mb-1 md:mb-6 border-r-0 ${border} border-slate-300 dark:text-white dark:border-slate-100/20 ${isOver ? "bg-slate-50 dark:bg-slate-800" : ""}`}>
            <h1 className="font-semibold mx-3 md:mx-6 mb-4">{section} <span>{`(${countByStatus(section.toLocaleLowerCase())})`}</span></h1>

            <div className="flex flex-row md:flex-col no-scrollbar overflow-x-auto md:overflow-x-hidden">
                {(
                    (countByStatus("to do") === 0 && section === "To Do") ||
                    (countByStatus("in progress") === 0 && section === "In Progress") ||
                    (countByStatus("complete") === 0 && section === "Complete")
                ) ? (
                    <h1 className="font-semibold text-center text-slate-500 text-sm md:text-base mx-auto my-4 md:my-8 dark:text-slate-400">Empty Task</h1>
                ) :
                    board.map((data) => {
                        if (
                            (data.status === "to do" && section === "To Do") ||
                            (data.status === "in progress" && section === "In Progress") ||
                            (data.status === "complete" && section === "Complete")
                        ) {
                            return (
                                <BoardCard
                                    key={data.id}
                                    datas={data}
                                    onDelete={deleteCard}
                                />
                            )
                        } else {
                            return null;
                        }
                    })
                }
            </div>

        </div>
    )
}

export default BoardSection;