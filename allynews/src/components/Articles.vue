<template>
  <div class="articles">
    <h1 class="article-header">ARTICLE</h1>
    <div class="cards">
      <Cards :cNews="globalNews" />
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Card.vue";
export default {
  name: "Articles",
  components: { Cards },
};
</script>

<style scoped>
.articles {
  /* margin-top: 96px; */
  padding: 96px 337px;
}
.article-header {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1em;
  color: #000000;
  margin-bottom: 32px;
}
</style>