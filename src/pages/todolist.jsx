import React from 'react';
import { useSelector } from 'react-redux';
import TodoForm from '../components/TodoForm.jsx';
import TodoItem from '../components/TodoItem.jsx';
import SearchBar from '../components/SearchBar.jsx';
import SortButton from '../components/SortButton.jsx';
import './todolist.css';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const searchQuery = useSelector(state => state.searchQuery || '');
    const isSorted = useSelector(state => state.isSorted);

    // Фильтрация
    const filteredTodos = todos.filter(todo => {
        const matchesSearch = todo.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesSearch;
    });

    // Сортировка
    const sortedTodos = isSorted
        ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
        : filteredTodos;

    return (
        <div className="todo-table">
            <TodoForm />
            <SearchBar />
            <SortButton />
            <ul>
                {sortedTodos.length === 0 ? (
                    <li>Нет задач для отображения</li>
                ) : (
                    sortedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)
                )}
            </ul>
        </div>
    );
};

export default TodoList;
