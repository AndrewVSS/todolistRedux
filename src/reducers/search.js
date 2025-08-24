const initialSearch = '';

export const searchReducer = (state = initialSearch, action) => {
    switch (action.type) {
        case 'SET_SEARCH_QUERY':
            return action.payload;
        default:
            return state;
    }
};
