import { useState } from 'react';

function SearchBar({ onSearch }) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        const value = e.target.value;
        setInput(value);
        if (onSearch) onSearch(value);
    };

    return <input type="text" placeholder="Поиск..." value={input} onChange={handleChange} />;
}

export default SearchBar;
