import React from "react";
import Preloader from "../../Preloader/Preloader";
import AddPostForm from "./AddPostForm";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {
  // if (!props.profile) {
  //   return <Preloader />;
  // }
  
  const addNewPost = (values) => {
    props.addPost(values.post);
  };

  return (
    <div className="mx-3 mb-3 px-3 card bg-secondary">
      <h3 className="p-2">MY POSTS</h3>
      <AddPostForm onSubmit={addNewPost} />
      <hr />
      <div className="pb-3">
        {props.postsData.map((post) => (
          <Post
            message={post.message}
            likeCount={post.likeCount}
            key={post.id}
            profile={props.profile}
          />
        ))}
      </div>
    </div>
  );
});

export default MyPosts;
