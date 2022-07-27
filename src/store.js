import { legacy_createStore } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

const addTodo = (text) => {
  return {
    type: ADD,
    text
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
  case ADD:
    return [{text: action.text, id: Date.now()}, ...state];
  case DELETE:
    return state.filter(toDo => toDo.id !== action.id);
  default:
    return state;
  }
};

const store = legacy_createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo
};

export default store;