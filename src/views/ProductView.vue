<template>
<div class="product-container"
  v-for="product in items"
  :key="product.id" >
  <div v-if="id == product.id">
    <ProductDesc
    :product="product"  />
    
  </div>
  
  
</div>
  
  <FooterComponent/>
</template>

<script>
import items from '../data/items.js'
import ProductDesc from '@/components/products/ProductDesc.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  components: {
    ProductDesc, FooterComponent
  },
  data() {
    return {
      items: items,
      id:this.$route.params.productId,
    }
  },
  
}
</script>