<style lang="">


</style>
<template>
  <div>
    <section>
      <div class="cate">
        <div class="cate-item" v-for="item in bigCate" :key="item.id">
          <router-link class="img" tag="img" :src="item.image" :to=" '/prodList/'+item.id"></router-link>
        </div>
      </div>
    </section>
    <section>
      <div class="content-title">
        <div class="title-warp-left"></div>
        <div class="title-t1">
          <b>产品在线3D体验</b>
          <div class="content-title-desc">
            <p>已有{{viewsCount || 0}}位用户进行体验</p>
          </div>
        </div>
        <div class="title-warp-right"></div>
      </div>
      <div class="main-online">
        <div class="item-style img-item-1">
          <a :href="viewUrls[0]" target="_blank">
              <img class="img" :src="onlineViews[0]" alt="">
          </a>
        </div>
        <div class="item-style img-item-1 img-item-1-right">
          <div>
            <a :href="viewUrls[1]" target="_blank">
            <img class="img" :src="onlineViews[1]" alt="">
            </a>
          </div>
          <div class="last">
            <a :href="viewUrls[2]" target="_blank">
            <img class="img img-half" :src="onlineViews[2]" alt="">
             </a>
            <div class="l more">
              <router-link tag="span" to="/onlineView">体验更多</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="content-title">
        <div class="title-warp-left"></div>
        <div class="title-t1">
          <b>品牌视频</b>
          <div class="content-title-desc">
            <p>更直观了解我们</p>
          </div>
        </div>
        <div class="title-warp-right"></div>
      </div>
      <div class="content-video">
        <video v-for="item in videoList" :key="item.$index" class="video" :src="item.propUrl" controls="controls">
          您的浏览器不支持 video 标签。
        </video>
      </div>
    </section>
    <section>
      <div class="content-title more-parent">
        <div class="content-title">
          <div class="title-warp-left"></div>
          <div class="title-t1">
            <b>品牌资讯</b>
            <div class="content-title-desc">
              <p>关注德品·美罗宫，关注行业</p>
            </div>
          </div>
          <div class="title-warp-right"></div>
        </div>
        <router-link to="/newsList">
          <span class="more">
            <b>品牌资讯/了解更多</b>
            <em>MORE</em>
            <i class="el-icon-caret-right"></i>
          </span>
        </router-link>
      </div>
      <div class="swiper-container content-s2 clearfix">
        <div class="swiper-wrapper">
          <div v-for="item in newsList" class="swiper-slide" :key="item.id">
            <div class="l news-pic-warp">
              <img class="news-pic" :src="item.image" alt="">
            </div>
            <div class="news-content">
              <p class="news-title">
                <router-link tag="b" :to="'/newDetail/'+item.id">{{item.title}}</router-link>
              </p>
              <p class="l">——————</p>
              <span class="l news-time">{{item.created}}</span>
              <p class="news-detail">{{item.subTitle}}</p>
            </div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-s2"></div>
      </div>
    </section>
    <section id="js-order">
      <div class="content-title">
        <div class="title-warp-left"></div>
        <div class="title-t1">
          <b>免费预约量房</b>
          <div class="content-title-desc">
            <p>累计{{orderConut|| 0}}预约</p>
          </div>
        </div>
        <div class="title-warp-right"></div>
      </div>
      <div class="content-free-wrap">
        <div class="content-free-wrap_left">
          <div class="p7">
            <img class="img" src="../../static/p7.jpg" alt="">
          </div>
          <ng-form class="order-form" ref="userForm" :model="formData" :rules="formRules">
            <ng-form-item class="order-form-item" prop="realName">
              <span v-if="isIE">您的姓名</span>
              <ng-input v-model="formData.realName" placeholder="您的姓名"></ng-input>
            </ng-form-item>
            <ng-form-item class="order-form-item" prop="tel">
              <span v-if="isIE">手机号码</span>
              <ng-input v-model.number="formData.tel" width="50%" placeholder="手机号码"></ng-input>
            </ng-form-item>
            <ng-form-item class="order-form-item" prop="provinceCode">
              <span v-if="isIE">请选择省份</span>
              <ng-select class="form-item-select" v-model="formData.provinceCode" width="50%" placeholder="请选择省份" @change="provinceChange">
                <ng-option v-for="item in provinces" :key="item.areaid" :label="item.areaname" :value="item.areaid">
                </ng-option>
              </ng-select>
            </ng-form-item>
            <ng-form-item class="order-form-item" prop="cityCode">
              <span v-if="isIE">请选择城市</span>
              <ng-select class="form-item-select" v-model="formData.cityCode" width="50%" placeholder="请选择城市" @change="cityChange">
                <ng-option v-for="item in cities" :key="item.areaid" :label="item.areaname" :value="item.areaid">
                </ng-option>
              </ng-select>
            </ng-form-item>
            <ng-form-item class="order-form-item" prop="storeId" style="margin-bottom:0">
              <span v-if="isIE">请选择门店</span>
              <ng-select class="form-item-select" v-model="formData.storeId" width="50%" placeholder="请选择门店" @change="storeChange">
                <ng-option v-for="item in stores" :key="item.id" :label="item.storeName" :value="item.id">
                </ng-option>
              </ng-select>
            </ng-form-item>
            <ng-form-item class="order-form-item" style="margin-bottom:0">
              <ng-button type="primary" class="order-btn" @click="saveOrderHandle()">立即预约</ng-button>
            </ng-form-item>
          </ng-form>
        </div>
        <div class="content-free-wrap_right">
          <div>
            <div class="order-title">累计{{orderConut|| 0}}人预约</div>
            <div id="scrollapp">
              <ul>
                <li v-for="item in orderList" :key="item.id">
                  <div>
                    <p>{{item.createTime}}{{'&nbsp;'.repeat(10)}}{{item.realName|| '&nbsp;'.repeat(17)}}</p>
                    <p>已申请上门量房{{'&nbsp;'.repeat(30)}}</p>
                  </div>
                </li>
              </ul>
              <ul>
                <li v-for="item in orderList" :key="item.id">
                  <div>
                    <p>{{item.createTime}}{{'&nbsp;'.repeat(10)}}{{item.realName|| '&nbsp;'.repeat(17)}}</p>
                    <p>已申请上门量房{{'&nbsp;'.repeat(30)}}</p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </section>

    <section>
      <div class="content-title more-parent">
        <div class="content-title">
          <div class="title-warp-left"></div>
          <div class="title-t1">
            <b>应用案例</b>
            <div class="content-title-desc">
              <p>客户的信任</p>
            </div>
          </div>
          <div class="title-warp-right"></div>
        </div>
        <router-link to="/lists/appcase">
          <span class="more">
            <b>应用案例/了解更多</b>
            <em>MORE</em>
            <i class="el-icon-caret-right"></i>
          </span>
        </router-link>
      </div>
      <div class="section-item clearfix" style="text-align:center">
        <router-link tag="img"  :to="'/detail/appcase/'+item.id" v-for="item in appcaseList" :key="item.$index" :class="{'img-left':item.$index===0,'img-right':item.$index===3,'img-middle':item.$index===2||item.$index===3}" class="img-1-4 img-left" :src="item.image" alt=""></router-link>
      </div>
    </section>
    <section>
      <div class="content-title">
        <div class="title-warp-left"></div>
        <div class="title-t1">
          <b>六大优势</b>
          <div class="content-title-desc">
            <p>选择德品·美罗宫</p>
          </div>
        </div>
        <div class="title-warp-right"></div>
      </div>

      <div class="section-item six-goods">
        <div class="six-goods-1 l">
          <p>强大的</p>
          <p class="text-1">
            <b>全球供应链</b>
          </p>
        </div>
        <div class="six-goods-2 l">
          <router-link tag="img" to="/goodsList/0" :src="sixgoods[0]"></router-link>
        </div>
        <div class="six-goods-3 l">
          <p>行业</p>
          <p class="text-1">
            <b>领先生产工艺</b>
          </p>
        </div>
        <div class="six-goods-4 l">
          <router-link tag="img" to="/goodsList/1" :src="sixgoods[1]"></router-link>
        </div>
        <div class="six-goods-1 l">
          <router-link tag="img" to="/goodsList/2" :src="sixgoods[2]"></router-link>
        </div>
        <div class="six-goods-2 l">
          <p>先进科技</p>
          <p class="text-1">
            <b>专利技术</b>
          </p>
        </div>
        <div class="six-goods-3 l">
           <router-link tag="img" to="/goodsList/3" :src="sixgoods[3]"></router-link>
        </div>
        <div class="six-goods-4 l">
          <p>首创</p>
          <p class="text-1">
            <b>4D净醛环保技术</b>
          </p>
        </div>
        <div class="six-goods-1 l">
          <p>时尚先锋</p>
          <p class="text-1">
            <b>德国原创设计</b>
          </p>
        </div>
        <div class="six-goods-2 l">
          <router-link tag="img" to="/goodsList/4" :src="sixgoods[4]"></router-link>
        </div>
        <div class="six-goods-3 l">
          <p>品牌口碑</p>
          <p class="text-1">
            <b>行业至高荣誉</b>
          </p>
        </div>
        <div class="six-goods-4 l">
          <router-link tag="img" to="/goodsList/5" :src="sixgoods[5]"></router-link>
        </div>
      </div>
    </section>
    <section>
      <div class="content-title more-parent">
        <div class="content-title">
          <div class="title-warp-left"></div>
          <div class="title-t1">
            <b>装修知识</b>
            <div class="content-title-desc">
              <p>你可能不了解的知识</p>
            </div>
          </div>
          <div class="title-warp-right"></div>
        </div>
        <router-link to="/lists/knowledge">
          <span class="more">
            <b>装修攻略/了解更多</b>
            <em>MORE</em>
            <i class="el-icon-caret-right"></i>
          </span>
        </router-link>

      </div>
      <div class="section-item clearfix">
        <div v-for="(item,index) in knowledgeList" class="img-zhuangxiu" :key="index" :style="{margin:index===1?'0 .1rem':''}">
          <router-link tag="img" :to="'/detail/knowledge/'+item.id"  class="img l" :src="item.image"></router-link>
          <router-link tag="span" :to="'/detail/knowledge/'+item.id">{{item.title}}</router-link>
        </div>
      </div>
    </section>
    <section>
      <div class="content-title">
        <div class="title-warp-left"></div>
        <div class="title-t1">
          <b>合作伙伴</b>
          <div class="content-title-desc">
            <p>好伙伴&nbsp;&nbsp;大未来</p>
          </div>
        </div>
        <div class="title-warp-right"></div>
      </div>
      <div class="section-item">
        <img class="img-hezuo" src="../../static/img1111.fw.png" alt="">
        <img class="img-hezuo" src="../../static/img1112.fw.png" alt="">
        <img class="img-hezuo" src="../../static/img1113.fw.png" alt="">
        <img class="img-hezuo" src="../../static/img1114.fw.png" alt="">
        <img class="img-hezuo" src="../../static/img1115.fw.png" alt="">
        <img class="img-hezuo" src="../../static/img1116.fw.png" alt="">
      </div>
    </section>
  </div>
</template>
<script>
  import common from "js/common";
  import * as filters from "js/filters";
  import * as service from "./service";

  export default {
    data() {
      return {
        videoList: [], // 视频列表
        bigCate: [], // 产品分类
        onlineViews:[],// 在线体验
        viewUrls:[], // 在线体验跳转的url
        viewsCount:0, // 在线体验数量
        newsList: [], // 轮播图新闻资讯 5条
        appcaseList: [], // 应用案例列表 4条
        knowledgeList: [], // 装修知识列表 3条
        sixgoods: [], // 六大优势
        provinces: [], // 省份
        cities: [], // 城市
        stores: [], // 门店
        orderList: [], // 预约列表
        orderConut: 0, // 预约数量
        MyMarh: null, // 定时器
        formData: {
          realName: '', // 用户姓名
          tel: '', //用户电话
          provinceCode: '', // 当前选择的省份
          cityCode: '', // 当前选择的城市
          storeId: '', // 当前选择的门店
        },
        formRules: {
          realName: {
            required: true,
            trigger: 'change',
            max: 10,
            message: '请输入姓名',
          },
          tel: {
            required: true,
            trigger: 'change',
            type: 'number',
            message: '请输入电话号码',
          },
          provinceCode: {
            required: true,
            trigger: 'change',
            message: '请选择省份',
          },
          cityCode: {
            required: true,
            trigger: 'change',
            message: '请选择城市',
          },
          storeId: {
            type: 'number',
            required: true,
            trigger: 'change',
            message: '请选择门店',
          },
        }
      }
    },
    mounted() {
      new Swiper('.content-s2', {
        autoplay: 5000,
        direction: 'horizontal',
        loop: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        // 如果需要分页器
        pagination: '.swiper-pagination-s2',
        paginationClickable :true,

      });
      Promise.all([
        this.getOnlineViewsCount(),
        this.getOnlineViews(), // 在线体验
        this.getvideoList(), // 视频接口
        this.getBigcate(), // 获取产品分类
        this.querygoods(), // 获取六大优势
        this.queryProvinces(), // 获取省份信息
        this.getOrders(), // 获取预约数
        this.getOrdersCount(), // 获取预约数量
        this.getNewsList(), // 获取轮播图资讯 5条
        this.getAppcases(), // 应用案例
        this.getKnowledges(), // 装修知识
      ]).then(() => {
        this.initScroll();
      })
    },
    computed: {
      isIE() {
        return filters.matchIe();
      }
    },
    watch: {
      $route(route) {
        this.initScroll();

      }
    },
    methods: {
      // 初始化滚动条
      initScroll() {
        let path = this.$route.path;
        let scrollBody = document.documentElement || document.body;
        if (path.includes('order')) {
          scrollBody.scrollTop = $('#js-order').offset().top;
        } else {
          scrollBody.scrollTop = 0;
        }

      },
      getBigcate() {
        service.getBigcate().then(res => {
          this.bigCate = res.ret;
        })
      },
      // 视频接口
      getvideoList() {
        service.getVideoList().then(res => {
          this.videoList = res.ret;
        });
      },
      getNewsList() {
        service.getNewsList({
          pageNo: 1,
          pageSize: 5
        }).then(res => {
            this.newsList = res.data;
        })
      },
      getAppcases() {
        service.getAppcases({
          pageNo: 1,
          pageSize: 4
        }).then(res => {
          this.appcaseList = res.data;
        })
      },
      // 获取六大优势
      querygoods() {
        service.querygoods().then(res => {
          this.sixgoods = res;
        });
      },
      getKnowledges() {
        service.getKnowledges({
          pageNo: 1,
          pageSize: 3
        }).then(res => {
          this.knowledgeList = res.data;
        })
      },
      //  获取省份
      queryProvinces() {
        service.queryProvinces().then(res => {
          this.provinces = res.ret;
        });
      },
      // 获取城市
      queryCity(val) {
        service.queryCity({
          "pid": val
        }).then(res => {
          this.cities = res.ret;
        });
      },
      // 获取门店
      queryStore(val) {
        service.queryStore({
          "cityCode": val
        }).then(res => {
          this.stores = res.ret;
        });
      },
      // 监听事件
      provinceChange(val) {
        this.formData.provinceCode = val;
        this.formData.cityCode = '';
        this.stores = [];
        this.queryCity(val);
      },
      cityChange(val) {
        this.formData.cityCode = val;
        this.formData.storeId = '';
        this.queryStore(val);
      },
      storeChange(val) {
        this.formData.storeId = val;
      },
      // 提交订单
      saveOrderHandle() {
        this.$refs.userForm.validate(vaild => {
          if (vaild) {
            service.saveOrder(this.formData).then(res => {
              this.$message({
                message: res.desc,
                type: 'success'
              });
              this.getOrders();
              this.getOrdersCount();
              this.$refs.userForm.resetFields();
            })
          }
        })

      },
      // 获取预约列表
      getOrders() {
        service.getOrders().then(res => {
          this.orderList = res.ret;
          this.moveInterval();
        });
      },
      // 获取预约数量
      getOrdersCount() {
        service.getOrdersCount().then(res => {
          this.orderConut = res.ret;
        });
      },
      moveInterval() {
        let scrollApp = document.querySelector('#scrollapp');
        let scrolls = document.querySelectorAll('#scrollapp ul');
        let speed = 30;
        if (this.MyMarh) {
          clearInterval(this.MyMarh);
        }
        this.MyMarh = setInterval(Marqueeh, speed)
        scrollApp.onmouseover = () => clearInterval(this.MyMarh)
        scrollApp.onmouseout = () => this.MyMarh = setInterval(Marqueeh, speed)

        function Marqueeh() {
          if (scrolls[1].offsetHeight - scrollApp.scrollTop <= 0)
            scrollApp.scrollTop -= scrolls[0].offsetHeight
          else {
            scrollApp.scrollTop++
          }
        }
      },
      getOnlineViews(){
         service.getOnlineViews({
          pageNo: 1,
          pageSize: 3,
        }).then(res => {
          res.data.forEach(ele => {
            this.onlineViews.push(ele.image);
            this.viewUrls.push(ele.url);
          });

        });
      },
      getOnlineViewsCount(){
        service.getOnlineViewsCount().then(res=>{
          this.viewsCount = res.ret;
        })
      }
    }
  }

</script>

