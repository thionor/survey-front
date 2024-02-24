<template>
    <div>
        <div class="modal-overlay" ref="overlay"></div>
        <div class="modal modal-delete container" ref="modal">
            <h2>Remover usuário</h2>
            <span>Você realmente deseja remover o usuário: <br>
                <b>{{ user.name }}</b>?</span>
            <div class="actions margin-md d-flex d-flex--end">
                <button class="button button--error" @click="closeModal">Cancelar</button>
                <button class="button">Confirmar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: Object
    },
    methods: {
        closeModal() {
            this.$refs.modal.classList.remove('modal--open')
            this.$refs.overlay.classList.remove('modal-overlay--open')
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

    &.modal-delete {
        width: auto;
        left: calc(50% - 150px);
        top: calc(50% - 100px);
        padding: rem(16px);
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