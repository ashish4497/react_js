var todo = {todoarray:[]}
 const rootReducer = (state=todo, action) => {
    switch (action.type) {
        case 'add-todo': {
            const index = state.todoarray.length;
            return {todoarray:[...state.todoarray, {
                value : action.value,
                id : index
                }]
            }
        }
        case "remove-todo" : {
            const filteredArray = state.todoarray.filter(todo => todo.id !== action.id)
            return {
                todoarray : filteredArray
            }
        }
        default : return state;
    }
}

export default rootReducer