import React, { useEffect, useState } from "react";
import FitGrid from "../../Images/FitGrid.png";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";

const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [user, setUser] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    if (cookie.token !== undefined) {
      setUser(true);
    } else {
      setUser(false);
    }
  }, [cookie]);

  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  return (
    <header className="border-b">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen h-[6rem] flex flex-wrap items-center justify-between mx-auto p-4">
          {/* logo img */}
          <Link to="/" className="flex items-center">
            <img src={FitGrid} className="mr-3 h-20" alt="CraftVine Logo" />
          </Link>
          <div className="flex md:order-2">
            {/* toggle button */}
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              onClick={() => setIsMenuOpened(!isMenuOpened)}
              aria-controls="navbar-search"
              aria-expanded={isMenuOpened}
              className="md:hidden mx-1 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden={!isMenuOpened}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            {/* search bar */}
            <div className="relative hidden md:block h-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
           
            {/* search icon */}
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              onClick={() => setIsMenuOpened(!isMenuOpened)}
              className="inline-flex mx-1 items-center p-2 w-10 h-10 justify-center  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={isMenuOpened}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden={!isMenuOpened}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {/* login button */}
            <Link
              to="/login"
              className={`${!user && "md:block"} hidden`}
            >
              <button className="bg-gray-800 hover:bg-gray-600 rounded-full text-white h-10 px-4">
                Signin | Signup
              </button>
            </Link>
            {/* profile img */}
            <Link
              to="/account"
              className={`${!user ? "hidden" : "block"}`}
            >
              <img
                className="rounded-full h-10 w-10 ml-3"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Profile"
              />
            </Link>
          </div>
          <div
            className={`items-center justify-between ${
              isMenuOpened ? "" : "hidden"
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-search"
          >
            <div className="flex justify-between">
              <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block p-2 pl-10 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                />
              </div>
              <Link
                to="/login"
                className={`${
                  user ? "hidden" : "md:hidden"
                } self-start`}
              >
                <button className="bg-teal-600 rounded-full text-white h-10  my-3 px-4">
                  Signin|Signup
                </button>
              </Link>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pl-3 pr-4 text-white bg-grey-600 rounded md:bg-transparent md:text-gray-600 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              <li>
  <Link
    to="/trainers"  // Change to "/trainers" in lowercase
    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  >
    Trainers
  </Link>
</li>
<li>
  <Link
    to="/Class"  // Change to "/trainers" in lowercase
    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
  >
  Class
  </Link>
</li>
             
              <li>
                <Link
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
