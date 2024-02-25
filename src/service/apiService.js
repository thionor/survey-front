import axios from '../config/axiosConfig';

// Surveys
export const getSurvey = (surveyId) => {
    return axios.get(`survey/${surveyId}/all`);
}

export const addSurvey = (title, description) => {
    return axios.post(`survey/create`, {
        title: title,
        description: description
    })
}

export const updateSurvey = (title, description, surveyId) => {
    return axios.put(`survey/${surveyId}`, {
        title: title,
        description: description
    })
}

// Questions
export const addQuestion = (title, type, surveyId) => {
    return axios.post(`question/create`, {
        title: title,
        type: type,
        surveyId: surveyId
    })
}

export const updateQuestion = (title, type, questionId, surveyId) => {
    return axios.put(`question/${questionId}`, {
        title: title,
        type: type,
        surveyId: surveyId
    })
}

export const deleteQuestion = (id) => {
    return axios.delete(`question/${id}`);
}

//Answers
export const addAnswer = (title, questionId) => {
    return axios.post(`answer/create`, {
        title: title,
        questionId: questionId
    })
}

export const updateAnswer = (title, questionId, answerId) => {
    return axios.put(`answer/${answerId}`, {
        title: title,
        questionId: questionId
    })
}