import React, {useState, useEffect} from 'react'
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom"
import widgetActions from "../../../actions/widget-actions";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        widgets,
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic
    }) => {
    const {topicId,lessondId,moduleId} = useParams()
    const [widget, setWidget] = useState({})
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [topicId,lessondId,moduleId])
    return(
        <div>
            <i onClick={()=>{
                if (topicId === undefined)
                    alert("select a topic before proceeding")
                else
                    createWidget(topicId)}} className="fas fa-plus float-right fa-2x"></i>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {
                                _widget.id === widget.id &&
                                <>
                                    <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
                                    <i onClick={() => {
                                        updateWidget(widget)
                                        setWidget({})
                                    }} className="fas fa-check float-right"></i>
                                    <select value={widget.type} onChange={e=> setWidget({...widget,type:e.target.value })} className="form-control" style={{marginTop:"2em",marginBottom:"1em"}}>
                                        <option value={"HEADING"}>Heading</option>
                                        <option value={"PARAGRAPH"}>Paragraph</option>
                                        <option value={"IMAGE"}>IMAGE</option>
                                        <option value={"LIST"}>LIST</option>
                                    </select>
                                </>
                            }
                            {
                                _widget.id !== widget.id &&
                                <>
                                <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>

                                </>
                            }
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    widId={_widget.id}
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    _widget={_widget}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    _widget={_widget}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "LIST" &&
                                <ListWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    _widget={_widget}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "IMAGE" &&
                                <ImageWidget
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    _widget={_widget}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm=(state)=>({
    widgets: state.widgetReducer.widgets
})

const dtmp=(dispatch) => ({
    findWidgetsForTopic: (topicId) => widgetActions.findWidgetsForTopic(dispatch,topicId),
    createWidget: (topicId) => widgetActions.createWidget(dispatch,topicId),
    deleteWidget: (widgetId) => widgetActions.deleteWidget(dispatch,widgetId),
    updateWidget: (widget) => {
        widgetActions.updateWidget(dispatch,widget)
    }


})
export default connect(stpm,dtmp)(WidgetList)