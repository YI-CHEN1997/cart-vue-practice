<template>
  <div class="card" @click="$emit('view-product', product)">
    <img :src="product.imgSrc">
    <h3>{{ product.name }}</h3>
    <h5 class="price">NT${{ product.price }}</h5>
    <!-- <p class="discription">{{ description }}</p>
    <p class="text-muted">{{ product.category }}</p> -->
    <!-- <button class="view-product-button" @click="$emit('view-product', product)">View Product</button> -->
  </div>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    description(){
      return this.product.description.substring(0, 150)
    }
  }
}
</script>

<style lang="scss">
  .card {
    width: 20%;
    margin: 10%;
    padding: 2%;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    text-align: center;
    cursor: pointer;

  // p.description {
  //   font-size: .85rem;
  // }

  // p.text-muted {
  //   color: grey;
  // }

  img {
    width: 200px;
  }
  }

  // button.view-product-button {
  //   padding: 10px;
  //   background-color: rgb(79, 160, 187);
  //   border: none;
  //   color: white;
  //   font-weight: bold;
  //   font-size: 1.15rem;
  //   border-radius: 5px;
  //   cursor: pointer;
  // }

  @media (min-width: 500px){
    .card {
      width: 350px;
      margin: 10px;
    }
  }

</style>