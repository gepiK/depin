var Vue = require('vue');
var app = new Vue();
const common = {
  ajax(options) {
    let loading = app.$loading(); // 显示loading图标
    var promise = new Promise(function(resolve, reject) {
      //基础路径
      let opt = {};
      opt = {
        complete: function() {
          loading.close(); // 隐藏loading图标
        },
        type: 'GET',
        data: {},
        contentType: 'application/x-www-form-urlencoded',
        // contentType: 'application/json',
        // 接收错误信息需要设置请求头的接收方式
        // headers: {
        //   Accept: 'application/json',
        // },
        success: function(res) {
          res = JSON.parse(res);
          if (res.status === -1) {
            app.$message({ message: res.desc, type: 'error' });
          } else {
            resolve(res);
          }
        },
        error: function(err) {
          app.$message({
            message: err,
            type: 'error'
          });
        }
      };
      Object.assign(opt, options);
      $.ajax(opt);
    });
    return promise;
  }
};

export default common;
