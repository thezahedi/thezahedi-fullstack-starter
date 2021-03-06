<template>
    <div>
        {{ helloWorld }}
    </div>
</template>

<script>
export default {
    created() {
        this.$store.commit("SET_HELLO_WORLD", this.$t('helloWorld'));
    },

    computed: {
        helloWorld() {
            return this.$store.getters["hello"];
        }
    },
}
</script>
