import { useEffect } from "react";
import useStore from "../stores";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { IBoardData } from "../types";

function ModalTask() {
    const { isOpen, editState, editData, toggleOpen, submitHandler, updateHandler } = useStore((state) => state);
    const { handleSubmit, register, setValue, formState: { errors } } = useForm<IBoardData>();

    const onSubmit = (data: IBoardData) => {
        const hasError = Object.keys(errors).length > 0;
        if (hasError) return null;
        submitHandler(data);
        toast.success('Add Task Successfull');
        toggleOpen();
    }

    const onUpdate = (data: IBoardData) => {
        const hasError = Object.keys(errors).length > 0;
        if (hasError) return null;
        updateHandler(data);
        toast.success('Edited Successfull');
        toggleOpen();
    }

    useEffect(() => {
        setValue("title", editData?.title || '');
        setValue("date", editData?.date || '');
        setValue("priority", editData?.priority || '');
        setValue("category", editData?.category || '');
        setValue("color", editData?.color || '');
        setValue("status", editData?.status || 'to do');
    }, [setValue, editData]);

    return (
        <div className={isOpen ? "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white/20 backdrop-blur-lg dark:bg-slate-800/20" : "hidden"}>
            <div className="relative bg-white w-4/5 md:w-2/5 h-4/5 md:h-[95%] pl-7 pr-5 py-5 border border-slate-200 drop-shadow-md shadow-slate-200 rounded-xl dark:bg-slate-900 dark:border-slate-100/20">
                <div className="flex justify-between">
                    <h1 className="font-bold text-base md:text-lg text-slate-800 dark:text-white">{editState ? "Edit Task" : "Add New Task"}</h1>
                    <button onClick={toggleOpen} className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500 hover:text-red-700">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                <p className="text-xs md:text-sm mt-1 mb-2 dark:text-slate-300">Fill Your Task Detail To All Field</p>

                <form onSubmit={editState ? handleSubmit(onUpdate) : handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <input
                            type="text"
                            id="title"
                            className={`bg-white border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-100/20 dark:text-slate-200 ${errors.title ? "border-red-500" : ""}`}
                            placeholder="Your Kanban Title Here"
                            {...register('title', { required: "Title is required", maxLength: { value: 30, message: "The maximum characters for title is 30" } })}
                        />
                        {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Date</label>
                        <input
                            type="date"
                            id="date"
                            className={`bg-white border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-100/20 dark:text-slate-200 dark:[color-scheme:dark] ${errors.date ? "border-red-500" : ""}`}
                            {...register('date', { required: "Date is required" })}
                        />
                        {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="priority" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Select Your Priority</label>
                        <select
                            id="priority"
                            className="bg-white border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-100/20 dark:text-slate-200"
                            {...register('priority', { required: "Priority is required" })}
                        >
                            <option value="" disabled>Select your priority</option>
                            <option value="Low Priority">Low Priority</option>
                            <option value="Medium Priority">Medium Priority</option>
                            <option value="High Priority">High Priority</option>
                        </select>
                        {errors.priority && <span className="text-red-500 text-xs">{errors.priority.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <input
                            type="text"
                            id="category"
                            className={`bg-white border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-100/20 dark:text-slate-200 ${errors.category ? "border-red-500" : ""}`}
                            placeholder="Your Kanban Category Here"
                            {...register('category', { required: "Category is required", maxLength: { value: 15, message: "The maximum characters for category is 15" } })}
                        />
                        {errors.category && <span className="text-red-500 text-xs">{errors.category.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="color" className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white">Select Your Category Color</label>
                        <select
                            id="color"
                            className={`bg-white border border-gray-300 text-gray-900 text-xs md:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-100/20 dark:text-slate-200 ${errors.color ? "border-red-500" : ""}`}
                            {...register('color', { required: "Color is required" })}
                        >
                            <option value="" disabled>Select your color</option>
                            <option value="text-red-600 dark:text-red-400">Red Color</option>
                            <option value="text-green-600 dark:text-green-400">Green Color</option>
                            <option value="text-blue-600 dark:text-blue-400">Blue Color</option>
                            <option value="text-purple-600 dark:text-purple-400">Purple Color</option>
                        </select>
                        {errors.color && <span className="text-red-500 text-xs">{errors.color.message}</span>}
                    </div>
                    <input
                        type="text"
                        id="status"
                        className="hidden"
                        {...register('status')}
                    />
                    <button
                        type="submit"
                        className="absolute right-5 bottom-4 bg-slate-900 text-white text-xs md:text-sm font-semibold py-2 px-4 rounded-lg dark:bg-slate-800 dark:hover:bg-slate-950"
                    >
                        {editState ? 'Save changes' : 'Add Task'}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ModalTask;