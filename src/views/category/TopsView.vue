<template>
  <div class="home">
    <ProductPopUp
      :product="product"
      :active="active.product_popup"
      v-on:close-product-popup="closeProductPopup()" />
    
    <div class="products-container">
      <ProductSummary
      v-for="product in tops"
      :key="product.category"
      :product="product"
      v-on:view-add-cart="viewAddCart" />
      <!-- methods（view-product是component $emit 傳過來的）-->
      <!-- 自行取名product 然後在components/ProductSummary.vue 裡的props引入 -->
    </div>
  </div>
   
</template>

<script>
import tops from '@/data/tops.js'

import ProductSummary from '../../components/products/ProductSummary.vue'
import ProductPopUp from '../../components/products/ProductPopUp.vue'


export default {
  components: {
    ProductSummary, ProductPopUp
  },
  data() {
    return {
      // 產品資料
      tops: tops,
      product: null,
      active: {
        product_popup: false
        // 在沒有被active的情況下，不會顯示
      }
    }
  },
  methods: {
    // 上面的 v-on
    viewAddCart(product) {
      this.product = product
      this.active.product_popup = true
      console.log(this.product)
    },
    closeProductPopup() {
      this.active.product_popup = false
    }
  },
}
</script>
<style scoped>
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>