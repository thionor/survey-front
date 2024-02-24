const state = {
    survey: {
        title: 'Pesquisa sem título',
        description: 'Pesquisa sem descrição...',
        draggedAnswerIndex: null,
        questions: [
            {
                
            }
        ]
    },
    usersResponse: [
        {
            user: {
                id: 1,
                email: 'thiago.silva@stefanini.com'
            },
            surveyId: 1,
            responses: [
                {questionId: 1, answerId: 1},
                {questionId: 2, answerIds: [4,5]},
                {questionId: 3, answerText: "Minha resposta de texto"}
            ]
        },
        {
            user: {
                id: 2,
                email: 'maria.luiza@stefanini.com'
            },
            surveyId: 1,
            responses: [
                {questionId: 1, answerId: 2},
                {questionId: 2, answerIds: [4]},
                {questionId: 3, answerText: "Minha resposta de texto 2"}
            ]
        },
        {
            user: {
                id: 3,
                email: 'devid.santos@stefanini.com'
            },
            surveyId: 1,
            responses: [
                {questionId: 1, answerId: 2},
                {questionId: 2, answerIds: [5]},
                {questionId: 3, answerText: "Minha resposta de texto 2"}
            ]
        }
    ]
}

const mutations = {
    addSurvey(state, newSurvey) {
        state.survey = newSurvey;
    },
    addQuestion(state, newQuestion) {
        state.survey.questions.push(newQuestion)
    },
    removeQuestion(state, index) {
        state.survey.questions.splice(index, 1);
    },
    setRequiredQuestion(state, {questionIndex, required}) {
        state.survey.questions[questionIndex].required = required;
    },
    changeQuestionType(state, { questionIndex, newType }) {
        state.survey.questions[questionIndex].type = newType;
    },
    changeQuestionTitle(state, { questionIndex, newTitle }) {
        state.survey.questions[questionIndex].title = newTitle;
    },
    addAnswer(state, { questionIndex, newAnswer }) {
        state.survey.questions[questionIndex].answers.push(newAnswer);
    },
    removeAnswer(state, {questionIndex, answerIndex}) {
        state.survey.questions[questionIndex].answers.splice(answerIndex, 1);
    },
    changeAnswerTitle(state, { questionIndex, answerIndex, newTitle }) {
        state.survey.questions[questionIndex].answers[answerIndex].title = newTitle;
    },
    deleteAllAnswers(state, questionIndex) {
        state.survey.questions[questionIndex].answers = [
            {
                title: 'Opção 1'
            }
        ];
    },
    reorderAnswers(state, { questionIndex, draggedIndex, droppedIndex }) {
        const answers = state.survey.questions[questionIndex].answers;
        const [draggedItem] = answers.splice(draggedIndex, 1);
        answers.splice(droppedIndex, 0, draggedItem);
    },
    setDraggedAnswerIndex(state, index) {
        state.survey.draggedAnswerIndex = index;
    },
}

export default {
    namespaced: true,
    state,
    mutations
}
