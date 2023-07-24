import { type Todo } from "@prisma/client";


export default function Todo({ todo }: {todo: Todo}) {
    const { id, title, content, done } = todo; 
    
    return (
        <div className="hover:bg-blue-400 flex flex-col items-center justify-center shadow-lg h-48 w-48 text-center gap-4 bg-blue-300 rounded-full border-2 text-white border-gray-400">
            <h1 className="border-b font-medium italic">{title}</h1>
            <p>{content}</p>

            <div className="flex items-center justify-center gap-1">
                <input 
                    type="checkbox" 
                    name="done" 
                    id="done"
                    className="cursor-pointer"
                    checked={done}
                />
                <label htmlFor="done">
                    Done
                </label>
            </div>
        </div>
    )
}