import { useState } from 'react';
import { useDispatch } from 'react-redux';

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const dispatch = useDispatch();

    const handleSave = () => {
        const trimmed = editedTitle.trim();
        if (!trimmed || trimmed === todo.title) {
            setIsEditing(false);
            setEditedTitle(todo.title);
            return;
        }

        dispatch({
            type: 'EDIT_TODO',
            payload: { id: todo.id, title: trimmed },
        });
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch({
            type: 'REMOVE_TODO',
            payload: todo.id,
        });
    };

    const handleToggle = () => {
        dispatch({
            type: 'TOGGLE_TODO',
            payload: todo.id,
        });
    };

    return (
        <li className="todo-item">
            {isEditing ? (
                <input
                    value={editedTitle}
                    onChange={e => setEditedTitle(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSave()}
                />
            ) : (
                <span
                    onClick={handleToggle}
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        cursor: 'pointer',
                    }}
                >
                    {todo.title}
                </span>
            )}
            <div className="buttons">
                {isEditing ? (
                    <button onClick={handleSave}>✅</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>✏️</button>
                )}
                <button onClick={handleDelete}>🗑️</button>
            </div>
        </li>
    );
}
