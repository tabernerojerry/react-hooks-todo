import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./useTypes";

export default function useDispatch([state, dispatch]) {
  // Add Todo Method
  const addTodo = todo => {
    const id = state.todos.length > 0 ? state.todos[0].id + 1 : 1;

    return dispatch({
      type: ADD_TODO,
      payload: { id, todo, isComplete: false }
    });
  };

  // Complete Todo Method
  const completeTodo = index => {
    const newTodos = [...state.todos];
    newTodos[index].isComplete = !state.todos[index].isComplete;

    return dispatch({ type: COMPLETE_TODO, payload: newTodos });
  };

  // Delete Todo Method
  const deleteTodo = id => dispatch({ type: DELETE_TODO, payload: id });

  return { addTodo, completeTodo, deleteTodo };
}
