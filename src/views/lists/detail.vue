<template>
  <section class="new_detail">
    <ng-breadcrumb separator="/">
      <ng-breadcrumb-item :to="{ path: '/' }">首页</ng-breadcrumb-item>
      <ng-breadcrumb-item :to="{ path: '/lists/'+ $route.params.type}">{{curentCrumb}}</ng-breadcrumb-item>
      <ng-breadcrumb-item>详情</ng-breadcrumb-item>
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
      new_info: {},  // 内容
      curentCrumb:'', 
    }
  },
  mounted () {
    this.getDetail();
  },
  methods: {
    getDetail () {
      let params = this.$route.params;
        if(params.type==='appcase'){
          this.curentCrumb = '应用案例';
        service.getAppcaseById({"id":params.id}).then(res => {
        this.new_info = res.ret;
      })
        }else if(params.type==='knowledge') {
           this.curentCrumb = '装修知识';
          service.getKnowledgeById({"id":params.id}).then(res => {
        this.new_info = res.ret;
      })
        }
    }
  }
}
</script>