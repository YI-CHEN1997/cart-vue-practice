<template>
  <div class="cart-item-card">
    <p>Cart Total: ${{ cart_total }}</p>

    <button class="view-product-button">結帳</button>
  </div>
</template>

<script>
export default {
  computer: {
    cart_total() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>