<template>
  <div>
  <header>
    <NavbarComponent/>
  </header>
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'

 export default {
   components:{
     NavbarComponent,
   },
   mounted() {
     this.$store.commit('updateCartFromLocalStorage')
   },
  }

</script>

<style lang="scss">
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

</style>