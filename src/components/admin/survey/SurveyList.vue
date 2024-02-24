<template>
    <div class="cmp-surveylist">
        <div class="cmp-surveylist__wrapper">
            <Title :title="title" />
            <ul class="cmp-surveylist__filters">
                <li>Pesquisas recentes</li>
                <li>Pesquisas em andamento</li>
                <li>Pesquisas fechadas</li>
                <li>Pesquisas respondidas</li>
            </ul>
            <ul class="cmp-surveylist__list">
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
                <SurveyCard />
            </ul>
        </div>
    </div>
</template>

<script>
import Title from '@/components/common/Title.vue';
import SurveyCard from '@/components/admin/survey/SurveyCard.vue';

export default {
    props: {
        title: String
    },
    components: {
        Title,
        SurveyCard
    }
}
</script>

<style lang="scss">
.cmp-surveylist {
    &__filters {
        display: flex;
        gap: rem(8px);
        list-style: none;
        margin-bottom: rem(16px);

        >li {
            display: inline-block;
            padding: rem(8px) rem(16px);
            border-radius: rem(32px);
            border: 1px solid $color-gray-100;
            font-size: rem(12px);
            cursor: pointer;

            &:hover {
                background-color: $color-white-100;
            }
        }
    }

    &__list {
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        list-style: none;
        box-sizing: border-box;
        gap: rem(16px);
    }
}
</style>