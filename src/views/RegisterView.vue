<template>
<div class="container">

	<RegisterComponent />
	
</div>
</template>

<script>
import RegisterComponent from '../components/sign/RegisterComponent.vue'

export default {
	components: {
		RegisterComponent
	},
}
</script>

<style scoped>
 .container {
		display: flex;
    justify-content: center; 
	}
</style>