import axios from 'axios';
// import { JSDOM } from 'jsdom';
// import { Readability } from '@mozilla/readability';
import { createStore } from 'vuex'

const store = createStore({
  state: {
    globalNews: [],
    categoryNews: [],
    newNews: [],
    // fullContent: [],
  },
  getters:{
    getGlobalNews: (state) => state.globalNews,
    getCategoryNews: (state) => state.categoryNews,
    getNewNews: (state) => state.newNews,
    // getFullContent: (state) => state.fullContent,
  },
  mutations: {
    SET_GLOBALNEWS(state, payload){
      state.globalNews = payload;
    },
    SET_CATEGORYNEWS(state,payload){
      state.categoryNews = payload
    },
    SET_NEWNEWS(state,payload){
      state.newNews = payload
    },
    // SET_FULLCONTENT(state,payload){
    //   state.fullContent = payload
    // },
  },
  actions: {
    async getAllGlobalNews({commit}){
      try {
        const response = await axios.get("https://newsapi.org/v2/everything?q=global&apiKey=cf4aa93039fa49deaf9925f456bd024e");
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
    },
    async getNewNews({commit}, title){
      try {
        const response = await axios.get(`https://newsapi.org/v2/everything?q="${title}"&apiKey=cf4aa93039fa49deaf9925f456bd024e`);
        commit("SET_NEWNEWS", response.data.articles);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
//     getFullContent(){
//       try {
//         let url = "https://newsapi.org/v2/everything?q=global&from=2022-07-06&apiKey=cf4aa93039fa49deaf9925f456bd024e";
//         axios.get(url).then(function(r1) {
//   let firstResult = r1.data.articles[0];
//   axios.get(firstResult.url).then(function(r2) {
//     let dom = new JSDOM(r2.data, {
//       url: firstResult.url
//     });
//     let article = new Readability(dom.window.document).parse();
//     console.log(article.textContent);
//   })
// })
//         commit("SET_FULLCONTENT", response.data);
//         return response;
//       } catch (error) {
//         console.log(error);
//       }
//     }
  },

});

export default store;
