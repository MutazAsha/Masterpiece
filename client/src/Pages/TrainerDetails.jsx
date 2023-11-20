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
        const response = await axios.get(`http://localhost:3000/Card/${id}`);
        setTrainer(response.data);
      } catch (error) {
        console.error('Error fetching trainer details: ', error);
      }
    };

    fetchTrainerDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-2/3">
          <img className="w-auto h-64 object-cover" src={trainer.image} alt={trainer.title} />
        </div>
        <div className="md:w-auto md:ml-8 mt-4 md:mt-0">
          <h2 className="max-w-4xl mx-auto text-lg text-gray-700 mt-4 rounded text-start">Coach : {trainer.name}</h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 mt-4 rounded text-start">Category : {trainer.category}</p>
          <h2 className="max-w-4xl mx-auto text-lg text-gray-700 mt-4 rounded text-start">Title : {trainer.title}</h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-700 mt-4 rounded text-start"> {trainer.description}</p>

         
        </div>
      </div>
      <Pricing />
      <>
      <Link
            to="/trainers"
            className="inline-block text-sm px-4 py-2 leading-none border rounded-md text-gray-800 border-gray-800 hover:border-transparent hover:text-white hover:bg-gray-800"
          >
            &larr; Back to Trainers
          </Link></>
    </div>
  );
};

export default TrainerDetails;
