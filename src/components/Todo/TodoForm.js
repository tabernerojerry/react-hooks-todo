import React, { useState, useContext } from "react";

import useStore from "../../useStore";
import useDispatch from "./useDispatch";

function TodoForm() {
  const { state, dispatch } = useContext(useStore);

  const { addTodo } = useDispatch([state, dispatch]);

  // Init State of the form input
  const [inputValue, setInputValue] = useState("");

  // Handle form input change
  const handleChange = ({ target: { value } }) => setInputValue(value);

  // Handle form submit
  const handleSubmit = event => {
    event.preventDefault();

    if (!inputValue) return alert("Ooops! todo will not be empty.");

    addTodo(inputValue);

    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} data-testid="todo-form">
      <input
        type="text"
        placeholder="Add todo..."
        onChange={handleChange}
        value={inputValue}
      />
      <button type="submit" data-testid="btn-submit">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
