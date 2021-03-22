import widgetService from "../services/widget-service"

export const CREATE_WIDGET="CREATE_WIDGET"
export const UPDATE_WIDGET="UPDATE_WIDGET"
export const DELETE_WIDGET="DELETE_WIDGET"
export const FIND_WIDGETS_FOR_TOPIC="FIND_WIDGETS_FOR_TOPIC"

export const createWidget = (dispatch,topicId) =>{
    widgetService.createWidget({type: "HEADING",topicId, size: 1, text: "New Widget"})
        .then(widget=> dispatch({type: CREATE_WIDGET,widget}))
}

export const updateWidget = (dispatch,updateWidget) =>{
    widgetService.updateWidget(updateWidget.id,updateWidget)
        .then(status=> dispatch({type: UPDATE_WIDGET,widget:updateWidget}))
}

export const deleteWidget = (dispatch, widgetToDelete) => {
    widgetService.deleteWidget(widgetToDelete)
        .then(status => dispatch({type: DELETE_WIDGET, widgetToDelete}))
}

export const findWidgetsForTopic = (dispatch, topicId) => {
    widgetService.findAllWidgetsforTopic(topicId)
        .then(widgets => dispatch({
            type: FIND_WIDGETS_FOR_TOPIC,
            widgets
        }))
    // result.then((widgets)=> console.log(widgets));
}

const widgetActions={
    createWidget,updateWidget,deleteWidget,findWidgetsForTopic
}

export default widgetActions;