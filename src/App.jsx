import React from 'react';
import TodoApp from './pages/todoapp.jsx';
import './App.css';

const App = () => {
    return (
        <div className="container">
            <h1>Список Дел</h1>
            <TodoApp />
        </div>
    );
};

export default App;
