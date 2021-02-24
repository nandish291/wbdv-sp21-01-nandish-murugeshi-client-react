import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
  <div><h1>
      Course Editor
      <i className="fas fa-times float-right"
         onClick={() => history.goBack()}></i>
  </h1>
  <div className="row">
  <div className="col-4">

      <ul className="list-group">
          <li className="list-group-item active">
              Module 1
              <i className="pull-right fas fa-trash"></i>
          </li>
          <li className="list-group-item">
              Module 2
              <i className="pull-right fas fa-trash"></i>
          </li>
          <li className="list-group-item">Module 3</li>
          <li className="list-group-item">Module 4</li>
          <li className="list-group-item">Module 5</li>
          <li className="list-group-item">Module 6</li>
          <li className="list-group-item">Module 7</li>
      </ul>

  </div>
  <div className="col-8">
      <ul className="nav nav-tabs">
          <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                  Active
                  <i className="pull-right fas fa-trash"></i>
              </a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
          <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                  <i className="fas fa-plus"></i>
              </a>
          </li>
      </ul>

      <br/>

      <ul className="nav nav-pills">
          <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
      </ul>
      </div>
  </div>
  </div>
export default CourseEditor
