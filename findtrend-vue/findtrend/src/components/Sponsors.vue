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
        :style="containerStyles"
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
          gcid: false,
        },
        {
          id: "allianz",
          scImage: require("@/assets/allianz.svg"),
          gcid: false,
        },
        {
          id: "upwork",
          scImage: require("@/assets/upwork.svg"),
          gcid: false,
        },
        {
          id: "volvo",
          scImage: require("@/assets/volvo.svg"),
          gcid: false,
        },
        {
          id: "grab",
          scImage: require("@/assets/grab.svg"),
          gcid: false,
        },
        {
          id: "verizon",
          scImage: require("@/assets/verizon.svg"),
          gcid: false,
        },
        {
          id: "coinbase",
          scImage: require("@/assets/coinbase.svg"),
          gcid: false,
        },
        {
          id: "expedia",
          scImage: require("@/assets/expedia.svg"),
          gcid: false,
        },
        {
          id: "airtable",
          scImage: require("@/assets/airtable.svg"),
          gcid: false,
        },
        {
          id: "magneto",
          scImage: require("@/assets/magneto.svg"),
          gcid: false,
        },
        {
          id: "carrera",
          scImage: require("@/assets/carrera.svg"),
          gcid: false,
        },
        {
          id: "bonanza",
          scImage: require("@/assets/bonanza.svg"),
          gcid: false,
        },
        {
          id: "wetransfer",
          scImage: require("@/assets/weransfer.svg"),
          gcid: false,
        },
        {
          id: "suzuki",
          scImage: require("@/assets/suzuki.svg"),
          gcid: false,
        },
        {
          id: "algolia",
          scImage: require("@/assets/algolia.svg"),
          gcid: false,
        },
        {
          id: "heineken",
          scImage: require("@/assets/heineken.svg"),
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
span {
  color: #adadad;
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
</style>