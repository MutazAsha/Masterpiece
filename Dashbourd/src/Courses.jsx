import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch data from your API using Axios
    axios.get('http://localhost:3000/Corse')
      .then(response => {
        // Update the state with the fetched data
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleSave = (courseData) => {
    // Send a request to update the course data on the server
    axios.put(`http://localhost:3000/Corse/${courseData.id}`, courseData)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('Course data updated successfully:', response.data);

        // Optionally, you can update the local state with the new data
        setCourses(prevCourses => prevCourses.map(course =>
          course.id === courseData.id ? { ...course, ...courseData } : course
        ));
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error updating course data:', error);
      });
  };

  const handleDelete = (courseId) => {
    // Optimistically remove the course from the local state
    setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));

    // Send a request to delete the course from the server
    axios.delete(`http://localhost:3000/Corse/${courseId}`)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('Course deleted successfully:', response.data);
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error deleting course:', error);

        // Roll back the state if the request fails
        axios.get('http://localhost:3000/Corse')
          .then(response => {
            // Update the state with the fetched data
            setCourses(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });
  };

  const handleInputChange = (courseId, field, value) => {
    // Update the local state with the changed input value
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId ? { ...course, [field]: value } : course
      )
    );
  };

  return (
    <div className="text-gray-900 bg-white ">
   
      <div className="px-3 py-4  flex justify-end ">
        <table className="w-8/12 text-md bg-[#9DB2BF] shadow-md rounded mb-4 ml-64">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Course Name</th>
              <th className="text-left p-3 px-5">Course Category</th>
              <th className="text-left p-3 px-5">Course Duration</th>
              <th className="text-left p-3 px-5">Pricing</th>
              <th className="text-left p-3 px-5">Course Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-orange-100 ${index % 2 === 0 ? 'bg-[#DDE6ED]' : ''}`}
              >
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={course.Course_Name}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(course.id, 'Course_Name', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={course.Course_Category}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(course.id, 'Course_Category', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={course.Course_Duration}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(course.id, 'Course_Duration', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={course.Pricing}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(course.id, 'Pricing', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <textarea
                    value={course.Course_description}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(course.id, 'Course_description', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleSave(course)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(course.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courses;
