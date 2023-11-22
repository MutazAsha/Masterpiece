import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch data from your API using Axios
    axios.get('http://localhost:3000/Blog')
      .then(response => {
        // Update the state with the fetched data
        setBlogs(response.data);  // Fix: Use setBlogs instead of setUsers
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);   // Empty dependency array ensures the effect runs only once on component mount

  const handleSave = (blogData) => {
    // Send a request to update the blog data on the server
    axios.put(`http://localhost:3000/Blog/${blogData.id}`, blogData)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('Blog data updated successfully:', response.data);

        // Optionally, you can update the local state with the new data
        setBlogs(prevBlogs => prevBlogs.map(blog =>
          blog.id === blogData.id ? { ...blog, ...blogData } : blog
        ));
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error updating blog data:', error);
      });
  };

  const handleDelete = (blogId) => {
    // Optimistically remove the blog from the local state
    setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== blogId));

    // Send a request to delete the blog from the server
    axios.delete(`http://localhost:3000/Blog/${blogId}`)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('Blog deleted successfully:', response.data);
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error deleting blog:', error);

        // Roll back the state if the request fails
        axios.get('http://localhost:3000/Blog')
          .then(response => {
            // Update the state with the fetched data
            setBlogs(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });
  };

  const handleInputChange = (blogId, field, value) => {
    // Update the local state with the changed input value
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog.id === blogId ? { ...blog, [field]: value } : blog
      )
    );
  };

  return (
    <div className="text-gray-900 bg-gray-100">
      <h1  className="text-[#27374D] text-4xl mb-6 font-bold item-center justify-center text-center">Blogs</h1>
      <div className="p-4 flex">
      
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-8/12 text-md bg-white shadow-md rounded mb-4 ml-64">
          <thead>
            <tr className="border-b bg-[#9DB2BF]">
              <th className="text-left p-3 px-5">Author</th>
              <th className="text-left p-3 px-5">Image</th>
              <th className="text-left p-3 px-5">Title</th>
              <th className="text-left p-3 px-5">Subdescription</th>
              <th className="text-left p-3 px-5">Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-orange-100 ${index % 2 === 0 ? 'bg-[#DDE6ED]' : ''}`}
              >
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={blog.blog_autor}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(blog.id, 'blog_autor', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={blog.blog_img}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(blog.id, 'blog_img', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={blog.blog_title}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(blog.id, 'blog_title', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={blog.blog_subdescription}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(blog.id, 'blog_subdescription', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <textarea
                    value={blog.blog_description}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(blog.id, 'blog_description', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleSave(blog)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
