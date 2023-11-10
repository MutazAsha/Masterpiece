import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Trainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const trainersPerPage = 12;

  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers: ', error);
      }
    };

    fetchTrainers();
  }, []);

  const indexOfLastTrainer = currentPage * trainersPerPage;
  const indexOfFirstTrainer = indexOfLastTrainer - trainersPerPage;
  const currentTrainers = trainers.slice(indexOfFirstTrainer, indexOfLastTrainer);

  // Local filtering based on the selected category
  const filteredTrainers = selectedCategory === 'All'
    ? currentTrainers
    : currentTrainers.filter(trainer => trainer.category.toLowerCase() === selectedCategory.toLowerCase());

  // Filter trainers based on search term
  const searchedTrainers = filteredTrainers.filter(trainer =>
    trainer.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(searchedTrainers.length / trainersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const categories = ['All', 'electronics', 'jewelery', 'men clothing', 'women clothing']; // Add your categories

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex items-center justify-center flex-wrap mb-4 space-x-4">
        {/* Category Dropdown */}
        <div className="mb-4">
          <label htmlFor="category" className="text-gray-800 font-bold">
            Category:
          </label>
          <select
            id="category"
            className="p-2 border border-gray-300 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Search Input */}
        <div>
          <label htmlFor="search" className="text-gray-800 font-bold">
            Search:
          </label>
          <div className="relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-5.2-5.2"></path>
                  <circle cx="10" cy="10" r="8"></circle>
                </svg>
              </button>
            </span>
            <input
              type="search"
              id="search"
              className="py-2 pl-10 text-sm text-white bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search trainers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {searchedTrainers.map((trainer) => (
          <div key={trainer.id}>
            <Link to={`/trainers/${trainer.id}`}>
                
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={trainer.image}
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    {trainer.title}
                  </p>
                  <p className="mb-4 text-xs text-gray-100">{trainer.category}</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-400">
                    {trainer.description}
                  </p>
                </div>
              </div>
              
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="mx-2 p-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => handlePageChange(number + 1)}
            className={`mx-2 p-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none ${
              currentPage === number + 1 ? 'bg-gray-800' : ''
            }`}
          >
            {number + 1}
          </button>
        ))}
        <button
          className="mx-2 p-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Trainers;
