<template>
  <v-card class="box2">
      <v-row class="info">
        <v-col
          ><input
            type="text"
            id="name"
            v-model="nameData"
            placeholder="name"
            class="input"
        /></v-col>
        <v-col>
          <input
            type="text"
            id="lastName"
            v-model="lastNamedata"
            placeholder="lastName"
            class="input"
          />
        </v-col>
        <v-col>
          <v-btn class="btn" @click="checkInfo">Add Customer</v-btn>
        </v-col>
      </v-row>
  </v-card>
</template>
<script>
export default {
  props: ["userApi"],
  data() {
    return {
      nameData: "",
      lastNamedata: "",
    };
  },
  methods: {
    checkInfo() {
      if (this.nameData && this.lastNamedata) {
        this.$emit("addUser", {
          name: this.nameData,
          lastName: this.lastNamedata,
        });
        (this.nameData = ""), (this.lastNamedata = "");
        console.log(this.lastNamedata);
      }
    },
  },
};
</script>
<style scoped>
.info {
display: flex;
align-items: center
}
.btn{
  width: 100px;
font-size: 11px;}

.input{
   border: 1px solid lightblue;
   border-radius: 5px;
   width: 100px;
}
.box2 {
  border: 2px solid lightblue;
  box-shadow: 0px 5px 8px #8958fab2;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-radius: 6px;
  padding: 10px;
}
</style>
