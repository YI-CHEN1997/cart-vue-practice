<template>
  <div class="container">
    <div class="home-img">
      <img class="arch" src="@/assets/arch.png" alt="">
      <img class="dress" src="@/assets/dress-pic.png" alt="">
      <img class="sit" src="@/assets/sit.png" alt="">
      
      
    </div> 
  </div>
  
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
  .home-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      width: 400px;
      margin: 10px;
    }
  }
  
  @media (max-width: 1000px) {
    .home-img img {
      width: 300px;
      margin: 5px;
    }
  }
  
</style>