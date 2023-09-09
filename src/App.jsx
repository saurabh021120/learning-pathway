/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import PathwayForm from "./components/Pathway-Form";
import CreaterDashboard from "./components/CreaterDashboard";
import CreaterForm from "./components/CreaterForm";
import LearnForm from "./components/CourseForm";
import CoursePage from "./components/CoursePage";
import CourseForm from "./components/CourseForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<CreaterDashboard />} />
          <Route path="/path" element={<PathwayForm />} />
          <Route path="/learningpathwayform" element={<LearnForm />} />
          <Route path="/coursepage" element={<CoursePage />} />
          <Route path="/courseform" element={<CourseForm />} />
          <Route path="/creatorform" element={<CreaterForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
