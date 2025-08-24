import { fetchTodosAPI, addTodoAPI, updateTodoAPI, deleteTodoAPI } from '../api/todos.js';

export const fetchTodos = () => async dispatch => {
    dispatch({ type: 'LOADING_START' });
    try {
        const response = await fetchTodosAPI();
        dispatch({ type: 'SET_TODOS', payload: response.data });
    } catch (error) {
        console.error('Ошибка при загрузке задач:', error);
    } finally {
        dispatch({ type: 'LOADING_END' });
    }
};

export const addTodoAsync = title => async dispatch => {
    try {
        const response = await addTodoAPI({ title, completed: false });
        dispatch({ type: 'ADD_TODO', payload: response.data });
    } catch (error) {
        console.error('Ошибка при добавлении задачи:', error);
    }
};

export const updateTodoAsync = todo => async dispatch => {
    try {
        const response = await updateTodoAPI(todo);
        dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, title: response.data.title } });
    } catch (error) {
        console.error('Ошибка при обновлении задачи:', error);
    }
};

export const deleteTodoAsync = id => async dispatch => {
    try {
        await deleteTodoAPI(id);
        dispatch({ type: 'REMOVE_TODO', payload: id });
    } catch (error) {
        console.error('Ошибка при удалении задачи:', error);
    }
};
