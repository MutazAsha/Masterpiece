import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from React Router
import AOS from "aos";
import "aos/dist/aos.css";
const BestTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    const fetchTrainers = async () => {AOS.init();
      try {
        const response = await axios.get('http://localhost:3000/Card');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers: ', error);
      }
    };

    fetchTrainers();
  }, []);

  // Display only the first 4 trainers
  const firstFourTrainers = trainers.slice(0, 4);

  return (
    <div data-aos="fade-up" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1 className="text-[#27374D] text-4xl mb-6 font-bold item-center justify-center text-center">Best Trainers</h1>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {firstFourTrainers.map((trainer) => (
          <div key={trainer.id}>
            <Link to={`/trainers/${trainer.id}`}>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={trainer.image}
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-[#9DB2BF] bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    {trainer.title}
                  </p>
                  <p className="mb-4 text-xs text-gray-100">{trainer.category}</p>
                  <p className="mb-4 text-xs tracking-wide text-gray-100">
                    {trainer.description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestTrainers;
