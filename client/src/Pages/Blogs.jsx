import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); 

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="text-gray-800 text-4xl mb-6 font-bold text-center">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-4 my-4">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-md overflow-hidden shadow-lg w-[25rem]">
            <Link to="#">
              <img
                src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
                alt=""
                className="w-[25rem] h-40 object-cover"
              />
            </Link>
            <div className="p-4 w-[25rem]">
              <Link to="#">
                <h5 className="w-[25rem] mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {blog.title}
                </h5>
              </Link>
              <p className="w-[25rem] mb-3 text-sm text-gray-700 dark:text-gray-400">
                {blog.body}
              </p>
              <Link
                to="#"
                className="inline-block px-4 py-2 text-sm font-bold text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}

        <div className="col-span-full flex justify-center mt-4">
          {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => index + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`mx-2 p-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none ${
                currentPage === number ? "bg-gray-800" : ""
              }`}
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
