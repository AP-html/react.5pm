
import React from 'react';
import '../post.css';

function Post({ id, title, body }) {
  return (
    <div className="post" key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Post;