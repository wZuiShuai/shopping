<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev" @click="setPageNo(pageNo - 1)" v-show="pageNo !== 1">
          <a>«上一页</a>
        </li>
        <li :class="{active:pageNo == 1}" v-if="startNumAndEndNum.start > 1" @click="setPageNo(1)">
          <a>1</a>
        </li>
        <li class="dotted" v-if="startNumAndEndNum.start > 2">
          <span>...</span>
        </li>

        <li
          v-for="(num, index) in startAndEndArray"
          :key="index"
           @click="setPageNo(num)"
            :class="{active:pageNo == num}"
        >
          <a>{{ num }}</a>
        </li>

        <li class="dotted" v-if="startNumAndEndNum.end < totalPagin - 1">
          <span>...</span>
        </li>
        <li v-if="startNumAndEndNum.end < totalPagin" @click="setPageNo(totalPagin)"  :class="{active:pageNo == totalPagin}">
          <a>{{ totalPagin }}</a>
        </li>

        <li class="next"  @click="setPageNo(pageNo + 1)" v-show="pageNo !== totalPagin">
          <a>下一页»</a>
        </li>
      </ul>
      <div>
        <span>共{{ totalPagin }}页&nbsp;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagin",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPagin() {
      return Math.ceil(this.total / this.pageSize);
    },
    startNumAndEndNum() {
      let { pageNo, totalPagin, continues } = this;
      let start = 0;
      let end = 0;
      if (totalPagin < continues) {
        start = 1;
        end = totalPagin;
      } else {
        start = pageNo - parseInt(continues / 2);
        end = pageNo + parseInt(continues / 2);
      }
      if (start < 1) {
        start = 1;
        end = continues;
      }
      if (end > totalPagin) {
        end = totalPagin;
        start = totalPagin - continues + 1;
      }
      return { start, end };
    },
    startAndEndArray(){
      let array = []
      let {start,end} = this.startNumAndEndNum;
      for(let i = start;i<=end;i++){
        array.push(i);
      }
      return array
    }
  },
  methods: {
    setPageNo(pageNo){
      this.$emit('getPageNo',pageNo)
    }
  },
};
</script>

<style lang="less" scoped>
.sui-pagination {
  margin: 18px 0;

  ul {
    margin-left: 0;
    margin-bottom: 0;
    vertical-align: middle;
    width: 700px;
    float: left;

    li {
      line-height: 18px;
      display: inline-block;
      cursor: pointer;
      a {
        position: relative;
        float: left;
        line-height: 18px;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #e0e9ee;
        margin-left: -1px;
        font-size: 14px;
        padding: 9px 18px;
        color: #333;
      }

      &.active {
        a {
          background-color: skyblue;
          color: #fff;
          cursor: default;
        }
      }

      &.prev {
        a {
          background-color: #fafafa;
        }
      }

      &.disabled {
        a {
          color: #999;
          cursor: default;
        }
      }

      &.dotted {
        span {
          margin-left: -1px;
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          font-size: 14px;
          border: 0;
          padding: 9px 18px;
          color: #333;
        }
      }

      &.next {
        a {
          background-color: #fafafa;
        }
      }
    }
  }

  div {
    color: #333;
    font-size: 14px;
    float: right;
    width: 241px;
  }
}
</style>
