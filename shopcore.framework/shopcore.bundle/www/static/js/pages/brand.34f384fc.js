(function(e){function t(t){for(var r,o,s=t[0],l=t[1],c=t[2],p=0,f=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={"pages/brand":0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;i.push([12,"chunk-vendors","chunk-common"]),a()})({"0122":function(e,t,a){"use strict";(function(e){a("ac1f"),a("841c"),a("a9e3"),a("99af"),a("b0c0");var r=a("191e"),n=a("603c"),i=a("b68d"),o=a("4696"),s=a("fe47"),l=a("3841"),c=a("ed08");t["a"]={name:"Brand",components:{skinwrap:l["default"],previewTips:o["a"]},mixins:[r["a"],n["a"],i["a"]],data:function(){return{pageStatus:1,pageData:{},parts:[],pageStyleMode:null,emptyMsg:"",pageName:"",sellerInfo:{},isPreview:0,gifImgUrl:"",mchId:"",pageId:""}},computed:{wrapperStyle:function(){return this.moduleStyle(this.pageData)}},created:function(){var e=this,t=c["a"].parseLocator(window.location.search,"lower"),a=1===Number(t.preview)?1:0;s["a"].init(t,(function(t){e.mchId=t})),this.pageId=t.pageid,this.isPreview=a},mounted:function(){this.getExtraData(),this.getPageData()},methods:{getExtraData:function(){var t=this;e.request({url:"/api/prod/sqshopextra"}).then((function(e){var a=e.sellerInfo||{};t.sellerInfo=a})).catch((function(e){console.log(e)}))},fetchPageData:function(){return e.request({url:"/api/prod/shophomepageinfo?MerchantId=".concat(this.mchId,"&PageId=").concat(this.pageId)})},getPageData:function(){var t=this;if(!this.pageId)return this.emptyMsg=this.$t("showskin.hani_failed"),void(this.pageStatus=3);this.fetchPageData().then((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(a.code||a.msg)return t.pageStatus=3,void(t.emptyMsg=a.msg||a.message||t.$t("showskin.data_loading_failure"));a.parts&&a.parts.length?(a.name&&(t.pageName=a.name,e.setNavigationBarTitle({title:a.name})),t.pageData=a,t.parts=a.parts,t.pageStyleMode=a.pageStyleMode||1,t.pageStatus=2):t.pageStatus=3})).catch((function(){t.pageStatus=3,e.showToast({title:t.$t("showactivity.failed_activity")})}))},moduleStyle:function(e){var t={},a="";if(e&&e.bgPicUrl){var r=this.handleImgUrl(e.bgPicUrl),n=r.gifImgUrl,i=r.norImgUrl;i&&(t.backgroundImage="url('".concat(i,"')")),n&&(a=n)}return e&&(t.backgroundColor=e.bgColor||"#fff"),this.gifImgUrl=a,t},handleImgUrl:function(t){var a="",r="",n=e.parseImgUrl(t),i=n.imgUrl,o=n.maskUrl;return r=i,o&&(a=o),{gifImgUrl:a,norImgUrl:r}}}}}).call(this,a("7189")["default"])},12:function(e,t,a){e.exports=a("561c")},"561c":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("56d7"),n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper",style:e.pageThemeStyle},[e.isPreview?t("preview-tips"):e._e(),1===e.pageStatus?t("div",{staticClass:"placeholder"}):e._e(),2===e.pageStatus?t("div",{staticClass:"showskin",style:e.wrapperStyle},[e.gifImgUrl?t("div",{staticClass:"showskin-mask",style:{backgroundImage:"url('".concat(e.gifImgUrl,"')")}}):e._e(),t("skinwrap",{attrs:{parts:e.parts,pageId:e.pageId,pageName:e.pageName,pageData:e.pageData,isPreview:e.isPreview,sellerInfo:e.sellerInfo,pageStyleMode:e.pageStyleMode}})],1):e._e()],1)},i=[],o=a("0122"),s=o["a"],l=(a("e983"),a("bbb3"),a("2877")),c=Object(l["a"])(s,n,i,!1,null,"9dba0f52",null),u=c.exports;a.p=publicPath,Object(r["a"])(u)},"8a42":function(e,t,a){},baf1:function(e,t,a){},bbb3:function(e,t,a){"use strict";a("8a42")},e983:function(e,t,a){"use strict";a("baf1")}});