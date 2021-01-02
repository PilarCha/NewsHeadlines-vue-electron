<template>
  <section class="news">
    <div class="news_section">
      <h1 class="news_title">
        <a class="article_link" :href="article.url" target="_blank">
          {{article.title}}
        </a>
      </h1>
      <h3 class="news_author" v-if="article.author"> {{ article.author }} </h3>
      <p class="article_paragraph"> {{ article.description }}</p>
      <h5 class="article_published"> {{ new Date(article.publishedAt) }} </h5>
    </div>

  </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
