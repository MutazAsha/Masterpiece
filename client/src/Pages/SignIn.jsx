import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

const SignIn = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });

      const token = response.data.token;
      const user_id = response.data.user_id;

      Cookies.set('token', token);
      Cookies.set('user_id', user_id);

      setError('Sign-in successful');
      history('/');
      alert('Sign-in successful:', response.data);
      console.log('Sign-in successful:', response.data);
    } catch (error) {
      setTimeout(() => {
        console.error('Sign-in error:', error);
        setError('Sign-in failed. Email or password is invalid');
      }, 300);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-20 bg-image bg-[50%] bg-cover h-full" style={{ backgroundImage: 'url(https://png.pngtree.com/background/20230607/original/pngtree-black-gym-room-that-boasts-exercise-equipment-picture-image_2902852.jpg)', }}>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white px-20 py-5 rounded-lg shadow-xl backdrop-filter backdrop-blur-lg">
          <h2 className="font-bold text-2xl mb-5 text-center">SignIn</h2>
          <div>
            <input
              className="w-full p-2 border rounded-md mt-4"
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 border rounded-md mt-4"
              placeholder="Password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 transition delay-150 duration-300 ease-in-out">{error}</p>}
          <br/><br/>
          <button
            onClick={handleSignIn}
            className={`w-full p-2 bg-gray-800 text-white rounded-3xl mt-4 hover:bg-gray-600 ${loading && 'opacity-50 cursor-not-allowed'}`}
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          <br/><br/>
          <p className="text-center text-sm text-gray-500">Don't have an account yet?
            <a href="/Signup" 
              className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign up
            </a>.
          </p>
          <br/>
          <a href='http://localhost:5000/auth/google'>
            <div className="flex items-center justify-center  dark:bg-gray-800">
              <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150  hover:bg-teal-15">
                <img
                  className="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Login with Google</span>
              </button>
            </div>
          </a> 
        </div>
      </div>
    </div>
  );
}

export default SignIn;
