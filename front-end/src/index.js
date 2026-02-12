import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Heading from './heading';

let cuDate=new Date();
cuDate=cuDate.getHours();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
    <Heading />
    <p>My name is Romin</p>
    <ol>
        <li>romin</li>
        <li>vaghela</li>
        <li>romin</li>
    </ol>
</>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
