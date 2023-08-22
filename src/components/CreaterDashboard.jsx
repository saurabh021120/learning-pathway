/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreaterDashboard = () => {
  const [activeTab, setActiveTab] = useState("createdLearningPath");
  return (
    <div className="w-full">
      <div className="items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 shadow-md flex flex-col lg:flex-row w-full">
          {/* Creator Description */}
          <div className="mt-4 lg:mt-0 lg:mr-100 pr-96 flex-grow">
            <h2 className="text-xl font-semibold mb-2">Creator Name</h2>
            <p className="text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum purus nec justo interdum, a ullamcorper mi tincidunt.
              orem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum purus nec justo interdum, a ullamcorper mi tincidunt.
              orem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum purus nec justo interdum, a ullamcorper mi tincidunt.
            </p>
            <Link to="/creatorform">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-4">
                Become a Creater
              </button>
            </Link>
          </div>

          {/* Customer Image */}
          <div className="flex-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" // Replace with the actual image source
              alt="Creator"
              className="w-80 h-40 rounded-full"
            />
          </div>
        </div>

        <div className="mt-8 h-screen bg-gray-100">
          {/* Dashboard with Tabs */}
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-3xl mb-4">
            {/* Tabs */}
            <div className="flex border-b border-gray-300 pb-2">
              <button
                className={`text-gray-600 mr-4 ${
                  activeTab === "createdLearningPath"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => setActiveTab("createdLearningPath")}
              >
                Created Learning Path
              </button>
              <button
                className={`text-gray-600 ${
                  activeTab === "upcomingLearningPath"
                    ? "border-b-2 border-blue-500"
                    : ""
                }`}
                onClick={() => setActiveTab("upcomingLearningPath")}
              >
                Upcoming Learning Path
              </button>
            </div>

            {/* Conditional Buttons */}
            <div className="flex justify-center mt-4">
              {activeTab === "createdLearningPath" ? (
                <Link to="/courseform">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                    Create Learning Path
                  </button>
                </Link>
              ):(
                <Link to="/coursepage">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600">
                    Learning Path in Progress
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreaterDashboard;
