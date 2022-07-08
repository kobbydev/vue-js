<template>
  <HeroContainer :gNews="searchArray" v-model="search" />
  <!-- <div class="hero-container">
    <figure class="bgimage">
      <img src="../assets/bgimage.svg" alt="" />
    </figure>
    <navbar />
    <div
      class="hero-content"
      v-for="(technews, index) in categoryNews.slice(0, 1)"
      :key="index"
    >
      <img :src="technews.urlToImage" alt="" class="news-image" />
      <div class="content-body">
        <h3 class="hero-header">
          {{ technews.title }}
        </h3>
        <p class="date-time">July 7, 2022 • 4 mins read</p>
        <div class="author">
          <img src="" alt="" />
          <p class="author-name">{{ technews.author }}</p>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <Articles /> -->
  <div class="articles">
    <h1 class="article-header">ARTICLE</h1>
    <div class="cards">
      <Cards :cNews="searchArray" />
    </div>
  </div>
</template>

<script>
// import Articles from "@/components/Articles.vue";
import HeroContainer from "@/components/HeroContainer.vue";
import { mapActions, mapGetters } from "vuex";
import Cards from "@/components/Card.vue";
export default {
  name: "TechnologyView",
  components: { Cards, HeroContainer },
  data() {
    return {
      search: "",
    };
  },
  async created() {
    const category = this.$route.params.name;
    console.log(this.$route.params.name);
    await this.getCategoryNews(category);
    // console.log(this.categoryNews);
  },
  computed: {
    ...mapGetters({
      categoryNews: "getCategoryNews",
    }),
    searchArray() {
      if (this.search) {
        return this.categoryNews.filter((sea) =>
          sea.title.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.categoryNews;
      }
    },
  },
  methods: {
    ...mapActions({
      getCategoryNews: "getCategoryNews",
    }),
  },
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
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>