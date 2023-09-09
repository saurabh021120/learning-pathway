/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/*background-image: linear-gradient( 109.6deg,  rgba(254,253,205,1) 11.2%, rgba(163,230,255,1) 91.1% );*/
import React, { useState } from "react";

const PathwayForm = () => {
  const [section, addSection] = useState([{ section: "" }]);
  const [lesson, addLesson] = useState([{ lesson: "" }, { lesson: "" }]);

  const handleSectionAdd = () => {
    addSection([...section, { section: "" }]);
  };

  const handleLessonAdd = () => {
    addLesson([...lesson, { lesson: "" }]);
  };

  const handleSubmit = async () => {
    const learningPathId = "c76fdd2a-0d18-4275-ac76-53a0a08087b8";
    const resources = lesson.map((item, index) => ({
      id: (index + 1).toString(),
      name: item.lesson,
      type: "",
      description: "",
      link: "",
    }));

    const requestBody = JSON.stringify({
      learning_path_id: learningPathId,
      resources,
    });

    try {
      const response = await fetch(
        "https://f3qz4eid4h.execute-api.ap-south-1.amazonaws.com/testing_skillmapping/edit_resources",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );

      if (response.status === 200) {
        console.log("Form submitted successfully");
        // You can add further logic here for successful submission
      } else {
        console.error(
          "Error submitting the form. Status Code: " + response.status
        );
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mt-4 w-1/2 shadow-4xl border-2 border-black">
        <h2 className="text-5xl font-normal leading-normal mt-0 mb-2 text-black-800 text-center">
          Learning Pathway Form
        </h2>
        <form className="items-center justify-center p-8">
          <div className="flex flex-col border-2 border-black-500">
            <h2 className="text-2xl font-normal leading-normal mt-0 mb-2 text-black-800 text-center">
              Sections of the Learning Pathway
            </h2>
            {section.map((singleSection, index) => (
              <div key={index} className="px-5">
                <br />
                <div className="">
                  <label
                    className="flex flex-col block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`SectionName-${index}`}
                  >
                    {index + 1} Section Name
                  </label>
                  <input
                    className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={`SectionName-${index}`}
                    type="text"
                    placeholder="Section Name"
                  />

                  <div className="flex flex-col w-96">
                    {lesson.map((singleLesson, ind) => (
                      <div key={ind} className="px-4">
                        <label
                          className="flex flex-col block text-gray-700 text-sm font-bold mb-2"
                          htmlFor={`LessonName-${index}-${ind}`}
                        >
                          {ind + 1} Lesson Name
                        </label>
                        <input
                          className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`LessonName-${index}-${ind}`}
                          type="text"
                          placeholder="Lesson Name"
                        />
                        <br />
                        <label
                          className="flex flex-col block text-gray-700 text-sm font-bold mb-2"
                          htmlFor={`Description-${index}-${ind}`}
                        >
                          Lesson Single Line Description
                        </label>
                        <input
                          className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`Description-${index}-${ind}`}
                          type="text"
                          placeholder="Description"
                        />
                        <br />
                        <label
                          className="flex flex-col block text-gray-700 text-sm font-bold mb-2"
                          htmlFor={`Link-${index}-${ind}`}
                        >
                          Lesson Link
                        </label>
                        <input
                          className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`Link-${index}-${ind}`}
                          type="url"
                          placeholder="Link"
                        />
                        <label
                          className="flex flex-col block text-gray-700 text-sm font-bold mb-2"
                          htmlFor={`LessonHours-${index}-${ind}`}
                        >
                          Lesson Hours
                        </label>
                        <input
                          className="mb-4 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id={`LessonHours-${index}-${ind}`}
                          type="text"
                          placeholder="Lesson Hours"
                        />
                        <br />
                        <hr />
                        <br />
                        <br />
                        {lesson.length - 1 === ind && (
                          <button
                            type="button"
                            onClick={handleLessonAdd}
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                          >
                            Add Another Lesson
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <hr />
                  <hr />
                  <br />
                  <br />
                  {section.length - 1 === index && (
                    <button
                      type="button"
                      onClick={handleSectionAdd}
                      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Add Another Section
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          <hr />
          <br />
          <br />
          <button
            type="button"
            onClick={handleSubmit}
            className="text-white bg-gradient-to-r from-black-400 via-black-500 to-black-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Submit Learning Pathway
          </button>
        </form>
      </div>
    </div>
  );
};

export default PathwayForm;
