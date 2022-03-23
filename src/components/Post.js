import React from 'react';
import DeletePost from './DeletePost';

const Post = ({ user, onDelete }) => {
  return (
    <div className="row mb-3">
      <div className="col-4">
        <h4>{user.title}</h4>
      </div>
      <div className="col-8">
        <DeletePost onDelete={onDelete} user={user} />
      </div>
      <div className="col-12">
        <p>By {user.name}</p>
        <p>{user.text}</p>
      </div>
    </div>
  );
};

export default Post;
