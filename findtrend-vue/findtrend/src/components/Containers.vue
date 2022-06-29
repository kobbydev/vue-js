<template>
  <div class="container" :id="cId">
    <figure>
      <img :src="containerImage" alt="" />
    </figure>
    <p v-if="gcId">{{ containerText }}</p>
    <div class="gradient-container" v-if="gcId">
      <img src="../assets/close-img.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Container",
  props: ["containerImage", "containerText", "cId", "gcId"],
  data() {
    return {
      value: true,
    };
  },
};
</script>

<style scoped>
.container {
  width: 341.23px;
  height: 82px;
  background: #181818;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 20px;
}
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
</style>