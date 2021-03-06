<template>
    <div :class="{'rtl': dir !== 'en'}">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dir: "en",
        }
    },

    watch: {
        "$root.$i18n.locale": (newValue) => {
            localStorage.setItem('thezahedi-dir', newValue === "fa" ? "rtl" : "ltr");
        }
    }
}
</script>
