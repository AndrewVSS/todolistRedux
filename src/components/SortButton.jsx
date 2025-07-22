import { useState } from 'react';

function SortButton({ onToggle }) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        const next = !active;
        setActive(next);
        if (onToggle) onToggle(next);
    };

    return (
        <button onClick={handleClick}>
            {active ? 'Отменить сортировку' : 'Сортировать по алфавиту'}
        </button>
    );
}

export default SortButton;
