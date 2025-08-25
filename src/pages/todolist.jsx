import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from '../components/TodoForm.jsx';
import TodoItem from '../components/TodoItem.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SortButton from '../components/SortButton.jsx';
import './todolist.css';

function TodoList() {
    const todos = useSelector(state => state.todos.todos || []);
    const loading = useSelector(state => state.todos.loading);
    const error = useSelector(state => state.todos.error);
    const searchQuery = useSelector(state => state.searchQuery || '');
    const isSorted = useSelector(state => state.isSorted);

    // Показываем loading состояние
    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    // Показываем ошибку
    if (error) {
        return <div className="error">Ошибка: {error}</div>;
    }

    const filteredTodos = todos.filter(todo => {
        const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    // Сортировка
    const sortedTodos = isSorted
        ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
        : filteredTodos;

    return (
        <div className="todo-list">
            <TodoForm />
            <SearchBar />
            <SortButton />
            <ul className="todo-items">
                {sortedTodos.length === 0 ? (
                    <li className="no-todos">Нет задач для отображения</li>
                ) : (
                    sortedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
                )}
            </ul>
        </div>
    );
}

export default TodoList;
