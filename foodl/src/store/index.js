import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		meals: [],
	},
	getters: {
		getMeal: (state) => state.meals,
	},
	mutations: {
		SET_MEAL(state, payload) {
			state.meals = payload;
		},
	},
	actions: {
		async getMeal({ commit }, search) {
			try {
				const response = await axios.get(
					`https://themealdb.com/api/json/v1/1/search.php?s=${search}`
				);
				commit('SET_MEAL', response.data.meals);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
	},
	modules: {},
});
