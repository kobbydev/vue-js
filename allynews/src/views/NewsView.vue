<template>
  <div class="newspage">
    <button @click="this.$router.go(-1)">
      <i class="uil uil-arrow-left"></i>Back
    </button>
    <h1 class="news-header">
      {{ snewss?.title }}
    </h1>
    <h4 class="source">
      Source: {{ snewss?.source.name }}
      <span>Author: {{ snewss?.author }}</span>
    </h4>
    <img :src="snewss?.urlToImage" alt="" />
    <h3>{{ snewss?.description }}</h3>
    <h3>{{ snewss?.content }}</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["name"],
  data() {
    return {
      newsArray: [],
    };
  },
  async created() {
    await this.getNewNews(this.name);
  },
  computed: {
    ...mapGetters({
      newNews: "getNewNews",
    }),
    snewss() {
      return this.newNews[0];
    },
  },
  methods: {
    ...mapActions({
      getNewNews: "getNewNews",
    }),
  },
};
</script>

<style scoped>
.newspage {
  margin: 20px;
}
.newspage img {
  width: 966px;
  margin-bottom: 30px;
}
.news-header {
  margin-bottom: 20px;
  margin-top: 30px;
}
h3 {
  width: 966px;
  margin: auto;
  text-align: start;
}
button {
  text-align: start;
  border: none;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>