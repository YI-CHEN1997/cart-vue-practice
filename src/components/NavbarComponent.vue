<template>
  <div class="top-nav">
    <router-link :class="{active: $router.name === 'Cart'}" to="/cart">
      <i class="fas fa-shopping-cart"></i>
      <span class="cartQuantity">{{ cart_total }}</span>
    </router-link>
    <router-link :class="Sign_in" to="/login"><i class="fa-solid fa-user"></i></router-link>
    <router-link :class="Sign_in" to="/signin"><i class="fa-solid fa-comment"></i></router-link>
    <!-- <button @click="$store.dispatch('logout')">Logout</button> -->
  </div>
  
  <div id="nav">  
      <div>
          <router-link to="/"><img src="../assets/logo-circle.png" alt=""></router-link>
      </div>
      <div>
         <router-link :class="{active: $router.name === 'Home'}" to="/">全部商品</router-link>
         <router-link :class="{active: $router.name === 'Home'}" to="/">上衣</router-link>
         <router-link :class="{active: $router.name === 'Home'}" to="/">褲子</router-link> 
      </div>
 </div>
</template>

<script>
export default {
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal
    }
  }
}
</script>

<style scoped lang="scss">
  /* top navbar */
  .top-nav {
    width: 100%;
    /* height: 10vh; */
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    padding: 30px;
    margin-bottom: 20px;
    z-index: 101;
    text-align: end;

    a {
    position: relative;
    text-align: center;
    color: #2c3e50;
    text-decoration: none;
    margin: 0 20px 0 20px;
    font-size: .9rem;
    }
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
  #nav {
    margin-top: 10vh;
    padding:0 50px 50px 50px;
    text-align: center;
    background: white ;

    a {
    color: #2c3e50;
    text-decoration: none;
    margin: 0 30px 0 30px;
    }

    a.router-link-exact-active {
    color: #0000CC;
    }

    img {
    width: 10vw;
    min-width: 100px;
    margin: 5px 10px 30px 10px;
    }
  }

</style>