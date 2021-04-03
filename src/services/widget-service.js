const BASE_URL="http://localhost:8080/api/"

const createWidget = (widget) =>
    fetch(`${BASE_URL}/topics/${widget.topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())


const deleteWidget = (id) =>
    fetch(`${BASE_URL}/widgets/${id}`, {
        method: "DELETE"
    }).then(response => response.json())

const updateWidget = (id, widget) =>
    fetch(`${BASE_URL}/widgets/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }).then(response => response.json())

const findAllWidgetsforTopic=(topicId) =>
    fetch(`${BASE_URL}/topics/${topicId}/widgets`)
        .then(response => response.json())

const api={
    createWidget, updateWidget,deleteWidget,findAllWidgetsforTopic
}

export default api;