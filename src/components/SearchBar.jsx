function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <input
            type="text"
            placeholder="Поиск..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
        />
    );
}

export default SearchBar;
