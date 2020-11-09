import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './redux/reduxStore'
import { Provider } from 'react-redux';

let rerenderEntireThree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
      </BrowserRouter>,
      document.getElementById('root')
    );
  }

  rerenderEntireThree(store.getState())

  store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
  })