<template>
  <div
    class="card"
    v-for="country in countries"
    :key="country.name.common"
    @click="
      this.$router.push({
        name: 'SingleCountry',
        params: { name: country.name.common },
      })
    "
  >
    <img :src="country.flags.png" alt="" />
    <div class="card-body">
      <p class="bname">{{ country.name.common }}</p>
      <p class="card-text-capital" v-if="country.capital">
        Capital:
        <span v-for="(capital, index) in country.capital" :key="index">{{
          capital
        }}</span>
      </p>
      <p>Population: {{ country.population }}</p>
      <p>Region: {{ country.region }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    countries: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid white;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 79%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
img {
  width: 100%;
  height: 200px;
}
.bname {
  font-weight: 700;
}
.card-body {
  margin: 0 20px;
}
.card-body p {
  color: var(--primary-color);
}
</style>