<template>
<div class="container">
	<LoginComponent />
</div>

</template>

<script>

import LoginComponent from '../components/sign/LoginComponent.vue'


export default {
	components: {
		LoginComponent,
	},
}
</script>

<style scoped>
	.container {
		display: flex;
    justify-content: center; 
	}
</style>