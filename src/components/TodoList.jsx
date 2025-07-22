import TodoItem from './TodoItem';

export default function TodoList({ todos, onEdit, onDelete }) {
    if (todos.length === 0) return <p>Нет задач</p>;

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </ul>
    );
}
