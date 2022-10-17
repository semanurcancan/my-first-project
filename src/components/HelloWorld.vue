<template>
  <v-container id="app" class="">
    <v-col class="grid">
      <v-row
        v-for="user in userApi"
        :key="user.id"
        @click="
          this.$router.push({ name: 'UserDetail', params: { id: user.id } })
        "
        class="box border-b-sm"
      >
        <v-col>{{ user.name }}</v-col>
        <v-col>{{ user.lastName }}</v-col>
        <v-col>{{ user.id }}</v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["userApi"],
  
};
</script>

<style>
.grid {
  border: 2px solid lightblue;
  box-shadow: 0px 5px 8px #8958fab2;
  border-radius: 10px;
}
</style>
