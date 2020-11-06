import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './redux/reduxStore'

let rerenderEntireThree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App 
        store={store}
        />
      </BrowserRouter>,
      document.getElementById('root')
    );
  }

  rerenderEntireThree(store.getState())

  store.subscribe(() => {
    let state = store.getState()
    rerenderEntireThree(state)
  })