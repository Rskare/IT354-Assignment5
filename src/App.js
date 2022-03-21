import React from 'react';
import { useState } from 'react'
const axios = require('axios').default
import Add from './components/Add';
import Edit from './components/Edit'
import './style.css';

export default function App() {

  const [users, setUsers] = useState([]);

  function getPosts() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
        console.log('Get Successful');
        console.log(response);
        const shortArray = response.data.slice(0,3)
        setUsers(shortArray);
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  const addPost = (user) => {
    const id = Math.floor(Math.random() *10000) + 1

    console.log(user)

    const newUser = { id, ...user }

    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        name: user[0],
        title: user[1],
        text: user [2],
      })
      .then((response) => {
        console.log('Post Successful');
        console.log(response);
        setUsers([...users, newUser])
      })
  }

  const deletePost = (id) => {
    axios
      .delete(`${'https://jsonplaceholder.typicode.com/posts'}/1`)
      .then(() => {
        console.log("Post deleted")
        setUsers(users.filter((user) => user.id !== id))
      })
  }

  return (
    <div class="container">
        <div class="row">
          <Add onAdd={addPost}/>
          {users.length > 0 ? <Edit users={users} onDelete={deletePost}/> : 'No Users To Show'}
          <button onClick={getPosts}>GET request</button>
        </div>
    </div>
  );
}

export default App;
