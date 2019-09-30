<template>
  <div id="register">
    <input type="text" class="username" placeholder="请输入用户名" v-model="username">
    <input type="password" class="password" placeholder="请输入密码" v-model="passwordOne">
    <input type="password" class="password" placeholder="请再次输入密码" v-model="passwordTwo">
    <p class="tip">{{tip}}</p>
    <button class="register" @click="register">注册</button>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {
        username: '',
        passwordOne: '',
        passwordTwo: '',
        tip: ''
      }
    },
    methods: {
      register() {
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
        if (!this.passwordOne || !this.passwordTwo) {
          this.tip = '密码不能为空！';
          return false;
        }
        if (this.passwordOne !== this.passwordTwo) {
          this.tip = '密码输入不一致！';
          return false;
        }
        return true;
      }
    }
  }
</script>

<style scoped lang="scss">
  $theme-color: #4ea4dc;
  #register {
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
    .register {
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
