import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({_widget,widget, setWidget, editing}) => {
    return (
        <div>
            {
                editing &&
                <textarea
                    onChange={(e) => setWidget({...widget, text: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>
            }
            {
                !editing &&
                <p>
                    {_widget.text}
                </p>
            }
        </div>
    )
}

export default ParagraphWidget