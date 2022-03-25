<template>
<div class="product-container"
  v-for="product in items"
  :key="product.id" >
  <div v-if="id == product.id">
    <ProductDesc
    :product="product"  />
    
  </div>
</div>
</template>

<script>
import items from '../data/items.js'
import ProductDesc from '@/components/products/ProductDesc.vue'

export default {
  components: {
    ProductDesc
  },
  data() {
    return {
      items: items,
      id:this.$route.params.productId,
    }
  },
  
}
</script>