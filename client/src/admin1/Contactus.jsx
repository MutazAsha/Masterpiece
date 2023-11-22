import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch data from your API using Axios
    axios.get('http://localhost:3000/contactus')
      .then(response => {
        // Update the state with the fetched data
        setSubmissions(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleSave = (submissionData) => {
    // Send a request to update the submission data on the server
    axios.put(`http://localhost:3000/contactus/${submissionData.id}`, submissionData)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('Submission data updated successfully:', response.data);

        // Optionally, you can update the local state with the new data
        setSubmissions(prevSubmissions => prevSubmissions.map(submission =>
          submission.id === submissionData.id ? { ...submission, ...submissionData } : submission
        ));
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error updating submission data:', error);
      });
  };

  const handleDelete = (submissionId) => {
    // Optimistically remove the submission from the local state
    setSubmissions(prevSubmissions => prevSubmissions.filter(submission => submission.id !== submissionId));

    // Send a request to delete the submission from the server
    axios.delete(`http://localhost:3000/contactus/${submissionId}`)
      .then(response => {
        // Handle success, e.g., show a success message
        console.log('Submission deleted successfully:', response.data);
      })
      .catch(error => {
        // Handle error, e.g., show an error message
        console.error('Error deleting submission:', error);

        // Roll back the state if the request fails
        axios.get('http://localhost:3000/contactus')
          .then(response => {
            // Update the state with the fetched data
            setSubmissions(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });
  };

  const handleInputChange = (submissionId, field, value) => {
    // Update the local state with the changed input value
    setSubmissions(prevSubmissions =>
      prevSubmissions.map(submission =>
        submission.id === submissionId ? { ...submission, [field]: value } : submission
      )
    );
  };

  return (
    <div className="text-gray-900 bg-white">
      <h1 className="text-[#27374D] text-4xl mb-6 font-bold item-center justify-center text-center">ContactUs</h1>
      <div className="p-4 flex">
     
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-8/12 text-md bg-[#9DB2BF] shadow-md rounded mb-4 ml-64">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr
                key={index}
                className={`border-b hover:bg-orange-100 ${index % 2 === 0 ? 'bg-[#DDE6ED]' : ''}`}
              >
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={submission.name}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(submission.id, 'name', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <input
                    type="text"
                    value={submission.email}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(submission.id, 'email', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5">
                  <textarea
                    value={submission.message}
                    className="bg-transparent"
                    onChange={(e) => handleInputChange(submission.id, 'message', e.target.value)}
                  />
                </td>
                <td className="p-3 px-5 flex justify-end">
                  <button
                    type="button"
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleSave(submission)}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleDelete(submission.id)}
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

export default ContactUs;
