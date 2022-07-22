<template>
	<div class="signup">
		<div class="signup-section">
			<figure class="logo">
				<img src="../assets/logo.svg" alt="" />
			</figure>
			<h1 class="header-text">Signup</h1>
			<hr />
			<p class="signup-text">
				Register now and start managing your inventory like a boss
			</p>
			<form @submit.prevent="submit">
				<label for="name">Name</label><br />
				<input
					type="text"
					id="name"
					name="name"
					v-model="signupForm.fullName"
				/>
				<br />
				<label for="email">Email</label><br />
				<input
					type="email"
					id="email"
					name="email"
					v-model="signupForm.email"
				/>
				<br />
				<label for="shopname">Shop Name</label><br />
				<input
					type="text"
					id="shopname"
					name="shopname"
					v-model="signupForm.shopName"
				/>
				<br />
				<label for="password">Password</label><br />
				<input
					type="password"
					id="password"
					name="password"
					v-model="signupForm.password"
				/>
				<br />
				<label for="password-confirm">Password Confirm</label><br />
				<input
					type="password"
					id="password-confirm"
					name="password-confirm"
					v-model="signupForm.confirmPassword"
				/>
				<br />
				<input type="submit" value="Login" class="submit-btn" />
			</form>
			<p class="login-option">
				Don’t have an account?
				<span @click="this.$router.push({ name: 'login' })">Log in</span>
			</p>
		</div>
		<div class="image-section">
			<figure>
				<img src="../assets/signup-image.svg" alt="" />
			</figure>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Signup',
	data() {
		return {
			signupForm: {
				fullName: '',
				email: '',
				shopName: '',
				password: '',
				confirmPassword: '',
			},
		};
	},
	methods: {
		submit() {
			axios
				.post(
					'https://enyata-inventory.herokuapp.com/api/v1/auth/signup',
					this.signupForm
				)
				.then((response) => {
					alert(response.data.message);
					console.log(response);
					this.$router.push({ name: 'login' });
				})
				.catch((error) => {
					if (error.message.includes('fullName')) {
						alert('Name cannot be empty');
					} else if (error.message.includes('email')) {
						alert('email cannot be empty and must have a valid format');
					} else if (error.message.includes('shopName')) {
						alert('Shopname cannot be empty');
					} else if (error.message.includes('password')) {
						alert(
							'Password cannot be empty and must be more than 8 characters'
						);
					} else if (error.message.includes('confrimPassword')) {
						alert('Confrim Password cannot be empty and must match password');
					}
					console.log(error);
				});
		},
	},
};
</script>

<style scoped>
.signup {
	display: flex;
	height: 100vh;
	width: 100%;
}
.image-section {
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(38, 86, 209, 1);
	width: 75%;
}
.image-section img {
	margin: auto;
}
.signup-section {
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
.signup-text {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 150%;
	color: #747880;
	margin-bottom: 48px;
}
hr {
	background: #2656d1;
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
#password,
#name,
#shopname,
#password-confirm {
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
	background: rgba(38, 86, 209, 1);
	box-shadow: 0px 16px 24px rgba(38, 86, 209, 0.2);
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
.login-option {
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
	.signup-section {
		width: calc(100% - 140px);
		margin: 72px auto;
	}
}
</style>
