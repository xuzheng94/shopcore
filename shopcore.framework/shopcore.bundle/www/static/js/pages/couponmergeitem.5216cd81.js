(function(t){function o(o){for(var s,n,c=o[0],r=o[1],u=o[2],d=0,p=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);l&&l(o);while(p.length)p.shift()();return a.push.apply(a,u||[]),e()}function e(){for(var t,o=0;o<a.length;o++){for(var e=a[o],s=!0,c=1;c<e.length;c++){var r=e[c];0!==i[r]&&(s=!1)}s&&(a.splice(o--,1),t=n(n.s=e[0]))}return t}var s={},i={"pages/couponmergeitem":0},a=[];function n(o){if(s[o])return s[o].exports;var e=s[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,o,e){n.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,o){if(1&o&&(t=n(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var s in t)n.d(e,s,function(o){return t[o]}.bind(null,s));return e},n.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(o,"a",o),o},n.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=o,c=c.slice();for(var u=0;u<c.length;u++)o(c[u]);var l=r;a.push([38,"chunk-vendors","chunk-common"]),e()})({"190c":function(t,o,e){},"1e4dc":function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABHklEQVQ4Ee1QvUoDQRD+vo1EBcHSZ9A7rCxsBKsgmEtSCAEVS1uxslEE7QRBEKxsRSVEwl1l5yNocbGwESGFz6C349weF854PoEuyy7z/c3sAv+Lv32BBPOLwMed8gNMVFvsPA3KtKUB0vKXkdgIIlPORLyiihq7zy+jIT8CJPBrQNKDYPKbmHxHhSvsxY9F3BQLqXsBJAmHZvJI+RunEZnRqR6kObdU9AwDpOmtgdJVctwJDPYY9Q+x0N4AcZGFYBpW7qXhr+Yh7glSn22r6Eo7V5QQkDtqPs9F6S0N7xjW7mcYP2GwzrDfySYgT5yZsKDZHjWnJobxgXK7aZbuMT1PUzwPuNWub1puMoovU6JsKXcGwy2nFV6Xaf4i9gWpTVZwpUYmjAAAAABJRU5ErkJggg=="},"2be1":function(t,o,e){"use strict";var s=function(){var t=this,o=t._self._c;return o("coupon-dialog",{attrs:{show:t.selectGoodsListDialogStatus,title:t.$t("couponmergeitem.selected_goods"),"score-style":"couponmergeitemStyle"},on:{input:t.closeSelectGoodsListDialog}},[o("div",{staticClass:"dialog-content"},[o("div",{staticClass:"select-goods-list"},t._l(t.selectGoodsList,(function(e,s){return o("div",{key:s,staticClass:"goods-item"},[e&&e.catalogList?t._l(e.catalogList,(function(e,i){return o("div",{key:e.catalogId,staticClass:"goods-catalog"},[o("div",{staticClass:"goods__img"},[o("img",{attrs:{src:e.pic}}),o("div",{staticClass:"img__bg"})]),o("div",{staticClass:"goods-content"},[o("div",{staticClass:"goods__title"},[t._v(t._s(e.productName))]),o("div",{staticClass:"goods__catalog"},[t._v(t._s(e.skuInfo))]),o("div",{staticClass:"goods__price"},[t.isJPY(e.symbol)?t._e():o("span",{staticClass:"price__symbol"},[t._v(t._s(e.symbol||"¥"))]),o("span",[t._v(t._s(e.price))]),t.isJPY(e.symbol)?o("span",[t._v(t._s(e.symbol))]):t._e()]),o("div",{staticClass:"goods-option"},[o("span",{staticClass:"iconfont icon-shanchu",on:{click:function(o){return t.requestNum("reduce",e,s,i)}}}),o("span",{staticClass:"goods__num"},[t._v(t._s(e.catalogNum))]),o("span",{staticClass:"iconfont icon-jiagou",on:{click:function(o){return t.requestNum("add",e,s,i)}}})])])])})):t._e()],2)})),0),o("div",{class:["bottom-info",{"bottom-info--isIphoneX":t.isIphoneX}]},[o("div",{staticClass:"tip-content",on:{click:t.showAllCartGoodsList}},[o("span",{staticClass:"tip-info"},[[t._v(t._s(t.$t("couponmergeitem.bottom_tip1",[t.cartProdInfo.subtotal.satisfyProductCount||0])))],[t._v(t._s(t.$t("couponmergeitem.bottom_tip2")))],t.isJPY(t.cartProdInfo.subtotal.symbol)?t._e():[t._v(t._s(t.cartProdInfo.subtotal.symbol||"¥"))],[t._v(t._s(t.cartProdInfo.subtotal.satisfyProductTotalAmount||0))],t.isJPY(t.cartProdInfo.subtotal.symbol)?[t._v(t._s(t.cartProdInfo.subtotal.symbol))]:t._e(),t.cartProdInfo.subtotal.fullReductionAmount?[[t._v(" (")],[t._v(t._s(t.$t("couponmergeitem.bottom_tip3")))],t.isJPY(t.cartProdInfo.subtotal.symbol)?t._e():[t._v(t._s(t.cartProdInfo.subtotal.symbol||"¥"))],[t._v(t._s(t.cartProdInfo.subtotal.fullReductionAmount))],t.isJPY(t.cartProdInfo.subtotal.symbol)?[t._v(t._s(t.cartProdInfo.subtotal.symbol))]:t._e(),[t._v(")")]]:t._e(),[t._v("，")],t.cartProdInfo.subtotal.diffMinOrderAmount?[[t._v(t._s(t.$t("couponmergeitem.bottom_tip4")))],t.isJPY(t.cartProdInfo.subtotal.symbol)?t._e():o("span",{staticClass:"red"},[t._v(t._s(t.cartProdInfo.subtotal.symbol||"¥"))]),o("span",{staticClass:"red"},[t._v(t._s(t.cartProdInfo.subtotal.diffMinOrderAmount))]),t.isJPY(t.cartProdInfo.subtotal.symbol)?o("span",{staticClass:"red"},[t._v(t._s(t.cartProdInfo.subtotal.symbol))]):t._e(),[t._v(t._s(t.$t("couponmergeitem.bottom_tip6")))]]:[t._v(t._s(t.$t("couponmergeitem.bottom_tip5")))],o("span",[t._v("    ")]),t.isShowSeeDetail?o("span",{staticClass:"see-detail"},[t._v(t._s(t.$t("couponmergeitem.view_details"))+" "),o("span",{staticClass:"iconfont icon-youjiantou"})]):t._e()],2)]),o("div",{staticClass:"to-cart",on:{click:t.toShoppingcart}},[t._v(t._s(t.$t("couponmergeitem.to_shoppingcart")))])])])])},i=[],a=e("ade3"),n=e("64cf"),c=e("1041"),r={name:"select-goods-dialog",components:{CouponDialog:n["a"]},mixins:[c["a"]],props:{selectGoodsListDialogStatus:{type:Boolean,default:!1},selectGoodsList:{type:Array,default:function(){return[]}},cartProdInfo:{type:Object,default:function(){return{}}},isIphoneX:{type:Boolean,value:!1}},watch:{selectGoodsList:{deep:!0,immediate:!0,handler:function(t){}}},computed:{isShowSeeDetail:function(){return this.cartProdInfo.productList.length}},methods:Object(a["a"])({requestNum:function(t,o,e,s){this.$emit("requestNum",{type:t,catalogItem:o,index:e,catalogIndex:s})},closeSelectGoodsListDialog:function(){this.$emit("closeSelectGoodsListDialog")},showAllCartGoodsList:function(){this.$emit("showAllCartGoodsList")},toShoppingcart:function(){this.$emit("toShoppingcart")}},"closeSelectGoodsListDialog",(function(){this.$emit("closeSelectGoodsListDialog")}))},u=r,l=(e("e2ba"),e("2877")),d=Object(l["a"])(u,s,i,!1,null,"a4bbb0c4",null);o["a"]=d.exports},"2d11":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("56d7"),i=(e("b0c0"),function(){var t=this,o=t._self._c;return o("div",{class:["search",{"search-product-all":"productall"==t.sourcePage}],style:t.pageThemeStyle},[o("div",{staticClass:"wrap-top"},[o("filter-bar",{attrs:{recWord:t.recWord,sourcePage:t.sourcePage,isShowProduct:t.isShowProduct,isShowOtherFilter:!1,source:"search"},on:{getSearchResult:t.getSearchResultClick,handleFocus:t.handleFocus,handleInput:t.handleInput,setStorageKeyword:t.setStorageKeyword,handleCancelBtn:t.handleCancelBtn,clickSearch:t.clickSearch}})],1),o("div",{staticClass:"coupon-info"},[o("div",{staticClass:"coupon__discount"},[t._v(t._s(t.couponOtherInfo.couponDesc))]),o("div",{staticClass:"coupon__time"},[-1!=t.couponTimer.day||-1!=t.couponTimer.hour||59!=t.couponTimer.minute||59!=t.couponTimer.second?[t.couponTimer.day>0?o("span",{staticClass:"time__day"},[t._v(t._s(t.couponOtherInfo.couponStarted?t.$tc("couponmergeitem.start_end",1):t.$tc("couponmergeitem.start_end",2))+" "+t._s(t.couponTimer.day)+t._s(t.$t("couponmergeitem.day")))]):o("span",{staticClass:"time__day"},[t._v(t._s(t.couponOtherInfo.couponStarted?t.$tc("couponmergeitem.start_end",1):t.$tc("couponmergeitem.start_end",2))+" 0"+t._s(t.$t("couponmergeitem.day")))]),t.couponTimer.hour>0?o("span",[t._v(t._s(t.couponTimer.hour))]):o("span",[t._v("00")]),o("em",[t._v(":")]),t.couponTimer.minute>0?o("span",[t._v(t._s(t.couponTimer.minute))]):o("span",[t._v("00")]),o("em",[t._v(":")]),o("span",[t._v(t._s(t.couponTimer.second))])]:[o("span",{staticClass:"time__day"},[t._v(t._s(t.couponOtherInfo.couponStarted?t.$tc("couponmergeitem.start_end",1):t.$tc("couponmergeitem.start_end",2))+"0"+t._s(t.$t("couponmergeitem.day")))]),o("span",[t._v("00")]),o("em",[t._v(":")]),o("span",[t._v("00")]),o("em",[t._v(":")]),o("span",[t._v("00")])]],2)]),t.isShowProduct?t._e():[o("div",{staticClass:"container-search"},[t.latestList&&t.latestList.length>0?o("div",{staticClass:"content-container"},[o("div",{staticClass:"head"},[o("label",{staticClass:"title"},[t._v(t._s(t.$t("search.recent_search")))]),o("img",{staticClass:"delete",attrs:{src:e("a45e")},on:{click:t.onDelete}})]),o("div",{staticClass:"item-container"},t._l(t.latestList,(function(e,s){return o("div",{key:s,staticClass:"item"},[o("span",{on:{click:function(o){return t.onSearchClick(e)}}},[t._v(t._s(e))])])})),0)]):t._e(),t.hotList&&t.hotList.length>0?o("div",{staticClass:"content-container"},[o("div",{staticClass:"head"},[o("label",{staticClass:"title"},[t._v(t._s(t.$t("search.hot_search")))])]),o("div",{staticClass:"item-container"},t._l(t.hotList,(function(e,s){return o("div",{key:s},[1==e.type?o("div",{staticClass:"item"},[o("span",{on:{click:function(o){return t.onSearchClick(e.name)}}},[t._v(t._s(e.name))])]):t._e()])})),0)]):t._e()])],t.isShowProduct?[t.searchResult&&t.searchResult.type?o("div",{staticClass:"result_nor_container"},[1==t.searchResult.type||4==t.searchResult.type?o("div",{staticClass:"desc"},[t._v(t._s(t.searchResult.desc)+" ")]):t._e(),2==t.searchResult.type||3==t.searchResult.type?o("div",{staticClass:"keyword-container"},[2==t.searchResult.type?o("div",{staticClass:"tip-container"},[o("i18n",{attrs:{path:"search.the_following",tag:"span"}},[o("span",{staticClass:"keyword",attrs:{place:"keyword"}},[t._v(t._s(t.queryObj.keyword||""))])])],1):o("div",{staticStyle:{height:"8px"}}),t.searchResult.recWords&&t.searchResult.recWords.length>0?o("div",{staticClass:"recword-container"},[o("p",[t._v(t._s(t.$t("search.looking_for")))]),o("p",{staticClass:"recword",on:{click:function(o){return t.onSearchClick(t.searchResult.recWords[0])}}},[t._v(t._s(t.searchResult.recWords[0]))])]):t._e()]):t._e()]):t._e(),o("div",{staticClass:"search__result"},[o("product-list-card",{attrs:{prodList:t.couponGoodsList,ylogParams:t.ylogParams,prodType:2,hasShadow:"",isShowTaxTag:"",showAddBtn:"",prodSkinData:t.prodSkinData,fixDiscountLabelPlaced:!0},on:{handleAddBtn:t.handleAddBtn,handleReduceBtn:t.handleReduceBtn}})],1),t.couponGoodsList.length>0?o("load-more",{attrs:{hasMore:t.loadMore,loading:t.isXhr&&t.couponGoodsListQueryInfo.pageIndex>0}}):t._e()]:t._e(),t.skus&&t.skuDefault.showSkuPop?t._e():o("div",{class:["bottom-info",{"bottom-info--isIphoneX":t.isIphoneX}]},[o("div",{staticClass:"tip-content",on:{click:t.showAllCartGoodsList}},[o("span",{staticClass:"tip-info"},[[t._v(t._s(t.$t("couponmergeitem.bottom_tip1",[t.cartProdInfo.subtotal.satisfyProductCount||0])))],[t._v(t._s(t.$t("couponmergeitem.bottom_tip2")))],t.isJPY(t.cartProdInfo.subtotal.symbol)?t._e():[t._v(t._s(t.cartProdInfo.subtotal.symbol||"¥"))],[t._v(t._s(t.cartProdInfo.subtotal.satisfyProductTotalAmount||0))],t.isJPY(t.cartProdInfo.subtotal.symbol)?[t._v(t._s(t.cartProdInfo.subtotal.symbol))]:t._e(),t.cartProdInfo.subtotal.fullReductionAmount?[[t._v(" (")],[t._v(t._s(t.$t("couponmergeitem.bottom_tip3")))],t.isJPY(t.cartProdInfo.subtotal.symbol)?t._e():[t._v(t._s(t.cartProdInfo.subtotal.symbol||"¥"))],[t._v(t._s(t.cartProdInfo.subtotal.fullReductionAmount))],t.isJPY(t.cartProdInfo.subtotal.symbol)?[t._v(t._s(t.cartProdInfo.subtotal.symbol))]:t._e(),[t._v(")")]]:t._e(),[t._v("，")],t.cartProdInfo.subtotal.diffMinOrderAmount?[[t._v(t._s(t.$t("couponmergeitem.bottom_tip4")))],t.isJPY(t.cartProdInfo.subtotal.symbol)?t._e():o("span",{staticClass:"red"},[t._v(t._s(t.cartProdInfo.subtotal.symbol||"¥"))]),o("span",{staticClass:"red"},[t._v(t._s(t.cartProdInfo.subtotal.diffMinOrderAmount))]),t.isJPY(t.cartProdInfo.subtotal.symbol)?o("span",{staticClass:"red"},[t._v(t._s(t.cartProdInfo.subtotal.symbol))]):t._e(),[t._v(t._s(t.$t("couponmergeitem.bottom_tip6")))]]:[t._v(t._s(t.$t("couponmergeitem.bottom_tip5")))],o("span",[t._v("    ")]),t.isShowSeeDetail?o("span",{staticClass:"see-detail"},[t._v(t._s(t.$t("couponmergeitem.view_details"))),o("img",{attrs:{src:e("1e4dc")}})]):t._e()],2)]),o("div",{staticClass:"to-cart",on:{click:t.toShoppingcart}},[t._v(t._s(t.$t("couponmergeitem.to_shoppingcart")))])]),t.skus&&t.skuDefault.showSkuPop?o("selectsku",{attrs:{skus:t.skus,skuDefault:t.skuDefault,isFromTuan:!1,saleActivityTitles:t.isBrandPriceType?t.saleActivityTitles:[]},on:{skuConfirmCB:t.skuConfirmCB,showSkuFunc:t.showSkuFunc}}):t._e(),o("storeDialog",{attrs:{shopDetailDto:t.shopDetailDto},on:{hideDialog:t.handleHidetoreDialog},model:{value:t.showStoreDialog,callback:function(o){t.showStoreDialog=o},expression:"showStoreDialog"}}),o("select-goods-dialog",{attrs:{selectGoodsListDialogStatus:t.selectGoodsListDialogStatus,selectGoodsList:t.selectGoodsList,cartProdInfo:t.cartProdInfo,isIphoneX:t.isIphoneX},on:{requestNum:t.requestNum,closeSelectGoodsListDialog:t.closeSelectGoodsListDialog,showAllCartGoodsList:t.showAllCartGoodsList,toShoppingcart:t.toShoppingcart}})],2)}),a=[],n=e("bee0"),c=n["a"],r=(e("6723"),e("ccac"),e("2877")),u=Object(r["a"])(c,i,a,!1,null,"8653a9b6",null),l=u.exports;e.p=publicPath,Object(s["a"])(l)},38:function(t,o,e){t.exports=e("2d11")},"3ea1":function(t,o,e){},6723:function(t,o,e){"use strict";e("190c")},9777:function(t,o,e){},bee0:function(t,o,e){"use strict";(function(t){var s=e("5530"),i=(e("e17f"),e("2241")),a=e("2909"),n=(e("ac1f"),e("841c"),e("d3b7"),e("3ca3"),e("ddb0"),e("fb6a"),e("159b"),e("99af"),e("b680"),e("a434"),e("c96a"),e("1276"),e("b68d")),c=e("603c"),r=e("191e"),u=e("cd92"),l=e("fec4"),d=e("bce3"),p=e("ed08"),h=e("13cb"),f=e("bcb3"),m=e("566a"),g=e("64cf"),y=e("1041"),_=e("2be1");o["a"]={name:"Search",components:{SelectGoodsDialog:_["a"],CouponDialog:g["a"],productListCard:u["a"],filterBar:h["a"],loadMore:d["a"],tabnav:f["a"],selectsku:l["a"],storeDialog:m["a"]},mixins:[c["a"],r["a"],n["a"],y["a"]],data:function(){return{prodList:[],isXhr:!1,maxPageIndex:1,pageIndex:1,loadMore:!0,fromCategory:!1,partId:"",category:{},filterList:{},brandInfo:{},queryObj:{},searchResult:{},recWord:"",isShowProduct:!1,latestList:[],hotList:[],sourcePage:"productall",skus:[],skuDefault:{showSkuPop:!1,skuType:1,pic:"",price:"",selectId:"",foreign:!1,symbol:""},saleActivityTitles:[],prodCurrent:{},showStoreDialog:!1,shopDetailDto:null,productDetailInfo:{},couponGoodsListQueryInfo:{nationType:"",couponBatchCode:"",pageIndex:1,title:""},cartProdInfo:{productList:[],subtotal:{}},couponGoodsList:[],couponOtherInfo:{total:"",couponDesc:"",couponStarted:"",couponTimeRemaining:""},couponTimer:{interval:null,day:0,hour:0,minute:0,second:0},selectGoodsListDialogStatus:!1,selectGoodsList:[],addCartInfo:{},timerInterval:null,isIphoneX:p["a"].isIphoneX()}},computed:{isBrandPriceType:function(){return t.store.isBrandPriceType},isShowSeeDetail:function(){return this.cartProdInfo.productList.length},ylogParams:function(){return{pageid:this.pageId||0,pagename:"couponmerge_item",pagetype:"couponmerge_item"}}},created:function(){var o=this,e=p["a"].parseLocator(window.location.search);this.couponGoodsListQueryInfo.couponBatchCode=e.couponBatchCode,this.couponGoodsListQueryInfo.nationType=e.nationType;var s="";s=this.$t("couponmergeitem.page_title"),t.setNavigationBarTitle({title:s}),this.latestList=t.getStorageSync("latestList")||[],this.initData(),t.onShow((function(){o.getCartGoodsList(2),o.getCouponUseTimeInfo()}))},onReachBottom:function(){this.isShowProduct&&this.couponOtherInfo.total>0&&this.couponGoodsList.length<this.couponOtherInfo.total&&(this.couponGoodsListQueryInfo.pageIndex++,this.getCouponGoodsList(1))},methods:{initData:function(){var t=this,o=this.getCartGoodsList(),e=this.getCouponGoodsList();Promise.all([o,e]).then((function(o){var e=o[1]&&o[1].productList||[];t.setGoodsNum(2,e)}))},getCartGoodsList:function(o){var e=this;return t.request({url:"api/trading/getshoppingcartbycouponcollectorder",method:"get",data:{batchCode:this.couponGoodsListQueryInfo.couponBatchCode}}).then((function(s){return s?(e.cartProdInfo.productList=s.productList||[],e.cartProdInfo.subtotal=s.subtotal||{},2===o&&e.setGoodsNum(2),Promise.resolve(s)):t.showToast({title:s.message||s.msg||e.$t("couponmergeitem.failed_cart_goods")})})).catch((function(o){return e.getCouponGoodsList(),t.showToast({title:o.message||o.msg||e.$t("couponmergeitem.failed_cart_goods")}),Promise.reject(o)}))},getCouponGoodsList:function(o){var e=this;return t.request({url:"api/prod/getproductlistbycouponcollectorder",method:"get",data:this.couponGoodsListQueryInfo}).then((function(s){if(!s)return t.showToast({title:e.$t("couponmergeitem.failed_coupon_goods")});1===e.couponGoodsListQueryInfo.pageIndex&&(e.couponOtherInfo.total=s.total,e.couponOtherInfo.couponDesc=s.couponDesc,e.couponOtherInfo.couponStarted=s.couponStarted,e.couponOtherInfo.couponTimeRemaining=s.couponTimeRemaining,e.startCountDown());var i=!s.list||0===s.list.length,a=s.count||0;return e.isShowProduct=!0,1===o&&e.setGoodsNum(1,s.productList),e.searchResult=s.searchResult||{},e.maxPageIndex=a,e.loadMore=e.couponGoodsListQueryInfo.pageIndex<a&&!i,Promise.resolve(s)})).catch((function(o){return t.showToast({title:o.message||o.msg||e.$t("couponmergeitem.failed_coupon_goods")}),Promise.reject(o)})).finally((function(){e.couponGoodsListQueryInfo.title=""}))},getCouponUseTimeInfo:function(){var o=this,e={nationType:this.couponGoodsListQueryInfo.nationType,couponBatchCode:this.couponGoodsListQueryInfo.couponBatchCode,pageIndex:1,title:""};t.request({url:"api/prod/getproductlistbycouponcollectorder",method:"get",data:e}).then((function(e){if(!e)return t.showToast({title:o.$t("couponmergeitem.failed_coupon_goods")});o.couponOtherInfo.total=e.total,o.couponOtherInfo.couponDesc=e.couponDesc,o.couponOtherInfo.couponStarted=e.couponStarted,o.couponOtherInfo.couponTimeRemaining=e.couponTimeRemaining,o.startCountDown()})).catch((function(e){t.showToast({title:e.message||e.msg||o.$t("couponmergeitem.failed_coupon_goods")})})).finally((function(){o.couponGoodsListQueryInfo.title=""}))},setGoodsNum:function(t,o){var e=[];e=o&&o.length?o:this.couponGoodsList.slice(),e.forEach((function(t){t.productNum>0&&(t.productNum=0)})),1==t?(this.cartProdInfo.productList.forEach((function(t){e.forEach((function(o){t.productId===o.id&&(o.productNum=t.productNum)}))})),this.couponGoodsList=[].concat(Object(a["a"])(this.couponGoodsList),Object(a["a"])(e))):(this.cartProdInfo.productList.forEach((function(t){e.forEach((function(o){t.productId===o.id&&(o.productNum=t.productNum)}))})),this.couponGoodsList=e.slice(),this.setSelectGoodsList())},startCountDown:function(){var t=this,o=(this.couponOtherInfo.couponTimeRemaining/1e3).toFixed(0);if(clearInterval(this.timerInterval),o>0){var e=Math.floor(o/86400),s=Math.floor(o/3600%24),i=Math.floor(o/60%60),a=Math.floor(o%60);this.couponTimer.day=e,this.couponTimer.hour=s>=10?s:"0"+s,this.couponTimer.minute=i>=10?i:"0"+i,this.couponTimer.second=a>=10?a:"0"+a,this.timerInterval=setInterval((function(){--t.couponTimer.second,t.couponTimer.second<0?(t.couponTimer.second=59,--t.couponTimer.minute,t.couponTimer.minute<0?(t.couponTimer.minute=59,--t.couponTimer.hour,t.couponTimer.hour<0?(--t.couponTimer.day,t.couponTimer.day<0&&(t.getCouponUseTimeInfo(),clearInterval(t.timerInterval))):t.couponTimer.hour<10&&(t.couponTimer.hour="0".concat(t.couponTimer.hour))):t.couponTimer.minute<10&&(t.couponTimer.minute="0".concat(t.couponTimer.minute))):t.couponTimer.second<10&&(t.couponTimer.second="0".concat(t.couponTimer.second))}),1e3)}},showAllCartGoodsList:function(){this.selectGoodsListDialogStatus?this.closeSelectGoodsListDialog():(this.selectGoodsList=this.cartProdInfo.productList,this.selectGoodsListDialogStatus=!0)},handleReduceBtn:function(t){var o=this;this.selectGoodsList=[],this.cartProdInfo.productList.forEach((function(e){e.productId===t.id&&o.selectGoodsList.push(e)})),this.selectGoodsList[0]&&this.selectGoodsList[0].catalogList&&1==this.selectGoodsList[0].catalogList.length?this.requestNum({type:"reduce",catalogItem:this.selectGoodsList[0].catalogList[0],index:0,catalogIndex:0}):this.selectGoodsListDialogStatus=!0},closeSelectGoodsListDialog:function(){this.selectGoodsListDialogStatus=!1,this.selectGoodsList=[]},requestNum:function(o){var e=this,s=o.type,i=o.catalogItem,a=o.index,n=o.catalogIndex,c=0;if("add"===s)c=++i.catalogNum;else{if(1==i.catalogNum)return void this.deleteGoodsItem(i.shoppingCartId,a,n);c=--i.catalogNum}t.request({url:"/api/trading/sqscartprodnum",data:{scid:i.shoppingCartId,purchasenum:c},method:"post"}).then((function(o){e.$set(e.selectGoodsList[a].catalogList[n],"catalogNum",c),e.getCartGoodsList(2),t.hideLoading()})).catch((function(o){t.hideLoading(),t.showToast({title:o.message||o.msg||e.$t("shoppingcart.modify_failed_again")})}))},deleteGoodsItem:function(o,e,s){var i=this,a=[];a.push(o),t.request({url:"/api/trading/sqdelscartprod",method:"post",data:{scids:a}}).then((function(o){t.hideLoading(),o.success&&(i.selectGoodsList[e].catalogList.splice(s,1),i.selectGoodsList[e].catalogList.length||(i.couponGoodsList.forEach((function(t){t.id===i.selectGoodsList[e].productId&&i.$set(t,"productNum",0)})),i.selectGoodsList.splice(e,1)),i.selectGoodsList[0]||(i.selectGoodsListDialogStatus=!1),i.getCartGoodsList(2)),Object(p["c"])(o.msg)||i.showToast({title:o.msg})})).catch((function(o){t.hideLoading(),t.showToast({title:o.message||i.$t("shoppingcart.delete_failed")})}))},setSelectGoodsList:function(){var t=this;if(this.selectGoodsList&&this.selectGoodsList.length){var o=[];this.cartProdInfo.productList.forEach((function(e){t.selectGoodsList.forEach((function(t){e.productId===t.productId&&o.push(e)}))})),this.selectGoodsList=o}},toShoppingcart:function(){t.ylog.send({action_type:"click",module_name:"to_cart"}),t.isMiniApp?wx.miniProgram.switchTab({url:"/pages/shoppingcart/shoppingcart"}):t.navigateTo({url:"/pages/shoppingcart/main"})},getSearchResultClick:function(){this.couponGoodsListQueryInfo.title=this.recWord,this.couponGoodsListQueryInfo.pageIndex=1,this.couponGoodsList=[],this.getCouponGoodsList(1)},setStorageList:function(o,e){var s=t.getStorageSync(o)||[],i=s.indexOf(e);-1!=i&&s.splice(i,1),s&&s.length>=5&&s.pop(),s.unshift(e),t.setStorageSync(o,s)},setStorageKeyword:function(t){this.setStorageList("latestList",t)},onDelete:function(){var o=this;i["a"].confirm({title:this.$t("search.sure_delete")}).then((function(){t.removeStorageSync("latestList"),o.latestList=t.getStorageSync("latestList")||[]})).catch((function(){}))},clickSearch:function(){"default"!==this.sourcePage&&(this.isShowProduct=!1)},onSearchClick:function(t){this.setStorageList("latestList",t),this.recWord=t||"",this.couponGoodsListQueryInfo.title=t,this.couponGoodsListQueryInfo.pageIndex=1,this.couponGoodsList=[],this.getCouponGoodsList(1)},handleFocus:function(){"default"===this.sourcePage?this.isShowProduct=!1:this.isShowProduct=!0,this.latestList=t.getStorageSync("latestList")||[],setTimeout((function(){document.documentElement.scrollTop=document.body.scrollTop=0}),200)},handleInput:function(t){this.recWord=t||""},handleCancelBtn:function(){var t=this;setTimeout((function(){t.recWord="",t.isShowProduct=!0}),100)},getSearchResult:function(o){var e=this,i=o.needClearOldData,a=o.queryObj,n=(o.selectedList,o.refreshProduct),c=o.showloading,r=o.changeKeyword,u=o.recWordKeyword;this.pageIndex=i?1:this.pageIndex,this.isShowProduct=!0,a&&(this.queryObj=Object(s["a"])({},a));var l=Object(s["a"])(Object(s["a"])({},this.queryObj),{},{pageIndex:this.pageIndex,refreshProduct:n});if(!this.isXhr){u&&(l.keyword=encodeURIComponent(u)||""),l.keyword||delete l.keyword,this.partId?(this.category.firstCategoryId?l.customFirstCategoryId=this.category.firstCategoryId||"":delete l.customFirstCategoryId,this.category.secondCategoryId?l.customSecondCategoryId=this.category.secondCategoryId||"":delete l.customSecondCategoryId,this.category.thirdCategoryId?l.customThirdCategoryId=this.category.thirdCategoryId||"":delete l.customThirdCategoryId):this.category.thirdCategoryId?l.thirdCategoryList=[this.category.thirdCategoryId]:(this.category.firstCategoryId&&(l.firstCategoryList=[this.category.firstCategoryId]),this.category.secondCategoryId&&(l.secondCategoryList=[this.category.secondCategoryId])),c&&t.showLoading(),this.isXhr=!0;var d="/api/nodesearch/sqsearch";this.partId&&(l.partId=this.partId),t.request({url:d,method:"post",data:l}).then((function(o){if(e.isXhr=!1,e.showPage=!0,c&&t.hideLoading(),n){if((o.filterList&&t.isBlank(e.filterList)||r)&&(e.filterList=Object(s["a"])({},o.filterList||{})),(!o.list||!o.list.length)&&(!e.prodList.length||i))return void(i&&(e.prodList=[]));1==l.pageIndex&&(o.brandInfoList&&o.brandInfoList.length?e.brandInfo=o.brandInfoList[0]||{}:e.brandInfo={})}})).catch((function(o){e.isXhr=!1,e.showPage=!0,c&&t.hideLoading(),t.showToast({title:o.message||e.$t("search.search_failed")})}))}},handleAddBtn:function(o){var e=this;t.showLoading({title:this.$t("makeup.request_specification")}),this.prodCurrent=o,t.request({url:"/api/prod/sqdetail?productid=".concat(o.id),method:"get"}).then((function(o){if(t.hideLoading(),!t.isBlank(o)){var s="",i=!1,a=!1,n=o.activityInfo&&2===o.activityInfo.state;o.price.interval[0]!==o.price.interval[1]&&(s=e.$t("makeup.rise"));var c=o.activityInfo&&o.activityInfo.state<2;o.activityInfo&&5===o.activityInfo.type&&0===o.activityInfo.state&&(c=!1),c&&o.activityInfo&&(4===o.activityInfo.type||6===o.activityInfo.type?(0===o.activityInfo.state&&(a=!0),i=!0):1===o.activityInfo.state&&(i=!0)),e.skus=o.skus,e.skuDefault.showSkuPop=!0,e.skuDefault.pic=o.picList[0].small,e.skuDefault.price=o.price.interval[0],e.skuDefault.interval=s,e.skuDefault.exchangePrice=o.price.exchange?o.price.exchange[0]:"",e.skuDefault.foreign=o.price.foreign,e.skuDefault.symbol=o.price.symbol,e.skuDefault.minNum=o.minOrderNum,e.skuDefault.type=i?3:0,e.skuDefault.skuShowOriginalPrice=a,e.skuDefault.activitySaleout=n,e.skuDefault.vipLogo=o.memberGrade&&o.memberGrade.logoUrl,e.skuDefault.subsidyInterval=o.price.subsidyPrice&&o.price.subsidyPrice[0]!=o.price.subsidyPrice[1]?e.$t("makeup.rise"):"",e.skuDefault.vipInterval=o.price.vipPrice&&o.price.vipPrice[0]!=o.price.vipPrice[1]?e.$t("makeup.rise"):"",e.skuDefault.subsidyExchangePrice=o.price.subsidyExchangePrice&&o.price.subsidyExchangePrice[0],e.skuDefault.vipExchangePrice=o.price.vipExchangePrice&&o.price.vipExchangePrice[0],e.skuDefault.vipPrice=o.price&&o.price.vipPrice&&o.price.vipPrice[0],e.skuDefault.subsidyPrice=o.price.subsidyPrice&&o.price.subsidyPrice[0],e.productDetailInfo=o,o.saleChannel?(e.skuDefault.skuType=10,e.skuDefault.confirmName=e.$t("item.store_buy"),e.shopDetailDto=o.shopDetailDto||null,e.skuDefault.inQualificationsGroup=!1,e.skuDefault.inDrawLots=!1):o.vipNotCanBuyGroup&&o.vipNotCanBuyGroup.inGroup&&2==o.vipNotCanBuyGroup.groupStatus?(e.skuDefault.skuType=11,e.skuDefault.confirmName=o.vipNotCanBuyGroup.nextCanBuyDesc,e.shopDetailDto=null,e.skuDefault.inQualificationsGroup=!1,e.skuDefault.inDrawLots=!1):0==o.state&&o.inQualificationsGroup?(e.skuDefault.inQualificationsGroup=!0,e.skuDefault.skuType=12,e.shopDetailDto=null):o.activityInfo&&25===o.activityInfo.type?(e.skuDefault.inDrawLots=!0,e.skuDefault.skuType=13,e.shopDetailDto=null):(e.skuDefault.skuType=2,e.skuDefault.confirmName="",e.shopDetailDto=null,e.skuDefault.inQualificationsGroup=!1,e.skuDefault.inDrawLots=!1),e.skuDefault.moneyoffQualificationsStatus=!0,e.loadSellerInfo(o)}})).catch((function(o){t.hideLoading(),t.showToast({title:o.message||o.msg||e.$t("makeup.failed_specifications")})}))},addCart:function(o,e){var s=this,a={catalogid:o.CatalogId||o.catalogid,purchasenum:o.purchasenum,deliverytype:o.deliveryType,checked:!0,sceneType:1};this.addCartInfo={catalogid:o.CatalogId||o.catalogid,purchasenum:o.purchasenum,deliverytype:o.deliveryType,checked:!0},e&&(a.sceneType=0),t.request({method:"POST",url:"/api/trading/sqscartprod",data:a}).then((function(o){if(o.success){if(10001===o.code)return i["a"].alert({message:s.$t("couponmergeitem.add_cart_error_tip"),showConfirmButton:!0,confirmButtonText:s.$t("couponmergeitem.add_cart_error_submit"),showCancelButton:!0,cancelButtonText:s.$t("common.cancel"),className:"item-page"}).then((function(){s.addCart(s.addCartInfo,!0)})).catch((function(){}));if(t.showToast({title:s.$t("makeup.added_cart_successfully"),icon:"success",className:"longToast"}),e)return void s.toShoppingcart();s.getCartGoodsList(2)}else t.showToast({title:o.msg||s.$t("makeup.added_cart_successfully")})})).catch((function(o){if(10001===o.code)return i["a"].alert({message:s.$t("couponmergeitem.add_cart_error_tip"),showConfirmButton:!0,confirmButtonText:s.$t("couponmergeitem.add_cart_error_submit"),showCancelButton:!0,cancelButtonText:s.$t("common.cancel"),className:"item-page"}).then((function(){s.addCart(s.addCartInfo,!0)})).catch((function(){}));t.showToast({title:o.message||s.$t("makeup.failed_add_cart")})}))},skuConfirmCB:function(o){var e=this,s=this;if(s.showSkuFunc(!1),10!=o.skuType){if(11!=o.skuType)return 12==o.skuType?t.auth.islogin()?void(t.isMiniApp?wx.miniProgram.navigateTo({url:"/pages/item/item?productId=".concat(this.productDetailInfo.id)}):t.navigateTo({url:"/pages/item/main?productId=".concat(this.productDetailInfo.id)})):void t.auth.tologin():void(13!=o.skuType?t.auth.islogin()?t.auth.authBindMobile().then((function(){var i={CatalogId:o.catalogId,Sale4Price:o.purchaseprice,purchasenum:o.purchasenum,deliveryType:o.deliveryType};t.ylog.send({action_type:"click",module_name:"specification",sub_module_name:"add_to_shoppingcart",sproductid:e.prodCurrent.id,catalog:i.CatalogId}),s.checkData()&&s.addCart(i)})):t.auth.tologin():t.isMiniApp?wx.miniProgram.navigateTo({url:"/subPackage2/pages/activityItem/activityItem?productId=".concat(this.productDetailInfo.id,"&activityId=").concat(this.productDetailInfo.activityInfo&&this.productDetailInfo.activityInfo.activityId)}):t.showToast({title:this.$t("components.selectsku.goto_programs_qualification")}));this.vipDisableConfirm()}else this.handleShowStoreDialog()},showSkuFunc:function(t){this.skuDefault.showSkuPop=!!t},loadSellerInfo:function(o){var e=this;if(o||o.price){var s={productId:o.id,currency:o.price.currency,symbol:o.price.symbol,effectActivityInfo:o.effectActivityInfo,activityInfo:o.activityInfo,brandId:o.brandId,categoryId:o.categoryId,masterCategoryId:o.masterCategoryId,thirdCategoryId:o.thirdCategoryId,domestic:o.domestic,nationType:o.nationType,tariffType:o.tariffType};t.request({url:"/api/prodpromo/getSellerInfo",data:s,method:"post"}).then((function(o){200!==o.code&&t.showToast({title:o.message||e.$t("makeup.failed_information")});var s=o.data,i=[];s.saleActivity&&s.saleActivity[0]&&s.saleActivity[0].title&&(i=s.saleActivity[0].title.split(",")),e.sellerInfo=s,e.saleActivityTitles=i})).catch((function(o){t.showToast({title:o.message||e.$t("makeup.failed_information")})}))}},handleShowStoreDialog:function(){this.showStoreDialog=!0},handleHidetoreDialog:function(){this.showStoreDialog=!1},checkData:function(){return 1==this.productDetailInfo.state&&this.productDetailInfo.activityInfo&&0==this.productDetailInfo.activityInfo.state?(t.showToast({title:this.$t("item.sorry_started"),icon:"none"}),!1):!this.productDetailInfo.activityInfo||4!=this.productDetailInfo.activityInfo.type&&6!=this.productDetailInfo.activityInfo.type&&21!=this.productDetailInfo.activityInfo.type&&22!=this.productDetailInfo.activityInfo.type||0!=this.productDetailInfo.activityInfo.state||(t.showToast({title:this.$t("item.sorry_started"),icon:"none"}),!1)},vipDisableConfirm:function(o){this.productDetailInfo&&(this.productDetailInfo.vipNotCanBuyGroup&&this.productDetailInfo.vipNotCanBuyGroup.inGroup&&this.productDetailInfo.vipNotCanBuyGroup.isVip?t.navigateTo({url:"/pages/membercenter/main"}):t.showToast({title:this.productDetailInfo.vipNotCanBuyGroup.nextCanBuyDesc,icon:"none"}))}}}}).call(this,e("7189")["default"])},ccac:function(t,o,e){"use strict";e("3ea1")},e2ba:function(t,o,e){"use strict";e("9777")}});