import React from "react";

import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = ({postsData, newPostText, addPost, updateNewPostText}) => {

let newPostElement = React.createRef()

const addNewPost = () => { 
  addPost()
}

const onPostChange = () => {
  let text = newPostElement.current.value
  updateNewPostText(text)
}
  return (
    <div className="mx-3 px-3 card bg-secondary">
      <h3>My posts</h3>
      <div className="input-group">
          <textarea className="form-control" ref={newPostElement} onChange={onPostChange} value={newPostText}/>
        <div className="input-group-append">
          <button className="btn btn-warning" onClick={addNewPost}>Add post</button>
        </div>
      </div>
      <hr />
      <div className="pb-3">
      {postsData.map(post => <Post 
      message={post.message} 
      likeCount={post.likeCount} 
      id={post.id}
      key={post.id}
      />)}
      </div>
    </div>
  );
};

export default MyPosts;
