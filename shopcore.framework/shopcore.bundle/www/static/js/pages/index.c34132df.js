(function(o){function n(n){for(var e,r,i=n[0],l=n[1],u=n[2],f=0,d=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(o[e]=l[e]);s&&s(n);while(d.length)d.shift()();return c.push.apply(c,u||[]),t()}function t(){for(var o,n=0;n<c.length;n++){for(var t=c[n],e=!0,i=1;i<t.length;i++){var l=t[i];0!==a[l]&&(e=!1)}e&&(c.splice(n--,1),o=r(r.s=t[0]))}return o}var e={},a={"pages/index":0},c=[];function r(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return o[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=o,r.c=e,r.d=function(o,n,t){r.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:t})},r.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,n){if(1&n&&(o=r(o)),8&n)return o;if(4&n&&"object"===typeof o&&o&&o.__esModule)return o;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var e in o)r.d(t,e,function(n){return o[n]}.bind(null,e));return t},r.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return r.d(n,"a",n),n},r.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var s=l;c.push([54,"chunk-vendors","chunk-common"]),t()})({3618:function(o,n,t){"use strict";t("6919")},54:function(o,n,t){o.exports=t("df31")},5857:function(o,n,t){"use strict";t("e05c")},6919:function(o,n,t){},"718a":function(o,n,t){"use strict";(function(o,e){t("e9c4");var a=t("ff86"),c=t("603c"),r=t("bcb3"),i=t("9225");console.log(i["a"],"i18n",i["a"].t("common.loading")),n["a"]={mixins:[c["a"]],data:function(){return{motto:"Hello miniprograme",userInfo:{nickName:"mpvue",avatarUrl:"http://mpvue.com/assets/logo.png"},langs:["zh_CN","en","zh_HK"]}},mounted:function(){console.log(i["a"],"i18n",i["a"].t("common.loading")),o.request({url:"/api/prod/sqshop",data:{pageIndex:1}}).then((function(o){console.log(o)}))},components:{card:a["a"],tabnav:r["a"]},onPageScroll:function(o){console.log("onPageScroll, scrollTop:".concat(o.scrollTop))},onReachBottom:function(){console.log("onReachBottom")},methods:{logout:function(){var n=o.auth.logout();n?o.showToast({title:"退出登陆"}):o.showToast({title:"退出登陆失败"})},upload:function(){e.command("choosePhoto").then((function(n){o.showToast({title:JSON.stringify(n)})}))},bindViewTap:function(){var o="../logs/main";mpvue.navigateTo({url:o})},clickHandle:function(o){console.log("clickHandle:",o)},pay:function(){window.location.href="https://api.wisecashier.com/mp_pay/oauth?merchant_no=WC5c78d78282173&currency=USD&orderid=test123"},login:function(){o.auth.tologin()},showModal:function(){o.showModal({title:"提示",content:"这是一个模态弹窗",success:function(o){o.confirm?console.log("用户点击确定"):o.cancel&&console.log("用户点击取消")}})},showToast:function(){o.showToast({title:"成功",icon:"success",duration:2e3})},showLoading:function(){o.showLoading({title:"加载中"})},hideLoading:function(){o.hideLoading()},navigateTo:function(){o.navigateTo({url:"http://www.baidu.com"})},redirectTo:function(){o.redirectTo({url:"http://www.baidu.com"})},navigateBack:function(){o.navigateBack(1)},updateStorage:function(){o.removeStorage("DIALOGOBJ")}},created:function(){}}}).call(this,t("7189")["default"],t("d16c")["default"])},df31:function(o,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var e=t("56d7"),a=(t("d81d"),t("4de4"),t("d3b7"),function(){var o=this,n=o._self._c;return n("div",[n("span",[o._v("测试国际化：")]),n("select",{directives:[{name:"model",rawName:"v-model",value:o.$i18n.locale,expression:"$i18n.locale"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(o){return o.selected})).map((function(o){var n="_value"in o?o._value:o.value;return n}));o.$set(o.$i18n,"locale",n.target.multiple?t:t[0])}}},o._l(o.langs,(function(t,e){return n("option",{key:"Lang".concat(e),domProps:{value:t}},[o._v(" "+o._s(t)+" ")])})),0),n("br"),n("button",{on:{click:o.logout}},[o._v(o._s(o.$t("index.logout")))]),n("br"),n("button",{on:{click:o.updateStorage}},[o._v(o._s(o.$t("index.clear_cache")))])])}),c=[],r=t("718a"),i=r["a"],l=(t("3618"),t("5857"),t("2877")),u=Object(l["a"])(i,a,c,!1,null,"735a941e",null),s=u.exports;t.p=publicPath,Object(e["a"])(s)},e05c:function(o,n,t){}});