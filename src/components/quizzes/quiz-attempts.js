import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizService from "../../services/quizzes-service"

const Attempts = () => {
    const {quizId} = useParams();
    const [quiz,setQuiz]=useState(null)
    const [attempts, setAttempts] = useState([])
    useEffect(() => {
        if(quizId === undefined)
        {

        }else{
            quizService.findAllAttemptsForQuiz(quizId)
                .then(a=>{
                    setAttempts(a)})
        }

    }, [])
    return(
        <div>
            <h2>Attempts for quiz {quizId}- </h2>
            <ol className="list-group list-group-numbered">
                {
                    attempts.map( a => {
                        return(
                            <li className="list-group-item" key={a._id}>
                                <div className="row">

                                    <div className="col-4">
                                        Attempt
                                    </div>


                                    <div className="col-4 ">
                                        Score: {a.score}

                                    </div>
                                </div>


                            </li>

                        )
                    })
                }
            </ol>
        </div>
    )
}

export default Attempts;