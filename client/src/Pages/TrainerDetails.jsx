import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const TrainerDetails = () => {
  const { trainerId } = useParams();
  const [trainerDetails, setTrainerDetails] = useState(null);

  useEffect(() => {
    const fetchTrainerDetails = async () => {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint for fetching trainer details
        const response = await axios.get(`your-api-endpoint/trainers/${trainerId}`);
        setTrainerDetails(response.data);
      } catch (error) {
        console.error('Error fetching trainer details: ', error);
      }
    };

    fetchTrainerDetails();
  }, [trainerId]);

  // Render loading state while fetching data
  if (!trainerDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Trainer Details</h2>
      <p>Trainer ID: {trainerId}</p>
      <img src={trainerDetails.image} alt={trainerDetails.name} />
      <p>Name: {trainerDetails.name}</p>
      <p>Description: {trainerDetails.description}</p>
      {/* Additional details about the trainer */}
    </div>
  );
};

export default TrainerDetails;
