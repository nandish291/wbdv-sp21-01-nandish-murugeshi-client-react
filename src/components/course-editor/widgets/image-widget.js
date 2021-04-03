import React from 'react'

const ImageWidget = ({widget,_widget, setWidget, editing}) => {
    const style={width:_widget.width,height:_widget.height}
    return (
        <div>
            <h2>Image Widget</h2>
            {
                editing &&
                <div>
                    URL
                    <input value={widget.url} onChange={(e =>setWidget(widget=>({...widget,url:e.target.value})) )}
                           className="form-control"/>
                    width
                    <input value={widget.width} onChange={(e =>setWidget(widget=>({...widget,width:e.target.value})) )}
                           className="form-control"/>
                    height
                    <input value={widget.height} onChange={(e =>setWidget(widget=>({...widget,height:e.target.value})) )}
                           className="form-control"/>
                </div>
            }
            {
                !editing &&
                   <div>
                       <img src={_widget.url} style={style} alt={"Image Text"}/>
                   </div>
            }
        </div>
    )
}

export default ImageWidget