<template>
    <div>
        {{ hello }}
    </div>
</template>

<script>
export default {
    computed: {
        hello() {
            return this.$store.getters["hello"];
        }
    }
}
</script>
