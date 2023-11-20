import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const [relatedPosts, setRelatedPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/blog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog");
        const filteredRelatedPosts = response.data.slice(-3);
        setRelatedPosts(filteredRelatedPosts);
      } catch (error) {
        console.error("Error fetching related posts: ", error);
      }
    };

    fetchRelatedPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
     <div className="px-4 md:px-10 py-6 mx-auto flex flex-col md:flex-row ml-20">
  <div className="md:w-auto md:pr-8">
    <img
      src={blog.blog_img}
      alt=""
      className="h-80 object-cover mb-4 md:mb-0 rounded-md shadow-lg"
    />
   
  </div>
  <div className="md:w-1/2">



    <div className="w-full bg-white rounded-md overflow-hidden shadow-lg p-8">
    <h1 className="text-1xl md:text-2xl lg:text-1xl font-bold text-gray-800 mb-4 text-start">
    Auther : {blog.blog_auther}
      </h1>
  
      <h1 className="text-1xl md:text-2xl lg:text-1xl font-bold text-gray-800 mb-4 text-start">
      Title :  {blog.blog_title}
      </h1>
      <div className="max-w-4xl mx-auto text-lg text-gray-700 mt-4 rounded text-start">
        <p className="mt-2 leading-relaxed">{blog.blog_description}</p>
      </div>
    </div>
  </div>
</div>

      <div className="px-4 md:px-10 mt-8 ">
        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold text-center mb-4">
          Related Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
          {relatedPosts.map((relatedPost) => (
            <div
              key={relatedPost.id}
              className="bg-white rounded-md overflow-hidden shadow-lg "
            >
              <Link to={`/blog-details/${relatedPost.id}`}>
                <img
                  src={relatedPost.blog_img}
                  alt=""
                  className="w-full h-40 object-cover rounded-t-md "
                />
              </Link>
              <div className="p-4">
                <Link to={`/blog-details/${relatedPost.id}`}>
                  <h5 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {relatedPost.blog_title}
                  </h5>
                </Link>
                <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
                  {relatedPost.blog_description}
                </p>
                <Link
                  to={`/blog-details/${relatedPost.id}`}
                  className="inline-block px-4 py-2 text-sm font-bold text-white bg-gray-800 rounded-full hover:bg-gray-700 focus:outline-none"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br/>
      <br/>
      <><Link
            to="/blogs"
            className="inline-block text-sm px-4 py-2 leading-none border rounded-md text-gray-800 border-gray-800 hover:border-transparent hover:text-white hover:bg-gray-800"
          >
            &larr; Back to blogs
          </Link></><br/>
      <br/>
    </div>
  );
};

export default BlogDetails;
