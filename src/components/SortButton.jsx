import { useSelector, useDispatch } from 'react-redux';

function SortButton() {
    const isSorted = useSelector(state => state.isSorted);
    const dispatch = useDispatch();

    const handleSort = () => {
        dispatch({ type: 'TOGGLE_SORT' });
    };

    return (
        <button onClick={handleSort}>{isSorted ? 'Сбросить сортировку' : 'Сортировать A-Z'}</button>
    );
}

export default SortButton;
