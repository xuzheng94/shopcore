(function(t){function e(e){for(var n,a,c=e[0],l=e[1],u=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={"pages/livereplay":0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.e=function(){return Promise.resolve()},a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var s=l;i.push([63,"chunk-vendors","chunk-common"]),r()})({"0072":function(t,e,r){"use strict";r("43ca")},"228d":function(t,e,r){"use strict";(function(t){var n=r("5530"),o=(r("5fe4"),r("8ad4")),i=(r("b0c0"),r("2f62")),a=r("191e"),c=r("92fd"),l=r("b68d");e["a"]={mixins:[a["a"],l["a"]],components:{Slider:o["a"],products:c["a"]},data:function(){return{value:0}},computed:Object(n["a"])({},Object(i["d"])({liveId:function(t){return t.app.liveId},replayInfo:function(t){return t.app.replayInfo},productTotal:function(t){return t.app.productInfo.total||0}})),mounted:function(){var e=this;t.auth.islogin()&&this.fetchCartNum(),this.fetchReplayInfo().then((function(r){var n=r.sellerInfo,o=void 0===n?{}:n,i=r.liveCover,a=r.historyPlayUrl,c=e.$t("livereplay.check_broadcast");t.wxShare({title:e.$t("livereplay.live_broadcast",{0:o.name||""}),desc:c,imgUrl:i,mpTitle:c}),o.name&&(document.title=o.name),a?e.$nextTick((function(){e.initTcPlayer()})):t.showToast({title:e.$t("livereplay.no_replay"),duration:0})})),this.fetchProductList()},methods:Object(n["a"])(Object(n["a"])(Object(n["a"])({},Object(i["b"])(["fetchReplayInfo","fetchCartNum","fetchProductList"])),Object(i["c"])(["toggleProduct"])),{},{play:function(){this.player&&!this.player.playing()&&this.player.play()},initTcPlayer:function(){var e=this,r=this.replayInfo.historyPlayUrl;if(this.player=new TcPlayer("video",{m3u8:r,live:!0,autoplay:!0,h5_flv:!0,x5_type:"h5",x5_player:!0,controls:"system"}),t.isWechat){var n=function(){WeixinJSBridge.invoke("getNetworkType",{},(function(){e.player.play()}))};"undefined"!==typeof WeixinJSBridge?n():document.addEventListener("WeixinJSBridgeReady",n,!1)}else this.player.play();return this.player},onProduct:function(){this.productTotal&&this.productTotal>0&&this.toggleProduct()}})}}).call(this,r("7189")["default"])},"3c56":function(t,e,r){"use strict";(function(t){r("ac1f"),r("841c"),r("d3b7");var n=t.parseUrl(window.location.search,"lower"),o={state:{liveId:n.id||n.liveid,replayInfo:{},cartNum:0,productInfo:{},productVisible:!1},mutations:{setReplayInfo:function(t,e){t.replayInfo=e},setCartNum:function(t,e){t.cartNum=e||0},setProductInfo:function(t,e){t.productInfo=e||{}},toggleProduct:function(t){t.productVisible=!t.productVisible}},actions:{fetchReplayInfo:function(e){var r=e.state,n=e.commit;return t.request({url:"/api/live/video/replay",params:{liveid:r.liveId}}).then((function(t){return n("setReplayInfo",t),t})).catch((function(e){return t.showToast({title:e.message}),Promise.reject(null)}))},fetchProductList:function(e){var r=e.state,n=e.commit;return t.request({url:"/api/live/video/productlist",params:{liveid:r.liveId}}).then((function(t){return n("setProductInfo",t),t})).catch((function(e){return t.showToast({title:e.message}),Promise.reject(null)}))},fetchCartNum:function(e){var r=e.commit;return t.request({url:"/api/trading/sqscartprodnum"}).then((function(t){return r("setCartNum",t.totalNum),t.totalNum})).catch((function(e){return t.showToast({title:e.message}),Promise.reject(null)}))}}};e["a"]=o}).call(this,r("7189")["default"])},"3f0e":function(t,e,r){},"43ca":function(t,e,r){},63:function(t,e,r){t.exports=r("a3bf")},"91b6":function(t,e,r){"use strict";r("3f0e")},a3bf:function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("56d7"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrap",class:[t.$i18n.locale],style:t.pageThemeStyle,on:{click:t.play}},[t._m(0),e("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"overlayer"},[e("div",{staticClass:"overlayer-content"},[e("div",{staticClass:"replay-tag"}),e("div",{staticClass:"replay-bottombar"},[e("div",{staticClass:"action-control"},[t._e()],2),e("div",{staticClass:"action-product",on:{click:t.onProduct}},[e("div",{staticClass:"num"},[t._v(t._s(t.productTotal))])])])]),e("products")],1)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"videolayer iphonex"},[e("div",{attrs:{id:"video"}})])}],a=r("228d"),c=a["a"],l=(r("0072"),r("91b6"),r("2877")),u=Object(l["a"])(c,o,i,!1,null,"d17e0456",null),s=u.exports,f=r("a026"),p=r("2f62"),d=r("3c56");f["default"].use(p["a"]);var v=!1,h=new p["a"].Store({modules:{app:d["a"]},strict:v});r.p=publicPath,Object(n["a"])(s,{store:h})}});