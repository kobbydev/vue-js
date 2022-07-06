<template>
  <div class="home">
    <div class="form">
      <input
        type="text"
        placeholder="Search for a country..."
        v-model="searchTerm"
        class="search-input"
      />
      <select name="" id="" class="filter-input" v-model="selectTerm">
        <option value="">Filter by Region</option>
        <option :value="region" v-for="region in regions">
          {{ region }}
        </option>
      </select>
    </div>
    <div class="home_content">
      <Card :countries="filteredCountries"> </Card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "HomeView",
  components: {
    Card,
  },
  data: () => ({
    username: "",
    searchTerm: "",
    selectTerm: "",
    regions: [],
  }),
  async mounted() {
    await this.getAllCountries();
    console.log(this.countries);
    this.getRegions();
  },
  computed: {
    ...mapGetters({
      countries: "getCountries",
    }),
    filteredCountries() {
      if (this.searchTerm) {
        return this.countries.filter((country) =>
          country.name.common
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
      } else if (this.selectTerm) {
        return this.countries.filter(
          (country) => country.region === this.selectTerm
        );
      } else {
        return this.countries;
      }
    },
  },
  methods: {
    ...mapActions({
      getAllCountries: "getAllCountries",
    }),
    getRegions() {
      const regionsMap = this.countries.map((country) => country.region);
      const setRegions = [...new Set(regionsMap)];
      console.log(setRegions);
      this.regions = setRegions;
    },
  },
};
</script>

<style scoped>
.home {
  margin: 0 100px;
}
.form {
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.home_content {
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 20px;
  row-gap: 20px;
}
.search-input {
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
  width: 300px;
  height: 30px;
}
.filter-input {
  border: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 10px;
  width: 300px;
  height: 50px;
}
</style>