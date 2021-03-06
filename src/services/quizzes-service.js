const QUIZZES_URL = 'https://wbdv-01-sp21-nm-server-node.herokuapp.com/api/quizzes';
const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}
const findQuizById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}

export const submitQuiz = (quizId, questions) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: "POST",
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findAllAttemptsForQuiz = (quizId) =>
    fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'GET'
    })
        .then(response => response.json())

export default {
    findAllQuizzes, findQuizById,submitQuiz,findAllAttemptsForQuiz
}



