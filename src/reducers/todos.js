const initialTodos = [];

export const todosReducer = (state = initialTodos, action) => {
    console.log('Todos редьюсер получил:', action.type, action.payload); // Для отладки

    switch (action.type) {
        case 'SET_TODOS':
            return action.payload;
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.payload);
        case 'EDIT_TODO':
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
            );
        default:
            return state;
    }
};
