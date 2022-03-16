<template>
  <div>
    <p>購物車</p>
      
    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product" />

    <CartSummaryPaymentCard />
    
  </div>
  <FooterComponent/>
</template>

<script>
import CartItemCard from '../components/cart/CartItemCard.vue'
import CartSummaryPaymentCard from '../components/cart/CartSummaryPaymentCard.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    CartItemCard, CartSummaryPaymentCard, FooterComponent
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