<template>
  <section class = "home">
    <h1>Welcome to News App</h1>
    <h4>Displaying Top News from {{ countryInfo.name }}</h4>
    <div class="articles_div" v-if = "articles">
      <news-card
        v-for="(article,idx) in articles"
        :key="idx"
        :article="article"
      ></news-card>
    </div>
  </section>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import NewsCard from "../components/NewsCard";

export default {
  data() {
    return {
      articles: "",
      countryInfo: "",
    };
  },
  components: {
    NewsCard,
  },
  // used to fetch data asap
  mounted() {    
    this.fetchTopNews();
  },
  computed: {
    ...mapState(["countries"]),
  },
  methods: {
    ...mapActions(["getTopNews"]),
    async fetchTopNews() {
      let countriesLength = this.countries.length;
      let countryIdx = Math.floor(
        Math.random() * (countriesLength - 1) + 1
      );
      this.countryInfor = this.countries[countryIdx];
      let { data } = await this.getTopNews(
        this.countries[countryIdx].value
      );
      this.articles = data.articles;
    },
  },
};
</script>

<style lang="css">
  .articles_div {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
