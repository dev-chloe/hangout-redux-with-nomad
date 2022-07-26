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

const PLUS = "PLUS";
const MINUS = "MINUS";

number.innerText = 0;

const counterReducer = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default: 
      return count
  }
}

const countStore = legacy_createStore(counterReducer);

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

const handlePlus = () => {
  countStore.dispatch({ type: PLUS })
}
const handleMinus = () => {
  countStore.dispatch({ type: MINUS })
}

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);