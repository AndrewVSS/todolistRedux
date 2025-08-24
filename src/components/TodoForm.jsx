import { useState } from 'react';
import { useDispatch } from 'react-redux';

function TodoForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const trimmedTitle = title.trim();

        if (trimmedTitle) {
            dispatch({
                type: 'ADD_TODO',
                payload: {
                    id: Date.now(),
                    title: trimmedTitle,
                    completed: false,
                },
            });
            setTitle('');
        }
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
