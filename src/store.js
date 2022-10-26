import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    user: {
      name: "semanur",
      lname: "can",
      age: 32,
      address: {},
      password: 123123123,
      tc: 11111111,
    },
    theme: "dark",
    permissons: [1, 2, 3, 4, 5],
    itemList: [
      { id: 1, title: "masa", type: "mobilya" },
      { id: 2, title: "sandalye", type: "mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "monitor", type: "elektronik" },
      { id: 5, title: "bardak", type: "züccaciye" },
    ],
    items: [],
  },
  getters: {
    woodItems: (state) => state.itemList.filter((i) => i.type === "mobilya"),
    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
    items: (state) => {
      console.log(state.items);
      return state.items;
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.items = payload;
    },
  },
  actions: {
    setUsers(context) {
      axios.get("http://localhost:3000/debts").then((items) => {
        context.commit("setUsers", items.data);
      });
    },
  },
});

export default store;
