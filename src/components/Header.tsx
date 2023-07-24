import useStore from "../stores";

function Header() {
    const { isDark, toggleTheme } = useStore((state) => state);

    return (
        <header className="header mx-8 my-6 dark:bg-slate-900">
            <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-3xl font-semibold dark:text-white">Kanban Board</h1>

                <div className="flex gap-4 mr-3 md:mr-4 justify-center items-center">
                    <button onClick={toggleTheme} className="p-2 md:p-3 ml-1 md:ml-3 text-sm font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 dark:border-slate-100/20">
                        {isDark ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                        )}
                    </button>

                    <a href="https://github.com/rezakurniawan88/kanban-board" target="_blank">
                        <svg viewBox="0 0 16 16" className="w-5 h-5 hover:text-gray-500 dark:text-white dark:hover:text-slate-500" fill="currentColor" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    </a>
                </div>
            </div>
            <hr className="mt-6 md:mt-10 dark:border-slate-100/20" />
        </header>
    )
}

export default Header;