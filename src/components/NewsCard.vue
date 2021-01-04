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
        return new Promise((resolve, reject) => {
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
      const observer = new IntersectionObserver(handleIntersection, options);
      images.forEach((img) =>{
        observer.observe(img);
      });
    },
  },
};
</script>

<style>
  .news {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 550px;
    box-shadow: 2px 1px 7px 1px #eee;
    padding: 20px 5px;
    box-sizing: border-box;
    margin: 15px 5px;
    border-radius: 4px;
  }
  .news_section {
    width: 100%;
    max-width: 350px;
    margin-right: 5px;
  }
  .news_title {
    font-size: 15px;
    text-align: left;
    font-weight: normal;
  }
  .news_author {
    font-size: 14px;
    text-align: left;
    font-weight: normal;
  }
  .article_published {
    text-align: left;
  }
  .image_container {
    width: 100%;
    max-width: 180px;
    max-height: 180px;
  }
  .news_img {
    transition: max_width 300ms cubic-bezier(0.4, 0, 1, 1),
      max-height 300ms cubic-bezier(0.4, 0, 1, 1);
    max-width: 150px;
    max-height: 150px;
  }
  .new_img:hover {
    max-width: 180px;
    max-height: 180px;
  }
  .article_link {
    text-decoration: none;
    color: inherit;
  }
</style>
