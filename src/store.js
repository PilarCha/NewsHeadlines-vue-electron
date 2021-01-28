import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    countries:[{
      name: "United States of America",
      value: "us",
    },
    {
      name: "Nigeria",
      value: "ng",
    },
    {
      name: "Argentina",
      value: "ar",
    },
    {
      name: "Canada",
      value: "ca",
    },
    {
      name: "Sounth Africa",
      value: "za",
    },
  ],
    categories: [
      "health",
      "science",
      "sports",
      "technology",
    ],
  },
  mutations: {},
  actions: {
    async getTopNews(context, country) {
      let res = await axios({
        url: `/top-headlines?country=${country}`,
        method: "GET",
      });
    },
  },
});
export default store;

console.log(res);
