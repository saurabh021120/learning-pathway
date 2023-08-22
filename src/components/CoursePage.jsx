/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const CoursePage = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [sectionId]: !prevOpenSections[sectionId]
    }));
  };
  
  return (
    <div>
      <div className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Learning Pathway Name</h1>
        </div>
      </div>
      <div className="bg-gray-200 w-1/6 p-4">
      <div className="mb-4">
        <div className="font-bold mb-2">Sections</div>
        <ul>
          <li className="mb-2">
            <div className="flex items-center justify-between">
              <span>Section 1</span>
              <button
                className="text-gray-500"
                onClick={() => toggleSection('section1')}
              >
                {openSections['section1'] ? '▲' : '▼'}
              </button>
            </div>
            {openSections['section1'] && (
              <ul className="pl-4">
                <li>Lesson 1.1</li>
                <li>Lesson 1.2</li>
              </ul>
            )}
          </li>
          <hr className="my-2 border-gray-400" />
          <li className="mb-2">
            <div className="flex items-center justify-between">
              <span>Section 2</span>
              <button
                className="text-gray-500"
                onClick={() => toggleSection('section2')}
              >
                {openSections['section2'] ? '▲' : '▼'}
              </button>
            </div>
            {openSections['section2'] && (
              <ul className="pl-4">
                <li>Lesson 2.1</li>
                <li>Lesson 2.2</li>
              </ul>
            )}
          </li>
          <hr className="my-2 border-gray-400" />
          {/* Add more sections */}
          <li className="mb-2">
            <div className="flex items-center justify-between">
              <span>Section 3</span>
              <button
                className="text-gray-500"
                onClick={() => toggleSection('section3')}
              >
                {openSections['section3'] ? '▲' : '▼'}
              </button>
            </div>
            {openSections['section3'] && (
              <ul className="pl-4">
                <li>Lesson 3.1</li>
                <li>Lesson 3.2</li>
              </ul>
            )}
          </li>
          <hr className="my-2 border-gray-400" />
          <li className="mb-2">
            <div className="flex items-center justify-between">
              <span>Section 4</span>
              <button
                className="text-gray-500"
                onClick={() => toggleSection('section4')}
              >
                {openSections['section4'] ? '▲' : '▼'}
              </button>
            </div>
            {openSections['section4'] && (
              <ul className="pl-4">
                <li>Lesson 4.1</li>
                <li>Lesson 4.2</li>
              </ul>
            )}
          </li>
          <hr className="my-2 border-gray-400" />
          <li className="mb-2">
            <div className="flex items-center justify-between">
              <span>Section 5</span>
              <button
                className="text-gray-500"
                onClick={() => toggleSection('section5')}
              >
                {openSections['section5'] ? '▲' : '▼'}
              </button>
            </div>
            {openSections['section5'] && (
              <ul className="pl-4">
                <li>Lesson 5.1</li>
                <li>Lesson 5.2</li>
                <li>Lesson 5.1</li>
                <li>Lesson 5.2</li>
                <li>Lesson 5.1</li>
                <li>Lesson 5.2</li>
              </ul>
            )}
          </li>
          <hr className="my-2 border-gray-400" />
        </ul>
      </div>
    </div>

    </div>
  );
};

export default CoursePage;
