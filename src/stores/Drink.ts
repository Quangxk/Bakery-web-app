import { defineStore } from "pinia";

import { Item } from "./Product";

export const useDrink = defineStore("Drink", {
  state: () => ({
    items: [
      {
        link: "https://th.bing.com/th/id/R.b1d4a1813b51991748b5b2e586013731?rik=G4kn15ILEr2QMw&pid=ImgRaw&r=0",
        id: 1,
        name: "Americano",
        categories: [],

        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/R.c7102be4ba1d0b0fa0eb89b82cde29d9?rik=t53JJMfnVhgsOw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f2627%2f1860%2farticles%2fwhat-is-the-best-cappuccino_1200x1200.jpg%3fv%3d1558647494&ehk=dFBXFtANB8jQEV0okbThiJIFVkBfbgOxC1BhytYcDI0%3d&risl=&pid=ImgRaw&r=0",
        id: 2,
        name: "Cappuccino",
        categories: [],

        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg",
        id: 3,
        name: "Latte",
        categories: [],

        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/OIP.avJ00jlnMVkHygq4TjvamAHaHa?rs=1&pid=ImgDetMain",
        id: 4,
        name: " HotChocolate ",
        categories: [],

        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/OIP.eTKG53rqqweOtjawZ8yiUwHaLH?rs=1&pid=ImgDetMain",
        id: 5,
        name: "Strawberry Smoothie",
        categories: [],

        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/R.b09ae8e829640a3a246add2b1f644a27?rik=4tPizt943tdhCg&pid=ImgRaw&r=0",
        id: 6,
        name: "Orange Juice",
        categories: [],

        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://i.pinimg.com/736x/b4/ec/92/b4ec928e02d3fb2b91f989644f7b4b2a--greek-yogurt-smoothies-healthy-smoothies.jpg",
        id: 7,
        name: "Oreo Smoothie",
        categories: [],
        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/OIP.qs3Yuwi_Dc1PLfgE12LvyAHaE8?rs=1&pid=ImgDetMain",
        id: 8,
        name: "Ginger Tea",
        categories: [],
        price: 20 as string | number,
        description: "",
      },
    ] as Item[],
  }),
});
