<template>
  <v-card class="box2">
      <v-row class="info">
        <v-col
          ><input
            type="text"
            id="name"
            v-model="nameData"
            placeholder="name"
            class="border-sm h-16"
        /></v-col>
        <v-col>
          <input
            type="text"
            id="lastName"
            v-model="lastNamedata"
            placeholder="lastName"
            class="border-sm"
          />
        </v-col>
        <v-col>
          <v-btn @click="checkInfo">Add Customer</v-btn>
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
<style>
.info {
display: flex;
align-items: center
 

}
.box2 {
  border: 2px solid lightblue;
  box-shadow: 0px 5px 8px #8958fab2;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-radius: 10px;
  padding: 10px;
}
</style>
