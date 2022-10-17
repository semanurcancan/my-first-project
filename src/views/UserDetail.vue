<template>
  <div>
    <h1>{{ debtList.name }}: {{ $route.params.id }}</h1>
    <v-container class="debtContainer">
      <v-table theme="dark">
        <thead>
          <tr>
            <th class="text-left">TOPLAM BORÇ</th>
            <th class="text-left">TAKSİT SAYISI</th>
            <th class="text-left">PEŞİNAT</th>
            <th class="text-left">TAKSİT TUTARI</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="debtList != {}">
            <td>{{ debtList.debt }}</td>
            <td>{{ debtList.instData }}</td>
            <td>{{ debtList.payData }}</td>
            <td>{{ hesap()}}</td>
          </tr>
        </tbody>
      </v-table>
    </v-container>
    <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "userDetail",
  data() {
    return {
      debtList: {},
      borc: "",
      taksit: "",
      pesinat: "",
    };
  },
  methods: {
    hesap() {
      const result = (this.borc - this.pesinat) / this.taksit;
      return result.toFixed(2)
    },
  },

  mounted: function () {
    axios
      .get("http://localhost:3000/debts/" + this.$route.params.id)
      .then((res) => {
        this.debtList = res.data;
        this.borc = res.data.debt;
        this.pesinat = res.data.payData;
        this.taksit = res.data.instData;
      })
      .catch((error) => console.log(error));
  },
};
</script>
