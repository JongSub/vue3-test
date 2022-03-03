import { createStore } from "vuex";

export default createStore({
    state: {
        theme: "light",
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
        },
    },
    getters: {
        getTheme(state) {
            return state.theme;
        },
    },
});
