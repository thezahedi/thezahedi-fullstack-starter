export default {
    namespaced: true,

    state: {
        hello: "",
    },

    getters: {
        hello(state) {
            return state.hello;
        }
    },

    mutations: {
        SET_HELLO_WORLD(state, data) {
            state.hello = data;
        }
    },
};
