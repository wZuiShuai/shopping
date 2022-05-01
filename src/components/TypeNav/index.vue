<template>
  <div class="type-nav">
    <div class="container">
      <div class="hh" @mouseenter="enterShow" @mouseleave="leaveShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click="goSearch">
              <div class="item" v-for="v1 in value" :key="v1.categoryId">
                <h3>
                  <a
                    :data-categoryName="v1.categoryName"
                    :data-categoryId1="v1.categoryId"
                    >{{ v1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div
                    class="subitem"
                    v-for="v2 in v1.categoryChild"
                    :key="v2.categoryId"
                  >
                    <dl class="fore">
                      <dt>
                        <a
                          :data-categoryName="v2.categoryName"
                          :data-categoryId2="v2.categoryId"
                          >{{ v2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="v3 in v2.categoryChild" :key="v3.categoryId">
                          <a
                            :data-categoryName="v3.categoryName"
                            :data-categoryId3="v3.categoryId"
                            >{{ v3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
  data() {
    return {
      show: true,
    };
  },
  mounted() {
    if (this.$route.path != "/home") {
      this.show = false;
    }
  },
  computed: {
    ...mapState({
      value: (state) => {
        return state.home.value;
      },
    }),
  },
  methods: {
    goSearch(event) {
      let node = event.target;
      let { categoryname, categoryid1, categoryid2, categoryid3 } =
        node.dataset;
      if (categoryname) {
        //路由位置
        let loction = { name: "search" };
        let query = { categoryName: categoryname };

        if (categoryid1) {
          query.categoryId1 = categoryid1;
        } else if (categoryid2) {
          query.categoryId2 = categoryid2;
        } else if (categoryid3) {
          query.categoryId3 = categoryid3;
        }

        if(this.$route.params){
          loction.params = this.$route.params
          loction.query = query;
          //路由跳转
          this.$router.push(loction);
        }
        //不知道为什么可以省略!!!!!!
        //因为if判断空对象为true
        // else{
        //   loction.query = query;
        //   //路由跳转
        //   this.$router.push(loction);
        // }
        //不知道为什么可以省略!!!!!!
      }
    },
    enterShow() {
      this.show = true;
    },
    leaveShow() {
      if (this.$route.path != "/home") {
        this.show = false;
      }
    },
  },
};
</script>

<style scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;
}
.type-nav .container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.type-nav .container .all {
  width: 210px;
  height: 45px;
  background-color: #e1251b;
  line-height: 45px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
}
.type-nav .container .nav a {
  height: 45px;
  margin: 0 22px;
  line-height: 45px;
  font-size: 16px;
  color: #333;
}
.type-nav .container .sort {
  left: 0;
  top: 45px;
  width: 210px;
  height: 461px;
  position: absolute;
  background: #fafafa;
  z-index: 999;
}
.type-nav .container .sort .all-sort-list2 .item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
}
.type-nav .container .sort .all-sort-list2 .item h3 a {
  color: #333;
}
.type-nav .container .sort .all-sort-list2 .item .item-list {
  display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  background: #f7f7f7;
  left: 210px;
  border: 1px solid #ddd;
  top: 0;
  z-index: 9999 !important;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl {
  border-top: 1px solid #eee;
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl.fore {
  border-top: 0;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dt {
  float: left;
  width: 54px;
  line-height: 22px;
  text-align: right;
  padding: 3px 6px 0 0;
  font-weight: 700;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd {
  float: left;
  width: 415px;
  padding: 3px 0 0;
  overflow: hidden;
}
.type-nav .container .sort .all-sort-list2 .item .item-list .subitem dl dd em {
  float: left;
  height: 14px;
  line-height: 14px;
  padding: 0 8px;
  margin-top: 5px;
  border-left: 1px solid #ccc;
}
.type-nav .container .sort .all-sort-list2 .item:hover .item-list {
  display: block;
}
.hh .item:hover {
  background-color: pink;
}
.sort-enter-active{
  animation: sort 0.5s linear;
}
@keyframes sort{
  from{
    height: 0;
  }
  to{
    height: 461px;
  }
}

</style>