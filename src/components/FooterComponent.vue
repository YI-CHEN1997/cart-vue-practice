<template>

  <div id="footer">
    <p>© 2021 RayRay Stephanie.</p>
    <div class="icon">
      <div>
        <a href="">
        <i class="fa-brands fa-instagram"></i> 
        </a>
      </div>
      <div>
        <a href="">
        <i class="fab fa-facebook-f fa-lg"></i>
        </a>
      </div>
      <div>
        <a href="">
        <i class="fa-solid fa-store"></i>
        </a>
      </div>
    </div> 
  </div>
  
</template>

 <style scoped lang="scss">
  #footer{
    width: 100%;
    height: 23vh;
    position: relative;
    bottom: 0;
    text-align: center;
    background: #0000CC;
    padding: 50px;
    margin-top: 10vh;

    p {
      font-size: 0.8rem;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      color: rgb(209, 209, 209);
    }

    .icon {
      align-items: center;
    }

    .icon div {
      height: 30px;
      width: 30px;
      border-radius: 50%;
      background: rgb(209, 209, 209);
      display: inline-block;
      margin: 10px 10px 0 10px;
      padding: 3px;
    }

    a {
      color: #0000CC;
      align-items: center;
      position: relative;
    }
  }

 </style>