import React from "react";

const Todo = ({
  todo: { id, todo, isComplete },
  deleteTodo,
  completeTodo,
  index
}) => (
  <li>
    <span className={isComplete ? "strike" : ""}>{todo}</span>
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => deleteTodo(id)}>X</button>
  </li>
);

export default Todo;
