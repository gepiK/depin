import common from 'js/common';
// 获取产品列表
export const getProdList = function(data) {
  let option = { url: '/front/product/list.html', data, type: 'post' };
  return common.ajax(option);
};
// 获取产品分类
export const getBigcate = function(data) {
  let option = { url: '/front/product/bigcate.html', data, type: 'post' };
  return common.ajax(option).then(res => {
    res.ret.forEach(item => {
      item.isActive = false;
    });
    return res;
  });
};

// 获取过滤-材质
export const getMaterial = function(data) {
  let option = { url: '/front/product/material.html', data, type: 'post' };
  return common.ajax(option).then(res => {
    res.ret.forEach(item => {
      item.isActive = false;
    });
    return res;
  });
};

// 获取过滤-工艺
export const getTechnics = function(data) {
  let option = { url: '/front/product/technics.html', data, type: 'post' };
  return common.ajax(option).then(res => {
    res.ret.forEach(item => {
      item.isActive = false;
    });
    return res;
  });
};

// 获取过滤-风格
export const getStyles = function(data) {
  let option = { url: '/front/product/style.html', data, type: 'post' };
  return common.ajax(option).then(res => {
    res.ret.forEach(item => {
      item.isActive = false;
    });
    return res;
  });
};

// 获取产品详情
export const getProdDetail = function(data) {
  let option = { url: '/front/product/detail.html', data, type: 'post' };
  return common.ajax(option);
};
