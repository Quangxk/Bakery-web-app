<template>
  <base-page :items="bestSeller" :pastry="true" :url="url" :text="text">
  </base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../../stores/Product";
const all = useProduct();
const url =
  "https://th.bing.com/th/id/R.14e749d5687592a19634e7116a4bd242?rik=lHrdUbRr1W3uyg&riu=http%3a%2f%2fs3.amazonaws.com%2fpn-media%2fwp-content%2fuploads%2f2015%2f02%2f25215125%2ftiffany1.jpg&ehk=eDBCyjeEasaEw25Gm08ZiRuFE7gDfHYu5XTNYoNEjz8%3d&risl=&pid=ImgRaw&r=0";
const text = "test";
const bestSeller = all.items.filter((item) =>
  item.categories.includes("bestseller")
);
</script>
