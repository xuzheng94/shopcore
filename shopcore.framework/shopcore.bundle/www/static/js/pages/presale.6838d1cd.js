(function(t){function e(e){for(var a,o,n=e[0],c=e[1],l=e[2],h=0,p=[];h<n.length;h++)o=n[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,n=1;n<i.length;n++){var c=i[n];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},s={"pages/presale":0},r=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(){return Promise.resolve()},o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=c;r.push([92,"chunk-vendors","chunk-common"]),i()})({"7b3a":function(t,e,i){"use strict";i("f97a")},92:function(t,e,i){t.exports=i("ff63")},ad7b:function(t,e,i){"use strict";(function(t){var a=i("5530"),s=(i("ab71"),i("58e6")),r=(i("ac1f"),i("1276"),i("99af"),i("a15b"),i("d3b7"),i("00b4"),i("fb6a"),i("841c"),i("b0c0"),i("b68d")),o=i("603c"),n=i("cd92"),c=i("44e4"),l=i("bce3"),d=i("fec4"),h=i("7fcb"),p=i("c08d");e["a"]={components:{productListCard:n["a"],loadingLine:c["a"],loadmore:l["a"],selectsku:d["a"],shareMask:h["a"],"van-pull-refresh":s["a"],pullRefreshLoading:p["a"]},mixins:[o["a"],r["a"]],onReachBottom:function(){this.loadMore()},data:function(){return{activityId:"",sectionId:"",status:1,hasShare:t.hasShare,showShare:!1,shareUrl:"",loading:!1,prodList:[],bannerUrl:"",bgColor:"",pageIndex:0,isNoMore:!1,firstData:{},rgbObj:{},isActivityEmpty:!1,showMoreTap:!1,showSubMoreTap:!1,showMore:!1,showSubMore:!1,activityDesc:"",activityNotice:"",beginTime:"",endTime:"",isXhr:!1,isLoading:!1,isRefreshLoading:!1}},computed:{showPage:function(){return(this.prodList&&this.prodList.length||!this.loading)&&!this.isActivityEmpty}},mounted:function(){this.getPresaleInfo()},methods:{pullRefresh:function(){this.pageIndex=0,this.isNoMore=!1,this.getPresaleInfo()},toggleShowMore:function(){this.showMore=!this.showMore},toggleSubShowMore:function(){this.showSubMore=!this.showSubMore},calcTitleHeight:function(t,e){return this.$refs[t].offsetHeight<this.$refs[e].offsetHeight},calcContentHeight:function(){this.activityDesc&&(this.showMoreTap=this.calcTitleHeight("title-wrapper","title-content")),this.activityNotice&&(this.showSubMoreTap=this.calcTitleHeight("sub-title-wrapper","sub-title-content"))},handleTime:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!t)return"";var i=t.split(" "),a="",s=i[0].split("-")||[],r=i[1].split(":")||[];if(e)a=s.join(".");else{var o=s||[];a="".concat(o[1]||"",".").concat(o[2]||"")}return a+=" ".concat(r[0]||"",":").concat(r[1]||""),a},handleShare:function(){var e=this;t.ylog.send({action_type:"click",module_name:"share"}),t.getShareData().then((function(i){t.request({url:"/api/social/sqpresaleshareinfo",method:"POST",data:Object(a["a"])({activityId:e.activityId},i)}).then((function(t){t.shareUrl&&(e.shareUrl=t.shareUrl,e.showShare=!0)})).catch((function(i){t.showToast({title:i.msg||i.message||e.$t("presale.failed_graph")})}))}))},loadMore:function(){this.isNoMore||this.loading||this.isXhr||this.getPresaleList({pageIndex:this.pageIndex+1})},fetchPageData:function(){return window._global&&window._global.pageInfo?Promise.resolve(window._global.pageInfo):t.request({url:"/api/prod/shopactivity?activityid=".concat(this.activityId)})},stopTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},startTimer:function(){var t=this;this.timer||(this.timer=setInterval((function(){t.countDown()}),1e3))},countDown:function(){var t=this,e=Object(a["a"])({},this.firstData);if(e.timestamp>0){e.timestamp-=1;var i=this.calcTime(e.timestamp);e.dd=i.dd,e.hh=i.hh,e.mm=i.mm,e.ss=i.ss,e.timestamp<=0&&(clearTimeout(this.timeout),this.timeout=setTimeout((function(){t.getPresaleList({pageIndex:1})}),400))}this.firstData=Object(a["a"])({},e)||{}},calcTime:function(t){if(t<=0)return{hh:"00",mm:"00",ss:"00"};var e=t,i=Math.floor(e/3600/24),a=Math.floor((e-3600*i*24)/3600),s=Math.floor((e-3600*i*24-3600*a)/60),r=e-3600*i*24-3600*a-60*s;return{dd:this.formatNum(i),hh:this.formatNum(a),mm:this.formatNum(s),ss:this.formatNum(r)}},formatNum:function(t){var e=String(t);return e.length?1===e.length?"0".concat(e):e:"00"},getStateDesc:function(t){var e="";switch(t){case 1:e="";break;case 2:e=this.$tc("presale.activity_start_over",1);break;case 3:e=this.$tc("presale.activity_start_over",2);break;default:e=this.$tc("presale.activity_start_over",2);break}return e},hexToRgb:function(t){var e,i,a;return/^#/g.test(t)?(e=t.slice(1,3),i=t.slice(3,5),a=t.slice(5,7),{r:parseInt(e,16),g:parseInt(i,16),b:parseInt(a,16)}):{}},getPresaleInfo:function(){var e=this,i=t.parseLocator(window.location.search,"lower"),s=i.sectionid||"",r=i.activityid||"";if(this.status=i.status||1,s&&(this.sectionId=s),r&&(this.activityId=r),!r)return this.loading=!1,void(this.isActivityEmpty=!0);this.loading=!0,this.fetchPageData().then((function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(i&&i.activityId){var s=i.designConfig||{};return e.bannerUrl=i.activityBanner||"",e.bgColor=s.backgroundColor||"#8451C8",e.rgbObj=e.hexToRgb(s.backgroundColor||"#8451C8"),e.activityDesc=i.activityDesc||"",e.activityNotice=i.activityNotice||"",e.beginTime=e.handleTime(i.beginTime)||"",e.endTime=e.handleTime(i.endTime,!1)||"",e.firstData=Object(a["a"])({timestamp:Math.ceil(i.timestamp),timeLabel:i.timeLabel,state:i.activityStatus},e.calcTime(Math.ceil(i.timestamp))),t.setNavigationBarTitle({title:i.name||e.$t("presale.time_booking")}),t.wxShare({title:i.name||""}),i.timestamp>0&&(e.stopTimer(),e.startTimer()),e.$nextTick((function(){e.calcContentHeight()})),e.isXhr||e.getPresaleList({pageIndex:1}),e.loading=!1,void(e.isRefreshLoading=!1)}e.loading=!1,e.isRefreshLoading=!1,e.isActivityEmpty=!0,t.showToast({title:e.$t("presale.failed_activity")})})).catch((function(i){e.loading=!1,e.isRefreshLoading=!1,e.isActivityEmpty=!0,t.showToast({title:i.msg||i.message||e.$t("presale.failed_activity")})}))},getPresaleList:function(e){var i=this,a=e.pageIndex,s=void 0===a?1:a,r={pageIndex:s,activityType:7,status:this.status};this.sectionId&&(r.sectionId=this.sectionId),this.activityId&&(r.activityId=this.activityId),this.isXhr=!0,this.isLoading=!0,t.request({url:"/api/prod/shoppanicbuylist",data:r}).then((function(t){i.isXhr=!1,i.isLoading=!1,t&&(i.pageIndex=s,i.prodList=1===s?t.productList||[]:i.prodList.concat(t.productList||[]),t.productList&&0!==t.productList.length||(i.isNoMore=!0))})).catch((function(t){i.isXhr=!1,i.isLoading=!1,console.log("res",t)}))}}}}).call(this,i("7189")["default"])},f97a:function(t,e,i){},ff63:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("56d7"),s=(i("99af"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-presale",style:[{background:t.bgColor},t.pageThemeStyle]},[e("van-pull-refresh",{attrs:{"animation-duration":"1500","head-height":"60"},on:{refresh:t.pullRefresh},scopedSlots:t._u([{key:"pulling",fn:function(t){return[e("div")]}},{key:"loosing",fn:function(){return[e("pullRefreshLoading",{attrs:{"bg-color":t.bgColor}})]},proxy:!0},{key:"loading",fn:function(){return[e("pullRefreshLoading",{attrs:{"bg-color":t.bgColor}})]},proxy:!0}]),model:{value:t.isRefreshLoading,callback:function(e){t.isRefreshLoading=e},expression:"isRefreshLoading"}},[e("div",{staticClass:"presale-content"},[t.showPage?e("div",{staticClass:"head"},[e("div",{staticClass:"card"},[t.bannerUrl?e("img",{staticClass:"card__banner",attrs:{src:t.bannerUrl}}):e("img",{staticClass:"card__banner",attrs:{src:t.$t("presale.img_presale_bg")}}),e("div",{staticClass:"card__title"},[e("div",{staticClass:"card__shadow",style:{background:"linear-gradient(360deg,".concat(t.bgColor," 0%,rgba(").concat(t.rgbObj.r,",").concat(t.rgbObj.g,",").concat(t.rgbObj.b,",0) 100%)")}})]),e("div",{staticClass:"card__container"},[e("img",{staticClass:"card__container__top",attrs:{src:i("bd11")}}),e("div",{staticClass:"content__notice"},[!t.showMore&&t.activityDesc?e("div",{ref:"title-wrapper",staticClass:"content__title",on:{click:function(e){return e.stopPropagation(),t.toggleShowMore.apply(null,arguments)}}},[e("span",{ref:"title-content",staticClass:"content__title__main"},[t._v(t._s(t.activityDesc))]),t.showMoreTap?e("p",{staticClass:"content__title__more"},[e("img",{attrs:{src:i("34a2")}})]):t._e()]):e("div",{staticClass:"content__title content__title--more",on:{click:function(e){return e.stopPropagation(),t.toggleShowMore.apply(null,arguments)}}},[t._v(t._s(t.activityDesc))]),!t.showSubMore&&t.activityNotice?e("div",{ref:"sub-title-wrapper",staticClass:"content__title content__title--sub",on:{click:function(e){return e.stopPropagation(),t.toggleSubShowMore.apply(null,arguments)}}},[e("span",{ref:"sub-title-content",staticClass:"content__title__main"},[t._v(t._s(t.activityNotice))]),t.showSubMoreTap?e("p",{staticClass:"content__title__more"},[e("img",{attrs:{src:i("34a2")}})]):t._e()]):e("div",{staticClass:"content__title content__title--more content__title--sub",on:{click:function(e){return e.stopPropagation(),t.toggleSubShowMore.apply(null,arguments)}}},[t._v(t._s(t.activityNotice))])]),e("div",{staticClass:"content__abs"},[t.firstData.timestamp||1!==t.firstData.state?e("span",{staticClass:"content__status"},[e("div",{staticClass:"prod-time"},[t.firstData.timestamp>0?e("div",{staticClass:"prod-time-wrap"},[e("span",{staticClass:"prod-time-desc"},[t._v(t._s(1===t.firstData.state?t.$tc("presale.start_end",1):t.$tc("presale.start_end",2)))]),t.firstData.dd>0?[e("span",{staticClass:"prod-time-r prod-h"},[t._v(t._s(t.firstData.dd||"00"))]),e("span",{staticClass:"prod-time-day"},[t._v(t._s(t.$t("presale.day")))])]:t._e(),e("span",{staticClass:"prod-time-r prod-h"},[t._v(t._s(t.firstData.hh||"00"))]),e("span",{staticClass:"prod-time-gap"},[t._v(":")]),e("span",{staticClass:"prod-time-r prod-m"},[t._v(t._s(t.firstData.mm||"00"))]),e("span",{staticClass:"prod-time-gap"},[t._v(":")]),e("span",{staticClass:"prod-time-r prod-s"},[t._v(t._s(t.firstData.ss||"00"))])],2):e("span",{class:["prod-time-tip",{"tip-end":3===t.firstData.state}]},[t._v(" "+t._s(t.getStateDesc(t.firstData.state))+" ")])])]):e("span",{staticClass:"content__date time-label"},[t._v(t._s(t.firstData.timeLabel))]),e("span",{staticClass:"content__date"},[t._v(t._s(t.beginTime)+" - "+t._s(t.endTime))])])]),t.hasShare?e("div",{staticClass:"card__share",on:{click:t.handleShare}},[e("img",{attrs:{src:i("df9c"),alt:""}}),e("div",{staticClass:"text"},[t._v(t._s(t.$t("common.share")))])]):t._e()])]):t._e(),e("div",{class:["content",{margin_top:t.isActivityEmpty}]},[t.loading&&0===t.pageIndex?e("loading-line"):t._e(),t.loading||0!==t.prodList.length?t._e():e("div",{class:["empty",{"page-empty":t.isActivityEmpty}]},[t.isActivityEmpty?e("img",{attrs:{src:i("d069")}}):t._e(),e("p",[t._v(t._s(t.isActivityEmpty?t.$tc("presale.activity_commodity",1):t.isNoMore?t.$tc("presale.activity_commodity",2):""))])]),e("div",{staticClass:"content__list"},[e("product-list-card",{attrs:{prodList:t.prodList,showPriceControlType:!1,prodSkinData:t.prodSkinData,prodType:2,hasShadow:!1,addBtnDisabled:2===t.firstData.state,cardType:"presale",titleType:"normal"}})],1),t.prodList.length>0?e("loadmore",{attrs:{color:"rgb(255, 255, 255, 0.6)",loading:t.isLoading&&t.pageIndex>0,hasMore:!t.isNoMore,isPresale:!0}}):t._e()],1)])]),e("shareMask",{attrs:{shareUrl:t.shareUrl,isPresale:!0},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)}),r=[],o=i("ad7b"),n=o["a"],c=(i("7b3a"),i("2877")),l=Object(c["a"])(n,s,r,!1,null,"44687cae",null),d=l.exports;i.p=publicPath,Object(a["a"])(d)}});