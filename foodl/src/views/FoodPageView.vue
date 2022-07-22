<template>
	<div class="food-page">
		<header class="header">
			<div class="hero-container">
				<Navbar />
				<div class="hero-content">
					<figure class="food-image">
						<img :src="meal?.strMealThumb" alt="" />
					</figure>
					<div class="food-details">
						<h3 class="food-name">{{ meal?.strMeal }}</h3>
						<div class="detail-boxes">
							<div class="detail-box">
								<figure class="detail-box-header">
									<img src="../assets/category.svg" alt="" />
									<p>CATEGORY</p>
								</figure>
								<p class="detail-box-p">{{ meal?.strCategory }}</p>
							</div>
							<div class="detail-box">
								<figure class="detail-box-header">
									<img src="../assets/ci_location.svg" alt="" />
									<p>AREA</p>
								</figure>
								<p class="detail-box-p">{{ meal?.strArea }}</p>
							</div>
							<div class="detail-box">
								<figure class="detail-box-header">
									<img src="../assets/tag.svg" alt="" />
									<p>TAGS</p>
								</figure>
								<p class="detail-box-p">{{ meal?.strTags }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
		<main class="main">
			<div class="ingredients">
				<h3>Ingredients</h3>
				<div class="ingredient-cards">
					<div class="ingredient" v-for="(value, index) in newOb" :key="index">
						<p>
							{{ value.ingre }}
							<span class="measurement">{{ value.measure }}</span>
						</p>
					</div>
				</div>
			</div>
			<div class="instructions">
				<h3>Instructions</h3>
				<p
					class="instruction"
					v-for="(instruction, index) in instructions"
					:key="index"
				>
					{{ index + 1 }}. {{ instruction }} <br />
					<br />
				</p>
			</div>
		</main>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'FoodPage',
	components: { Navbar },
	props: ['name'],
	data() {
		return {
			newArr: [],
			hover: false,
		};
	},
	async created() {
		await this.getMeal(this.name);
		console.log(this.meals);
		console.log(this.meal);
		console.log(this.ingredients);
		console.log(this.measurements);
		console.log(this.newOb);
		console.log(this.instructions);
	},
	computed: {
		...mapGetters({
			meals: 'getMeal',
		}),
		meal() {
			return this.meals[0];
		},
		ingredients() {
			const filteredIngredients = Object.keys(this.meal)
				.filter((key) => key.includes('strIngre'))
				.reduce((obj, key) => {
					return Object.assign(obj, {
						[key]: this.meal[key],
					});
				}, {});
			const newIngredients = Object.values(filteredIngredients).filter(
				(ing) => {
					if (ing !== '') {
						return ing;
					}
				}
			);
			return newIngredients;
		},
		measurements() {
			const filteredMeasurements = Object.keys(this.meal)
				.filter((key) => key.includes('strMeas'))
				.reduce((obj, key) => {
					return Object.assign(obj, {
						[key]: this.meal[key],
					});
				}, {});
			const newMeasurements = Object.values(filteredMeasurements).filter(
				(mea) => {
					if (mea !== ' ') {
						return mea;
					}
				}
			);
			return newMeasurements;
		},
		newOb() {
			const newArr = [];
			this.ingredients.forEach((ing, index) => {
				newArr.push({
					ingre: ing,
					measure: this.measurements[index],
				});
			});
			return newArr;
		},
		instructions() {
			const instruction = this.meal.strInstructions.split('\r\n');
			return instruction.filter((data) => {
				if (data !== '') {
					return data;
				}
			});
		},
	},
	methods: {
		...mapActions({
			getMeal: 'getMeal',
		}),
	},
};
</script>

<style scoped>
.hero-container {
	background: #ff9f59;
	box-shadow: inset 0px -24px 32px -28px rgba(192, 86, 10, 0.4);
	background-image: url('../assets/noise.svg');
	display: flex;
	flex-direction: column;
}
.hero-content {
	margin: auto;
	margin-top: 68px;
	display: flex;
	align-items: center;
}
.detail-boxes {
	display: flex;
}
.detail-box {
	background: rgba(255, 255, 255, 0.3);
	box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.05),
		inset 1px 1px 2px rgba(255, 255, 255, 0.37);
	backdrop-filter: blur(94px);
	border-radius: 4px;
	padding: 14px 26px;
	margin-right: 16px;
}
.detail-box-header {
	display: flex;
	align-items: center;
	margin-bottom: 8px;
}
.detail-box-header p {
	margin-left: 6px;
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 10px;
	line-height: 100%;
	letter-spacing: 0.09em;
	text-transform: uppercase;
	color: #954f1d;
}
.detail-box-p {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 100%;
	letter-spacing: -0.02em;
	color: #000000;
}
.food-name {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 100%;
	letter-spacing: -0.02em;
	color: #000000;
	margin-bottom: 24px;
}
.food-image {
	position: relative;
	top: 40px;
	margin-right: 40px;
}
.food-image img {
	width: 260px;
	height: 241px;
	border-radius: 8px;
}
.food-details {
	/* margin-top: 89px; */
}
.main {
	/* margin: 0 425px; */
	margin-top: 168px;
	display: flex;
	flex-direction: column;
}
.ingredients {
	background: rgba(255, 255, 255, 0.6);
	box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1),
		inset 0px 4px 2px rgba(255, 255, 255, 0.65);
	backdrop-filter: blur(24px);
	border-radius: 10px;
	margin: auto;
	padding: 27px 32px;
	width: 590px;
}
.instructions {
	margin: auto;
	padding: 27px 32px;
	width: 590px;
}
.instruction {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 165%;
	text-transform: capitalize;
	color: #000000;
}
.ingredient-cards {
	display: flex;
	flex-wrap: wrap;
}
.ingredients h3,
.instructions h3 {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 100%;
	letter-spacing: -0.02em;
	color: #000000;
	margin-bottom: 32px;
}
.ingredient {
	border: 1px solid #919191;
	border-radius: 30px;
	padding: 8px 16px;
	margin-right: 26px;
	margin-bottom: 26px;
	cursor: pointer;
}
.ingredient:hover {
	background: #ff9f59;
	border: 1px solid #ff9f59;
	box-shadow: 0px 4px 14px rgba(250, 139, 58, 0.4),
		inset 1px 2px 2px rgba(255, 255, 255, 0.29);
	border-radius: 30px;
	color: #000000;
}
.ihover {
	color: #000000;
}
.ingredient p {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 100%;
	text-transform: capitalize;
	color: #919191;
}
.measurement {
	background: #aaaaaa;
	border-radius: 30px;
	padding: 2px 8px;
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 105%;
	text-transform: capitalize;
	color: #ffffff;
}
.instructions {
	margin: auto;
	margin-top: 72px;
}

@media screen and (max-width: 600px) {
	.hero-content {
		display: block;
		margin: auto;
		margin: 0 20px;
	}
	.detail-box {
		padding: 7px 13px;
		margin-right: 8px;
	}
	.detail-box-p {
		font-size: 16px;
	}
	.food-name {
		font-size: 20px;
	}
	.ingredients h3,
	.instructions h3 {
		font-size: 26px;
	}
	.ingredient {
		padding: 4px 8px;
	}
	.ingredient p {
		font-size: 8px;
	}
	.measurement {
		font-size: 6px;
	}
	.food-details {
		margin-top: 120px;
	}
	.instructions,
	.ingredients {
		width: 295px;
	}
	.food-image {
		display: flex;
		flex-direction: column;
	}
	.food-image img {
		margin: auto;
	}
}
</style>
