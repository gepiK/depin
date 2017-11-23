<template>
  <section class="page_about">
    <div class="new_content">
      <p class="title">{{title}}</p>
      <div class="page_about_content" v-html="content"></div>
    </div>
  </section>
</template>
<script>
import './index.less';
import * as service from './service.js';
export default {
  data () {
    return {
      title:'', // 标题
      content: '',  //内容
    }
  },
  mounted () {
this.changeRoute();
  },
    watch:{
    $route() {
      this.changeRoute();
    }
  } , 
  methods: {
    // 切换路由
    changeRoute(){
    let path = this.$route.path;
    if(path.includes('about')){
      this.title = '公司简介';
    this.getAboutContent();
    }else if(path.includes('mission')){
       this.title = '品牌使命';
      this.getMissionContent();
    }else if(path.includes('history')){
       this.title = '发展历程';
      this.getHistoryContent();
    }else if(path.includes('duty')){
       this.title = '企业责任';
      this.getDutyContent();
    }else if(path.includes('joinus')){
       this.title = '招商加盟';
      this.getJoinusContent();
    }
    },
    // 简介内容的接口
    getAboutContent () {
      service.getAboutContent().then(res => {
        this.content = res.ret.content;
      })
    },
    // 品牌使命的接口
    getMissionContent () {
      service.getMissionContent().then(res => {
        this.content = res.ret.content;
      })
    },
        // 发展历程的接口
    getHistoryContent () {
      service.getHistoryContent().then(res => {
        this.content = res.ret.content;
      })
    },
            // 企业责任的接口
    getDutyContent () {
      service.getDutyContent().then(res => {
        this.content = res.ret.content;
      })
    },
                // 招商加盟的接口
    getJoinusContent () {
      service.getJoinusContent().then(res => {
        this.content = res.ret.content;
      })
    },
  }
}
</script>