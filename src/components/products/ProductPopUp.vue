<template>
  <div class="popup-background"
  :class="{show: active}"
  @click="$emit('close-product-popup')" />

  <div class="popup" :class="{show: active}">
    <div class="popup-close" @click="$emit('close-product-popup')">
      &times;
    </div>
    <ProductBox
    :product="product"
    v-if="product" />
    <!-- <div v-if="product">
      <p class="description">{{ product.description }}</p> 
    </div> -->
  </div>
</template>

<script>
import ProductBox from '@/components/products/ProductBox.vue'
export default {
  components:{
     ProductBox,
   },
  props: ['product', 'active'],

}
</script>

<style lang="scss">
  // 暗掉的背景色
  .popup-background {
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(201, 201, 201, 0.55);
    z-index: 100;
    display: none;
    transition: display .5s;

    &.show {
      display: block;
    }
  }

  .popup {
    width: 80vw;
    height: 55vh;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    padding: 15px;
    transition: opacity .5s;
    z-index: 101;
    opacity: 0;

    // overflow-y: scroll;

    &.show {
      opacity: 1;
    }
  }

  // X 鍵
  .popup-close {
    font-size: 1.5rem;
    text-align: center;
    padding: 2px;
    right: 10px;
    color: gray;
    width: 15px;
    height: 15px;
    float: right;
    cursor: pointer;
  }

  @media (min-width: 500px) {
    .popup {
      width: 450px;
    }
  }
</style>