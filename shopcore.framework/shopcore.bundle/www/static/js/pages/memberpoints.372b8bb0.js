(function(t){function e(e){for(var s,a,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)a=r[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,r=1;r<i.length;r++){var l=i[r];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={"pages/memberpoints":0},o=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.e=function(){return Promise.resolve()},a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var m=l;o.push([77,"chunk-vendors","chunk-common"]),i()})({"04fd":function(t,e,i){"use strict";(function(t){i("0cc8");var s=i("3104"),n=(i("d3b7"),i("25f0"),i("99af"),i("603c")),o=i("44e4"),a=i("bce3"),r=i("fe47"),l=i("b68d");e["a"]={components:{loadingLine:o["a"],"van-sticky":s["a"],loadMore:a["a"]},mixins:[n["a"],l["a"]],data:function(){return{showPage:!1,pageIndex:1,loadMore:!0,isXhr:!1,score:0,memberPointsList:[],isCdf:!1,pointInfo:{}}},mounted:function(){this.isCdf=r["a"].isCdf()||r["a"].isCdfi(),t.setNavigationBarTitle({title:"   "}),this.getMemberPointsListData()},onReachBottom:function(){this.loadMore&&(this.pageIndex+=1,this.getMemberPointsListData())},methods:{minus:function(t){return t<0?t.toString().substr(1):t},getMemberPointsListData:function(){var e=this;this.loadMore&&(this.isXhr=!0,t.request({url:"/api/usercenter/sqvipscorelist",data:{pageIndex:this.pageIndex}}).then((function(i){e.showPage=!0,e.isXhr=!1,i.errorMsg&&t.showToast({title:i.errorMsg||"",icon:"none",className:"member-error-msg",duration:3e3}),1===e.pageIndex&&(e.score=i.score);var s=e.memberPointsList;e.memberPointsList=s.concat(i&&i.list||[]),!s.length||i.list&&i.list.length||(e.loadMore=!1,e.isXhr=!1),e.pointInfo=i,t.setNavigationBarTitle({title:e.$t("memberpoints.own_my_integration",[i.pointsTitle||e.$t("memberpoints.integral")])})})).catch((function(i){e.isXhr=!1,e.showPage=!0,e.loadMore=!1,console.log(i),t.setNavigationBarTitle({title:e.$t("memberpoints.own_my_integration",[e.$t("memberpoints.integral")])})})))},toRulePage:function(){t.navigateTo({url:"/pages/memberpointsrule/main"})}}}}).call(this,i("7189")["default"])},"6e8c":function(t,e,i){t.exports=i.p+"static/img/member_points_list_default.0dfa0674.png"},77:function(t,e,i){t.exports=i("f216")},"9f1e":function(t,e,i){},f216:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("56d7"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"member-points-page",style:t.pageThemeStyle},[t.showPage?[t.isCdf?e("div",{staticClass:"cdf-point"},[e("van-sticky",[e("div",{staticClass:"member-points-top"},[e("div",{staticClass:"top"},[e("div",{staticClass:"top-title"},[t._v(t._s(t.$t("memberpoints.available_integral")))]),e("div",{staticClass:"top-integral"},[e("div",{staticClass:"integral-num"},[t._v(t._s(t.score||0))])])]),e("div",{staticClass:"particulars-title"},[t._v(t._s(t.$t("memberpoints.integral_subsidiary")))])])]),t.memberPointsList.length>0?e("div",{staticClass:"member-points-list"},t._l(t.memberPointsList,(function(i,s){return e("div",{key:s,staticClass:"list-item"},[e("div",{staticClass:"item-top"},[e("div",{staticClass:"item-top-name"},[e("div",{staticClass:"top-name van-ellipsis"},[t._v(t._s(i.title))]),e("div",{staticClass:"item-bottom-time"},[t._v(t._s(i.date))])]),e("div",{staticClass:"top-price"},[e("div",{directives:[{name:"show",rawName:"v-show",value:i.score>0,expression:"item.score > 0"}],staticClass:"item-give"},[t._v("+")]),e("div",{directives:[{name:"show",rawName:"v-show",value:i.score<0,expression:"item.score < 0"}],staticClass:"item-deduct"},[t._v("-")]),e("div",{class:["price",{give:i.score>0}]},[t._v(t._s(t.minus(i.score)))])])])])})),0):e("div",{staticClass:"member-points-list-null"},[e("div",{staticClass:"null_info"},[e("img",{attrs:{src:i("6e8c"),alt:""}}),e("p",[t._v(t._s(t.$t("memberpoints.no_integration")))])])])],1):e("div",{staticClass:"own-point"},[e("van-sticky",[e("div",{staticClass:"points-top"},[e("div",{staticClass:"point-info"},[e("div",{staticClass:"point__text"},[t._v(" "+t._s(t.$t("memberpoints.own_available_integral",[t.pointInfo.pointsTitle||t.$t("memberpoints.integral")]))+" ")]),e("div",{staticClass:"point__num"},[t._v(t._s(t.pointInfo.score||0))])]),t.pointInfo.showPointRule?e("div",{staticClass:"point-rule",on:{click:t.toRulePage}},[e("div",{staticClass:"rule__text"},[t._v(" "+t._s(t.$t("memberpoints.integral_rule",[t.pointInfo.pointsTitle||t.$t("memberpoints.integral")]))+" ")]),e("span",{staticClass:"rule__icon iconfont icon-youjiantou"})]):t._e()]),e("div",{staticClass:"point-title"},[t._v(" "+t._s(t.$t("memberpoints.integral_details",[t.pointInfo.pointsTitle||t.$t("memberpoints.integral")]))+" ")])]),t.memberPointsList.length>0?e("div",{staticClass:"member-points-list"},t._l(t.memberPointsList,(function(i,s){return e("div",{key:s,staticClass:"list-item"},[e("div",{staticClass:"item-top"},[e("div",{staticClass:"item-top-name"},[e("div",{staticClass:"top-name van-ellipsis"},[t._v(t._s(i.title))]),e("div",{staticClass:"item-bottom-time"},[t._v(t._s(i.date))])]),e("div",{staticClass:"top-price"},[e("div",{directives:[{name:"show",rawName:"v-show",value:i.score>0,expression:"item.score > 0"}],staticClass:"item-give"},[t._v("+")]),e("div",{directives:[{name:"show",rawName:"v-show",value:i.score<0,expression:"item.score < 0"}],staticClass:"item-deduct"},[t._v("-")]),e("div",{class:["price",{give:i.score>0}]},[t._v(t._s(t.minus(i.score)))])])])])})),0):e("div",{staticClass:"member-points-list-null"},[e("div",{staticClass:"null_info"},[e("img",{attrs:{src:i("6e8c"),alt:""}}),e("p",[t._v(t._s(t.$t("memberpoints.own_no_integration",[t.pointInfo.pointsTitle||t.$t("memberpoints.integral")])))])])])],1),t.memberPointsList.length>0?e("load-more",{attrs:{hasMore:t.loadMore,loading:t.isXhr&&t.pageIndex>0}}):t._e()]:t.showPage?t._e():e("loading-line"),e("div",{staticClass:"tools-bar"})],2)},o=[],a=i("04fd"),r=a["a"],l=(i("fbaf"),i("2877")),c=Object(l["a"])(r,n,o,!1,null,null,null),m=c.exports;i.p=publicPath,Object(s["a"])(m)},fbaf:function(t,e,i){"use strict";i("9f1e")}});