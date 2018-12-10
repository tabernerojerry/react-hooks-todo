import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = ({ target: { value } }) => setInputValue(value);

  const handleSubmit = todo => event => {
    event.preventDefault();

    if (!inputValue) return alert("Ooops! todo will not be empty.");

    addTodo(todo);
  };

  return (
    <form onSubmit={handleSubmit(inputValue)}>
      <input
        type="text"
        placeholder="Add todo..."
        onChange={handleChange}
        value={inputValue}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
