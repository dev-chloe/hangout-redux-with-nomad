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

const counterReducer = (state= 0) => {
  return state;
}

const countStore = legacy_createStore(counterReducer);
  console.log(countStore.getState());