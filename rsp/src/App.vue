<template>
  <div id="app">
    <Header></Header>
    <div class="container">
111
    </div>
    <router-view/>
  </div>
</template>
<script>
  import Header from './components/Header'
  export default {
    name: "App",
    components: {
      Header
    }
  }
</script>
<style scoped lang="scss">
  #app {
    background-color: #f0f1f5;
    .container {
      width: 1200px;
      margin: 60px auto 0 auto;
      height: 2000px;
      background-color: #fff;
    }
  }
</style>
