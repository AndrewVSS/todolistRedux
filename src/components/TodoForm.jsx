import { useState } from 'react';

export default function TodoForm({ onAdd }) {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title.trim());
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Новая задача"
            />
            <button>Добавить</button>
        </form>
    );
}
