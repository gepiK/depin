import common from 'js/common';

// 获取装修知识列表
export const getKnowledges = function(data) {
  let option = { url: '/front/knowledge.html', data, type: 'get' };
  return common.ajax(option);
};

// 获取应用案例列表
export const getAppcases = function(data) {
  let option = { url: '/front/appcase.html', data, type: 'get' };
  return common.ajax(option);
};
// 获取装修知识详情
export const getKnowledgeById = function(data) {
  let option = { url: '/front/getKnowledgeById.html', data, type: 'get' };
  return common.ajax(option);
};
// 获取应用案例详情
export const getAppcaseById = function(data) {
  let option = { url: '/front/getAppcaseById.html', data, type: 'get' };
  return common.ajax(option);
};
