<template>
  <div class="container">
    <p>購物車</p>
      
    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product" />

    <CartSummaryPayment />
    
  </div>
  <FooterComponent/>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryPayment from '../components/cart/CartSummaryPayment.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    CartItemCard, CartSummaryPayment, FooterComponent
  },

  computed: {
    products() {
      return this.$store.getters.cartItems
    }
  }
}
</script>

<style>
  
</style>