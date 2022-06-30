<template>
  <footer>
    <div class="footer-logo">
      <img src="../assets/footer-logo.svg" alt="" />
      <h1 class="footer-text">Findtrend</h1>
    </div>
    <ul class="flinks">
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Terms and Conditions</a></li>
      <li><a href="#">Contact Us</a></li>
      <li><a href="#">Careers</a></li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  padding: 30px 80px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-logo {
  display: flex;
  align-items: center;
}
.footer-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  text-align: center;
  color: #000000;
  margin-left: 10px;
}
a {
  text-decoration: none;
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  text-align: center;
  color: #000000;
}
li {
  list-style: none;
  margin-left: 40px;
}
.flinks {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 600px) {
  footer {
    padding: 70px 62px;
    background: #ffffff;
    display: block;
  }
  .footer-logo {
    margin-bottom: 59px;
  }
  .flinks {
    display: block;
    align-items: center;
    text-align: center;
  }
  li {
    margin-left: 0;
    margin-top: 40px;
  }
}
</style>