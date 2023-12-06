import { defineStore } from "pinia";
export const useItemStore = defineStore("ItemStore", {
  state: () => ({
    items: [
      {
        name: "lol",
        price: 20,
      },
      {
        name: "lol",
        price: 21,
      },
      {
        name: "lol",
        price: 22,
      },
    ],
  }),
});
