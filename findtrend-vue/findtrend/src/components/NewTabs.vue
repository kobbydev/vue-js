<template>
  <section class="new-tabs">
    <h1 class="header-text">Open new tabs is sh*t</h1>
    <div class="mid-new-tabs">
      <img src="../assets/solution-img.svg" alt="" />
      <img src="../assets/newtab1.svg" alt="" />
      <div class="white-container">
        <Container
          v-for="container in newContainerData"
          :key="container.id"
          :containerImage="container.sImage"
          :containerText="container.text"
          :cId="container.id"
          :gcId="container.gcid"
        />
      </div>
      <img src="../assets/need-img.svg" alt="" />
      <img src="../assets/newtab2.svg" alt="" />
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
      containerStyles: {
        position: "relative",
        width: "341.23px",
        height: "82px",
        background: "#181818",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "8px",
        paddingTop: "23px",
        paddingLeft: "20px",
        paddingBottom: "20px",
      },
      newContainerData: [
        {
          id: "findt",
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
#findt {
  position: relative;
  width: 291px;
  height: 69.93px;
  background: #181818;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.mid-new-tabs img:nth-of-type(2),
.mid-new-tabs img:nth-of-type(4) {
  display: none;
}
@media screen and (max-width: 600px) {
  .new-tabs {
    background: #a8ff35;
    padding: 80px 14px;
    text-align: center;
    position: relative;
  }
  .header-text {
    font-family: "Effra";
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 112%;
    text-align: center;
    color: #000000;
  }
  p {
    font-family: "Effra";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #000000;
    width: 286px;
    margin: auto;
    margin-top: 60px;
  }
  .mid-new-tabs {
    display: block;
  }
  .white-container {
    background: #f5f5f5;
    border-radius: 14px;
    width: 339px;
    height: 118px;
    margin: 0;
  }
  .mid-new-tabs img:nth-of-type(2) {
    display: block;
    position: relative;
    top: 23px;
    left: 230px;
    z-index: 2;
  }
  .mid-new-tabs img:nth-of-type(4) {
    display: block;
    position: relative;
    top: -19px;
  }
  .mid-new-tabs img:nth-of-type(1),
  .mid-new-tabs img:nth-of-type(3) {
    display: none;
  }
}
</style>