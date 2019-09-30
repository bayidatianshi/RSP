<template>
  <div id="main">
    <div class="aside">
      <ul class="type">
        <li class="type-item" v-for="(item, index) of sort" :key="index">
          <h2>{{item.type}}</h2>
          <ul class="sort">
            <li class="sort-item" :class="{active: activeSortId === val.id}" v-for="val of item.children" :key="val.id" @click="activeSort(val.id)">{{val.value}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="content">
      <Card v-for="(item, index) of cards" :key="index" :product="item"></Card>
    </div>
  </div>
</template>

<script>
  import Card from './Card'
  export default {
    name: "Main",
    data() {
      return {
        cards: [
          {
            src: 'https://upload-bbs.mihoyo.com/upload/2019/09/26/73565533/b66fb1cef11ef5cf8dd3787b7489fedd_5948753857591750018.png?x-oss-process=image/resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,png',
            productName: 'aaa',
            productDescribe: 'aaaa',
            productPrice: 'aaa'
          },
          {
            src: 'https://upload-bbs.mihoyo.com/upload/2019/09/26/73565533/b66fb1cef11ef5cf8dd3787b7489fedd_5948753857591750018.png?x-oss-process=image/resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,png',
            productName: 'aaa',
            productDescribe: 'aaaa',
            productPrice: 'aaa'
          },
          {
            src: 'https://upload-bbs.mihoyo.com/upload/2019/09/26/73565533/b66fb1cef11ef5cf8dd3787b7489fedd_5948753857591750018.png?x-oss-process=image/resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,png',
            productName: 'aaa',
            productDescribe: 'aaaa',
            productPrice: 'aaa'
          },
          {
            src: 'https://upload-bbs.mihoyo.com/upload/2019/09/26/73565533/b66fb1cef11ef5cf8dd3787b7489fedd_5948753857591750018.png?x-oss-process=image/resize,s_500/quality,q_80/auto-orient,0/interlace,1/format,png',
            productName: 'aaa',
            productDescribe: 'aaaa',
            productPrice: 'aaa'
          }
        ],
        activeSortId: -1,
        sort: [
          {
            type: '♂学习',
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
            type: '♂生活',
            children: [
              {
                value: '日用品',
                id: 3
              },
              {
                value: '数码',
                id: 4
              },
              {
                value: '内衣',
                id: 5
              },
              {
                value: '来♂',
                id: 6
              }
            ]
          }
        ]
      }
    },
    methods: {
      activeSort(id) {
        this.activeSortId = id;
      }
    },
    components: {
      Card
    }
  }
</script>

<style scoped lang="scss">
  #main {
    width: 1100px;
    margin: 60px auto 0 auto;
    .aside {
      position: fixed;
      left: calc(50vw-600px);
      top: 60px;
      bottom: 0;
      width: 250px;
      border-right: 1px solid #eee;
      .type {
        .type-item {
          h2 {
            margin: 30px 0;
          }
          .sort {
            .sort-item {
              margin: 6px 0;
              padding-left: 20px;
              cursor: pointer;
              line-height: 40px;
              &:hover {
                background-color: #00c3ff;
                color: #fff!important;
              }
              &.active {
                color: #00c3ff;
              }
            }
          }
        }
      }
    }
    .content {
      margin-left: 250px;
      padding: 50px 0 0 30px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
</style>
