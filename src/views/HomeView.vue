<template>
  <div class="home">
    <ProductPopUp
      :product="product"
      :active="active.product_popup"
      v-on:close-product-popup="closeProductPopup()" />
    

    <div class="products-container">
      <ProductSummary
      v-for="product in items"
      :key="product.id"
      :product="product"
      v-on:view-add-cart="viewAddCart" />
      <!-- methods（view-product是component $emit 傳過來的）-->
      <!-- 自行取名product 然後在components/ProductSummary.vue 裡的props引入 -->
    </div>
  </div>
   
    <FooterComponent/>
</template>

<script>
// 產品資料（名稱、圖片、價格、介紹）下面要return {items: items}
import items from '../data/items.js'

import ProductSummary from '../components/products/ProductSummary.vue'
import ProductPopUp from '../components/products/ProductPopUp.vue'
import FooterComponent from '@/components/FooterComponent.vue'


export default {
  name: 'HomeView',
  components: {
    ProductSummary, ProductPopUp, FooterComponent
  },
  data() {
    return {
      // 產品資料
      items: items,
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
<style>
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>