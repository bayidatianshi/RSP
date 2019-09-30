<template>
  <div class="card">
    <!-- 解决不同比例图片正常显示 -->
    <div class="img-container">
      <div :style="{background: 'url(' + product.src + ') center center no-repeat', backgroundSize: 'cover'}"></div>
    </div>
    <div class="info">
      <div class="detail">
        <p class="name">{{product.productName}}</p>
        <p class="descibe">{{product.productDescribe}}</p>
      </div>
      <div class="price">￥{{product.productPrice}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    background: white;
    box-shadow: 0 0 10px 3px #ccc;
    width: 230px;
    margin-bottom: 40px;
    cursor: pointer;
    .img-container {
      height: 180px;
      overflow: hidden;
      div {
        height: 100%;
        transition: transform .4s;
        &:hover {
          transform: scale(1.2)
        }
      }
    }
    .info {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      .name {
        font-size: 18px;
        margin-bottom: 6px;
      }
      .descibe {
        font-size: 12px;
        width: 130px;
        overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis;
        color: #888;
        // 文字超出两行省略
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .price {
        color: #4ea4dc;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
</style>
