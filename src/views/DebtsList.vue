<template>
  <v-container class="debtContainer">
    <v-text-field
      type="text"
      v-model="searchText"
      clearable
      label="search.."
      variant="solo"
    ></v-text-field>
    <div v-if="debtList != {}">
      <v-table class="table">
        <thead>
          <tr>
            <th class="text-left">BORÇLU</th>

            <th
              v-for="(item, index) in sortArr"
              :key="index"
              class="text-left"
              @click="
                sortData(item.type);
                showIcon(index);
              "
            >
              <v-icon v-if="item.isVisible"> {{ iconData(item.type) }}</v-icon>
              {{ item.name }}
            </th>
          </tr>
        </thead>
        <tbody
          v-for="user in filtered"
          :key="user.id"
          @click="
            this.$router.push({ name: 'UserDetail', params: { id: user.id } })
          "
        >
          <tr>
            <td>{{ user.name }}</td>
            <td>{{ user.debt }}</td>
            <td>{{ user.instData }}</td>
            <td>{{ user.payData }}</td>
          </tr>
        </tbody>
      </v-table>
    </div>
  </v-container>
</template>

<script>
// import axios from "axios";
import store from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "DebtList",

  data() {
    return {
      item: {},
      searchText: "",
      sort: true,
      sortType: "",
      isHidden: true,
      sortArr: [
        {
          name: "ÖDENECEK TUTAR",
          type: "debt",
          isVisible: false,
        },
        {
          name: "TAKSİT",
          type: "instData",
          isVisible: false,
        },
        {
          name: "PEŞİNAT",
          type: "payData",
          isVisible: false,
        },
      ],
    };
  },
  methods: {
    sortData(value) {
      this.sortType = value;
      if (this.sort) {
        this.debtList.sort((a, b) => (a[`${value}`] > b[`${value}`] ? 1 : -1));
        this.sort = false;
        console.log("sort", this.sort);
      } else {
        this.debtList.sort((a, b) => (a[`${value}`] > b[`${value}`] ? -1 : 1));
        this.sort = true;
        console.log("engin");
        console.log(this.sort);
      }
    },
    showIcon(index) {
      this.sortArr[index].isVisible = true;
      this.sortArr.map((item, itemIndex) => {
        if (index != itemIndex) {
          item.isVisible = false;
        }
      });
    },
    iconData(value) {
      if (this.sortType == value && this.sort) {
        return "mdi-arrow-down";
      } else {
        return "mdi-arrow-up";
      }
    },
  },
  computed: {
    filtered() {
      if (this.searchText.length >= 2) {
        const fixSearchText = this.searchText.toLowerCase().trim();
        return this.debtList.filter((item) =>
          item.name.toLowerCase().trim().includes(fixSearchText)
        );
      } else {
        return this.debtList;
      }
    },
    debtList() {
      return store.getters.items;
    },
    ...mapGetters(["items"]),
  },

  watch: {
    searchText() {
      console.log(this.searchText);
    },
  },
  mounted() {
    this.$store.dispatch("setUsers");
    // this.debtList = this.$store.getters.items;
    console.log("sema", this.debtList);
    // console.log(store);
  },
};
</script>

<style>
.debtContainer {
  height: auto;
  width: auto;
  margin: 50px;
}
.table {
  background-color: rgba(245, 245, 245, 0.267);
  border: 2px solid rgb(195, 173, 230);
  border-radius: 5px;
  text-decoration: rgb(5, 5, 5);
}
</style>
