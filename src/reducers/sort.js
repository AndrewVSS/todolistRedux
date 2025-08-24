const initialSort = false;

export const sortReducer = (state = initialSort, action) => {
    switch (action.type) {
        case 'TOGGLE_SORT':
            return !state;
        default:
            return state;
    }
};
