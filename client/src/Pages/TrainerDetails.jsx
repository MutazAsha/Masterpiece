// TrainerDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Pricing from './Pricing';

const TrainerDetails = () => {
  const [trainer, setTrainer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setTrainer(response.data);
      } catch (error) {
        console.error('Error fetching trainer details: ', error);
      }
    };

    fetchTrainerDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img className="w-full h-64 object-cover" src={trainer.image} alt={trainer.title} />
        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-2">{trainer.title}</h2>
          <p className="text-sm text-gray-600 mb-4">{trainer.category}</p>
          <p className="text-base text-gray-700 leading-7">{trainer.description}</p>

          <div className="mt-8">
            <Link
              to="/trainers"
              className="inline-block text-sm px-4 py-2 leading-none border rounded-md text-gray-800 border-gray-800 hover:border-transparent hover:text-white hover:bg-gray-800 mt-4 lg:mt-0"
            >
              &larr; Back to Trainers
            </Link>
          </div>
        </div>
      </div>
      <Pricing />
    </div>
  );
};

export default TrainerDetails;
