<template>
    <div class="cmp-answerblock cmp-answerblock--multiple">
        <input type="checkbox" :name="groupName" :model="isChecked">
        <input type="text" v-if="!isChecked" :model="answer" required>
        <button @click="removeAnswer">Remover resposta</button>
    </div>
</template>

<script>
    export default {
        props: {
            answer: String,
            groupName: String
        },
        name: 'AnswerMultipleBlock',
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
