import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/task/:id" element={<TaskPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}
