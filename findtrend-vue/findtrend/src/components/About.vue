<template>
  <section class="about">
    <h1 class="header-text-1">
      Findtrend helps you to increase your productivity and reduce your
      computer's memory load,
      <span> an application that can fulfill your daily browsing needs.</span>
    </h1>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  padding: 140px;
  background: #ffffff;
}
span {
  color: #adadad;
}
.header-text-1 {
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  color: #000000;
  width: 1160px;
  margin: auto;
}
@media screen and (max-width: 600px) {
  .about {
    padding: 80px 20px;
    background: #ffffff;
  }
  .header-text-1 {
    font-family: "Effra";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    color: #000000;
    width: 335px;
    margin: auto;
  }
}
</style>