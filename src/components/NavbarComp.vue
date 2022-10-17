<template>
  <nav>
    <v-toolbar :elevation="4" app>
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">InTime</span>
        <span>Info</span>
      </v-toolbar-title>
      <router-link class="nav-link" active-class="active" to="/"
        >HOME</router-link
      >
      <router-link class="nav-link" active-class="active" to="/debtCmp"
        >DEBTS</router-link
      >
      <router-link class="nav-link" active-class="active" to="/add"
        >NEW CUSTOMER</router-link
      >
    </v-toolbar>
  </nav>
</template>
<script>
export default {
  name: "NavbarName",
};
</script>

<style>
.nav {
  background-color: aquamarine;
  text-decoration: none;
  color: #8958fa;
  height: 45px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.nav-link {
  padding: 5px 10px;
  text-decoration: none;
  /* border: 1px solid  rgb(3, 247, 165);
  border-radius: 10px; */
  color: #b79ef3;
  margin-right: 5px;
  margin-top: 5px;
  display: inline-block;
}
.active {
  box-shadow: 0px 5px 10px #b79ef3;
  border-radius: 8px;
  color: rgb(94, 94, 94);
}
</style>
