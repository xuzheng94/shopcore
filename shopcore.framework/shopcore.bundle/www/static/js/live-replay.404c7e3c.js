(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["live-replay"],{2909:function(t,e,s){"use strict";s.d(e,"a",(function(){return p}));var o=s("6b75");function i(t){if(Array.isArray(t))return Object(o["a"])(t)}s("a4d3"),s("e01a"),s("d3b7"),s("d28b"),s("3ca3"),s("ddb0"),s("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var a=s("06c5");s("d9e2");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(t){return i(t)||n(t)||Object(a["a"])(t)||c()}},"44c3":function(t,e,s){"use strict";s.d(e,"b",(function(){return o})),s.d(e,"c",(function(){return i})),s.d(e,"d",(function(){return n})),s.d(e,"a",(function(){return a}));var o=[{liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/cover.png",viewNum:"8881",liveTitle:"标题标题标题标题标题标题标题题标题标题标题标题标题",putawayCount:"456",productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods1.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods2.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-play/goods4.png"}]}],i=[{liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/cover1.png",liveTitle:"商品标题商品标题商品标题商品标题",startTimeDesc:"12.28 10:00",isSubscribe:0,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods1.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods2.png"}]},{liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/cover2.png",liveTitle:"商品标题商品标题商品标题商品标题",startTimeDesc:"12.28 10:00",isSubscribe:1,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-preview/goods4.png"}]}],n=[{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover1.png",viewNum:2,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods1.png"}]},{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover2.png",viewNum:27772,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods2.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods4.png"}]},{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover1.png",viewNum:2,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods1.png"}]},{liveTitle:"商品标题商品标题商品标题",liveCover:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/cover2.png",viewNum:27772,productList:[{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods2.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods3.png"},{coverImg:"https://staticontent.shop2cn.cn/shop2cn/h5demo/live-replay/goods4.png"}]}],a=[{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"},{pic:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png"}]},"8af3":function(t,e,s){"use strict";(function(t){var o=s("2909"),i=s("a8f5"),n=s("44c3");e["a"]={name:"LiveReplay",props:["part","isDev"],data:function(){return{dataLoading:!1,showPage:!0,partProps:{},dataList:[]}},watch:{part:{deep:!0,immediate:!0,handler:function(t){var e=t.partId||"";this.partProps=t.partProps||{},e&&(this.partId=e,this.getPartData())}}},methods:{getPartData:function(){var e=this;if(this.isDev)this.handleDevUpdate();else{var s=this.partId||"";s&&!this.dataLoading&&(this.dataLoading=!0,t.request({url:"/api/prod/shophomepartdata?PartId=".concat(s),data:{}}).then((function(t){e.$emit("loaddata",{partId:s,hasData:t&&t.list&&t.list.length>0}),e.dataLoading=!1;var o=t&&t.list||[];e.dataList=o,e.dataList.length||(e.showPage=!1)})).catch((function(){e.$emit("loaddata",{partId:s,hasData:!1}),e.dataLoading=!1,e.showPage=!1})))}},goLiveDetail:function(t){var e=t.liveId,s=t.liveType,o=t.roomId,n=t.broadcastType;Object(i["c"])(s,o,e,3,n)},handleDevUpdate:function(){this.dataList=Object(o["a"])(n["d"])}}}}).call(this,s("7189")["default"])},"90d2":function(t,e,s){},d4cb:function(t,e,s){"use strict";s("90d2")},fd08:function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t._self._c;return t.showPage?e("div",{staticClass:"live-replay-wrap"},[e("div",{staticClass:"common-title"},[e("div",{staticClass:"common-title__text",style:{color:t.partProps.titleColor||"#1A1D20"}},[t._v(" "+t._s(t.partProps.titleText||"")+" ")])]),e("div",{staticClass:"live-replay-list"},t._l(t.dataList,(function(s,o){return e("div",{key:o,staticClass:"live-replay-list__item",on:{click:function(e){return t.goLiveDetail(s)}}},[e("div",{staticClass:"live-replay-item"},[e("div",{staticClass:"live-replay-item__header"},[e("img",{staticClass:"live-replay-item__cover",attrs:{src:s.liveCover}}),e("div",{staticClass:"live-replay-tip"},[e("div",{staticClass:"live-replay-tip__button"},[t._v(t._s(t.$t("skins.playback")))])])]),e("div",{staticClass:"live-replay-item__content"},[e("div",{staticClass:"live-replay-item__title"},[t._v(t._s(s.liveTitle||""))]),t.partProps.productShow?e("div",{staticClass:"live-replay-products"},t._l(s.productList,(function(t,s){return e("div",{key:s,staticClass:"livereplay-products__cloak"},[e("img",{staticClass:"live-replay-products__item",attrs:{src:t.coverImg}}),e("div",{staticClass:"livereplay-products__singlecloak"})])})),0):t._e()])])])})),0)]):t._e()},i=[],n=s("8af3"),a=n["a"],c=(s("d4cb"),s("2877")),p=Object(c["a"])(a,o,i,!1,null,"1741f388",null);e["default"]=p.exports}}]);