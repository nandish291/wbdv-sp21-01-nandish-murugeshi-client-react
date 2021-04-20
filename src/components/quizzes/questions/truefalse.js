import React, {useEffect, useState} from "react";


const setSubmitAnswer=(question,choice)=>{
    question.answer=choice;
}
const TrueFalse = ({question,submitClicked}) => {
    const checkSubmit=()=>{
        if(submitClicked===true){
            if(answer === question.correct)
            {
                setCorrect(true)
                setShowAnswers(false)
            }else{

                setCorrect(false)
                setShowAnswers(true)
            }
        }
    }
    useEffect(()=>checkSubmit(),[submitClicked])
    const [answer, setAnswer] = useState(null)
    const [correct, setCorrect] = useState(false)
    const [showAnswers, setShowAnswers] = useState(false)
    return (
        <div className='col-5'>

            <h3>{question.question}
                {
                    showAnswers&&
                    (
                        (answer!==null)?
                            (answer)?
                                (question.correct?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>):
                                (!question.correct?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>):''
                    )
                }

                {
                    correct&&
                    (
                        (answer!==null)?
                            (answer)?
                                (question.correct?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>):
                                (!question.correct?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>):''
                    )
                }
            </h3>
            <br/>
            <ul className="list-group">
                <li  className={`list-group-item 
                ${
                    showAnswers&&
                    (question.correct?'list-group-item-success':'list-group-item-danger')
                } ${
                    correct &&
                    (question.correct?'list-group-item-success':'')
                }
                `}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            setAnswer(true);
                            setShowAnswers(false);
                            setCorrect(false);
                            setSubmitAnswer(question,"true")

                        }}
                        name={question._id}/>True</label>

                    {
                        showAnswers&&
                        (question.correct?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>)
                    }

                    {
                        correct &&
                        (question.correct?<i  className="fas fa-check float-right"></i>:'')
                    }
                </li>

                <li  className={`list-group-item 
                ${
                    showAnswers&&
                    (!question.correct?'list-group-item-success':'list-group-item-danger')
                } ${
                    correct &&
                    (!question.correct?'list-group-item-success':'')
                }
                `}>
                    <label><input
                        type="radio"
                        onClick={() => {
                            setAnswer(false);
                            setShowAnswers(false);
                            setCorrect(false);
                            setSubmitAnswer(question,"false")
                        }}
                        name={question._id}/>False</label>

                    {
                        showAnswers&&
                        (!question.correct?<i  className="fas fa-check float-right"></i>:<i  className="fas fa-times float-right"></i>)
                    }

                    {
                        correct &&
                        (!question.correct?<i  className="fas fa-check float-right"></i>:'')
                    }

                </li>
            </ul>
            <br/>
            Your Answer: {(answer===null)?'':((answer)?'True':'False')}
            <br/>
            <br/>


        </div>
    )
}

export default TrueFalse;