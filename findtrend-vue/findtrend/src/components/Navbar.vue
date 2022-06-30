<template>
  <nav>
    <div class="logo">
      <img src="../assets/findlogo.svg" alt="logo" />
      <h1 class="logo-text">Findtrend</h1>
    </div>
    <ul>
      <li><a href="#">About</a></li>
      <li><a href="#">How it works</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Solutions</a></li>
      <li><a href="#">Features</a></li>
    </ul>
    <div class="s-links">
      <ul>
        <li><a href="#">Login</a></li>
        <Button text="Register" :style="buttonStyle" />
      </ul>
    </div>
  </nav>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Navbar",
  components: { Button },
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
ul {
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
@media screen and (max-width: 600px) {
  ul {
    display: none;
  }
  nav {
    margin-bottom: 80px;
  }
  .logo-text {
    display: none;
  }
}
</style>