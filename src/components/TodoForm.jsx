import { useState } from 'react';

function TodoForm({ onAdd }) {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const trimmedTitle = title.trim();

        onAdd(trimmedTitle);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Введите задачу"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default TodoForm;
