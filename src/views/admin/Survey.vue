<template>
    <div>
        <Header />
        <div class="container margin-md">
            <div class="surveys__addsurvey d-flex d-flex--end">
                <router-link to="/surveys/create" class="button">Adicionar pesquisa</router-link>
            </div>
            <SurveyList  :title="'Pesquisas'"/>
            <div class="actions d-flex d-flex--jc d-flex--ac margin-lg">
                <button class="button">Anterior</button>
                <button class="button">Próximo</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/admin/Header.vue';
import SurveyList from '@/components/admin/survey/SurveyList.vue';
export default {
    components: {
        Header,
        SurveyList
    }
}
</script>