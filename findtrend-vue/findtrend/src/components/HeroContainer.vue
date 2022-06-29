<template>
  <section class="hero-container">
    <div class="hero-content">
      <Navbar :style="{ marginBottom: '128px' }" />
      <Header />
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
export default {
  name: "HeroContainer",
  components: { Navbar, Header },
};
</script>

<style scoped>
.hero-container {
  /* background-color: black; */
  position: relative;
  padding: 28px 80px;
  background-image: url(../assets/Bg-hero.svg);
}
</style>