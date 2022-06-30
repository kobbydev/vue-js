<template>
  <section class="best-deal">
    <h1 class="header-text">Get your best deal</h1>
    <div class="mid-deal">
      <h3 class="text-1">Monthly</h3>
      <img src="../assets/toggle.svg" alt="" />
      <h3 class="text-2">Yearly</h3>
      <img src="../assets/save-img.svg" alt="" />
    </div>
    <div class="cards">
      <Cards
        v-for="card in cardsData"
        :key="card.id"
        :planDesc="card.desc"
        :planPrice="card.price"
        :planTick="card.tick"
        :planType="card.type"
        :plansData="card.planData"
        :pId="card.id"
        :style="cardStyles"
      />
    </div>
  </section>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  name: "Deal",
  components: { Cards },
  data() {
    return {
      cardStyles: {
        height: "640px",
        width: "360px",
        padding: "32px",
      },
      cardsData: [
        {
          id: "personal",
          type: "Personal",
          desc: "Special first packet for all",
          price: "$8",
          planData: [
            {
              id: "1",
              tick: require("@/assets/tick-img.svg"),
              text: "Up to 5 page each group",
            },
            {
              id: "2",
              tick: require("@/assets/tick-img.svg"),
              text: "Up to 10 group page",
            },
            {
              id: "3",
              tick: require("@/assets/tick-img.svg"),
              text: "5 Days group page saved",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.best-deal {
  padding: 140px;
  background: #000000;
}
.header-text {
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  text-align: center;
  color: #ffffff;
}
.mid-deal {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
}
.text-1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  margin-right: 24px;
}
.text-2 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #f5f5f5;
  opacity: 0.5;
  margin: 0 24px;
}
#personal {
  background: #fafafa;
  border-radius: 16px;
}
</style>