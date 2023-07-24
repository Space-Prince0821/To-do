import { useState } from "react";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

export default function CreateTodo() {
    const [newTodoTitle, setNewTodoTitle] = useState<string>('');
    const [newTodoContent, setNewTodoContent] = useState<string>('');
    const ctx = api.useContext();

    const { mutate, isLoading: isCreating } = api.todos.create.useMutation({
        onSuccess: () => {
            setNewTodoTitle("");
            setNewTodoContent("");
            // get up to date data in todos (context) from cached trpc 
            // invalidate the getAll query, since it is uneccassary
            // since the new todo is already cached
            void ctx.todos.getAll.invalidate();
        },
        onError: () => {
            toast.error("Failed to create!");
        }
    });
 
    return (
        <div className="">
            <div
                className="flex flex-col gap-4 border-2 border-slate-300 rounded-lg px-2 py-2 h-96 w-80 items-center justify-center shadow-lg"
            >
                <h1 className="text-2xl font-medium italic">Create To Do</h1>
                <input
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2 w-[250px]"
                    placeholder="Title"
                    type="text" name="title" id="title" value={newTodoTitle}
                    onChange={(e) => {
                        setNewTodoTitle(e.target.value)
                    }}
                    disabled={isCreating}
                />

                <textarea
                    className="pl-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-4 py-2 w-[250px]"
                    placeholder="Content"
                    name="content" id="content" value={newTodoContent}
                    onChange={(e) => {
                        setNewTodoContent(e.target.value)
                    }}
                    disabled={isCreating}
                />

                <button 
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none rounded-lg px-4 py-2"
                    onClick={() => mutate({ title: newTodoTitle, content: newTodoContent })}
                >
                    Create
                </button>
            </div>
        </div>
    )
}