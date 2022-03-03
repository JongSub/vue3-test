<template>
    <nav class="navbar navbar-expand-lg" :class="themeClass">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">KB증권</router-link>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <template v-for="menu in menuList" :key="menu.id">
                        <li v-if="menu.submenu" class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                :id="'navbarDropdown' + menu.id"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >{{ menu.title }}</a
                            >
                            <ul class="dropdown-menu" :aria-labelledby="'navbarDropdown' + menu.id">
                                <li v-for="submenu in menu.submenu" :key="submenu.id">
                                    <router-link class="dropdown-item" :to="submenu.link">{{ submenu.title }}</router-link>
                                </li>
                            </ul>
                        </li>
                        <li v-else class="nav-item">
                            <router-link class="nav-link" :to="menu.link">{{ menu.title }}</router-link>
                        </li>
                    </template>
                </ul>
                <div class="form-check form-switch navbar-text">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        v-model="isThemeChecked"
                        value=""
                        @change="changeTheme"
                    />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Dark</label>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import menuList from "../data/menu.json";

export default {
    setup() {
        const store = useStore();
        const isThemeChecked = ref(false);

        const changeTheme = () => {
            store.commit("setTheme", isThemeChecked.value ? "dark" : "light");
        };

        return {
            themeClass: computed(() => {
                if (store.getters.getTheme == "dark") {
                    return "navbar-dark bg-dark";
                } else {
                    return "navbar-light bg-light";
                }
            }),
            changeTheme,
            isThemeChecked,
            menuList,
        };
    },
};
</script>
