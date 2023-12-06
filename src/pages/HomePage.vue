<template>
  <picture-view></picture-view>
  <best-sellers></best-sellers>
  <holiday-view></holiday-view>
</template>
<script lang="ts">
import BestSellers from "../components/home/BestSellers.vue";
import PictureView from "../components/home/PictureView.vue";
import HolidayView from "../components/home/HolidayView.vue";
export default {
  components: {
    PictureView,
    HolidayView,
    BestSellers,
  },
};
</script>
<style scoped></style>
