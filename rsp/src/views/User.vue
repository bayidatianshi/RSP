<template>
  <div id="user">
    <h2 class="title">毕设</h2>
    <div class="user-container">
      <ul class="nav">
        <router-link to="/user/login" tag="li">登录</router-link>
        <router-link to="/user/register" tag="li">注册</router-link>
      </ul>
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style scoped lang="scss">
  $theme-color: #4ea4dc;
  #user {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #eaeaea;
    .title {
      text-align: center;
      margin: 40px 0;
      font-size: 50px;
    }
    .user-container {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 360px;
      padding: 60px 125px;
      height: 480px;
      background-color: #fff;
      box-shadow: 0 0 10px 3px #ddd;
      border-radius: 4px;
      .nav {
        display: flex;
        .router-link-active {
          color: $theme-color;
          border-bottom: 5px solid $theme-color;
          font-weight: 600;
        }
        li {
          flex: 1;
          font-size: 26px;
          padding: 0 10px 10px 10px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
</style>
