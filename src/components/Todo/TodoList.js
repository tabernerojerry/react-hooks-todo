import React from "react";

import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo
        key={todo.id}
        todo={todo}
        index={index}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    ))}
  </ul>
);

export default TodoList;
