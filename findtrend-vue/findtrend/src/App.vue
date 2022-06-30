<template>
  <HeroContainer />
  <NewTabs />
  <About />
  <Sponsors />
  <Connect />
  <Deal />
  <Join />
  <Footer />
</template>

<script>
import HeroContainer from "@/components/HeroContainer.vue";
import NewTabs from "@/components/NewTabs.vue";
import Sponsors from "@/components/Sponsors.vue";
import About from "@/components/About.vue";
import Connect from "@/components/Connect.vue";
import Deal from "@/components/Deal.vue";
import Join from "@/components/Join.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    HeroContainer,
    NewTabs,
    Sponsors,
    About,
    Connect,
    Deal,
    Join,
    Footer,
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Effra";
  src: local("Effra"), url(./fonts/Effra_Std_Rg.ttf) format("truetype");
}
template {
  background: #e5e5e5;
}
</style>
