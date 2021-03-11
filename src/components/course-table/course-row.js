import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
  {
    course,
    lastModified="1/1/2021",
    owner="who knows?",
      deleteCourse,
      updateCourse
  }) => {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(course.title)

    const saveCourse = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: title
        }
        updateCourse(newCourse)
    }

    return(
        <tr>
        <td>
            {
                !editing &&
                <Link to={`/courses/table/edit/${course._id}`}>
                    {course.title}
                </Link>
            }
            {
                editing &&
                <input
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
            }
        </td>
        <td className="d-none d-sm-table-cell">{course.owner}</td>
        <td className="d-none d-md-table-cell">{course.lastModified}</td>
        <td>
            <i onClick={() => deleteCourse(course)} className="fas fa-trash" />
            {
                editing &&
                <i onClick={() => saveCourse()} className="fas fa-check" />
            }

            {
                !editing &&
                <i onClick={() => setEditing(true)} className="fas fa-edit" />
            }


        </td>
    </tr>)
}

export default CourseRow
