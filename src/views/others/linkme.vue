<template>
  <section class="page_about">
    <div class="new_content">
      <p class="title">联系我们</p>
      <div class="page_about_content">
        <img class="map" src="../../static/lxwm.jpg" alt="">
        <div class="area">
        <div id="area_content"></div>
        <div class="lxwmm" style="margin-top:15px;padding-left:10px;">
					<p>全球服务热线  <span style="font-size:16px;margin-left:10px;"> {{content.phone}}</span></p>
					<p class="mt-10">地址： {{content.address}}</p>
					<p>传真： {{content.fax}}</p>
					<p>邮编： {{content.zipCode}}</p>
				</div>
        </div>
        
      </div>
    </div>
  </section>
</template>
<script>
import './index.less';
import * as service from './service.js';
export default {
  data () {
    return {
      content: '',  //内容
    }
  },
  mounted () {
    this.getLinks();
 
     

  },
  methods: {

    // 联系我们的接口
    getLinks () {
      service.getLinks().then(res => {
        this.content = res.ret;
            //地理编码
            
            AMap.service('AMap.Geocoder',function(){//回调函数

    //实例化Geocoder
    let geocoder = new AMap.Geocoder();
    //TODO: 使用geocoder 对象完成相关功能
    geocoder.getLocation(res.ret.address, function(status, result) {
    if (status === 'complete' && result.info === 'OK') {
      let location = result.geocodes[0].location;
               var marker, map = new AMap.Map("area_content", {
        resizeEnable: true,
        center: [location.lng,location.lat],
        zoom: 13
    });
        function addMarker() {
        marker = new AMap.Marker({
            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [location.lng,location.lat]
        });
        marker.setMap(map);
    }
    addMarker();
    }else{
        //获取经纬度失败
    }
}); 
})

      })
    },

  }
}
</script>