<template>
  <div id="productDetail">
    <div class="product-container">
      <div class="img">
        <img :src="product.src" alt="">
      </div>
      <div class="product-info">
        <h2 class="product-name">{{product.productName}}</h2>
        <p class="describe">{{product.productDescribe}}</p>
        <p class="price"><span>￥</span>{{product.productPrice}}</p>
        <div class="master-container">
          由
          <div class="master">
            <img :src="product.master.avatar" alt="">
            <span class="name">{{product.master.name}}</span>
          </div>
          分享
        </div>
        <p class="date">上架日期：{{new Date(product.date).toLocaleString()}}</p>
        <div class="buy">想要</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductDetail',
    data() {
      return {
        product: {}
      }
    },
    methods: {
      getProductDetail() {
        // this.$route.params.id
        const data = {
          id: '10001',
          src: 'https://img12.360buyimg.com/n1/s450x450_jfs/t22261/303/1092680464/16580/fb734e0c/5b1f39c1Ndec00e2f.jpg',
          productName: 'Apple Pencil',
          productDescribe: 'Apple Pencil 手写笔MK0C2CH(适用2018款9.7英寸iPad/2019款iPad Air/10.5英寸和2017款12.9英寸iPad Pro)',
          productPrice: '688',
          type: 0,
          date: 1572836395720,
          master: {
            name: '比利',
            avatar: 'https://ss0.bdstatic.com/6Ox1bjeh1BF3odCf/it/u=2344778179,4228632848&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=50f469b521d10e118cab7aea92e535df'
          }
        };
        this.product = data;
      }
    },
    created() {
      this.getProductDetail();
    }
  }
</script>

<style scoped lang="scss">
  #productDetail {
    position: fixed;
    left: 0;
    top: 60px;
    bottom: 0;
    right: 0;
    background-color: #fff;
    .product-container {
      width: 1100px;
      margin: 0 auto;
      padding-top: 50px;
      display: flex;
      .img {
        width: 450px;
        height: 450px;
        overflow: hidden;
        background-color: #f1f1f1;
        border: 1px solid #f1f1f1;
        display: flex;
        align-items: center;
        flex: 0 0 450px;
        margin-right: 20px;
        img {
          width: 100%;
        }
      }
      .product-info {
        flex: 1;
        .product-name {
          color: #444;
          font-size: 26px;
          padding-bottom: 10px;
          border-bottom: 1px solid #f1f1f1;
          margin-bottom: 20px;
        }
        .describe {
          line-height: 26px;
          height: 104px;
          color: #666;
        }
        .price {
          font-size: 40px;
          color: #e4393c;
          span {
            font-size: 30px;
          }
        }
        .master-container {
          display: flex;
          align-items: center;
          border-top: 1px solid #f1f1f1;
          padding-top: 10px;
          margin: 30px 0 10px 0;
          .master {
            margin: 0 16px;
            img {
              width: 50px;
              height: 50px;
              border-radius: 50%;
              vertical-align: middle;
              margin-right: 6px;
            }
            .name {
              vertical-align: middle;
              color: #00c3ff;
            }
          }
        }
        .date {
          color: #444;
          font-size: 14px;
          border-bottom: 1px solid #f1f1f1;
          padding-bottom: 10px;
        }
        .buy {
          background-color: #00c3ff;
          color: #fff;
          text-align: center;
          width: 100px;
          height: 50px;
          line-height: 50px;
          font-size: 22px;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 30px;
          &:hover {
            background-color: #00baf3;
          }
        }
      }
    }
  }
</style>