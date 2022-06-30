<template>
  <section class="join-us">
    <h1 class="text-1">Join us on email for</h1>
    <h1 class="text-2">more trending topics</h1>
    <Button text="Join now" />
  </section>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Join",
  components: { Button },
  data() {
    return {
      buttonStyles: {
        background: "#000000",
        color: "#FFFFFF",
        borderRadius: "40px",
        fontFamily: "Effra",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "140%",
        textAlign: "center",
        padding: "16px 52px",
        border: "none",
        marginTop: "40px",
      },
    };
  },
};
</script>

<style scoped>
.join-us {
  padding: 140px;
  background: #a8ff35;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.join-us button {
  color: #ffffff;
  background: #000000;
  border-radius: 29px;
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  padding: 16px 52px;
  border: none;
  margin-top: 40px;
}
.text-1 {
  font-family: "Effra";
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 112%;
  text-align: center;
  color: #000000;
}
.text-2 {
  font-family: "Effra";
  font-style: normal;
  font-weight: 900;
  font-size: 72px;
  line-height: 112%;
  text-align: center;
  color: #87d322;
}
@media screen and (max-width: 600px) {
  .join-us {
    padding: 80px 32px;
    background: #a8ff35;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .text-1 {
    font-family: "Effra";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 112%;
    text-align: center;
    color: #000000;
  }
  .text-2 {
    font-family: "Effra";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 112%;
    text-align: center;
    color: #87d322;
  }
  .join-us button {
    font-family: "Effra";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 140%;
    text-align: center;
    color: #ffffff;
    padding: 12px 24px;
    border: none;
    margin-top: 40px;
  }
}
</style>