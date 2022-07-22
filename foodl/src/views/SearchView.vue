<template>
	<div class="search-view">
		<header class="header">
			<div class="hero-container">
				<Navbar />
				<div class="hero-content">
					<h1 class="hero-text">What ingredients do you have?</h1>
					<div class="form">
						<label for="search"><i class="uil uil-search"></i></label>
						<input type="text" v-model="search" />
					</div>
				</div>
			</div>
			<figure class="bgimage">
				<img src="../assets/Union.svg" alt="" />
			</figure>
		</header>
		<main class="main">
			<div class="cards">
				<Cards :meals="meals" />
			</div>
		</main>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Cards from '@/components/Cards.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'SearchVIew',
	components: { Navbar, Cards },
	data() {
		return {
			search: '',
		};
	},
	async created() {
		await this.getMeal(this.search);
		console.log(this.meals);
		// console.log(this.meals[0].strMeal);
	},
	async updated() {
		await this.getMeal(this.search);
	},
	computed: {
		...mapGetters({
			meals: 'getMeal',
		}),
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
}
.hero-content {
	margin-top: 66px;
	display: flex;
	flex-direction: column;
}
.hero-text {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 100%;
	letter-spacing: -0.04em;
	color: #000000;
	margin: auto;
}
.form {
	margin: auto;
	margin-bottom: 78px;
	padding: 16px 24px;
	width: 590px;
	margin-top: 24px;
	background: #fbfbfb;
	box-shadow: 0px 32px 40px -16px rgba(182, 84, 14, 0.4);
	border-radius: 16px;
}
.cards {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
input {
	margin-left: 26px;
	border: none;
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 100%;
	color: #000000;
	outline: none;
	width: 85%;
}
.main {
	margin-top: 104px;
	padding: 0 120px;
}
.bgimage {
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;
}

@media screen and (max-width: 600px) {
	.hero-content {
		margin: 0 20px;
		margin-top: 80px;
	}
	.hero-text {
		font-family: 'IBM Plex Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
		letter-spacing: -0.04em;
		color: #000000;
	}
	.form {
		width: 100%;
		padding: 8px 12px;
	}
	.cards {
		display: flex;
		flex-direction: column;
	}
	.card {
		margin: auto;
	}
	.main {
		padding: 0 20px;
	}
	.bgimage {
		z-index: -1;
	}
}
</style>
