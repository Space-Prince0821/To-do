import { api } from "~/utils/api";
import Todo from "./Todo";
export const Todos = () => {
    const { data: todos, isLoading, isError } = api.todos.getAll.useQuery();

    if (isLoading) return <div>Loading to do list...</div>
    if (isError) return <div>Error fethcing data...</div>

    return (
        <>
            {todos.length ? todos.map((todo) => {
                return <Todo key={todo.id} todo={todo} />
            }) : 'Create some to dos, you have shit to do'}
        </>
    )
}