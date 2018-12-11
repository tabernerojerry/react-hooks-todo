import reducer from "../components/Todo/useReducer";
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO
} from "../components/Todo/useTypes";

const todos = [
  {
    id: 1,
    todo: "Todo 1",
    isComplete: false
  }
];

test("Add Todo", () => {
  let state = { todos };

  const newState = reducer(state, {
    type: ADD_TODO,
    payload: { id: 2, todo: "Todo 2", isComplete: false }
  });

  expect(newState.todos).toEqual([
    {
      id: 2,
      todo: "Todo 2",
      isComplete: false
    },
    ...state.todos
  ]);
});

test("Complete Todo", () => {
  let state = { todos };

  const newState = reducer(state, {
    type: COMPLETE_TODO,
    payload: [{ id: 1, todo: "Todo 1", isComplete: true }]
  });

  expect(newState.todos).toEqual([
    {
      id: 1,
      todo: "Todo 1",
      isComplete: true
    }
  ]);
});

test("Delete Todo", () => {
  let state = { todos };

  const newState = reducer(state, {
    type: DELETE_TODO,
    payload: todos[0].id
  });

  expect(newState.todos).toEqual([]);
});
