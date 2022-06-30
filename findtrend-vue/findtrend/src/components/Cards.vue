<template>
  <div class="card" :id="pId">
    <h1 class="plan-type">{{ planType }}</h1>
    <p class="plan-desc">{{ planDesc }}</p>
    <hr />
    <h1 class="plan-price">{{ planPrice }} <span>/Month</span></h1>
    <div class="deals-data" v-for="plan in plansData" :key="plan.id">
      <img :src="plan.tick" alt="" />
      <p class="plan-text">{{ plan.text }}</p>
    </div>
    <Button text="Start Free Trial" :style="buttonStyle" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  name: "Cards",
  props: ["planType", "planDesc", "planPrice", "plansData", "planTick", "pId"],
  components: { Button },
  data() {
    return {
      buttonStyle: {
        background: "#A8FF35",
        borderRadius: "29px",
        fontFamily: "Effra",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "140%",
        textAlign: "center",
        color: "#000000",
        padding: "16px 88px",
        border: "none",
        marginTop: "auto",
      },
    };
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
}
.plan-type {
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
  color: #000000;
  margin-bottom: 8px;
}
.plan-desc {
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #000000;
  margin-bottom: 32px;
}
.plan-price {
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 100%;
  color: #000000;
  margin: 32px 0;
}
.deals-data {
  display: flex;
  margin-bottom: 30px;
}
.plan-text {
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #000000;
  margin-left: 13px;
}
span {
  font-family: "Effra";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 100%;
  color: #000000;
}
</style>