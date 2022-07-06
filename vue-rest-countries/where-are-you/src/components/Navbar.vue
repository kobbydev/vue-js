<template>
  <div class="navbar">
    <h3>Where in the world?</h3>
    <!-- <div class="mode">
      <h3 v-if="(isShown = true)" @click="isShown = false">Dark Mode</h3>
      <h3 v-if="isShown" @click="isShown = false">Light Mode</h3>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isShown: false,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 50px;
  padding: 10px;
}
</style>