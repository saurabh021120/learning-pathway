/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React,{useState} from "react";

const CreaterForm = () => {
  const [formData, setFormData] = useState({
    general_details: {
      name: '',
      about: '',
    },
    mentorship_details: {
      is_creator_available_for_doubts: "",
      is_creator_going_to_charge: "",
      preffered_medium_of_contact: "",
      contact_info: ""
    }
  });

  const handleChange = (e) => {
    const arr = e.target.id.split(".")
    let temp = formData
    temp[arr[0]][arr[1]] = e.target.value
    setFormData(formData)
    console.log(formData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save the formData to your desired location, e.g., an API, database, or local storage.
    console.log('Form data submitted:', formData);
  };

  const [questions, setQuestions] = useState({
    instructorAvailable: null,
    instructorChargesFees: null,
  });

  const handleInputChange = (question, value) => {
    setQuestions(prevState => ({
      ...prevState,
      [question]: value,
    }));
  };
  return (
    <div className="flex items-center justify-center">
      <div className="mt-4 w-1/2 shadow-4xl border-2 border-black ">
        <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-black-800 text-center">
          Creater Form
        </h2>
        <form onSubmit={handleSubmit} className="items-center justify-center p-8">
          <label
            class=" flex flex-col block text-gray-700 text-sm font-bold mb-2"
            for="Instructor Name"
          >
            Instructor Name
          </label>
          <label
            class=" flex flex-col block text-gray-700 text-sm font-bold mb-2"
            for="Course Name"
          >
           Creator Name
          </label>
          <input
            class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="general_details.name"
            value={formData.general_details.name}
            type="text"
            placeholder="Creator Name"
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="instructorAvailable" className="block mb-2">1. Will instructor be available for Doubts?</label>
          <select
            id="instructorAvailable"
            value={questions.instructorAvailable}
            onChange={e => handleInputChange('instructorAvailable', e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value={null}>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br />
          <br />
          <label htmlFor="instructorChargesFees" className="block mb-2">2. Will instructor charge fees?</label>
          <select
            id="instructorChargesFees"
            value={questions.instructorChargesFees}
            onChange={e => handleInputChange('instructorChargesFees', e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value={null}>Select an option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <br />
          <br />
          <label
            class=" flex flex-col block text-gray-700 text-sm font-bold mb-2"
            for="Course Name"
          >
           Instructor Prefer mode of communication 
          </label>
          <input
            class="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="Course Name"
            type="text"
            placeholder="Email/WhatsApp/....."
            onChange={handleChange}
          />
          <br />
          <br />
          <label
            class=" flex flex-col block text-gray-700 text-sm font-bold mb-2"
            for="Description"
          >
            Description
          </label>
          <textarea
            rows={7}
            name="message"
            placeholder="Description"
            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
          <br />
          <br />
          <br />
        </form>
      </div>
      </div>
  );
};

export default CreaterForm;
