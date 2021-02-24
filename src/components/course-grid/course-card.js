import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./course-grid.css";

const CourseCard = ({
    course,
    updateCourse,
    deleteCourse
}) =>  {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(course.title);

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    const onChangeHandler= (e) => {
        setTitle()
    }

    return(
        // <h1>Hi</h1>
        <div className="card">
            <img
              src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              {!editing && <h5 className="card-title"> {course.title}</h5>}
              {editing && 
                <input
                  className="form-control"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              }
              <p className="card-text">This is a sample desciption</p>
              <Link to="/editor" className="btn btn-primary">
                Edit details
              </Link>
            </div>
            <i onClick={() => deleteCourse(course)} className="fas  fa-trash"></i>
            {/*<i onClick={() => setEditing((prevEditing) => !prevEditing)} className="fas fa-edit"></i>*/}

            {
                editing &&
                <i onClick={() => saveCourse()} className="fas fa-check pull-right"></i>
            }

            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
            }

          </div>
    )
}

export default CourseCard;