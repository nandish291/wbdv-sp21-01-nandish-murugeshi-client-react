import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"

function App() {
  return (
      <BrowserRouter>
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          {/*<Route path="/editor" exact={true} render={(props) => <CourseEditor {...props}/>}/>*/}
              <Route path={[
                  "/courses/:layout/edit/:courseId",
                  "/courses/:layout/edit/:courseId/modules/:moduleId",
                  "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId"
              ]}
                     exact={true}
                     render={(props) => <CourseEditor {...props}/>}/>
      </BrowserRouter>
  );
}

export default App;
