<template>
  <section class="connect">
    <h1 class="header-text">All platform connect to Findtrend</h1>
    <div class="connect-container">
      <Container
        v-for="container in sponsorContainerData"
        :key="container.id"
        :cId="container.id"
        :gcId="container.gcid"
        :containerImage="container.scImage"
        :style="containerStyles"
      />
    </div>
  </section>
</template>

<script>
import Container from "@/components/Containers.vue";
export default {
  name: "Connect",
  components: { Container },
  data() {
    return {
      connect,
    };
  },
};
</script>

<style scoped>
.connect {
  padding: 140px;
  background: #fafafa;
}
.header-text {
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  text-align: center;
  color: #000000;
}
</style>