<template>
  <div class="product-card">
    <img :src="product.imgSrc">
    <div class="product-name-price">
      <p class="product-name">{{ product.name }}</p>
      <p class="price">NT${{ product.price }}</p>
      <button @click="$emit('view-product', product)">加入購物車</button>
      <!-- <button class="view-product-button" @click="$emit('view-product', product)">VIEW</button> -->
    </div>
  </div>
  
    
    
    <!-- <p class="discription">{{ description }}</p>
    <p class="text-muted">{{ product.category }}</p>
    <button class="view-product-button" @click="$emit('view-product', product)">View Product</button> -->
  <!-- </div> -->
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
  .product-card {
    justify-content: center;
    // width: 50%;
    // margin: 10%;
    // padding: 2%;
    // background-color: #fff;
    // box-shadow: 0 0 5px rgba(0,0,0,0.1);
    
    text-align: center;
    cursor: pointer;
    position: relative;
    width: 200px;
    margin: 3vw;
  
  img {
    display: block;
    width: 100%;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
  }

  .product-name-price {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    font-size:1rem ;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: white;
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity .5s;

  }

  .product-name-price:hover {
    opacity: 1;
  }  

  button {
    font-size:1rem ;
    color: white;
    border: 1px solid white;
    background: #000;
    margin: 10px 0 10px 0;
  }
  }

  @media (min-width: 500px){
    .card {
      width: 350px;
      margin: 10px;
    }
  }

</style>