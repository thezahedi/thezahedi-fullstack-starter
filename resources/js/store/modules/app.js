export default {
    state: {
        hello: "سلام جهان!",
    },

    getters: {
        hello(state) {
            return state.hello;
        }
    },
};
