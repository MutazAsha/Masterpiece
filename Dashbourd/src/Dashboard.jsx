import React from 'react';
import Users from './Users';
import Blogs from './Blogs';
import Courses from './Courses';
import ContactUs from './Contactus';
import Statistics from './Statistics';

const Dashboard = () => {
  return (
    <div className="text-gray-700 body-font">

<Statistics/>
      <div className="container mx-auto px-4 py-8">
        <Users />
        <hr className="my-8" />
        <Blogs />
        <hr className="my-8" />
        <Courses />
        <hr className="my-8" />
        <ContactUs />
      </div>
    </div>
  );
};

export default Dashboard;
