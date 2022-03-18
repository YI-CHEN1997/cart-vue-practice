<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">商品資訊</th>
      <th scope="col">數量</th>
      <th scope="col">小計</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row"><img :src="product.imgSrc">{{ product.name }}</td>
      <td><div class="button-container">
        <button type="button" class="remove btn" @click="removeFromCart()">-</button>
        <div class="cart-total">
          {{product_total}}
        </div>
        <button type="button" class="add btn" @click="addToCart()">+</button>
      </div></td>
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
    // description() {
    //   return this.product.description.substring(0, 120)
    // },
    item_cost() {
      return this.product.price * this.product.quantity
    }
  }
}
</script>

<style lang="scss">
  .cart-item-card {
    width: 90%;
    margin: 5%;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    padding: 10px;
    text-align: left;

    .header {
      display: flex;
      justify-content: space-around;
    }
  }
  img {
    width: 10vh;
  }

  img-info {
    display: inline;
  }
</style>