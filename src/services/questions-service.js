const QUIZZES_URL = 'https://wbdv-01-sp21-nm-server-node.herokuapp.com/api/quizzes';
const findQuestionsForQuiz = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
}
export default {
    findQuestionsForQuiz
}
