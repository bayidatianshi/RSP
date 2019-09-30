<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <router-view/>
  </div>
</template>
<script>
  import Header from './components/Header'
  import Main from './components/Main'
  export default {
    name: "App",
    components: {
      Header,
      Main
    }
  }
</script>
