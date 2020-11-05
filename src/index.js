import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import store from './redux/state'

let rerenderEntireThree = () => {
    ReactDOM.render(
      <BrowserRouter>
        <App 
        state={store._state}
        addPost={store.addPost}
        updateNewPostText={store.updateNewPostText}
        />
      </BrowserRouter>,
      document.getElementById('root')
    );
  }

  rerenderEntireThree()

  store.subscribe(rerenderEntireThree)