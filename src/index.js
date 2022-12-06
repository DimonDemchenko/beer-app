import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
export const bababoe = React.createContext({})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <bababoe.Provider value={{}}>
    <App />
  </bababoe.Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
