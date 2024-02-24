<template>
    <li class="cmp-surveyscard">
        <router-link to="surveys/1" href="#" class="cmp-surveyscard__link">
            <img src="https://placehold.co/600x400" alt="">
            <div class="cmp-surveyscard__content">
                <h2>Nome da minha pesquisa</h2>
                <p>Criado em: 20/02/2024</p>
                <p>10 Respostas</p>
            </div>
        </router-link>
    </li>
</template>

<style lang="scss">
.cmp-surveyscard {
    &__link {
        text-decoration: none;
        color: $color-black;

        >img {
            width: 100%;
        }
    }

    &__content {
        padding: rem(8px);

        >h2 {
            font-size: rem(14px);
            font-weight: 800;
            margin: 0;
        }

        > p {
            font-size: rem(12px);
        }
    }
}
</style>