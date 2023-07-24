import Header from "./components/Header";
import Footer from './components/Footer';
import Board from "./components/Board";
import AddButton from "./components/AddButton";
import ModalTask from "./components/ModalTask";
import useStore from "./stores";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Toaster } from "react-hot-toast";

function App() {
    const { isDark } = useStore((state) => state);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="relative overflow-x-hidden dark:bg-slate-900">
                <Header />
                <Board />
                <AddButton />
                <ModalTask />
                <Footer />
                <Toaster
                    toastOptions={{
                        style: {
                            borderRadius: '10px',
                            background: `${isDark ? "#334155" : "#fff"}`,
                            color: `${isDark ? "#fff" : "#000"}`,
                        },
                    }}
                />
            </div>
        </DndProvider>
    )
}

export default App;