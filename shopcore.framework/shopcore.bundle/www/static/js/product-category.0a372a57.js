(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product-category"],{2532:function(t,e,a){"use strict";var o=a("23e7"),r=a("e330"),i=a("5a34"),s=a("1d80"),n=a("577e"),c=a("ab13"),d=r("".indexOf);o({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~d(n(s(this)),n(i(t)),arguments.length>1?arguments[1]:void 0)}})},"45c9":function(t,e,a){"use strict";a.r(e);a("b0c0");var o=function(){var t=this,e=t._self._c;return t.showPage?e("div",{staticClass:"product-category",style:t.pageThemeStyle},[e("div",{ref:"scroll",staticClass:"product-category-tabwrapper",class:{fixedTop:t.isFixed}},[e("div",{staticClass:"product-category__tab"},t._l(t.tabList,(function(a,o){return e("p",{key:a.name,staticClass:"product-category__tab_item",class:{active:!!a.active},on:{click:function(e){return t.tabCategory(o)}}},[t._v(t._s(a.name))])})),0)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isFixed,expression:"isFixed"}],staticClass:"product-category-tabwrapper product-category-tabwrapper-empty"}),t.prodList.length>0?e("div",{staticClass:"product-category__list"},[e("product-list-card",{attrs:{ylogParams:t.ylogParams,prodList:t.prodList,partProps:t.partProps,prodType:2,hasShadow:"",prodEnv:"home",prodSkinData:t.prodSkinData}})],1):t._e(),t.prodList.length?t._e():e("div",{staticClass:"product-category__none"},[e("img",{attrs:{src:t.$t("skins.img_prod_none"),alt:""}})]),t.prodList.length>0?e("load-more",{attrs:{hasMore:t.loadMore,loading:t.isXhr&&t.pageIndex>0}}):t._e()],1):t._e()},r=[],i=a("9108"),s=i["a"],n=(a("a6d0"),a("2877")),c=Object(n["a"])(s,o,r,!1,null,"3055ac10",null);e["default"]=c.exports},"58b0":function(t,e,a){"use strict";(function(t){var o=a("5530"),r=(a("a9e3"),a("d3b7"),a("1041")),i=a("b565"),s=a("2f85"),n=a("ecd3");e["a"]={components:{productCard:n["a"]},mixins:[r["a"],i["a"],s["a"]],props:{prodList:{type:Array},partProps:{type:Object},prodType:{type:[Number,String],default:3},titleType:{type:String,default:"twoline"},cardDistance:{type:Number,default:12},priceLabel:{type:String,default:""},priceType:{type:String,default:"twoline"},cardType:{type:String,default:""},isShowTaxTag:{type:Boolean,value:!1},hidePriceControlType:{type:Boolean,value:!1},hasShadow:{type:Boolean,default:!1},showAddBtn:{type:[Boolean,String],default:!1},addBtnDisabled:{type:Boolean,default:!1},brandPriceControl:{type:Boolean,default:!1},prodEnv:{type:String,value:""},prodSkinData:{type:Object},ylogParams:{type:Object,default:function(){return{}}},navigatorParams:{type:Object},memberPic:{type:String},memberGrade:{type:Object,default:function(){return{}}},isDev:{type:Boolean,default:!1},showBrandDev:{type:Boolean,default:!1},pageType:{type:String,default:""}},data:function(){return{marketPricePlaced:!1,isFixedPlace:!1,brandNamePlaced:!1,prodListStyle:{},prodIconCustomUrl:"",showProdIcon:!1,hideSystemIcon:!1,prodWrapStyle:{}}},watch:{prodList:{immediate:!0,handler:function(e){var a=this;3===this.prodType?(t.store.isBrandPriceType?this.isFixedPlace=e.some((function(t){return t.discountInfo})):this.marketPricePlaced=e.some((function(t){return a.getMarketPrice(t)})),this.brandNamePlaced=e.some((function(t){return t.brandName}))):(this.isFixedPlace=!0,this.marketPricePlaced=!0)},deep:!0},partProps:{immediate:!0,handler:function(t){var e=this;t&&(this.prodListStyle=this.handleProdListStyle(t),this.$nextTick((function(){e.setProdAttr(t)})))},deep:!0},prodSkinData:{immediate:!0,handler:function(t){var e=this;t&&(this.prodListStyle=this.handleProdListStyle(t),this.$nextTick((function(){e.setProdAttr(t)})))},deep:!0}},methods:{handleAdd:function(t){this.$emit("handleAddBtn",t)},handleReduce:function(t){this.$emit("handleReduceBtn",t)},handleProdListStyle:function(e){var a=e||{},o=a.prodSpace,r=12;r="number"===typeof o?o:this.cardDistance||12;var i={margin:"-".concat(t.toRem(r/2),"rem")};return i},setProdAttr:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.prodIconCustomUrl=t.showProdIcon&&t.prodIconCustomUrl||"",this.showProdIcon=t.showProdIcon||!1,this.hideSystemIcon=t.hideSystemIcon||!1,this.handleProdClass(t,this.titleType),this.prodWrapStyle=Object(o["a"])({},this.handleProdWrapStyle(t))}}}}).call(this,a("7189")["default"])},"603c":function(t,e,a){"use strict";var o=a("5530"),r=a("d4ec"),i=a("bee2"),s=a("257e"),n=a("262e"),c=a("2caf"),d=a("8a8a"),l=function(t){Object(n["a"])(a,t);var e=Object(c["a"])(a);function a(){var t,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(r["a"])(this,a),t=e.call(this),t.time=0,t.scrolling=!1,t.reachBottomListen=!1,t.options=Object(o["a"])({onReachBottomDistance:300},i),t._scroll=t._scroll.bind(Object(s["a"])(t)),window.addEventListener("scroll",t._scroll),t}return Object(i["a"])(a,[{key:"_scroll",value:function(){var t=this.getScrollTop();this.emit("pageScroll",{scrollTop:t}),this.reachBottomListen&&t+window.innerHeight+this.options.onReachBottomDistance>=document.documentElement.scrollHeight&&(this.emit("reachBottom"),this.reachBottomListen=!1),this.scrolling||(this.scrolling=!0,this.emit("scrollStart")),Date.now()-this.time>300&&(this.scrolling=!1,this.reachBottomListen=!0,this.emit("scrollStop"),this.time=Date.now())}},{key:"getScrollTop",value:function(){return document.documentElement.scrollTop||document.body.scrollTop}}]),a}(d["a"]),p=l,h={mounted:function(){var t=this,e=new p;"function"===typeof this.$options.onPageScroll&&e.on("pageScroll",this.$options.onPageScroll.bind(this)),"function"===typeof this.$options.onReachBottom&&e.on("reachBottom",(function(){if(!window._isMobileLogging){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];t.$options.onReachBottom.apply(t,a)}}))}};e["a"]=h},"8e57":function(t,e,a){},9108:function(t,e,a){"use strict";(function(t){a("d3b7"),a("159b"),a("99af"),a("fb6a");var o=a("603c"),r=a("b68d"),i=a("191e"),s=a("fe47"),n=a("229e"),c=a("cd92"),d=a("bce3"),l=a("ed08"),p=a("f354");e["a"]={name:"product-category",mixins:[p["a"],o["a"],i["a"],r["a"]],data:function(){return{tabList:[],prodList:[{},{},{},{}],categoryId:"",pageIndex:0,isXhr:!1,loadMore:!0,partProps:{styleType:5},showPage:!0,lastIndex:0,isFixed:!1}},watch:{part:"initDataRefresh"},created:function(){this.initDataRefresh({firstLoad:!0})},methods:{initDataRefresh:function(t){var e=this;!t.firstLoad&&this.isDev||(this.setPartProp(),this.getCategories((function(){e.$nextTick((function(){e.initBScroll()})),e.getProdData()})))},setPartProp:function(){var t=this,e=t.part&&t.part.partProps||{},a=l["a"].setPartProps({props:e,oldProps:t.partProps}),o=a.prodList,r=a.partProps;this.prodList=o,this.partProps=r},getCategories:function(e){var a=this,o=s["a"].getMchId();t.request({url:"/api/prod/shophomecategorys?MerchantId=".concat(o)}).then((function(t){a.tabList=a.formatTabList(t&&t.list||[]),a.tabList.length?(e&&e(),a.categoryId=a.tabList[0].id,a.getProdData(!0)):a.showPage=!1})).catch((function(){a.showPage=!1}))},formatTabList:function(t){return t.forEach((function(t,e){t.active=0===e})),t},getProdData:function(e,a){var o=this,r=this.categoryId,i=s["a"].getMchId();if(i&&(e&&(this.pageIndex=0,this.loadMore=!0),!this.isXhr&&this.loadMore&&r)){this.isXhr=!0,a&&t.showLoading({title:this.$t("common.loading",["..."])});var n=l["a"].qs.stringify({MerchantId:i,PageIndex:this.pageIndex,CategoryId:r});t.request({url:"/api/prod/shophomeproducts?".concat(n)}).then((function(r){if(a&&t.hideLoading(),o.isXhr=!1,e&&(!r||!r.list))return o.prodList=[],void(o.loadMore=!1);if(e)o.prodList=r.list||[];else{var i=o.prodList;o.prodList=i.concat(r&&r.list||[]),!i.length||r.list&&r.list.length||(o.loadMore=!1)}})).catch((function(){a&&t.hideLoading(),o.isXhr=!1}))}},initBScroll:function(){this.bs=new n["a"](this.$refs.scroll,{scrollX:!0,click:!0,scrollY:!1})},tabCategory:function(t){var e=this,a="";t!==this.lastIndex&&(this.tabList.forEach((function(o,r){o.active=r===t,t===r&&(a=o.id,e.lastIndex=t)})),this.bsTabScroll(t),a&&(this.categoryId=a,this.getProdData(!0,!0)))},bsTabScroll:function(t){var e=this;this.$nextTick((function(){var a=e.getTargetEl(t);e.bs.scrollToElement(a,500,0)}))},getTargetEl:function(t){var e=document.querySelector(".product-category__tab"),a=[].slice.call(e.children),o=t-2>=0?t-2:0;return a[o]}},beforeDestroy:function(){this.bs&&this.bs.destroy&&this.bs.destroy()},components:{loadMore:d["a"],productListCard:c["a"]},onReachBottom:function(){!this.isXhr&&this.loadMore&&(this.pageIndex++,this.getProdData(!1))},onPageScroll:function(){var t,e=0;t=this.isFixed?document.querySelector(".product-category-tabwrapper-empty"):this.$refs.scroll,e=t&&t.getBoundingClientRect().top||0,!this.isFixed&&e<=0&&(this.isFixed=!0),this.isFixed&&e>30&&(this.isFixed=!1)}}}).call(this,a("7189")["default"])},a6d0:function(t,e,a){"use strict";a("8e57")},aa1d:function(t,e,a){},b777:function(t,e,a){"use strict";a("d78f")},bce3:function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",[t.hasMore?t.loading?e("div",{staticClass:"loading-container"},[e("div",{staticStyle:{background:"#E85252"}}),e("div",{staticStyle:{background:"#E9A24F"}}),e("div",{staticStyle:{background:"#53A6E5"}})]):t._e():e("div",{class:["loading-finish",{evaluate_list:"evaluateList"===t.source}],style:{color:t.color}},["evaluateList"===t.source?[e("div",{staticClass:"finish-img"},[e("img",{attrs:{src:t.$t("components.img_loading_finish"),alt:""}})])]:[e("div",{style:{backgroundColor:t.color}}),t._v(t._s(t.$t("components.finish"))+" "),e("div",{style:{backgroundColor:t.color}})]],2)])},r=[],i={props:{hasMore:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},color:{type:String,default:"#bbb"},source:{type:String}}},s=i,n=(a("ed43"),a("2877")),c=Object(n["a"])(s,o,r,!1,null,"7a90f424",null);e["a"]=c.exports},cd92:function(t,e,a){"use strict";var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prodlist",style:[t.prodListStyle,t.prodThemeStyle]},t._l(t.prodList,(function(a){return e("div",{key:a.id,class:["container",{"container-type2":2==t.prodType}]},[e("product-card",{attrs:{prodItem:a,titleType:t.titleType,priceLabel:t.priceLabel,isFixedPlace:t.isFixedPlace,cardType:t.cardType,marketPricePlaced:t.marketPricePlaced,hasShadow:t.hasShadow,isShowTaxTag:t.isShowTaxTag,prodType:t.prodType,showAddBtn:t.showAddBtn,addBtnDisabled:t.addBtnDisabled,priceType:2==t.prodType?"normal":t.priceType,hidePriceControlType:t.hidePriceControlType,ylogParams:t.ylogParams,brandPriceControl:t.brandPriceControl,prodEnv:t.prodEnv,brandNamePlaced:t.brandNamePlaced,isDev:t.isDev,showBrandDev:t.showBrandDev,navigatorParams:t.navigatorParams,prodIconCustomUrl:t.prodIconCustomUrl,memberPic:t.memberPic,memberGrade:t.memberGrade,showProdIcon:t.showProdIcon,hideSystemIcon:t.hideSystemIcon,prodWrapStyle:t.prodWrapStyle,productStyleClass:t.productStyleClass,priceStyleClass:t.priceStyleClass,luxuryStyle:t.luxuryStyle,productStyleData:t.productStyleData,productNum:a.productNum,pageType:t.pageType},on:{handleAddBtn:t.handleAdd,handleReduceBtn:t.handleReduce}})],1)})),0)},r=[],i=a("58b0"),s=i["a"],n=(a("b777"),a("2877")),c=Object(n["a"])(s,o,r,!1,null,"d4f25bd2",null);e["a"]=c.exports},d78f:function(t,e,a){},ed43:function(t,e,a){"use strict";a("aa1d")},f354:function(t,e,a){"use strict";(function(t){var o=a("5530"),r=(a("caad"),a("2532"),a("d3b7"),a("b00c")),i=function(){},s={props:{isDev:{type:Boolean,default:!1},pageData:{type:Object,default:function(){return{}}},ylogParams:{type:Object,default:function(){return{}}}},methods:{getLinkData:function(t){var e=this.pageData&&this.pageData.tempCode||"";return[r["c"].BRAND_SUBJECT,r["c"].INBUY_SUBJECT].includes(e)&&(t.partId=this.part.partId||"",r["c"].BRAND_SUBJECT===e&&(t.brandId=this.pageData.brandId||""),r["c"].INBUY_SUBJECT===e&&(t.activityId=this.activityId||"",t.activityType=this.activityType||"")),t},fetchPartData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,r=a.partId,i=a.dataItems,s=a.partProps;return this.isDev?Promise.resolve({list:i||[],partProps:s}):r?t.request({url:"/api/prod/shophomepartdata",method:"get",params:Object(o["a"])(Object(o["a"])({},e),{},{PartId:r})}):Promise.reject({message:"partId 不存在"})},fetchPartCenterData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,r=a.dataItems,i=a.partProps;return this.isDev?Promise.resolve({list:r||[],partProps:i}):t.request({url:"/api/prod/shopcouponcentercouponlist",method:"get",params:Object(o["a"])({},e)})},getDatas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,o=this.part,r=o.partId,s=o.dataItems,n=o.partProps;this.isDev?e({list:s||[],partProps:n}):r?t.request({url:"/api/prod/shophomepartdata?PartId=".concat(r),method:"get"}).then((function(t){e(t||{})})).catch((function(t){a(t)})):a({message:"partId 不存在"})}}};e["a"]=s}).call(this,a("7189")["default"])}}]);