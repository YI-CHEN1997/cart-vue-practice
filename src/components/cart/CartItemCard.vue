<template>
  <div class="cart-item-card">
    <div class="header">
      <div class="row">
        <div class="col">
          <img :src="product.imgSrc">
        </div>
        <div class="col">
          <p>{{ product.name }}</p>
        </div>
        
        
      </div>
      
      <p>In Cart: {{ product.quantity }}</p>
      <p>Total Cost: {{ item_cost }}</p>
    </div>

    <!-- <p>{{ description }}</p> -->
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    description() {
      return this.product.description.substring(0, 120)
    },
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