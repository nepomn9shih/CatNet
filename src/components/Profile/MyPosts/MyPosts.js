import React from "react";
import AddPostForm from "./AddPostForm";
import "./MyPosts.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  const addNewPost = (values) => {
    props.addPost(values.post);
  };

  return (
    <div className="mx-3 mb-3 px-3 card bg-secondary">
      <h3 className="p-2">My posts</h3>
      <AddPostForm onSubmit={addNewPost} />
      <hr />
      <div className="pb-3">
        {props.postsData.map((post) => (
          <Post
            message={post.message}
            likeCount={post.likeCount}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
});

export default MyPosts;
