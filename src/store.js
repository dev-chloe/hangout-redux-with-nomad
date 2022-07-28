import { createAction, createReducer, legacy_createStore } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");

const deleteTodo = createAction("DELETE");

// const reducer = (state = [], action) => {
//   switch (action.type) {
//   case addTodo.type:
//     return [{text: action.payload, id: Date.now()}, ...state];
//   case deleteTodo.type:
//     return state.filter(toDo => toDo.id !== action.payload);
//   default:
//     return state;
//   }
// };

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
});

const store = legacy_createStore(reducer);

export const actionCreators = {
  addTodo,
  deleteTodo
};

export default store;