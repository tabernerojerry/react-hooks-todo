import React from "react";
import { render, cleanup, fireEvent, getByText } from "react-testing-library";

import { TodoForm } from "../components/Todo";
import { StoreProvider } from "../useStore";

afterEach(cleanup);

test("<TodoForm />, Add Todo", () => {
  const dispatch = jest.fn();

  const { getByTestId } = render(
    <StoreProvider value={{ state: { todos: [] }, dispatch }}>
      <TodoForm />
    </StoreProvider>
  );

  expect(getByTestId("todo-form")).toBeTruthy();

  fireEvent.change(getByTestId("todo-form").firstChild, {
    target: { value: "Todo 50" }
  });

  fireEvent.click(getByTestId("btn-submit"));

  expect(dispatch).toHaveBeenCalledTimes(1);

  expect(dispatch).toHaveBeenCalledWith({
    type: "ADD_TODO",
    payload: { id: 1, todo: "Todo 50", isComplete: false }
  });
});
