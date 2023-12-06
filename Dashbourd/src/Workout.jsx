import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WorkoutPage = () => {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({
    title: '',
    content: '',
    image: null,
  });

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('http://localhost:8080/getAllExerciseImages');
        setExercises(response.data);
      } catch (error) {
        console.error('Error fetching exercises: ', error);
      }
    };

    fetchExercises();
  }, []);

  const handleSave = (exerciseData) => {
    const formData = new FormData();
    formData.append('title', exerciseData.title);
    formData.append('content', exerciseData.content);
  
    // Check if exerciseData.image is a File
    if (exerciseData.image instanceof File) {
      formData.append('image', exerciseData.image);
    }
  
    axios
      .put(`http://localhost:8080/updateExerciseImage/${exerciseData.id}`, formData)
      .then((response) => {
        console.log('Exercise data updated successfully:', response.data);
  
        // Update the state with the modified exercise data
        setExercises((prevExercises) =>
          prevExercises.map((exercise) =>
            exercise.id === exerciseData.id ? { ...exercise, ...exerciseData } : exercise
          )
        );
      })
      .catch((error) => {
        console.error('Error updating exercise data:', error);
      });
  };
  
  

  const handleDelete = (id) => {
    setExercises(prevExercises => prevExercises.filter(exercise => exercise.id !== id));
    axios.put(`http://localhost:8080/softDeleteExerciseImage/${id}`)
      .then(response => {
        console.log('Exercise deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting exercise:', error);

        axios.get('http://localhost:8080/getAllExerciseImages')
          .then(response => {
            setExercises(response.data);
          })
          .catch(error => {
            console.error('Error fetching workout data:', error);
          });
      });
  };

  const handleInputChange = (exerciseId, field, value) => {
    setExercises(prevExercises =>
      prevExercises.map(exercise =>
        exercise.id === exerciseId ? { ...exercise, [field]: value } : exercise
      )
    );
  };

  const handleFileChange = (e) => {
    setNewExercise({ ...newExercise, image: e.target.files[0] });
  };

  const handleAdd = () => {
    const formData = new FormData();
    formData.append('title', newExercise.title);
    formData.append('content', newExercise.content);
    formData.append('image', newExercise.image);

    axios.post('http://localhost:8080/createExerciseImage', formData)
      .then(response => {
        console.log('New exercise added successfully:', response.data.message);
        setExercises(prevExercises => [...prevExercises, response.data.exerciseImage]);
        setNewExercise({ title: '', content: '', image: null });
      })
      .catch(error => {
        console.error('Error adding new exercise:', error);
      });
  };

  return (
    <div className="p-4 flex justify-center mt-28 ml-36">
      <table className="w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-4/5 bg-white border border-gray-300">
        <thead className="bg-[#9DB2BF] text-white">
          <tr>
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
            >
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={exercise.title}
                  className="w-full bg-transparent border-none"
                  onChange={(e) => handleInputChange(exercise.id, 'title', e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={exercise.content}
                  className="w-full bg-transparent border-none"
                  onChange={(e) => handleInputChange(exercise.id, 'content', e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <img src={exercise.image_url} alt={exercise.title} className="max-h-20" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </td>
              <td className="py-2 px-4 flex justify-end space-x-2">
                <button
                  type="button"
                  className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleSave(exercise)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleDelete(exercise.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr className="border-b hover:bg-gray-200">
            <td className="py-2 px-4">
              <input
                type="text"
                value={newExercise.title}
                className="w-full bg-transparent border-none"
                placeholder="New Title"
                onChange={(e) => setNewExercise({ ...newExercise, title: e.target.value })}
              />
            </td>
            <td className="py-2 px-4">
              <input
                type="text"
                value={newExercise.content}
                className="w-full bg-transparent border-none"
                placeholder="New Description"
                onChange={(e) => setNewExercise({ ...newExercise, content: e.target.value })}
              />
            </td>
            <td className="py-2 px-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </td>
            <td className="py-2 px-4 flex justify-end">
              <button
                type="button"
                className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                onClick={handleAdd}
              >
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutPage;




// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// const WorkoutPage = () => {
//   const [exercises, setExercises] = useState([]);
//   const [newExercise, setNewExercise] = useState({
//     title: '',
//     content: '',
//     image: null,
//   });

//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [photoName, setPhotoName] = useState(null);
//   const [photoPreview, setPhotoPreview] = useState(null);
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     const fetchExercises = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/getAllExerciseImages');
//         setExercises(response.data);
//       } catch (error) {
//         console.error('Error fetching exercises: ', error);
//       }
//     };

//     fetchExercises();
//   }, []);

//   const handleSave = async (exerciseData) => {
//     try {
//       const formData = new FormData();
//       formData.append('title', exerciseData.title);
//       formData.append('content', exerciseData.content);
//       formData.append('image', exerciseData.image);

//       const response = await axios.put(`http://localhost:8080/updateExerciseImage/${exerciseData.id}`, formData);
      
//       console.log('Exercise data updated successfully:', response.data);

//       // Update the state with the modified exercise data
//       setExercises((prevExercises) =>
//         prevExercises.map((exercise) =>
//           exercise.id === exerciseData.id ? { ...exercise, ...exerciseData } : exercise
//         )
//       );

//       setSuccessMessage('Exercise data updated successfully!');
//     } catch (error) {
//       console.error('Error updating exercise data:', error);
//       setError('Error updating exercise data. Please try again.');
//     }
//   };

//   const handleDelete = async (id) => {
//     setExercises((prevExercises) => prevExercises.filter((exercise) => exercise.id !== id));

//     try {
//       const response = await axios.put(`http://localhost:8080/softDeleteExerciseImage/${id}`);
//       console.log('Exercise deleted successfully:', response.data);
//     } catch (error) {
//       console.error('Error deleting exercise:', error);

//       // Roll back the state if the request fails
//       const fetchExercises = async () => {
//         try {
//           const response = await axios.get('http://localhost:8080/getAllExerciseImages');
//           setExercises(response.data);
//         } catch (error) {
//           console.error('Error fetching workout data:', error);
//         }
//       };

//       fetchExercises();
//     }
//   };

//   const handleInputChange = (exerciseId, field, value) => {
//     setExercises((prevExercises) =>
//       prevExercises.map((exercise) =>
//         exercise.id === exerciseId ? { ...exercise, [field]: value } : exercise
//       )
//     );
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setNewExercise({ ...newExercise, image: file });

//     if (file) {
//       setPhotoName(file.name);

//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setPhotoPreview(e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSelectPhoto = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleAdd = async () => {
//     if (!newExercise.image) {
//       setError('Please provide an image for the exercise.');
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append('title', newExercise.title);
//       formData.append('content', newExercise.content);
//       formData.append('image', newExercise.image);

//       const response = await axios.post('http://localhost:8080/createExerciseImage', formData);
//       console.log('New exercise added successfully:', response.data.message);

//       setExercises((prevExercises) => [...prevExercises, response.data.exerciseImage]);
//       setNewExercise({ title: '', content: '', image: null });
//       setSuccessMessage('New exercise added successfully!');
//       setError('');
//     } catch (error) {
//       console.error('Error adding new exercise:', error);
//       setError('Error adding new exercise. Please try again.');
//     }
//   };

//   return (
//     <div className="p-4 flex justify-center mt-28 ml-36">
//       <table className="w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-4/5 bg-white border border-gray-300">
//         <thead className="bg-[#9DB2BF] text-white">
//           <tr>
//             <th className="py-2 px-4">Title</th>
//             <th className="py-2 px-4">Description</th>
//             <th className="py-2 px-4">Image</th>
//             <th className="py-2 px-4">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {exercises.map((exercise, index) => (
//             <tr
//               key={index}
//               className={`border-b hover:bg-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
//             >
//               <td className="py-2 px-4">
//                 <div>{exercise.id}</div>
//                 <input
//                   type="text"
//                   value={exercise.title}
//                   className="w-full bg-transparent border-none"
//                   onChange={(e) => handleInputChange(exercise.id, 'title', e.target.value)}
//                 />
//               </td>
//               <td className="py-2 px-4">
//                 <input
//                   type="text"
//                   value={exercise.content}
//                   className="w-full bg-transparent border-none"
//                   onChange={(e) => handleInputChange(exercise.id, 'content', e.target.value)}
//                 />
//               </td>
//               <td className="py-2 px-4">
//                 <div className="mt-2">
//                   <span
//                     className="block w-20 h-20 m-auto shadow"
//                     style={{
//                       backgroundSize: 'cover',
//                       backgroundRepeat: 'no-repeat',
//                       backgroundPosition: 'center center',
//                       backgroundImage: `url('${exercise.gif_url}')`,
//                     }}
//                   />
//                 </div>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   className="hidden"
//                   ref={fileInputRef}
//                   onChange={(e) => handleInputChange(exercise.id, 'image', e.target.files[0])}
//                 />
//                 <button
//                   type="button"
//                   className="inline-flex items-center px-2 py-1 bg-indigo-500 border border-indigo-500 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-indigo-600 focus-outline-none focus-border-indigo-400 focus-shadow-outline-indigo active-text-gray-800 active-bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
//                   onClick={() => handleSelectPhoto(exercise.id)}
//                 >
//                   Change Image
//                 </button>
//               </td>
//               <td className="py-2 px-4 flex justify-end space-x-2">
//                 <button
//                   type="button"
//                   className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                   onClick={() => handleSave(exercise)}
//                 >
//                   Save
//                 </button>
//                 <button
//                   type="button"
//                   className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                   onClick={() => handleDelete(exercise.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//           <tr className="border-b hover:bg-gray-200">
//             <td className="py-2 px-4">
//               <input
//                 type="text"
//                 value={newExercise.title}
//                 className="w-full bg-transparent border-none"
//                 placeholder="New Title"
//                 onChange={(e) => setNewExercise({ ...newExercise, title: e.target.value })}
//               />
//             </td>
//             <td className="py-2 px-4">
//               <input
//                 type="text"
//                 value={newExercise.content}
//                 className="w-full bg-transparent border-none"
//                 placeholder="New Description"
//                 onChange={(e) => setNewExercise({ ...newExercise, content: e.target.value })}
//               />
//             </td>
//             <td className="py-2 px-4">
//               <div className="mt-2">
//                 <span
//                   className="block w-20 h-20  m-auto shadow"
//                   style={{
//                     backgroundSize: 'cover',
//                     backgroundRepeat: 'no-repeat',
//                     backgroundPosition: 'center center',
//                     backgroundImage: `url('${
//                       newExercise.gif_url !== null ? newExercise.gif_url : '/default-image.jpg'
//                     }')`,
//                   }}
//                 />
//               </div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 ref={fileInputRef}
//                 onChange={handleFileChange}
//               />
//               <button
//                 type="button"
//                 className="inline-flex items-center px-2 py-1 bg-green-500 border border-green-500 rounded-md font-semibold text-xs text-white uppercase tracking-widest shadow-sm hover:bg-green-600 focus-outline-none focus-border-green-400 focus-shadow-outline-green active-text-gray-800 active-bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
//                 onClick={handleSelectPhoto}
//               >
//                 Select Image
//               </button>
//             </td>
//             <td className="py-2 px-4 flex justify-end">
//               <button
//                 type="button"
//                 className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
//                 onClick={handleAdd}
//               >
//                 Add
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       {successMessage && <p className="text-green-600 mt-2">{successMessage}</p>}
//       {error && <p className="text-red-600 mt-2">{error}</p>}
//     </div>
//   );
// };

// export default WorkoutPage;
