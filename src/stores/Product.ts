import { defineStore } from "pinia";

export interface Item {
  link: string;
  name: string;
  type: Array<string>;
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
        type: ["pastries"],
        name: "Chocolate Cake",
        categories: ["bestseller", "lol"],
        price: 20 as string | number,
        description:
          "Dive into the irresistible allure of our Chocolate Cake. This heavenly creation boasts layers of moist chocolate cake embraced by velvety chocolate ganache, creating a symphony of indulgent flavors.",
      },
      {
        link: "https://th.bing.com/th/id/OIP.p8KLvLWeimQTl1deggYD_QHaLH?rs=1&pid=ImgDetMain",
        id: 2,
        categories: ["bestseller"],
        type: ["pastries"],

        name: "Oreo Cheesecake Cookies",
        price: 21 as string | number,
        description:
          "Introducing our Oreo Cheesecake Cookies, a delightful fusion of two beloved classics. Each cookie is a miniature masterpiece, combining the creamy richness of cheesecake with the iconic crunch of Oreo cookies.",
      },
      {
        link: "https://www.cookingclassy.com/wp-content/uploads/2017/11/pumpkin-pie-12.jpg",
        name: "Pumpkin Pie",
        id: 3,
        categories: ["bestseller"],
        type: ["pastries"],

        price: 20 as string | number,
        description:
          "Indulge in the warm, comforting embrace of our Pumpkin Pie. Perfectly capturing the essence of fall, each slice is a celebration of rich, velvety pumpkin filling encased in a flaky, golden crust",
      },
      {
        link: "https://th.bing.com/th/id/OIP.uNQZfoh-kjfvsQ_Pn7Ba2QHaJQ?rs=1&pid=ImgDetMain",
        name: "Red Velvet Cake",
        id: 4,
        categories: ["bestseller"],
        type: ["pastries"],

        price: 20 as string | number,
        description:
          "Embark on a journey of luxurious indulgence with our Red Velvet Cake. This iconic dessert is a visual and culinary masterpiece, featuring layers of moist, crimson-hued cake generously enveloped in a velvety cream cheese frosting.",
      },
      {
        link: "https://www.eucomosim.com/wp-content/uploads/2017/11/XVMc87faad8-d675-11e6-b565-a1f91d4e67bf.jpg",
        id: 5,
        type: ["pastries"],

        name: "Pain Au Chocolat",
        categories: ["bestseller"],
        price: 20 as string | number,
        description:
          "Transport yourself to a Parisian patisserie with our exquisite Pain au Chocolat. Delicate layers of buttery, flaky pastry envelop a generous filling of premium dark chocolate, creating a decadent experience that's both sophisticated and indulgent.",
      },
      {
        link: "https://www.therollingdonut.ie/wp-content/uploads/2019/06/IMG_9662-scaled-e1604598522130-2048x1341.jpg",
        id: 6,
        type: ["pastries"],

        categories: ["bestseller"],
        name: "12 Flavor Donuts",
        price: 21 as string | number,
        description:
          "Embark on a delectable journey with our sensational 12-Flavor Donut Assortment. This delightful box features a diverse palette of flavors that cater to every craving and preference.",
      },
      {
        link: "https://th.bing.com/th/id/R.f16e8c4ef9f0e7d6a921d940d6eb187f?rik=LFchjSd2p6qKUQ&pid=ImgRaw&r=0",
        name: "Croissant",
        id: 7,
        type: ["pastries"],

        categories: ["bestseller"],
        price: 20 as string | number,
        description:
          "Elevate your morning routine with the unmatched flakiness and buttery goodness of our Croissants . Handcrafted to perfection, each crescent-shaped pastry is a testament to our dedication to the art of French baking.",
      },
      {
        link: "https://th.bing.com/th/id/R.5b6fd6c49bd802dd1ae6c33e40e208eb?rik=gKv1UC2hDPOXtQ&pid=ImgRaw&r=0",
        name: "Box of 4 Cupcakes",
        id: 8,
        type: ["pastries"],

        categories: ["bestseller"],
        price: 20 as string | number,
        description:
          " Delight in a burst of flavor and whimsy with our delectable assortment of cupcakes. Each bite-sized confection is a testament to our commitment to creating moments of joy through irresistible sweetness.",
      },
      {
        link: "https://www.fifilafemme.com.au/wp-content/uploads/2019/02/macarons-in-a-box.jpg",
        id: 9,
        type: ["pastries"],

        name: "Box of Macarons",
        categories: ["bestseller"],
        price: 20 as string | number,
        description:
          "Experience the exquisite allure of our handcrafted Macarons. Delicate, colorful, and bursting with flavor, each macaron is a tiny masterpiece that promises a moment of indulgence.",
      },

      {
        link: "https://th.bing.com/th/id/R.ee44e9904bf0060a3c4a2edeb35d1f28?rik=9VGe%2bBED7WaUQw&pid=ImgRaw&r=0",
        id: 10,
        categories: [],
        type: ["pastries"],

        name: "Éclairs",
        price: 21 as string | number,
        description:
          "Indulge in the epitome of French pastry elegance with our exquisite Éclairs . Crafted with precision and passion, each elongated pastry shell is a delicate masterpiece that encases a luscious filling, creating a symphony of textures and flavors.",
      },
      {
        link: "https://secretrecipebd.com/wp-content/uploads/2019/06/Classic-Tiramisu-side-1.jpg",
        name: "Tiramisu",
        id: 11,
        categories: [],
        type: ["pastries"],

        price: 20 as string | number,
        description:
          "Savor the enchanting flavors of Italy with our decadent Tiramisu. Each spoonful is a journey through layers of delicate ladyfingers soaked in rich espresso and nestled between velvety mascarpone cream, creating a symphony of textures and a captivating dance of coffee and sweetness",
      },
      {
        link: "https://klaraslife.com/wp-content/uploads/2019/01/IMG_2443-1.jpg",
        name: "Cinammon Rolls",
        categories: [],
        type: ["pastries"],

        id: 12,
        price: 20 as string | number,
        description:
          "Indulge in the comforting embrace of our freshly baked Cinnamon Rolls. Each swirl of soft, pillowy dough is generously coated in a heavenly blend of cinnamon and sugar, creating a tantalizing aroma and a taste that's both nostalgic and irresistible.",
      },
      {
        link: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Caramel-Apple-Strudel_EXPS_FBMZ18_83900_B05_09_8b-3.jpg",
        id: 13,
        categories: [],
        type: ["pastries"],

        name: "Strudel",
        price: 20 as string | number,
        description:
          "Embark on a journey of exquisite pastry perfection with our handcrafted Strudel. Delicate layers of flaky, golden dough envelop a sumptuous filling, creating a symphony of textures and flavors that will transport you to the charming streets of Europe.",
      },
      {
        link: "https://th.bing.com/th/id/R.f4538e3e5895f28432587d13016ed77c?rik=GEwDnskD2HUaGw&pid=ImgRaw&r=0&sres=1&sresct=1",
        id: 14,
        categories: [],
        type: ["pastries"],

        name: "Danishes",
        price: 21 as string | number,
        description:
          "Elevate your morning routine with the delectable sophistication of our Danish pastries. Each delicate pastry is a work of art, featuring layers of light, flaky dough enveloping a variety of delightful fillings, creating a symphony of textures and flavors.",
      },
      {
        link: "https://lh5.googleusercontent.com/-5RtggFtOlDY/TYI2AjpIvkI/AAAAAAAADA0/uNl6o8xk51o/s1600/Close+Up+Palmier+in+Bowl.jpg",
        name: "Palmiers",
        id: 15,
        categories: [],
        type: ["pastries"],

        price: 20 as string | number,
        description:
          "Indulge in the delicate elegance of our Palmiers. These flaky and caramelized pastries are a true celebration of simplicity and sophistication.",
      },
      {
        link: "https://www.cookingclassy.com/wp-content/uploads/2017/07/chocolate-chip-cookie-dough-bites-13.jpg",
        name: "Cookie Dough",
        id: 16,
        type: ["pastries"],

        categories: ["homemade"],
        price: 20 as string | number,
        description:
          "Bring the joy of baking into your own kitchen with our Cookie Dough. Our pre-prepared cookie dough takes the hassle out of baking while allowing you to enjoy the experience of creating warm, homemade cookies whenever the mood strikes.",
      },
      {
        link: "https://www.happyfoodstube.com/wp-content/uploads/2019/02/valentines-day-puff-pastry-hearts-picture.jpg",
        name: "Heart-Shaped Puff Pastry",
        id: 17,
        type: ["pastries"],

        categories: ["holiday"],
        price: 20 as string | number,
        description:
          "Celebrate love in a deliciously unique way with our Heart-Shaped Puff Pastry. This Valentine's Day, indulge in the exquisite layers of flaky, golden puff pastry expertly shaped into charming hearts, creating a delightful treat that's as sweet as your affection.",
      },
      {
        link: "https://www.escoffieronline.com/wp-content/uploads/2018/02/187644609.jpg",
        name: "Valentine Cupcake",
        id: 18,
        type: ["pastries"],

        categories: ["holiday"],
        price: 20 as string | number,
        description:
          "Celebrate love in every delightful bite with our Valentine Cupcakes. These charming treats are crafted with passion and adorned with festive decorations, making them the perfect sweet gesture for your special someone.",
      },
      {
        link: "https://th.bing.com/th/id/OIP.2ZgD166ZFYK1zjAtMd59ogHaE6?rs=1&pid=ImgDetMain",
        name: "Heart-Shaped Chocolate Cake",
        id: 19,
        type: ["pastries"],

        categories: ["holiday"],
        price: 20 as string | number,
        description:
          "Celebrate the sweetest day of love with our Heart-Shaped Chocolate Cake. This decadent masterpiece is the perfect way to convey your affection and delight your special someone's taste buds.",
      },
      {
        link: "https://th.bing.com/th/id/R.72f7c802cb7fc9e55f4e7aabafbfbada?rik=k8ojcQGFIpEL0g&pid=ImgRaw&r=0",
        name: "Chocolate Box",
        id: 20,
        type: ["pastries"],

        categories: ["holiday"],
        price: 20 as string | number,
        description:
          "Ignite the flames of love with our exquisite Valentine's Chocolate Box. This thoughtfully curated collection of chocolates is a symphony of flavors and textures, designed to captivate the senses and indulge the one you love.",
      },
      {
        link: "https://th.bing.com/th/id/OIP.lq25EsahK3Ogsuq30ueEgAHaLH?rs=1&pid=ImgDetMain",
        name: "Cranberry Puff Pastry",
        id: 21,
        type: ["pastries"],

        categories: ["holiday"],
        price: 20 as string | number,
        description:
          "Celebrate the festive spirit with the enchanting flavors of our Cranberry Puff Pastry. Crafted exclusively for the holiday season, this delightful pastry is a harmonious blend of flaky layers, sweet cranberry compote, and a touch of holiday magic.",
      },
      {
        link: "https://th.bing.com/th/id/R.c26d24adcbad890c20f1cda4efe176b5?rik=Tf9DLvavoCFy%2fQ&pid=ImgRaw&r=0",
        name: "Ginger Bread House",
        id: 22,
        type: ["pastries"],

        categories: ["holiday"],
        price: 20 as string | number,
        description:
          "Make your holiday celebrations truly magical with our enchanting Gingerbread House. A festive centerpiece that captures the spirit of Christmas, our gingerbread house is a meticulously crafted masterpiece that combines the warmth of traditional gingerbread with whimsical holiday charm.",
      },
      {
        link: "https://th.bing.com/th/id/OIP.jX4CSlT_z5NuJ5gV91QgfgHaKX?rs=1&pid=ImgDetMain",
        name: "Brownies",
        id: 23,
        type: ["pastries"],

        categories: ["bestseller"],
        price: 20 as string | number,
        description:
          "Dive into pure chocolate bliss with our decadent Brownies. These fudgy delights are a testament to the perfect marriage of rich cocoa and indulgent sweetness, creating a treat that satisfies even the most intense chocolate cravings.",
      },
      {
        link: "https://th.bing.com/th/id/R.e360fe705497bec27a1ba285eee24560?rik=kQ6tcbiMI8Xykg&pid=ImgRaw&r=0",
        name: "Croissant Making Kit",
        id: 24,
        type: ["pastries"],

        categories: ["homemade"],
        price: 20 as string | number,
        description:
          "Bring the joy of crafting authentic French pastries into your own kitchen with our Croissant Making Kit. This carefully curated kit includes everything you need to recreate the flaky perfection of our renowned croissants in the comfort of your home.",
      },
      {
        link: "https://th.bing.com/th/id/R.f33997d2da7293f36409833ef424061b?rik=uAnVszqlFj%2f3Ww&pid=ImgRaw&r=0",
        name: "Brownies Making Kit",
        id: 25,
        type: ["pastries"],

        categories: ["homemade"],
        price: 20 as string | number,
        description:
          "Bring the joy of baking into your own kitchen with our Brownie Making Kit. Packed with premium ingredients and easy-to-follow instructions, this kit is your ticket to creating the most indulgent and delicious brownies right at home.",
      },
      {
        link: "https://th.bing.com/th/id/R.b1d4a1813b51991748b5b2e586013731?rik=G4kn15ILEr2QMw&pid=ImgRaw&r=0",
        id: 26,
        name: "Americano",
        categories: [],
        type: ["drinks"],

        price: 20 as string | number,
        description:
          "Indulge in the simplicity and boldness of our Americano. This classic coffee beverage is a true celebration of the rich and robust flavor of freshly brewed espresso combined with hot water, creating a drink that's as straightforward as it is satisfying.",
      },
      {
        link: "https://th.bing.com/th/id/R.c7102be4ba1d0b0fa0eb89b82cde29d9?rik=t53JJMfnVhgsOw&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f2627%2f1860%2farticles%2fwhat-is-the-best-cappuccino_1200x1200.jpg%3fv%3d1558647494&ehk=dFBXFtANB8jQEV0okbThiJIFVkBfbgOxC1BhytYcDI0%3d&risl=&pid=ImgRaw&r=0",
        id: 27,
        name: "Cappuccino",
        categories: [],
        type: ["drinks"],

        price: 20 as string | number,
        description:
          "Indulge in the velvety sophistication of our Cappuccino. This classic Italian coffee creation is a harmonious blend of rich espresso, steamed milk, and a generous crown of frothy microfoam, creating a beverage that's as visually appealing as it is delicious.",
      },
      {
        link: "https://coffeeaffection.com/wp-content/uploads/2020/01/how-to-make-a-latte-at-home.jpg",
        id: 28,
        name: "Latte",
        categories: [],
        type: ["drinks"],

        price: 20 as string | number,
        description:
          "Savor the comforting embrace of our Latte. This velvety and mild coffee delight is a seamless fusion of rich espresso and silky steamed milk, resulting in a beverage that's both indulgent and inviting.",
      },
      {
        link: "https://th.bing.com/th/id/OIP.avJ00jlnMVkHygq4TjvamAHaHa?rs=1&pid=ImgDetMain",
        id: 29,
        name: " Hot Chocolate ",
        categories: [],
        type: ["drinks"],

        price: 20 as string | number,
        description:
          "Warm your soul with the rich and velvety indulgence of our Hot Chocolate. This classic beverage is a comforting symphony of premium cocoa, steamed milk, and a dollop of whipped cream, creating a delightful escape into sweetness and warmth.",
      },
      {
        link: "https://th.bing.com/th/id/OIP.eTKG53rqqweOtjawZ8yiUwHaLH?rs=1&pid=ImgDetMain",
        id: 30,
        name: "Strawberry Smoothie",
        categories: [],
        type: ["drinks"],

        price: 20 as string | number,
        description:
          "Quench your thirst and delight your taste buds with the refreshing sweetness of our Strawberry Smoothie. This vibrant and invigorating beverage is a celebration of luscious, ripe strawberries blended to perfection, creating a smooth and satisfying treat.",
      },
      {
        link: "https://th.bing.com/th/id/R.b09ae8e829640a3a246add2b1f644a27?rik=4tPizt943tdhCg&pid=ImgRaw&r=0",
        id: 31,
        name: "Orange Juice",
        categories: [],
        type: ["drinks"],

        price: 20 as string | number,
        description:
          " Brighten your day with the zesty goodness of our freshly squeezed Orange Juice. This invigorating beverage is a burst of citrusy freshness, providing a delicious and nutritious start to your morning or a refreshing pick-me-up throughout the day.",
      },
      {
        link: "https://i.pinimg.com/736x/b4/ec/92/b4ec928e02d3fb2b91f989644f7b4b2a--greek-yogurt-smoothies-healthy-smoothies.jpg",
        id: 32,
        type: ["drinks"],

        name: "Oreo Smoothie",
        categories: [],
        price: 20 as string | number,
        description:
          " Indulge your sweet cravings with the delightful fusion of cookies and cream in our Oreo Smoothie. This irresistible beverage is a velvety blend of Oreo cookies, creamy goodness, and a touch of magic, creating a heavenly treat for your taste buds.",
      },
      {
        link: "https://th.bing.com/th/id/OIP.qs3Yuwi_Dc1PLfgE12LvyAHaE8?rs=1&pid=ImgDetMain",
        id: 33,
        type: ["drinks"],

        name: "Ginger Tea",
        categories: [],
        price: 20 as string | number,
        description:
          "Warm your senses with the soothing and aromatic embrace of our Ginger Tea. Crafted with care, this invigorating beverage combines the earthy warmth of ginger with a hint of spice, creating a comforting drink that's perfect for relaxation and rejuvenation.",
      },
    ] as Item[],
  }),
});
