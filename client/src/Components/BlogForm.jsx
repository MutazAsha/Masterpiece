import React, { useState } from 'react';
import axios from 'axios';

function BlogForm() {
  const [formData, setFormData] = useState({
    blog_autor: '',
    blog_img: '',
    blog_title: '',
    blog_subdescription: '',
    blog_description: '',
  });

  const [isSuccess, setIsSuccess] = useState(false); // State for success notification

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/blog', formData);
      console.log('Blog created:', response.data);
      setIsSuccess(true); // Set success status to true
      // Optionally, you can redirect to the newly created blog or update the blogs list.
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="BlogForm bg-gray-100 p-8 rounded-lg shadow-md w-full h-5/6">
        <h2 className="text-3xl font-semibold mb-6">Create a New Blog</h2>

        {isSuccess && ( // Render success notification if isSuccess is true
          <div className="mb-4 p-2 bg-green-200 text-green-800 rounded-md">
            Blog created successfully!
          </div>
        )}

        <form className="bf" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="blog_title" className="block text-sm font-medium text-gray-600">
              Blog Title:
            </label>
            <input
              type="text"
              id="input-blog"
              name="blog_title"
              value={formData.blog_title}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blog_img" className="block text-sm font-medium text-gray-600">
              Image URL:
            </label>
            <input
              type="text"
              id="input-blog"
              name="blog_img"
              value={formData.blog_img}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blog_autor" className="block text-sm font-medium text-gray-600">
              Blog Author:
            </label>
            <input
              type="text"
              id="input-blog"
              name="blog_autor"
              value={formData.blog_autor}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blog_subdescription" className="block text-sm font-medium text-gray-600">
              Blog Subdescription:
            </label>
            <textarea
              id="input-blog"
              name="blog_subdescription"
              value={formData.blog_subdescription}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blog_description" className="block text-sm font-medium text-gray-600">
              Blog Description:
            </label>
            <textarea
              id="input-blog"
              name="blog_description"
              value={formData.blog_description}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="p-2 bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600"
          >
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
}

export default BlogForm;
