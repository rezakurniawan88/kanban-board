import BoardSection from "./BoardSection";

function Board() {
    return (
        <div className="flex flex-col md:flex-row h-full min-h-screen mx-8 mb-7">
            <BoardSection section="To Do" border="md:border-r-[1px]" />
            <BoardSection section="In Progress" border="md:border-r-[1px]" />
            <BoardSection section="Complete" border="md:border-r-0" />
        </div>
    )
}

export default Board;