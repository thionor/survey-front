<template>
    <div>
        <Header />
        <div class="container margin-md">
            <Title :title="'Gerenciamento de usuários'"/>
            <div class="actions d-flex d-flex--end">
                <button @click="addUser()" class="button button--secundary">Adicionar usuário</button>
            </div>
            <ListUsers />
            <Modal ref="modal" />
        </div>
    </div>
</template>

<script>
import Header from '@/components/admin/Header.vue';
import ListUsers from '@/components/admin/users/ListUsers.vue';
import Title from '@/components/common/Title.vue';
import Modal from '@/components/admin/users/Modal.vue';
export default {
    components: {
        Header,
        ListUsers,
        Title,
        Modal
    },
    methods: {
        addUser() {
            const modal = this.$refs['modal'];
            modal.$refs.modal.classList.add("modal--open")
        }
    }
}
</script>