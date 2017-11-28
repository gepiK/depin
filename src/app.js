'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueComponents from 'components';
import web from './web';
import Main from 'views/main/main.vue';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/order',
      component: Main,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/prodList',
      component: resolve => require(['views/prodList/prod_list.vue'], resolve),
      meta: {
        title: '产品中心'
      }
    },
    {
      path: '/prodList/:catePropId',
      component: resolve => require(['views/prodList/prod_list.vue'], resolve),
      meta: {
        title: '产品中心'
      }
    },
    {
      path: '/newsList',
      component: resolve => require(['views/newsList/news_list.vue'], resolve),
      meta: {
        title: '品牌资讯'
      }
    },
    {
      path: '/newDetail/:id',
      component: resolve => require(['views/newsList/new_detail.vue'], resolve),
      meta: {
        title: '资讯详情'
      }
    },
    {
      path: '/about',
      component: resolve => require(['views/others/about.vue'], resolve),
      meta: {
        title: '公司简介'
      }
    },
    {
      path: '/mission',
      component: resolve => require(['views/others/about.vue'], resolve),
      meta: {
        title: '品牌使命'
      }
    },
    {
      path: '/history',
      component: resolve => require(['views/others/about.vue'], resolve),
      meta: {
        title: '发展历程'
      }
    },
    {
      path: '/duty',
      component: resolve => require(['views/others/about.vue'], resolve),
      meta: {
        title: '企业责任'
      }
    },
    {
      path: '/honor',
      component: resolve => require(['views/others/honor.vue'], resolve),
      meta: {
        title: '品牌荣誉'
      }
    },
    {
      path: '/joinus',
      component: resolve => require(['views/others/about.vue'], resolve),
      meta: {
        title: '招商加盟'
      }
    },
    {
      path: '/linkme',
      component: resolve => require(['views/others/linkme.vue'], resolve),
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '/lists/knowledge',
      component: resolve => require(['views/lists/lists.vue'], resolve),
      meta: {
        title: '装修知识'
      }
    },
    {
      path: '/lists/appcase',
      component: resolve => require(['views/lists/lists.vue'], resolve),
      meta: {
        title: '应用案例'
      }
    },
    {
      path: '/detail/:type/:id',
      component: resolve => require(['views/lists/detail.vue'], resolve),
      meta: {
        title: ''
      }
    },
    {
      path: '/videoList',
      component: resolve => require(['views/videoList/videoList.vue'], resolve),
      meta: {
        title: '品牌视频'
      }
    },
    {
      path: '/goodsList',
      component: resolve => require(['views/goodsList/goodsList.vue'], resolve),
      meta: {
        title: '六大优势'
      }
    },
    {
      path: '/goodsList/:index',
      component: resolve => require(['views/goodsList/goodsList.vue'], resolve),
      meta: {
        title: '六大优势'
      }
    },
    {
      path: '/onlineView',
      component: resolve =>require(['views/onlineView/onlineView.vue'], resolve),
      meta: {
        title: '在线体验'
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  document.title = `德品·美罗宫${to.meta.title ? '—' + to.meta.title : ''}`;
  document.documentElement.scrollTop = '0';
  document.body.scrollTop = 0;
  next();
});
const idx = new VueComponents({
  router,
  render: h => h(web)
}).$mount('#idx');
