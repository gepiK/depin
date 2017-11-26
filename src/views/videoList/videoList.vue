<template>
  <section class="page_video">
    <p class="title">品牌视频</p>
    <div v-for="item in videoList" class="video_item l" :key="item.$index">
      <video class="l" :src="item.propUrl" controls="controls"></video>

      <div class="mt-30 box-text cl">
        <div class="left-box f-l">
          <span>宣传视频
            <br>
            <span>VIDEO</span>
          </span>
        </div>
        <div class="right-box f-l">
          <div class="sp-time">
            <i class="Hui-iconfont Hui-iconfont-shijian"></i> {{item.propTime}}
          </div>
          <div class="sp-title mt-10 f-16">{{item.propName}}</div>
          <div class="sp-desc mt-10"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import * as service from "./service.js";
export default {
  data () {
    return {
      title: "", // 标题
      videoList: [] //内容
    };
  },
  mounted () {
    this.getvideoList();
  },
  methods: {
    // 视频接口
    getvideoList () {
      service.getVideoList().then(res => {
        this.videoList = res.ret;
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import './index.less';
</style>

