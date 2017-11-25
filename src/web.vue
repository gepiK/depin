<style>

</style>
<template>
  <div id='idx' class="container">
    <header class="header">
      <div class="header-top">
        <div class="header-top-content">
          <span>欢迎来到德品·美罗宫</span>
          <span>专注环保品质
            <b>16年</b>
          </span>
        </div>
      </div>
      <div class="header-middle">
        <div class="header-img">
          <img class="img-header" src="./static/header-logo.png" alt="">
        </div>
        <div class="search d6" @mouseover="isForcus=true" @mouseout="isForcus=false">
          <form>
            <span v-if="isIE && !isForcus" class="search-text">输入产品型号 搜素更多</span>
            <input @blur="isForcus=false" @focus="isForcus=true" type="text" placeholder="输入产品型号 搜素更多">
            <button type="submit"></button>
          </form>
        </div>
        <nav class="nav">
          <ng-menu :router="true" theme="default" :default-active="activeIndex" class="ng-menu-demo" mode="horizontal" @select="handleSelect">
            <ng-menu-item index="/">首页</ng-menu-item>
            <ng-menu-item index="/prodList">产品中心</ng-menu-item>
            <ng-menu-item index="/3">在线体验</ng-menu-item>
            <ng-menu-item index="/videoList">品牌视频</ng-menu-item>
            <ng-menu-item index="/newsList">品牌资讯</ng-menu-item>
            <ng-menu-item index="/order">免费量房</ng-menu-item>
            <ng-menu-item index="/lists/appcase">应用案例</ng-menu-item>
            <ng-menu-item index="/8">六大优势</ng-menu-item>
            <ng-menu-item index="/lists/knowledge">装修知识</ng-menu-item>
          </ng-menu>
        </nav>
      </div>
      <div class="swiper-container content-banner">
        <div class="swiper-wrapper">
          <div v-for="item in bannerList" class="swiper-slide" :key="item.id">
            <img class="img-h" :src="item" alt="">
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-banner"></div>
      </div>
    </header>
    <div class="QQbox" id="divQQbox">
      <div id="divMenu">
        <a href="javascript:void(0)">
          <img class="img" src="./static/online.fw.png" alt="">
        </a>
        <a href="javascript:void(0)">
          <img class="img" src="./static/online2.fw.png" alt="">
        </a>
        <a href="javascript:void(0)">
          <img class="img" src="./static/online3.fw.png" alt="">
        </a>
        <a href="javascript:void(0)">
          <img class="img" src="./static/online4.fw.png" alt="">
        </a>
        <a id="goTop" href="#">
          <img class="img" src="./static/online5.fw.png" alt="">
        </a>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="about">
      <section class="about-1">
        <img style="width:95%" src="./static/about-1.png" alt="">
      </section>
      <div class="about-2">

        <div class="about-content horizontally">
          <ul>
            <li class="horizontally ablout-item">
              <div class="about-content-title">
                <b>关于我们</b>
              </div>
              <ul>

                <li class="about-content-item">
                  <router-link to="/about">公司简介</router-link>
                </li>
                <li class="about-content-item">
                  <router-link to="/mission">品牌使命</router-link>
                </li>
                <li class="about-content-item">
                  <router-link to="/history">发展历程</router-link>
                </li>
                <li class="about-content-item">
                  <router-link to="/duty">企业责任</router-link>
                </li>
                <li class="about-content-item">
                  <router-link to="/honor">品牌荣誉</router-link>
                </li>
              </ul>
            </li>
            <li class="horizontally ablout-item">
              <div class="about-content-title">
                <b>产品中心</b>
              </div>
              <ul>
                <li v-for="item in bigCate" class="about-content-item" :key="item.$index">
                  <router-link :to="'/prodList/'+item.id">{{item.name}}</router-link>
                </li>
              </ul>
            </li>
            <li class="horizontally ablout-item">
              <div class="about-content-title">
                <b>招商加盟</b>
              </div>
              <ul>
                <li class="about-content-item">
                  <router-link to="/joinus">招商政策</router-link>
                </li>
                <li class="about-content-item">
                  <router-link to="/joinus">加盟流程</router-link>
                </li>
                <li class="about-content-item">
                  <router-link to="/joinus">申请加盟</router-link>
                </li>
              </ul>
            </li>
            <li class="horizontally">
              <div class="about-content-title">
                <b>联系我们</b>
              </div>
              <ul>
                <li class="about-content-item">
                  <router-link to="/linkme">联系方式</router-link>
                </li>
                <li class="about-content-item">
                  <router-link to="/linkme">交通路线</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="qrcode horizontally">
          <img class="img" src="./static/qr.png" alt="">
          <p>德品地板官方微信</p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div>
        <div>
          <p>
            德品 · 美罗宫&nbsp;&nbsp;中国地板十大品牌
          </p>
        </div>
        <div class="footer-content">
          <a href="">招聘发布</a>
          <span>|</span>
          <a href="">友情链接</a>
          <span>|</span>
          <a href="">店面查询</a>
          <span>|</span>
          <a href="">经销商登录</a>
        </div>
        <div class="copyright">
          <p>COPYRIGHT©2015 苏州市一品木业有限公司 ALL RIGHTS RESEVERVED 苏ICP备16061331号</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import common from "js/common";
import * as filters from "js/filters";
import * as service from "js/service";
import "src/styles/component/index.less";
export default {
  data () {
    return {
      activeIndex: location.pathname,
      bannerList: [] // 轮播图
    };
  },
  computed: {},
  watch: {
    $route (route) {
      let path = route.path;
      if (path.includes("prodList")) path = "/prodList";
      this.activeIndex = path;
    }
  },
  mounted () {
    this.queryBannerList();
    this.getBigcate();
  },
  created () {
    // //右侧滑动
    $(window).on("scroll", function () {
      var offsetHeight = $(".QQbox").offset().top + $(".QQbox").height();
      var bannerOffsetHeight =
        $(".content-banner").offset().top + $(".content-banner").height();
      var offset = $(window).scrollTop();
      $(".QQbox").css({
        top: bannerOffsetHeight + "px"
      });
      if (offset <= bannerOffsetHeight) {
        $(".QQbox").css({
          top: bannerOffsetHeight + "px"
        });
        $(".QQbox").css({
          position: "absolute"
        });
      } else {
        $(".QQbox").css({
          top: "0"
        });
        $(".QQbox").css({
          position: "fixed"
        });
      }
    });
  },
  computed: {
    isIE () {
      return filters.matchIe();
    }
  },
  methods: {
    linkTo (num) {
      this.isActive_1 = this.isActive_2 = this.isActive_3 = this.isActive_4 = this.isActive_5 = this.isActive_6 =
        this.isActive_7 = false;
      this["isActive_" + num] = true;
    },
    handleSelect (val) {
      console.log(val);
    },
    // 获取banner图
    queryBannerList () {
      service.queryBannerList().then(res => {
        this.bannerList = res;
      });
    },
    getBigcate () {
      service.getBigcate().then(res => {
        this.bigCate = res.ret;
      });
    }
  }
};

</script>
