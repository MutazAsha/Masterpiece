import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';

const Profile = () => {
  const [user, setUser] = useState({});
  const [formValues, setFormValues] = useState({});
  const [cookie] = useCookies(["token"]);
  const [photoName, setPhotoName] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (cookie.token !== undefined) {
      setUser(true);
      axios.get(`http://localhost:5000/user`, {
        headers: { 'token': cookie.token }
      })
        .then((response) => {
          setUser(response.data);
          setFormValues(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      setUser(false);
    }
  }, [cookie.token]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setPhotoName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSelectPhoto = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (!error) {
      const updatedUser = {
        id: user.user_id,
        first_name: formValues.first_name || '',
        last_name: formValues.last_name || '',
        email: formValues.email || '',
        phone: formValues.phone || '',
        profile_image_name: imageFile ? imageFile.name : null,
      };

      try {
        const response = await axios.put(
          `http://localhost:5000/updateuser`,
          updatedUser,
          {
            headers: { 'token': cookie.token },
          }
        );
        console.log(response.data);
        setSuccessMessage("Profile updated successfully!");
      } catch (error) {
        console.error("Error updating Information", error);
        setSuccessMessage("");
        alert("Error updating Information");
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-2/3 bg-gray-300 my-6 md:ml-24 px-10 py-5 rounded-lg">
          <form>
            <div className="flex flex-col md:flex-row flex-wrap justify-around">
              <div>
                <div className="col-span-6 ml-2 sm:col-span-4 md:mr-3">
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <div className="text-center">
                    <div className="mt-2">
                      <span
                        className="block w-40 h-40 rounded-full m-auto shadow"
                        style={{
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center center",
                          backgroundImage: `url('${
                            photoPreview !== null
                              ? photoPreview
                              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          }')`,
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover-text-gray-500 focus-outline-none focus-border-blue-400 focus-shadow-outline-blue active-text-gray-800 active-bg-gray-50 transition ease-in-out duration-150 mt-2 ml-3"
                      onClick={handleSelectPhoto}
                    >
                      Select New Photo
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-around w-full xl:w-2/3">
                <div>
                  <label htmlFor="first_name" className="self-start p-2">
                    First Name
                  </label>
                  <input
                    className="w-full mb-3 p-2 border rounded-md"
                    onChange={handleInputChange}
                    placeholder={user.first_name}
                    type="text"
                    name="first_name"
                  />
                  <label htmlFor="last_name" className="self-start p-2">
                    Last Name
                  </label>
                  <input
                    className="w-full mb-3 p-2 border rounded-md"
                    onChange={handleInputChange}
                    placeholder={user.last_name}
                    type="text"
                    name="last_name"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start mt-2">
              <label htmlFor="email" className="self-start p-2">
                Email
              </label>
              <input
                className="w-full p-2 border rounded-md"
                onChange={handleInputChange}
                placeholder={user.email}
                type="email"
                name="email"
              />
            </div>

            <div className="mb-3">
              <div className="flex flex-col justify-start mt-2">
                <label htmlFor="phone" className="self-start p-2">
                  Phone
                </label>
                <input
                  className="w-full p-2 border rounded-md"
                  onChange={handleInputChange}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={user.phone}
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                className="w-1/4 mr-3 p-2 bg-gray-800 hover:bg-gray-600 text-white rounded-xl mt-2"
                type="clear"
              >
                Cancel
              </button>
              <button
                className="w-auto py-2 px-3 bg-grey-600 text-white rounded-xl mt-2"
                onClick={handleSaveChanges}
              >
                Save Changes
              </button>
            </div>

            {successMessage && (
              <p className="text-green-600 mt-2">{successMessage}</p>
            )}
            {error && (
              <p className="text-red-600 mt-2">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
