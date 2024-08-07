import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import ViewBlogs from './components/ViewBlogs';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/view-blogs" element={<ViewBlogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
