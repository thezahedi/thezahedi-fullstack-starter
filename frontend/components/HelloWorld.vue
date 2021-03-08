<template>
    <div>
        {{ helloWorld }}
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit("app/SET_HELLO_WORLD", this.$t('helloWorld'));
    },

    computed: {
        helloWorld() {
            return this.$store.getters["app/hello"];
        }
    },
}
</script>
