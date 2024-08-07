import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs.find((b) => b.id === Number(id));

  return (
    <div>
      {blog ? (
        <>
          <h2>{blog.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </>
      ) : (
        <p>Blog not found</p>
      )}
    </div>
  );
};

export default BlogDetails;

