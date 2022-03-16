<template>
  <div class="drawer-background"
  :class="{show: active}"
  @click="$emit('close-product-drawer')" />

  <div></div>

  <div class="drawer" :class="{show: active}">
    <div class="drawer-close" @click="$emit('close-product-drawer')">
      &times;
    </div>
    <div v-if="product" class="product-details">
      <div>
        <img :src="product.imgSrc">
      </div>
      <div>
        <p>{{ product.name }}</p>
      <p>NT${{ product.price }}</p>

      <div class="button-container">
          <button class="remove btn" @click="removeFromCart()">-</button>
          <div class="cart-total" v-if="product_total">
            <p value="0">{{ product_total }}</p>
          </div>
          <button class="add btn" @click="addToCart()">+</button>
      </div>
      </div>
    </div>
    <!-- <div v-if="product">
      <p class="description">{{ product.description }}</p> 
    </div> -->
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
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    }
  }
}
</script>

<style lang="scss">
  // 暗掉的背景色
  .drawer-background {
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

  .drawer {
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
  .drawer-close {
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

  .product-details {
    margin: 50px 0 50px 0;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    img {
      margin-right: 20px;
      width: 100px;
    }

    // drawer.description {
    //   margin-top: 50px;
    //   padding: 20px;
    //   line-height: 1.5rem;
    // }

    .button-container {
      position: relative;
      display: flex;
      width: 140px;
      background: #eee;
      border-radius: 5px;
      justify-content: space-around;
      align-items: center;
      overflow: hidden;

      .cart-total  {
        width: 100px;
        overflow: hidden;
      }

      .btn {
        background: transparent;
        color: inherit;
        border: none;
        display: inline-block;
        min-width: 0;
        height: 2rem;
        line-height: 1;

        &:focus {
          outline: none;
        }
      }

      // button.add {
      //   position: absolute;
      //   right: 0;
      // }
    
      button {
        background: #fff;
      }
    }
  }

  @media (min-width: 500px) {
    .drawer {
      width: 450px;
    }
  }
</style>