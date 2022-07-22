import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import LoginView from '../views/LoginView.vue';
import SignupView from '../views/SignupView.vue';
import InventoryView from '../views/InventoryView.vue';

const routes = [
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardView,
	},
	{
		path: '/inventory',
		name: 'inventory',
		component: InventoryView,
	},
	{
		path: '/',
		name: 'login',
		component: LoginView,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/signup',
		name: 'signup',
		component: SignupView,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from) => {
	let authenticated = false;
	if (localStorage.getItem('userLogged')) {
		authenticated = true;
	} else {
		authenticated = false;
	}

	if (!to.meta.noAuth) {
		if (!authenticated && to.name !== 'login') {
			return { name: 'login' };
		}
	}
	// return to;
});

export default router;
