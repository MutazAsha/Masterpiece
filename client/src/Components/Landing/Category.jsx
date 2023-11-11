import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const Category = () => {
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 4; // Number of products per page
  const [visibleItems, setVisibleItems] = useState(productPerPage); 

  // Static image URLs
  const staticImages = [
    'https://cdn.create.vista.com/api/media/small/219769518/stock-photo-handsome-athletic-sportsman-doing-push-ups-medicine-ball-dark-gym',
    'https://i.pinimg.com/736x/54/cb/3e/54cb3edb4c34fd9e4df0f27531a86f69.jpg',
    'https://crazybulk.com/cdn/shop/articles/b62be625668d55e643b0402c362cbf6c.png?v=1697628104',
    'https://miro.medium.com/v2/resize:fit:1071/1*WNr4o3XKVcb556Al3beWAQ.jpeg',
    'https://i.insider.com/5c5ae009342cca01c71cf984?width=1136&format=jpeg'
  ];
  
  // Static titles
  const staticTitles = [
    'fitness',
    'CROSSFIT',
    'CARDIO',
    "  BODY BUILDING",
    'kickboxing',
  ];

  // Fetch products from the API
  useEffect(() => {AOS.init();
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        // Set the product data
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
  }, []);

  return (
    <div data-aos="fade-up" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 data-aos="fade-up" className="text-gray-800 text-4xl mb-6 font-bold item-center justify-center text-center">Category</h1>
      <div data-aos="fade-up" className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2  w-full">
        {staticTitles.slice(0, visibleItems).map((title, index) => (
          <Link to={`/category/${title}`} key={index}>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl h-[20rem]">
              <img
                className="object-cover w-full h-[20rem]"
                src={staticImages[index]}
                alt={`Static Image ${index + 1}`}
              />
              {/* Additional content here */}
              <div className="absolute inset-0 flex flex-col justify-start px-5 py-4 text-start transition-opacity duration-300">
                <p className=" font-bold text-white text-1xl">{title}</p>
                <div className="flex items-center justify-center space-x-3">
                  {/* Additional content here */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <button
       
        className="p-2 bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600"
      >
        Show More
      </button>
    </div>
  );
};

export default Category;
