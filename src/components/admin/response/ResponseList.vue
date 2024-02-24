
import QuestionBlock from '../QuestionBlock.vue';
<template>
    <div class="cmp-responselist cmp-responselist--show" id="responseList">
        <div class="container padding-md">
            <div class="cmp-responselist__header">
                <div class="cmp-responselist__surveyname">
                    <h2>Nome da minha pesquisa</h2>
                    <p>Esse é o description da minha pesquisa</p>
                </div>
                <div class="cmp-responselist__subheader d-flex d-flex--sb">
                    <div class="cmp-responselist__responsevalue">
                        <span>1 resposta</span>
                    </div>
                    <div class="cmp-responselist__export">
                        <button class="button">Exportar para CSV</button>
                    </div>
                </div>
            </div>
            <div class="cmp-responselist__actions d-flex d-flex--sb">
                <div @click="prevUser" class="button">Anterior</div>
                <div class="cmp-responselist__page">
                </div>
                <div class="cmp-responselist__user d-flex">
                    <span>Entrevistado : </span>
                    {{ selectedUser.user.id }}
                    <span>{{ selectedUser.user.email }}</span>
                </div>
                <div @click="nextUser" class="button">Próximo</div>
            </div>
            <div class="cmp-responselist__questions">
                <QuestionBlock v-for="(question, index) in $store.state.survey.survey.questions" :key="index"
                    :questionIndex="index" :question="question" :isResponse="true" />
            </div>
        </div>
    </div>
</template>

<script>
import QuestionBlock from '../QuestionBlock.vue';
export default {
    components: {
        QuestionBlock
    },
    data() {
        return {
            responses: [...this.$store.state.survey.usersResponse],
            responseIndexActive: 0,
            selectedUser: [...this.$store.state.survey.usersResponse][0]
        }
    },
    methods: {
        nextUser() {
            const responseListSize = this.responses.length;
            if (responseListSize > this.responseIndexActive + 1) {
                this.responseIndexActive++;
                console.log("index", this.responseIndexActive + 1);
                console.log("responseSize", responseListSize);
                this.selectedUser = this.responses[this.responseIndexActive]
            }
        },
        prevUser() {
            const responseListSize = this.responses.length;
            console.log("index", this.responseIndexActive + 1);
            console.log("responseSize", responseListSize);
            if (this.responseIndexActive  > 0) {
                this.responseIndexActive--;
                console.log("responseSize", responseListSize);
                console.log("index", this.responseIndexActive + 1);
                this.selectedUser = this.responses[this.responseIndexActive]
            }
        }
    },
}
</script>

<style lang="scss">
.cmp-responselist {
    display: none;
    position: relative;
    width: 100%;

    &--show {
        display: block;
    }

    &__surveyname {
        margin-bottom: rem(20px);

        h2 {
            font-size: rem(32px);
            margin: 0;
        }

        p {
            font-size: rem(16px);
        }
    }

    &__responsevalue {
        span {
            font-size: rem(16px);
            font-weight: 800;
        }
    }

    &__subheader {
        border-bottom: 1px solid $color-gray-100;
        padding-bottom: rem(32px);
    }

    &__actions {
        padding-top: rem(32px);
    }

    &__user {}
}
</style>