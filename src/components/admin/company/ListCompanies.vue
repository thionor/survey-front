<template>
    <div class="list">
        <table class="cmp-list margin-md">
            <thead>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Razão</th>
                <th scope="col">CNPJ</th>
                <th scope="col">Ativo</th>
                <th scope="col">Deletar</th>
                <th scope="col">Editar</th>
            </thead>
            <tbody>
                <tr v-for="company in displayedCompanies" :key="company.id">
                    <td scope="row">{{ company.id }}</td>
                    <td>{{ company.name }}</td>
                    <td>{{ company.companyName }}</td>
                    <td>{{ company.cnpj }}</td>
                    <td>{{ company.isActive ? 'sim' : 'não' }}</td>
                    <td class="td--center">
                        <TrashIcon @click="deleteModal(company)" class="icon icon--sm icon--error icon--cursor" />
                    </td>
                    <td class="td--center">
                        <PencilSquareIcon @click="openModal(company)" class="icon icon--sm icon--primary icon--cursor" />
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="actions d-flex d-flex--end">
            <button class="button" @click="prevPage" :disabled="currentPage === 1">Anterior</button>
            <button class="button" @click="nextPage"
                :disabled="currentPage * this.itemsPerPage >= companies.length">Proximo</button>
        </div>
        <Modal :company="this.company" ref="Modal" />
        <ModalDelete :company="this.company" ref="modalDelete" />
    </div>
</template>

<script>
import { TrashIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';
import Modal from '@/components/admin/company/Modal.vue';
import ModalDelete from '@/components/admin/company/ModalDelete.vue';
export default {
    data() {
        return {
            company: {
                id: 1,
                name: 'ApexBrasil',
                companyName: 'EQUIPE DE EXPORTAÇÃO DO BRASIL - APEXBRASIL',
                cnpj: '11.987.986/865',
                isActive: true,
            },
            companies: [
                {
                    id: 1,
                    name: 'ApexBrasil',
                    companyName: 'EQUIPE DE EXPORTAÇÃO DO BRASIL - APEXBRASIL',
                    cnpj: '11.987.986/865',
                    isActive: true,
                },
                {
                    id: 2,
                    name: 'Stefanini',
                    companyName: 'STEFANINI SOLUCOES INFORMATICAS DO BRASIL',
                    cnpj: '11.987.986/865',
                    isActive: true,
                },
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
        displayedCompanies() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.companies.slice(startIndex, endIndex);
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