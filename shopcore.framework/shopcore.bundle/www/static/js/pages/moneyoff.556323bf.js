(function(t){function i(i){for(var a,n,r=i[0],c=i[1],l=i[2],p=0,d=[];p<r.length;p++)n=r[p],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(i);while(d.length)d.shift()();return o.push.apply(o,l||[]),e()}function e(){for(var t,i=0;i<o.length;i++){for(var e=o[i],a=!0,r=1;r<e.length;r++){var c=e[r];0!==s[c]&&(a=!1)}a&&(o.splice(i--,1),t=n(n.s=e[0]))}return t}var a={},s={"pages/moneyoff":0},o=[];function n(i){if(a[i])return a[i].exports;var e=a[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.e=function(){return Promise.resolve()},n.m=t,n.c=a,n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,i){if(1&i&&(t=n(t)),8&i)return t;if(4&i&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var a in t)n.d(e,a,function(i){return t[i]}.bind(null,a));return e},n.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},n.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=i,r=r.slice();for(var l=0;l<r.length;l++)i(r[l]);var u=c;o.push([82,"chunk-vendors","chunk-common"]),e()})({"6eb7":function(t,i,e){"use strict";e("ed01")},82:function(t,i,e){t.exports=e("de19")},"9cbc":function(t,i,e){"use strict";(function(t){var a=e("5530"),s=(e("ac1f"),e("841c"),e("b64b"),e("1276"),e("00b4"),e("99af"),e("fb6a"),e("b68d")),o=e("603c"),n=e("cd92"),r=e("44e4"),c=e("bce3"),l=e("fec4"),u=e("566a");i["a"]={components:{productListCard:n["a"],loadingLine:r["a"],loadmore:c["a"],selectsku:l["a"],storeDialog:u["a"]},mixins:[o["a"],s["a"]],onReachBottom:function(){this.loadMore()},data:function(){return{tag:"",titles:[],timelimit:"",symbol:"",isExplain:!1,loading:!1,prodList:[],bannerUrl:"",bgColor:"",titleColor:"",pageIndex:0,isNoMore:!1,firstData:{},rgbObj:{},isActivityEmpty:!1,skus:{},skuDefault:{showSkuPop:!1,skuType:1,pic:"",price:"",selectId:"",foreign:!1,symbol:""},hideHeader:!1,showStoreDialog:!1,shopDetailDto:null,productDetailInfo:{}}},computed:{tagText:function(){var t={1:this.$tc("moneyoff.discounts",1),2:this.$tc("moneyoff.discounts",2),3:this.$tc("moneyoff.discounts",1),4:this.$tc("moneyoff.discounts",2)};return t[this.tag]||""},showPage:function(){return(this.prodList&&this.prodList.length||!this.loading)&&!this.isActivityEmpty},isPackageType:function(){return 6===this.tag},defaultBanner:function(){var t=6===this.tag?this.$t("moneyoff.img_procurement"):this.$t("moneyoff.img_exm");return t}},mounted:function(){this.fetchInfo({pageIndex:1})},methods:{loadMore:function(){this.isNoMore||this.loading||this.fetchInfo({pageIndex:this.pageIndex+1})},fetchInfo:function(i){var e=this,s=i.pageIndex,o=void 0===s?1:s,n=t.parseLocator(window.location.search,"lower"),r={pageIndex:o,promotionId:n.id};n.brandid&&(r.brandId=n.brandid),this.loading=!0,t.request({url:"/api/prod/shoppromotioninfo",data:r}).then((function(i){if(e.loading=!1,i){if(e.pageIndex=o,1===o){if(!i||0===Object.keys(i).length)return void(Object.keys(e.firstData).length>0?e.firstData=Object(a["a"])(Object(a["a"])({},e.firstData),{},{state:3}):e.hideHeader=!0);e.hideHeader=!1,e.titles=i.title&&i.title.split(","),e.tag=i.tag,e.isExplain=i.isExplain,e.symbol=i.symbol,/^https?/.test(i.bannerUrl)&&(e.bannerUrl=i.bannerUrl),e.bgColor=i.bgColor||(6===i.tag?"#F8F8F8":"#FC1254"),e.titleColor=i.titleColor||"white",e.firstData=Object(a["a"])({timestamp:Math.ceil(i.timestamp/1e3),timeLabel:i.timeLabel,state:i.state},e.calcTime(Math.ceil(i.timestamp/1e3))),e.rgbObj=e.hexToRgb(i.bgColor||"#FC1254"),t.setNavigationBarTitle({title:i.promotionName||""}),t.wxShare({title:i.promotionName||""}),i.timestamp>0&&(e.stopTimer(),e.startTimer()),e.prodList=i.productList||[]}else e.prodList=e.prodList.concat(i.productList||[]);i.productList&&0!==i.productList.length||(e.isNoMore=!0)}else e.isActivityEmpty=!0})).catch((function(){e.loading=!1,e.isActivityEmpty=!0}))},stopTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},startTimer:function(){var t=this;this.timer||(this.timer=setInterval((function(){t.countDown()}),1e3))},countDown:function(){var t=this,i=Object(a["a"])({},this.firstData);if(i.timestamp>0){i.timestamp-=1;var e=this.calcTime(i.timestamp);i.dd=e.dd,i.hh=e.hh,i.mm=e.mm,i.ss=e.ss,i.timestamp<=0&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.fetchInfo({pageIndex:1})}),400))}this.firstData=Object(a["a"])({},i)||{}},calcTime:function(t){if(t<=0)return{hh:"00",mm:"00",ss:"00"};var i=t,e=Math.floor(i/3600/24),a=Math.floor((i-3600*e*24)/3600),s=Math.floor((i-3600*e*24-3600*a)/60),o=i-3600*e*24-3600*a-60*s;return{dd:this.formatNum(e),hh:this.formatNum(a),mm:this.formatNum(s),ss:this.formatNum(o)}},formatNum:function(t){var i=String(t);return i.length?1===i.length?"0".concat(i):i:"00"},getStateDesc:function(t){var i="";switch(t){case 1:i="";break;case 2:i=this.$tc("moneyoff.active_state",1);break;case 3:i=this.$tc("moneyoff.active_state",2);break;default:i=this.$tc("moneyoff.active_state",2);break}return i},hexToRgb:function(t){var i,e,a;return/^#/g.test(t)?(i=t.slice(1,3),e=t.slice(3,5),a=t.slice(5,7),{r:parseInt(i,16),g:parseInt(e,16),b:parseInt(a,16)}):{}},handleAddBtn:function(i){var e=this;t.showLoading({title:this.$t("moneyoff.request_specification")}),this.prodCurrent=i,t.request({url:"/api/prod/sqdetail?productid=".concat(i.id),method:"get"}).then((function(a){3==a.nationType&&(a.price.foreign=!1),e.skus=a.skus,e.skuDefault.showSkuPop=!0,e.skuDefault.pic=i.pic,e.skuDefault.price=i.price,e.skuDefault.selectId=i.catalogId,e.skuDefault.foreign=a.price&&a.price.foreign,e.skuDefault.symbol=a.price&&a.price.symbol||"¥",e.skuDefault.minNum=a.minOrderNum||0,e.skuDefault.vipLogo=a.memberGrade&&a.memberGrade.logoUrl,e.skuDefault.subsidyInterval=a.price.subsidyPrice&&a.price.subsidyPrice[0]!=a.price.subsidyPrice[1]?e.$t("moneyoff.rise"):"",e.skuDefault.vipInterval=a.price.vipPrice&&a.price.vipPrice[0]!=a.price.vipPrice[1]?e.$t("moneyoff.rise"):"",e.skuDefault.subsidyExchangePrice=a.price.subsidyExchangePrice&&a.price.subsidyExchangePrice[0],e.skuDefault.vipExchangePrice=a.price.vipExchangePrice&&a.price.vipExchangePrice[0],e.skuDefault.vipPrice=a.price&&a.price.vipPrice&&a.price.vipPrice[0],e.skuDefault.subsidyPrice=a.price.subsidyPrice&&a.price.subsidyPrice[0],e.productDetailInfo=a,a.saleChannel?(e.skuDefault.skuType=10,e.skuDefault.confirmName=e.$t("item.store_buy"),e.shopDetailDto=a.shopDetailDto||null,e.skuDefault.inQualificationsGroup=!1,e.skuDefault.inDrawLots=!1):a.vipNotCanBuyGroup&&a.vipNotCanBuyGroup.inGroup&&2==a.vipNotCanBuyGroup.groupStatus?(e.skuDefault.skuType=11,e.skuDefault.confirmName=a.vipNotCanBuyGroup.nextCanBuyDesc,e.shopDetailDto=null,e.skuDefault.inQualificationsGroup=!1,e.skuDefault.inDrawLots=!1):0==a.state&&a.inQualificationsGroup?(e.skuDefault.inQualificationsGroup=!0,e.skuDefault.skuType=12,e.shopDetailDto=null):a.activityInfo&&25===a.activityInfo.type?(e.skuDefault.inDrawLots=!0,e.skuDefault.skuType=13,e.shopDetailDto=null):(e.skuDefault.skuType=2,e.skuDefault.confirmName="",e.shopDetailDto=null,e.skuDefault.inQualificationsGroup=!1,e.skuDefault.inDrawLots=!1),e.skuDefault.moneyoffQualificationsStatus=!0,t.hideLoading()})).catch((function(i){t.hideLoading(),t.showToast({title:i.message||i.msg||e.$t("moneyoff.failed_obtain")})}))},skuConfirmCB:function(i){var e=this,a=this;if(a.showSkuFunc(!1),10!=i.skuType){if(11!=i.skuType)return 12==i.skuType?t.auth.islogin()?void(t.isMiniApp?wx.miniProgram.navigateTo({url:"/pages/item/item?productId=".concat(this.productDetailInfo.id)}):t.navigateTo({url:"/pages/item/main?productId=".concat(this.productDetailInfo.id)})):void t.auth.tologin():void(13!=i.skuType?t.auth.islogin()?t.auth.authBindMobile().then((function(){var s={CatalogId:i.catalogId,Sale4Price:i.purchaseprice,purchasenum:i.purchasenum,deliveryType:i.deliveryType};t.ylog.send({action_type:"click",module_name:"moneyoff",sub_module_name:"add_to_shoppingcart",sproductid:e.prodCurrent.id,catalog:s.CatalogId}),a.checkData()&&a.addCart(s)})):t.auth.tologin():t.isMiniApp?wx.miniProgram.navigateTo({url:"/subPackage2/pages/activityItem/activityItem?productId=".concat(this.productDetailInfo.id,"&activityId=").concat(this.productDetailInfo.activityInfo&&this.productDetailInfo.activityInfo.activityId)}):t.showToast({title:this.$t("components.selectsku.goto_programs_qualification")}));this.vipDisableConfirm()}else this.handleShowStoreDialog()},showSkuFunc:function(t){this.skuDefault.showSkuPop=!!t},addCart:function(i){var e=this,a={catalogid:i.CatalogId,purchasenum:i.purchasenum,deliverytype:i.deliveryType,checked:!0};t.request({method:"POST",url:"/api/trading/sqscartprod",data:a}).then((function(i){i.success?t.showToast({title:e.$t("moneyoff.cart_successfully"),icon:"success",className:"longToast"}):t.showToast({title:i.msg||e.$t("moneyoff.failed_cart")})})).catch((function(i){t.showToast({title:i.message||e.$t("moneyoff.failed_cart")})}))},handleShowStoreDialog:function(){this.showStoreDialog=!0},handleHidetoreDialog:function(){this.showStoreDialog=!1},checkData:function(){return 1==this.productDetailInfo.state&&this.productDetailInfo.activityInfo&&0==this.productDetailInfo.activityInfo.state?(t.showToast({title:this.$t("item.sorry_started"),icon:"none"}),!1):!this.productDetailInfo.activityInfo||4!=this.productDetailInfo.activityInfo.type&&6!=this.productDetailInfo.activityInfo.type&&21!=this.productDetailInfo.activityInfo.type&&24!=this.productDetailInfo.activityInfo.type&&22!=this.productDetailInfo.activityInfo.type||0!=this.productDetailInfo.activityInfo.state||(t.showToast({title:this.$t("item.sorry_started"),icon:"none"}),!1)},vipDisableConfirm:function(i){this.productDetailInfo&&(this.productDetailInfo.vipNotCanBuyGroup&&this.productDetailInfo.vipNotCanBuyGroup.inGroup&&this.productDetailInfo.vipNotCanBuyGroup.isVip?t.navigateTo({url:"/pages/membercenter/main"}):t.showToast({title:this.productDetailInfo.vipNotCanBuyGroup.nextCanBuyDesc,icon:"none"}))}}}}).call(this,e("7189")["default"])},de19:function(t,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("56d7"),s=(e("99af"),function(){var t=this,i=t._self._c;return i("div",{staticClass:"container",style:[{background:t.bgColor},t.pageThemeStyle]},[t.showPage&&!t.hideHeader?i("div",{staticClass:"head"},[i("div",{staticClass:"card"},[t.bannerUrl?i("img",{staticClass:"card__banner",attrs:{src:t.bannerUrl}}):i("img",{staticClass:"card__banner",attrs:{src:t.defaultBanner}}),t.isPackageType?t._e():i("div",{staticClass:"card__title"},[i("div",{staticClass:"card__shadow",style:{background:"linear-gradient(360deg,".concat(t.bgColor," 0%,rgba(").concat(t.rgbObj.r,",").concat(t.rgbObj.g,",").concat(t.rgbObj.b,",0) 100%)")}}),i("img",{staticClass:"card__title__dot",attrs:{src:e("81bd")}}),i("span",{staticClass:"card__title__text",style:{color:t.titleColor}},[t._v(t._s(t.$t("moneyoff.following",{0:t.isExplain?t.$t("moneyoff.same"):"",1:t.tagText})))]),i("img",{staticClass:"card__title__dot dot--right",attrs:{src:e("81bd")}})]),i("div",{class:["card__container",{"card__container-package":t.isPackageType}]},[i("img",{staticClass:"card__container__top",attrs:{src:e("bd11")}}),i("div",{class:["card__container__content",{pdb90:1===t.firstData.state&&t.firstData.timestamp>0},{pdb34:1===t.firstData.state&&!t.firstData.timestamp},{pdb74:2===t.firstData.state||3===t.firstData.state}]},[i("span",{staticClass:"content__title"},[i("div",{staticClass:"item"},[t._v(t._s(t.$t("moneyoff.single_order"))+t._s(t.symbol?"(".concat(t.symbol,")"):"")+" :")]),t._l(t.titles,(function(e,a){return i("div",{key:a,staticClass:"item"},[t._v(t._s(e))])}))],2)]),i("img",{staticClass:"card__container__bottom",attrs:{src:e("836f")}}),i("div",{staticClass:"content__abs"},[i("span",{staticClass:"content__date"},[t._v(t._s(t.firstData.timeLabel))]),t.firstData.timestamp||1!==t.firstData.state?i("span",{staticClass:"content__status"},[i("div",{staticClass:"prod-time"},[t.firstData.timestamp>0?i("div",{staticClass:"prod-time-wrap"},[i("span",{staticClass:"prod-time-desc"},[t._v(t._s(1===t.firstData.state?t.$tc("moneyoff.start_over",1):t.$tc("moneyoff.start_over",2)))]),t.firstData.dd>0?[i("span",{staticClass:"prod-time-r prod-h"},[t._v(t._s(t.firstData.dd||"00"))]),i("span",{staticClass:"prod-time-day"},[t._v(t._s(t.$t("moneyoff.day")))])]:t._e(),i("span",{staticClass:"prod-time-r prod-h"},[t._v(t._s(t.firstData.hh||"00"))]),i("span",{staticClass:"prod-time-gap"},[t._v(":")]),i("span",{staticClass:"prod-time-r prod-m"},[t._v(t._s(t.firstData.mm||"00"))]),i("span",{staticClass:"prod-time-gap"},[t._v(":")]),i("span",{staticClass:"prod-time-r prod-s"},[t._v(t._s(t.firstData.ss||"00"))])],2):i("span",{class:["prod-time-tip",{"tip-end":3===t.firstData.state}]},[t._v(t._s(t.getStateDesc(t.firstData.state)))])])]):t._e()])])])]):t._e(),i("div",{staticClass:"content"},[3===t.firstData.state?i("div",{staticClass:"content__mask"},[i("div",{staticClass:"mask"})]):t._e(),t.loading&&0===t.pageIndex?i("loading-line"):t._e(),t.loading||0!==t.prodList.length?t._e():i("div",{staticClass:"empty"},[i("img",{attrs:{src:t.$t("fashsale.img_fashsale_empty")}}),i("p",{style:{color:t.isActivityEmpty?"rgba(155, 155, 155, 1)":t.isPackageType?"#bbb":"#fff"}},[t._v(t._s(t.isActivityEmpty?t.$tc("moneyoff.activity_commodity",1):t.$tc("moneyoff.activity_commodity",2)))])]),i("div",{staticClass:"content__list"},[i("product-list-card",{attrs:{prodList:t.prodList,showPriceControlType:!1,prodType:2,hasShadow:!1,showAddBtn:"",prodSkinData:t.prodSkinData,addBtnDisabled:2===t.firstData.state},on:{handleAddBtn:t.handleAddBtn}})],1),t.prodList.length>0?i("loadmore",{attrs:{color:"#fff",loading:t.loading&&t.pageIndex>0,hasMore:!t.isNoMore}}):t._e()],1),t.skus&&t.skuDefault.showSkuPop?i("selectsku",{attrs:{skus:t.skus,skuDefault:t.skuDefault,isFromTuan:!1,productDetailInfo:t.productDetailInfo},on:{skuConfirmCB:t.skuConfirmCB,showSkuFunc:t.showSkuFunc}}):t._e(),i("storeDialog",{attrs:{shopDetailDto:t.shopDetailDto},on:{hideDialog:t.handleHidetoreDialog},model:{value:t.showStoreDialog,callback:function(i){t.showStoreDialog=i},expression:"showStoreDialog"}})],1)}),o=[],n=e("9cbc"),r=n["a"],c=(e("6eb7"),e("2877")),l=Object(c["a"])(r,s,o,!1,null,"52fc6a56",null),u=l.exports;e.p=publicPath,Object(a["a"])(u)},ed01:function(t,i,e){}});