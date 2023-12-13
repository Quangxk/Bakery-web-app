import { defineStore } from "pinia";

export interface Item {
  link: string;
  name: string;
  isBestseller: true;
  id: number;
  price: string | number;
  description: string;
}

export const useProduct = defineStore("Product", {
  state: () => ({
    items: [
      {
        link: "https://www.lilcookie.com/wp-content/uploads/2018/11/American_chocolate_cake3-square.jpg",
        id: 1,
        name: "Chocolate Cake",
        isBestseller: true,
        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/OIP.p8KLvLWeimQTl1deggYD_QHaLH?rs=1&pid=ImgDetMain",
        id: 2,
        isBestseller: true,

        name: "Oreo Cheesecake Cookies",
        price: 21 as string | number,
        description: "test",
      },
      {
        link: "https://www.cookingclassy.com/wp-content/uploads/2017/11/pumpkin-pie-12.jpg",
        name: "Pumpkin Pie",
        id: 3,
        isBestseller: true,

        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/OIP.uNQZfoh-kjfvsQ_Pn7Ba2QHaJQ?rs=1&pid=ImgDetMain",
        name: "Red Velvet Cake",
        id: 4,
        isBestseller: true,

        price: 20 as string | number,
        description: "test",
      },
    ] as Item[],
  }),
});
