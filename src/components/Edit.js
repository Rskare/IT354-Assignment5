import React from 'react';
import Post from './Post';

const Edit = ({ users, onDelete }) => {
  return (
    <>
      {users.map((user) => (
        <Post user={user} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Edit;