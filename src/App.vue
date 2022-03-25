<template>
  <main>
  <header>
    <NavbarComponent/>
  </header>
    <router-view/>
    <footer>
      <FooterComponent />
    </footer>
  </main>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

 export default {
   components:{
     NavbarComponent, FooterComponent
   },
   mounted() {
     this.$store.commit('updateCartFromLocalStorage')
   },
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}

</script>

<style scoped lang="scss">
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

</style>