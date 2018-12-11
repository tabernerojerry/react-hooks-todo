import React, { useContext } from "react";

import useStore from "../../useStore";
import Todo from "./Todo";

const TodoList = () => {
  const { state } = useContext(useStore);

  return (
    <div>
      {state.todos.length > 0 ? (
        <ul>
          {state.todos.map((todo, index) => (
            <Todo key={todo.id} todo={todo} index={index} />
          ))}
        </ul>
      ) : (
        <p>Currently, No Todos!</p>
      )}
    </div>
  );
};

export default TodoList;
