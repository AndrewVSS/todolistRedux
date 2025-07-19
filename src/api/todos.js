const BASE_URL = 'http://localhost:3001/todos';

export const fetchTodosAPI = async () => {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error('Ошибка при загрузке');
    return res.json();
};

export const addTodoAPI = async title => {
    const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, completed: false }),
    });
    if (!res.ok) throw new Error('Ошибка при добавлении');
    return res.json();
};

export const updateTodoAPI = async todo => {
    const res = await fetch(`${BASE_URL}/${todo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo),
    });
    if (!res.ok) throw new Error('Ошибка при обновлении');
};

export const deleteTodoAPI = async id => {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!res.ok) throw new Error('Ошибка при удалении');
};
