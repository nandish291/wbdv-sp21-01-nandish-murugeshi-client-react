import React,{useState} from 'react'

const HeadingWidget = ({_widget,widget, setWidget, editing,widId}) => {
    const [size,setSize]=useState(_widget.size)
    return(<div>
        {   !editing &&
        <div>
            {size === 1 && <h1>{_widget.text}</h1>}
            {size === 2 && <h2>{_widget.text}</h2>}
            {size === 3 && <h3>{_widget.text}</h3>}
            {size === 4 && <h4>{_widget.text}</h4>}
            {size === 5 && <h5>{_widget.text}</h5>}
            {size === 6 && <h6>{_widget.text}</h6>}
        </div>
        }

        {
            editing &&
            <div>
                <input onChange={(e) => setWidget(widget => ({...widget, text: e.target.value}))} value={widget.text}
                       className="form-control" style={{marginBottom:"1em"}}/>
                <select onChange={(e) => {
                    setSize(parseInt(e.target.value))
                    setWidget(widget => ({...widget, size: parseInt(e.target.value)}))
                }}
                        value={widget.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </div>
        }
    </div>)
}

export default HeadingWidget