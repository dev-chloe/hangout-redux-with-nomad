// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import { legacy_createStore } from "@reduxjs/toolkit"; 

const plus = document.getElementById("plus_btn");
const minus = document.getElementById("minus_btn");
const number = document.querySelector("span");

const counterReducer = (count = 0, action) => {
  console.log(count, action)
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
}

const countStore = legacy_createStore(counterReducer);

countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "PLUS" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState());