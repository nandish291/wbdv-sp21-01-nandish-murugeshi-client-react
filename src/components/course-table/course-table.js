import React from 'react'
import CourseRow from "./course-row";
import {Link} from "react-router-dom";
import "./course-table.css";

export default class CourseTable extends
  React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    return(
      <div>        
        
        <table className="table" >
            <thead>
              <th>title</th>
              <th className="d-none d-sm-table-cell">Owned By</th>
              <th className="d-none d-md-table-cell">Last modified</th>
              <th>
              <i className="fas fa-folder"></i>
              <i className="fas fa-sort-alpha-up-alt "></i>
              <Link to="/courses/grid">
              <i className="fas fa-th fa-2x"></i>
              </Link> 
              </th>
            </thead>
            <tbody>
              {
                this.props.courses.map(course =>
                  <CourseRow
                      key={course._id}
                      deleteCourse={this.props.deleteCourse}
                      updateCourse={this.props.updateCourse}
                    course={course}
                    title={course.title}
                    lastModified={course.lastModified}
                    owner={course.owner}/>)
              }
            </tbody>
        </table>
      </div>
    )
  }
}
