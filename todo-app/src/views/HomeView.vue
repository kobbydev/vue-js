<template>
	<div class="home">
		<figure class="bgimage">
			<img src="../assets/Bitmap.svg" alt="" />
		</figure>
		<div class="container">
			<div class="header">
				<h1 class="title">TODO</h1>
				<img src="../assets/moon.svg" alt="" />
			</div>
			<form action="#" v-on:submit="addToArray">
				<input type="checkbox" class="checkbox-button" />
				<input
					type="text"
					placeholder="Create a new todo..."
					id="task-input"
					v-model="inputtedTask"
				/>
			</form>
			<div class="tasks-list">
				<table>
					<tr
						v-for="(task, index) in mainTasks"
						:key="index"
						@mouseover="hover = true"
						@mouseleave="hover = false"
					>
						<td class="col-1">
							<input
								type="checkbox"
								class="checkbox-button"
								v-model="task.checked"
								@mouseover="hover = true"
								@mouseleave="hover = false"
							/>
						</td>
						<td
							class="col-2"
							:class="{ checked: task.checked }"
							@mouseover="hover = true"
							@mouseleave="hover = false"
						>
							{{ task.task }}
						</td>
						<td
							class="col-3"
							@mouseover="hover = true"
							@mouseleave="hover = false"
							v-if="hover"
							@click="remove(index)"
						>
							X
						</td>
					</tr>
				</table>
				<div class="task-menu">
					<p>{{ tasks.length }} items left</p>
					<ul class="menu-links">
						<li><a href="#" class="links" @click="select = 'all'">All</a></li>
						<li>
							<a href="#" class="links" @click="select = 'active'">Active</a>
						</li>
						<li>
							<a href="#" class="links" @click="select = 'completed'"
								>Completed</a
							>
						</li>
					</ul>
					<button @click="clearCompleted">Clear Completed</button>
				</div>
			</div>
			<p class="footer-text" v-if="tasks.length > 1">
				Drag and drop to reorder list
			</p>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: 'HomeView',
	data() {
		return {
			tasks: [],
			inputtedTask: '',
			select: '',
			hover: false,
		};
	},
	computed: {
		mainTasks() {
			if (this.select === 'all') {
				return this.tasks;
			} else if (this.select === 'completed') {
				return this.tasks.filter((data) => data.checked);
			} else if (this.select === 'active') {
				return this.tasks.filter((data) => !data.checked);
			} else {
				return this.tasks;
			}
		},
	},
	methods: {
		addToArray(event) {
			event.preventDefault();
			this.tasks.push({ task: this.inputtedTask, checked: false });
			this.inputtedTask = '';
			console.log(this.tasks);
		},
		clearCompleted() {
			this.tasks = this.tasks.filter((data) => !data.checked);
			console.log(this.tasks);
		},
		remove(index) {
			this.tasks.splice(index, 1);
		},
	},
};
</script>
<style scoped>
.home {
	display: flex;
}
.bgimage {
	/* width: 100%; */
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: -1;
}
.bgimage img {
	width: 100%;
}
.container {
	padding: 52px 0px;
	margin: auto;
	width: 35%;
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 48px;
}
.title {
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 40px;
	line-height: 40px;
	letter-spacing: 15px;
	color: #ffffff;
}
form {
	padding: 20px 24px;
	/* width: 540px; */
	background: #ffffff;
	box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
	border-radius: 5px;
	border: none;
}
#task-input {
	border: none;
	padding: 4px;
	width: 90%;
	margin-left: 24px;
}
#task-input::placeholder {
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #9495a5;
}
#task-input:focus {
	outline: none;
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #393a4b;
}
.tasks-list {
	margin-top: 24px;
	margin-bottom: 49px;
	background: #ffffff;
	box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
	border-radius: 5px;
}
.tasks {
	display: flex;
}
.task-title {
	margin-left: 24px;
}
table {
	border-collapse: collapse;
	width: 100%;
}
tr {
	border-bottom: 1px solid #e3e4f1;
	cursor: pointer;
}
td {
	padding: 24px 0;
	padding-left: 24px;
}
.col-1 {
	width: 40px;
}
.col-3 {
	width: 50px;
	margin-right: 10px;
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #d8d8d8;
}
.col-2 {
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	letter-spacing: -0.25px;
	color: #494c6b;
}
.task-menu {
	display: flex;
	justify-content: space-between;
	padding: 18px 24px;
}
.task-menu p {
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: -0.194444px;
	color: #9495a5;
}
.menu-links {
	display: flex;
}
li {
	list-style: none;
}
.links {
	text-decoration: none;
	margin-left: 18px;
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: -0.194444px;
	color: #9495a5;
}
button {
	border: none;
	background-color: white;
	margin-left: 18px;
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 14px;
	letter-spacing: -0.194444px;
	color: #9495a5;
	cursor: pointer;
}
.footer-text {
	text-align: center;
	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 14px;
	text-align: center;
	letter-spacing: -0.194444px;
	color: #9495a5;
}
.checkbox-button {
	width: 24px;
	height: 24px;
	background-color: white;
	border-radius: 50%;
	vertical-align: middle;
	border: 1px solid #ddd;
	appearance: none;
	-webkit-appearance: none;
	outline: none;
	cursor: pointer;
}
.checkbox-button:checked {
	/* background-color:  */
	background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
}
.checked {
	text-decoration: line-through;

	font-family: 'Josefin Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 18px;
	/* identical to box height */

	letter-spacing: -0.25px;
	text-decoration-line: line-through;

	color: #d1d2da;
}

@media screen and (max-width: 600px) {
	.container {
		padding: 40px 0px;
		margin: auto;
		width: 90%;
	}
	.bgimage img {
		height: 100%;
		width: 100%;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 48px;
	}
	.title {
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		line-height: 40px;
		letter-spacing: 15px;
		color: #ffffff;
	}
	#task-input::placeholder {
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: -0.166667px;
		color: #9495a5;
	}
	#task-input:focus {
		outline: none;
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: -0.166667px;
		color: #393a4b;
	}
	.task-menu p {
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: -0.166667px;
		color: #9495a5;
	}
	.links {
		text-decoration: none;
		margin-left: 18px;
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: -0.166667px;
		color: #9495a5;
	}
	button {
		border: none;
		background-color: white;
		margin-left: 18px;
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: -0.166667px;
		color: #9495a5;
	}
	.task-menu {
		position: relative;
	}
	.menu-links {
		display: flex;
		position: absolute;
		top: 100px;
		left: 15%;
		background: #ffffff;
		box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
		border-radius: 5px;
		padding: 17px 20px;
		margin: auto;
	}
	.footer-text {
		display: none;
	}
	td {
		padding: 20px 0;
		padding-left: 24px;
	}
	.col-1 {
		width: 40px;
	}
	.col-2 {
		font-family: 'Josefin Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 12px;
		line-height: 12px;
		letter-spacing: -0.166667px;
		color: #494c6b;
	}
	.checkbox-button {
		width: 20px;
		height: 20px;
		background-color: white;
		border-radius: 50%;
		vertical-align: middle;
		border: 1px solid #ddd;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		cursor: pointer;
	}
}
</style>
