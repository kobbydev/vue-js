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
        :classId="container.iid"
      />
    </div>
    <div class="tweets">
      <figure>
        <img src="../assets/tweet1.svg" alt="" class="img-one" />
      </figure>
      <figure><img src="../assets/tweet2.svg" alt="" class="img-two" /></figure>
      <img src="../assets/tweet3.svg" alt="" class="img-three" />
    </div>
    <div class="btn-cover">
      <Button text="View More Trend" />
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
          iid: "ln",
          gcid: false,
        },
        {
          id: "twitter",
          ccImage: require("@/assets/ctwitter.svg"),
          iid: "ln",
          gcid: false,
        },
        {
          id: "basketball",
          ccImage: require("@/assets/cbasketball.svg"),
          iid: "ln",
          gcid: false,
        },
        {
          id: "pinterest",
          ccImage: require("@/assets/cpinterest.svg"),
          iid: "ln",
          gcid: false,
        },
        {
          id: "mashable",
          ccImage: require("@/assets/cmashable.svg"),
          iid: "ln",
          gcid: false,
        },
        {
          id: "reddit",
          ccImage: require("@/assets/creddit.svg"),
          iid: "ln",
          gcid: false,
        },
        {
          id: "vk",
          ccImage: require("@/assets/cvk.svg"),
          iid: "ln",
          gcid: false,
        },
        {
          id: "linkedin",
          ccImage: require("@/assets/clinkedin.svg"),
          iid: "ln",
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
.connect-container .container {
  width: 124px;
  height: 124px;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-left: 24px;
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
.btn-cover button {
  font-family: Effra;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  background: #000000;
  border-radius: 40px;
  border: none;
  padding: 12px 32px;
  color: #ffffff;
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
@media screen and (max-width: 600px) {
  .connect {
    padding: 80px 18px;
  }
  .header-text {
    font-family: "Effra";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #000000;
  }
  .connect-container {
    margin-top: 32px;
    display: flex;
    justify-content: start;
    align-items: center;
    overflow: hidden;
  }
  .connect-container .container {
    width: 64px;
    height: 64px;
    padding: 16px;
    margin-right: 16px;
    margin-left: 0;
  }
  .img-one {
    width: 339px;
    height: 116px;
  }
  .img-two {
    width: 339px;
    height: 344px;
  }
  .img-three {
    width: 339px;
    height: 116px;
  }
  .btn-cover button {
    font-family: "Effra";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    color: #ffffff;
    background: #000000;
    border-radius: 40px;
    border: none;
    padding: 12px 24px;
  }
}
</style>