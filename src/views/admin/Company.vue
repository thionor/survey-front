<template>
    <div>
        <Header />
        <div class="container margin-md">
            <Title :title="'Gerenciamento de usuários'" />
            <div class="actions d-flex d-flex--end">
                <button @click="addUser()" class="button button--secundary">Adicionar Empresa</button>
            </div>
            <ListCompanies />
            <Modal />
        </div>
    </div>
</template>

<script>
import Header from '@/components/admin/Header.vue';
import ListCompanies from '@/components/admin/company/ListCompanies.vue';
import Modal from '@/components/admin/company/Modal.vue';
export default {
    components: {
        Header,
        ListCompanies,
        Modal
    }
}
</script>