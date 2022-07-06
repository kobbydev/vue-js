<template>
  <div class="hero-container">
    <figure class="bgimage">
      <img src="../assets/bgimage.svg" alt="" />
    </figure>
    <navbar />
    <div class="hero-content" v-for="globalnews in globalNews.slice(0, 1)">
      <img :src="globalnews.urlToImage" alt="" class="news-image" />
      <div class="content-body">
        <h3 class="hero-header">
          <!-- India has spent a decade wasting the potential of its young population -->
          {{ globalnews.title }}
        </h3>
        <p class="date-time">July 7, 2022 • 4 mins read</p>
        <div class="author">
          <img src="" alt="" />
          <p class="author-name">{{ globalnews.author }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- <Articles /> -->
  <div class="articles">
    <h1 class="article-header">ARTICLE</h1>
    <div class="cards">
      <Cards :cNews="globalNews" />
    </div>
  </div>
</template>

<script>
// import Articles from "@/components/Articles.vue";
// import HeroContainer from "@/components/HeroContainer.vue";
import { mapActions, mapGetters } from "vuex";
import Cards from "@/components/Card.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HomeView",
  components: { Cards, Navbar },
  async created() {
    await this.getAllGlobalNews();
    console.log(this.globalNews);
  },
  computed: {
    ...mapGetters({
      globalNews: "getGlobalNews",
    }),
  },
  methods: {
    ...mapActions({
      getAllGlobalNews: "getAllGlobalNews",
    }),
  },
};
</script>

<style scoped>
.hero-container {
  padding: 24px 36px;
}
.bgimage {
  position: absolute;
  top: 401px;
  left: 0;
  right: 0;
  z-index: -1;
  margin: 0;
}
.bgimage img {
  width: 100%;
}
.hero-content {
  margin: 0 200px;
  margin-top: 69px;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start; */
}
.hero-header {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  letter-spacing: -0.02em;
  color: #ffffff;
  width: 537px;
  margin-bottom: 16px;
}
.content-body {
  padding: 48px 100px;
  text-align: start;
}
.date-time {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #ffffff;
  margin-bottom: 32px;
}
.author {
  display: flex;
  align-items: center;
}
.author-name {
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  margin-left: 16px;
  color: #ffffff;
}
.news-image {
  width: 966px;
  height: 400px;
}
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