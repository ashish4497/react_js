const initialstate = {
  items: []
}
export default function inputvalue(state = initialstate, action) {
  switch (action.type) {
    case 'ADDLIST':
      return {
        items: [...state.items, action.value]
      }
    case 'DELETLIST' :
     state.items.splice(action.id, 1)
    return {
      items: [...state.items]
    }
    default:
      return state;
  }
}