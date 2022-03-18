<template>
  <div class="cart-item-card">
    <p>Cart Total: ${{ price_total }}</p>

    <button class="view-product-button">結帳</button>
  </div>
</template>

<script>
export default {
  computed: {
    price_total() {
      return this.$store.getters.priceTotal
    }
  }
}
</script>