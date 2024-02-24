<template>
    <div>
        <div class="modal-overlay" ref="overlay"></div>
        <div class="modal container { 'modal--open': isModalOpen }" ref="modal">
            <h2>{{ company ?  'Editar empresa' : 'Adicionar empresa'}}</h2>
            <form @submit.prevent>
                <div class="modal__input">
                    <label for="name">Nome</label>
                    <input type="text" name="name" :value="company ? company.name : ''">
                </div>
                <div class="modal__input">
                    <label for="name">Razão Social</label>
                    <input type="text" name="companyName" :value="company ? company.companyName : ''">
                </div>
                <div class="modal__input">
                    <label for="name">CNPJ</label>
                    <input type="text" name="cnpj" :disabled="company" :value="company ? company.cnpj : ''">
                </div>
                <div class="modal__input">
                    <label for="name">Status</label>
                    <select name="status">
                        <option>Ativado</option>
                        <option>Desativado</option>
                    </select>
                </div>
                <div class="modal__input d-flex d-flex--end">
                    <button class="button button--error" @click="closeModal()">Cancelar</button>
                    <button class="button" @click="submit()">Salvar</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        company: Object
    },
    methods: {
        closeModal() {
            this.$refs.modal.classList.remove('modal--open')
            this.$refs.overlay.classList.remove('modal-overlay--open')
        },
        submit() {
            if(this.company) {
                alert("Atualizar usuário: " + this.company.id);
                return;
            }

            alert("Salvar usuário");
        }
    }
}
</script>

<style lang="scss">
.modal-overlay {
    display: none;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    /* Cor de fundo desfocada */
    backdrop-filter: blur(5px);
    /* Efeito de desfoque no fundo */
    z-index: 10;

    &--open {
        display: block;
    }
}

.modal {
    display: none;
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    top: calc(50% - rem(300px));
    background-color: $color-white;
    border-radius: rem(8px);
    padding: rem(32px);
    z-index: 11;

    &--open {
        display: block;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: rem(16px);
    }

    label {
        font-size: rem(16px);
        font-weight: 800;
        color: $color-black;
    }

    input,
    select {
        width: 100%;
        height: rem(40px);
        padding: rem(10px);
    }
}</style>