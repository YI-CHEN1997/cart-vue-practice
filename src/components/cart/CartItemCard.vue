<template>
  <div class="product-table">
    <div class="row title">
      <div class="col-lg-4 col-md-4">
        <p>商品資訊</p>
      </div>
      <div class="col-lg-4 col-md-4">
        <p>數量</p>
      </div>
      <div class="col-lg-4 col-md-4">
        <p>小計</p>
      </div>
    </div> 

    <div class="row">
      <div class="col-lg-4 col-md-4 col-6 product-info">
        <div class="back-to-product" @click="redirectProduct(product.id)">
          <img :src="product.imgSrc">
          <p class="product-name">{{ product.name }}</p>
        </div> 
      </div>
      <div class="col-lg-4 col-md-4 col-6 quantity">
        <div class="button-container">
          <button type="button" class="remove btn" @click="removeFromCart()">-</button>
          <div class="cart-total">
            {{product_total}}
          </div>
          <button type="button" class="add btn" @click="addToCart()">+</button>
        </div>
        <div class="hide-cost">NT:{{ item_cost }}</div>
      </div>
      <div class="col-lg-4 col-md-4 cost">
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
    padding: 2vh;
    margin-bottom: 2vh;
  
    .product-info {
      img {
        width: 90px;
        margin: 5px;
      }

      p {
        display: inline;
        line-height: 0;
      }
    }

    .back-to-product {
      cursor: pointer;
    }


    .quantity {
      margin: auto;

      .button-container {
      display: flex;
      width: 140px;
      border: 1px solid #eee;
      border-radius: 5px;
      justify-content: space-around;
      align-items: center;
      margin: auto;

      .cart-total  {
        width: 50px;
        text-align: center;
      }

      .btn {
        background: transparent;
        color: inherit;
        border: none;
        min-width: 0;
        text-align: center;

        &:focus {
          outline: none;
        }
      }
    }

    .hide-cost {
      margin-top: 20px;
    }
  }
  .cost {
    margin: auto;
  }
    
  }

  @media (max-width: 800px) {
    .title {
      display: none;
    }

    .cost {
      display: none;
    }
  }

  @media (min-width: 800px) {
    .hide-cost {
      display: none;
    }
  }
  
</style>