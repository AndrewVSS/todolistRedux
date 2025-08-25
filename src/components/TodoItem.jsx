import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, deleteTodo, toggleTodo } from '../action/thunk.js';

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.todos.loading);

    const handleSave = async () => {
        const trimmed = editedTitle.trim();

        if (!trimmed) {
            setIsEditing(false);
            setEditedTitle(todo.title);
            return;
        }

        if (trimmed !== todo.title) {
            await dispatch(updateTodo(todo.id, trimmed));
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedTitle(todo.title);
        setIsEditing(false);
    };

    const handleDelete = async () => {
        await dispatch(deleteTodo(todo.id));
    };

    const handleToggle = async () => {
        await dispatch(toggleTodo(todo.id));
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <div className="todo-item-edit">
                    <input
                        value={editedTitle}
                        onChange={e => setEditedTitle(e.target.value)}
                        disabled={loading}
                        autoFocus
                    />
                </div>
            ) : (
                <span
                    className={`todo-item-text ${todo.completed ? 'completed' : ''}`}
                    onClick={handleToggle}
                >
                    {todo.title}
                </span>
            )}

            <div className="todo-item-actions">
                {isEditing ? (
                    <>
                        <button onClick={handleSave} disabled={loading}>
                            ✅
                        </button>
                        <button onClick={handleCancel} disabled={loading}>
                            ❌
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIsEditing(true)} disabled={loading}>
                            ✏️
                        </button>
                        <button className="delete" onClick={handleDelete} disabled={loading}>
                            🗑️
                        </button>
                    </>
                )}
            </div>
        </li>
    );
}
