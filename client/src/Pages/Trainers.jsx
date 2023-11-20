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
        const response = await axios.get('http://localhost:3000/Card');
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
  const filteredTrainers =
    selectedCategory === 'All'
      ? currentTrainers
      : currentTrainers.filter((trainer) => trainer.category.toLowerCase() === selectedCategory.toLowerCase());

  // Filter trainers based on search term
  const searchedTrainers = filteredTrainers.filter(
    (trainer) => trainer.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(searchedTrainers.length / trainersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const categories = ['All', 'electronics', 'jewelry', 'men clothing', 'women clothing'];

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
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

        <div className="flex items-center space-x-4">
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
              className="py-2 pl-10 text-sm text-white bg-gray-200 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search trainers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {searchedTrainers.map((trainer) => (
          <div key={trainer.id} className="overflow-hidden rounded shadow-lg hover:shadow-xl">
            <Link to={`/trainers/${trainer.id}`}>
              <img
                className="w-full h-56 md:h-64 xl:h-80 object-cover"
                src={trainer.image}
                alt={trainer.title}
              />
              <div className="p-4">
                <p className="text-lg font-bold text-gray-800">{trainer.title}</p>
                <p className="mt-1 text-sm text-gray-600">{trainer.category}</p>
                <p className="mt-2 text-sm text-gray-700">{trainer.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className={`mx-2 p-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none rounded-full ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[1, 2, 3].map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`mx-2 p-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none rounded-full ${
              currentPage === number ? 'bg-gray-800' : ''
            }`}
          >
            {number}
          </button>
        ))}
        <button
          className={`mx-2 p-2 bg-gray-800 text-white hover:bg-gray-700 focus:outline-none rounded-full ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
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
