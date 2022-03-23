import React from 'react';

const DeletePost = ({ user, onDelete }) => {
  return (
    <button
      type="button"
      className="float-end btn btn-secondary"
      onClick={() => onDelete(user.id)}
    >
      Delete Post
    </button>
  );
};

export default DeletePost;