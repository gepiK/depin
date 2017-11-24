<template>
  <section class="page_video">
    <p class="title">品牌视频</p>
    <div v-for="item in videoList" class="video_item l" :key="item.$index">
      <img class="l" :src="item.image" alt="">
<div class="mt-30 box-text cl">
  <div class="left-box f-l">
    <span>宣传视频
      <br>
      <span>VIDEO</span>
    </span>
  </div>
  <div class="right-box f-l">
    <div class="sp-time">
      <i class="Hui-iconfont Hui-iconfont-shijian"></i> 2017-11-03
      <i class="Hui-iconfont Hui-iconfont-yanjing ml-10"></i> 0 </div>
    <div class="sp-title mt-10 f-16">大艺树地板"最佳主题创意营销奖"</div>
    <div class="sp-desc mt-10"></div>
  </div>
</div>
    </div>
  </section>
</template>
<script>
import * as service from "./service.js";
export default {
  data() {
    return {
      title: "", // 标题
      videoList: [] //内容
    };
  },
  mounted() {
    this.getvideoList();
  },
  methods: {
    // 品牌荣誉
    getvideoList() {
      service.getVideoList().then(res => {
        console.log(res);
        this.videoList = res.data;
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>

