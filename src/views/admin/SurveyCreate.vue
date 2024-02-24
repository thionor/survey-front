<template>
    <div class="page-view">
        <Header />
        <SurveyToolbar ref="surveyToolBar" />
        <div id="surveyCreate" class="">/**cmp-surveycreate--show */
            <div class="page-view__wrapper container margin-md border-top border-top--blue padding-md">
                <div class="row">
                    <input :value="$store.state.survey.survey.title" type="text" name="survey-title"
                        class="title input-control">
                </div>
                <div class="row margin-md">
                    <textarea class="input-control" name="survey-description"
                        :value="$store.state.survey.survey.description"></textarea>
                </div>
            </div>
            <div class="page-view__wrapper page-view__wrapper-question container margin-md padding-md"
                v-for="(question, index) in $store.state.survey.survey.questions" :key="index">
                <QuestionBlock :ref="`questionBlock_${index}`" @questionBlockRendered="focusLastQuestionTitle"
                    :questionIndex="index" :question="question" :isResponse="false" />
                <div class="d-flex d-flex--end">
                    <Toggle label="Obrigatório" :questionIndex="index" />
                    <ClipboardDocumentIcon class="icon icon--cursor" @click="duplicateQuestion(index)" />
                    <TrashIcon class="icon icon--cursor" @click="removeQuestion(index)" />
                </div>
            </div>
            <div class="container d-flex d-flex--sb margin-md">
                <button class="button button--secundary" @click="addNewQuestion(null)">Adicionar pergunta</button> <br>
                <button class="button" @click="saveSurvey">Salvar formulario</button>
            </div>
        </div>

        <div class="container bg--white border--radius margin-md">
            <ResponseList />
        </div>
    </div>
</template>

<script>
import Header from '@/components/admin/Header.vue';
import QuestionBlock from '@/components/admin/QuestionBlock.vue';
import { TrashIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/outline';
import Toggle from '@/components/common/Toggle.vue'
import SurveyToolbar from '@/components/admin/survey/SurveyToolbar.vue';
import ResponseList from '@/components/admin/response/ResponseList.vue';
export default {
    components: {
        QuestionBlock,
        Header,
        TrashIcon,
        ClipboardDocumentIcon,
        Toggle,
        SurveyToolbar,
        ResponseList
    },
    methods: {
        addNewQuestion(question = null) {

            (question)
            if (question != null) {
                this.$store.commit('survey/addQuestion', question);
                return;
            }

            const newQuestion = {
                title: 'Pergunta ' + (parseInt(this.$store.state.survey.survey.questions.length) + 1),
                type: 'radio',
                required: false,
                answers: [
                    {
                        title: 'Opção 1'
                    }
                ]
            }
            this.$store.commit('survey/addQuestion', newQuestion);
        },
        removeQuestion(index) {
            this.$store.commit('survey/removeQuestion', index)
        },
        duplicateQuestion(index) {
            const question = this.$store.state.survey.survey.questions[index];
            const duplicateQuestion = JSON.parse(JSON.stringify(question))
            this.addNewQuestion(duplicateQuestion);
        },
        focusLastQuestionTitle() {
            const lastIndex = this.$store.state.survey.survey.questions.length - 1;

            setTimeout(() => {
                const questionBlockRef = this.$refs[`questionBlock_${lastIndex}`];
                if (questionBlockRef && questionBlockRef[0].$refs.questionTitle) {
                    questionBlockRef[0].$refs.questionTitle.focus();
                }
            }, 100);
        },
        saveSurvey() {
            (this.$store.state.survey.survey);
        }
    },
    mounted() {
        const survey = {
            id: 1,
            title: 'Minha pesquisa ESG',
            description: 'Configuração da minha pesquisa ESG onde estou implementando um sistema de perguntas.',
            draggedAnswerIndex: null,
            questions: [
                {
                    id: 1,
                    title: 'Minha primeira questão',
                    type: 'radio',
                    answers: [
                        {
                            id: 1,
                            title: 'Minha primeira resposta'
                        },
                        {
                            id: 2,
                            title: 'Minha segunda resposta'
                        },
                        {
                            id: 3,
                            title: 'Minha terceira resposta'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'Minha segunda questão',
                    type: 'checkbox',
                    answers: [
                        {
                            id: 4,
                            title: 'Minha primeira resposta'
                        },
                        {
                            id: 5,
                            title: 'Minha segunda resposta'
                        },
                        {
                            id: 6,
                            title: 'Minha terceira resposta'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Minha terceira questão',
                    type: 'text',
                    answers: []
                }
            ]
        }
        if (survey) {
            this.$store.commit('survey/addSurvey', survey)
        }
    }
}
</script>

<style lang="scss" scoped>
#surveyCreate {
    display: none;

    &.cmp-surveycreate--show {
        display: block;
    }
}
</style>