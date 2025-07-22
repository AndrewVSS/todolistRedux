import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

function SearchBar({ onSearch }) {
    const [value, setValue] = useState('');

    const debouncedSearch = debounce(query => {
        onSearch(query);
    }, 500);

    useEffect(() => {
        debouncedSearch(value);

        return () => debouncedSearch.cancel();
    }, [value]);

    return (
        <input
            type="text"
            placeholder="Поиск..."
            value={value}
            onChange={e => setValue(e.target.value)}
        />
    );
}

export default SearchBar;
