<template>
  <div
    @drop.prevent="drop"
    :id="new Date().getTime()"
    class="board"
    @dragover.prevent
  >
    <div class="container"  id="5" @dragover="dragOver" @drop.prevent="drop">
      <p
        class="draggable"
        id="1"
        draggable="true"
        @dragstart="dragStart"
        @dragover.stop
        @dragend="dragEnd"
      >
        1
      </p>
      <p
        class="draggable"
        id="2"
        draggable="true"
        @dragover.stop
        @dragstart="dragStart"
        @dragend="dragEnd"
      >
        2
      </p>
    </div>

    <div class="container" id="6" @dragover="dragOver" @drop.prevent="drop">
      <p
        class="draggable"
        id="3"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
      >
        3
      </p>
      <p
        class="draggable"
        id="4"
        draggable="true"
        @dragstart="dragStart"
        @dragend="dragEnd"
      >
        4
      </p>
    </div>
  </div>
</template>

<script>
export default {
    
  data() {
    return {};
  },
  methods: {
    drop: (e) => {
      const CardId = e.dataTransfer.getData("CardId");
      const draggable = document.getElementById(CardId);
      draggable.style.display = "block";
      e.target.appendChild(draggable);
    },


    dragStart: (e) => {
      const target = e.target;
      e.dataTransfer.setData("CardId", target.id);
      setTimeout(()=>{ target.style.display = "none";
      }, 0)

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
body {
  margin: 0;
}
.board{
    height: 100%;
    width: 100%;
}
.container {
  background-color: #333;
  padding: 1rem;
  margin-top: 1rem;
}
.draggable {
  padding: 1rem;
  margin: 15px;
  background-color: white;
  border: 1px solid black;
  cursor: move;
}
</style>
