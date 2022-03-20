<template>
<div class="product-container">
  <ProductBox
  v-for="product in items"
  :key="product.id"
  :product="product" />

  <!-- <h3>商品描述</h3>
  <p>{{ product.desc }}</p> -->
</div>
  
  <FooterComponent/>
</template>

<script>
import items from '../data/items.js'
import ProductBox from '@/components/products/ProductBox.vue'
import FooterComponent from '@/components/FooterComponent.vue'
export default {
  components: {
    ProductBox, FooterComponent
  },
  data() {
    return {
      items: items,
      product: '',
    }
  },
  
  
}
</script>
<style lang="scss">
  
</style>