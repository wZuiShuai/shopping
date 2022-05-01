<template>
  <div class="floor">
            <div class="py-container">
                <div class="title clearfix">
                    <h3 class="fl">{{floor.name}}</h3>
                    <div class="fr">
                        <ul class="nav-tabs clearfix">
                            <li class="active" v-for="(title,index) in floor.navList" :key="index">
                                <a href="#tab1" data-toggle="tab">{{title.text}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tab-content">
                    <div class="tab-pane">
                        <div class="floor-1">
                            <div class="blockgary">
                                <ul class="jd-list">
                                    <li v-for="(text,index) in floor.keywords" :key="index">{{text}}</li>
                                </ul>
                                <img :src="floor.imgUrl" />
                            </div>
                            <div class="floorBanner">
                                <div class="swiper-container" ref="floor1Swiper">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-for="carousel in floor.carouselList" :key="carousel.id">
                                            <img :src="carousel.imgUrl">
                                        </div>
                                        <!-- <div class="swiper-slide">
                                            <img src="./images/floor-1-b02.png">
                                        </div>
                                        <div class="swiper-slide">
                                            <img src="./images/floor-1-b03.png">
                                        </div> -->
                                    </div>
                                    <!-- 如果需要分页器 -->
                                    <div class="swiper-pagination"></div>

                                    <!-- 如果需要导航按钮 -->
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img :src="floor.recommendList[0]" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img :src="floor.recommendList[1]" />
                                </div>
                            </div>
                            <div class="split center">
                                <img :src="floor.bigImg" />
                            </div>
                            <div class="split">
                                <span class="floor-x-line"></span>
                                <div class="floor-conver-pit">
                                    <img :src="floor.recommendList[2]" />
                                </div>
                                <div class="floor-conver-pit">
                                    <img :src="floor.recommendList[3]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import Swiper from 'swiper'
export default {
name:'Floor',
props:['floor'],
mounted() {
  new Swiper(this.$refs.floor1Swiper, {
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
},
// watch: {
//     floor: {
//       handler() {
//         this.$nextTick(() => {
//           new Swiper(this.$refs.floor1Swiper, {
//             loop: true, // 循环模式选项

//             // 如果需要分页器
//             pagination: {
//               el: ".swiper-pagination",
//               clickable: true,
//             },

//             // 如果需要前进后退按钮
//             navigation: {
//               nextEl: ".swiper-button-next",
//               prevEl: ".swiper-button-prev",
//             },
//           });
//         });
//       },
//     },
//   },
}
</script>

<style scoped>
.floor {
  margin-top: 15px;
}
.floor .py-container {
  width: 1200px;
  margin: 0 auto;
}
.floor .py-container .title .fl {
  float: left;
  color: #c81623;
  font-size: 20px;
  line-height: 30px;
  margin: 9px 0;
  font-weight: 700;
}
.floor .py-container .title .fr {
  float: right;
}
.floor .py-container .title .fr .nav-tabs {
  margin: 10px 0 0;
  display: inline-block;
}
.floor .py-container .title .fr .nav-tabs li {
  float: left;
  line-height: 18px;
}
.floor .py-container .title .fr .nav-tabs li a {
  padding-top: 1px;
  font-weight: 400;
  background-color: #fff;
}
.floor .py-container .title .fr .nav-tabs li a::after {
  content: "|";
  padding: 0 10px;
}
.floor .py-container .title .fr .nav-tabs li:nth-child(7) a::after {
  content: "";
}
.floor .py-container .title .fr .nav-tabs li.active a {
  color: #e1251b;
}
.floor .py-container .tab-content {
  border-top: 2px solid #c81623;
  border-bottom: 1px solid #e4e4e4;
}
.floor .py-container .tab-content .tab-pane .floor-1 {
  height: 360px;
  display: flex;
}
.floor .py-container .tab-content .tab-pane .floor-1 .blockgary {
  width: 210px;
  height: 100%;
  background: #f7f7f7;
}
.floor .py-container .tab-content .tab-pane .floor-1 .blockgary .jd-list {
  padding: 15px 0;
  overflow: hidden;
}
.floor .py-container .tab-content .tab-pane .floor-1 .blockgary .jd-list li {
  list-style-type: none;
  float: left;
  width: 40%;
  margin: 0 10px;
  border-bottom: 1px solid #e4e4e4;
  text-align: center;
  line-height: 26px;
}
.floor .py-container .tab-content .tab-pane .floor-1 .blockgary img {
  width: 100%;
}
.floor .py-container .tab-content .tab-pane .floor-1 .floorBanner {
  width: 330px;
  height: 100%;
}
.floor .py-container .tab-content .tab-pane .floor-1 .split {
  width: 220px;
  height: 100%;
  position: relative;
}
.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-x-line {
  position: absolute;
  background: #e4e4e4;
  width: 220px;
  height: 1px;
  top: 180px;
}
.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit {
  width: 100%;
  height: 50%;
}
.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit img {
  width: 100%;
  height: 100%;
  transition: all 400ms;
}
.floor .py-container .tab-content .tab-pane .floor-1 .split .floor-conver-pit img:hover {
  opacity: 0.8;
}
.floor .py-container .tab-content .tab-pane .floor-1 .center {
  border: 1px solid #e4e4e4;
}
</style>