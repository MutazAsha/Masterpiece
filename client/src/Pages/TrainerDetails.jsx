import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Pricing from './Pricing';

const TrainerDetails = () => {
  const [trainer, setTrainer] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getTrainerById/${id}`);
        setTrainer(response.data);
        const res = response.data;
        setLoading(false);
      } catch (error) {
        console.error('Error fetching trainer details: ', error);
        setLoading(false);
      }
    };

    fetchTrainerDetails();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>; // يمكنك استبدال هذا برمز تحميل أو مكون آخر
  }

  return (
    <div className="w-full mx-auto bg-gradient-to-r from-gray-400 via-gray-500 to-gray-500 rounded-xl shadow-md overflow-hidden md:max-w-6xl my-24 mt-32 text-white">
      <div className="md:flex items-center">
        <div className="md:shrink-0 ml-8">
          <img
            className="h-64 w-full object-cover md:h-full md:w-64 rounded-md"
            src={trainer.profileimage}
            alt={`Image of ${trainer.username}`}
          />
        </div>
        <div className="p-8">
          <h2 className="block mt-4 text-3xl leading-tight font-bold text-white hover:underline w-10/12 text-start">
            Name: {trainer.username}
          </h2>
          <div className="uppercase tracking-wide text-sm text-gray-300 font-semibold w-10/12 text-start">
             {trainer.certification}
          </div>
          <p className="mt-2 text-gray-200 text-lg w-10/12 text-start">
             {trainer.experience}
          </p>
        </div>
      </div>
      <Pricing />
      <div className="bg-gray-800 text-white text-center py-2">
        <Link to="/trainers" className="text-sm font-medium hover:underline">
          &larr; Back to Trainers
        </Link>
      </div>
    </div>
  );
};

export default TrainerDetails;
