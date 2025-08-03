import { useState, useEffect } from 'react';
import { fetchTodosAPI, addTodoAPI, updateTodoAPI, deleteTodoAPI } from '../api/todos';

export function useTodos() {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const data = await fetchTodosAPI();
            setTodos(data);
        } catch (error) {
            console.error(error);
        }
    };

    const addTodo = async title => {
        try {
            const data = await addTodoAPI(title);
            setTodos(prev => [...prev, data]);
        } catch (error) {
            console.error(error);
        }
    };

    const updateTodo = async updatedTodo => {
        try {
            await updateTodoAPI(updatedTodo);
            setTodos(prev => prev.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)));
            setEditTodo(null);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTodo = async id => {
        try {
            await deleteTodoAPI(id);
            setTodos(prev => prev.filter(todo => todo.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return { todos, editTodo, setEditTodo, addTodo, updateTodo, deleteTodo };
}
