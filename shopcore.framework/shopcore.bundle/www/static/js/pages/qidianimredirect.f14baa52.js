(function(e){function t(t){for(var i,a,c=t[0],d=t[1],u=t[2],s=0,m=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);l&&l(t);while(m.length)m.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],i=!0,c=1;c<r.length;c++){var d=r[c];0!==n[d]&&(i=!1)}i&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var i={},n={"pages/qidianimredirect":0},o=[];function a(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=i,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(r,i,function(t){return e[t]}.bind(null,i));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=d;o.push([103,"chunk-vendors","chunk-common"]),r()})({103:function(e,t,r){e.exports=r("7151")},7151:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("56d7"),n=function(){var e=this,t=e._self._c;return t("div")},o=[],a=r("a6d7"),c=a["a"],d=r("2877"),u=Object(d["a"])(c,n,o,!1,null,null,null),l=u.exports;r.p=publicPath,Object(i["a"])(l)},a6d7:function(e,t,r){"use strict";(function(e){r("d3b7"),r("99af"),r("ac1f"),r("5319"),r("00b4");var i=r("fe47"),n={MINIAPP:1,MINIAPP_PLUGIN:2,H5:3,APP:4,PC:5},o="wxdf26125d1f97992c",a="wx7426c38ee6648f0e",c=[o,a],d=["cdfglpshop","shop2cncom","cdf.vmp.o2pcn.com"];function u(e,t){return e.some((function(e){return t.indexOf(e)>=0}))}t["a"]={data:function(){return{clientType:""}},mounted:function(){this.query=e.getQuery(),this.mchId=i["a"].getMchId(),this.qidianImRedirect()},methods:{gotoProduct:function(t,r,i,o){var a=this.getClientType(),c={productId:t,activityId:r,activityType:i,tradingSpecial:o};if(a!==n.APP)if(a!==n.MINIAPP)if(a!==n.MINIAPP_PLUGIN)if(a!==n.H5)if(a!==n.PC);else{var d=e.addOrReplaceUrlParams("https://".concat(this.getWebDomain(),"/").concat(this.mchId,"/item/").concat(t),c);window.location.replace(d)}else e.redirectTo({url:e.addOrReplaceUrlParams("/pages/item/main",c)});else wx&&wx.miniProgram&&(wx.miniProgram.navigateTo({url:e.addOrReplaceUrlParams("plugin-private://wxb382e2cc95b3f502/pages/item/item",c)}),setTimeout((function(){window.history.go(-1)}),1e3));else wx&&wx.miniProgram&&(wx.miniProgram.navigateTo({url:e.addOrReplaceUrlParams("/pages/item/item",c)}),setTimeout((function(){window.history.go(-1)}),1e3));else{var u=function(){wx&&wx.miniProgram&&(wx.miniProgram.navigateTo({url:e.addOrReplaceUrlParams("/pages/item/item",c)}),setTimeout((function(){window.history.go(-1)}),1e3))};"undefined"==typeof cordova?document.addEventListener("deviceready",u):u()}},gotoOrder:function(t){var r=this.getClientType();if(r!==n.APP)if(r!==n.MINIAPP)if(r!==n.MINIAPP_PLUGIN)if(r!==n.H5)if(r!==n.PC);else{var i="https://".concat(this.getWebDomain(),"/").concat(this.mchId,"/myorderdetail/").concat(t);window.location.replace(i)}else e.redirectTo({url:"/pages/myorderdetail/main?orderid=".concat(t)});else wx&&wx.miniProgram&&(wx.miniProgram.navigateTo({url:"plugin-private://wxb382e2cc95b3f502/subPackage/pages/myOrderDetail/myOrderDetail?orderid=".concat(t)}),setTimeout((function(){window.history.go(-1)}),1e3));else wx&&wx.miniProgram&&(wx.miniProgram.navigateTo({url:"/subPackage/pages/myOrderDetail/myOrderDetail?orderid=".concat(t)}),setTimeout((function(){window.history.go(-1)}),1e3));else{var o=function(){wx&&wx.miniProgram&&(wx.miniProgram.navigateTo({url:"/pages/myorderdetail/myorderdetail?orderid=".concat(t)}),setTimeout((function(){window.history.go(-1)}),1e3))};"undefined"==typeof cordova?document.addEventListener("deviceready",o):o()}},qidianImRedirect:function(){this.clientType=this.getClientType();var e=this.query,t=e.orderId,r=e.productId,i=e.activityId,n=e.activityType,o=e.tradingSpecial;return t?this.gotoOrder(t):r?this.gotoProduct(r,i,n,o):void 0},getClientType:function(){var t=window.navigator.userAgent.toLocaleLowerCase(),r=e.isMobile,i=/miniProgram/i.test(t),o=i&&u(c,t),a=u(d,t),l=null;return l=o?n.MINIAPP_PLUGIN:i?n.MINIAPP:a?n.APP:r?n.H5:n.PC,l},getWebDomain:function(){var e={600667208:"glp.cdfmembers.com",604163192:"hkweb.cdfmembers.com",604163207:"hkweb.cdfmembers.com",604163145:"www.cdf-beauty.com",600877578:"test.cdfmembers.com"};return e[this.mchId]||"mall2.shop2cn.com"}}}}).call(this,r("7189")["default"])}});