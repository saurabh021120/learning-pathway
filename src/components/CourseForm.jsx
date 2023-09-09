/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Select from 'react-select';

const LearnForm = () => {
  const [courseInfo, setCourseInfo] = useState({
    title: '',
    description: '',
    target: [],
    sectors: [],
    functions: [],
  });

  const functionOptions = [
    'Marketing',
    'Sales',
    'Operations and Supply Chain Management',
    'Research and Development - General',
    'Systems and IT',
    'Finance',
    'Product Management',
    'Consulting',
    'Business Data Analytics',
    'Data Science',
    'Software Engineering',
    'Accounting',
    'Business Development',
    'General Management',
    'Program Management',
    'Corporate Strategy',
    'Mergers and Acquisitions',
    'Investment banking',
    'Business, Data and Process Analyst',
    'Sourcing',
    'HR',
    'Others',
    'Research and Development - Electronics',
    'Research and Development - Embedded systems',
    'Research and Development - Automobile',
  ];

  const sectorOptions = [
    'Banking, Financial Services and Insurance',
    'Conglomerates',
    'Consulting',
    'Consumer Goods (FMCG)',
    'Consumer Services',
    'Engineering/ Technology',
    'Information Technology',
    'Manufacturing',
    'Media/Communications',
    'Online services',
    'EdTech',
    'Enterprise tech',
    'Hospitality and Technology',
    'Retail B2B and B2C',
    'Pharma and Healthcare',
    'Real Estate',
    'Telecom',
    'Others',
  ];

  const targetAudienceOptions = [
    'BE/BTech Year 1',
    'BE/BTech Year 2',
    'BE/BTech Year 3',
    'BE/BTech Year 4',
    'BSc Year 1',
    'BSc Year 2',
    'BSc Year 3',
    'ME/MTech Year 1',
    'ME/MTech Year 2',
    'MSc Year 1',
    'MSc Year 2',
    'Ph.D',
    'Others',
  ];

  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedFunctions, setSelectedFunctions] = useState([]);
  const [selectedTargetAudience, setSelectedTargetAudience] = useState([]);

  const handleInputChange = (field, value) => {
    setCourseInfo(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSectorChange = selectedOptions => {
    setSelectedSectors(selectedOptions);
  };

  const handleFunctionChange = selectedOptions => {
    setSelectedFunctions(selectedOptions);
  };

  const handleTargetAudienceChange = selectedOptions => {
    setSelectedTargetAudience(selectedOptions);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST', // Use the appropriate HTTP method
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: courseInfo.title,
        description: courseInfo.description,
        target: selectedTargetAudience.map(option => option.value),
        sectors: selectedSectors.map(option => option.value),
        functions: selectedFunctions.map(option => option.value),
      }),
      mode: 'no-cors'
    };

    fetch('https://f3qz4eid4h.execute-api.ap-south-1.amazonaws.com/testing_skillmapping/add_learning_path', requestOptions)
      .then(response => {
        if (response.status !== 200) {
          console.log(requestOptions.body);
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(data => {
          console.log(data);
          // Handle any additional logic after successful submission
        });
      })
      .catch(error => {
        console.error('Error in fetch call:', error);
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
            <Select
              id="target"
              isMulti
              options={targetAudienceOptions.map(option => ({ value: option, label: option }))}
              value={selectedTargetAudience}
              onChange={handleTargetAudienceChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="functions" className="block mb-2 font-medium">Functions</label>
            <Select
              id="functions"
              isMulti
              options={functionOptions.map(option => ({ value: option, label: option }))}
              value={selectedFunctions}
              onChange={handleFunctionChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sectors" className="block mb-2 font-medium">Sectors</label>
            <Select
              id="sectors"
              isMulti
              options={sectorOptions.map(option => ({ value: option, label: option }))}
              value={selectedSectors}
              onChange={handleSectorChange}
            />
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
