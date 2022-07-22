<template>
	<div class="home">
		<div class="section-1">
			<figure class="logo">
				<img src="../assets/logo-2.svg" alt="" />
			</figure>
			<ul class="menu">
				<li>
					<router-link :to="{ name: 'dashboard' }">
						<img
							src="../assets/ic_round-query-stats.svg"
							alt=""
						/>Dashboard</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'inventory' }"
						><img
							src="../assets/ic_outline-inventory.svg"
							alt=""
						/>Inventory</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'login' }"
						><img
							src="../assets/material-symbols_category-rounded.svg"
							alt=""
						/>Categories</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'login' }"
						><img
							src="../assets/material-symbols_manage-accounts-rounded.svg"
							alt=""
						/>Account Settings</router-link
					>
				</li>
			</ul>
			<div class="footer">
				<router-link :to="{ name: 'login' }" class="footer-text"
					>Logout</router-link
				>
				<figure class="footer-image">
					<img src="../assets/material-symbols_logout-rounded.svg" alt="" />
				</figure>
			</div>
		</div>
		<div class="section-2">
			<router-view />
			<div class="navbar">
				<div class="profile-picture">AY</div>
				<p class="profile-name">Ammiel Yawson</p>
			</div>
			<div class="section-2-body">
				<h1 class="header-text">Overview</h1>
				<div class="cards">
					<div class="card">
						<p class="card-header">Production Types</p>
						<p class="card-body">24</p>
					</div>
					<div class="card">
						<p class="card-header">Categories</p>
						<p class="card-body">3</p>
					</div>
					<div class="card">
						<p class="card-header">Sales - July</p>
						<p class="card-body">¢2400</p>
					</div>
					<div class="card">
						<p class="card-header">Inventory Value</p>
						<p class="card-body">¢12,620</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeView',
	components: {},
};
</script>

<style scoped>
.home {
	display: flex;
	height: 100vh;
}
.section-1 {
	background: #151923;
	width: 20%;
	padding: 25px 32px;
	display: flex;
	flex-direction: column;
	position: relative;
}
.section-2 {
	width: 80%;
	background: rgba(243, 243, 243, 1);
}
li {
	list-style: none;
	/* margin-bottom: 21px;
	padding: 16px 25px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	color: #ffffff;
	display: flex;
	align-items: center; */
}
a {
	margin-bottom: 21px;
	padding: 16px 25px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	color: #ffffff;
	display: flex;
	align-items: center;
	text-decoration: none;
}
li img {
	margin-right: 17px;
}
a.router-link-exact-active {
	background: #2656d1;
	border-radius: 8px;
	width: 100%;
}
.logo {
	margin-bottom: 104px;
}
.navbar {
	background: #ffffff;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.02);
	padding: 20px 48px;
	width: 100%;
	display: flex;
	justify-content: end;
	align-items: center;
}
.profile-picture {
	background: #b2bdfa;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	margin-right: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.profile-name {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	color: #000000;
}
.header-text {
	font-family: 'Overpass';
	font-style: normal;
	font-weight: 700;
	font-size: 36px;
	line-height: 150%;
	letter-spacing: -0.04em;
	color: #1d2128;
	margin-bottom: 8px;
}
.section-2-body {
	padding: 32px 48px;
	width: 100%;
}
.cards {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.card {
	background: #ffffff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
	border-radius: 8px;
	width: 244px;
	padding: 16px 32px;
}
.card-header {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	margin-bottom: 6px;
	color: #595f69;
}
.card-body {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 150%;
	color: #1d2128;
}
.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: auto;
	/* position: absolute;
	bottom: 0; */
}
.footer-text {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	color: #ffffff;
	text-align: center;
}
</style>
