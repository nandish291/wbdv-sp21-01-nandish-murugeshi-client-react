import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import questionService from '../../services/questions-service'
import quizService from "../../services/quizzes-service"
import Question from "./questions/question";


const submit=(quizId,questions,setGrade)=>{
    quizService.submitQuiz(quizId,questions)
        .then(p=>
            {
                setGrade(p.score)
            }
        )


}
const Quiz=()=>{
    const {quizId}=useParams();
    const [submitClicked,setSubmitClicked]=useState(false)
    const [quiz,setQuiz]=useState([])
    const [grade,setGrade]=useState(null);
    const [questions,setQuestions]=useState([])
    const getQuiz=()=>{
        questionService.findQuestionsForQuiz(quizId).then(response=>setQuestions(response));
        quizService.findQuizById(quizId).then(response=>setQuiz(response))
    }
    useEffect(()=>getQuiz(),[])
    return(
        <div >
            <h1>{quiz.title}</h1>
            <h3>Score{grade}</h3>
            {
                questions.map(question=> {
                    return(
                        <div >
                            <Question key={question._id} question={question} submitClicked={submitClicked}/>
                        </div>)
                })
            }
            <br />
            <button type={"button"} className='btn btn-primary' onClick={()=>{
                submit(quizId,questions,setGrade);
                setSubmitClicked(true);
            }}>Submit</button>
        </div>
    )
}

export default Quiz;