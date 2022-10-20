<template>
  <div>
    <div class="backContainer">
       <v-card class="cusCard">
      <div>
        <h1 class="title">{{ debtList.name }}</h1>
        <h3 class="font-weight-light">
          müşteri numarası: {{ $route.params.id }}
        </h3>
      </div>
      <router-link class="backBtn" to="/debtCmp/myDebtsCalculate"
        ><v-icon>mdi-keyboard-backspace</v-icon></router-link
      ></v-card
    >
    </div>
    <v-container class="debtContainer">
      <v-table class="table">
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
            <td>{{ hesap() }}</td>
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
      return result.toFixed(2);
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
<style>
.backBtn {
  padding: 5px 10px;
  text-decoration: none;
  color: #b79ef3;
  margin-right: 5px;
  margin-top: 5px;
  display: inline-block;
}
.backBtn:hover {
  box-shadow: 0px 5px 10px #99c3f3;
  border-radius: 8px;
  color: rgb(94, 94, 94);
}
.backContainer {
  display: flex;
  justify-content: space-between;
}
.title {
   color: #b79ef3;
}
.cusCard {
  color: #b79ef3a9;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
  padding: 20px;
}
.table {
  background-color: rgba(245, 245, 245, 0.267);
  border: 2px solid rgb(195, 173, 230);
  border-radius: 5px;
  text-decoration: rgb(5, 5, 5);
}
</style>
