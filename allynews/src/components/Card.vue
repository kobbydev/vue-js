<template>
  <div class="card" v-for="cnew in cNews.slice(1, 13)">
    <img :src="cnew.urlToImage" alt="" />
    <div class="card-body">
      <h3 class="card-title">
        <!-- The “West Side Story” flop is the fault of the pandemic -->
        {{ cnew.title }}
      </h3>
      <p class="date-time">July 7, 2022 • 7 mins read</p>
      <p class="author-name">Author: {{ cnew.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    cNews: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.card {
  text-align: start;
  width: 284px;
  margin-bottom: 35px;
}
.card img {
  margin-bottom: 16px;
  width: 264px;
  height: 168px;
}
.card-title {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  width: 264px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 16px;
}
.date-time {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #000000;
  margin-bottom: 16px;
}
.author-name {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #000000;
}
</style>