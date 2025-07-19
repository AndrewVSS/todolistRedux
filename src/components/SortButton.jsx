function SortButton({ isSorted, setIsSorted }) {
    return (
        <button onClick={() => setIsSorted(!isSorted)}>
            {isSorted ? 'Сбросить сортировку' : 'Сортировать A-Z'}
        </button>
    );
}

export default SortButton;
