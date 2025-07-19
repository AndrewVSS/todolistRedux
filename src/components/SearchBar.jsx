import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';

function SearchBar({ setSearchQuery }) {
    const [inputValue, setInputValue] = useState('');

    const debouncedSetSearchQuery = useMemo(() => debounce(setSearchQuery, 400), [setSearchQuery]);

    useEffect(() => {
        debouncedSetSearchQuery(inputValue);

        return () => debouncedSetSearchQuery.cancel();
    }, [inputValue, debouncedSetSearchQuery]);

    return (
        <input
            type="text"
            placeholder="Поиск..."
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
        />
    );
}

export default SearchBar;
