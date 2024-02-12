<template>
    <HeaderAdmin />
    <div class="container">
        <SurveyHeader :title="title" :description="description"/>
        <SurveyForm @survey-created="handleSurveyCreated"/>
    </div>
</template>

<script>
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue';
import SurveyForm from '@/components/admin/SurveyForm.vue';

export default {
    components: {
        HeaderAdmin,
        SurveyForm
    }
}
</script>