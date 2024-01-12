import { defineStore } from "pinia";

export interface Item {
  link: string;
  name: string;
  categories: Array<string>;
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
        categories: ["bestseller"],
        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/OIP.p8KLvLWeimQTl1deggYD_QHaLH?rs=1&pid=ImgDetMain",
        id: 2,
        categories: ["bestseller"],

        name: "Oreo Cheesecake Cookies",
        price: 21 as string | number,
        description: "test",
      },
      {
        link: "https://www.cookingclassy.com/wp-content/uploads/2017/11/pumpkin-pie-12.jpg",
        name: "Pumpkin Pie",
        id: 3,
        categories: ["bestseller"],

        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/OIP.uNQZfoh-kjfvsQ_Pn7Ba2QHaJQ?rs=1&pid=ImgDetMain",
        name: "Red Velvet Cake",
        id: 4,
        categories: ["bestseller"],

        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://www.eucomosim.com/wp-content/uploads/2017/11/XVMc87faad8-d675-11e6-b565-a1f91d4e67bf.jpg",
        id: 5,
        name: "Pain Au Chocolat",
        categories: ["bestseller"],
        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://www.therollingdonut.ie/wp-content/uploads/2019/06/IMG_9662-scaled-e1604598522130-2048x1341.jpg",
        id: 6,
        categories: ["bestseller"],
        name: "12 Flavor Donuts",
        price: 21 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.f16e8c4ef9f0e7d6a921d940d6eb187f?rik=LFchjSd2p6qKUQ&pid=ImgRaw&r=0",
        name: "Croissant",
        id: 7,
        categories: ["bestseller"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.5b6fd6c49bd802dd1ae6c33e40e208eb?rik=gKv1UC2hDPOXtQ&pid=ImgRaw&r=0",
        name: "Box of 4 Cupcakes",
        id: 8,
        categories: ["bestseller"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://www.fifilafemme.com.au/wp-content/uploads/2019/02/macarons-in-a-box.jpg",
        id: 9,
        name: "Box of Macarons",
        categories: ["bestseller"],
        price: 20 as string | number,
        description: "",
      },

      {
        link: "https://th.bing.com/th/id/R.ee44e9904bf0060a3c4a2edeb35d1f28?rik=9VGe%2bBED7WaUQw&pid=ImgRaw&r=0",
        id: 10,
        categories: [],
        name: "Eclairs",
        price: 21 as string | number,
        description: "test",
      },
      {
        link: "https://secretrecipebd.com/wp-content/uploads/2019/06/Classic-Tiramisu-side-1.jpg",
        name: "Tiramisu",
        id: 11,
        categories: [],

        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg",
        name: "Cinammon Rolls",
        categories: [],

        id: 12,
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Caramel-Apple-Strudel_EXPS_FBMZ18_83900_B05_09_8b-3.jpg",
        id: 13,
        categories: [],

        name: "Strudel",
        price: 20 as string | number,
        description: "",
      },
      {
        link: "https://th.bing.com/th/id/R.f4538e3e5895f28432587d13016ed77c?rik=GEwDnskD2HUaGw&pid=ImgRaw&r=0&sres=1&sresct=1",
        id: 14,
        categories: [],

        name: "Danishes",
        price: 21 as string | number,
        description: "test",
      },
      {
        link: "https://lh5.googleusercontent.com/-5RtggFtOlDY/TYI2AjpIvkI/AAAAAAAADA0/uNl6o8xk51o/s1600/Close+Up+Palmier+in+Bowl.jpg",
        name: "Palmiers",
        id: 15,
        categories: [],

        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://www.cookingclassy.com/wp-content/uploads/2017/07/chocolate-chip-cookie-dough-bites-13.jpg",
        name: "Cookie Dough",
        id: 16,
        categories: ["homemade"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://www.happyfoodstube.com/wp-content/uploads/2019/02/valentines-day-puff-pastry-hearts-picture.jpg",
        name: "Heart-Shaped Puff Pastry",
        id: 17,
        categories: ["holiday"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://www.escoffieronline.com/wp-content/uploads/2018/02/187644609.jpg",
        name: "Valentine Cupcake",
        id: 18,
        categories: ["holiday"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/OIP.2ZgD166ZFYK1zjAtMd59ogHaE6?rs=1&pid=ImgDetMain",
        name: "Heart-Shaped Chocolate Cake",
        id: 19,
        categories: ["holiday"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.72f7c802cb7fc9e55f4e7aabafbfbada?rik=k8ojcQGFIpEL0g&pid=ImgRaw&r=0",
        name: "Chocolate Box",
        id: 20,
        categories: ["holiday"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/OIP.lq25EsahK3Ogsuq30ueEgAHaLH?rs=1&pid=ImgDetMain",
        name: "Cranberry Puff Pastry",
        id: 21,
        categories: ["holiday"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.c26d24adcbad890c20f1cda4efe176b5?rik=Tf9DLvavoCFy%2fQ&pid=ImgRaw&r=0",
        name: "Ginger Bread House",
        id: 22,
        categories: ["holiday"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/OIP.jX4CSlT_z5NuJ5gV91QgfgHaKX?rs=1&pid=ImgDetMain",
        name: "Brownies",
        id: 23,
        categories: ["bestseller"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.e360fe705497bec27a1ba285eee24560?rik=kQ6tcbiMI8Xykg&pid=ImgRaw&r=0",
        name: "Croissant Making Kit",
        id: 24,
        categories: ["homemade"],
        price: 20 as string | number,
        description: "test",
      },
      {
        link: "https://th.bing.com/th/id/R.f33997d2da7293f36409833ef424061b?rik=uAnVszqlFj%2f3Ww&pid=ImgRaw&r=0",
        name: "Brownies Making Kit",
        id: 25,
        categories: ["homemade"],
        price: 20 as string | number,
        description: "test",
      },
    ] as Item[],
  }),
});
