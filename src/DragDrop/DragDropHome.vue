<template>
  <div class="container">
    <v-toolbar theme="dark" class="header">DRAG & DROP</v-toolbar>
    <br />
    <main class="xx">
      <v-row>
        <v-col>
          <v-card class="card">
            <v-col>
              <div>
                <ul>
                  <li class="cardItem">Card Item</li>
                </ul>
              </div>
            </v-col>
          </v-card>
        </v-col>
        <!-- <v-col>
       <v-card class="card">
          <v-col>
            <v-row>card 2</v-row>
            <v-row>görev-1</v-row>
            <v-row>görev-1</v-row>
          </v-col>
        </v-card>
     </v-col> -->
      </v-row>
    </main>
  </div>
</template>
<script>
export default {
  name: "DragDrop",
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
}
.container {
  background-color: rgb(195, 173, 230);
  height: 100%;
  width: 100%;
}
.xx {
  margin: 30px;
}
.card {
  width: 15rem;
  height: 20rem;
}
.cardItem {
  background-color: whitesmoke;
  list-style: none;
  box-shadow: 2px;
  border-radius: 3px;
  border: 1px solid rgba(126, 126, 126, 0.712);
}
</style>
