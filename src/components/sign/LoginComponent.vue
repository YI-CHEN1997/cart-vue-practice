<template>
  <main class="login">
    <section class="forms">
      <!-- 避免按下submit時網頁會reload史資料消失 -->
      <form class="login" @submit.prevent="login">
        <h1 class="h3 mb-5 fw-normal">登入會員</h1>

        <div class="form-floating mb-3">
          <input 
          type="email"
          id="e-mail" 
          class="type-in-box form-control" 
          placeholder="電子郵件地址"
          v-model="login_form.email" >
          <label for="floatingInput">電子郵件地址</label>
            <!-- <span id="incorrectemail" class="red-invalid">電子郵件錯誤</span> -->
        </div>

        <div class="form-floating mb-3">
          <input 
          type="password" 
          id="pwd1" 
          class="type-in-box form-control" 
          placeholder="密碼"
          v-model="login_form.password" >
          <label for="floatingInput">密碼</label>
        </div>

        <input type="submit" class="submit-btn mb-3" value="登入" >

        <p class="not-member">不是會員？ <span><router-link to="/register">加入我們</router-link></span></p>
      </form>
    </section>
  </main>
</template>


<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value)
    }

    return {
      login_form,
      login
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