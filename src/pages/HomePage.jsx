import { useTodos } from '../hooks/useTodos';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from '../components/SearchBar.jsx';
import SortButton from '../components/SortButton.jsx';

export default function HomePage() {
    const [searchQuery, setSearchQuery] = useState('');
    const { todos, addTodo } = useTodos();
    const [title, setTitle] = useState('');
    const [isSorted, setIsSorted] = useState(false);

    const handleAdd = e => {
        e.preventDefault();
        if (title.trim()) {
            addTodo(title);
            setTitle('');
        }
    };

    const filteredTodos = todos.filter(todo =>
        todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const displayedTodos = isSorted
        ? [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title))
        : filteredTodos;

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleAdd}>
                <input value={title} onChange={e => setTitle(e.target.value)} />
                <button type="submit">Добавить</button>
            </form>
            <div>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                <SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
            </div>

            <ul>
                {displayedTodos.map(todo => (
                    <li key={todo.id} style={{ width: '300px', listStyle: 'none' }}>
                        <Link
                            to={`/task/${todo.id}`}
                            style={{
                                display: 'inline-block',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                width: '300px',
                            }}
                        >
                            {todo.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
