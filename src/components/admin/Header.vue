<template>
    <header class="cmp-header">
        <div class="container d-flex d-flex--ac">
            <div class="cmp-header__menu icon icon--cursor" @click="openMenu()">
                <Bars3Icon class="icon" />
            </div>
            <h1 class="cmp-header__brand">
                <img src="@/assets/images/brand.png" alt="Brand Empresa">
            </h1>
        </div>
        <div class="cmp-header__navigation" ref="navigation">
            <nav class="cmp-header__nav">
                <ul class="cmp-header__list">
                    <li class="cmp-header__item">
                        <router-link class="cmp-header__item-link" to="/users">Usuários</router-link>
                    </li>
                    <li class="cmp-header__item">
                        <router-link class="cmp-header__item-link" to="/companies">Empresas</router-link>
                    </li>
                    <li class="cmp-header__item">
                        <router-link class="cmp-header__item-link" to="/surveys">Pesquisas</router-link>
                    </li>
                    <li class="cmp-header__item">
                        <router-link class="cmp-header__item-link" to="#">Relatórios</router-link>
                    </li>
                    <li class="cmp-header__item">
                        <router-link class="cmp-header__item-link" to="#">Configuração</router-link>
                    </li>
                    <li class="cmp-header__item">
                        <router-link class="cmp-header__item-link" to="#">Sair</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import { Bars3Icon } from "@heroicons/vue/24/outline"
export default {
    name: 'Header',
    components: {
        Bars3Icon
    },
    methods: {
        openMenu() {
            this.$refs.navigation.classList.toggle('cmp-header__navigation--show')
        }
    }
}
</script>

<style lang="scss">
.cmp-header {
    position: relative;
    background-color: $color-primary;
    height: rem(70px);

    &__brand {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    &__brand>img {
        width: rem(200px);
    }

    >.container {
        gap: rem(16px);
    }

    &__menu {
        background: $color-white-200;
        width: rem(40px);
        height: rem(40px);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &__navigation {
        display: block;
        position: fixed;
        z-index: 10;
        width: rem(300px);
        height: 100%;
        top: 0;
        left: 0;
        background-color: $color-white;
        filter: drop-shadow(rem(2px) rem(2px) rem(5px) rgba(0, 0, 0, .1));
        transform: translateX(-100%);
        transition: 200ms;
    }

    &__navigation--show {
        transform: translateX(0);
    }

    &__list {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-top: rem(32px);
    }

    &__item {
        width: 100%;
    }

    &__item-link {
        width: 100%;
        display: inline-block;
        color: $color-black;
        font-weight: 800;
        text-decoration: none;
        padding: rem(16px) rem(16px);

        &:hover {
            text-decoration: none;
            background-color: $color-white-200;
        }
    }
}
</style>