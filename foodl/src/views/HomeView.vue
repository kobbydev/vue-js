<template>
	<div class="home">
		<Navbar />
		<main class="main">
			<div class="main-body">
				<div class="body-1">
					<h1 class="main-text">
						Find recipes for the ingredients you have on hand
					</h1>
					<button @click="this.$router.push({ name: 'search' })">
						Search Now
					</button>
				</div>
				<div class="body-2">
					<figure class="main-image">
						<img src="../assets/plate.svg" alt="" />
					</figure>
					<div class="black-box"></div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
	name: 'HomeView',
	components: {
		Navbar,
	},
};
</script>

<style scoped>
.home {
	background: #ff9f59;
	box-shadow: inset 0px -24px 32px -28px rgba(192, 86, 10, 0.4);
	background-image: url('../assets/noise.svg');
	position: absolute;
	right: 0;
	left: 0;
	top: 0;
	bottom: 0;
	z-index: 0;
}
main {
	margin-top: 94px;
	padding-left: 120px;
	padding-right: 120px;
	/* padding-bottom: 223px; */
}
.main-text {
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 48px;
	line-height: 130%;
	letter-spacing: -0.04em;
	color: #000000;
	width: 442px;
}
button {
	background: #000000;
	box-shadow: 0px 16px 40px rgba(192, 86, 10, 0.4);
	border-radius: 8px;
	border: none;
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 130%;
	letter-spacing: -0.04em;
	color: #ffffff;
	padding: 20px 60px;
	margin-top: 32px;
	cursor: pointer;
}
.main-body {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.black-box {
	position: absolute;
	width: 392px;
	height: 151px;
	right: 0px;
	top: 378px;
	background: #000000;
	z-index: -1;
}
@media screen and (max-width: 600px) {
	.home {
		background: #ff9f59;
		box-shadow: inset 0px -24px 32px -28px rgba(192, 86, 10, 0.4);
		background-image: url('../assets/noise.svg');
		position: static;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
		z-index: 0;
	}
	main {
		padding-left: 20px;
		padding-right: 20px;
		margin-top: 46px;
	}
	.main-body {
		display: block;
	}
	.black-box {
		display: none;
	}
	button {
		font-size: 12px;
		line-height: 65%;
		padding: 20px 60px;
		margin-top: 22px;
		padding: 10px 30px;
	}
	.main-text {
		font-size: 24px;
		line-height: 130%;
		width: 221px;
	}
	.main-image img {
		width: 100%;
		/* height: 100%; */
	}
	.main-image {
		margin-top: 50px;
	}
}
</style>
