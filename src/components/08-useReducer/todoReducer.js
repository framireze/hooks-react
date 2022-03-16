export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'add':
            return [...state, action.paylod];    
        case 'delete':
            return state.filter(todo => todo.id !== action.paylod);
        case 'toggle':          //Es otra manera con operacion ternaria
            return state.map( todo =>                   //return implicito x eso q no usa llaves
                (todo.id === action.paylod)
                    ? {...todo, done:!todo.done}
                    : todo
            )
        case 'toggle-old':
            return state.map(todo => {
                if(todo.id === action.paylod){
                    return {...todo, done : !todo.done};
                }else{
                    return todo;
                }
            })
        default:
            return state;
    }
}