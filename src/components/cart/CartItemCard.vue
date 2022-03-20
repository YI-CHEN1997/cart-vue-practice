<template>
  <table class="table">
  <thead>
    <tr>
      <th class="tb1">商品資訊</th>
      <th class="tb2">數量</th>
      <th class="tb3">小計</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><img :src="product.imgSrc">{{ product.name }}</td>

      <td>
        <div class="button-container">
        <button type="button" class="remove btn" @click="removeFromCart()">-</button>
        <div class="cart-total">
          {{product_total}}
        </div>
        <button type="button" class="add btn" @click="addToCart()">+</button>
        </div>
      </td>
      
      <td>NT:{{ item_cost }}</td>
    </tr>
  </tbody>
</table>
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
    product_total() {
      return this.$store.getters.productQuantity(this.product)
    },
    item_cost() {
      return this.product.price * this.product.quantity
    }
  }
}
</script>

<style lang="scss">
  .table {
    margin: 2%;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    text-align: center;
    justify-content: center;

    .tb1 {
      width: 50px;
    }

    img {
    width: 90px;
    margin: 5px;
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
        display: inline-block;
        text-align: center;
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
  }
  
</style>