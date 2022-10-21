<template>
  <div>
    <h1 class="title">
      <span class="font-weight-light">InTime</span>
      <span class="font-weight-thin ">Info</span>
    </h1>
    <v-card class="card">
      <v-title class="text-center">Biz Kimiz ?</v-title>

      Intime Info, 2010 yılında kurulmuş olan Online Grup’un bünyesinde
      bulundurduğu 15 şirketten yazılım ayağını temsil eden şirkettir. Uzmanlık
      alanları; süreç yönetim yazılımları, IoT çözümleri ve sektörel
      çözümlerdir.
    </v-card>
    <br />
    <v-card class="card">
      <ul>
        <li v-for="(item, index) in woodItems" :key="index">
          {{ item.title }}
        </li>
      </ul>
      <v-btn @click="upDateName">değiştir</v-btn>
    </v-card>
    <br />
    <v-card class="card">
      <ul>
        <li v-for="(item, index) in $store.state.itemList" :key="index">
          {{ item }}
        </li>
      </ul>
    </v-card>
    <br>
    <v-card class="card">
      Müşteri memnuniyetini temel ilke edinmiş Intime Info, müşterilerinin
      sorunlarını alanında uzman ekibi ile hızlı bir şekilde çözmektedir.
    </v-card>
    <br />
    <v-card class="card">
      Çalışanlarının memnuniyeti için de aynı özeni gösteren Intime Info,
      “müşterilerin memnuniyeti çalışanların memnuniyetinden geçer!” prensibi
      ile kurumsal şirket yapısını oluşturmuştur.
    </v-card>
    <br />
    <v-card class="card">
      Cinsiyetsiz kurum yapısını oluşturmayı hedefleyen Intime Info, %45 Kadın,
      %55 Erkek çalışanlardan oluşan bir demografik yapıya sahiptir. Genç ve
      dinamik bir yapı oluşturan Intime Info’nun çalışanlarının %37,5’ini Z
      kuşağı oluşturmaktadır.
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  name: "App",
  created() {
    console.log(this.$store.state.user);
    console.log("AAA", this.$store.getters.woodItems);
    console.log("şifresiz kullanıcı", this.activeUser);
  },
  methods: {
    upDateName() {
      this.$store.state.itemList.push({
        id: 6,
        title: "çatal",
        type: "mobilya",
      });
    },
  },
  computed: {
    ...mapGetters( ["woodItems", "activeUser" ]),
    //customComputed(){yeni tanımladığım computedd}
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 20px;
}
.card {
  margin-inline: 200px;
  border: 2px solid lightblue;
  box-shadow: 0px 5px 8px #8958fab2;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  border-radius: 10px;
  padding: 10px;
}
.card:hover {
  box-shadow: 0px 5px 8px #58c7fab2;
}
.ınfo {
  animation: color-change 2s infinite;
}
@keyframes color-change {
  0% {
    color: #8958fab2;
  }
  50% {
    color: #58c7fab2;
  }
  100% {
    color: #8958fab2;
  }
}
</style>
