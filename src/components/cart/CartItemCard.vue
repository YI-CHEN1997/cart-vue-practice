<template>
  <div class="product-table">
    <div class="row">
      <div class="col-lg-4 col-sm-12 product-info">
        <p>商品資訊</p>
          <div class="back-to-product" @click="redirectProduct(product.id)">
            <img :src="product.imgSrc">{{ product.name }}
          </div> 
      </div>

      <div class="col-lg-4 col-sm-6 quantity">
        <p>數量</p>
        <div class="button-container">
        <button type="button" class="remove btn" @click="removeFromCart()">-</button>
        <div class="cart-total">
          {{product_total}}
        </div>
        <button type="button" class="add btn" @click="addToCart()">+</button>
        </div>
      </div>

      <div class="col-lg-4 col-sm-6 cost">
        <p>小計</p>
        NT:{{ item_cost }}
      </div>
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
    },
    redirectProduct(id) {
      this.$router.push({name:'product', params:{productId:id}})
    }
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    },
    item_cost() {
      return this.product.price * this.product.quantity
    }
  }
}
</script>

<style scoped lang="scss">
  .product-table {
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    text-align: center;
    justify-content: center;

    img {
    width: 90px;
    margin: 5px;
    }

    .back-to-product {
      cursor: pointer;
    }

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
        text-align: center;
      }

      .btn {
        background: transparent;
        color: inherit;
        border: none;
        display: inline-block;
        min-width: 0;
        text-align: center;
        // line-height: 1;

        &:focus {
          outline: none;
        }
      }
    }
  }
  
</style>