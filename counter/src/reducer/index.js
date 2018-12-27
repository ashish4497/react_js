// const initial = {
//   value: 0
// }
export default function increment(state =0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
      // return {value:state.value+1}
    case 'DECREMENT':
      return state - 1;
      // return {value:state.value-1}
    default:
      return state;
  }
}