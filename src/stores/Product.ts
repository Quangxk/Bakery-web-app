import { defineStore } from "pinia";

export interface Item {
  link: string;
  name: string;
  isBestseller: boolean;
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
      {
        link: "https://www.eucomosim.com/wp-content/uploads/2017/11/XVMc87faad8-d675-11e6-b565-a1f91d4e67bf.jpg",
        id: 5,
        name: "Pain Au Chocolat",
        isBestseller: true,
        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://www.therollingdonut.ie/wp-content/uploads/2019/06/IMG_9662-scaled-e1604598522130-2048x1341.jpg",
        id: 6,
        isBestseller: true,
        name: "12 Flavor Donuts",
        price: 21 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.f16e8c4ef9f0e7d6a921d940d6eb187f?rik=LFchjSd2p6qKUQ&pid=ImgRaw&r=0",
        name: "Croissant",
        id: 7,
        isBestseller: false,
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.5b6fd6c49bd802dd1ae6c33e40e208eb?rik=gKv1UC2hDPOXtQ&pid=ImgRaw&r=0",
        name: "Box of 4 Cupcakes",
        id: 8,
        isBestseller: true,
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://www.fifilafemme.com.au/wp-content/uploads/2019/02/macarons-in-a-box.jpg",
        id: 9,
        name: "Box of Macarons",
        isBestseller: true,
        price: 20 as string | number,
        description: "",
      },

      {
        link: "https://th.bing.com/th/id/R.ee44e9904bf0060a3c4a2edeb35d1f28?rik=9VGe%2bBED7WaUQw&pid=ImgRaw&r=0",
        id: 10,
        isBestseller: false,
        name: "Eclairs",
        price: 21 as string | number,
        description: "test",
      },
      {
        link: "https://secretrecipebd.com/wp-content/uploads/2019/06/Classic-Tiramisu-side-1.jpg",
        name: "Tiramisu",
        id: 11,
        isBestseller: false,

        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg",
        name: "Cinammon Rolls",
        id: 12,
        isBestseller: false,

        price: 20 as string | number,
        description: "test",
      },
    ] as Item[],
  }),
});
