import common from 'js/common';

// 获取简介内容
export const getAboutContent = function(data) {
  let option = { url: '/front/about.html', data, type: 'get' };
  return common.ajax(option);
};

// 获取品牌使命内容
export const getMissionContent = function(data) {
  let option = { url: '/front/mission.html', data, type: 'get' };
  return common.ajax(option);
};

// 获取发展历程内容
export const getHistoryContent = function(data) {
  let option = { url: '/front/history.html', data, type: 'get' };
  return common.ajax(option);
};

// 获取联系方式
export const getLinks = function(data) {
  let option = { url: '/front/contact.html', data, type: 'get' };
  return common.ajax(option);
};

// 获取品牌荣誉内容
export const getHonorContent = function(data) {
  let option = { url: '/front/honor.html', data, type: 'get' };
  return common.ajax(option);
};

// 企业责任内容
export const getDutyContent = function(data) {
  let option = { url: '/front/duty.html', data, type: 'get' };
  return common.ajax(option);
};

// 招商加盟
export const getJoinusContent = function(data) {
  let option = { url: '/front/joinus.html', data, type: 'get' };
  return common.ajax(option);
};
