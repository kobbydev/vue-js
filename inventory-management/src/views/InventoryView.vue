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
			<div class="navbar">
				<div class="profile-picture">AY</div>
				<p class="profile-name">Ammiel Yawson</p>
			</div>
			<div class="section-2-body">
				<h1 class="header-text">In-stock</h1>
				<div class="container">
					<div class="container-header">
						<input
							type="text"
							class="search-input"
							id="search-input"
							placeholder="Search product by name"
						/>
						<div class="btn-img">
							<button class="add-btn">Add Product</button>
							<img
								src="../assets/simple-line-icons_options-vertical.svg"
								alt=""
							/>
						</div>
					</div>
					<div class="container-body">
						<table>
							<tr class="row-1">
								<td class="col-1"><input type="checkbox" /></td>
								<td class="col-2">Name</td>
								<td class="col-3">Quantity</td>
								<td class="col-4">Unit Price</td>
								<td class="col-5">Status</td>
								<td class="col-6">Category</td>
							</tr>
							<tr class="row-2">
								<td class="col-1"><input type="checkbox" /></td>
								<td class="col-2">Milo Sachet</td>
								<td class="col-3">32</td>
								<td class="col-4">2</td>
								<td class="col-5">In stock</td>
								<td class="col-6">Beverage</td>
							</tr>
							<tr class="row-3">
								<td class="col-1"><input type="checkbox" /></td>
								<td class="col-2">Ideal Milk - 160g</td>
								<td class="col-3">0</td>
								<td class="col-4">5.5</td>
								<td class="col-5">Out of stock</td>
								<td class="col-6">Beverage</td>
							</tr>
							<tr class="row-4">
								<td class="col-1"><input type="checkbox" /></td>
								<td class="col-2">Kleesoft washing powder</td>
								<td class="col-3">3</td>
								<td class="col-4">2.5</td>
								<td class="col-5">Reorder level</td>
								<td class="col-6">Detergents</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
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
}
.container {
	background: #ffffff;
	box-shadow: 0px 4px 8px -4px rgba(0, 0, 0, 0.05);
	border-radius: 4px;
	padding: 57px 32px;
}

.container-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.add-btn {
	background: #2656d1;
	border-radius: 8px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 150%;
	color: #ffffff;
	padding: 8px 24px;
	border: none;
	margin-right: 27px;
	cursor: pointer;
}
.search-input {
	background: #f4f4f4;
	border-radius: 8px;
	padding: 10px 20px;
	border: none;
	outline: none;
	width: 274px;
}
.search-input::placeholder {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 150%;
	color: #a7aebb;
}
table {
	border-collapse: collapse;
	margin-top: 22px;
	width: 100%;
}
tr {
	border-bottom: 1px solid #f0f0f0;
}
.row-1 td {
	font-weight: 700;
	font-size: 18px;
}
td {
	padding: 16px 24px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 120%;
	color: #000000;
}
.row-2 .col-5 {
	color: #469f27;
	padding: 6px;
	background: #e5fedc;
	/* border: 1px solid #d4fdc6; */
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px auto;
	width: 89px;
}
.row-3 .col-5 {
	color: #9f2727;
	padding: 6px;
	background: #fedcdc;
	/* border: 1px solid #d4fdc6; */
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px auto;
}
.row-4 .col-5 {
	color: #9f8527;
	padding: 6px;
	background: #fef6dc;
	/* border: 1px solid #d4fdc6; */
	border-radius: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px auto;
}
.col-1 {
	width: 10%;
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
