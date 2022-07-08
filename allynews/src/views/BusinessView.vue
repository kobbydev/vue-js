<template>
  <HeroContainer :gNews="searchArray" v-model="search" />
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