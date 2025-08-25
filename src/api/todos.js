const API_URL = 'http://localhost:3000/todos';

// Вспомогательная функция для обработки ответов
const handleResponse = async response => {
    if (!response.ok) {
        const error = await response.text();
        throw new Error(`HTTP ${response.status}: ${error}`);
    }
    return response.json();
};

// CREATE - Добавление новой задачи
export const addTodoAPI = async todo => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return handleResponse(response);
};

// READ - Получение всех задач
export const fetchTodosAPI = async () => {
    const response = await fetch(API_URL);
    return handleResponse(response);
};

// READ - Получение задачи по ID
export const fetchTodoByIdAPI = async id => {
    const response = await fetch(`${API_URL}/${id}`);
    return handleResponse(response);
};

// UPDATE - Обновление задачи
export const updateTodoAPI = async todo => {
    const response = await fetch(`${API_URL}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(todo),
    });
    return handleResponse(response);
};

// DELETE - Удаление задачи
export const deleteTodoAPI = async id => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(`HTTP ${response.status}: ${error}`);
    }
    return { success: true };
};
