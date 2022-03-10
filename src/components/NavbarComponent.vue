<template>
  <div id="nav">
      <div>
          <router-link to="/"><img src="../assets/logo-circle.png" alt=""></router-link>
      </div>
     <router-link :class="{active: $router.name === 'Home'}" to="/">PRODUCTS</router-link>
     <router-link :class="{active: $router.name === 'Cart'}" to="/cart">CART</router-link>
 </div>
</template>
<script>
 export default {
 }
 </script>

 <style scoped>
     #nav{
         padding:50px;
         text-align: center;
         background: white ;
     }
     #nav a{
         /* font-weight: bold; */
         color: #2c3e50;
         text-decoration: none;
         margin: 0 20px 0 20px;
     }
     #nav a:active {
            color: #0000CC;
         }
    #nav a:focus {
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