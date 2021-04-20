import React,{useState} from "react";
import TrueFalse from "./truefalse";
import MultipleChoice from "./multiplechoice";

const Question = ({question,submitClicked}) => {
    return(
        <div>
            {
                question.type === "TRUE_FALSE" &&
                <TrueFalse
                    question={question} submitClicked={submitClicked}/>
            }
            {
                question.type === "MULTIPLE_CHOICE" &&
                <MultipleChoice
                    question={question} submitClicked={submitClicked}/>
            }
        </div>
    )
}

export default Question;