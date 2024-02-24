<template>
    <div class="cmp-question">
        <div class="cmp-question__header">
            <input ref="questionTitle" class="input-control input-control--regular" type="text" :disabled="isResponse"
                :value="question.title" @input="changeQuestionTitleEvent">
            <select name="questionTypeSelected" v-model="typeSelected" v-if="!isResponse"
                @change="changeQuestionTypeEvent()">
                <option selected value="radio">Unica escolha</option>
                <option value="checkbox">Multipla escolha</option>
                <option value="text">Campo livre</option>
            </select>
        </div>
        <ul class="cmp-question__answer-list">
            <li class="cmp-question__answer-item d-flex d-flex--sb" :disabled="isResponse" v-for="(answer, index) in question.answers" :key="index"
                :draggable="!isResponse" @dragstart="handleDragStart(index)" @dragover="handleDragOver" @drop="handleDrop"
                @dragend="handleDragEnd" @dragenter="handleDragEnter" @dragleave="handleDragLeave"
                :class="{ 'drag-over': index === $store.state.survey.survey.draggedAnswerIndex }" :data-index="index">
                <AnswerBlock :ref="`answerBlock_${index}`" @answerBlockRendered="focusLastAnswerTitle"
                    :required="question.required" :questionType="question.type" :answer="answer"
                    :questionIndex="questionIndex" :questionId="question.id" :answerIndex="index" :isResponse="isResponse"></AnswerBlock>

                <TrashIcon v-if="question.type !== 'text' && !isResponse" @click="removeAnswer(index)" class="icon icon--cursor" />
            </li>
        </ul>
        <button v-if="question.type !== 'text' && !isResponse" class="button" @click="addNewAnswer">Adicionar Resposta</button>
    </div>
</template>

<script>
import AnswerBlock from '@/components/admin/AnswerBlock.vue'
import { TrashIcon } from '@heroicons/vue/24/outline';
export default {
    props: {
        question: Object,
        questionIndex: Number,
        isResponse: Boolean
    },
    components: {
        AnswerBlock,
        TrashIcon
    },
    data() {
        return {
            typeSelected: 'radio',
            newTitle: ''
        }
    },
    methods: {
        addNewAnswer() {
            const newAnswer = { title: 'Opção ' + (parseInt(this.$store.state.survey.survey.questions[this.questionIndex].answers.length) + 1) };
            const index = this.questionIndex;
            const payload = {
                questionIndex: index,
                newAnswer: newAnswer
            }
            this.$store.commit('survey/addAnswer', payload)
        },
        removeAnswer(index) {
            const payload = {
                questionIndex: this.questionIndex,
                answerIndex: index
            }
            this.$store.commit("survey/removeAnswer", payload);
        },
        changeQuestionTypeEvent() {
            const payload = {
                questionIndex: this.questionIndex,
                newType: this.typeSelected
            }
            this.$store.commit('survey/changeQuestionType', payload);
            this.deleteAllAnswersEvent();
        },
        deleteAllAnswersEvent() {
            this.$store.commit('survey/deleteAllAnswers', this.questionIndex);
        },
        changeQuestionTitleEvent(event) {
            const payload = {
                questionIndex: this.questionIndex,
                newTitle: event.target.value
            }
            this.$store.commit('survey/changeQuestionTitle', payload);
        },
        handleDragStart(index) {
            console.log('Drag start', index);
            this.$store.commit('survey/setDraggedAnswerIndex', index);
        },
        handleDragOver(event) {
            event.preventDefault();
        },
        handleDrop(event) {
            event.preventDefault();
            const draggedIndex = this.$store.state.survey.survey.draggedAnswerIndex;
            const droppedIndex = parseInt(event.currentTarget.dataset.index, 10);
            console.log('Dropped', draggedIndex, droppedIndex);
            this.$store.commit('survey/reorderAnswers', {
                questionIndex: this.questionIndex,
                draggedIndex,
                droppedIndex,
            });
            this.$store.commit('survey/setDraggedAnswerIndex', null);
        },
        handleDragEnd() {
            this.$store.commit('survey/setDraggedAnswerIndex', null);
        },
        handleDragEnter(event) {
            event.currentTarget.classList.add('drag-over');
        },
        handleDragLeave(event) {
            event.currentTarget.classList.remove('drag-over');
        },
        focusLastAnswerTitle() {
            // Obter o índice da última pergunta adicionada
            const lastIndex = this.$store.state.survey.survey.questions[this.questionIndex].answers.length - 1;

            // Defina um timeout maior para garantir que o componente foi renderizado antes de tentar focar
            setTimeout(() => {
                // Acesse a referência da última pergunta
                const answerBlockRef = this.$refs[`answerBlock_${lastIndex}`];
                console.log(answerBlockRef)
                if (answerBlockRef && answerBlockRef.length > 0) {
                    // Iterar sobre os elementos do array answerBlockRefs
                    answerBlockRef.forEach(answerBlockRef => {
                        if (answerBlockRef.$refs && answerBlockRef.$refs.answerTitle) {
                            answerBlockRef.$refs.answerTitle.focus();
                        }
                    });
                }
            }, 100);
        }
    },
    mounted() {
        this.$emit('questionBlockRendered');
    }
}
</script>

<style lang="scss">
.cmp-question {
    margin: 2rem 0;

    &__answer-item[draggable="true"] {
        cursor: move;
    }

    &__answer-item[draggable="true"]:hover {
        background-color: $color-white;
    }

    &__answer-item[draggable="true"].drag-over {
        border: 2px dashed #333;
    }

    &__header {
        display: flex;
        align-items: center;
        gap: rem(20px);

        >.input-control {
            width: 100%;
        }

        >select[name="questionTypeSelected"] {
            width: rem(300px);
            height: rem(50px);
            font-size: rem(18px);
            outline: none;
            background-color: $color-white-200;
            padding: 0 rem(16px);
            border-radius: rem(8px);
        }
    }

    &__answer-list {
        display: flex;
        flex-direction: column;
        gap: rem(10px);
        margin-top: rem(20px);
    }

    &__answer-item {
        list-style: none;
        margin: 0;
        padding: 0;

        input[type="text"] {
            width: 80%;
            height: rem(50px);
            border: none;
            outline: none;
            font-size: rem(16px);

            &:focus {
                border-bottom: 1px solid $color-black;
                background-color: $color-white-200;
            }
        }

        input[type="checkbox"],
        input[type="radio"] {
            width: rem(20px);
            height: rem(20px);
        }
    }

    >.button {
        margin-top: rem(20px);
    }
}
</style>