import React from "react";
import { Link, useLocation } from "react-router-dom";
import FitGrid from "../../Images/FitGrid.png";

const Footer = () => {
  const user = null;
  // const user = "hello"
  const location = useLocation();
  if(location.pathname == '/login' || location.pathname == '/signup'){
    return null;
  }

  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
     

      {/* Main container div: holds the entire content of the footer, including four sections (TW elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* TW elements section */}
          <div className="md:pr-3 flex flex-col items-center md:items-start">
              <div>
                <img className="h-[80px]" src={FitGrid} alt="CraftVine Logo"/>
              </div>
            <p>
            Your Home, Elevated. Discover modern and new furniture for a perfect blend of style and affordability.
            </p>
          </div>
          {/* Products section */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-grey-600">
              Explore
            </h6>
            <p className="mb-4">
              <Link to='/' className="text-neutral-600 dark:text-neutral-200">
                Home
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/Trainers" className="text-neutral-600 dark:text-neutral-200">
                Trainers
              </Link>
            </p>
          </div>
          {/* Useful links section */}
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-grey-600">
              Useful links
            </h6>
            <p className="mb-4">
              <Link to={user !== null? '/account' : '/login'} className="text-neutral-600 dark:text-neutral-200">
                Account
              </Link>
            </p>
           

          </div>
          {/* Contact section */}
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start text-grey-600">
              About Us
            </h6>
           
            <p className="mb-4 flex items-center justify-center md:justify-start">
            
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <Link to="/contact" className="text-neutral-600 dark:text-neutral-200">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-gray-800 p-6 text-center dark:bg-[#2d54545c] text-white" >
        <span>© 2023 Copyright:</span>
        <Link
          className="font-semibold  text-white"
          to='/'
        >
           MA GYM
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

// links not working 