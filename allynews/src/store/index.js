import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state: {
    globalNews: [],
    categoryNews: [],
  },
  getters:{
    getGlobalNews: (state) => state.globalNews,
    getCategoryNews: (state) => state.categoryNews,
  },
  mutations: {
    SET_GLOBALNEWS(state, payload){
      state.globalNews = payload;
    },
    SET_CATEGORYNEWS(state,payload){
      state.categoryNews = payload
    }
  },
  actions: {
    async getAllGlobalNews({commit}){
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=global&from=2022-07-06&apiKey=cf4aa93039fa49deaf9925f456bd024e");
        commit("SET_GLOBALNEWS", response.data.articles);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    async getCategoryNews({commit}, category){
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=cf4aa93039fa49deaf9925f456bd024e`);
        commit("SET_CATEGORYNEWS", response.data.articles);
        return response;
      } catch (error) {
        console.log(error);
      }
    }
  },

});

export default store;
