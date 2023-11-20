// AddTrainingCoursePage.js

import React, { useState } from 'react';
import axios from 'axios';

const AddTrainingCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [pricing, setPricing] = useState('');

  const categories = ['Fitness', 'Grossfit', 'Cardio', 'Body Building'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send data to the server using axios
      const response = await axios.post('/api/addtrainingcourse', {
        courseName,
        category,
        duration,
        pricing
      });

      // You can perform further processing here as needed

      console.log('Training course data sent:', response.data);
    } catch (error) {
      console.error('An error occurred while sending data:', error.message);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gray-100 p-8 rounded shadow-md">
        <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />

        <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full p-2 border rounded-md "
        >
          <option value="" disabled>Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="duration">Duration (in days):</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />
         <label className="block mb-2 text-sm font-bold text-gray-600" htmlFor="duration">Duration (in days):</label>
        <input
          type="number"
          id="pricing"
          name="pricing"
          value={pricing}
          onChange={(e) => setPricing(e.target.value)}
          required
          className="w-full p-2 border rounded-md"
        />


        <button type="submit" className="bg-gray-800 text-white  hover:bg-gray-600 p-2 rounded-md mt-4 cursor-pointer mx-auto block">
          Add Training Course
        </button>
      </form>
    </div>
  );
};

export default AddTrainingCoursePage;
