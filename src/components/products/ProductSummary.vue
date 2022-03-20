<template>
  <div class="product-card">
    <img :src="product.imgSrc" @click="redirectProduct(id)">

    <div class="product-name-price">
      <p class="product-name">{{ product.name }}</p>
      <p class="price">NT${{ product.price }}</p>
      <button @click="$emit('view-add-cart', product)">加入購物車</button>
      <!--                  要綁定的事件名稱   透過這事件傳至父層的資料-->
    </div>
  </div>
</template>

<script>
export default {
  // 從外部引入product資料（在HomeView裡的v-for）
  props: ['product'],
  methods: {
    redirectProduct: function(id){
      this.$router.push(`/${id}`)
    }
  },
}

</script>

<style lang="scss">
  .product-card {
    justify-content: center;
    
    text-align: center;
    cursor: pointer;
    position: relative;
    width: 200px;
    margin: 3vw;
  
  img {
    display: block;
    width: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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