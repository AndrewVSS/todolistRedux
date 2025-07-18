import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data.slice(0, 20)))
            .catch(err => console.error('Ошибка загрузки:', err));
    }, []);

    return (
        <div className="app">
            <h1>Todo List</h1>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
