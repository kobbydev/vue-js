<template>
	<div class="login">
		<div class="login-section">
			<figure class="logo">
				<img src="../assets/logo.svg" alt="" />
			</figure>
			<h1 class="header-text">Login</h1>
			<hr />
			<p class="signin-text">
				Sign in to start managing your inventory like a boss.
			</p>
			<form @submit.prevent="submit">
				<label for="email">Email</label><br />
				<input type="email" id="email" name="email" v-model="loginForm.email" />
				<br />
				<label for="password">Password</label><br />
				<input
					type="password"
					id="password"
					name="password"
					v-model="loginForm.password"
				/>
				<br />
				<input type="submit" value="Login" class="submit-btn" />
			</form>
			<p class="signup-option">
				Don’t have an account?
				<span @click="this.$router.push({ name: 'signup' })">Sign up</span>
			</p>
		</div>
		<div class="image-section">
			<figure>
				<img src="../assets/login-image.svg" alt="" />
			</figure>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Login',
	data() {
		return {
			loginForm: {
				email: '',
				password: '',
			},
		};
	},
	methods: {
		submit() {
			axios
				.post(
					'https://enyata-inventory.herokuapp.com/api/v1/auth/login',
					this.loginForm
				)
				.then((response) => {
					alert(response.data.message);
					localStorage.setItem('userLogged', response.data.data.token);
					this.$router.push({ name: 'dashboard' });
				})
				.catch((error) => {
					alert('email or password wrong');
					console.log(error);
				});
		},
	},
};
</script>

<style scoped>
.login {
	display: flex;
	height: 100vh;
	width: 100%;
}
.image-section {
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(135, 58, 182, 1);
	width: 75%;
}
.image-section img {
	margin: auto;
}
.login-section {
	width: calc(25% - 112px);
	margin: 32px auto;
}
.logo {
	margin-bottom: 88px;
}
.header-text {
	font-family: 'Overpass';
	font-style: normal;
	font-weight: 800;
	font-size: 40px;
	line-height: 130%;
	letter-spacing: -0.06em;
	color: #1d2128;
}
.signin-text {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 150%;
	color: #747880;
	margin-bottom: 48px;
}
hr {
	background: #873ab6;
	width: 24px;
	height: 5px;
	margin-bottom: 22px;
}
label {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 150%;
	color: #3a3f46;
	margin-bottom: 2px;
}
#email,
#password {
	background: #ffffff;
	border: 1px solid #ced1d9;
	border-radius: 4px;
	outline: none;
	height: 48px;
	width: 100%;
	margin-bottom: 16px;
	padding: 10px;
}
.submit-btn {
	padding: 14px;
	width: 100%;
	background: #873ab6;
	box-shadow: 0px 16px 24px rgba(154, 38, 209, 0.2);
	border-radius: 8px;
	border: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	color: #ffffff;
	margin-bottom: 16px;
}
.signup-option {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	color: #000000;
	text-align: center;
}
span {
	color: rgba(38, 86, 209, 1);
	cursor: pointer;
}

@media screen and (max-width: 600px) {
	.image-section {
		display: none;
	}
	.login-section {
		width: calc(100% - 140px);
		margin: 72px auto;
	}
}
</style>
