import common from 'js/common';

// 品牌视频
export const getGoodsList = function(data) {
  let option = {
    url: '/index/sixgood.html',
    data,
    type: 'get'
  };
  let titleList = [
    '全球供应链',
    '生产工艺',
    '专利技术',
    '环保技术',
    '德国原创设计',
    '荣誉'
  ];
  return common.ajax(option).then(res => {
    res.ret.forEach((item, index) => {
      item.title = titleList[index];
    });
    return res;
  });
};
