<template>
  <ng-dialog title="" :visible.sync="isShow" width="50rem" class="modal_detail" @close="modal_close" :lock-scroll="true" :close-on-click-modal="false">
    <div class="detail">
      <div class="detail-left l">
        <img :src="toChild.image+'!/fw/283/clip/283x350a0a0'" alt="">
      </div>
      <section class="detail-right l">
        <h2>{{toChild.styleName}}</h2><b>【{{toChild.prodName}}】</b>
        <p>
          <b>——</b>
        </p>
        <div class="detail-content b-border">
          <p>
            {{toChild.remark}}
          </p>
        </div>
        <div class="prod_detail-style">
          <p class="title">
            <b>产品参数规格</b>
          </p>
          <p class="b-border">
            <span> 产品名称：&nbsp;&nbsp;&nbsp;&nbsp;{{toChild.prodName}}</span>
          </p>
          <p class="b-border">
            <span>树&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;种：&nbsp;&nbsp;&nbsp;&nbsp;{{toChild.materialName}}</span>
          </p>
          <p class="b-border">
            <span>规&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格：&nbsp;&nbsp;&nbsp;&nbsp;{{toChild.specName}}</span>
          </p>
          <p class="b-border">
            <span>工&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;艺：&nbsp;&nbsp;&nbsp;&nbsp;{{toChild.technicName}}</span>
          </p>
          <p class="b-border">
            <span>环保等级：&nbsp;&nbsp;&nbsp;&nbsp;{{toChild.environLevel}}</span>
          </p>
        </div>
      </section>
    </div>
  </ng-dialog>
</template>
<script>
import './index.less';
import * as service from './service.js';

export default {
  props: {
    showDetail: {
      type: Boolean,
      default: false,
    },
    toChild: {
      default: {},
    }
  },
  data () {
    return {
      isShow: false,
      prodDetail: {}, // 产品详情
    }
  },
  mounted () {
  },
  watch: {
    showDetail (val, oldVal) {
      if (val) {
        document.body.style.overflow = 'hidden';
        this.getProdDetail(this.toChild.id);
      }
      this.isShow = val;
    }
  },
  methods: {
    // 获取产品详情
    getProdDetail (id) {
      service.getProdDetail({ id }).then(res => {
        this.prodDetail = res.ret;
      })
    },
    // 弹窗关闭的回调
    modal_close () {
      document.body.style.overflow = 'scroll';
      this.$emit('close');
    },
  }

}
</script>