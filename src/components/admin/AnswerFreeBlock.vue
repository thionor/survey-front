<template>
    <div class="cmp-answerblock cmp-answerblock--free">
        <input type="text" :model="answer" required>
        <button @click="removeAnswer">Remover resposta</button>
    </div>
</template>

<script>
    export default {
        props: {
            answer: String
        },
        name: 'AnswerFreeBlock',
        data() {
            return {
                isChecked: false
            }
        },
        methods: {
            removeAnswer() {
                this.$emit('removeAnswer');
            }
        }
    }
</script>

<style lang="scss">
    .cmp-answerblock {
        @include answer-block;
    }
    
</style>
