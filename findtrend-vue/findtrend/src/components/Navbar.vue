<template>
  <nav>
    <div class="logo">
      <img src="../assets/findlogo.svg" alt="logo" />
      <h1 class="logo-text">Findtrend</h1>
    </div>
    <ul class="links">
      <li><a href="#">About</a></li>
      <li><a href="#">How it works</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Solutions</a></li>
      <li><a href="#">Features</a></li>
    </ul>
    <div>
      <ul class="s-links">
        <li><a href="#">Login</a></li>
        <Button text="Register" :style="buttonStyle" />
      </ul>
    </div>
    <div class="mobile-menu" v-if="isShow">
      <div class="logos">
        <img src="../assets/findlogo.svg" alt="" />
        <button class="hamb" @click="isShow = false">
          <img src="../assets/close-img.svg" alt="" />
        </button>
      </div>
      <ul class="m-links">
        <li><a href="#">About</a></li>
        <li><a href="#">How it works</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Solutions</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Login</a></li>
        <Button text="Register" :style="buttonStyle" />
      </ul>
    </div>

    <button class="ham" @click="isShow = true">
      <img src="../assets/icon.svg" alt="" class="hmaburger-icon" />
    </button>
  </nav>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Navbar",
  components: { Button },
  props: ["show"],
  data() {
    return {
      buttonStyle: {
        fontFamily: "Effra",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "100%",
        textAlign: "center",
        background: "#FFFFFF",
        borderRadius: "40px",
        border: "none",
        padding: "12px 32px",
        color: "#000000",
      },
      isShow: false,
    };
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 128px;
}
.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo img {
  margin-right: 10px;
}
.links,
.s-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
li {
  list-style: none;
  margin-right: 40px;
}
a {
  text-decoration: none;
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
}
.logo-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #ffffff;
}
.ham {
  display: none;
}
@media screen and (max-width: 600px) {
  .links,
  .s-links {
    display: none;
  }
  nav {
    margin-bottom: 80px;
  }
  .m-links {
    margin-top: 104px;
    text-align: center;
    margin-left: 0;
    margin-right: 0;
  }
  .m-links li {
    margin-bottom: 40px;
  }
  .logo-text {
    display: none;
  }
  /* .overlay {
    background-color: black;
    opacity: 0.2;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 5;
  } */
  .ham,
  .hamb {
    display: block;
    background: black;
    opacity: 0.9;
    border: none;
  }
  .mobile-menu {
    background-color: black;
    width: 100%;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 638px;
    z-index: 5;
    padding: 10px;
    /* height: 638px;
    display: flex;
    flex-direction: column;
    position: fixed; */
  }
  .logos {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>