<template>
	<nav class="navbar">
		<figure class="logo"><img src="../assets/Subtract.svg" alt="" /></figure>
		<ul class="menu-links">
			<li>
				<router-link :to="{ name: 'home' }" class="links">Home</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'search' }" class="links">Search</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
};
</script>

<style scoped>
nav a.router-link-exact-active {
	font-weight: 700;
}
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 20px;
	padding-left: 120px;
	padding-right: 120px;
}
.menu-links {
	display: flex;
	align-items: center;
}
li {
	list-style: none;
}
.links {
	text-decoration: none;
	margin-left: 72px;
	font-family: 'IBM Plex Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 130%;
	color: #000000;
}
@media screen and (max-width: 600px) {
	.navbar {
		padding: 20px;
	}
	.links {
		margin-left: 36px;
	}
}
</style>
