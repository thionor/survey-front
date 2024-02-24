<template>
    <div class="cmp-answer" :class="isResponse ? 'cmp-answer--response' : ''">
        <input :type="questionType" ref="answerTitle" name="answer" :placeholder="questionType === 'text' ? 'Texto de resposta curta' : ''" disabled>
        <input v-if="questionType !== 'text'" type="text" :value="answer.title" @input="changeAnswerTitleEvent" :disabled="isResponse">
    </div>
</template>

<script>
export default {
    props: {
        answer: Object,
        questionType: String,
        required: Boolean,
        questionIndex: Number,
        answerIndex: Number,
        isResponse: Boolean
    },
    methods: {
        changeAnswerTitleEvent(event) {
            const payload = {
                questionIndex: this.questionIndex,
                answerIndex: this.answerIndex,
                newTitle: event.target.value
            }
            this.$store.commit('survey/changeAnswerTitle', payload);
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