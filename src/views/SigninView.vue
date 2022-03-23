<template>
  <a href="">Sign In</a>
  <a href="">Sign Up</a>
  <SignIn />
  <FooterComponent/>
</template>

<script>
import SignIn from '../components/sign/SignIn.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    SignIn, FooterComponent
  }
}
</script>