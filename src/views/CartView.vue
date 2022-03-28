<template>
  <div class="container">
    <p>購物車（{{ cart_total }}）</p>
      
    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product" />

    <CartSummaryPayment />
    
  </div>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryPayment from '../components/cart/CartSummaryPayment.vue'

export default {
  components: {
    CartItemCard, CartSummaryPayment
  },

  computed: {
    products() {
      return this.$store.getters.cartItems
    },
    cart_total() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style scoped>
  p {
    background: #eee;
    padding: 10px;
    font-weight: 600;
    
  }
</style>