import common from 'js/common';

// 获取产品分类
export const getBigcate = function(data) {
  let option = { url: '/index/bigcate.html', data, type: 'post' };
  return common.ajax(option);
};

// 获取资讯列表
export const getNewsList = function(data) {
  let option = { url: '/front/notice.html', data, type: 'get' };
  return common.ajax(option);
};
// 获取应用案例列表
export const getAppcases = function(data) {
  let option = { url: '/front/appcase.html', data, type: 'get' };
  return common.ajax(option);
};

// 获取装修知识列表
export const getKnowledges = function(data) {
  let option = { url: '/front/knowledge.html', data, type: 'get' };
  return common.ajax(option);
};
// 六大优势
export const querygoods = function(data) {
  let option = {
    url: '/index/sixgood.html',
    data,
    type: 'get'
  };
  return common.ajax(option).then(res => {
    let list = [];
    res.ret.forEach(item => {
      list.push(item.image);
    });
    return list;
  });
};

// 获取省份
export const queryProvinces = function(data) {
  let option = {
    url: '/index/province.html',
    data,
    type: 'get'
  };
  return common.ajax(option);
};

// 获取城市
export const queryCity = function(data) {
  let option = {
    url: '/index/cityByPid.html',
    data,
    type: 'get'
  };
  return common.ajax(option);
};

// 获取门店
export const queryStore = function(data) {
  let option = {
    url: '/index/store.html',
    data,
    type: 'get'
  };
  return common.ajax(option);
};

// 提交订单接口
export const saveOrder = function(data) {
  let option = {
    url: '/index/saveAppoint.html',
    data,
    type: 'post'
  };
  return common.ajax(option);
};
// 获取订单
export const getOrders = function(data) {
  let option = {
    url: '/index/appointment.html',
    data,
    type: 'post'
  };
  return common.ajax(option);
};

// 获取预约数量
export const getOrdersCount = function(data) {
  let option = {
    url: '/index/appointCount.html',
    data,
    type: 'get'
  };
  return common.ajax(option);
};

// 品牌视频
export const getVideoList = function(data) {
  let option = {
    url: '/index/video.html',
    data,
    type: 'get'
  };
  return common.ajax(option);
};
