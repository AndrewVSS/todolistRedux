import { useState } from 'react';

export default function TodoItem({ todo, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(todo.title);

    const handleSave = () => {
        const trimmed = editedTitle.trim();
        if (!trimmed || trimmed === todo.title) {
            setIsEditing(false);
            setEditedTitle(todo.title);
            return;
        }
        onEdit({ ...todo, title: trimmed });
        setIsEditing(false);
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
                <span>{todo.title}</span>
            )}
            <div className="buttons">
                {isEditing ? (
                    <button onClick={handleSave}>✅</button>
                ) : (
                    <button onClick={() => setIsEditing(true)}>✏️</button>
                )}
                <button onClick={() => onDelete(todo.id)}>🗑️</button>
            </div>
        </li>
    );
}
