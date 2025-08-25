import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../action/thunk.js';

function TodoForm() {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector(state => state.todos.loading);

    const handleSubmit = async e => {
        e.preventDefault();

        if (title.trim()) {
            await dispatch(addTodo(title));
            setTitle('');
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Введите задачу..."
                value={title}
                onChange={e => setTitle(e.target.value)}
                disabled={loading}
            />
            <button type="submit" disabled={loading || !title.trim()}>
                {loading ? 'Добавление...' : 'Добавить'}
            </button>
        </form>
    );
}

export default TodoForm;
