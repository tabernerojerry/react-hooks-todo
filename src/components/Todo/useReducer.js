import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./useTypes";

export default function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: payload
      };
    default:
      return state;
  }
}
