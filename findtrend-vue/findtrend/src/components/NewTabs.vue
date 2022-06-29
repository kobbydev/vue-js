<template>
  <section class="new-tabs">
    <h1 class="header-text">Open new tabs is sh*t</h1>
    <div class="mid-new-tabs">
      <img src="../assets/solution-img.svg" alt="" />
      <div class="white-container">
        <Container
          v-for="container in newContainerData"
          :key="container.id"
          :containerImage="container.sImage"
          :containerText="container.text"
          :cId="container.id"
          :gcId="container.gcid"
          :style="{ position: 'relative', boxShadow: 'none' }"
        />
      </div>
      <img src="../assets/need-img.svg" alt="" />
    </div>
    <p>
      A solution for your browser tabs and don't make your device get slower
      over time. Get ease and faster to discover a trend with just one tab.
    </p>
  </section>
</template>

<script>
import Container from "@/components/Containers.vue";
export default {
  name: "NewTabs",
  components: { Container },
  data() {
    return {
      newContainerData: [
        {
          id: "wqwe",
          sImage: require("@/assets/find-img.svg"),
          text: "Findtrend - Elon Musk",
          gcid: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.new-tabs {
  background: #a8ff35;
  padding: 140px 293px;
  text-align: center;
}
.mid-new-tabs {
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 60px;
}
.white-container {
  width: 502px;
  height: 202px;
  background: #f5f5f5;
  border-radius: 16px;
  margin-left: 24px;
  margin-right: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header-text {
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 72px;
  line-height: 86px;
  text-align: center;
  color: #000000;
}
p {
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #000000;
  width: 666px;
  margin: auto;
  margin-top: 60px;
}
</style>