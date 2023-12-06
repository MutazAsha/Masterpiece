import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    Course_Name: '',
    Course_Category: '',
    Course_Duration: '',
    Pricing: '',
    Course_description: '',
    Image: null, // Updated field for file input
  });

  useEffect(() => {
    axios.get('http://localhost:3000/Corse')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSave = (courseData) => {
    const formData = new FormData();
    formData.append('Course_Name', courseData.Course_Name);
    formData.append('Course_Category', courseData.Course_Category);
    formData.append('Course_Duration', courseData.Course_Duration);
    formData.append('Pricing', courseData.Pricing);
    formData.append('Course_description', courseData.Course_description);
    formData.append('Image', courseData.Image);

    axios.put(`http://localhost:3000/Corse/${courseData.id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('Course data updated successfully:', response.data);
        setCourses(prevCourses => prevCourses.map(course =>
          course.id === courseData.id ? { ...course, ...courseData } : course
        ));
      })
      .catch(error => {
        console.error('Error updating course data:', error);
      });
  };

  const handleDelete = (courseId) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));

    axios.delete(`http://localhost:3000/Corse/${courseId}`)
      .then(response => {
        console.log('Course deleted successfully:', response.data);
      })
      .catch(error => {
        console.error('Error deleting course:', error);
        axios.get('http://localhost:3000/Corse')
          .then(response => {
            setCourses(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      });
  };

  const handleInputChange = (courseId, field, value) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === courseId ? { ...course, [field]: value } : course
      )
    );
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setNewCourse(prevNewCourse => ({ ...prevNewCourse, Image: selectedFile }));
  };

  const handleAdd = () => {
    const formData = new FormData();
    formData.append('Course_Name', newCourse.Course_Name);
    formData.append('Course_Category', newCourse.Course_Category);
    formData.append('Course_Duration', newCourse.Course_Duration);
    formData.append('Pricing', newCourse.Pricing);
    formData.append('Course_description', newCourse.Course_description);
    formData.append('Image', newCourse.Image);

    axios.post('http://localhost:8080/createPlan', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => {
        console.log('New course added successfully:', response.data);
        setCourses(prevCourses => [...prevCourses, response.data]);
        setNewCourse({
          Course_Name: '',
          Course_Category: '',
          Course_Duration: '',
          Pricing: '',
          Course_description: '',
          Image: null,
        });
      })
      .catch(error => {
        console.error('Error adding new course:', error);
      });
  };

  return (
    <div className="p-4 flex justify-center mt-28 ml-36">
    <table className="w-full sm:w-11/12 md:w-5/6 lg:w-4/5 xl:w-4/5 bg-white border border-gray-300">
        <thead className="bg-[#9DB2BF] text-white">
          <tr>
            <th className="py-2 px-4">Course Name</th>
            <th className="py-2 px-4">Course Category</th>
            <th className="py-2 px-4">Course Duration</th>
            <th className="py-2 px-4">Pricing</th>
            <th className="py-2 px-4">Course Description</th>
            <th className="py-2 px-4">Image</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr
              key={index}
              className={`border-b hover:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
            >
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={course.Course_Name}
                  className="w-full bg-transparent"
                  onChange={(e) => handleInputChange(course.id, 'Course_Name', e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={course.Course_Category}
                  className="w-full bg-transparent"
                  onChange={(e) => handleInputChange(course.id, 'Course_Category', e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={course.Course_Duration}
                  className="w-full bg-transparent"
                  onChange={(e) => handleInputChange(course.id, 'Course_Duration', e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  value={course.Pricing}
                  className="w-full bg-transparent"
                  onChange={(e) => handleInputChange(course.id, 'Pricing', e.target.value)}
                />
              </td>
              <td className="py-2 px-4">
                <textarea
                  value={course.Course_description}
                  className="w-full bg-transparent"
                  onChange={(e) => handleInputChange(course.id, 'Course_description', e.target.value)}
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
                  className="mr-2 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
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
          <tr className="border-b hover:bg-gray-100">
            <td className="py-2 px-4">
              <input
                type="text"
                value={newCourse.Course_Name}
                className="w-full bg-transparent"
                placeholder="New Course Name"
                onChange={(e) => setNewCourse({ ...newCourse, Course_Name: e.target.value })}
              />
            </td>
            <td className="py-2 px-4">
              <input
                type="text"
                value={newCourse.Course_Category}
                className="w-full bg-transparent"
                placeholder="New Course Category"
                onChange={(e) => setNewCourse({ ...newCourse, Course_Category: e.target.value })}
              />
            </td>
            <td className="py-2 px-4">
              <input
                type="text"
                value={newCourse.Course_Duration}
                className="w-full bg-transparent"
                placeholder="New Course Duration"
                onChange={(e) => setNewCourse({ ...newCourse, Course_Duration: e.target.value })}
              />
            </td>
            <td className="py-2 px-4">
              <input
                type="text"
                value={newCourse.Pricing}
                className="w-full bg-transparent"
                placeholder="New Pricing"
                onChange={(e) => setNewCourse({ ...newCourse, Pricing: e.target.value })}
              />
            </td>
            <td className="py-2 px-4">
              <textarea
                value={newCourse.Course_description}
                className="w-full bg-transparent"
                placeholder="New Course Description"
                onChange={(e) => setNewCourse({ ...newCourse, Course_description: e.target.value })}
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

export default Courses;
