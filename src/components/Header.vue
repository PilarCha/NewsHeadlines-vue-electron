<template>
  <header class = 'header'>
    <div class="logo">
      <div class="logo_container">
        <img src="../assets/logo.png" alt="New app Logo" class= "logo_image">
      </div>
      <h1>News App</h1>
    </div>
    <nav class = "nav">
      <h4 class = "nav_link">
        <router-link to="/home">Home</router-link>
      </h4>
      <h4 class = "nav_link">
        <router-link to="/top-news">Top News</router-link>
      </h4>
      <h4 class = "nav_link">
        <router-link to="/categories">News By Category</router-link>
      </h4>
    </nav>
  </header>
</template>

<script>
  export default {
    name:"app-header",
  }
</script>

<style lang="css">
  .header {
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  .logo {
    display:flex;
    flex-wrap:nowrap;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  }
  .logo_container {
    width:50px;
    height:50px;
  }
  .logo_image {
    max-width: 100%;
    max-height: 100%;
  }
  .nav {
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    justify-content: space-between;
  }
</style>
