<template>
  <v-app>
    <v-main>
      <h1 class="display-2 font-weight-bold mb-3 text-center">Customer List</h1>
      <div class="container">
        <UserSection :userApi="userApi" @addUser="addUser" />
        <HelloWorld :userApi="userApi" />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "../../components/HelloWorld.vue";
import UserSection from "../../components/UserSection.vue";
import axios from "axios";

export default {
  name: "App",

  components: {
    HelloWorld,
    UserSection,
  },
  methods: {
    addUser(item) {
      axios
        .post("http://localhost:3000/semanur", item)
        .then((response) => {
          this.userApi.unshift(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created: function () {
    axios.get("http://localhost:3000/semanur").then((res) => {
      this.userApi = res.data;
      console.log(this.userApi);
    });
  },

  data: () => ({
    userApi: [],
  }),
};
</script>
<style>
.container{
  margin-inline: 120px;
  padding-left: 8px;
}

</style>
