var todo = {todoarray:[]}
 const rootReducer = (state=todo, action) => {
    switch (action.type) {
        case 'add-todo': return {todoarray:[...state.todoarray, action.value]}
        default : return state;
    }
}

export default rootReducer