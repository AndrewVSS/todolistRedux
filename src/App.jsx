import { useState } from 'react';
import { useTodos } from './hooks/useTodos';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import SortButton from './components/SortButton';
import './App.css';

export default function App() {
    const { todos, addTodo, updateTodo, deleteTodo } = useTodos();
    const [search, setSearch] = useState('');
    const [sortAlpha, setSortAlpha] = useState(false);

    const visibleTodos = todos
        .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => (sortAlpha ? a.title.localeCompare(b.title) : 0));

    return (
        <div>
            <h1>Todo List</h1>
            <TodoForm onAdd={addTodo} />
            <div className="search">
                <SearchBar onSearch={setSearch} />
                <SortButton onToggle={setSortAlpha} />
            </div>
            <TodoList todos={visibleTodos} onEdit={updateTodo} onDelete={deleteTodo} />
        </div>
    );
}
