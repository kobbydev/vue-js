<template>
	<div
		class="card"
		@click="this.$router.push({ name: 'food', params: { name: meal.strMeal } })"
		v-for="meal in meals"
		:key="meal.id"
	>
		<figure class="card-image">
			<img :src="meal.strMealThumb" alt="" />
		</figure>
		<p class="food-name">{{ meal.strMeal }}</p>
	</div>
</template>

<script>
export default {
	name: 'Cards',
	props: {
		meals: {
			type: Array,
		},
	},
};
</script>

<style scoped>
.card {
	padding: 20px 28px;
	background: #ffffff;
	box-shadow: 0px 24px 64px -16px rgba(0, 0, 0, 0.1);
	border-radius: 16px;
	width: 285px;
	position: relative;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	margin-bottom: 30px;
}
.card img {
	width: 248px;
	height: 229px;
}
.card-image {
	position: relative;
	top: -26px;
	margin: auto;
}
.food-name {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 100%;
	color: #000000;
}

@media screen and (max-width: 600px) {
	.card {
		margin: auto;
		margin-bottom: 20px;
	}
}
</style>
