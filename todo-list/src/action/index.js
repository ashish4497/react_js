export function addtodo(value){
    return {
        type:"add-todo",
        value
    }
}

export  function remove(id){
        return {
        type:"remove-todo",
        id
    }
}