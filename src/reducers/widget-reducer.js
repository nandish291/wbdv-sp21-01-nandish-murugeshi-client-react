import {CREATE_WIDGET,UPDATE_WIDGET,DELETE_WIDGET,FIND_WIDGETS_FOR_TOPIC} from "../actions/widget-actions"

const initialState={
    widgets: []
}

const widgetReducer=(state=initialState,action)=>{
    switch (action.type){
        case CREATE_WIDGET:
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(widget=>{
                    if(widget.id === action.widget.id){
                        return action.widget;
                    }
                    else return widget;
                })
            }
        case DELETE_WIDGET:
            return ({
                ...state,
                widgets: state.widgets.filter(widget=>{
                    return widget.id !== action.widgetToDelete;
                })
        })
        case FIND_WIDGETS_FOR_TOPIC:
            return {
                ...state,
                widgets: action.widgets
            }
        default: return state;
    }
}

export default widgetReducer;

