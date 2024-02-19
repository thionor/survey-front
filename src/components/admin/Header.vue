<template>
    <header class="cmp-header">
        <div class="container">
            <h1 class="cmp-header__brand">
                <img src="@/assets/images/brand.png" alt="Brand Empresa">
            </h1>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style lang="scss">
    .cmp-header {
        position: relative;
        background-color: $color-primary;

        &__brand {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
        }
        &__brand > img {
            width: rem(200px);
        }
    }
</style>