<template>
  <v-container class="debtContainer">
    <v-table class="table">
      <thead>
        <tr>
          <th class="text-left">BORÇLU</th>
          <th class="text-left">ÖDENECEK TUTAR</th>
          <th class="text-left">TAKSİT</th>
          <th class="text-left">PEŞİNAT</th>
        </tr>
      </thead>
      <tbody v-for="user in debtList"
        :key="user.id"
        @click="
          this.$router.push({ name: 'UserDetail', params: { id: user.id } })
        ">
        <tr>
          <td>{{ user.name }}</td>
          <td>{{ user.debt }}</td>
          <td>{{ user.instData }}</td>
          <td>{{ user.payData }}</td>
        </tr>
      </tbody>
    </v-table>
    <router-view></router-view>

  </v-container>

</template>

<script>
import axios from "axios";

export default {
  name: "myDebts",

  data() {
    return {
      item: {},
      debtList: {},
    };
  },
  created: function () {
    axios.get("http://localhost:3000/debts").then((res) => {
      this.debtList = res.data;
      console.log(res.data);
    });
  },
};
</script>

<style>
.table {
  background-color: rgba(245, 245, 245, 0.267);
  border: 2px solid rgb(195, 173, 230);
  border-radius: 5px;
  text-decoration: rgb(5, 5, 5);
}
.debtContainer {
  height: auto;
  width: auto;
  margin: 50px;
}
</style>
