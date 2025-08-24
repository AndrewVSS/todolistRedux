const initialFilter = 'all';

export const filterReducer = (state = initialFilter, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload;
        default:
            return state;
    }
};
