<template>
  <section class="goods-list">
    <ng-tabs tab-position="top" v-model="activeName">
      <ng-tab-pane v-for="item in goodsList" :label="item.title" :key="item.$index" :name="item.$index">
        <div class="l pane-left">
          <img :src="item.image" alt="">
        </div>
        <div class="l pane-right">
          <h2>{{item.createdTime}}</h2>
          <p>{{item.url}}</p>
        </div>
      </ng-tab-pane>
    </ng-tabs>
  </section>
</template>
<script>
import * as service from "./service.js";
export default {
  data () {
    return {
      title: "", // 标题
      goodsList: [], //内容
      activeName:'0', // 当前激活的索引
    };
  },
  mounted () {
    this.getGoodsList();
    if(this.$route.params){
      this.activeName=this.$route.params.index || '0';
    }else {
      this.activeName='0';
    }
  },
  methods: {
    // 视频接口
    getGoodsList () {
      service.getGoodsList().then(res => {
        this.goodsList = res.ret;
      });
    }
  }
};
</script>
<style lang="less">
@import './index.less';
</style>

