import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './redux/state'

let rerenderEntireThree = (state) => {
    ReactDOM.render(
      <BrowserRouter>
        <App 
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        />
      </BrowserRouter>,
      document.getElementById('root')
    );
  }

  rerenderEntireThree(store.getState())

  store.subscribe(rerenderEntireThree)