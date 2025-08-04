import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TodoApp from './pages/TodoApp';
import TaskPage from './pages/TaskPage';
import NotFound from './pages/NotFound';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TodoApp />} />
                <Route path="/task/:id" element={<TaskPage />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
        </BrowserRouter>
    );
}
