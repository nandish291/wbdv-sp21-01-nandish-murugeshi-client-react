import React from 'react'
import {Link,useParams} from "react-router-dom";
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";

import moduleReducer from "../../reducers/module-reducer";
import lessonReducer from "../../reducers/lesson-reducer";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicTabs from "./topic-pills";
import topicReducer from "../../reducers/topic-reducer";
import WidgetList from "./widgets/widget-list";
import widgetReducer from "../../reducers/widget-reducer";

const reducer = combineReducers({
    moduleReducer,
    lessonReducer,
    topicReducer,
    widgetReducer
})


const store=createStore(reducer)

const CourseEditor = ({history}) =>{
    const {layout, courseId, moduleId, topicId} = useParams()
    return (<Provider store={store}><h1>
        Course Editor
        <Link to={`/courses/${layout}`}>
            <i className="fas fa-times float-right"></i>
        </Link>
    </h1>
        <div className="row">
            <div className="col-3">
                <ModuleList />
            </div>
            <div className="col9">
                <LessonTabs/>
                <TopicTabs/>
                <WidgetList/>
            </div>

        </div>
    </Provider>)
}
export default CourseEditor
