<template>
  <div id="login">
    <input type="text" class="username" placeholder="请输入用户名" v-model="username">
    <input type="password" class="password" placeholder="请输入密码" v-model="password">
    <p class="tip">{{tip}}</p>
    <button class="login" @click="login">登录</button>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        tip: ''
      }
    },
    methods: {
      login() {
        if (this.check()) {
          this.tip = '';
          alert('success')
        }
      },
      check() {
        if (!this.username) {
          this.tip = '用户名不能为空！';
          return false;
        }
        if (!this.password) {
          this.tip = '密码不能为空！';
          return false;
        }
        if (this.password.length < 6) {
          this.tip = '密码长度至少6位！';
          return false;
        }
        return true;
      }
    }
  }
</script>

<style scoped lang="scss">
  $theme-color: #4ea4dc;
  #login {
    padding-top: 30px;
    input {
      border: none;
      border-bottom: 1px solid #ddd;
      height: 40px;
      font-size: 20px;
      margin-top: 30px;
      padding: 4px;
      &::placeholder {
        color: #ccc;
        font-weight: 300;
      }
      &:focus {
        border-bottom: 1px solid $theme-color;
      }
    }
    .tip {
      height: 20px;
      line-height: 20px;
      margin: 20px 0;
      color: red;
    }
    .login {
      background-color: $theme-color;
      width: 100%;
      line-height: 60px;
      color: #fff;
      font-size: 20px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: #65ccff;
      }
    }
  }
</style>
