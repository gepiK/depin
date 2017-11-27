import common from 'js/common';

// 品牌视频
export const getVideoList = function(data) {
  let option = {
    url: '/video/list.html',
    data,
    type: 'get'
  };
  return common.ajax(option);
};
