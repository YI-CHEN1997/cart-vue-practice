<template>
  <div v-if="product" class="product-details">
    <div>
      <img :src="product.imgSrc">
    </div>
    <div>
      <p class="product_name">{{ product.name }}</p>
      <p class="product_price">NT${{ product.price }}</p>

      <div class="button-container">
        <button type="button" class="remove btn" @click="removeFromCart()">-</button>
        <div class="cart-total" v-if="product_total">
          {{product_total}}
        </div>
        <button type="button" class="add btn" @click="addToCart()">+</button>
      </div>
      <button type="button" class="add-to-cart-btn" @click="$emit('close-product-popup')">加入購物車</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['product', 'active'],
  methods: {
    addToCart(){
      this.$store.commit('addToCart', this.product)
    },
    removeFromCart(){
      this.$store.commit('removeFromCart', this.product)
    }
  },
  computed: {
    // 按加減呈現的數字
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    }
  }
}
</script>

<style lang="scss">
  .product-details {
    margin: 50px 0 50px 0;
    display: flex;
    justify-content: center;
    align-content: center;

    img {
      margin-right: 20px;
      width: 150px;
    }

    .product_price {
      font-size: .8rem;
    }

// button
    .button-container {
      position: relative;
      display: flex;
      width: 140px;
      border: 1px solid #eee;
      border-radius: 5px;
      justify-content: space-around;
      align-items: center;
      overflow: hidden;

      .cart-total  {
        width: 50px;
        min-width: 0;
        display: inline-block;
        text-align: center;
		
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          appearance: none;
          margin: 0;
        }
      }

      .btn {
        background: transparent;
        color: inherit;
        border: none;
        display: inline-block;
        min-width: 0;
        height: 1rem;
        text-align: center;
        // line-height: 1;

        &:focus {
          outline: none;
        }
      }
    }
    .add-to-cart-btn {
      width: 140px;
        font-size:.9rem ;
        color: white;
        border: 1px solid white;
        background: #000;
        margin: 20px 0 20px 0;
        padding: 7px 10px 7px 10px;
      }
  }
</style>