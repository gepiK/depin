import common from 'js/common';

// 获取资讯列表
export const getNewsList = function(data) {
  let option = { url: '/front/notice.html', data, type: 'get' };
  return common.ajax(option);
};
// 获取资讯详情
export const getNewDetail = function(data) {
  let option = { url: '/front/getNoticeById.html', data, type: 'get' };
  return common.ajax(option);
};
