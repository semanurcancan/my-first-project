<template>
  <v-container class="debtContainer">
    <v-table theme="dark">
      <thead>
        <tr>
          <th class="text-left">BORÇLU</th>
          <th class="text-left">ÖDENECEK TUTAR</th>
          <th class="text-left">TAKSİT</th>
          <th class="text-left">PEŞİNAT</th>
        </tr>
      </thead>
      <div v-if="debtList != {}">
        <tbody
          v-for="user in debtList"
          :key="user.id"
          @click="
            this.$router.push({ name: 'UserDetail', params: { id: user.id } })
          "
        >
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.debt }}</td>
            <td>{{ user.instData }}</td>
            <td>{{ user.payData }}</td>
          </tr>
        </tbody>
      </div>
    </v-table>
  </v-container>
</template>

<script>
// import axios from "axios";
import store from "@/store";

export default {
  name: "DebtList",

  data() {
    return {
      item: {},
      debtList: store.getters.items,
    };
  },
  mounted() {
    this.$store.dispatch("setUsers");
    // this.debtList = this.$store.getters.items;
    // console.log("sema", this.debtList);
    // console.log(store);
  },
  watch: {
    debtList() {
      console.log(this.debtList);
    },
  },
  // function () {
  //   axios.get("http://localhost:3000/debts").then((res) => {
  //     this.debtList = res.data;
  //   });
  // },
};
</script>

<style>
.debtContainer {
  height: auto;
  width: auto;
  margin: 50px;
}
</style>
