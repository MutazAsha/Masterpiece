// CoursePage.jsx

import React from 'react';
import CoursePlan from './CoursePlan';
import Chat from './Chat';
import LiveCam from './LiveCam';

const CoursePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Course Title</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Training Plan</h2>
            <CoursePlan />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Chat with the Trainer</h2>
            <Chat />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Live Cam</h2>
          <LiveCam />
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
