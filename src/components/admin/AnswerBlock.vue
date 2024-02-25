<template>
    <div class="cmp-answer" :class="isResponse ? 'cmp-answer--response' : ''">
        <input :type="questionType" ref="answerTitle" name="answer" :placeholder="questionType === 'text' ? 'Texto de resposta curta' : ''" disabled>
        <input v-if="questionType !== 'text'" type="text" :value="answer.title" @input="changeAnswerTitleEvent" :disabled="isResponse">
    </div>
</template>

<script>
import { updateAnswer } from '@/service/apiService';
export default {
    props: {
        answer: Object,
        questionType: String,
        required: Boolean,
        questionIndex: Number,
        answerIndex: Number,
        isResponse: Boolean,
        question: Object
    },
    data() {
        return {
            saveAnswerTimeout: null
        }
    },
    methods: {
        handleSaveAnswer() {
            clearTimeout(this.saveAnswerTimeout);
            this.saveAnswerTimeout = setTimeout(() => {
                if(this.answer.id) {
                    this.updateAnswer();
                }
            }, 1000);
        },

        changeAnswerTitleEvent(event) {
            const payload = {
                questionIndex: this.questionIndex,
                answerIndex: this.answerIndex,
                newTitle: event.target.value
            }
            this.$store.commit('survey/changeAnswerTitle', payload);
            this.handleSaveAnswer();
        },
        updateAnswer() {
            updateAnswer(this.answer.title, this.question.id, this.answer.id).then((data) => {
                console.log(data.data);
            }).catch((error) => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.$emit('answerBlockRendered');
    }
}
</script>

<style lang="scss">
    .cmp-answer {
        display: flex;
        align-items: center;
        width: 100%;
        height: rem(50px);
        gap: rem(16px);
    }

    .cmp-answer--response {
        input:disabled {
            background-color: unset;
        }
    }
</style>