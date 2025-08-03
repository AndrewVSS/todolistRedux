import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onEdit }) {
    if (todos.length === 0) return <p>Нет задач</p>;

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
            ))}
        </ul>
    );
}

export default TodoList;
