<template>
  <div id="productDetail">
    {{this.$route.params.id}}
  </div>
</template>

<script>
  export default {
    name: 'ProductDetail'
  }
</script>

<style scoped lang="scss">
  #productDetail {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
  }
</style>