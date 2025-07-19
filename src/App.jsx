import { useState } from 'react';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';
import SortButton from './components/SortButton';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import './app.css';

function App() {
    const handleEdit = updatedTodo => {
        updateTodo(updatedTodo);
    };

    const { todos, editTodo, setEditTodo, addTodo, updateTodo, deleteTodo } = useTodos();
    const [searchQuery, setSearchQuery] = useState('');
    const [isSorted, setIsSorted] = useState(false);

    const filteredTodos = todos
        .filter(todo => todo.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => (isSorted ? a.title.localeCompare(b.title) : 0));

    return (
        <>
            <h1>Todo List</h1>
            <TodoForm onAdd={addTodo} onUpdate={updateTodo} editTodo={editTodo} />
            <div className="search">
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
            </div>
            <TodoList todos={filteredTodos} onDelete={deleteTodo} onEdit={handleEdit} />
        </>
    );
}

export default App;
