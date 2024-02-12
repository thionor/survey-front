<template>
    <div :key="questionIndex">
        <h3>Question {{ questionIndex + 1 }}</h3>
        <div>
            <label for="questionText">Question Text:</label>
            <input v-model="questionCopy.text" type="text" id="questionText" @input="updateQuestionText" />
        </div>

        <button @click="addAnswer">Add Answer</button>
        <button @click="removeQuestion">Remove Question</button>
    </div>
</template>
  
<script>

export default {
    props: {
        question: Object,
        questionIndex: Number
    },

    data() {
        return {
            questionCopy: { ...this.question }
        };
    },
    watch: {
        question: function (newQuestion) {
            this.questionCopy = { ...newQuestion };
        }
    },
    methods: {
        addAnswer() {
            this.$emit("add-answer", this.questionIndex);
        },
        removeAnswer(answerIndex) {
            this.$emit("remove-answer", this.questionIndex, answerIndex);
        },
        removeQuestion() {
            this.$emit("remove-question", this.questionIndex);
        },
        updateQuestionText() {
            this.$emit("update-question-text", this.questionIndex, this.questionCopy.text);
        }
    }
};
</script>
  