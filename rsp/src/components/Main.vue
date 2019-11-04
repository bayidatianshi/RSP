<template>
  <div id="main">
    <div class="aside">
      <ul class="type">
        <li class="type-item" v-for="(item, index) of sort" :key="index">
          <h2><span class="iconfont title-icon" :class="item.icon"></span>{{item.type}}<span class="down-icon iconfont iconxia"></span></h2>
          <ul class="sort">
            <li class="sort-item" :class="{active: activeSortId === val.id}" v-for="val of item.children" :key="val.id" @click="activeSort(val.id)">{{val.value}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content">
      <div class="sort-container">
        <ul>
          <li class="sort-item" @click="setSortItem('date')" :class="{active: this.activeOrder.sortItem === 'date'}">时间</li>
          <li class="sort-item" @click="setSortItem('productPrice')" :class="{active: this.activeOrder.sortItem === 'productPrice'}">价格</li>
        </ul>
        <div class="order">
          <span @click="setOrder(true)" :class="{active: this.activeOrder.up}">升序<i class="iconfont iconshangsheng"></i></span>
          <span @click="setOrder(false)" :class="{active: this.activeOrder.up === false}">降序<i class="iconfont iconxiajiang"></i></span>
        </div>
      </div>
      <ul class="product">
        <li v-for="item of showCards" :key="item.id" @click="jump(item.id)" class="product-item">
          <Card :product="item"></Card>
        </li>
        <li class="empty-item"></li>
      </ul>
      <p v-show="!showCards.length" class="tip">暂无结果</p>
    </div>
  </div>
</template>

<script>
  const data = [
    {
      id: '10001',
      src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2713734688,2538797998&fm=26&gp=0.jpg',
      productName: '书',
      productDescribe: '好康的书',
      productPrice: '23',
      type: 0,
      date: 1572836395720
    },
    {
      id: '10002',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1599032799,1203341470&fm=26&gp=0.jpg',
      productName: '笔记',
      productDescribe: '好康的笔记',
      productPrice: '5',
      type: 1,
      date: 1572830892746
    },
    {
      id: '10003',
      src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3193070204,3768224056&fm=26&gp=0.jpg',
      productName: '手机',
      productDescribe: '好康的手机',
      productPrice: '1200',
      type: 4,
      date: 1572832847591
    },
    {
      id: '10004',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1632115188,2683063019&fm=26&gp=0.jpg',
      productName: '平板电脑',
      productDescribe: '好康的平板电脑',
      productPrice: '800',
      type: 4,
      date: 1572834329375
    },
    {
      id: '10005',
      src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3094009250,1382814167&fm=26&gp=0.jpg',
      productName: '书',
      productDescribe: '好康的书',
      productPrice: '30',
      type: 0,
      date: 1572831094836
    },
    {
      id: '10006',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246205096,1287038817&fm=26&gp=0.jpg',
      productName: '相机',
      productDescribe: '好康的相机',
      productPrice: '1300',
      type: 4,
      date: 1572835483820
    },
    {
      id: '10007',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246205096,1287038817&fm=26&gp=0.jpg',
      productName: '相机',
      productDescribe: '好康的相机',
      productPrice: '1500',
      type: 4,
      date: 1572831794737
    },
    {
      id: '10008',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246205096,1287038817&fm=26&gp=0.jpg',
      productName: '相机',
      productDescribe: '好康的相机',
      productPrice: '2200',
      type: 4,
      date: 1572830375961
    },
    {
      id: '10009',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246205096,1287038817&fm=26&gp=0.jpg',
      productName: '相机',
      productDescribe: '好康的相机',
      productPrice: '1100',
      type: 4,
      date: 1572835109395
    },
    {
      id: '10010',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246205096,1287038817&fm=26&gp=0.jpg',
      productName: '相机',
      productDescribe: '好康的相机',
      productPrice: '1150',
      type: 4,
      date: 1572838396719
    },
    {
      id: '10011',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246205096,1287038817&fm=26&gp=0.jpg',
      productName: '相机',
      productDescribe: '好康的相机',
      productPrice: '1700',
      type: 4,
      date: 1572831082641
    },
    {
      id: '10012',
      src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246205096,1287038817&fm=26&gp=0.jpg',
      productName: '相机',
      productDescribe: '好康的相机',
      productPrice: '2300',
      type: 4,
      date: 1572831394732
    }
  ];
  import Card from './Card'
  export default {
    name: "Main",
    data() {
      return {
        allCards: [],
        showCards: [],
        activeSortId: -1,
        sort: [
          {
            type: '学习',
            icon: 'iconxuexi',
            children: [
              {
                value: '书本',
                id: 0
              },
              {
                value: '笔记',
                id: 1
              },
              {
                value: '文具',
                id: 2
              }
            ]
          },
          {
            type: '生活',
            icon: 'iconshenghuo',
            children: [
              {
                value: '日用品',
                id: 3
              },
              {
                value: '数码',
                id: 4
              }
            ]
          }
        ],
        activeOrder: {
          sortItem: '',
          up: ''
        }
      }
    },
    methods: {
      activeSort(id) {
        this.activeSortId = id;
        this.showCards = this.allCards.filter(item => item.type === id);
      },
      jump(id) {
        this.$router.push(`/product/${id}`);
      },
      setSortItem(val) {
        this.activeOrder.sortItem = val;
      },
      setOrder(bool) {
        this.activeOrder.up = bool;
      },
      sortCards(key, up = true) {
        this.showCards.sort((a, b) => up ? a[key] - b[key] : b[key] - a[key]);
      }
    },
    components: {
      Card
    },
    created() {
      this.allCards = data;
      this.showCards = data;
    },
    watch: {
      activeOrder: {
        handler(newVal) {
          if (newVal.sortItem && newVal.up !== '') {
            this.sortCards(newVal.sortItem, newVal.up);
          }
        },
        deep: true
      }
    }
  }
</script>

<style scoped lang="scss">
  #main {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    height: calc(100vh - 60px);
    overflow: hidden;
    .aside {
      flex: 0 0 240px;
      .type {
        margin-top: 30px;
        color: #444;
        .type-item {
          h2 {
            margin-bottom: 16px;
            font-weight: normal;
            position: relative;
            .title-icon {
              font-size: 22px;
              margin-right: 6px;
            }
            .down-icon {
              font-size: 12px;
              position: absolute;
              right: 14px;
              top: 10px;
              color: #777;
            }
          }
          .sort {
            margin-bottom: 30px;
            .sort-item {
              padding-left: 28px;
              cursor: pointer;
              line-height: 44px;
              color: #777;
              &:hover {
                background-color: #5ad3ff!important;
                color: #fff!important;
              }
              &.active {
                color: #00c3ff;
                background-color: #d5f3ff;
              }
            }
          }
        }
      }
    }
    .content {
      flex: 1;
      padding: 30px 30px 0 30px;
      height: 100%;
      overflow: auto;
      border-left: 1px solid #eee;
      border-right: 1px solid #eee;
      .sort-container {
        line-height: 24px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
        ul {
          display: flex;
          justify-content: space-between;
          width: 110px;
          .sort-item {
            border: 1px solid #ddd;
            padding: 0 12px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            &:hover {
              border-color: #00c3ff;
              color: #00c3ff;
            }
            &.active {
              border-color: #00c3ff;
              color: #00c3ff;
            }
          }
        }
        .order {
          font-size: 13px;
          span {
            margin-left: 10px;
            cursor: pointer;
            color: #222;
            .iconfont {
              font-size: 14px;
            }
            &:hover {
              color: #00c3ff;
            }
            &.active {
              color: #00c3ff;
            }
          }
        }
      }
      .product {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-content: flex-start;
        .product-item {
          margin-bottom: 40px;
          cursor: pointer;
          transition: all .2s;
          border-radius: 6px;
          overflow: hidden;
          &:hover {
            box-shadow: 0 0 10px 3px #ccc;
            border-color: #ccc;
            transform: translateY(-6px);
          }
        }
        .empty-item {
          width: 230px;
          height: 0;
        }
      }
      .tip {
        text-align: center;
        font-size: 14px;
        color: #999;
      }
    }
  }
</style>
