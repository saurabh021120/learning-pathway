/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";

const CreaterForm = () => {
  const [formData, setFormData] = useState({    
      "sub_id": "",
      "general_details": {
        "name": "",
        "about": "",
        "linkedin_id": ""
      },
      "mentorship_details": {
        "mentorship_charge": 0,
        "is_creator_available_for_doubts": false,
        "is_creator_going_to_charge": false,
        "preffered_medium_of_contact": "",
        "contact_info": ""
      }
    
  });

  const handleChange = (e) => {
    const arr = e.target.id.split(".")    
    let temp = {...formData}
    let inputvalue=e.target.value
    console.log(inputvalue)
    if (inputvalue=="yes"){
      inputvalue=true
    }
    else if (inputvalue=="false"){
      inputvalue=false
    }
    temp[arr[0]][arr[1]] = inputvalue
    setFormData(temp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save the formData to your desired location, e.g., an API, database, or local storage.

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
  };
    
    fetch("https://f3qz4eid4h.execute-api.ap-south-1.amazonaws.com/testing_skillmapping/add_new_creator",requestOptions).then(response=>{
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
      }
      response.json().then(data=>{
        console.log(data);
        setFormData(prevFormData => ({
          ...prevFormData,
          sub_id: data.id
        }))
        console.log("form being submitted",formData)
      })
    }).catch(error=>{
      console.log("Error in fetch call",error)
    })
    
  };

  useEffect(() => {   
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData) }

    fetch("https://f3qz4eid4h.execute-api.ap-south-1.amazonaws.com/testing_skillmapping/edit_creator_info",requestOptions).then(response=>{
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
      }
      response.json().then(data=>{
        console.log(data)
      })
    }).catch(error=>{
      console.log(error)
    })
  }, [formData.sub_id]);

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
            id="mentorship_details.is_creator_available_for_doubts"
            value={formData.mentorship_details.is_creator_available_for_doubts}
            onChange={handleChange}
            className="border rounded px-2 py-1"
          >
            <option value={null}>Select an option</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <br />
          <br />
          <label htmlFor="instructorChargesFees" className="block mb-2">2. Will instructor charge fees?</label>
          <select
            id="mentorship_details.is_creator_going_to_charge"
            value={formData.mentorship_details.is_creator_going_to_charge}
            onChange={handleChange}
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
            id="mentorship_details.preffered_medium_of_contact"
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
           About Instructor
          </label>
          <textarea
            rows={7}
            name="message"
            id="general_details.about"
            value={formData.general_details.about}
            placeholder="Description"
            className="shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
          <br />
          <br />
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
