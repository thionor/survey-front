<template>
    <label for="surveyTitle">Survey title:></label>
    <input type="text" :model="surveyTitle" id="surveyTitle" required />

    <label for="surveyDescription">Survey Description:</label>
    <textarea :v-model="surveyDescription" id="surveyDescription"></textarea>

    <QuestionBlock v-for="(question, index) in questions" :key="index" :question="question" :questionIndex="index"
        @remove-question="removeQuestion(index)" @add-answer="addAnswer(index)"
        @update-question-text="updateQuestionText" />

    <button @click="addQuestion"> Add Question</button>
    <button @click="createSurvey">Create Survey</button>
</template>

<script>
import QuestionBlock from './QuestionBlock.vue';
export default {
    data() {
        return {
            surveyTitle: 'Meu titulo',
            surveyDescription: 'Minha descrição',
            questions: []
        }
    },
    components: {
        QuestionBlock
    },
    methods: {
        addQuestion() {
            this.questions.push({
                text: 'Untitled question',
                answers: [{ text: "", type: "single" }]
            })

            console.log(this.questions)
        },
        removeQuestion(index) {
            this.questions.splice(index, 1);
        },
        updateQuestionText(questionIndex, newText) {
            this.questions[questionIndex] = { ...this.questions[questionIndex], text: newText };
        }
    }
}
</script>