import React from "react";

import { TodoForm, TodoList, useTodos } from "./Todo";

function App() {
  const { addTodo, deleteTodo, completeTodo, state } = useTodos();

  return (
    <div>
      <h1>React Hooks Todo</h1>

      <TodoForm addTodo={addTodo} />

      {state.todos.length > 0 ? (
        <TodoList
          todos={state.todos}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ) : (
        <p>No Todos to display.</p>
      )}
    </div>
  );
}

export default App;
