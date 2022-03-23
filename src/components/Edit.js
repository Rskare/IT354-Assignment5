import React from 'react';
import Post from './Post';

const Edit = ({ users, onDelete }) => {
  return (
    <>
      {users.map((user, index) => (
        <Post key={index} user={user} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Edit;