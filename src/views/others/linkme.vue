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
        var marker, map = new AMap.Map("area_content", {
        resizeEnable: true,
        center: [118.783281,32.061846],
        zoom: 13
    });
     function addMarker() {
        marker = new AMap.Marker({
            icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [118.783281,32.061846]
        });
        marker.setMap(map);
    }
addMarker();
  },
  methods: {

    // 联系我们的接口
    getLinks () {
      service.getLinks().then(res => {
        this.content = res.ret;
      })
    },

  }
}
</script>