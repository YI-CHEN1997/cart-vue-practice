<template>
  <div class="row pay-detail">
    <div class="col-lg-8 col-sm-12 left-card">
      <p>選擇送貨及付款方式</p>
      <form action="">
        <label for="">送貨地點</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>台灣</option>
        </select>

        <label for="">送貨方式</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>7-11 取貨不付款</option>
          <option>全家 取貨不付款</option>
          <option>台灣國內郵寄</option>
        </select>

        <label for="">付款方式</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>信用卡</option>
          <option>PayPal</option>
        </select>
      </form>
    </div>
    <div class="col-lg-4 col-sm-12 right-card">
      <div class="row">
        <p class="col-6">小計:</p>
        <p class="col-6">NT${{ price_total }}</p>
      </div>
      <div class="row">
        <p class="col-6">運費:</p>
        <p class="col-6">NT$60</p>
      </div>

      <div class="row">
        <p class="col-6">合計:</p>
        <p class="col-6">NT${{ final_price }}</p>
      </div>
      
      <button class="view-product-button">結帳</button> 
    </div>
    
  </div>
</template>

<script>
export default {
  computed: {
    price_total() {
      return this.$store.getters.priceTotal
    },
    final_price() {
      return this.$store.getters.priceTotal + 60
    },
    
  }
}
</script>

<style lang="scss">
  .pay-detail {
    margin: 20vh;
  }
  button {
    // width: 35vw;
    font-size: 1rem ;
    color: white;
    border: 1px solid white;
    background: #000;
    margin: 20px 0 20px 0;
    padding: 7px 10px 7px 10px;
    text-align: center;
  }

  .left-card {
    padding: 2%;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    justify-content: center;
  }
  .right-card {
    padding: 2%;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    border-radius: 5px;
    justify-content: center;
    overflow: hidden;
  }
</style>