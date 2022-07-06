<template>
  <div class="navbar">
    <router-link to="/">Where in the world?</router-link>
    <!-- <div class="mode">
      <h3 v-if="(isShown = true)" @click="isShown = false">Dark Mode</h3>
      <h3 v-if="isShown" @click="isShown = false">Light Mode</h3>
    </div> -->
    <!-- <button>Dark Mode</button> -->
  </div>
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  padding: 20px;
}
a {
  text-decoration: none;
  color: var(--text-color);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 700;
  font-size: 28px;
}
:root {
  --primary-color: #0072a3;
  --text-color: #333333;
  --bg-color: hsl(0, 0%, 98%);
  --component-bg-color: #ffffff;
  --new-color: grey;
  --search-icon: grey;
  --boxes-shadow: -2px -1px 5px 3px rgba(232, 227, 227, 0.4);
  --slight-shadow: -2px -1px 5px 3px rgba(232, 227, 227, 0.4);
  --box-shadow: -2px -1px 5px 4px rgba(171, 160, 160, 0.4);
}
:root[data-theme="theme-dark"] {
  --primary-color: #49afd9;

  --text-color: hsl(0, 0%, 100%);
  --bg-color: hsl(207, 26%, 17%);
  --component-bg-color: hsl(209, 23%, 22%);
  --box-shadow: 0px;
  --search-icon: hsl(0, 0%, 100%);
  --new-color: hsl(0, 3%, 79%);
  --boxes-shadow: 2px 2px 5px 2px rgba(12, 12, 12, 0.2);
  --slight-shadow: -3px 3px 5px 0px rgba(15, 11, 11, 0.2);
}
.card-body p {
}
</style>