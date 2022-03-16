<template>
  <div class="top">
    <div class="top-nav">
      <router-link :class="{active: $router.name === 'Cart'}" to="/cart">
        <i class="fas fa-shopping-cart"></i>
        <span class="cartQuantity">3</span>
      </router-link>

      <router-link :class="Sign_in" to="/sign-in">SIGN IN</router-link>
    </div>
  </div>
  
  <div id="nav">  
      <div>
          <router-link to="/"><img src="../assets/logo-circle.png" alt=""></router-link>
      </div>
      <div>
         <router-link :class="{active: $router.name === 'Home'}" to="/">PRODUCTS</router-link> 
      </div>
 </div>
</template>
<script>
 export default {
 }
 </script>

<style scoped>
  /* top navbar */
  .top {
    position: relative;
    padding: 30px;
  }

  .top-nav {
    position: absolute;
    right: 0;
    padding: 10px;
  }

  .top-nav a {
    text-align: center;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 20px 0 20px;
    font-size: .9rem;
  }

  .top-nav a {
    position: relative;
  }

  .cartQuantity{
    position:absolute;
    color: white;
    background: #0000CC;
    font-size: 9px;
    width: 15px;
    height: 15px;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
    right:-10px;
    top:-8px;
  }

  /* logo and sec navbar */
  #nav{
    padding:0 50px 50px 50px;
    text-align: center;
    background: white ;
  }

  #nav a{
    color: #2c3e50;
    text-decoration: none;
    margin: 0 20px 0 20px;
  }

  #nav a.router-link-exact-active {
    color: #0000CC;
  }

  .text-center {
    text-align: center;
  }

  #nav img {
    width: 10vw;
    min-width: 100px;
    margin: 5px 10px 30px 10px;
  }

</style>