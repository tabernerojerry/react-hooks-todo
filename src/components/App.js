import React, { useContext, useReducer } from "react";

import useStore, { StoreProvider } from "../useStore";

import { TodoForm, TodoList, reducer } from "./Todo";

function App() {
  // create a global store to store the state
  const globalStore = useContext(useStore);

  // `todos` will be a state manager to manage state.
  const [state, dispatch] = useReducer(reducer, globalStore);
  console.log(state.todos);

  return (
    // State.Provider passes the state and dispatcher to the down
    <StoreProvider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </StoreProvider>
  );
}

export default App;
