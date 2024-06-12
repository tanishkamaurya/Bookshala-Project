import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import list from "../../public/list.json";
import Mood from "../components/Mood";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Course />
      </div>
      <Mood/>
      <Footer />
    </>
  );
}

export default Courses;