// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const plus = document.getElementById("plus_btn");
const minus = document.getElementById("minus_btn");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const undateText = () => {
  number.innerText = count;
}

const handlePlus = () => {
  count = count + 1;
  undateText();
}
const handleMinus = () => {
  count = count-1;
  undateText();
}
plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);