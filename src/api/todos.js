import { ref, onValue } from 'firebase/database';
import { db } from '../firebase.js';

export const fetchTodosAPI = async () => {
    const res = await fetch(db);
    if (!res.ok) throw new Error('Ошибка при загрузке');
    return res.json();
};

export const addTodoAPI = async title => {
    const res = await fetch(db, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false }),
    });
    if (!res.ok) throw new Error('Ошибка при добавлении');
    return res.json();
};

export const updateTodoAPI = async todo => {
    const res = await fetch(`${db}/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    });
    if (!res.ok) throw new Error('Ошибка при обновлении');
};

export const deleteTodoAPI = async id => {
    const res = await fetch(`${db}/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Ошибка при удалении');
};
