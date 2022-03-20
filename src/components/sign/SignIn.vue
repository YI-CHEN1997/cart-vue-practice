<template>
  <main class="container form-sign-up">
    <form action="https://www.townway.com.tw/auth" method="post">  
      <h1 class="h3 mb-3 fw-normal text-center">成為會員</h1>

    <!-- input -->
    <div>
      <input type="email" id="e-mail" class="input" placeholder="電子郵件地址">
        <!-- <span id="incorrectemail" class="red-invalid">電子郵件錯誤</span> -->
      </div>
      <div>
        <input type="password" id="pwd1" class="input" placeholder="密碼">
          <!-- 此密碼未達到最低要求 -->
          <!-- <div  id="lowrequire" class="red-invalid">此密碼未達到最低要求</div> -->
          <!-- 密碼規則 -->
        <div id="rule">
          <span id="length" class="invalid">至少8個字元</span>
          <span id="uppercase" class="invalid">1個大寫字母</span>
          <span id="lowercase" class="invalid">1個小寫字母</span>
          <span id="number" class="invalid">1個數字</span>
        </div>
      </div>
      <div>
        <input type="password" id="pwd2" class="input" placeholder="密碼確認">
        <span id="pwdnomatch"></span>
      </div>
      <div>
        <input type="text" id="surname" class="name" placeholder="姓氏" required>
        <input type="text" id="firstname" class="name" placeholder="名字">
      </div>
      <div class="checkbox mb-3 text-center">
        <label class="subscribe">
          <input type="checkbox" value="news">訂閱電子郵件就能收到產品優惠以及會員福利的最新消息
        </label>
      </div>
      <p class="agree text-center">如建立帳號，即代表同意<span><a href="">隱私權政策</a></span>和<span><a href="">使用條款</a></span>。</p>
      <div class="text-center">
        <button class="btn sign-up-btn" type="submit"><a href="info.html">加入</a></button>
      </div>
    </form>
  </main>
</template>

<script>
export default {
  
}
</script>

<style>
  .form-sign-up {
  width: 500px;
  border: 2px solid #0000cc;
  padding: 50px;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

.input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #848484;
}

.name {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 1rem;
  color: #848484;
}

/* #pwd1 {
  border-color: #f93838;
} */

/* #e-mail {
  border-color: #f93838;
} */

#pwdnomatch {
  font-size: 0.8rem;
  /* margin-top: 5px;
  margin-bottom: 5px; */
  width: 100%;
  text-align: left;
  margin-left: 5px;
  color: #f93838;
}

#rule {
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 5px;
  display: none;
  width: 100%;
  text-align: left;
}

#rule span {
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
}

.invalid {
  color: #848484;
}

.valid {
  color: #333;
}

.valid:before {
  position: relative;
  content: "✔︎";
  color: rgb(14, 168, 0);
}

.subscribe {
  font-size: 0.8rem;
  color: #848484;
}

.agree {
  font-size: 0.8rem;
  color: #848484;
}

.agree a {
  font-size: 0.8rem;
  color: #848484;
}

.sign-up-btn {
  border-radius: 0%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  background: #0000cc;
  color: #fff;
  font-size: 1rem;
}

.sign-up-btn:hover {
  color: white;
}
</style>