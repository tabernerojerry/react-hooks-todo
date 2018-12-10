import { useReducer } from "react";

export function useTodos(initialTodos = []) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      const { type, payload } = action;

      switch (type) {
        case "ADD_TODO":
          return {
            ...state,
            todos: [payload, ...state.todos]
          };
        case "DELETE_TODO":
          return {
            ...state,
            todos: state.todos.filter(todo => todo.id !== payload)
          };
        case "COMPLETE_TODO":
          return {
            ...state,
            todos: payload
          };
        default:
          return state;
      }
    },
    {
      todos: initialTodos
    }
  );

  const addTodo = todo => {
    let id = state.todos.length > 0 ? state.todos[0].id + 1 : 0;

    return dispatch({
      type: "ADD_TODO",
      payload: { id, todo, isComplete: false }
    });
  };

  const completeTodo = index => {
    const newTodos = [...state.todos];
    newTodos[index].isComplete = !state.todos[index].isComplete;

    return dispatch({
      type: "COMPLETE_TODO",
      payload: newTodos
    });
  };

  const deleteTodo = id => dispatch({ type: "DELETE_TODO", payload: id });

  return {
    state,
    addTodo,
    completeTodo,
    deleteTodo
  };
}
