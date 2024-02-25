
<template>
    <div class="cmp-responselist" id="responseList">
        <div class="container padding-md">
            <div class="cmp-responselist__header">
                <div class="cmp-responselist__surveyname">
                    <h2>{{ this.$store.state.survey.survey.title }}</h2>
                    <p>{{ this.$store.state.survey.survey.description }}</p>
                </div>
                <div class="cmp-responselist__subheader d-flex d-flex--sb">
                    <div class="cmp-responselist__responsevalue">
                        <span>{{ responses.length }} respostas</span>
                    </div>
                    <div class="cmp-responselist__export">
                        <button class="button">Exportar para CSV</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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