(function(t){function e(e){for(var a,r,n=e[0],c=e[1],u=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var c=i[n];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={"pages/makeup":0},o=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.e=function(){return Promise.resolve()},r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var l=c;o.push([67,"chunk-vendors","chunk-common"]),i()})({2469:function(t,e,i){},67:function(t,e,i){t.exports=i("afdf")},"7ed9":function(t,e,i){"use strict";i("2469")},afdf:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("56d7"),s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap",style:t.pageThemeStyle},[t.showPage?[e("div",{staticClass:"wrap-top"},[e("van-sticky",[e("filter-bar",{attrs:{selectedList:t.selectedList,filterList:t.filterList},on:{getSearchResult:t.getSearchResult}})],1)],1),t.prodList.length>0?e("div",{staticClass:"wrap-content"},[e("div",{staticClass:"wrap-content-desc"},[e("span",{staticClass:"desc-title"},[t._v(t._s(t.activity.descMin))]),1===t.activity.status||2===t.activity.status?e("span",{staticClass:"desc-subtitle"},[t._v(t._s(t.$t("makeup.activity_time"))+t._s(t.activity.beginTime)+" - "+t._s(t.activity.endTime))]):e("span",{staticClass:"desc-subtitle"},[t._v(t._s(t.$t("makeup.activity_over")))])]),e("div",{staticClass:"wrap-content-list"},[e("product-list-card",{attrs:{prodList:t.prodList,hidePriceControlType:"",prodType:2,hasShadow:!1,showAddBtn:"",prodSkinData:t.prodSkinData},on:{handleAddBtn:t.handleAddBtn}})],1),e("div",{staticClass:"wrap-load-more"},[e("load-more",{attrs:{hasLoad:t.loadMore,loading:t.isXhr}})],1)]):0===t.prodList.length?e("div",{staticClass:"empty"},[e("img",{attrs:{src:t.$t("fashsale.img_fashsale_empty")}}),e("p",[t._v(t._s(t.$t("makeup.no_goods")))])]):t._e(),e("div",{staticClass:"wrap-bottom-container"},[e("div",{staticClass:"wrap-bottom"},[e("span",{staticClass:"wrap-bottom-desc"},[1===t.activity.status?[t.activityValue&&t.activityValue>0?[e("span",[t._v(t._s(t.$t("makeup.short")))]),e("span",{staticClass:"desc-price"},[t._v(t._s(t.activityMixDesc))]),e("span",[t._v(t._s(t.$t("makeup.participate_activities")))])]:e("span",[t._v(t._s(t.$t("makeup.purchase_conditions")))])]:2===t.activity.status?e("span",[t._v(t._s(t.$tc("makeup.active_state",1)))]):e("span",[t._v(t._s(t.$tc("makeup.active_state",2)))])],2),e("div",{class:["wrap-bottom-btn",{"wrap-bottom-btn__disabled":t.btnDisabled}],on:{click:t.goSwap}},[t._v(t._s(t.$t("makeup.choose")))])])])]:t.showPage?t._e():e("loading-line"),t.skus&&t.skuDefault.showSkuPop?e("selectsku",{attrs:{skus:t.skus,skuDefault:t.skuDefault,isFromTuan:!1,saleActivityTitles:t.isBrandPriceType?t.saleActivityTitles:[],productDetailInfo:t.productDetailInfo},on:{skuConfirmCB:t.skuConfirmCB,showSkuFunc:t.showSkuFunc}}):t._e(),e("storeDialog",{attrs:{shopDetailDto:t.shopDetailDto},on:{hideDialog:t.handleHidetoreDialog},model:{value:t.showStoreDialog,callback:function(e){t.showStoreDialog=e},expression:"showStoreDialog"}})],2)},o=[],r=i("f9f2"),n=r["a"],c=(i("7ed9"),i("2877")),u=Object(c["a"])(n,s,o,!1,null,"0579eb70",null),l=u.exports;i.p=publicPath,Object(a["a"])(l)},f9f2:function(t,e,i){"use strict";(function(t){var a=i("5530"),s=(i("0cc8"),i("3104")),o=(i("a9e3"),i("ac1f"),i("841c"),i("99af"),i("c96a"),i("1276"),i("b68d")),r=i("603c"),n=i("1041"),c=i("13cb"),u=i("cd92"),l=i("fec4"),d=i("bce3"),p=i("44e4"),f=i("566a"),h=i("ed08");e["a"]={components:{filterBar:c["a"],productListCard:u["a"],selectsku:l["a"],loadMore:d["a"],loadingLine:p["a"],"van-sticky":s["a"],storeDialog:f["a"]},mixins:[r["a"],n["a"],o["a"]],data:function(){return{showPage:!1,prodList:[],isShowSku:!1,isXhr:!1,skuDefault:{showSkuPop:!1,skuType:1,pic:"",price:"",selectId:"",foreign:!1,symbol:""},skus:{},prodCurrent:{},maxPageIndex:0,loadMore:!1,prodListEmpty:!1,pageIndex:1,selectedList:{},filterList:{},queryObj:{},activityId:"",activity:{},fromPage:"",saleActivityTitles:[],showStoreDialog:!1,shopDetailDto:null,productDetailInfo:{}}},onReachBottom:function(){this.pageIndex+=1;var t=this.pageIndex>this.maxPageIndex||this.prodListEmpty;t||this.getSearchResult({needClearOldData:!1,refreshProduct:!0})},computed:{activityValue:function(){var t=this.activity.buyPrice;return Number(t)},activityUnit:function(){var t=this.activity,e=t.conditionType,i=t.symbol,a=void 0===i?"¥":i;return 1===e?a:this.$t("makeup.piece")},activityMixDesc:function(){var t=this.activity.conditionType,e="";return e=this.isJPY(this.activityUnit)||1!==t?this.activityValue+this.activityUnit:this.activityUnit+this.activityValue,e},btnDisabled:function(){return!(this.activityValue<=0&&1===this.activity.status)},isBrandPriceType:function(){return t.store.isBrandPriceType}},mounted:function(){var e=this;t.setNavigationBarTitle({title:this.$t("makeup.activities_goods")});var i=t.parseLocator(window.location.search,"lower");this.activityId=Number(i.id)||"",this.fromPage=i.frompage,this.getSearchResult({needClearOldData:!0,refreshProduct:!0}),t.onShow((function(){e.getSearchResult({needClearOldData:!0,refreshProduct:!1})})),t.wxShare({title:this.$t("makeup.activities_goods")})},methods:{getSearchResult:function(e){var i=this,s=e.needClearOldData,o=e.queryObj,r=e.selectedList,n=e.refreshProduct,c=e.showloading,u=e.changeKeyword;this.pageIndex=s?1:this.pageIndex,o&&(this.queryObj=Object(a["a"])({},o)),r&&(this.selectedList=r);var l=Object(a["a"])(Object(a["a"])({},this.queryObj),{},{pageIndex:this.pageIndex,activityId:this.activityId,refreshProduct:n});if(!this.isXhr){this.selectedList&&(t.isBlank(this.selectedList.brandList)||(l.brandList=this.selectedList.brandList),t.isBlank(this.selectedList.categoryList)||(l.thirdCategoryList=this.selectedList.categoryList,l.firstCategoryList=[],l.secondCategoryList=[]),l.minPrice=this.selectedList.minPrice,l.maxPrice=this.selectedList.maxPrice),l.keyword||delete l.keyword,c&&t.showLoading(),this.isXhr=!0;var d="/api/prod/sqdoorexchangebuy";t.request({url:d,method:"post",data:l}).then((function(e){if(i.isXhr=!1,i.showPage=!0,c&&t.hideLoading(),n){if((e.filterList&&t.isBlank(i.filterList)||u)&&(i.filterList=Object(a["a"])({},e.filterList||{})),(!e.list||!e.list.length)&&(!i.prodList.length||s))return void(s&&(i.prodList=[]));var o=e.list||[],d=i.prodList,p=s?o:d.concat(o),f=!e.list||0===e.list.length,h=e.count||0;i.prodList=p,i.maxPageIndex=h,i.prodListEmpty=f,i.selectedList=(r?i.selectedList:e.selectedList)||{},i.loadMore=l.pageIndex<h&&!f,s&&(document.documentElement.scrollTop=document.body.scrollTop=0)}!s&&n||(i.activity=e.activity||{})})).catch((function(e){i.isXhr=!1,i.showPage=!0,c&&t.hideLoading(),t.showToast({title:e.message||i.$t("makeup.search_failed")})}))}},handleAddBtn:function(e){var i=this;t.showLoading({title:this.$t("makeup.request_specification")}),this.prodCurrent=e,t.request({url:"/api/prod/sqdetail?productid=".concat(e.id),method:"get"}).then((function(e){if(t.hideLoading(),!Object(h["c"])(e)){var a="",s=!1,o=!1,r=e.activityInfo&&2===e.activityInfo.state;e.price.interval[0]!==e.price.interval[1]&&(a=i.$t("makeup.rise"));var n=e.activityInfo&&e.activityInfo.state<2;e.activityInfo&&5===e.activityInfo.type&&0===e.activityInfo.state&&(n=!1),n&&e.activityInfo&&(4===e.activityInfo.type||6===e.activityInfo.type?(0===e.activityInfo.state&&(o=!0),s=!0):1===e.activityInfo.state&&(s=!0)),3==e.nationType&&(e.price.foreign=!1),i.skus=e.skus,i.skuDefault.showSkuPop=!0,i.skuDefault.pic=e.picList[0].small,i.skuDefault.price=e.price.interval[0],i.skuDefault.interval=a,i.skuDefault.exchangePrice=e.price.exchange?e.price.exchange[0]:"",i.skuDefault.foreign=e.price.foreign,i.skuDefault.symbol=e.price.symbol,i.skuDefault.minNum=e.minOrderNum,i.skuDefault.type=s?3:0,i.skuDefault.skuShowOriginalPrice=o,i.skuDefault.activitySaleout=r,i.skuDefault.vipLogo=e.memberGrade&&e.memberGrade.logoUrl,i.skuDefault.subsidyInterval=e.price.subsidyPrice&&e.price.subsidyPrice[0]!=e.price.subsidyPrice[1]?i.$t("makeup.rise"):"",i.skuDefault.vipInterval=e.price.vipPrice&&e.price.vipPrice[0]!=e.price.vipPrice[1]?i.$t("makeup.rise"):"",i.skuDefault.subsidyExchangePrice=e.price.subsidyExchangePrice&&e.price.subsidyExchangePrice[0],i.skuDefault.vipExchangePrice=e.price.vipExchangePrice&&e.price.vipExchangePrice[0],i.skuDefault.vipPrice=e.price&&e.price.vipPrice&&e.price.vipPrice[0],i.skuDefault.subsidyPrice=e.price.subsidyPrice&&e.price.subsidyPrice[0],i.productDetailInfo=e,e.saleChannel?(i.skuDefault.skuType=10,i.skuDefault.confirmName=i.$t("item.store_buy"),i.shopDetailDto=e.shopDetailDto||null,i.skuDefault.inQualificationsGroup=!1,i.skuDefault.inDrawLots=!1):e.vipNotCanBuyGroup&&e.vipNotCanBuyGroup.inGroup&&2==e.vipNotCanBuyGroup.groupStatus?(i.skuDefault.skuType=11,i.skuDefault.confirmName=e.vipNotCanBuyGroup.nextCanBuyDesc,i.shopDetailDto=null,i.skuDefault.inQualificationsGroup=!1,i.skuDefault.inDrawLots=!1):0==e.state&&e.inQualificationsGroup?(i.skuDefault.inQualificationsGroup=!0,i.skuDefault.skuType=12,i.shopDetailDto=null):e.activityInfo&&25===e.activityInfo.type?(i.skuDefault.inDrawLots=!0,i.skuDefault.skuType=13,i.shopDetailDto=null):(i.skuDefault.skuType=1,i.skuDefault.confirmName="",i.shopDetailDto=null,i.skuDefault.inQualificationsGroup=!1,i.skuDefault.inDrawLots=!1),i.loadSellerInfo(e)}})).catch((function(e){t.hideLoading(),t.showToast({title:e.message||e.msg||i.$t("makeup.failed_specifications")})}))},skuConfirmCB:function(e){var i=this,a=this;if(a.showSkuFunc(!1),10!=e.skuType){if(11!=e.skuType)return 12==e.skuType?t.auth.islogin()?void(t.isMiniApp?wx.miniProgram.navigateTo({url:"/pages/item/item?productId=".concat(this.productDetailInfo.id)}):t.navigateTo({url:"/pages/item/main?productId=".concat(this.productDetailInfo.id)})):void t.auth.tologin():void(13!=e.skuType?t.auth.islogin()?t.auth.authBindMobile().then((function(){var s={CatalogId:e.catalogId,Sale4Price:e.purchaseprice,purchasenum:e.purchasenum,deliveryType:e.deliveryType};t.ylog.send({action_type:"click",module_name:"specification",sub_module_name:"add_to_shoppingcart",sproductid:i.prodCurrent.id,catalog:s.CatalogId}),a.checkData()&&a.addCart(s)})):t.auth.tologin():t.isMiniApp?wx.miniProgram.navigateTo({url:"/subPackage2/pages/activityItem/activityItem?productId=".concat(this.productDetailInfo.id,"&activityId=").concat(this.productDetailInfo.activityInfo&&this.productDetailInfo.activityInfo.activityId)}):t.showToast({title:this.$t("components.selectsku.goto_programs_qualification")}));this.vipDisableConfirm()}else this.handleShowStoreDialog()},showSkuFunc:function(t){this.skuDefault.showSkuPop=!!t},loadSellerInfo:function(e){var i=this;if(e||e.price){var a={productId:e.id,currency:e.price.currency,symbol:e.price.symbol,effectActivityInfo:e.effectActivityInfo,activityInfo:e.activityInfo,brandId:e.brandId,categoryId:e.categoryId,masterCategoryId:e.masterCategoryId,thirdCategoryId:e.thirdCategoryId,domestic:e.domestic,nationType:e.nationType,tariffType:e.tariffType};t.request({url:"/api/prodpromo/getSellerInfo",data:a,method:"post"}).then((function(e){200!==e.code&&t.showToast({title:e.message||i.$t("makeup.failed_information")});var a=e.data,s=[];a.saleActivity&&a.saleActivity[0]&&a.saleActivity[0].title&&(s=a.saleActivity[0].title.split(",")),i.sellerInfo=a,i.saleActivityTitles=s})).catch((function(e){t.showToast({title:e.message||i.$t("makeup.failed_information")})}))}},addCart:function(e){var i=this,a={catalogid:e.CatalogId,purchasenum:e.purchasenum,deliverytype:e.deliveryType,checked:!0};t.request({method:"POST",url:"/api/trading/sqscartprod",data:a}).then((function(e){e.success?(t.showToast({title:i.$t("makeup.added_cart_successfully"),icon:"success",className:"longToast"}),i.getSearchResult({needClearOldData:!1,refreshProduct:!1})):t.showToast({title:e.msg||i.$t("makeup.added_cart_successfully")})})).catch((function(e){t.showToast({title:e.message||i.$t("makeup.failed_add_cart")})}))},goSwap:function(){if(t.ylog.send({action_type:"click",module_name:"ok_button"}),!this.btnDisabled)if("swap"===this.fromPage)t.navigateBack();else{var e=t.getQuery(),i=e.isMiniApp,a=void 0!==i&&i;a?wx.miniProgram.navigateTo({url:"/subPackage/pages/swap/swap?id=".concat(this.activityId)}):t.navigateTo({url:"/pages/swap/main?id=".concat(this.activityId)})}},handleShowStoreDialog:function(){this.showStoreDialog=!0},handleHidetoreDialog:function(){this.showStoreDialog=!1},checkData:function(){return 1==this.productDetailInfo.state&&this.productDetailInfo.activityInfo&&0==this.productDetailInfo.activityInfo.state?(t.showToast({title:this.$t("item.sorry_started"),icon:"none"}),!1):!this.productDetailInfo.activityInfo||4!=this.productDetailInfo.activityInfo.type&&6!=this.productDetailInfo.activityInfo.type&&21!=this.productDetailInfo.activityInfo.type&&24!=this.productDetailInfo.activityInfo.type&&22!=this.productDetailInfo.activityInfo.type||0!=this.productDetailInfo.activityInfo.state||(t.showToast({title:this.$t("item.sorry_started"),icon:"none"}),!1)},vipDisableConfirm:function(e){this.productDetailInfo&&(this.productDetailInfo.vipNotCanBuyGroup&&this.productDetailInfo.vipNotCanBuyGroup.inGroup&&this.productDetailInfo.vipNotCanBuyGroup.isVip?t.navigateTo({url:"/pages/membercenter/main"}):t.showToast({title:this.productDetailInfo.vipNotCanBuyGroup.nextCanBuyDesc,icon:"none"}))}}}}).call(this,i("7189")["default"])}});