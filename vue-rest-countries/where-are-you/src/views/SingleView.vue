<template>
  <div class="container">
    <button @click="$router.go(-1)">
      <i class="uil uil-arrow-left"></i>Back
    </button>
    <p class="hname">{{ singleCountry.name.common }}</p>
    <div class="single-card">
      <img :src="singleCountry.flags.png" alt="" />
      <div class="card-info">
        <p>Population: {{ singleCountry.population }}</p>
        <p>Region: {{ singleCountry.region }}</p>
        <p class="card-text-capital" v-if="singleCountry.capital">
          Capital:
          <span v-for="(capital, index) in singleCountry.capital" :key="index"
            >{{ capital }}, {{}}
          </span>
        </p>
        <p class="card-text-currency" v-if="singleCountry.currencies">
          Currency:
          <span
            v-for="(currency, index) in singleCountry.currencies"
            :key="index"
            >{{ currency.name }}</span
          >
        </p>
        <p class="card-text-languages" v-if="singleCountry.languages">
          Language:
          <span
            v-for="(language, index) in singleCountry.languages"
            :key="index"
            >{{ language }}, {{}}
          </span>
        </p>
        <p class="card-text-nativename" v-if="singleCountry.name.nativeName">
          Nativename:
          <span
            v-for="(nativename, index) in singleCountry.name.nativeName"
            :key="index"
            >{{ nativename.official }}, {{}}
          </span>
        </p>
        <p>Sub-region: {{ singleCountry.subregion }}</p>
        <p class="card-text-nativename" v-if="singleCountry.borders">
          Border Countries:
          <span v-for="(border, index) in singleCountry.borders" :key="index"
            >{{ border }}, {{}}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "singleView",
  data: () => ({
    bBorder: "",
  }),
  created() {
    const countryName = this.$route.params.name;
    this.getSingleCountry(countryName);
    // console.log(this.singleCountry);
    // const border = this.singleCountry.borders;
    this.singleCountry.border = this.bBorder;
    console.log(this.bBorder);
  },
  computed: {
    ...mapGetters({
      singleCountry: "getSingleCountry",
    }),
  },
  methods: {
    ...mapActions({
      getSingleCountry: "getSingleCountry",
    }),
  },
};
</script>

<style scoped>
.single-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin: auto;
}
.hname {
  text-align: center;
}
button {
  border: none;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  cursor: pointer;
}
</style>