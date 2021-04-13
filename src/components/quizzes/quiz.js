import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import questionService from '../../services/questions-service'
import quizService from "../../services/quizzes-service"
import Question from "./questions/question";

const Quiz=()=>{
    const {quizId}=useParams();
    const [quiz,setQuiz]=useState([])
    const [questions,setQuestions]=useState([])
    const getQuiz=()=>{
        questionService.findQuestionsForQuiz(quizId).then(response=>setQuestions(response));
        quizService.findQuizById(quizId).then(response=>setQuiz(response))
    }
    useEffect(()=>getQuiz(),[])
    return(
        <div >
            <h1>{quiz.title}</h1>
            {
                questions.map(question=> {
                    return(
                        <div key={question._id}>
                            <Question question={question}/>
                        </div>)
                })
            }
            <br />
        </div>
    )
}

export default Quiz;