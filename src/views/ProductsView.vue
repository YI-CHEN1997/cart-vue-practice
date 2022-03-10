<template>
  <div class="row">
    <div class="product-box">
      <div class="image-box">
        <img alt="Black Jeans" src="../assets/5.png">
      </div>
      <h3>雙釦黑色高腰牛仔褲</h3>
      <p>$560</p>

    </div>
  </div> 
 </template>
 
<script>


</script>
 <style scoped>
  div.row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
  }
  div.product-box{
    min-width: 350px;
    width: 24%;
    text-align: center;
    margin: 1px;
    cursor: pointer;
    display: block;
  }
  div.image-box{
    width: 100%;
    height: 250px;
    display: flex;
  }
  img{
    display: block;
    width: 50%;
    margin: auto;
  }
 </style>