import common from './common';

// 轮播图
export const queryBannerList = function(data) {
  let option = {
    url: '/index/banner.html',
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

// 获取产品分类
export const getBigcate = function(data) {
  let option = { url: '/index/bigcate.html', data, type: 'post' };
  return common.ajax(option);
};
