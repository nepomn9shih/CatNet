import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const postsData = [
  {id: 1, message: "Привет!", likeCount: 5}, 
  {id: 2, message: "Как дела?", likeCount: 7},
  {id: 3, message: "Эй!", likeCount: 12},
  {id: 4, message: "Чё молчишь?", likeCount: 6}
]

export const dialogsData = [
  {id: 1, name: "Andrey"}, 
  {id: 2, name: "Sergey"},
  {id: 3, name: "Ivan"},
  {id: 4, name: "Masha"}
]

export const messagesData = [
  {id: 1, message: "Привет!"}, 
  {id: 2, message: "Как дела?"},
  {id: 3, message: "Эй!"},
  {id: 4, message: "Чё молчишь?"}
]

ReactDOM.render(
  <React.StrictMode>
    <App 
    postsData={postsData} 
    dialogsData={dialogsData}
    messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
