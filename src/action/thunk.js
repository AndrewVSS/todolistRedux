import {
    fetchTodosAPI,
    addTodoAPI,
    updateTodoAPI,
    deleteTodoAPI,
    fetchTodoByIdAPI,
} from '../api/todos.js';

// Загрузка всех задач
export const fetchTodos = () => async dispatch => {
    dispatch({ type: 'LOADING_START' });
    try {
        const data = await fetchTodosAPI();
        dispatch({
            type: 'SET_TODOS',
            payload: data,
        });
    } catch (error) {
        console.error('Ошибка при загрузке задач:', error);
        dispatch({
            type: 'SET_ERROR',
            payload: error.message,
        });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

// Загрузка задачи по ID
export const fetchTodoById = id => async dispatch => {
    dispatch({ type: 'LOADING_START' });
    try {
        const data = await fetchTodoByIdAPI(id);
        dispatch({
            type: 'SET_CURRENT_TODO',
            payload: data,
        });
    } catch (error) {
        console.error('Ошибка при загрузке задачи:', error);
        dispatch({
            type: 'SET_ERROR',
            payload: error.message,
        });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

// Добавление новой задачи
export const addTodo = title => async dispatch => {
    if (!title || !title.trim()) {
        console.error('Название задачи не может быть пустым');
        return;
    }

    dispatch({ type: 'LOADING_START' });
    try {
        const newTodo = {
            title: title.trim(),
            completed: false,
        };

        const data = await addTodoAPI(newTodo);
        dispatch({
            type: 'ADD_TODO',
            payload: data,
        });

        console.log('Задача успешно добавлена:', data);
    } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
        dispatch({
            type: 'SET_ERROR',
            payload: error.message,
        });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

// Обновление текста задачи
export const updateTodo = (id, title) => async dispatch => {
    if (!title || !title.trim()) {
        console.error('Название задачи не может быть пустым');
        return;
    }

    dispatch({ type: 'LOADING_START' });
    try {
        // получаем текущую задачу
        const currentTodo = await fetchTodoByIdAPI(id);

        // Обновляем title
        const updatedTodo = {
            ...currentTodo,
            title: title.trim(),
        };

        const data = await updateTodoAPI(updatedTodo);
        dispatch({
            type: 'UPDATE_TODO',
            payload: data,
        });

        console.log('Задача успешно обновлена:', data);
    } catch (error) {
        console.error('Ошибка при обновлении задачи:', error);
        dispatch({
            type: 'SET_ERROR',
            payload: error.message,
        });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

// Переключение статуса выполнения
export const toggleTodo = id => async dispatch => {
    dispatch({ type: 'LOADING_START' });
    try {
        // Получаем текущую задачу
        const currentTodo = await fetchTodoByIdAPI(id);

        // Переключаем статус completed
        const updatedTodo = {
            ...currentTodo,
            completed: !currentTodo.completed,
        };

        const data = await updateTodoAPI(updatedTodo);
        dispatch({
            type: 'TOGGLE_TODO',
            payload: data,
        });

        console.log('Статус задачи изменен:', data);
    } catch (error) {
        console.error('Ошибка при изменении статуса:', error);
        dispatch({
            type: 'SET_ERROR',
            payload: error.message,
        });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

// Удаление задачи
export const deleteTodo = id => async dispatch => {
    dispatch({ type: 'LOADING_START' });
    try {
        await deleteTodoAPI(id);
        dispatch({
            type: 'REMOVE_TODO',
            payload: id,
        });

        console.log('Задача успешно удалена:', id);
    } catch (error) {
        console.error('Ошибка при удалении задачи:', error);
        dispatch({
            type: 'SET_ERROR',
            payload: error.message,
        });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

// Удаление всех завершенных задач
export const deleteCompletedTodos = () => async (dispatch, getState) => {
    const { todos } = getState();
    const completedTodos = todos.filter(todo => todo.completed);

    if (completedTodos.length === 0) {
        console.log('Нет завершенных задач для удаления');
        return;
    }

    dispatch({ type: 'LOADING_START' });
    try {
        // Удаляем все завершенные задачи
        await Promise.all(completedTodos.map(todo => deleteTodoAPI(todo.id)));

        dispatch({ type: 'REMOVE_COMPLETED_TODOS' });
        console.log('Все завершенные задачи удалены');
    } catch (error) {
        console.error('Ошибка при удалении завершенных задач:', error);
        dispatch({
            type: 'SET_ERROR',
            payload: error.message,
        });
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};
