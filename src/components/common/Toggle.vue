<template>
    <label class="cmp-toggle">
        <input @change="setRequiredQuestionEvent" class="cmp-toggle__input" type="checkbox" v-model="isChecked">
        <div class="cmp-toggle__slider"></div>
        <span>{{ label }}</span>
    </label>
</template>

<script>
    export default {
        props: {
            label: String,
            questionIndex: Number
        },  
        data() {
            return {
                isChecked: false
            }
        },
        name: "Toggle",
        methods: {
            setRequiredQuestionEvent() {
                const payload = {
                    questionIndex: this.questionIndex,
                    required: this.isChecked
                }
                this.$store.commit('survey/setRequiredQuestion', payload)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cmp-toggle {
        position: relative;
        display: inline-block;
        cursor: pointer;
        width: rem(150px);
        height: rem(20px);

        &__input {
            display: none;
            &:checked + .cmp-toggle__slider{
                background-color: #4CAF50;
            }
        }
        &__input:checked + .cmp-toggle__slider:before {
            transform: translateX(20px);
        }

        &__slider {
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 20px;
            background-color: #ccc;
            border-radius: 20px;
            transition: background-color 0.3s;

            &:before {
                content: '';
                position: absolute;
                width: 18px;
                height: 18px;
                background-color: #fff;
                border-radius: 50%;
                top: 1px;
                left: 1px;
                transition: transform 0.3s;
            }
        }

        span {
            position: absolute;
            left: rem(50px);
            font-size: rem(16px);
        }
    }
</style>