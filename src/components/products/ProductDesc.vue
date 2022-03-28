<template>
<div class="details">
  <div class="img-button">
    <div>
      <img :src="product.imgSrc">
    </div>
    <div>
      <p class="product_name">{{ product.name }}</p>
      <p class="product_price">NT${{ product.price }}</p>

      <div class="button-container">
        <button type="button" class="remove btn" @click="removeFromCart()">-</button>
        <div class="cart-total">
          {{product_total}}
        </div>
        <button type="button" class="add btn" @click="addToCart()">+</button>
      </div>
      <!-- <button type="button" class="add-to-cart-btn">加入購物車</button> -->
    </div>
  </div>
  <div class="text-desc">
    <p class="title">|  商品描述  |</p>
    <p v-html="product.desc"></p>
    <p v-html="product.size"></p>
    <p v-html="product.desc2"></p>
  </div>
  
</div>
  
</template>
<script>
export default {
  props: ['product'],
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

<style scoped lang="scss">
  .details {
    margin: 50px 0 50px 0;
    
    .img-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      margin-right: 50px;
      width: 250px;
    }

    .product_price {
      font-size: .9rem;
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
      }

      .btn {
        background: transparent;
        border: none;
        display: inline-block;
        min-width: 0;
        text-align: center;
      }
    }
    .add-to-cart-btn {
      width: 140px;
      font-size: 1rem ;
      color: white;
      border: 1px solid white;
      background: #000;
      margin: 20px 0 20px 0;
      padding: 7px 10px 7px 10px;
      }

    .text-desc {
      margin-top: 15vh;
      text-align: center;

      .title {
        font-weight: 600;
        font-size: 1.1rem;
      }

      p {
        line-height: 35px;
        margin-bottom: 100px;
      }
    }
    
  }
</style>