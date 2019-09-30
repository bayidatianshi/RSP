<template>
  <div id="header-container">
    <div class="header">
      <div class="left">
        <h3 class="title">毕设♂</h3>
        <ul class="nav">
          <router-link to="/" tag="li">链接</router-link>
          <router-link to="/" tag="li">链接</router-link>
          <router-link to="/" tag="li">链接</router-link>
        </ul>
      </div>
      <div class="right">
        <div class="search">
          <input type="text">
          <i class="iconfont iconsousuo"></i>
        </div>
        <div class="user">
          <ul>
            <router-link to="/user/login" tag="li">登录</router-link>
            <router-link to="/user/register" tag="li">注册</router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="scss">
  #header-container {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 60px;
    background-color: #00c3ff;
    .header {
      display: flex;
      justify-content: space-between;
      color: #fff;
      margin: 0 auto;
      width: 1200px;
      .left {
        display: flex;
        align-items: center;
        .nav {
          display: flex;
          margin: 0 100px;
          width: 210px;
          font-size: 16px;
          height: 100%;
          li {
            flex: 1;
            text-align: center;
            cursor: pointer;
            line-height: 60px;
            &:hover {
              background-color: #2eceff;
            }
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        .search {
          position: relative;
          width: 200px;
          input {
            width: 70%;
            height: 30px;
            border: none;
            background-color: #38d0ff;
            border-radius: 20px;
            padding: 0 14px;
            color: #fff;
            font-size: 16px;
            transition: width 0.3s;
            float: right;
            &:focus {
              width: 100%;
            }
          }
          .iconfont {
            position: absolute;
            right: 12px;
            top: 8px;
          }
        }
        .user {
          margin-left: 40px;
          ul {
            display: flex;
            font-size: 13px;
            li {
              cursor: pointer;
              line-height: 60px;
              padding: 0 12px;
              &:hover {
                background-color: #2eceff;
              }
            }
          }
        }
      }
    }
  }
</style>
