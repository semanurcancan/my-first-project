<template>
  <div class="container">
    <v-toolbar theme="dark" class="header"
      >DRAG & DROP
      <br />
      <v-btn elevation="2" class="btnAdd2" @click="addCard">
        <v-icon>mdi-plus</v-icon>Add Another List
      </v-btn>
      <input
        type="text"
        name="text"
        id="id"
        v-model="title"
        placeholder="Card Name..."
      />
    </v-toolbar>
    <br />
    <main class="xx">
      <v-row class="cardDes" v-for="item in cardList" :key="item.id">
        <v-col class="coll">
          <v-toolbar class="title">
            <v-icon>mdi-drag-vertical</v-icon> {{ item.title }}</v-toolbar
          >
          <v-card class="card">
            <div :id="33" class="board">
              <ul
                draggable="true"
                @drop.prevent="drop"
                @dragover.prevent
                class="itemList"
              >
                <li></li>
                <li
                  v-for="item1 in item.itemList"
                  :key="item1.id"
                  class="draggable"
                  :id="item1.id"
                  draggable="true"
                  @dragstart="dragStart"
                  @dragover.stop
                >
                  <div class="line">
                    <v-icon>mdi-drag-vertical</v-icon> {{ item1.text }}
                  </div>
                  <v-icon> mdi-pen </v-icon>
                </li>
              </ul>
            </div>

            <v-col >
              <hr />
              <div>
                <input type="text" v-model="text" placeholder="item..." />
                <v-btn
                  elevation="2"
                  class="btnAdd"
                  @click="addItem(item.id, text)">
                  <v-icon>mdi-plus</v-icon>add item
                </v-btn>
              </div>
            </v-col>
          </v-card>
        </v-col>
      </v-row>

      <div></div>
    </main>
  </div>
</template>
<script>
export default {
  name: "DragDrop",
  vmodelArr: [0, 1, 2, 6, 7],
  cardList: [],

  data() {
    return {
      cardList: [
        {
          title: "card Title 1", 
          itemList: [
            { id: 1, text: "item 1" },
            { id: 2, text: "item 2" },
            { id: 3, text: "item 3" },
          ],
        },
        {
          title: "card Title 2",
          id: -2,
          itemList: [
            { id: 4, text: "item 4" },
            { id: 5, text: "item 5" },
            { id: 6, text: "item 6" },
          ],
        },
      ],
    };
  },
  methods: {
    sortable(){
      var itemList = document.querySelector("itemList")
      new this.sortable(itemList, {Animation:500})
    },
    addCard() {
      this.cardList.push({
        title: this.title,
        id: new Date().getTime(),
        itemList: [],
      });
      console.log(this.cardList);
    },
    addItem(value, text) {
      let Card = this.cardList.find((item) => item.id == value);
      Card.itemList.push({ id: new Date().getTime(), text: text });
      console.log(Card);
      return (this.text = "");
    },

    drop: (e) => {
      const CardId = e.dataTransfer.getData("CardId");
      const draggable = document.getElementById(CardId);
      draggable.style.display = "flex";
      e.target.appendChild(draggable);
    },

    dragStart: (e) => {
      const target = e.target;
      e.dataTransfer.setData("CardId", target.id);

      setTimeout(() => {
        target.style.display = "none";
      }, 0);

      console.log("başladı");
    },
    dragEnd() {
      console.log("bitti");
    },
    dragOver() {
      // this.container.appendChild(draggable)
      console.log("devam");
    },
  },
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
}
.card {
  height: 280px;
  width: 230px;
}
/*card*/
.cardDes {
  margin-right: 8px;
  margin-top: 15px;
  display: inline-flex;
 
}
.board {
  /* div*/
  height: 200px;
  margin: 0px;
  overflow: auto;
  /* background-color: yellowgreen; */
}
/* ul */
.itemList {
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
  padding-top: 1px;
  height: 100%;
}
/* li */
.draggable {
  background-color: whitesmoke;
  list-style: none;
  border-radius: 3px;
  border: 1px solid #d6c9f5;
  box-shadow: 3px 3px 7px #b79ef3;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  height: 25px;
  cursor: pointer;
}
.title {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.line {
  text-decoration: none;
  color: gray;
  display: flex;
}

.cardItem:hover {
  background-color: #e1d8f7a1;
}

.btnAdd {
  font-size: 8px;
  height: 20px;
  width: 70px;
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
