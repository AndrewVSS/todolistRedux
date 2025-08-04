import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTodoById, updateTodoAPI, deleteTodoAPI } from '../api/todos';

export default function TaskPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [edit, setEdit] = useState('');

    useEffect(() => {
        fetchTodoById(id)
            .then(res => {
                setTodo(res.data);
                setEdit(res.data.title);
            })
            .catch(() => navigate('/404'));
    }, [id, navigate]);

    const handleSave = async () => {
        const updated = { ...todo, title: edit };
        await updateTodoAPI(updated);
        navigate('/');
    };

    const handleDelete = async () => {
        await deleteTodoAPI(todo.id);
        navigate('/');
    };

    if (!todo) return <p>Загрузка...</p>;

    return (
        <div>
            <button onClick={() => navigate(-1)}>← Назад</button>
            <h2>Задача</h2>
            <input value={edit} onChange={e => setEdit(e.target.value)} />
            <p style={{ wordBreak: 'break-word' }}>{todo.title}</p>
            <div>
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={handleDelete}>Удалить</button>
            </div>
        </div>
    );
}
