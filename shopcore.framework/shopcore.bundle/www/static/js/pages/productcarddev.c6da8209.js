(function(t){function r(r){for(var n,o,a=r[0],c=r[1],u=r[2],p=0,l=[];p<a.length;p++)o=a[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&l.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(r);while(l.length)l.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,r=0;r<i.length;r++){for(var e=i[r],n=!0,a=1;a<e.length;a++){var c=e[a];0!==s[c]&&(n=!1)}n&&(i.splice(r--,1),t=o(o.s=e[0]))}return t}var n={},s={"pages/productcarddev":0},i=[];function o(r){if(n[r])return n[r].exports;var e=n[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,r,e){o.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,r){if(1&r&&(t=o(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var n in t)o.d(e,n,function(r){return t[r]}.bind(null,n));return e},o.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(r,"a",r),r},o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=r,a=a.slice();for(var u=0;u<a.length;u++)r(a[u]);var d=c;i.push([96,"chunk-vendors","chunk-common"]),e()})({"0574":function(t,r,e){"use strict";e("b02b")},6021:function(t,r,e){"use strict";e.r(r);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("56d7"),s=function(){var t=this,r=t._self._c;return r("div",{staticClass:"wrapper"},[r("div",{staticClass:"mask"}),r("div",{staticClass:"container"},[t._m(0),r("div",{staticClass:"prod"},[r("product-list-single",{attrs:{isDev:t.isDev,showBrandDev:t.isBrand,prodList:t.productList,partProps:t.productConfig}})],1)]),r("div",{staticClass:"container"},[t._m(1),r("div",{staticClass:"prod"},[r("product-list-card",{attrs:{isDev:t.isDev,showBrandDev:t.isBrand,prodList:t.productList,partProps:t.productConfig,prodType:2}})],1)])])},i=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[t._v("横商品卡示例")]),r("div",{staticClass:"subs"},[t._v("适用于一行 1 个商品卡")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"content"},[r("div",{staticClass:"title"},[t._v("竖商品卡示例")]),r("div",{staticClass:"subs"},[t._v("适用于一行 2 个、一行 3 个、左右横滑商品卡")])])}],o=e("cd92"),a=e("68a7"),c=e("3fa5"),u=e("05c3"),d={name:"productcarddev",data:function(){return{isDev:!0,productList:Object(u["a"])(2),productConfig:{},isBrand:!1}},components:{productListCard:o["a"],productListSingle:a["a"]},mounted:function(){c["b"].setTarget(window.parent),c["b"].setMsgHandler(this.msgHandler.bind(this))},beforeDestroy:function(){c["b"].destroy()},methods:{msgHandler:function(t){var r=t.action,e=t.data;switch(r){case"update:product":this.productConfig=e.info,this.isBrand=e.isBrand;break;default:break}}}},p=d,l=(e("0574"),e("2877")),f=Object(l["a"])(p,s,i,!1,null,"a79c73ba",null),v=f.exports;e.p=publicPath,Object(n["a"])(v)},96:function(t,r,e){t.exports=e("6021")},b02b:function(t,r,e){}});