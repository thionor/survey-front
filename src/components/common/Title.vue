<template>
    <div class="cmp-title">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>

export default {
    props: {
        title: String
    }
}

</script>

<style lang="scss">
.cmp-title {
    margin: rem(16px) 0;

    h2 {
        font-size: rem(24px);
        font-weight: 800;
        margin: 0;
        padding: 0;
    }
}
</style>