<template>
  <div>
  <nav-header></nav-header>
  <nav-bread>商品</nav-bread>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">Sort by:</span>
      <a href="javascript:void(0)" class="default cur">Default</a>
      <a href="javascript:void(0)" class="price" @click="sortGoods">价格 <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter">
        <dl class="filter-price">
          <dt>价格:</dt>
          <dd><a href="javascript:void(0)" :class="{'cur':priceChecked == 'all'}">All</a></dd>
          <dd v-for="(price,index) in priceFilter">
            <a href="javascript:void(0)" @click="setPriceFilter(index)" :class="{'cur':priceChecked == index}">{{price.startPrice}} - {{price.endPrice}}</a>
          </dd>
        </dl>
      </div>

      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li v-for="item in GoodsList">
              <div class="pic">
                <a href="#"><img v-lazy="'/static/img/' + item.productImage" alt=""></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">{{item.salePrice}}</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
            <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
              ...
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
  import NavHeader from '@/components/Header'
  import NavFooter from '@/components/Footer'
  import NavBread from '@/components/NavBread'
  import axios from 'axios'
  export default {
    name: 'GoodsList',
    data(){
      return {
        GoodsList:Array,
        sortFlag:true,
        priceChecked:'all',
        busy:true,
        page:1,
        pagesize:8,
        flag:false,
        priceFilter:[
          {
            startPrice:'0.00',
            endPrice:'100.00'
          },
          {
            startPrice:'100.00',
            endPrice:'500.00'
          },
          {
            startPrice:'500.00',
            endPrice:'1000.00'
          },
          {
            startPrice:'1000.00',
            endPrice:'5000.00'
          },
        ]
      }
    },
    components: {
      NavHeader,
      NavFooter,
      NavBread
    },
    mounted: function(){
      this.getGoodsList();
    },
    methods: {
      getGoodsList(flag){
        let param = {
          sort:this.sortFlag ? 1 : -1,
          priceLevel: this.priceChecked,
          page:this.page,
          pagesize:this.pagesize
        }
        axios.get("/goods/list",{params:param}).then((result) => {
          let res = result.data;
          if(res.status == 0){
            if(flag){
              this.GoodsList = this.GoodsList.concat(res.result);
              // 判断当数据加载完了就截停
              console.log(res.result.length);
              if(res.result.length == 0){
                this.busy = true;
              }else{
                this.busy = false;
              }
            }else{
              this.GoodsList = res.result;
              this.busy = false;
            }
            // console.log(this.GoodsList);
          }else{
            // 系统正忙
            // alert("系统正忙")
            // this.busy = false;
          }
          
        })
      },
      sortGoods(){
        this.sortFlag = !this.sortFlag;
        this.getGoodsList();
      },
      setPriceFilter(index){
        console.log(index)
        this.priceChecked = index;
        this.getGoodsList();
      },
      loadMore(){
          this.busy = true;
          setTimeout(() => {
            this.page ++;
            this.getGoodsList(true);
            console.log(1111)
          }, 500);
      }
    }
  }
</script>