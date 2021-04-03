import React,{useState} from 'react'

const ListWidget = ({widget,_widget, setWidget, editing}) => {
    const [ordered,setOrdered]=useState(widget.ordered)
    return (
        <div>
            <h2>List Widget</h2>
            {
                !editing &&
                <>
                    {
                        _widget.ordered &&
                        <ol>
                            {
                                _widget.text.split("\n").map(item => {
                                    return(
                                        <li key={item}>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !_widget.ordered &&
                        <ul>
                            {
                                _widget.text.split("\n").map(item => {
                                    return(
                                        <li key={item}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input onChange={e=> {
                        setWidget(widget => ({...widget, ordered: !(ordered)}))
                        setOrdered(!ordered)
                    }} type="checkbox" checked={ordered}/> Ordered
                    <br/>
                    List Items
                    <textarea
                        onChange={(e) => setWidget({...widget, text: e.target.value})}
                        value={widget.text}
                        className="form-control" />
                </div>
            }
        </div>
    )
}

export default ListWidget;