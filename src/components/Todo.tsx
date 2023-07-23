import { type Todo } from "@prisma/client";


export default function Todo({ todo }: {todo: Todo}) {
    const { id, title, content, done } = todo; 
    
    return (
        <div className=" border-2 w-64 h-40 border-slate-400 rounded-lg flex flex-col items-center justify-center shadow-lg">
            <h1 className="border-b text-xl font-medium italic">{title}</h1>
            <p>{content}</p>
            {done ? "done" : "not done"}
        </div>
    )
}