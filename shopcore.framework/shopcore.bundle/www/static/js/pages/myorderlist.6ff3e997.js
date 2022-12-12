(function(e){function t(t){for(var s,o,n=t[0],d=t[1],c=t[2],u=0,h=[];u<n.length;u++)o=n[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(e[s]=d[s]);l&&l(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,n=1;n<r.length;n++){var d=r[n];0!==i[d]&&(s=!1)}s&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var s={},i={"pages/myorderlist":0},a=[];function o(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=s,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(r,s,function(t){return e[t]}.bind(null,s));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var l=d;a.push([86,"chunk-vendors","chunk-common"]),r()})({"13e5":function(e,t,r){"use strict";(function(e,s){var i=r("5530"),a=(r("ab71"),r("58e6")),o=(r("a9e3"),r("99af"),r("a15b"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("466d"),r("5319"),r("fb6a"),r("d3b7"),r("159b"),r("d81d"),r("603c")),n=r("1adf"),d=r("b68d"),c=r("1041"),l=r("b286"),u=r("c08d"),h=r("5c5f"),f=r("b33a"),p=r("7fbd"),g=r("8753"),m=r("3bb4"),b=r.n(m),y=r("ed08"),v=r("d63d"),O=r("8efd"),w={0:0,1:1,2:6,3:7,4:4};t["a"]={name:"orderlist",mixins:[o["a"],n["a"],c["a"],d["a"]],data:function(){return{isRefreshLoading:!1,list:[],showCancelView:Boolean,tabIndex:0,isGoLogin:!1,scrollTop:0,scrollHeight:1200,isShow:!0,timeDiff:0,isLoading:!1,loadMore:!1,onUnload:!1,isSellerApp:y["a"].isSellerApp,showbubbleObject:{},orderTips:"",tabs:[this.$tc("myorderlist.all"),this.$tc("myorderlist.obligation"),this.$tc("myorderlist.pending"),this.$t("myorderlist.shipped")],changeAddressObj:{},isOverseasVersion:!1,watermarkText:""}},onReachBottom:function(){this.footerRefresh()},created:function(){var t=e.getQuery();t.tabIndex&&!isNaN(Number(w[t.tabIndex]))&&(this.tabIndex=Number(t.tabIndex)),e.isSellerApp||this.getUserInfo()},components:{notice:l["a"],watermark:O["a"],"order-tab":h["a"],"orderlist-footer":f["a"],"orderlist-header":p["a"],"order-product-cell":g["a"],"van-pull-refresh":a["a"],pullRefreshLoading:u["a"]},methods:{initData:function(){var t=this;this.headerRefresh(),this.loadShopConfig(),e.setNavigationBarTitle({title:this.$t("myorderlist.order_center")}),s.event.on("onShow",(function(){t.headerRefresh(),t.loadShopConfig()})),this.loadConfig()},pullRefresh:function(){this.initData()},loadShopConfig:function(){var t=this;e.request({url:"/api/prod/shopconfig",method:"get"}).then((function(e){e&&e.evaluation&&e.evaluation.enable&&(t.tabs=[t.$tc("myorderlist.all"),t.$tc("myorderlist.obligation"),t.$tc("myorderlist.pending"),t.$t("myorderlist.shipped"),t.$t("myorderlist.evaluate")])}))},paramstrify:function(e){var t=[];for(var r in e)t.push("".concat(r,"=").concat(e[r]));return t.join("&")},updateUrl:function(e,t){var r=this.updateQueryStringParameter(e,t);window.history.replaceState({path:r},"",r)},updateQueryStringParameter:function(e,t){var r=window.location.href;if(!t)return r;var s=new RegExp("([?&])"+e+"=.*?(&|$)","i"),i=-1!==r.indexOf("?")?"&":"?";return r.match(s)?r.replace(s,"$1"+e+"="+t+"$2"):r+i+e+"="+t},getUserInfo:function(){var t=this;e.request("/api/usercenter/squserinfo").then((function(r){if(r){var s=r.nickname||"";s=s.slice(0,8),t.watermarkText="内购严禁转发 ID".concat(e.auth.getValue("userId")," ").concat(s)}})).catch((function(t){e.showToast({title:t.msg||t.message})}))},selectTab:function(e){var t=e;this.tabIndex=t,this.isLoading=!1,this.initData(),this.updateUrl("tabIndex",this.tabIndex),0==e?this.updateUrl("tabIndex","0"):this.updateUrl("tabIndex",this.tabIndex)},gotoOrderDetail:function(t){var r=b.a.OrderState,s="orderid=".concat(t.orderid);t.suborderid>0&&t.statecode!==r.pendingPay&&this.statecode!==r.pendingOrder&&(s="".concat(s,"&suborderid=").concat(t.suborderid)),e.navigateTo({url:"/pages/myorderdetail/main?".concat(s)})},clickRefundDetail:function(t){var r=t.orderId,s=t.catalogId;e.navigateTo({url:"/pages/refund/main?orderId=".concat(r,"&catelogId=").concat(s)})},deleteOrder:function(e){var t=[],r=e.operationId;this.list.forEach((function(e){var s=!0;e.operaButtons.forEach((function(e){e.operationId===r&&(s=!1)})),s&&t.push(e)})),this.list=t},footerRefresh:function(){var t=this;if(!this.isLoading&&this.loadMore){this.isLoading=!0;var r=this.list,s={pagesize:10};s.orderstate=w[this.tabIndex],s.lastorderid=0,s.queryCompleteRefundStatus=!0,s.isWechat=e.isWechat,r.length>0&&(s.lastorderid=r[r.length-1].id);var i=this.paramstrify(s);e.showLoading({title:this.$t("common.loading",["..."])}),e.showLoading({title:this.$t("common.loading",["..."])}),e.request({url:"/api/ordercenter/sqorderlist?".concat(i),method:"get"}).then((function(r){e.hideLoading();var s=[];!r||r.orders&&0!==r.orders.length||(t.loadMore=!1),r&&r.orders&&r.orders.forEach((function(e){e.payDesc=t.payDesc(e.stateCode,t.isPaid(e)),e.exchangeDesc=t.exchangeDesc(e.stateCode,e.totalExchangePrice,e.exchangeRate),e.timeformat=Object(y["d"])(e.autoReceiveTime),s.push(e),t.dealBubbleShowData(e)})),t.list=t.list.concat(s),t.timeDiff=(r.serverTime||Date.now())-Date.now(),t.isLoading=!1})).catch((function(){e.hideLoading(),t.isLoading=!1}))}},headerRefresh:function(){var t=this;if(!this.isLoading){var r=v["a"].getSelectAdrItem()||{};r&&r.addressOrderId&&(this.changeAddressObj=r,this.addressModify()),this.isLoading=!0,this.loadMore=!0;var s={pagesize:10};s.orderstate=w[this.tabIndex],s.lastorderid=0,s.queryCompleteRefundStatus=!0,s.isWechat=e.isWechat;var i=this.paramstrify(s);e.showLoading({title:this.$t("common.loading",["..."])}),e.request({url:"/api/ordercenter/sqorderlist?".concat(i,"&timestamp=").concat((new Date).getTime()),method:"get"}).then((function(r){t.isRefreshLoading=!1,t.list=t.handleList(r.orders)||[],t.isShow=!0,t.timeDiff=(r.serverTime||Date.now())-Date.now(),t.isLoading=!1,t.getExtraData(),e.hideLoading(),r.orders&&r.orders.forEach((function(e){t.dealBubbleShowData(e)}))})).catch((function(r){t.list=[],t.isShow=!0,t.isLoading=!1,t.isRefreshLoading=!1,e.hideLoading(),e.showToast({title:r.message||r.msg||t.$t("myorderlist.failed_order")})}))}},exchangeDesc:function(e,t,r){return 2==e||3==e||4==e||17==e||90==e?this.$t("myorderlist.giving_quotation")+r+"，¥"+t:1==e||18==e||12==e||13==e?this.$t("myorderlist.reference_rate")+r+"，¥"+t:""},payDesc:function(e,t,r){var s=this.$t("myorderlist.actually_paid");if(1===e)if(r&&1===r.length&&r[0].earnestOrderType){var i=r[0].earnestOrderType;s=1===i?this.$t("myorderlist.deposit_to_paid"):2===i?this.$t("myorderlist.full_paid"):this.$t("myorderlist.unpaid")}else s=this.$t("myorderlist.unpaid");else 12!==e&&13!==e&&18!==e&&100!==e&&102!==e||t||(s=this.$t("myorderlist.non_payment"));return s},isPaid:function(e){return!(!e.sellerOrderList||0===e.sellerOrderList.length)&&(!(!e.sellerOrderList[0].subOrderList||0===e.sellerOrderList[0].subOrderList.length)&&!!e.sellerOrderList[0].subOrderList[0].isPaid)},handleList:function(e){var t=this,r=Array.isArray(e)&&e.slice()||[];return r.forEach((function(e){e.payDesc=t.payDesc(e.stateCode,t.isPaid(e)),e.exchangeDesc=t.exchangeDesc(e.stateCode,e.totalExchangePrice,e.exchangeRate),e.timeformat=Object(y["d"])(e.autoReceiveTime)})),r},dealBubbleShowData:function(e){var t=e.operaButtons,r=e.mainOrderId,s=e.id,a=Object(i["a"])({},this.showbubbleObject);t.map((function(e){return 7!==e.type&&24!==e.type||a["".concat(r).concat(e.type)]||(a["".concat(r).concat(e.type)]={},a["".concat(r).concat(e.type)][s]=!0),e})),this.showbubbleObject=Object(i["a"])({},a)},loadConfig:function(){var t=this,r={"keys[0]":"sq_order_tips"};e.request({method:"get",url:"/api/globalconf/businessconfiglist",data:r}).then((function(e){e&&e.configs&&e.configs.sq_order_tips&&(t.orderTips=e.configs.sq_order_tips)}))},showPresaleTips:function(e){if(!e)return!1;for(var t=0;t<e.length;t++){var r=e[t];if(21===r.type||22===r.type||23===r.type)return!0}return!1},showForeign:function(e,t){return 3!=t[0].prodList[0].nationType&&e},addressModify:function(){var t=this,r=this.changeAddressObj;e.showLoading({title:this.$t("common.loading",["..."])}),e.request({url:"/api/ordercenter/checkcaneditaddress",data:{orderId:r.addressOrderId}}).then((function(r){e.hideLoading(),t.changeorderaddress()})).catch((function(t){e.hideLoading(),e.showToast({title:t.message||t.msg})}))},changeorderaddress:function(t){var r=this,s=this.changeAddressObj;e.showLoading({title:this.$t("common.loading",["..."])});var i={orderId:s.addressOrderId,addressId:s.addressId};t&&t.serviceCode&&(i.addressId="",i.orderId=t.orderId,i.servicePointInfo={serviceCode:t.serviceCode}),e.request({url:"/api/ordercenter/changeorderaddress",method:"post",data:i}).then((function(t){e.hideLoading(),e.showToast({title:r.$t("myorderlist.modify_successfully")})})).catch((function(t){e.hideLoading(),e.showToast({title:t.message||t.msg})}))},operationIdFind:function(e){var t=null,r=e;return this.list.forEach((function(e,s){var i=!1;e.operaButtons.forEach((function(e){e.operationId==r&&(i=!0)})),i&&(t=s)})),t},getExtraData:function(){var t=this;e.request({url:"/api/prod/sqshopextra"}).then((function(e){var r=e.sellerInfo||{};t.isOverseasVersion=r&&110===r.versionType})).catch((function(e){console.log(e)}))}},beforeDestroy:function(){this.onUnload=!0},mounted:function(){this.initData()}}}).call(this,r("7189")["default"],r("d16c")["default"])},"1f30":function(e,t,r){"use strict";r("6174")},"4e67":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABGtJREFUSA2tVl1sVEUU/s7tAt3+UZGtaSjRAhFMIyam+uBLxSAotX8hIZEQDcao2W2xiFRDQmwwxgIVMO3WEOODGpUXy7aFxkrQB9CEBGoiT9SAEvSBbcTaH1vb3R2/2TBk9u7dLm2d5GbOnDnnfHN+5swVZBmNfWqdiuEZJdgowAMKuE8U8qkW5XeT3yVx8E2iCN91bZDxLOZAG96jsVc9pRLYrxSetCWocIvrf6gZ4N4SsyeCUR6mQwpwNLxR/jR895wG+NYZtXR8Ap/Q2NaksOBnGjsBBwPrS3H51UqZMUb29Knl/8ZQRaAt5D3P2U/ZEUbg5c4G+drI2XMKYDJ8cfQTrJweXHEELR216BOhiSzjzQFVMjmFFkalmaI5NHwk3CB73Gp3AJv6VVl8Gj9CYSXBPsvzI9i+WSbcCtnWTb2qKh7HV5QrpfH3CbrP1kkCtn6vfMMjuEg3HmFIjofr5TVbaK506LR6ENM4T3sBpmJHV518YWw4mhgexS4NRvLbQB2CZnO+c7hahhilGurHkcARXRfGlsPY5zOM71BgKmcJgq0iCbO5kJlRukBvPqKNkrEJ7DW2HCa6hkVSxM3PO7bIVbPxf8y5eXiXduLM23Zjz0fvkuXPitSJThuhiHqP4V6dtuFi0OhP9OqgzWbRRYMn1Vk6tCnUpx4N18igjwJrGU61bA1+sIU1rZSSUA9e5KFWuPc81uvISwHUMuxC53hVNhF0LZeDPp6+jKeLtlbItBawh75/xy+q8qt/INfme9F5RZj04pN3Q/N5k8v07CORoIdxvfAatzvLne7iJTMbjw7F9D5LMXkFtYfXuK7kXcxt3SBTbuVsOfTKXYoN3Uj0EPyuJx+Ja8zRY7dGUMH1Jc00Q+ewMYIXuE6Gw/Bds2fujAwPVEmn4Chc0TyHnSWiCdbuTj3bQ+dw/UqsKnBQlOkLFKPS1rHplh5VSLBqgl7/sB6Des8XWIPu6BCirKIdb59S+9uek79spYXkkI34dUZPF9yX5gFwdHWydI+RuXQsho9tsIXQu0+pVSzHffRuuHARDhtbyV5aVYtDzOU5erk11KPeMJvznW+/k/0Mp5/Ne68dtSTgNpF4zmJsZz5v8pJ+wMo8pAtmPoB85lZPxnGWodQNpT1cJ5/adlKM8reiPBHHaQo8ROFIV7002MKz0WwQiy7fwM4EQQhWSE86O+qxy+TO6KYAambzSVU8IzhPpVI+nvcawUxzY0Q9TNlnGb4gv/t50DFG6hV6dsJLR/fSlHGsQUYY0iEyS+0NVvA94zM4QA8qeEr9hJUQaEVCYZmWI2+cQIf9frTrpm3r2nQaoL2paZ3LpgheGo2hjcvlBJmhdWGBDXO+TqBuejZQkI8zB5+Wv9367nVaSLUAPeym4Spel80sojANPk7jv7Fb7ObfWLJRuA3d7Xo2D4sJdoG1Os1THVhcgrajT0imF+Fu8dhLMwx6pdter+OgubNWfs0gNme2JyC9+oVeVfMF75+zxSwK/wF7loHUVqUCJQAAAABJRU5ErkJggg=="},"57ef":function(e,t,r){},"5c5f":function(e,t,r){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"orderTab"},[t("div",{staticClass:"tabContainer"},e._l(e.tabs,(function(r,s){return t("div",{key:s,staticClass:"tab",on:{click:function(t){return e.changeIndex(s)}}},[s!=e.selectedIndex?t("span",{staticClass:"textNormal"},[e._v(e._s(r))]):t("span",{staticClass:"textSelected",style:{color:e.getColorTheme}},[e._v(e._s(r))]),t("div",{directives:[{name:"show",rawName:"v-show",value:s==e.selectedIndex,expression:"index == selectedIndex"}],class:["line",{centerLine:e.isSellerApp}],style:{backgroundColor:e.getColorTheme}})])})),0),t("div",{staticClass:"separtorLine"})])},i=[],a=(r("a9e3"),r("bcad")),o=r("ed08"),n={name:"order-tab",props:{tabs:{type:Array,default:function(){return[this.$tc("myorderlist.order_status",0),this.$tc("myorderlist.order_status",1),this.$tc("myorderlist.order_status",2),this.$t("myorderlist.shipped")]}},selectedIndex:{type:Number,default:0}},data:function(){return{isSellerApp:o["a"].isSellerApp}},mixins:[a["a"]],methods:{changeIndex:function(e){this.selectedIndex!==e&&this.$emit("selectTab",e)}}},d=n,c=(r("8d70"),r("2877")),l=Object(c["a"])(d,s,i,!1,null,"7f65cd63",null);t["a"]=l.exports},6174:function(e,t,r){},7406:function(e,t,r){"use strict";(function(e){r("a9e3");var s=r("3bb4"),i=r.n(s),a=r("ed08");t["a"]={name:"orderlist-header",props:{warehouseName:{type:String},sellerName:String,sellerIcon:String,orderState:Number,orderStateText:String,isDetail:{type:Boolean,default:!1},guideOrder:{type:Boolean,default:!1},bizType:Number,collectionGoods:Boolean},computed:{orderStateColor:function(){var e=i.a.OrderState,t=this.orderState;console.log("utils.isSellerApp",a["a"].isSellerApp);var r="";if(a["a"].isSellerApp)switch(t){case e.canceledByBuyer:case e.canceledBySeller:case e.canceledBySystem:case e.canceledByTimeOut:case e.canceledByService:case e.completedPickup:r="#666666";break;default:r="#1A77FF";break}else switch(t){case e.received:case e.canceledByBuyer:case e.canceledBySeller:case e.canceledByService:case e.canceledBySystem:case e.canceledByTimeOut:case e.completedPickup:r="#666666";break;default:r="#FE7E10";break}return r},getMaxWidth:function(){var t={};return t.maxWidth=this.guideOrder&&this.collectionGoods?"".concat(e.toRem(262),"rem"):this.guideOrder||this.collectionGoods?"".concat(e.toRem(328),"rem"):"".concat(e.toRem(398),"rem"),t}}}}).call(this,r("7189")["default"])},"7fbd":function(e,t,r){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"leftContainer"},[t("img",{staticClass:"headPortrait",attrs:{src:e.sellerIcon}}),t("span",{staticClass:"sellerName ellipsis",style:e.getMaxWidth},[e._v(e._s(e.sellerName))])]),t("div",{staticClass:"rightContainer"},[t("span",{staticClass:"orderState",style:{color:e.orderStateColor}},[e._v(e._s(e.orderStateText))]),e.isDetail?t("img",{staticClass:"message",attrs:{src:r("4e67")}}):e._e(),e.guideOrder?t("span",{staticClass:"substitute-pay"},[e._v(e._s(e.$t("myorderlist.help_buy")))]):e._e(),t("div",{staticClass:"labels"},[e.collectionGoods?t("div",{staticClass:"label"},[e._v(e._s(e.$t("myorderlist.pick_up")))]):e._e()])])])},i=[],a=r("7406"),o=a["a"],n=(r("80aa"),r("2877")),d=Object(n["a"])(o,s,i,!1,null,"c249b664",null);t["a"]=d.exports},"80aa":function(e,t,r){"use strict";r("57ef")},86:function(e,t,r){e.exports=r("9f3d")},"8d70":function(e,t,r){"use strict";r("95e4")},"95e4":function(e,t,r){},"9f3d":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("56d7"),i=(r("b0c0"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"orderlist",style:e.pageThemeStyle},[e.orderTips?t("notice",{attrs:{noticeBarText:e.orderTips}}):e._e(),t("order-tab",{attrs:{tabs:e.tabs,selectedIndex:e.tabIndex},on:{selectTab:e.selectTab}}),t("van-pull-refresh",{attrs:{"animation-duration":"1500","head-height":"60"},on:{refresh:e.pullRefresh},scopedSlots:e._u([{key:"pulling",fn:function(e){return[t("div")]}},{key:"loosing",fn:function(){return[t("pullRefreshLoading",{attrs:{"bg-color":"#f8f8f8"}})]},proxy:!0},{key:"loading",fn:function(){return[t("pullRefreshLoading",{attrs:{"bg-color":"#f8f8f8"}})]},proxy:!0}]),model:{value:e.isRefreshLoading,callback:function(t){e.isRefreshLoading=t},expression:"isRefreshLoading"}},[t("div",{staticClass:"orderlist-box-div"},[e.list.length>0?t("div",{staticClass:"orderlist-box"},e._l(e.list,(function(s,i){return t("div",{key:i,staticClass:"order-item"},[s.showInbuyWatermark?t("watermark",{attrs:{watermarkText:e.watermarkText,isFixed:!1}}):e._e(),e._l(s.sellerOrderList,(function(r,i){return t("div",{key:i},[0==i?t("orderlist-header",{attrs:{warehouseName:r.subOrderList[0].warehouseName,sellerName:r.sellerInfo.name,sellerIcon:r.sellerInfo.avatar,orderState:s.stateCode,guideOrder:s.guideOrder,orderStateText:s.stateText,bizType:s.biz.bizType,collectionGoods:s.collectionGoods}}):e._e(),e._l(r.subOrderList,(function(r,i){return t("div",{key:i,class:["orderlist-container",{"orderlist-container-warehouse":s.sellerOrderList.length>1}]},e._l(r.prodList,(function(i,a){return t("div",{key:a,staticClass:"orderlist-item"},[a>0&&1==s.sellerOrderList.length?t("div",{staticClass:"div-line"},[t("div",{staticClass:"line"})]):e._e(),t("order-product-cell",{attrs:{pic:i.pic,desc:i.desc,isPSP:i.isPspProduct,tariffType:i.tariffType,priceType:i.priceType,supportRefund:i.supportSevenDaysRefund,skuInfo:i.skuInfo,refundButton:i.refundButton,price:i.price,count:i.purchaseNum,product:i,isOrder:!0,clickParam:{orderid:s.id,suborderid:r.id,statecode:s.stateCode},refundDetailParams:{orderId:r.id,catalogId:i.catalogId},needJump:!0,symbol:s.symbol,isTuan:1===s.biz.bizType,domestic:i.domestic||2==i.nationType,hideBorder:i.hideBorder,hgProduct:i.hgProduct,hgTag:i.hgProductType,activityType:i.activityType,activityName:i.activityName,type:"orderlist",presale:r.earnestOrderType,exchangeCouponProduct:i.exchangeCouponProduct,inQualificationsGroup:i.inQualificationsGroup,isPadding0:s.sellerOrderList.length>1,sourcePage:"orderList",shipperId:i.shipperId,shipperName:i.shipperName},on:{"on-click":e.gotoOrderDetail,"click-refund-detail":e.clickRefundDetail}})],1)})),0)}))],2)})),t("div",{staticClass:"cellAdditionalInfo"},[t("p",{staticClass:"priceContainer"},[t("span",{class:["text","price-count",{"orderlist-container-warehouse-margin-b":s.sellerOrderList.length>1}]},[e._v(" "+e._s(e.$t("myorderlist.pieces_goods",[s.totalNumber,s.payDesc]))+" "),t("span",{staticClass:"text price-symbol"},[e._v(e._s(e.getPriceDesc(s.symbol||"¥",s.totalFullPayPrice,1)))])]),e.showForeign(s.foreign,s.sellerOrderList[0].subOrderList)?t("span",{staticClass:"price-exchange",style:{color:e.isSellerApp?"#BBB":"#777"}},[e._v(e._s(s.exchangeDesc))]):e._e()]),s.autoReceiveTime>0&&3==s.stateCode?t("span",{staticClass:"delayReceiveTime"},[e._v(" "+e._s(s.timeformat)+" "),t("br"),e._v(e._s(e.$t("myorderlist.automatically_confirmed"))+" ")]):e._e()]),t("div",{staticClass:"gray-border"}),t("orderlist-footer",{attrs:{subOrderId:s.id,timeDiff:e.timeDiff,order:s,addressIDCard:s.address,onUnload:e.onUnload,showbubbleObject:e.showbubbleObject,isOverseasVersion:e.isOverseasVersion,enableServicePoint:s.enableServicePoint||!1},on:{headerRefresh:e.headerRefresh,deleteOrder:e.deleteOrder,initPage:e.headerRefresh,changeorderaddress:e.changeorderaddress}}),1==s.stateCode&&e.showPresaleTips(s.operaButtons)?t("div",{staticClass:"presale-tip-container"},[t("img",{staticClass:"warning-icon",attrs:{src:r("6999")}}),t("span",[e._v(e._s(e.$t("myorderlist.deposit_paid")))])]):e._e(),t("div",{staticClass:"gap-block"})],2)})),0):e.isShow?t("div",{staticClass:"emptyView"},[t("img",{staticClass:"emptyView-img",attrs:{src:e.$t("myorderlist.img_no_order")}})]):e._e()])])],1)}),a=[],o=r("13e5"),n=o["a"],d=(r("1f30"),r("2877")),c=Object(d["a"])(n,i,a,!1,null,null,null),l=c.exports;r.p=publicPath,Object(s["a"])(l)}});