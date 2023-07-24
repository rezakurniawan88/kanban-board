import { create } from "zustand";
import { IBoardData } from "../types";

interface IStore {
    board: IBoardData[];
    setBoard: (board: IBoardData[]) => void;
    isDark: boolean;
    toggleTheme: () => void;
    deleteCard: (id: number) => void;
    submitHandler: (values: IBoardData) => void;
    moveCard: (id: number, newStatus: string) => void;
    isOpen: boolean;
    toggleOpen: () => void;
    showMenuList: boolean;
    toggleMenuList: () => void;
    isMenuOpen: boolean;
    toggleMenuShow: () => void;
    editState: boolean;
    handleEdit: () => void;
    handleEditReset: () => void;
    editData: IBoardData | null;
    handleEditData: (data: IBoardData) => void;
    updateHandler: (values: IBoardData) => void;
}

const useStore = create<IStore>((set) => ({
    isDark: false,
    toggleTheme: () => {
        set((state) => {
            const newIsDark = !state.isDark;
            if(newIsDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            return { isDark: newIsDark };
        });
    },
    board: [],
    setBoard: (board) => set({ board }),
    deleteCard: (id) => {
        set((state) => {
            const newData = state.board.filter((item) => item.id !== id);
            localStorage.setItem("boardKanban", JSON.stringify(newData));
            return { board: newData }
        })
    },
    submitHandler: (values) => {
        set((state) => {
            const newBoard = [...state.board, {
                ...values,
                id: new Date().getTime()
            }];
            localStorage.setItem("boardKanban", JSON.stringify(newBoard));
            return { board: newBoard }
        })
    },
    moveCard: (id, newStatus) => {
        set((state) => {
            const updatedBoard = state.board.map((data) => {
                if (data.id === id) {
                    return { ...data, status: newStatus };
                }
                return data;
            });
            localStorage.setItem("boardKanban", JSON.stringify(updatedBoard));
            return { board: updatedBoard }
        })
    },
    isOpen: false,
    toggleOpen: () => set((state) => (
        {
            isOpen: !state.isOpen
        }
    )),
    showMenuList: false,
    toggleMenuList: () => set((state) => ({ showMenuList: !state.showMenuList })),
    isMenuOpen: false,
    toggleMenuShow: () => {
        set((state) => ({isMenuOpen: !state.isMenuOpen, showMenuList: !state.showMenuList}
    ))},
    editState: false,
    handleEdit: () => set(() => ({ editState: true })),
    handleEditReset: () => set(() => ({ editState: false, editData: null })),
    editData: null,
    handleEditData: (data) => set({ editData: data }),
    updateHandler: (values) => {
        set((state) => {
            const updateCard = { ...state.editData, ...values };
            const cardIndex = state.board.findIndex((card) => card.id === updateCard.id);
            if (cardIndex !== -1) {
                const updatedCard = Object.assign({}, state.board[cardIndex], updateCard);
                const updatedBoard = [
                    ...state.board.slice(0, cardIndex),
                    updatedCard,
                    ...state.board.slice(cardIndex + 1)
                ];
                localStorage.setItem("boardKanban", JSON.stringify(updatedBoard));
                return { board: updatedBoard, editData: null };
            }
            return state;
        });
    },
}));

export default useStore;