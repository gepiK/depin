<template>
  <section class="new_detail">
    <ng-breadcrumb separator="/">
      <ng-breadcrumb-item :to="{ path: '/' }">首页</ng-breadcrumb-item>
      <ng-breadcrumb-item :to="{ path: '/newsList' }">资讯列表</ng-breadcrumb-item>
      <ng-breadcrumb-item>资讯详情</ng-breadcrumb-item>
    </ng-breadcrumb>
    <div class="new_content">
      <p class="title">{{new_info.title}}</p>
      <p class="time">
        <i class="el-icon-time"></i>{{new_info.created}}</p>
      <div class="new_detail_content" v-html="new_info.content"></div>
    </div>
  </section>
</template>
<script>
import './index.less';
import * as service from './service.js';
export default {
  data () {
    return {
      new_info: {},  // 资讯内容
    }
  },
  mounted () {
    this.getNewDetail();
  },
  methods: {
    getNewDetail () {
      service.getNewDetail(this.$route.params).then(res => {
        this.new_info = res.ret;
      })
    }
  }
}
</script>