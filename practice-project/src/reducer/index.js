var initialstate ={todo:[]}
function reducer(state=initialstate,action){
 switch (action.type){
     case 'ADD_TODO': return {
        todo :[...state.todo,action.value]
     }
     default : return state
 }
}
export default reducer;