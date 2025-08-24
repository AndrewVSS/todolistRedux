import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../action/thunk.js';
import TodoList from './todolist.jsx';

const TodoApp = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    if (loading) return <p>Загрузка...</p>;

    return (
        <div>
            <TodoList />
        </div>
    );
};

export default TodoApp;
