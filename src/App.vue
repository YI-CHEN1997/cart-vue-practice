<template>
  <div>
  <header>
    <NavbarComponent/>
  </header>
  <body>
    <footer>
    <FooterComponent/>
  </footer>
  </body>
  
    <router-view/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
 export default {
   components:{
     NavbarComponent,
     FooterComponent
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

  // body {
  //   background-color: rgb(245, 245, 245);
  // }

</style>