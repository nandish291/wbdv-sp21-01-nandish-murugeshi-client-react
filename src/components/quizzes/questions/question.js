import React,{useState} from "react";
import TrueFalse from "./truefalse";
import MultipleChoice from "./multiplechoice";

const Question = ({question}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalse
                    question={question}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoice
                    question={question}/>
            }
        </div>
    )
}

export default Question;