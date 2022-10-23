<template>
  <div class="container">
    <v-toolbar theme="dark" class="header">DRAG & DROP
      <br>
      <v-btn elevation="2" class="btnAdd2" @click="addCard">

        <v-icon>mdi-plus</v-icon>Add Another List
      </v-btn>

    </v-toolbar>
    <br />
    <main class="xx">
      <v-row class="cardDes">
        <draggable v-model="cardList" group="card" item-key="id">
          <template #item="{ element }">
            <v-col :key="element.id">
              <v-card>
                <v-toolbar>{{ element.title }}</v-toolbar>
                <ul class="itemList">
                  <draggable v-model="element.itemList" group="items" item-key="id">
                    <template #item="{ element }">
                      <li class="cardItem" :key="element.id">
                        <a href="#" class="line">
                          <v-icon>mdi-drag-vertical</v-icon> {{ element.text }} {{ element.id }}
                        </a>
                        <button class="hi">
                          <v-icon> mdi-pen </v-icon>
                        </button>
                      </li>
                    </template>
                  </draggable>


                </ul>
                <v-col>
                  <div>
                    <input type="text" v-model="text">
                    <v-btn elevation="2" class="btnAdd" @click="addItem(item.id, text)">
                      <v-icon>mdi-plus</v-icon>add item
                    </v-btn>
                  </div>
                </v-col>
              </v-card>

            </v-col>

          </template>
        </draggable>
      </v-row>
      <div>

      </div>
    </main>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'

export default {
  name: "DragDrop",
  text: "",
  components: {
    Draggable,
  },
  data() {
    return {
      cardList: [
        {
          title: "card Title 1", id: -1,
          itemList: [
            { id: 1, text: "item 1" },
            { id: 2, text: "item 2" },
            { id: 3, text: "item 3" },
          ],
        },
        {
          title: "card Title 2", id: -2,
          itemList: [
            { id: 4, text: "item 4" },
            { id: 5, text: "item 5" },
            { id: 6, text: "item 6" },
          ],
        }],

      drag: false,
    };
  },
  methods: {
    addCard() {
      this.cardList.push({ id: new Date().getTime(), title: this.title })
    },
    addItem(value, text) {
      let Card = this.cardList.find((item) => item.id == value)
      Card.itemList.push({ id: new Date().getTime(), text: text })

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

.itemList {
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
