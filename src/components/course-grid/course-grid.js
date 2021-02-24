import React, { useState } from "react";
import { Link } from "react-router-dom";
import CourseCard from "./course-card";

const CourseGrid = ({ 
  courses,
updateCourse,
deleteCourse }) => {
  
return (
    <div>
      <Link to="/courses/table">
        <i className="fas fa-2x fa-list float-right"></i>
      </Link>
      <div className="row">
        {courses.map(course=><CourseCard key={course._id} course={course} updateCourse={updateCourse} deleteCourse={deleteCourse} />
        )}
      </div>
    </div>
  );
};

export default CourseGrid;
