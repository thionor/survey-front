<template>
    <div class="cmp-surveytoolbar">
        <div class="container  d-flex d-flex--ac">
            <ul class="cmp-surveytoolbar__list container">
                <li class="cmp-surveytoolbar__item cmp-surveytoolbar__item--active" @click="openSurveyScreen" ref="surveyScreen">
                    Formulário
                </li>
                <li class="cmp-surveytoolbar__item" @click="openResponseScreen" ref="responseScreen">
                    Respostas
                </li>
            </ul>
            <div class="actions d-flex d-flex--ac">
                <button class="button button--outline">Visualizar</button>
                <button class="button">Coletar respostas</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        openResponseScreen(event) {
            document.getElementById('responseList').classList.add('cmp-responselist--show');
            document.getElementById('surveyCreate').classList.remove('cmp-surveycreate--show');
            this.removeActiveToolItems();
            event.target.classList.add('cmp-surveytoolbar__item--active')
        },
        openSurveyScreen(event) {
            document.getElementById('responseList').classList.remove('cmp-responselist--show');
            document.getElementById('surveyCreate').classList.add('cmp-surveycreate--show');
            this.removeActiveToolItems();
            event.target.classList.add('cmp-surveytoolbar__item--active')
        },
        removeActiveToolItems() {
            const toolItem = document.getElementsByClassName('cmp-surveytoolbar__item');
            for(var i = 0; i < toolItem.length; i++) {
                toolItem[i].classList.remove('cmp-surveytoolbar__item--active')
            }
        }
    }
}
</script>

<style lang="scss">
.cmp-surveytoolbar {
    background-color: $color-white;

    &__list {
        display: flex;
        gap: rem(16px);
        list-style: none;
        padding: rem(16px);
    }

    &__item {
        cursor: pointer;
    }

    &__item--active {
        color: $color-primary;
        font-weight: 800;
    }
}
</style>