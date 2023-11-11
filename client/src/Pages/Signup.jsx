import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const hendleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      setLoading(false);
      return;
    } else {
      setError("");
    }

    if (!validatePassword(password)) {
      setError(`Password must contain at least one lowercase letter, one uppercase letter, \n
        one digit,\n one special character (@#$%^&!), and be between 6 and 30 characters in length.`);
      setLoading(false);
      return;
    } else {
      setError("");
    }

    if (!validateFirstName(first_name)) {
      setError("First Name must be between 3 and 20 characters in length.");
      setLoading(false);
      return;
    } else {
      setError("");
    }

    if (!validateLastName(last_name)) {
      setError("Last Name must be between 3 and 20 characters in length.");
      setLoading(false);
      return;
    } else {
      setError("");
    }

    try {
      const response = await axios.post("http://localhost:3000/Regestart", {
        email,
        first_name,
        last_name,
        password,
        phone,
      });

      console.log(response.status);
      if (response.status === 201) {
        alert("Sign Up successful! Please check your email for verification.");
        history("/login");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setError("Email is already taken. Please use a different email.");
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.(com|net)$/.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{6,30}$/;
    return passwordPattern.test(password);
  };

  const validateFirstName = (first_name) => {
    return /^[A-Za-z\s]{3,20}$/.test(first_name);
  };

  const validateLastName = (last_name) => {
    return /^[A-Za-z\s]{3,20}$/.test(last_name);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div className="p-20 bg-image bg-[50%] bg-cover h-full" style={{ backgroundImage: 'url()', }}>
      <div className="flex justify-center items-center h-screen ">
        <div className="bg-gray-100 px-20 py-5 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg">
          <h2 className="font-bold text-2xl mb-5 text-center">Sign Up </h2>
          <div className="grid grid-cols-2 gap-4 ">
            <input
              className="w-full p-2 border rounded-md"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              type="text"
              required
            />
            <input
              className="w-full p-2 border rounded-md"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              type="text"
              required
            />
          </div>
          <input
            className="w-full p-2 border rounded-md mt-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
          />
          <input
            className="w-full p-2 border rounded-md mt-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            required
          />
          <div className="flex items-center mt-2">
            <input
              className="mr-2"
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={toggleShowPassword}
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <div>
            <input
              className="w-full p-2 border rounded-md mt-4"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone number (e.g. 78-956-6789)"
              required
            />
          </div>
          <button
            className={`w-full p-2 bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600 ${loading && 'opacity-50 cursor-not-allowed'}`}
            onClick={hendleSignUp}
            disabled={loading}
          >
            {loading ? 'Signing Up...' : 'Sign up'}
          </button>
          {error && (
            <p className="text-red-600 mt-2">
              {Array.isArray(error) ? error.join("\n") : error}
            </p>
          )}
          <button className=" mt-4  focus:outline-none text-blaxk  border-0 py-3 px-12 w-40 font-bold text-sm cursor-pointer transition-all duration-300  ">
            {" "}
            or Log in
          </button>
          <div className="flex justify-center">
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-google"></i>
            </button>
            <button className="p-2 mx-3 text-blue-500">
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
