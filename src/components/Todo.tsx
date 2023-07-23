import { type Todo } from "@prisma/client";


export default function Todo({ todo }: {todo: Todo}) {
    const { id, title, content, done } = todo; 
    
    return (
        <>
            {title}
        </>
    )
}