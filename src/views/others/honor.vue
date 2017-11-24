<template>
  <section class="page_honor">
    <p class="title">品牌荣誉</p>
    <div v-for="item in honorList" class="honor_item l" :key="item.$index">
        <img class="l" :src="item.image"  alt="">
        <p>{{item.title}}</p>
    </div>
  </section>
</template>
<script>
import "./index.less";
import * as service from "./service.js";
export default {
  data() {
    return {
      title: "", // 标题
      honorList: [] //内容
    };
  },
  mounted() {
    this.getHonorList();
  },
  methods: {
    // 品牌荣誉
    getHonorList() {
      service.getHonorContent().then(res => {
        console.log(res);
        this.honorList = res.data;
      });
    }
  }
};
</script>