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

<style lang="css" scoped>
</style>
