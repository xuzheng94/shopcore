(function(e){function t(t){for(var r,n,o=t[0],c=t[1],l=t[2],h=0,u=[];h<o.length;h++)n=o[h],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&u.push(a[n][0]),a[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],r=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=i[0]))}return e}var r={},a={"pages/memberprivilege":0},s=[];function n(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.e=function(){return Promise.resolve()},n.m=e,n.c=r,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=c;s.push([79,"chunk-vendors","chunk-common"]),i()})({"162f6":function(e,t,i){"use strict";i("767c")},2093:function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("56d7"),a=(i("99af"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container-member-privilege",style:[{background:e.bgColor},e.pageThemeStyle]},[t("van-pull-refresh",{attrs:{"animation-duration":"1500","head-height":"60"},on:{refresh:e.pullRefresh},scopedSlots:e._u([{key:"pulling",fn:function(e){return[t("div")]}},{key:"loosing",fn:function(){return[t("pullRefreshLoading",{attrs:{"bg-color":e.bgColor}})]},proxy:!0},{key:"loading",fn:function(){return[t("pullRefreshLoading",{attrs:{"bg-color":e.bgColor}})]},proxy:!0}]),model:{value:e.isRefreshLoading,callback:function(t){e.isRefreshLoading=t},expression:"isRefreshLoading"}},[t("div",{staticClass:"member-privilege-content"},[e.showPage?t("div",{staticClass:"head"},[t("div",{staticClass:"card"},[e.bannerUrl?t("img",{staticClass:"card__banner",attrs:{src:e.bannerUrl}}):t("img",{staticClass:"card__banner",attrs:{src:e.$t("memberprivilege.img_member_bg")}}),t("div",{staticClass:"card__title"},[t("div",{staticClass:"card__shadow",style:{background:"linear-gradient(360deg,".concat(e.bgColor," 0%,rgba(").concat(e.rgbObj.r,",").concat(e.rgbObj.g,",").concat(e.rgbObj.b,",0) 100%)")}})]),t("div",{staticClass:"card__container"}),e.hasShare?t("div",{staticClass:"card__share",on:{click:e.handleShare}},[t("img",{attrs:{src:i("df9c"),alt:""}}),t("div",{staticClass:"text"},[e._v(e._s(e.$t("common.share")))])]):e._e()])]):e._e(),t("div",{class:["content",{margin_top:e.isActivityEmpty}]},[e.loading&&0===e.pageIndex?t("loading-line"):e._e(),!e.loading&&e.prodList.length<=0?t("div",{class:["empty",{"page-empty":e.isActivityEmpty}]},[e.isActivityEmpty?t("img",{attrs:{src:i("d069")}}):e._e(),t("p",[e._v(e._s(e.isActivityEmpty?e.$t("memberprivilege.have_activity"):e.isNoMore?e.$t("memberprivilege.no_goods"):""))])]):e._e(),t("div",{staticClass:"content__list"},[t("product-list-card",{attrs:{prodList:e.prodList,showPriceControlType:!1,prodType:2,hasShadow:!1,addBtnDisabled:2===e.activityStatus,prodSkinData:e.prodSkinData,cardType:"member",memberPic:e.memberLevelPic,memberGrade:e.memberGrade}})],1),e.prodList.length>0?t("loadmore",{attrs:{color:"rgb(255, 255, 255, 0.6)",loading:e.loading&&e.pageIndex>0,hasMore:!e.isNoMore,isPresale:!0}}):e._e()],1)])]),t("shareMask",{attrs:{shareUrl:e.shareUrl,isPresale:!0},model:{value:e.showShare,callback:function(t){e.showShare=t},expression:"showShare"}})],1)}),s=[],n=i("217f"),o=n["a"],c=(i("162f6"),i("2877")),l=Object(c["a"])(o,a,s,!1,null,null,null),d=l.exports;i.p=publicPath,Object(r["a"])(d)},"217f":function(e,t,i){"use strict";(function(e){var r=i("5530"),a=(i("ab71"),i("58e6")),s=(i("d3b7"),i("ac1f"),i("00b4"),i("fb6a"),i("841c"),i("b0c0"),i("99af"),i("b68d")),n=i("603c"),o=i("cd92"),c=i("44e4"),l=i("bce3"),d=i("fec4"),h=i("7fcb"),u=i("c08d");t["a"]={components:{productListCard:o["a"],loadingLine:c["a"],loadmore:l["a"],selectsku:d["a"],shareMask:h["a"],"van-pull-refresh":a["a"],pullRefreshLoading:u["a"]},mixins:[n["a"],s["a"]],data:function(){return{activityId:"",sectionId:"",status:1,activityStatus:0,hasShare:e.hasShare,showShare:!1,shareUrl:"",loading:!1,prodList:[],bannerUrl:"",bgColor:"",pageIndex:1,isNoMore:!1,rgbObj:{},isActivityEmpty:!1,isXhr:!1,memberLevelPic:"",isRefreshLoading:!1,memberGrade:{}}},computed:{showPage:function(){return(this.prodList&&this.prodList.length||!this.loading)&&!this.isActivityEmpty}},mounted:function(){this.getMemberPrivilegeInfo()},onReachBottom:function(){this.isNoMore||this.isXhr||(this.pageIndex++,this.getMemberPrivilegeList(this.pageIndex))},methods:{pullRefresh:function(){this.pageIndex=1,this.isNoMore=!1,this.getMemberPrivilegeInfo()},handleShare:function(){var t=this;e.ylog.send({action_type:"click",module_name:"share"}),e.getShareData().then((function(i){e.request({url:"/api/social/sqnewusershareinfo",method:"POST",data:Object(r["a"])({activityId:t.activityId},i)}).then((function(e){e.shareUrl&&(t.shareUrl=e.shareUrl,t.showShare=!0)})).catch((function(i){e.showToast({title:i.msg||i.message||t.$t("memberprivilege.failed_graph")})}))}))},fetchPageData:function(){return window._global&&window._global.pageInfo?Promise.resolve(window._global.pageInfo):e.request({url:"/api/prod/shopactivity?activityid=".concat(this.activityId,"&returnVip=true")})},getStateDesc:function(e){var t="";switch(e){case 1:t="";break;case 2:t=this.$t("memberprivilege.event_not_start");break;case 3:t=this.$t("memberprivilege.activity_over");break;default:t=this.$t("memberprivilege.activity_over");break}return t},hexToRgb:function(e){var t,i,r;return/^#/g.test(e)?(t=e.slice(1,3),i=e.slice(3,5),r=e.slice(5,7),{r:parseInt(t,16),g:parseInt(i,16),b:parseInt(r,16)}):{}},getMemberPrivilegeInfo:function(){var t=this,i=e.parseLocator(window.location.search,"lower"),r=i.sectionid||"",a=i.activityid||"";if(this.status=i.status||1,r&&(this.sectionId=r),a&&(this.activityId=a),!a)return this.loading=!1,void(this.isActivityEmpty=!0);this.loading=!0,this.fetchPageData().then((function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.isRefreshLoading=!1,i&&i.activityId){var r=i.designConfig||{};return t.bannerUrl=i.activityBanner||"",t.bgColor=r.backgroundColor||"#EDC282",t.rgbObj=t.hexToRgb(r.backgroundColor||"#EDC282"),t.activityStatus=i.activityStatus||"",e.setNavigationBarTitle({title:i.name||t.$t("memberprivilege.member_exclusive")}),e.wxShare({title:i.name||""}),t.getMemberPrivilegeList(t.pageIndex),void(t.loading=!1)}t.loading=!1,t.isActivityEmpty=!0,e.showToast({title:t.$t("memberprivilege.failed_activity")})})).catch((function(i){t.loading=!1,t.isRefreshLoading=!1,t.isActivityEmpty=!0,e.showToast({title:i.msg||i.message||t.$t("memberprivilege.failed_activity")})}))},getMemberPrivilegeList:function(t){var i=this,r={pageIndex:t,activityType:23,status:this.status};this.sectionId&&(r.sectionId=this.sectionId),this.activityId&&(r.activityId=this.activityId),this.isXhr=!0,e.request({url:"/api/prod/shoppanicbuylist",data:r}).then((function(e){i.isXhr=!1,i.isRefreshLoading=!1,e&&(i.pageIndex=t,i.memberLevelPic=e.memberLevelPic,i.memberGrade=e.memberGrade,i.prodList=1===t?e.productList||[]:i.prodList.concat(e.productList||[]),e.productList&&0!==e.productList.length||(i.isNoMore=!0))})).catch((function(t){i.isNoMore=!0,i.isRefreshLoading=!1,e.showToast({title:t.msg||t.message||i.$t("memberprivilege.no_goods")})}))}}}}).call(this,i("7189")["default"])},"767c":function(e,t,i){},79:function(e,t,i){e.exports=i("2093")}});