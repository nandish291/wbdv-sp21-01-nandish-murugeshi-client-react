import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import lessonService from '../../services/lesson-service'

const LessonTabs = (
    {
        lessons,
        findLessonsForModule,
        createLesson,
        updateLesson,
        deleteLesson,

    }) => {
    const {layout, courseId, moduleId, lessonId} = useParams();
    useEffect(() => {
            findLessonsForModule(moduleId)
    }, [moduleId])
    return(
        <div>
            <ul className="nav nav-tabs">
                {
                    lessons.map(lesson =>
                        <li key={lesson._id} className={`nav-width nav-item ${lesson._id === lessonId ? 'active' : ''}`}>
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                updateItem={updateLesson}
                                deleteItem={deleteLesson}
                                item={lesson}/>
                        </li>
                    )
                }
                <li className="nav-item">
                    <i onClick={() => createLesson(moduleId)} className="nav-link fas fa-plus"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    lessons: state.lessonReducer.lessons
})
const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            .then(lessons => dispatch({
                type: "FIND_LESSONS",
                lessons
            }))
    },
    createLesson: (moduleId) => {
        lessonService
            .createLesson(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLesson: (item) =>
        lessonService.deleteLesson(item._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: item
            })),
    updateLesson: (lesson) =>
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            })),
})

export default connect(stpm, dtpm)(LessonTabs)