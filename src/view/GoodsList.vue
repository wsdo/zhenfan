<template>
  <div>
  <nav-header></nav-header>
  <nav-bread>商品</nav-bread>
<div class="accessory-result-page accessory-page">
  <div class="container">
    <div class="filter-nav">
      <span class="sortby">Sort by:</span>
      <a href="javascript:void(0)" class="default cur">Default</a>
      <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
      <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
    </div>
    <div class="accessory-result">
      <!-- filter -->
      <div class="filter stopPop" id="filter">
        <dl class="filter-price">
          <dt>Price:</dt>
          <dd><a href="javascript:void(0)">All</a></dd>
          <dd>
            <a href="javascript:void(0)">0 - 100</a>
          </dd>
          <dd>
            <a href="javascript:void(0)">100 - 500</a>
          </dd>
          <dd>
            <a href="javascript:void(0)">500 - 1000</a>
          </dd>
          <dd>
            <a href="javascript:void(0)">1000 - 2000</a>
          </dd>
        </dl>
      </div>

      <!-- search result accessories list -->
      <div class="accessory-list-wrap">
        <div class="accessory-list col-4">
          <ul>
            <li v-for="item in GoodsList">
              <div class="pic">
                <a href="#"><img v-lazy="'/static/img/' + item.productImg" alt=""></a>
              </div>
              <div class="main">
                <div class="name">{{item.productName}}</div>
                <div class="price">{{item.productPrice}}</div>
                <div class="btn-area">
                  <a href="javascript:;" class="btn btn--m">加入购物车</a>
                </div>
              </div>
            </li>
            
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
        GoodsList:Array
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
      getGoodsList(){
        axios.get("/goods").then((result) => {
          // if(result.data.statue == 0){

          // }else{
          //   系统正忙
          // }
          
          let res = result.data.result;
          console.log(result)
          this.GoodsList = res;

          // console.log(this.GoodsList);
        })
      }
    }
  }
</script>