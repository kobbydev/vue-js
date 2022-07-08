<template>
  <div class="hero-container">
    <figure class="bgimage">
      <img src="../assets/bgimage.svg" alt="" />
    </figure>
    <navbar />
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="search news..."
    />
    <!-- <input type="submit" /> -->
    <div
      class="hero-content"
      v-for="(gnews, index) in gNews.slice(0, 1)"
      :key="index"
      @click="
        this.$router.push({
          name: 'newspage',
          params: {
            name: gnews.title,
          },
        })
      "
    >
      <img :src="gnews.urlToImage" alt="" class="news-image" />
      <div class="content-body">
        <h3 class="hero-header">
          <!-- India has spent a decade wasting the potential of its young population -->
          {{ gnews.title }}
        </h3>
        <p class="date-time">July 7, 2022 • 4 mins read</p>
        <div class="author">
          <img src="" alt="" />
          <p class="author-name">{{ gnews.author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "HeroContainer",
  components: { Navbar },
  props: {
    gNews: {
      type: Array,
    },
    modelValue: {
      type: String,
    },
  },
  emits: ["update:modelValue"],
};
</script>

<style scoped>
.hero-container {
  padding: 24px 36px;
  display: flex;
  flex-direction: column;
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
  margin: auto;
  margin-top: 69px;
  cursor: pointer;
  /* width: 966px; */
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
  padding: 48px 0px;
  text-align: start;
  /* margin: auto; */
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
  /* margin: auto; */
}
input {
  width: 600px;
  margin-top: 10px;
  padding: 10px;
  border: 2px solid white;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
}
</style>