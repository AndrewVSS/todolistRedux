const initialState = {
    todos: [],
    currentTodo: null,
    loading: false,
    error: null,
};

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_START':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'LOADING_END':
            return {
                ...state,
                loading: false,
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case 'SET_TODOS':
            return {
                ...state,
                todos: action.payload,
                error: null,
            };
        case 'SET_CURRENT_TODO':
            return {
                ...state,
                currentTodo: action.payload,
                error: null,
            };
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload],
                error: null,
            };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
                error: null,
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
                error: null,
            };
        case 'REMOVE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                error: null,
            };
        case 'REMOVE_COMPLETED_TODOS':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed),
                error: null,
            };
        default:
            return state;
    }
};
