// src/hooks/useTodos.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/todos';

export function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get(API_URL).then(res => setTodos(res.data));
    }, []);

    const addTodo = async title => {
        const newTodo = { title, completed: false };
        const res = await axios.post(API_URL, newTodo);
        setTodos(prev => [...prev, res.data]);
    };

    const updateTodo = async updatedTodo => {
        await axios.put(`${API_URL}/${updatedTodo.id}`, updatedTodo);
        setTodos(prev => prev.map(t => (t.id === updatedTodo.id ? updatedTodo : t)));
    };

    const deleteTodo = async id => {
        await axios.delete(`${API_URL}/${id}`);
        setTodos(prev => prev.filter(t => t.id !== id));
    };

    return { todos, addTodo, updateTodo, deleteTodo };
}
