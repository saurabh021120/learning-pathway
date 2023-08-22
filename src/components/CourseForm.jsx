/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const LearnForm = () => {
  const [courseInfo, setCourseInfo] = useState({
    title: '',
    description: '',
    target: '',
    sectors: [],
    functions: [],
  });

  const [selectedSectors, setSelectedSectors] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [inputFunctionValue, setInputFunctionValue] = useState('');

  const handleInputChange = (field, value) => {
    setCourseInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleInputFunctionKeyDown = e => {
    if (e.key === 'Enter' && inputFunctionValue.trim() !== '') {
      setSelectedFunctions(prevSkills => [...prevSkills, inputFunctionValue.trim()]);
      setInputFunctionValue('');
    }
  };

  const handleFunctionRemove = skill => {
    setSelectedFunctions(prevSkills => prevSkills.filter(item => item !== skill));
  };

  const handleInputKeyDown = e => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setSelectedSectors(prevSkills => [...prevSkills, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleSectorRemove = skill => {
    setSelectedSectors(prevSkills => prevSkills.filter(item => item !== skill));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', {
      ...courseInfo,
      skills: selectedSectors,
    });
  };

  return (
    <div className="w-180 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform transition-all hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4">Learning Pathway Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 font-medium">Learning Pathway Title</label>
            <input
              type="text"
              id="title"
              value={courseInfo.title}
              onChange={e => handleInputChange('title', e.target.value)}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-medium">Learning Pathway Description</label>
            <textarea
              id="description"
              value={courseInfo.description}
              onChange={e => handleInputChange('description', e.target.value)}
              className="border rounded px-3 py-2 w-full h-24 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="target" className="block mb-2 font-medium">Target Audience</label>
            <input
              type="text"
              id="target"
              value={courseInfo.target}
              onChange={e => handleInputChange('target', e.target.value)}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="skills" className="block mb-2 font-medium">Functions</label>
            <div className="border rounded px-3 py-2 w-full flex flex-wrap">
              {selectedFunctions.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    className="ml-1 text-sm font-medium"
                    onClick={() => handleFunctionRemove(skill)}
                  >
                    &#10005;
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputFunctionValue}
                onChange={e => setInputFunctionValue(e.target.value)}
                onKeyDown={handleInputFunctionKeyDown}
                className="flex-grow outline-none"
                placeholder="Type and press Enter to add function related to"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="skills" className="block mb-2 font-medium">Sectors</label>
            <div className="border rounded px-3 py-2 w-full flex flex-wrap">
              {selectedSectors.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white px-2 py-1 rounded-full mr-2 mb-2 flex items-center"
                >
                  {skill}
                  <button
                    type="button"
                    className="ml-1 text-sm font-medium"
                    onClick={() => handleSectorRemove(skill)}
                  >
                    &#10005;
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="flex-grow outline-none"
                placeholder="Type and press Enter to add sector related to"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LearnForm;
