import React,{useEffect,useState} from 'react'
import quizService from '../../services/quizzes-service'
import {Link,useParams} from "react-router-dom";

const Quizzes=()=>{
    const {courseId}=useParams();
    const [quizzes,setQuizzes] = useState([])
    const findQuizzes= ()=>{
        quizService.findAllQuizzes().then(response=> {
            setQuizzes(response);
        })

    }
    useEffect(()=>findQuizzes(),[]);


    return(
        <div className='col-4'>
            <h1>Quizzes</h1>
            <div className="list-group">{
                quizzes.map(quiz =>
                    <div className='list-group-item'>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`} >{quiz.title}</Link>
                        <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                            <button className='btn btn-primary float-right'>Start</button> </Link>
                        <Link className="float-right"
                              to={`/quizzes/${quiz._id}/attempts`}>
                            All Attempts for {quiz.title}
                        </Link>
                    </div>
                )
                }

                </div>

                </div>
                )
            }

                export default Quizzes;