export const addtodo = (value) => {
  return {
    type:"ADDLIST",
    value 
  }
}

export const deletetodo = (id) => {
  console.log(id)
  return {
    type:"DELETLIST",
    id
  }
}