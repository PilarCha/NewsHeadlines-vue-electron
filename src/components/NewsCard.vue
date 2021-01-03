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
    <div class="image_container">
      <img
        class="news_img"
        src="../assets/logo.png"
        :data-src="article.urlToImage"
        :alt="article.title"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "news-card",
  props: {
    article:Object,
  },
  mounted() {
    this.lazyLoadImages();
  },
  methods: {
    lazyLoadImages() {
      const images = document.querySelectorAll(".news_img");
      const options = {
        // image within 50px in the Y axis. Download it baby
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };
      const fetchImage = (url) => {
        return new Promise((resilve, reject) => {
          const image = new Image();
          image.src = url;
          image.onload = resolve;
          image.onerror = reject;
        });
      };
      const loadImage = (image) => {
        const src = image.dataset.src;
        fetchImage(src).then(() => {
          image.src = src;
        });
      };
      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if(entry.intersectionRatio > 0) {
            loadImage(entry.target);
          }
        });
      };
      //Observer for images
      const observer = new IntersentionObserver(handleIntersention, options);
      images.forEach((img) =>{
        observer.observe(img);
      });
    },
  },
};
</script>

<style lang="css">
</style>
