const initialstate = {
  items: []
}
export default function inputvalue(state = initialstate, action) {
  switch (action.type) {
    case 'ADDLIST':
      return {
        items: [...state.items, action.value]
      }
    default:
      return state;
  }
}