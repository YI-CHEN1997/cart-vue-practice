<template>
  <div class="cart-item-card">
    <h3>Cart Total: ${{ cart_total }}</h3>

    <button class="view-product-button">Pay by Credit Card</button>
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