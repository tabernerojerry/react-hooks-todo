import React from "react";
import { render, cleanup } from "react-testing-library";

import Todo from "../components/Todo/Todo";

afterEach(cleanup);

const todo = {
  id: 1,
  todo: "Todo 1",
  isComplete: true
};

test("<Todo />", () => {
  const { getByTestId } = render(<Todo todo={todo} />);

  expect(getByTestId("todo-title").textContent).toBe(todo.todo);
  expect(getByTestId("todo-title").classList.contains("strike")).toBeTruthy();
});
