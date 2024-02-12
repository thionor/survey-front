<template>
    <div class="cmp-questionheader">
        <div class="cmp-questionheader__wrapper">
            <input class="cmp-questionheader__title" name="header-title" type="text" :value="title" placeholder="Pesquisa sem titulo">
            <textarea class="cmp-questionheader__description" name="header-description" :value="description" placeholder="Pesquisa sem descrição"></textarea>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'SurveyHeader',
        props: {
            title: String,
            description: String
        }
    }
</script>

<style lang="scss" scoped>
    .cmp-questionheader {
        width: 100%;
        border-top: rem(10px) solid $color-primary;
        background-color: $color-white-200;
        padding: rem(16px);
        border-top-left-radius: rem(8px);
        border-top-right-radius: rem(8px);

        &__title {
            font-size: rem(54px);
            font-weight: 800;
        }

        &__description {
            font-size: rem(18px)
        }

       &__title, &__description {
            outline: none;
            border: none;
            &:focus {
                border: 1px solid $color-gray-100;
            }
        }
    }
</style>