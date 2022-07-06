<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/polygon.svg" alt="" />
    </div>
    <ul class="menu-links">
      <li><router-link to="/" class="links">Global</router-link></li>
      <li>
        <router-link
          :to="{ name: 'technology', params: { name: 'technology' } }"
          class="links"
          >Technology</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'business', params: { name: 'business' } }"
          class="links"
          >Business</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'health', params: { name: 'health' } }"
          class="links"
          >Health</router-link
        >
      </li>
    </ul>
    <div class="mmenu">
      <a href="#" class="links">Menu</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  background: #900f7b;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-links {
  list-style: none;
  display: flex;
}
.links {
  text-decoration: none;
  margin-left: 56px;
  font-family: "Public Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #000000;
}
</style>