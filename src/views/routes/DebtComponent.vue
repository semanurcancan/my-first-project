<template>
  <nav>
    <router-link class="nav-link" active-class="active" to="/debtCmp/myDebtsCalculate"
      >ADD/CALCULATE DEBT</router-link
    >
     <router-link class="nav-link" active-class="active" to="/debtCmp/myDebts/:id"
      >PERSONAL DEBT PAGE</router-link
    >
    <router-link class="nav-link" active-class="active" to="/debtCmp/debtList"
      >DEBT LIST</router-link
    >
   
    <router-view></router-view>
  </nav>
</template>
<script>
export default {
      name: "DebtCmp",

}
</script>
<style scoped>
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
.nav-link:hover{
    box-shadow: 0px 5px 10px #99c3f3;
  border-radius: 8px;
  color: rgb(94, 94, 94);
}
.active {
  box-shadow: 0px 5px 10px #b79ef3;
  border-radius: 8px;
  color: rgb(94, 94, 94);
}
</style>
