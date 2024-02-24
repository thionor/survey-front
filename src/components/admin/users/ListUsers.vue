<template>
    <div class="list">
        <table class="cmp-list margin-md">
            <thead>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Sobrenome</th>
                <th scope="col">Email</th>
                <th scope="col">Token</th>
                <th scope="col">Ativo</th>
                <th scope="col">Deletar</th>
                <th scope="col">Editar</th>
            </thead>
            <tbody>
                <tr v-for="user in displayedUsers" :key="user.id">
                    <td scope="row">{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.surname }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.token }}</td>
                    <td>{{ user.isActive ? 'sim' : 'não' }}</td>
                    <td class="td--center">
                        <TrashIcon @click="deleteModal(user)" class="icon icon--sm icon--error icon--cursor" />
                    </td>
                    <td class="td--center">
                        <PencilSquareIcon @click="openModal(user)" class="icon icon--sm icon--primary icon--cursor" />
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="actions d-flex d-flex--end">
            <button class="button" @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <button class="button" @click="nextPage"
                :disabled="currentPage * this.itemsPerPage >= users.length">Proximo</button>
        </div>
        <Modal :user="this.user" ref="Modal" />
        <ModalDelete :user="this.user" ref="modalDelete" />
    </div>
</template>

<script>
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
import Modal from '@/components/admin/users/Modal.vue';
import ModalDelete from '@/components/admin/users/ModalDelete.vue';
export default {
    data() {
        return {
            user: {
                id: 1,
                name: 'Thiago',
                surname: 'Oliveira',
                email: 'thiago.oliveira@gmail.com',
                token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                isActive: true,
            },
            users: [
                {
                    id: 1,
                    name: 'Thiago',
                    surname: 'Oliveira',
                    email: 'thiago.oliveira@gmail.com',
                    token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'Maria',
                    surname: 'Oliveira',
                    email: 'thiago.oliveira@gmail.com',
                    token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                    isActive: true,
                },
                {
                    id: 3,
                    name: 'Jose',
                    surname: 'Oliveira',
                    email: 'thiago.oliveira@gmail.com',
                    token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                    isActive: true,
                },
                {
                    id: 4,
                    name: 'Matheus',
                    surname: 'Oliveira',
                    email: 'thiago.oliveira@gmail.com',
                    token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                    isActive: true,
                },
                {
                    id: 5,
                    name: 'Matheus',
                    surname: 'Oliveira',
                    email: 'thiago.oliveira@gmail.com',
                    token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                    isActive: true,
                },
                {
                    id: 6,
                    name: 'Matheus',
                    surname: 'Oliveira',
                    email: 'thiago.oliveira@gmail.com',
                    token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                    isActive: true,
                },
                {
                    id: 7,
                    name: 'Matheus',
                    surname: 'Oliveira',
                    email: 'thiago.oliveira@gmail.com',
                    token: 'fsadfjhsdjf9ewrhjfhdsjkfh',
                    isActive: true,
                }
            ],
            itemsPerPage: 8,
            currentPage: 1
        }
    },
    components: {
        PencilSquareIcon, TrashIcon, Modal,
        ModalDelete
    },
    methods: {
        nextPage() {
            if (this.currentPage * this.itemsPerPage < this.users.length) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        openModal(user) {
            this.user = user;
            const Modal = this.$refs['Modal'];
            Modal.$refs.modal.classList.add("modal--open");
            Modal.$refs.overlay.classList.add('modal-overlay--open')
        },
        deleteModal(user) {
            this.user = user;
            const modalDelete = this.$refs['modalDelete']
            modalDelete.$refs.modal.classList.add('modal--open')
            modalDelete.$refs.overlay.classList.add('modal-overlay--open')
        }
    },
    computed: {
        displayedUsers() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.users.slice(startIndex, endIndex);
        }
    }
}
</script>

<style lang="scss">
.list {
    position: relative;
}
.cmp-list {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #dee2e6;

        &.td--center {
            text-align: center;
        }
    }

    th {
        background-color: $color-white-100;
        border-bottom: 4px solid $color-primary;
    }

    tr {
        background-color: $color-white-200;
    }

    .cmp-list__actions {
        display: flex;
        gap: rem(10px);
    }

    .cmp-list__actions button {
        margin-right: 5px;
    }

}

.button {
    &:disabled {
        cursor: not-allowed;
        opacity: .7;
    }
}
</style>