<template>
	<button>{{ text }}</button>
</template>

<script>
export default {
	name: 'Button',
	props: ['text'],
};
</script>

<style scoped>
button {
	border: none;
	background-color: white;
	margin-left: 18px;
}
</style>
