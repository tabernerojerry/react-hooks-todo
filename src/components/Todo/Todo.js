import React, { useContext } from "react";

import useStore from "../../useStore";
import useDispatch from "./useDispatch";

const Todo = ({ todo: { id, todo, isComplete }, index }) => {
  const { state, dispatch } = useContext(useStore);
  const { completeTodo, deleteTodo } = useDispatch([state, dispatch]);

  return (
    <li data-testid="todo">
      <span className={isComplete ? "strike" : ""} data-testid="todo-title">
        {todo}
      </span>
      <button data-testid="btn-complete" onClick={() => completeTodo(index)}>
        Complete
      </button>
      <button data-testid="btn-delete" onClick={() => deleteTodo(id)}>
        X
      </button>
    </li>
  );
};

export default Todo;
