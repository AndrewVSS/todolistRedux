// src/hooks/useTodos.js
import { useState, useEffect } from 'react';
import { fetchTodosAPI, addTodoAPI, updateTodoAPI, deleteTodoAPI } from '../api/todos';

export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodosAPI().then(setTodos);
    }, []);

    const addTodo = async title => {
        const newTodo = await addTodoAPI(title);
        setTodos(prev => [...prev, newTodo]);
    };

    const updateTodo = async updatedTodo => {
        await updateTodoAPI(updatedTodo);
        setTodos(prev => prev.map(t => (t.id === updatedTodo.id ? updatedTodo : t)));
    };

    const deleteTodo = async id => {
        await deleteTodoAPI(id);
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    return { todos, addTodo, updateTodo, deleteTodo };
}
