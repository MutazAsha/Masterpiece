import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="mt-6 bg-gray-50">
      <div className="px-10 py-6 mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto bg-white rounded-md overflow-hidden shadow-lg">
          <img
            src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
            alt=""
            className="w-full h-64 object-cover"
          />
          <div className="p-8">
            <div className="flex items-center justify-start mt-4 mb-4">
              {/* Add your post categories here */}
            </div>
            <div className="mt-2">
              <a
                href="#"
                className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500 hover:underline"
              >
                {blog.title}
              </a>
              <div className="flex justify-start items-center mt-2">
                {/* You can add your post views logic here */}
              </div>
              <div className="font-light text-gray-600">
                <a href="#" className="flex items-center mt-6 mb-6">
                  {/* Author's avatar and name */}
                </a>
              </div>
            </div>
            <div className="max-w-4xl px-10 mx-auto text-2xl text-gray-700 mt-4 rounded bg-gray-100">
              <div>
                <p className="mt-2 p-8">{blog.body}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Related posts section */}
        <h2 className="text-2xl mt-4 text-gray-500 font-bold text-center">
          Related Posts
        </h2>
        <div className="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
          {/* Your related posts content here */}
        </div>
        {/* Comment form section */}
        <div className="max-w-4xl py-16 xl:px-8 flex justify-center mx-auto">
          <div className="w-full mt-16 md:mt-0 ">
            {/* Your comment form content here */}
          </div>
        </div>
        {/* Comments section */}
        <div className="max-w-4xl px-10 py-16 mx-auto bg-gray-100  bg-white min-w-screen animation-fade animation-delay  px-0 px-8 mx-auto sm:px-12 xl:px-5">
          <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center sm:mx-0">
            All comments on this post
          </p>
          {/* Your comments content here */}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
