import { ref, set, get, push, update, remove } from 'firebase/database';
import { database } from '../firebase.js';

export const fetchTodosAPI = async () => {
    const snapshot = await get(ref(database, 'todos'));
    if (!snapshot.exists()) return [];
    const data = snapshot.val();
    return Object.entries(data).map(([id, value]) => ({ id, ...value }));
};

export const addTodoAPI = async title => {
    const newTodoRef = push(ref(database, 'todos'));
    await set(newTodoRef, { title, completed: false });
    return { id: newTodoRef.key, title, completed: false };
};

export const updateTodoAPI = async todo => {
    await update(ref(database, `todos/${todo.id}`), todo);
};

export const deleteTodoAPI = async id => {
    await remove(ref(database, `todos/${id}`));
};
