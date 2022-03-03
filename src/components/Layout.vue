<template>
    <TopMenu />
    <div class="container-fluid" :class="themeClass">
        <slot />
    </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TopMenu from "./TopMenu.vue";

export default {
    name: "App",
    components: { TopMenu },
    setup() {
        const store = useStore();

        return {
            themeClass: computed(() => {
                if (store.getters.getTheme == "dark") {
                    return "bg-secondary text-white";
                } else {
                    return "";
                }
            }),
        };
    },
};
</script>
