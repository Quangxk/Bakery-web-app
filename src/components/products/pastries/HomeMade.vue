<template>
  <base-page
    :items="homemade"
    :pastry="true"
    :url="url"
    :text="text"
  ></base-page>
</template>
<script setup lang="ts">
import { useProduct } from "../../../stores/Product";

const all = useProduct();
const url =
  "https://d1g9yur4m4naub.cloudfront.net/image-handler/ts/20220127090454/ri/1550/src/images/Article_Images/ImageForArticle_703_16432922904812512.jpg";
const text = "test";
const homemade = all.items.filter(
  (item) =>
    item.categories.includes("homemade") && item.type.includes("pastries")
);
</script>
