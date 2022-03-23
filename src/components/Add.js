import React from 'react';
import NewPost from './NewPost';
import { useState } from 'react';
const axios = require('axios').default

const Add = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add text');
      return;
    }

    onAdd({ name, title, text });

    setName('');
    setTitle('');
    setText('');
  };

  return (
    <div className="col-md-6 mb-4">
      <h1>React Blog</h1>

      <form action="" className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <div className="mb-2">
            <select
              className="form-select"
              aria-label="User select"
              onChange={(e) => setName(e.target.value)}
            >
              <option>Select the user</option>
              <option value="Leanne Graham">1 - Leanne Graham</option>
              <option value="Ervin Howell">2 - Ervin Howell</option>
              <option value="Clementine Bauch">3 - Clementine Bauch</option>
            </select>
          </div>
          <div className="mb-2">
            <label for="postTitle" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="postTitle"
              aria-describedby="Help"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="contentInput" className="form-label">
              Blog Post
            </label>
            <textarea
              className="form-control"
              id="contentInput"
              rows="3"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          <div>
            <NewPost />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
