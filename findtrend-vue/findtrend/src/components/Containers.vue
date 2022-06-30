<template>
  <!-- cId is used to bind an id to the div -->
  <div class="container" :id="cId">
    <figure>
      <!-- classId is used as a prop to be able to control the images in the Sponsors.vue page. -->
      <img :src="containerImage" alt="" :class="classId" />
    </figure>
    <!-- gcId is used with the v-if to control the visibility of the p tag as this container is used in multiple pages. -->
    <p v-if="gcId">{{ containerText }}</p>
    <div class="gradient-container" v-if="gcId">
      <img src="../assets/close-img.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["containerImage", "containerText", "cId", "gcId", "classId"],
};
</script>

<style scoped>
.gradient-container {
  background: linear-gradient(#181818 53.65%, rgba(24, 24, 24, 0.8) 100%);
  width: 84.65px;
  height: 75px;
  position: absolute;
  right: 0;
  z-index: 4;
}
.gradient-container img {
  padding: 29px 10px;
}
p {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 23.8065px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  margin-left: 13px;
}
@media screen and (max-width: 600px) {
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20.4445px;
    line-height: 24px;
    text-align: center;
    color: #ffffff;
  }
  .gradient-container {
    background: linear-gradient(#181818 53.65%, rgba(24, 24, 24, 0.8) 100%);
    width: 70px;
    height: 67px;
    position: absolute;
    right: 0;
    z-index: 4;
    border-radius: 8px;
  }
  .mt {
    width: 115.71px;
    height: 24.36px;
  }
  .ln {
    width: 30.97px;
    height: 30.97px;
  }
}
</style>