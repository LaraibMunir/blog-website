import React from 'react';
import { Link } from 'react-router-dom';

const ViewBlogs = () => {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  return (
    <div>
      <h2>All Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewBlogs;
