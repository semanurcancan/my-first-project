<template>
<div>
<v-container>
    <v-card class="cardContainer">
      <v-col>
        <v-row>
          <v-col>borclu</v-col>
          <v-col>
            <input
              class="eee"
              placeholder="ad-soyad"
              type="text"
              v-model="nameData"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>borç miktarı</v-col>
          <v-col>
            <input
              v-model="debtData"
              class="inputBox"
              placeholder="0"
              type="number"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>taksit tutarı</v-col>
          <v-col>
            <input class="inputBox" placeholder="taksit" type="number" v-model="instData" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>peşinat</v-col>
          <v-col>
            <input class="inputBox" placeholder="TL" type="number" v-model="payData" />
          </v-col>
        </v-row>
      </v-col>
    </v-card>
    <br />
    <v-btn @click="routePas()"
      >EKLE</v-btn
    >
  </v-container>
</div>
  
</template>
<script>
import axios from "axios";

export default {
  name: "MyDebtsCalculate",

  data() {
    return {
      nameData: "",
      debtData: "",
      instData: "",
      payData: "",
      debtList: [],
    };
  },
  created: function () {
    axios.get("http://localhost:3000/debts").then((res) => {
      console.log(res,"kasdkjashdj")
      this.debtList = res.data;
      console.log(this.debtlist);
    });
  },
  methods: {
    //  setInfo(){
    //   if(this.nameData && this.debtData){
    //     this.$emit('addInfo', {name: this.nameData, debt: this.debtData})
    //     console.log(nameData)
    //   }
    // },
    routePas() {
      axios.post("http://localhost:3000/debts",{name: this.nameData, debt: this.debtData, instData:this.instData, payData:this.payData}).then(res=>{this.$router.push({ name: 'MyDebts', params: { id:res.data.id}});} )
      console.log(this.nameData);
    },
  },
};
</script>

<style>
.cardContainer {
  height: auto;
  width: 600px;
   box-shadow: 0px  9px 20px #b79ef3;
  border-radius: 8px;
  color: rgb(94, 94, 94);
}
.eee {
  width: 100px;
}

.inputBox {
  width: 70px;
}
</style>
