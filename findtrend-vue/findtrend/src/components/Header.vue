<template>
  <div class="header">
    <h1 class="header-text">Minimize your tabs.</h1>
    <h1 class="header-text">Find your trends!</h1>
    <p class="header-body">
      Don't let your computer memories consumes all of those browser tabs.
      Findtrend let you gathers all of your favorite website into one place.
    </p>
    <div class="mid-hero">
      <Button text="Get Started 🔥" />
      <img src="../assets/img-hero.svg" alt="" />
    </div>
    <div class="scontainer">
      <Containers
        v-for="container in socialContainersData"
        :key="container.id"
        :containerImage="container.sImage"
        :containerText="container.text"
        :cId="container.id"
        :gcId="container.gcid"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Containers from "@/components/Containers.vue";
export default {
  name: "Header",
  components: { Button, Containers },
  data() {
    return {
      buttonStyle: {
        background: "#A8FF35",
        borderRadius: "40px",
        fontFamily: "Effra",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "140%",
        textAlign: "center",
        color: "#000000",
        padding: "16px 32px",
        border: "none",
        marginRight: "18px",
      },
      containerStyles: {
        position: "relative",
        width: "341.23px",
        height: "82px",
        background: "#181818",
        boxShadow: "5px 5px rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: "8px",
        paddingTop: "23px",
        paddingLeft: "20px",
        paddingBottom: "20px",
      },
      socialContainersData: [
        {
          id: "one",
          sImage: require("@/assets/sbasketball.svg"),
          text: "Elon Musk - Search",
          gcid: true,
        },
        {
          id: "two",
          sImage: require("@/assets/sfacebook.svg"),
          text: "Product Design - Search",
          gcid: true,
        },
        {
          id: "three",
          sImage: require("@/assets/spinterest.svg"),
          text: "Popular design - Search",
          gcid: true,
        },
        {
          id: "four",
          sImage: require("@/assets/stwitter.svg"),
          text: "Cryptopunk - Search",
          gcid: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.header {
  text-align: center;
}
.header-text {
  font-family: "Effra";
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 112%;
  text-align: center;
  color: #ffffff;
}
.header-body {
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #8b8b8b;
  width: 666px;
  margin: 28px auto;
  margin-bottom: 40px;
}
.mid-hero {
  display: flex;
  justify-content: center;
  align-items: center;
}
#one {
  transform: rotate(4deg);
  position: relative;
  left: 1130px;
  top: 185px;
  width: 341.23px;
  height: 82px;
  background: #181818;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 20px;
}
#two {
  transform: rotate(-2deg);
  position: relative;
  left: 860px;
  top: 50px;
  width: 341.23px;
  height: 82px;
  background: #181818;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 20px;
}
#three {
  transform: rotate(2deg);
  position: relative;
  left: 660px;
  top: 30px;
  width: 341.23px;
  height: 82px;
  background: #181818;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 20px;
}
#four {
  transform: rotate(-4deg);
  position: relative;
  left: 460px;
  top: -110px;
  width: 341.23px;
  height: 82px;
  background: #181818;
  box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.mid-hero button {
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  color: #000000;
  background: #a8ff35;
  border-radius: 40px;
  border: none;
  padding: 16px 32px;
  margin-right: 18px;
}
@media screen and (max-width: 600px) {
  .header-text {
    font-family: "Effra";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 112%;
    text-align: center;
    color: #ffffff;
  }
  .header-body {
    font-family: "Effra";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #8b8b8b;
    width: 286px;
    margin: 16px auto;
    margin-bottom: 32px;
  }
  .mid-hero img {
    display: none;
  }
  .mid-hero button {
    font-family: "Effra";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    color: #000000;
    border: none;
    background: #a8ff35;
    border-radius: 40px;
    padding: 12px 24px;
    margin-right: 0;
    margin-bottom: 60px;
  }
  #one {
    /* position: static; */
    left: 0;
    top: 202px;
    width: 293.04px;
    height: 70.42px;
    margin: auto;
  }
  #two {
    /* position: static; */
    left: 0;
    top: 62px;
    width: 293.04px;
    height: 70.42px;
    margin: auto;
  }
  #three {
    /* position: static; */
    left: 0;
    top: -62px;
    width: 293.04px;
    height: 70.42px;
    margin: auto;
  }
  #four {
    /* position: static; */
    left: 0;
    top: -202px;
    width: 293.04px;
    height: 70.42px;
    margin: auto;
  }
}
</style>