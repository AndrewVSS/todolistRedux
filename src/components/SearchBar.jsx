import { useSelector, useDispatch } from 'react-redux';

function SearchBar() {
    const searchQuery = useSelector(state => state.searchQuery || '');
    const dispatch = useDispatch();

    const handleSearchChange = e => {
        dispatch({
            type: 'SET_SEARCH_QUERY',
            payload: e.target.value,
        });
    };

    return (
        <input
            type="text"
            placeholder="Поиск..."
            value={searchQuery}
            onChange={handleSearchChange}
        />
    );
}

export default SearchBar;
