import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import './i18next';
import App from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
