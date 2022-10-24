import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "Home",
    path: "/", //nasıl gıdecek
    component: () => import("./views/routes/HomePage.vue"), //bunu ne karşılayacak
  },
  {
    name: "Add",
    path: "/add", //nasıl gıdecek
    component: () => import("./views/routes/AddPage.vue"), //bunu ne karşılayacak
  },
  {
    name: "UserDetail",
    path: "/add/:id",
    component: () => import("./views/UserDetail.vue"),
  },
  {
    name: "DragDrop",
    path: "/DragDrop", //nasıl gıdecek
    component: () => import("./DragDrop/DragDropHome.vue"), //bunu ne karşılayacak
  },
  {
    name: "MiniDrag",
    path: "/MiniDrag", //nasıl gıdecek
    component: () => import("./DragDrop/miniDrag.vue"), //bunu ne karşılayacak
  },



  {
    name: "DebtCmp",
        path: "/debtCmp",
        component: () => import("./views/routes/DebtComponent.vue"),
    children: [
      {
        name: "MyDebtsCalculate",
    path: "/debtCmp/myDebtsCalculate",
    component: () => import("./views/MyDebtsCalculate.vue"),
      },
      {
        name: "DebtList",
        path: "/debtCmp/debtList",
        component: () => import("./views/DebtsList.vue"),
      },
      {
        name: "MyDebts",
        path: "/debtCmp/myDebts/:id",
        component: () => import("./views/MyDebts.vue"),
      },
    ],
  },
];
const router = createRouter({
  routes: routes,
  // history: createWebHistory(),
  history: createWebHistory(),
});

export default router;
