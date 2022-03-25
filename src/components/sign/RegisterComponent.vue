<template>
  <main class="login">
    <section class="forms">
      <!-- 避免按下submit時網頁會reload史資料消失 -->
      <form class="register" @submit.prevent="register">
        <h1 class="h3 mb-5 fw-normal">成為會員</h1>

        <div class="form-floating mb-3">
          <input 
          type="email"
          id="e-mail" 
          class="type-in-box form-control" 
          placeholder="電子郵件地址"
          v-model="register_form.email" >
          <label for="floatingInput">電子郵件地址</label>
            <!-- <span id="incorrectemail" class="red-invalid">電子郵件錯誤</span> -->
        </div>

        <div class="form-floating mb-3">
          <input 
          type="password" 
          id="pwd1" 
          class="type-in-box form-control" 
          placeholder="密碼"
          v-model="register_form.password" >
          <label for="floatingInput">密碼</label>
          <!-- 此密碼未達到最低要求 -->
          <!-- <div  id="lowrequire" class="red-invalid">此密碼未達到最低要求</div> -->
          <!-- 密碼規則 -->
          <!-- <div id="rule">
            <span id="length" class="invalid">至少8個字元</span>
            <span id="uppercase" class="invalid">1個大寫字母</span>
            <span id="lowercase" class="invalid">1個小寫字母</span>
            <span id="number" class="invalid">1個數字</span>
          </div> -->
        </div>
        <div class="mb-3">
      <label class="subscribe">
        <input type="checkbox"><p>訂閱電子郵件就能收到產品優惠以及會員福利的最新消息</p>
      </label>
    </div>
    <p class="agree">如建立帳號，即代表同意<span><a href="">隱私權政策</a></span>和<span><a href="">使用條款</a></span>。</p>
        <input type="submit" class="submit-btn"
        value="加入" >

        <p class="not-member">已經是會員了嗎？ <span><router-link to="/login">登入</router-link></span></p>
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const register_form = ref({});
    const store = useStore(); 

    const register = () => {
      store.dispatch('register', register_form.value)
    }

    return {
      register_form,
      register
    }
  }
}
</script>

<style scoped lang="scss">
  main {
    width: 50%;
    min-width: 400px;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
    padding: 50px;
    margin: 5vh 0 10vh 0;
    text-align: center;

    .type-in-box {
      width: 100%;
      font-size: 1rem;
      
    }

    .submit-btn {
      width: 100%;
      font-size: 1rem;
      color: white;
      border: 1px solid white;
      background: #000;
      margin: 20px 0 20px 0;
      padding: 10px;

      &:hover {
        background: #333;
      }
    }

    .subscribe {
      font-size: 0.9rem;
      color: #848484;

      p {
        display: inline;
        margin-left: 5px;
      }
    }

    .agree {
      font-size: 0.9rem;
      color: #848484;

      a {
        font-size: 0.9rem;
        color: #848484;
      }
    }

    .not-member {
      font-size: 0.9rem;
      color: #848484;

      a {
        font-size: 0.9rem;
        color: #000;
      }
    }
  }
</style>