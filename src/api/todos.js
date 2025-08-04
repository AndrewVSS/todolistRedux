import axios from 'axios';

const API_URL = 'http://localhost:3001/todos';

export const fetchTodosAPI = () => axios.get(API_URL);
export const addTodoAPI = todo => axios.post(API_URL, todo);
export const updateTodoAPI = todo => axios.put(`${API_URL}/${todo.id}`, todo);
export const deleteTodoAPI = id => axios.delete(`${API_URL}/${id}`);
export const fetchTodoById = id => axios.get(`${API_URL}/${id}`);
