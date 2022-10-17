<template>
  <v-app>
    <navbar-vue :options="options" v-model="selected"  ></navbar-vue>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavbarVue from "./components/NavbarComp.vue";
export default {
  name: "AppVue",
  components: { NavbarVue },
};
</script>
