import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../../services/topic-service'

const TopicPills = (
    {
        topics=[],
        findTopicsForLesson,
        createTopic,
        updateTopic,
        deleteTopic

    }) => {
    const {layout,courseId,moduleId,lessonId, topicId} = useParams();
    useEffect(() => {
        findTopicsForLesson(lessonId)
    }, [lessonId])
    return(
        <div >
            <ul className="nav nav-pills" style={{marginTop:"1em"}}>
                {
                    topics.map(topic =>
                        <li key={topic._id} className={`nav-width nav-item ${topic._id === topicId ? 'active' : ''}`}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                active={topic._id === topicId}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                item={topic}
                                parentItem={lessonId}/>
                        </li>
                    )
                }
                <li className="nav-item">
                    <i onClick={() => createTopic(lessonId)} className="fas fa-plus float-right"></i>
                </li>
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    createTopic: (lessonId) => {
        if(lessonId == null)
        {
            alert("please select lesson before creating topic")
            return
        }
        topicService
            .createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    }
    ,
    deleteTopic: (item, parentItemId) =>{
            topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            }))
    },
    updateTopic: (topic) =>

        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
})

export default connect(stpm, dtpm)(TopicPills)