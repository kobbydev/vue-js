<template>
  <section class="connect">
    <h1 class="header-text">All platform connect to Findtrend</h1>
    <div class="connect-container">
      <Container
        v-for="container in connectContainerData"
        :key="container.id"
        :cId="container.id"
        :gcId="container.gcid"
        :containerImage="container.ccImage"
        :style="containerStyles"
      />
    </div>
    <div class="tweets">
      <figure>
        <img src="../assets/tweet1.svg" alt="" />
      </figure>
      <figure><img src="../assets/tweet2.svg" alt="" /></figure>
      <img src="../assets/tweet3.svg" alt="" />
    </div>
    <div class="btn-cover">
      <Button text="View More Trend" :style="buttonStyle" />
    </div>
  </section>
</template>

<script>
import Container from "@/components/Containers.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Connect",
  components: { Container, Button },
  data() {
    return {
      buttonStyle: {
        fontFamily: "Effra",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "100%",
        textAlign: "center",
        background: "#000000",
        borderRadius: "40px",
        border: "none",
        padding: "12px 32px",
        color: "#FFFFFF",
      },
      containerStyles: {
        position: "relative",
        width: "124px",
        height: "124px",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        marginLeft: "24px",
      },
      connectContainerData: [
        {
          id: "facebook",
          ccImage: require("@/assets/cfacebook.svg"),
          gcid: false,
        },
        {
          id: "twitter",
          ccImage: require("@/assets/ctwitter.svg"),
          gcid: false,
        },
        {
          id: "basketball",
          ccImage: require("@/assets/cbasketball.svg"),
          gcid: false,
        },
        {
          id: "pinterest",
          ccImage: require("@/assets/cpinterest.svg"),
          gcid: false,
        },
        {
          id: "mashable",
          ccImage: require("@/assets/cmashable.svg"),
          gcid: false,
        },
        {
          id: "reddit",
          ccImage: require("@/assets/creddit.svg"),
          gcid: false,
        },
        {
          id: "vk",
          ccImage: require("@/assets/cvk.svg"),
          gcid: false,
        },
        {
          id: "linkedin",
          ccImage: require("@/assets/clinkedin.svg"),
          gcid: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.connect {
  padding: 140px;
  background: #fafafa;
}
.connect-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
}
.header-text {
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  text-align: center;
  color: #000000;
}
#twitter {
  background-color: #a8ff35;
}
.tweets {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 77px;
  margin-bottom: 96px;
}
figure {
  margin-bottom: 43px;
}
.btn-cover {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>