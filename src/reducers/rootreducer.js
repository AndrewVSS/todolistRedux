import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { filterReducer } from './filter';
import { loadingReducer } from './loading';
import { searchReducer } from './search';
import { sortReducer } from './sort';

export const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filterReducer,
    loading: loadingReducer,
    searchQuery: searchReducer,
    isSorted: sortReducer,
});
