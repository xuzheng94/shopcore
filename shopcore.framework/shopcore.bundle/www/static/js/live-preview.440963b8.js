(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["live-preview"],{2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return p}));var s=i("6b75");function o(t){if(Array.isArray(t))return Object(s["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var c=i("06c5");i("d9e2");function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t){return o(t)||n(t)||Object(c["a"])(t)||a()}},"387c":function(t,e,i){"use strict";(function(t){var s=i("2909"),o=(i("fb6a"),i("a8f5")),n=i("44c3");e["a"]={name:"LivePreview",props:["part","isDev"],data:function(){return{dataLoading:!1,partProps:{},dataList:[],originList:[],showPage:!0,showViewMore:!1}},watch:{part:{deep:!0,immediate:!0,handler:function(t){var e=t.partId||"";this.partProps=t.partProps||{},e&&(this.partId=e,this.getPartData())}}},methods:{getPartData:function(){var e=this;if(this.isDev)this.handleDevUpdate();else{var i=this.partId||"";i&&!this.dataLoading&&(this.dataLoading=!0,t.request({url:"/api/prod/shophomepartdata?PartId=".concat(i),data:{}}).then((function(t){e.$emit("loaddata",{partId:i,hasData:t&&t.list&&t.list.length>0}),e.dataLoading=!1,e.originList=t&&t.list||[];var s=2;e.showViewMore=e.originList.length>s,e.dataList=e.originList.slice(0,s),e.dataList.length||(e.showPage=!1)})).catch((function(){e.$emit("loaddata",{partId:i,hasData:!1}),e.dataLoading=!1,e.showPage=!1})))}},goLiveDetail:function(t){var e=t.liveId,i=t.liveType,s=t.roomId,n=t.broadcastType;Object(o["c"])(i,s,e,2,n)},handleViewMore:function(){this.showViewMore=!1,this.dataList=Object(s["a"])(this.originList)},handleDevUpdate:function(){this.dataList=Object(s["a"])(n["c"]),this.showViewMore=this.partProps.previewNum>2}}}}).call(this,i("7189")["default"])},"44c3":function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return n})),i.d(e,"a",(function(){return c}));var s=[{liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/cover.png",viewNum:"8881",liveTitle:"标题标题标题标题标题标题标题题标题标题标题标题标题",putawayCount:"456",productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods1.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods2.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods4.png"}]}],o=[{liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/cover1.png",liveTitle:"商品标题商品标题商品标题商品标题",startTimeDesc:"12.28 10:00",isSubscribe:0,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods1.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods2.png"}]},{liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/cover2.png",liveTitle:"商品标题商品标题商品标题商品标题",startTimeDesc:"12.28 10:00",isSubscribe:1,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods4.png"}]}],n=[{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover1.png",viewNum:2,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods1.png"}]},{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover2.png",viewNum:27772,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods2.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods4.png"}]},{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover1.png",viewNum:2,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods1.png"}]},{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover2.png",viewNum:27772,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods2.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods4.png"}]}],c=[{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"}]},"4cb8":function(t,e,i){"use strict";i("d05a")},"791b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return t.showPage?e("div",{staticClass:"livepreview-wrap"},[t.partProps.titleText||t.partProps.subTitleText?e("div",{staticClass:"common-title"},[e("div",{staticClass:"common-title__text",style:{color:t.partProps.titleColor||"#1A1D20"}},[t._v(" "+t._s(t.partProps.titleText||"")+" ")]),e("div",{staticClass:"common-title__subtext",style:{color:t.partProps.subTitleColor||"#666666"}},[t._v(" "+t._s(t.partProps.subTitleText||"")+" ")])]):t._e(),e("div",{staticClass:"livepreview-list"},t._l(t.dataList,(function(i,s){return e("div",{key:s,staticClass:"livepreview-item",on:{click:function(e){return t.goLiveDetail(i)}}},[e("div",{staticClass:"livepreview-item__left"},[e("img",{staticClass:"livepreview-item__img",attrs:{src:i.liveCover}})]),e("div",{staticClass:"livepreview-item__info"},[e("div",{staticClass:"livepreview-item__title"},[t._v(t._s(i.liveTitle||""))]),e("div",{class:["livepreview-item-time",{"livepreview-item-time--noproduct":!t.partProps.productShow||!i.productList||!i.productList.length}]},[e("div",{staticClass:"livepreview-item-time__text",style:{color:t.partProps.buttonColor}},[t._v(" "+t._s(t.$t("skins.start_broadcast",[i.startTimeDesc||""]))+" ")]),t.isDev?e("div",{class:["livepreview-item-time__btn",{"livepreview-item-time__btn--subscribed":1===i.isSubscribe}],style:{backgroundColor:t.partProps.buttonColor}},[t._v(" "+t._s(i.isSubscribe?t.$t("skins.appointment_active"):t.$t("skins.appointment"))+" ")]):t._e()]),t.partProps.productShow&&i.productList&&i.productList.length?e("div",{staticClass:"livepreview-products"},t._l(i.productList,(function(t,i){return e("div",{key:i,staticClass:"livepreview-products__cloak"},[e("img",{staticClass:"livepreview-products__img",attrs:{src:t.coverImg}}),e("div",{staticClass:"livepreview-products__singlecloak"})])})),0):t._e()])])})),0),t.showViewMore?e("div",{staticClass:"livepreview-more",on:{click:t.handleViewMore}},[t._v(" "+t._s(t.$t("skins.view_more_prediction"))+" ")]):t._e()]):t._e()},o=[],n=i("387c"),c=n["a"],a=(i("4cb8"),i("2877")),p=Object(a["a"])(c,s,o,!1,null,"2a40d4d6",null);e["default"]=p.exports},d05a:function(t,e,i){}}]);