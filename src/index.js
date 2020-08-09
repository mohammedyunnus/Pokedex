import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import {Provider} from "react-redux";

import store from "./components/themeredux/store"
// import { ThemeProvider } from './components/theme-context'
console.log("hell")
console.log(store)

ReactDOM.render(
    // <ThemeProvider>
    <Provider store={store}>
<App  />
  </Provider>
// </ThemeProvider>
, document.getElementById('root'));


