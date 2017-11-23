<template>
  <div class="prod">
    <div class="filters">
      <div class="filter-category">
        <span v-for="item in cateId" :key="item.id" class="l" :class="{active:item.isActive}" @click="selectFilter('cateId',item)">{{item.propName}}</span>
      </div>
      <div class="filter-others">
        <div class="filter-1">
          <div class="l left">
            <p>材质</p>
          </div>
          <div class="l right">
            <span class="l" v-for="item in mateId" :key="item.propId" :class="{active:item.isActive}" @click="selectFilter('mateId',item)">{{item.propName}}</span>
          </div>
        </div>
        <div class="filter-1">
          <div class="l left">
            <p>工艺</p>
          </div>
          <div class="l right">
            <span class="l" v-for="item in techId" :key="item.propId" :class="{active:item.isActive}" @click="selectFilter('techId',item)">{{item.propName}}</span>
          </div>
        </div>
        <div class="filter-1">
          <div class="l left">
            <p>风格</p>
          </div>
          <div class="l right">
            <span class="l" v-for="item in styleId" :key="item.propId" :class="{active:item.isActive}" @click="selectFilter('styleId',item)">{{item.propName}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="prod-list">
      <div v-if="!prodList.length" class="no-prod">
        <p>未查询到相关产品!</p>
      </div>
      <div v-else v-for="item in prodList" :key="item.$index" class="l item">
        <img v-if="item.image" class="img-h l" :src="item.image" alt="">
        <div v-else  class="img-h l"></div>
        <p class="prod-name">
          <b>{{item.prodName}}</b>
        </p>
        <p>{{item.modelName}}</p>
        <p class="view-detail-btn" @click="viewDetail(item)">查看详情</p>
      </div>
    </div>
    <ng-pagination class="pagination" @current-change="handleCurrentChange" :page-size="16" layout="total, prev, pager, next" :total="total">
    </ng-pagination>
    <prod-detail :showDetail="showDetail" :toChild="prod_detail" @close="detailModalClose"></prod-detail>
  </div>
</template>
<script>
import './index.less';
import * as service from './service.js'
import prodDetail from './prod_detail';
import _ from 'lodash';
export default {
  components: {
    prodDetail
  },
  data () {
    return {
      cateId: [], // 过滤-产品分类
      mateId: [], // 过滤-材质
      techId: [], // 过滤-工艺
      styleId: [], // 过滤-风格
      filter: {
        cateId: '',
        mateId: '',
        techId: '',
        styleId: '',
      },
      prodList: [], // 产品列表
      total: 0, // 产品数量
      showDetail: false, // 显示产品详情
      prod_detail: {}, // 传递给弹窗的信息
    }
  },
  mounted () {
    console.log('mounted')
    this.getFilter();
    this.getProdList();
  },
      watch:{
    $route() {
      console.log('route')
       this.getFilter();
    }
  } , 
  methods: {
    getProdList (val = 1) {
      let data = {};
      Object.assign(data, this.filter);
      service.getProdList({ pageNo: val, pageSize: 16, ...data }).then(res => {
        this.prodList = res.data;
        this.total = res.count;
      });
    },
    getFilter () {
      // 获取产品分类
      service.getBigcate().then(res => {
        this.cateId = res.ret;
        let params = this.$route.params;
        if(params && params.catePropId) {
          this.selectFilter('cateId',res.ret[_.map(res.ret,'propId').indexOf(Number.parseInt(params.catePropId))]);
        }else {
          this.filter.cateId = '';
          this.getProdList();
        }
      });
      // 获取 过滤-材质分类
      service.getMaterial().then(res => {
        this.mateId = res.ret;
      });
      // 获取 过滤-工艺分类
      service.getTechnics().then(res => {
        this.techId = res.ret;
      });
      // 获取 过滤-风格分类
      service.getStyles().then(res => {
        this.styleId = res.ret;
      });
    },
    selectFilter (type, item) {
      if (item.isActive) {
        return;
      } else {
        this.activeHandle(type, item);
        item.isActive = true;
      }

    },
    activeHandle (type, item) {
      // 收集被选择的过滤条件
      for (let key of Object.keys(this.filter)) {
        if (type.includes(key)) {
          this.filter[key] = item.propId;
        }
      }
      this[type].forEach(item => {
        item.isActive = false;
      })
      this.getProdList();
    },
    // 分页
    handleCurrentChange (currentPage) {
      this.getProdList(currentPage);
    },
    // 查看详情
    viewDetail (item) {
      let obj = {};
      console.log(item)
      obj.id = item.id;
      obj.environLevel = item.environLevel;
      obj.image = item.image;
      obj.modelName = item.modelName;
      obj.prodName = item.prodName;
      obj.remark = item.remark;
      obj.specName = item.specName;
      obj.cateName = this.queryItemById(item.cateId, 'propId', this.cateId);
      obj.materialName = this.queryItemById(item.materialId, 'propId', this.mateId);
      obj.styleName = this.queryItemById(item.styleId, 'propId', this.styleId);
      obj.technicName = this.queryItemById(item.technicsId, 'propId', this.techId);

      this.prod_detail = obj;
      this.showDetail = true;
    },
    // 弹窗组件触发的关闭事件
    detailModalClose () {
      this.showDetail = false;
    },
    queryItemById (id, prop, list) {
      let value = '';
     value =  _.map(list,'propName')[_.map(list,'prop').indexOf(id)];
      // for (let i = 0; i < list.length; i++) {
      //   if (list[i][prop] === id) {
      //     value = list[i].propName;
      //     break;
      //   }
      // }
      return value;
    }

  }

}
</script>