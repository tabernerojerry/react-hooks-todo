import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";

import { StoreProvider } from "../useStore";
import { TodoList } from "../components/Todo";
import reducer from "../components/Todo/useReducer";

afterEach(() => {
  cleanup();
});

const todos = [
  {
    id: 1,
    todo: "Todo 1",
    isComplete: false
  },
  {
    id: 2,
    todo: "Todo 2",
    isComplete: false
  },
  {
    id: 3,
    todo: "Todo 3",
    isComplete: false
  }
];

test("<TodoList /> #todos", () => {
  const dispatch = () => {};
  const { container, getAllByTestId } = render(
    <StoreProvider value={{ state: { todos }, dispatch }}>
      <TodoList />
    </StoreProvider>
  );

  expect(container).toBeTruthy();

  expect(getAllByTestId("todo").length).toBe(todos.length);
});

test("<TodoList /> Button Complete Calls", () => {
  const dispatch = jest.fn();

  const state = { todos };

  const { getAllByTestId } = render(
    <StoreProvider value={{ state, dispatch }}>
      <TodoList />
    </StoreProvider>
  );

  const btnComplete = getAllByTestId("btn-complete");

  expect(btnComplete.length).toBe(3);

  btnComplete.forEach(btn => fireEvent.click(btn));

  expect(dispatch).toHaveBeenCalledTimes(3);
});

test("<TodoList /> isComplete set TRUE and FALSE value", () => {
  let state = {
    todos: [
      {
        id: 4,
        todo: "Todo 4",
        isComplete: false
      }
    ]
  };

  const dispatch = action => {
    state = reducer(state, action);
  };

  const { getByTestId } = render(
    <StoreProvider value={{ state, dispatch }}>
      <TodoList />
    </StoreProvider>
  );

  fireEvent.click(getByTestId("btn-complete"));
  expect(state.todos[0]).toEqual({ id: 4, todo: "Todo 4", isComplete: true });

  fireEvent.click(getByTestId("btn-complete"));
  expect(state.todos[0]).toEqual({ id: 4, todo: "Todo 4", isComplete: false });
});

test("<TodoList /> Delete Todo", () => {
  let state = { todos };

  const dispatch = action => {
    state = reducer(state, action);
  };

  const { getAllByTestId } = render(
    <StoreProvider value={{ state, dispatch }}>
      <TodoList />
    </StoreProvider>
  );

  fireEvent.click(getAllByTestId("btn-delete")[1]);

  expect(state.todos.length).toBe(2);
  expect(state.todos).toEqual([
    { id: 1, todo: "Todo 1", isComplete: true },
    { id: 3, todo: "Todo 3", isComplete: true }
  ]);
});
