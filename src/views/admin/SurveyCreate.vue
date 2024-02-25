<template>
    <div class="page-view">
        <Header />
        <SurveyToolbar ref="surveyToolBar" />
        <div id="surveyCreate" class="cmp-surveycreate--show">
            <div class="page-view__wrapper container margin-md border-top border-top--blue padding-md">
                <div class="row">
                    <input @input="changeSurveyTitleEvent" :value="$store.state.survey.survey.title" type="text"
                        name="survey-title" class="title input-control">
                </div>
                <div class="row margin-md">
                    <textarea @input="changeSurveyDescriptionEvent" class="input-control" name="survey-description"
                        :value="$store.state.survey.survey.description"></textarea>
                </div>
            </div>
            <div class="page-view__wrapper page-view__wrapper-question container margin-md padding-md"
                v-for="(question, index) in $store.state.survey.survey.questions" :key="index">
                <QuestionBlock v-if="question" :ref="`questionBlock_${index}`"
                    @questionBlockRendered="focusLastQuestionTitle" :questionIndex="index" :question="question"
                    :isResponse="false" :surveyId="$store.state.survey.survey.id" />
                <div class="d-flex d-flex--end">
                    <Toggle label="Obrigatório" :questionIndex="index" />
                    <TrashIcon class="icon icon--cursor" @click="removeQuestion(index)" />
                </div>
            </div>
            <div class="container d-flex d-flex--sb margin-md">
                <button class="button button--secundary" @click="addNewQuestion(null)">Adicionar pergunta</button> <br>
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
import { TrashIcon } from '@heroicons/vue/24/outline';
import Toggle from '@/components/common/Toggle.vue'
import SurveyToolbar from '@/components/admin/survey/SurveyToolbar.vue';
import ResponseList from '@/components/admin/response/ResponseList.vue';
import { getSurvey, addSurvey, updateSurvey, addQuestion, addAnswer, deleteQuestion } from '@/service/apiService';
export default {
    data() {
        return {
            saveSurveyTimeout: null,
        }
    },
    components: {
        QuestionBlock,
        Header,
        TrashIcon,
        Toggle,
        SurveyToolbar,
        ResponseList
    },
    methods: {
        addNewQuestion(question = null) {

            const surveyid = this.$store.state.survey.survey.id;

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
            addQuestion(newQuestion.title, newQuestion.type, surveyid).then((data) => {
                console.log(data.data)
                const question = {
                    id: data.data.id,
                    title: data.data.title,
                    type: data.data.type,
                    answers: [
                        {
                            title: 'Opção 1'
                        }
                    ]
                }
                this.$store.commit('survey/addQuestion', question);
                addAnswer(newQuestion.answers[0].title, data.data.id).then((res) => {
                    const payload = {
                        questionId: data.data.id,
                        answerId: res.data.id
                    }
                    console.log("payload", payload)
                    this.$store.commit('survey/addAnswerByQuestionId', payload)
                })
            });
        },
        removeQuestion(index) {
            console.log(this.$store.state.survey.survey.questions[index].id)
            const questionId = this.$store.state.survey.survey.questions[index].id;
            deleteQuestion(questionId).then((data) => {
                if (data) {
                    this.$store.commit('survey/removeQuestion', index)
                    console.log("Question deleted!")
                }
            }).catch((error) => {
                console.log(error);
            })
        },
        focusLastQuestionTitle() {
            if (this.$store.state.survey.survey.questions.length > 0) {
                const lastIndex = this.$store.state.survey.survey.questions.length - 1;

                setTimeout(() => {
                    if (this.$store.state.survey.survey.questions.length > 0) {
                        const questionBlockRef = this.$refs[`questionBlock_${lastIndex}`];
                        if (questionBlockRef && questionBlockRef[0].$refs.questionTitle) {
                            questionBlockRef[0].$refs.questionTitle.focus();
                        }
                    }

                }, 100);
            }

        },
        handleSaveSurvey() {
            clearTimeout(this.saveSurveyTimeout);
            this.saveSurveyTimeout = setTimeout(() => {
                this.saveSurvey();
            }, 1000)
        },
        saveSurvey() {
            const title = this.$store.state.survey.survey.title;
            const desc = this.$store.state.survey.survey.description;
            const id = this.$route.params.id;
            const survey = updateSurvey(title, desc, id);

            if (survey) {
                console.log(survey);
            }
        },
        async loadSurvey() {
            try {
                const surveyId = this.$route.params.id;
                const data = await getSurvey(surveyId);
                console.log(data.data);
                let survey = !data.data.error ? data.data : {
                    title: 'Pesquisa sem titulo',
                    description: 'Pesquisa sem descrição',
                    questions: []
                };

                if(data.data.error) {
                    addSurvey(survey.title, survey.description).then((data) => {
                        survey.id = data.data.id
                        console.log("Newer create", survey);
                    })
                }
                this.$store.commit('survey/addSurvey', survey);
            } catch (error) {
                console.log('Erro ao carregar a pesquisa');
            }
        },
        changeSurveyTitleEvent(event) {
            let newTitle = event.target.value;
            this.$store.commit("survey/changeSurveyTitle", newTitle);
            this.handleSaveSurvey();
        },
        changeSurveyDescriptionEvent(event) {
            let newDesc = event.target.value;
            this.$store.commit("survey/changeSurveyDescription", newDesc);
            this.handleSaveSurvey();
        }
    },
    created() {
        this.loadSurvey();
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
</style>@/service/axiosService