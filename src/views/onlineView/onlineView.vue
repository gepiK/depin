<template>
  <div class="online-view">
    <div class="header">
      <p>在线体验</p>
    </div>
    <div class="prod-list">
      <div v-if="!onlineViews.length" class="no-prod">
        <p>未查询到相关产品!</p>
      </div>
      <div v-else v-for="item in onlineViews" :key="item.$index" class="l item">
        <img v-if="item.image" class="img-h l" :src="item.image" alt="">
        <div v-else class="img-h l"></div>
        <div class="l bottom-left">
          <p class="prod-name">
            <span>{{item.title}}</span>
          </p>
        </div>

        <a class="view-detail-btn" :href="item.url" target="_blank">点击查看</a>
      </div>
    </div>
    <ng-pagination class="pagination" @current-change="handleCurrentChange" :currentPage.sync='currentPage' :page-size="16" layout="total, prev, pager, next"
      :total="total">
    </ng-pagination>
    <!-- <view-detail :showDetail="showDetail" :toChild="prod_detail" @close="detailModalClose"></view-detail> -->
  </div>
</template>
<script>
  import './index.less';
  import * as service from '../main/service.js';
  export default {
    data() {
      return {
        onlineViews: [], // 在线体验列表
        total: 0, // 产品数量
      }
    },
    mounted() {
      this.getOnlineViews();

    },
    methods: {
      getOnlineViews(val = 1) {
        service.getOnlineViews({
          pageNo: val,
          pageSize: 9,
        }).then(res => {
          this.onlineViews = res.data;
          this.total = res.count;
        });
      },
      // 分页
      handleCurrentChange(currentPage) {
        this.getOnlineViews(currentPage);

      },
      viewDetail() {

      }
    }

  }

</script>

