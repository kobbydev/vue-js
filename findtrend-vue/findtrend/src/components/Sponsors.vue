<template>
  <section class="sponsors">
    <h1 class="header-text-2">Findtrend make +1000 Startup grow</h1>
    <div class="sponsor-container">
      <Container
        v-for="container in sponsorContainerData"
        :key="container.id"
        :cId="container.id"
        :gcId="container.gcid"
        :containerImage="container.scImage"
        :classId="container.iid"
      />
    </div>
  </section>
</template>

<script>
import Container from "@/components/Containers.vue";
export default {
  name: "Sponsors",
  components: { Container },
  data() {
    return {
      containerStyles: {
        position: "relative",
        backgroundColor: "#F5F5F5",
        width: "266px",
        height: "120px",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
      },
      sponsorContainerData: [
        {
          id: "microsoft",
          scImage: require("@/assets/microsoft.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "allianz",
          scImage: require("@/assets/allianz.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "upwork",
          scImage: require("@/assets/upwork.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "volvo",
          scImage: require("@/assets/volvo.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "grab",
          scImage: require("@/assets/grab.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "verizon",
          scImage: require("@/assets/verizon.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "coinbase",
          scImage: require("@/assets/coinbase.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "expedia",
          scImage: require("@/assets/expedia.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "airtable",
          scImage: require("@/assets/airtable.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "magneto",
          scImage: require("@/assets/magneto.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "carrera",
          scImage: require("@/assets/carrera.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "bonanza",
          scImage: require("@/assets/bonanza.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "wetransfer",
          scImage: require("@/assets/weransfer.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "suzuki",
          scImage: require("@/assets/suzuki.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "algolia",
          scImage: require("@/assets/algolia.svg"),
          iid: "mt",
          gcid: false,
        },
        {
          id: "heineken",
          scImage: require("@/assets/heineken.svg"),
          iid: "mt",
          gcid: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
.sponsors {
  padding: 140px;
  /* background: #e5e5e5; */
}

.header-text-2 {
  font-family: "Effra";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 76px;
  text-align: center;
  color: #000000;
  margin-bottom: 80px;
}
.sponsor-container {
  display: grid;
  column-gap: 32px;
  row-gap: 32px;
  grid-template-columns: auto auto auto auto;
}
.sponsor-container .container {
  position: relative;
  background-color: #f5f5f5;
  width: 266px;
  height: 120px;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
@media screen and (max-width: 600px) {
  .sponsor-container .container {
    position: relative;
    background-color: #f5f5f5;
    width: 162px;
    height: 74px;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }
  .sponsors {
    padding: 80px 20px;
  }
  .header-text-2 {
    font-family: "Effra";
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #000000;
    margin-bottom: 32px;
  }
  .sponsor-container {
    display: grid;
    column-gap: 15px;
    row-gap: 14px;
    grid-template-columns: auto auto;
    margin: auto;
  }
}
</style>