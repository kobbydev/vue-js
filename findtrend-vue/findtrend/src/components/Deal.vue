<template>
  <section class="best-deal">
    <h1 class="header-text">Get your best deal</h1>
    <div class="mid-deal">
      <h3 class="text-1">Monthly</h3>
      <img src="../assets/toggle.svg" alt="" />
      <h3 class="text-2">Yearly</h3>
      <img src="../assets/save-img.svg" alt="" class="save-img-1" />
    </div>
    <img src="../assets/save-2.svg" alt="" class="save-img-2" />
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
        {
          id: "regular",
          type: "Regular",
          desc: "Recommended for personal pro",
          price: "$20",
          planData: [
            {
              id: "1",
              tick: require("@/assets/tick-img.svg"),
              text: "Up to 15 page each group",
            },
            {
              id: "2",
              tick: require("@/assets/tick-img.svg"),
              text: "Download page up to 20 page",
            },
            {
              id: "3",
              tick: require("@/assets/tick-img.svg"),
              text: "Up to 10 group page",
            },
            {
              id: "4",
              tick: require("@/assets/tick-img.svg"),
              text: "15 Days group page saved",
            },
          ],
        },
        {
          id: "premium",
          type: "Premium",
          desc: "Packet for Startup & Company",
          price: "$48",
          planData: [
            {
              id: "1",
              tick: require("@/assets/tick-img.svg"),
              text: "Unlimited group pages",
            },
            {
              id: "2",
              tick: require("@/assets/tick-img.svg"),
              text: "Unlimited download page",
            },
            {
              id: "3",
              tick: require("@/assets/tick-img.svg"),
              text: "Unlimited page each group",
            },
            {
              id: "4",
              tick: require("@/assets/tick-img.svg"),
              text: "Customize sorting group pages",
            },
            {
              id: "5",
              tick: require("@/assets/tick-img.svg"),
              text: "Customize group page name",
            },
            {
              id: "6",
              tick: require("@/assets/tick-img.svg"),
              text: "30 Days group page saved",
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
.cards .card {
  height: 640px;
  width: 360px;
  padding: 32px;
  margin: auto;
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
#regular {
  background: #a8ff35;
  border-radius: 16px;
}
#premium {
  background: #fafafa;
  border-radius: 16px;
}
.cards {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
}
hr {
  opacity: 0.2;
  border: 1px solid #000000;
}
.save-img-2 {
  display: none;
}
@media screen and (max-width: 600px) {
  .best-deal {
    padding: 80px 18px;
  }
  .header-text {
    font-family: "Effra";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #ffffff;
  }
  .text-1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }
  .text-2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #f5f5f5;
    opacity: 0.5;
  }
  .save-img-2 {
    display: block;
    position: relative;
    left: 220px;
  }
  .cards .card {
    width: 339px;
    height: 602px;
    padding: 30px;
    margin-bottom: 24px;
  }
  .save-img-1 {
    display: none;
  }
  #personal {
    background: #fafafa;
    border-radius: 16px;
  }
  #regular {
    background: #a8ff35;
    border-radius: 16px;
  }
  #premium {
    background: #fafafa;
    border-radius: 16px;
  }
  .cards {
    display: block;
    margin-top: 40px;
  }
}
</style>