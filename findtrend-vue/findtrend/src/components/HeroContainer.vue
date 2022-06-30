<template>
  <section class="hero-container">
    <div class="hero-content">
      <Navbar />
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
  padding: 28px 80px;
  background-image: url(../assets/Bg-hero.svg);
}
@media screen and (max-width: 600px) {
  .hero-container {
    padding: 24px 18px;
  }
}
</style>