<template>
  <section class="lists">
    <div class="news_list">
      <div v-for="item in dataList" :key="item.$index" class="news-item">
        <div class="item-left l">
          <img class="img-h" :src="item.image" alt="">
        </div>
        <div class="item-right l">
          <p class="time">
            <i class="el-icon-time"></i>{{item.created}}</p>
          <h3 style="color:rgb(53,53,53);">{{item.title}}</h3>
          <p class="news-content">
            <span>{{item.subTitle}}</span>
          </p>
          <p class="news-bottom">
            <router-link :to="'/detail/'+type+'/'+item.id">Read More >></router-link>
          </p>
        </div>
      </div>

    </div>
    <ng-pagination class="pagination" @current-change="handleCurrentChange" :page-size="5" layout="total, prev, pager, next" :total="listCount">
    </ng-pagination>
  </section>
</template>
<script>
import './index.less';
import * as service from './service.js';
export default {
  data () {
    return {
      dataList: [], // 资讯列表
      listCount: 0, // 列表数量
      type:'', // 当前列表类型
    }
  },
  mounted () {
  this.getLists();
  },
      watch:{
    $route() {
      this.getLists();
    }
  } , 
  methods: {
    getLists(val){
    let path = this.$route.path;
    console.log(path)
    if(path.includes('knowledge')){
      this.type = 'knowledge';
      this.getKnowledges(val);
    }else if(path.includes('appcase')){
      this.type = 'appcase';
       this.getAppcases(val);
    }
    },
    viewNewsDetail () {
      console.log('点击详情')
    },
    getKnowledges(curPage = 1){
 service.getKnowledges({ pageNo: curPage, pageSize: 5 }).then(res => {
        this.dataList = res.data;
        this.listCount = res.count;
      })
    },
     getAppcases(curPage = 1){
 service.getAppcases({ pageNo: curPage, pageSize: 5 }).then(res => {
        this.dataList = res.data;
        this.listCount = res.count;
      })
    },
    handleCurrentChange (val) {
      document.documentElement.scrollTop ="669";
      this.getLists(val);
    }
  }
}
</script>