<template>
  <section class="news">
    <div class="news_list">
      <div v-for="item in newsList" :key="item.$index" class="news-item">
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
            <router-link :to="'/newDetail/'+item.id">Read More >></router-link>
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
      newsList: [], // 资讯列表
      listCount: 0, // 列表数量
    }
  },
  mounted () {
    this.getNewsList();
  },
  methods: {
    viewNewsDetail () {
      console.log('点击详情')
    },
    handleCurrentChange (val) {
      document.documentElement.scrollTop ="669";
      this.getNewsList(val);
    },
    getNewsList (curPage = 1) {
      service.getNewsList({ pageNo: curPage, pageSize: 5 }).then(res => {
        this.newsList = res.data;
        this.listCount = res.count;
      })
    }
  }
}
</script>