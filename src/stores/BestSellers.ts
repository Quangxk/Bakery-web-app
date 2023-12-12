import { defineStore } from "pinia";
export const useBestSellers = defineStore("BestSellers", {
  state: () => ({
    items: [
      {
        link: "https://www.lilcookie.com/wp-content/uploads/2018/11/American_chocolate_cake3-square.jpg",
        name: "Chocolate Cake",
        price: 20 as string | number,
        id: 1,
      },
      {
        link: "https://th.bing.com/th/id/OIP.p8KLvLWeimQTl1deggYD_QHaLH?rs=1&pid=ImgDetMain",
        name: "Oreo Cheesecake Cookies",
        price: 20 as string | number,
        id: 2,
      },
      {
        link: "https://www.cookingclassy.com/wp-content/uploads/2017/11/pumpkin-pie-12.jpg",
        name: "Pumpkin Pie",
        price: 20 as string | number,
        id: 3,
      },
      {
        link: "https://th.bing.com/th/id/OIP.uNQZfoh-kjfvsQ_Pn7Ba2QHaJQ?rs=1&pid=ImgDetMain",
        name: "Red Velvet Cake",
        price: 20 as string | number,
        id: 4,
      },
    ],
  }),
});
