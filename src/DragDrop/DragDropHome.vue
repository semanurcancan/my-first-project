<template>
  <div class="container">
    <v-toolbar theme="dark" class="header">DRAG & DROP</v-toolbar>
    <br />
    <main class="xx">
      <div>
        <v-row class="cardDes">
          <v-col>
            <v-card
              class="dropzone"
              id="draggable"
              draggable="true">
              <ul class="ıtemList" v-for="item in cardList" :key="item.id">
                <li class="cardItem">
                  <a href="#" class="line"> {{ item.text }} {{item.id}} </a>
                  <button class="hi"><v-icon> mdi-pen </v-icon></button>
                </li>
              </ul>
              <v-col>
                <div>
                  <input type="text" v-model="text">
                  <v-btn elevation="2" class="btnAdd" @click="addCard"
                    ><v-icon>mdi-plus</v-icon>add item</v-btn
                  >
                </div>
              </v-col>
            </v-card>
          </v-col>

          <v-btn elevation="2" class="btnAdd2"
            ><v-icon>mdi-plus</v-icon>Add Another List</v-btn
          >
        </v-row>
      </div>
    </main>
  </div>
</template>
<script>
// import { ref } from "vue";
export default {
  name: "DragDrop",
  text:"",
  data() {
    return {
      cardList: [
        { id: 1, text: "item 1" },
        { id: 2, text: "item 2" },
        { id: 3, text: "item 3" },
      ],
      drag: false,
    };
  },
  methods:{
    addCard(){
      this.cardList.push({id: new Date().getSeconds, text: this.text})
      return 
    }
  }
};
</script>

<style scoped>
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #9670f0;
}
.header {
  display: flex;
  justify-content: space-around;
}
.container {
  background-color: rgb(218, 203, 241);
  height: 100%;
  width: 100%;
}
.dropzone {
  width: 15rem;
  height: 20rem;
}
.xx {
  margin: 30px;
  overflow: hidden;
}
.cardDes {
  display: inline-flex;
}
.cardItem {
  background-color: whitesmoke;
  list-style: none;
  box-shadow: 0px 3px 7px #b79ef3;
  border-radius: 3px;
  border: 1px solid #d6c9f5;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
}
.line {
  text-decoration: none;
  color: gray;
}
.ıtemList {
  display: flex;
  flex-direction: column;
  margin: 5px;
}
.cardItem:hover {
  background-color: #e1d8f7a1;
}
.btnAdd {
  font-size: 10px;
  height: 30px;
  width: 90px;
}
.btnAdd2 {
  font-size: 10px;
  height: 30px;
  width: 130px;
  margin-top: 12px;
  color: #9670f0;
  background: transparent;
}
.btnAdd2:hover {
  background-color: #e9e5f3;
}
</style>
