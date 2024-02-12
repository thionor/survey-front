<template>
    <div class="cmp-headeradmin">
        <div class="container">
            <h1>
                <img class="cmp-headeradmin__brand" src="@/assets/images/brand.png" alt="Brand for ApexBrasil">
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderAdmin'
    }
</script>

<style lang="scss" scoped>
    .cmp-headeradmin {
       background-color: $color-primary;

       &__brand {
        width: rem(200px);
       }
    }

    
</style>