(function(t){function s(s){for(var a,o,r=s[0],l=s[1],c=s[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(s);while(p.length)p.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,s=0;s<n.length;s++){for(var e=n[s],a=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(a=!1)}a&&(n.splice(s--,1),t=o(o.s=e[0]))}return t}var a={},i={"pages/refundapply":0},n=[];function o(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=a,o.d=function(t,s,e){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)o.d(e,a,function(s){return t[s]}.bind(null,a));return e},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=s,r=r.slice();for(var c=0;c<r.length;c++)s(r[c]);var d=l;n.push([107,"chunk-vendors","chunk-common"]),e()})({107:function(t,s,e){t.exports=e("c963")},"4a70":function(t,s,e){},5506:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAChElEQVRYR8WVz4sSYRjHv1NOEUFRhhM0tosFJWtY9hcEhaegYM9CrMJotOBFJEEE2Qi6q8QgnrzWvYN/gVAJEgRCOAdnzVMbGw2T8YhvDMP8bEd9TwPvM8/3M8+P73AA7mO1RwfwG8APAFMAv4xy3BoAjHrzJYQCgJ6xbgAGQ9X4ShCbAiCQQwDjTQJQC4abBFhUYdMAx74AeJ5Ho9G42+v1lG63+91pe5vN5p1+v38oy7LqEKf7AhgOh/l4PL6n6/qRLMv7kiR9NifneZ4bjUYvRVF8quv6sSRJu04QvgBUVX0diUQekqiu6z9lWX5hhFiKV0RRfMLAWq3Ws3w+P7Crgi+Acrl8vV6vvw2FQlfMEFbiiqK8i0ajB06t8gVAiSqVynatVmsZITqdzn46nX5s/HJFUd7HYrEDTdMWjhdIBVgSM8R8Pv/Dcdwpdu9V/ERWbIb4H/ETAVDPx+PxK0EQHjFxqkS73c5ls9lPXn+wvmeAElsNHBO02g63GUgt/4qeoK3EVVX9EA6H71lth1tSqkASQMgt0O7L2cCVSqUt83aYfcJKgwBuAzjvBWAwGOwlEom83cBZrOhRJpPZdbJtAtgCsDAWtzOZTN4IgvCA4uxWzQwhy3I2l8t9dPKBSwBibuJ0X61WtwuFwvPpdPollUq17UyGHLNYLBZms9m3ZDLZ1DTN0YjIQGgO/hmJF5igYqgFdDy3IShhlocBnAWw42cdgwJhAJRPBCAEldhrHiMAPd/yupJeBdzijAALr1n6whm3F4O6NwNQ3nMAbgJYC4QVAKvEjXW0ww6AIOjuGoDIKrfDCYC1mVb0KoDLqzArLwAMhJzyIoALyzkhsNMnrc5fZoMXd9/DxJ0AAAAASUVORK5CYII="},"56c1":function(t,s,e){"use strict";(function(t){var a,i=e("2769"),n=e.n(i),o=e("6cd4"),r=e.n(o),l=(e("e17f"),e("2241")),c=e("ade3"),d=(e("4662"),e("28a2")),u=(e("e930"),e("8f80")),p=(e("be7f"),e("565f")),f=(e("8fec"),e("7bd9")),g=(e("5f5f"),e("f253")),h=(e("8a58"),e("e41f")),v=(e("b0c0"),e("ac1f"),e("841c"),e("1276"),e("d3b7"),e("a434"),e("99af"),e("2ca0"),e("e9c4"),e("159b"),e("191e")),_=e("44e4"),m=e("b68d"),I=e("ed08"),C=e("1041"),y=e("b565"),A=e("64cf"),b=e("9eb6");s["a"]={name:"refundapply",mixins:[C["a"],y["a"],v["a"],m["a"]],components:(a={loadingLine:_["a"],"van-popup":h["a"],"van-picker":g["a"],"van-number-keyboard":f["a"],"van-field":p["a"],"van-uploader":u["a"]},Object(c["a"])(a,d["a"].Component.name,d["a"].Component),Object(c["a"])(a,"coupon-dialog",A["a"]),a),data:function(){return{isMiniAppWxConfig:!0,showWxChooseImage:t.isMiniApp||t.isWechat,isMiniApp:t.isMiniApp||!1,showPage:!1,prodList:[],isShowRefundReasonList:!1,refundReasonList:[],reasonInfo:{reasonContent:"",reasonId:""},isShowCargoStatusList:!1,cargoStatusList:[{cargoId:"1",content:this.$tc("refundapply.state_goods",1)},{cargoId:"2",content:this.$tc("refundapply.state_goods",2)}],cargoStatus:{cargoContent:"",cargoId:""},isFilleAmount:!1,isTotalRefundIntegral:!1,isShowCargoStatus:!1,refundMessage:"",picUrlList:[],picUrlListBase64:[],images:[],isShowImage:!1,PreviewIndex:1,orderId:"",catelogIds:[],pic:"",desc:"",skuInfo:"",isShowAddBtn:1,refundType:0,priceInfo:{},isXhr:!1,isShowDialog:!1,upLoadCount:1,isBuyerApp:b["a"].isBuyerApp}},computed:{isSubmitButton:function(){return this.isShowCargoStatus?!!this.cargoStatus.cargoId&&!!this.reasonInfo.reasonId&&!!this.refundMessage:!!this.reasonInfo.reasonId&&!!this.refundMessage}},mounted:function(){var t=this;this.isBuyerApp||wx.error((function(s){t.showWxChooseImage=!1}));var s=I["a"].parseLocator(window.location.search,"lower");this.refundType=s.refundtype||"",this.orderId=s.orderid||"",s.catelogids&&(this.catelogIds=s.catelogids.split(",")),this.refundApplyDetail()},created:function(){t.setNavigationBarTitle({title:this.$t("refundapply.apply_refund")})},methods:{getProductList:function(){return window._global&&window._global.pageInfo?Promise.resolve(window._global.pageInfo):t.request({url:"/api/ordercenter/sqcanrefundproductlist?orderId=".concat(this.orderId)})},getRefundReason:function(){var s=this;t.request({url:"/api/ordercenter/getrefundreason"}).then((function(t){console.log("res",t),s.isSend?s.refundReasonList=t.postDeliveryRefundReasons||[]:s.refundReasonList=t.beforeDeliveryRefundReasons||[]})).catch((function(e){t.showToast({title:e.message||e.msg||s.$t("refundapply.fail_get"),icon:"none"})}))},getTotalAmount:function(){var s=this,e={orderId:this.orderId,catalogIdList:this.catelogIds};t.request({method:"POST",url:"/api/ordercenter/sqcanrefundamount",data:e}).then((function(t){s.priceInfo=t||{},s.isFilleAmount=t&&t.totalFilleAmount&&t.totalFilleAmount>0,s.isTotalRefundIntegral=t&&t.totalRefundIntegral&&t.totalRefundIntegral>0})).catch((function(e){l["a"].alert({message:e.message||e.msg||s.$t("refundapply.sorry_refundable"),confirmButtonText:s.$t("refundapply.return_order_details")}).then((function(){t.isMiniApp&!t.isBuyerApp?wx.miniProgram.redirectTo({url:"/subPackage/pages/myOrderDetail/myOrderDetail?orderid=".concat(s.orderId)}):t.redirectTo({url:"/pages/myorderdetail/main?orderid=".concat(s.orderId)})}))}))},refundApplyDetail:function(){var s=this;this.getProductList().then((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s.showPage=!0,s.isShowAddBtn=t.partProductRefundInfoList&&1!=t.partProductRefundInfoList.length,s.isShowCargoStatus=3==t.orderStatus&&0==s.refundType,s.isSend=3==t.orderStatus,s.catelogIds.length&&(r()(s.catelogIds,(function(e){var a=n()(t.partProductRefundInfoList,{catalogId:e});a&&s.prodList.push(a)})),s.getTotalAmount(),s.getRefundReason())})).catch((function(e){s.showPage=!0,t.showToast({title:e.message||e.msg||s.$t("refundapply.fail_get"),icon:"none"})}))},cancelRefundReasonChange:function(t){this.isShowRefundReasonList=!1,this.reasonInfo.reasonContent=t.value||"",this.reasonInfo.reasonId=t.code||""},cancelCargoStatusChange:function(t){this.cargoStatus={cargoContent:t.content||"",cargoId:t.cargoId||""},this.isShowCargoStatusList=!1},deleteImg:function(t,s){s>=0&&this.picUrlList.splice(s,1)},toAddRefundProduct:function(){t.navigateTo({url:"/pages/refundaddproduct/main?refundType=".concat(this.refundType,"&orderId=").concat(this.orderId,"&catelogIds=").concat(this.catelogIds)})},uploadImg:function(s,e){var a=this;t.showLoading({title:this.$t("refundapply.cross",["……"])}),console.log("file",s);var i=new FormData;i.append("file",s),i.append("uploadType",8),t.request({method:"POST",url:"/api/usercenter/upload",data:i}).then((function(s){if(s.url){var i=s.url;a.payPicUrl=i,a.payPicUrlBase64=e,a.picUrlList.push(i),a.picUrlListBase64.push(e),t.hideLoading()}})).catch((function(s){t.hideLoading(),t.showToast({title:s.msg||s.message||a.$t("refundapply.failed_upload_picture")})}))},getFullBase64:function(t){return t.startsWith("data:image/")?t:"data:image/png;base64,".concat(t)},upLoadBase64:function(s,e,a){var i=this;t.request({method:"POST",url:"/api/usercenter/uploadbase64",data:s}).then((function(s){s&&s.url&&i.picUrlList.push(s.url),e===a-1&&t.hideLoading()})).catch((function(n){("ESOCKETTIMEDOUT"==n.msg||"ESOCKETTIMEDOUT"==n.message)&&i.upLoadCount<=3&&1==a?(i.upLoadCount++,setTimeout((function(){i.upLoadBase64(s,e,a)}),500)):(t.hideLoading(),t.showToast({title:n.msg||n.message||i.$t("refundapply.failed_upload_picture")}))}))},imageToBase64:function(s,e,a){var i=this;t.showLoading({title:i.$t("evaluateapply.uploading")}),wx.getLocalImgData({localId:s,success:function(t){var s=i.getFullBase64(t.localData),n={uploadType:8,file:s};i.upLoadBase64(n,e,a)},fail:function(s){t.hideLoading(),alert(JSON.stringify(s))}})},uploadImgMiniApp:function(){var s=this;this.picUrlList&&this.picUrlList.length>=6?t.showToast({title:this.$t("refundapply.number_images_limit")}):wx.chooseImage&&wx.chooseImage({count:6-this.picUrlList.length,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){var e=t.localIds||[];e&&e.length&&e.forEach((function(t,a){s.imageToBase64(t,a,e.length)}))},fail:function(t){alert(JSON.stringify(t))}})},beforeRead:function(s){return!(s.length&&s.length>6-this.picUrlList.length)||(t.showToast({title:this.$t("refundapply.number_images_limit")}),!1)},handleUpload:function(s){var e=this;this.picUrlList&&this.picUrlList.length>=6?t.showToast({title:this.$t("refundapply.number_images_limit")}):s&&s.length?s.forEach((function(t){e.uploadImg(t.file,t.content)})):this.uploadImg(s.file,s.content)},submitApplication:function(){var s=this;if(!this.isShowCargoStatus||this.cargoStatus.cargoId)if(this.reasonInfo.reasonId)if(this.refundMessage){if(!this.isXhr){this.isXhr=!0;var e={refundType:+this.refundType,orderId:this.orderId,remark:this.refundMessage,refundReasonCode:this.reasonInfo.reasonId,picUrls:this.picUrlList,catalogIdList:this.catelogIds};t.showLoading({title:this.$t("refundapply.submission")}),t.request({url:"/api/ordercenter/sqpartialrefund",method:"POST",data:e}).then((function(e){t.hideLoading(),s.isXhr=!1,e&&e.success&&(t.showToast({title:s.$t("refundapply.submit_successfully"),icon:"none"}),setTimeout((function(){t.isMiniApp?wx.miniProgram.navigateTo({url:"/subPackage/pages/refund/refund?orderId=".concat(s.orderId,"&catelogId=").concat(s.catelogIds[0])}):t.navigateTo({url:"/pages/refund/main?orderId=".concat(s.orderId,"&catelogId=").concat(s.catelogIds[0])})}),200))})).catch((function(e){t.hideLoading(),s.isXhr=!1,t.showToast({title:e.message||e.msg||s.$t("refundapply.submit_failure"),icon:"none"})}))}}else t.showToast({title:this.$t("refundapply.please_select_supplement")});else t.showToast({title:this.$t("refundapply.please_select_refund")});else t.showToast({title:this.$t("refundapply.please_select_status")})},clickPicImg:function(s,e){t.isMiniApp?wx.previewImage({current:this.picUrlList[e],urls:this.picUrlList}):(this.images=this.picUrlList,this.PreviewIndex=e,this.isShowImage=!0)},onChange:function(t){this.PreviewIndex=t},handleDialog:function(t){this.isShowDialog=t},showDialog:function(){this.isShowDialog=!0}}}}).call(this,e("7189")["default"])},"8ef1":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB+klEQVRIS7WWP4wMcRTHP9/fLrsKORKJXiF3c3esSiIhJ9HtLCpHqGjkEhQ6BaHQKTSXa6jIoSK7G40GIVFZTtZFRC8UjsKe250nM2s359zO7Ehmyvl9533en997b0TMY0dLW2i3SxDsAtuGNBLJzZZAX8G9JZ9v6GHj2yAzWu/ADu0YoVCsINuHlItzArMO6AWtVk1PPi2t1f4DsCOjk3R0BmlTrOG1h2Y/ydktPVpcWH30F8D80Slw0wiXynhPbAQouKfq4tPeqz6g67mbGWjcbAXTffJAx6aRNqzrRAjJBbO9SCJAlPNi4WpsWozXqjXnIr3vnUXsGRhlmK7OymU9/vi9C/C9k4gDsWkJeKV683akL3unceyNLz7PVGveVfcqLl9PvC2pAdYhX7gk8yemUHAisahpAVGowbys4p0DJjIBwDuZP3YNaXsmALPPYQQ3gWI2AFrZAggBmafI984jxodI0QfVmzf+9MFFHDsTv4mKXB4/iLPjQ4ghsEakcyoNpTc3LytPbkXtsNH+b8ANIoVjPGy0KOTD3imM/Qmt/4NfLrxxsDG4gNicMFqeq968M/yww96o+n42cqgyNgPaHTvsWstXwgWUblw7HkRGA46lGtf9fZHlwulDslyZfUjapW96yXKrOtTSX1242N8W6QvmFpJ+W34DRfMSbzpazZYAAAAASUVORK5CYII="},c963:function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("56d7"),i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"refund-apply",style:t.pageThemeStyle},[t.showPage?[t.priceInfo.spendBackCouponsTips?s("div",{staticClass:"is-seven-days-reason"},[s("img",{staticClass:"warning-icon",attrs:{src:e("8ef1")}}),s("div",{staticClass:"text"},[t._v(t._s(t.priceInfo.spendBackCouponsTips))])]):t._e(),t.prodList.length?s("div",{staticClass:"refund-info"},[s("div",{staticClass:"info-product"},t._l(t.prodList,(function(e){return s("div",{key:e.catalogId,staticClass:"product-info"},[s("div",{staticClass:"product-img"},[s("img",{attrs:{src:e.picUrl,alt:""}}),s("div",{staticClass:"img-gray"})]),s("div",{staticClass:"product-desc"},[s("div",{staticClass:"product-name van-multi-ellipsis--l2"},[t._v(t._s(e.productTitle))]),s("div",{staticClass:"product-sku van-ellipsis"},[t._v(t._s(e.propertyInfo))])])])})),0),t.isShowAddBtn?s("div",{staticClass:"add-product",on:{click:t.toAddRefundProduct}},[s("div",{staticClass:"add-product-btn"},[t._v(t._s(t.$t("refundapply.add_other_items")))])]):t._e()]):t._e(),s("div",{staticClass:"refund-cargo-reason"},[t.isShowCargoStatus?s("div",{staticClass:"refund-reason cargo-status"},[s("div",{staticClass:"reason-left"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.$t("refundapply.state_of_goods")))]),s("div",{staticClass:"span"},[t._v("*")])])]),s("div",{staticClass:"reason-right",on:{click:function(s){t.isShowCargoStatusList=!0}}},[s("div",{staticClass:"text"},[t.cargoStatus.cargoContent?s("span",{staticClass:"reason-content"},[t._v(t._s(t.cargoStatus.cargoContent))]):s("span",[t._v(t._s(t.$t("refundapply.click_select_status")))])]),s("img",{staticClass:"img-right-icon",attrs:{src:e("fc39"),alt:""}})])]):t._e(),s("div",{staticClass:"refund-reason"},[s("div",{staticClass:"reason-left"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.$t("refundapply.refund_reason")))]),s("div",{staticClass:"span"},[t._v("*")])])]),s("div",{staticClass:"reason-right",on:{click:function(s){t.isShowRefundReasonList=!0}}},[s("div",{staticClass:"text"},[t.reasonInfo.reasonContent?s("span",{staticClass:"reason-content"},[t._v(t._s(t.reasonInfo.reasonContent))]):s("span",[t._v(t._s(t.$t("refundapply.click_select_reason")))])]),s("img",{staticClass:"img-right-icon",attrs:{src:e("fc39"),alt:""}})])])]),s("div",{staticClass:"refund-price"},[s("div",{staticClass:"price-info"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.$t("refundapply.refund_amount")))]),s("div",{staticClass:"span"},[t._v("*")])]),s("div",{staticClass:"price-dev"},[s("div",{staticClass:"price-left"},[t.isJPY(t.priceInfo.symbol)?t._e():s("span",{staticClass:"symbol"},[t._v(t._s(t.priceInfo.symbol||"¥"))]),s("span",{staticClass:"price"},[t._v(t._s(t.getIntPrice(t.priceInfo.totalAmount)||0)),t.getLittlePrice(t.priceInfo.totalAmount)?s("span",[t._v("."+t._s(t.getLittlePrice(t.priceInfo.totalAmount)))]):t._e()]),t.isJPY(t.priceInfo.symbol)?s("span",{staticClass:"symbol"},[t._v(t._s(t.priceInfo.symbol))]):t._e()])])]),s("div",{staticClass:"price-msg"},[s("div",{staticClass:"price__info"},[s("div",{staticClass:"info_box"},[s("span",[t._v(t._s(t.$t("refundapply.should_refund")))]),t.isJPY(t.priceInfo.symbol)?t._e():s("span",[t._v(t._s(t.priceInfo.symbol||"¥"))]),s("span",[t._v(t._s(t.priceInfo.refundableTotalAmount||0))]),t.isJPY(t.priceInfo.symbol)?s("span",[t._v(t._s(t.priceInfo.symbol))]):t._e()]),s("div",{staticClass:"info_box"},[s("span",[t._v("，"+t._s(t.$t("refundapply.actual_refund")))]),t.isJPY(t.priceInfo.symbol)?t._e():s("span",[t._v(t._s(t.priceInfo.symbol||"¥"))]),s("span",[t._v(t._s(t.priceInfo.totalAmount||0))]),t.isJPY(t.priceInfo.symbol)?s("span",[t._v(t._s(t.priceInfo.symbol))]):t._e()]),t.priceInfo.totalFreightAmount?s("div",{staticClass:"info_box"},[s("span",[t._v(t._s(t.$t("refundapply.including_shipping_postage")))]),t.isJPY(t.priceInfo.symbol)?t._e():s("span",[t._v(t._s(t.priceInfo.symbol||"¥"))]),s("span",[t._v(t._s(t.priceInfo.totalFreightAmount))]),t.isJPY(t.priceInfo.symbol)?s("span",[t._v(t._s(t.priceInfo.symbol))]):t._e()]):t._e()]),t.priceInfo.totalRefundIntegral?s("div",{staticClass:"integral-detail"},[s("div",{staticClass:"integral__text"},[t._v(t._s(t.$t("refund.refund_integral_label"))+"："+t._s(t.priceInfo.totalRefundIntegral||0))]),t.priceInfo.extralDeductBonusIntegralDesc3?s("div",{staticClass:"detail__text",on:{click:t.showDialog}},[t._v(t._s(t.$t("refund.view_details")))]):t._e()]):t._e(),t.priceInfo.totalFilleAmount?s("div",{staticClass:"integral__other"},[s("span",[t._v(t._s(t.$t("refundapply.integral_other_tip1")))]),s("span",[t._v(t._s(t.priceInfo.totalIntegralAvailable||0))]),s("span",[t._v(t._s(t.$t("refundapply.integral_other_tip2")))]),s("span",[t._v(t._s(t.priceInfo.totalFilleAmount||0))]),s("span",[t._v("，"+t._s(t.$t("refundapply.integral_other_tip4")))]),t.isJPY(t.priceInfo.symbol)?t._e():s("span",[t._v(t._s(t.priceInfo.symbol||"¥"))]),s("span",[t._v(t._s(t.priceInfo.totalOrderCurrencyFilleAmount))]),t.isJPY(t.priceInfo.symbol)?s("span",[t._v(t._s(t.priceInfo.symbol))]):t._e()]):t._e(),t.priceInfo.deductBonusIntegral?s("div",{staticClass:"other__tip"},[t._v(t._s(t.$t("refundapply.integral_other_tip3")))]):t._e()])]),s("div",{staticClass:"refund-instructions"},[s("div",{staticClass:"title-div"},[s("div",{staticClass:"title"},[s("div",[t._v(t._s(t.$t("refundapply.supplementary_instruction")))]),s("div",{staticClass:"span"},[t._v("*")])]),t._e()]),s("div",{staticClass:"instructions-info"},[s("div",{staticClass:"refund-message"},[s("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"200",placeholder:t.$t("refundapply.after_sales_problem"),"show-word-limit":""},model:{value:t.refundMessage,callback:function(s){t.refundMessage=s},expression:"refundMessage"}})],1),s("div",{staticClass:"upload-img"},[t._l(t.picUrlList,(function(a,i){return s("div",{key:i,staticClass:"img-list"},[s("img",{staticClass:"img",attrs:{src:a,alt:""},on:{click:function(s){return t.clickPicImg(a,i)}}}),s("img",{staticClass:"delete-img",attrs:{src:e("5506"),alt:""},on:{click:function(s){return t.deleteImg(a,i)}}})])})),t.showWxChooseImage?s("div",{staticClass:"img-list upload-icon"},[s("img",{staticClass:"img",attrs:{src:t.$t("refundapply.img_upload_icon"),alt:""},on:{click:t.uploadImgMiniApp}})]):s("div",{staticClass:"img-list upload-icon"},[s("van-uploader",{staticClass:"upload__btn",attrs:{multiple:"","max-count":6,"before-read":t.beforeRead,"after-read":t.handleUpload}},[s("img",{staticClass:"img",attrs:{src:t.$t("refundapply.img_upload_icon"),alt:""}})])],1)],2)])]),s("div",{staticClass:"submit-application"},[s("div",{class:["submit-button",{"no-submit-button":!t.isSubmitButton}],on:{click:t.submitApplication}},[t._v(t._s(t.$t("refundapply.submit_applications")))])]),s("div",{staticClass:"tools-bar"}),s("div",{staticClass:"refund-reason-popup"},[s("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.isShowRefundReasonList,callback:function(s){t.isShowRefundReasonList=s},expression:"isShowRefundReasonList"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.refundReasonList},on:{confirm:t.cancelRefundReasonChange,cancel:function(s){t.isShowRefundReasonList=!1}},scopedSlots:t._u([{key:"option",fn:function(s){return[t._v(" "+t._s(s.value)+" ")]}},{key:"confirm",fn:function(){return[s("div",{staticClass:"refund-reason-confirm"},[t._v(t._s(t.$t("common.confirm")))])]},proxy:!0},{key:"cancel",fn:function(){return[s("div",{staticClass:"refund-reason-cancel"},[t._v(t._s(t.$t("common.cancel")))])]},proxy:!0}],null,!1,1074089614)})],1)],1),s("div",{staticClass:"refund-reason-popup"},[s("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.isShowCargoStatusList,callback:function(s){t.isShowCargoStatusList=s},expression:"isShowCargoStatusList"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.cargoStatusList},on:{confirm:t.cancelCargoStatusChange,cancel:function(s){t.isShowCargoStatusList=!1}},scopedSlots:t._u([{key:"option",fn:function(s){return[t._v(" "+t._s(s.content)+" ")]}},{key:"confirm",fn:function(){return[s("div",{staticClass:"refund-reason-confirm"},[t._v(t._s(t.$t("common.confirm")))])]},proxy:!0},{key:"cancel",fn:function(){return[s("div",{staticClass:"refund-reason-cancel"},[t._v(t._s(t.$t("common.cancel")))])]},proxy:!0}],null,!1,2166354860)})],1)],1),s("div",{staticClass:"image-preview"},[s("van-image-preview",{attrs:{images:t.images,"start-position":t.PreviewIndex,closeable:!0},on:{change:t.onChange},model:{value:t.isShowImage,callback:function(s){t.isShowImage=s},expression:"isShowImage"}})],1),s("coupon-dialog",{attrs:{show:t.isShowDialog,title:t.$t("refundapply.detail_integral"),"score-style":"scoreStyle"},on:{input:t.handleDialog}},[s("div",{staticClass:"refund-apply-dialog"},[s("div",{staticClass:"total-integral"},[s("div",{staticClass:"total__num"},[t._v(t._s(t.priceInfo.totalRefundIntegral))]),s("div",{staticClass:"total__text"},[t._v(t._s(t.$t("refund.refund_integral_label")))])]),s("div",{staticClass:"integral-container"},[s("div",{staticClass:"box__triangle"}),s("div",{staticClass:"integral-detail"},[s("div",{staticClass:"integral-box"},[s("div",{staticClass:"info__bg"},[s("div",{staticClass:"integral__num"},[t._v(t._s(t.priceInfo.deductBonusIntegral))]),s("div",{staticClass:"integral__text"},[t._v(t._s(t.$t("refund.refund_integral_text1")))])])]),s("div",{staticClass:"icon"},[t._v("＋")]),s("div",{staticClass:"integral-box integral-box--right"},[s("div",{staticClass:"info__bg"},[s("div",{staticClass:"integral__num"},[t._v(t._s(t.priceInfo.extralDeductBonusIntegral))]),s("div",{staticClass:"integral__text"},[t._v(t._s(t.$t("refund.refund_integral_text2")))])]),s("div",{staticClass:"other-integral"},[s("div",{staticClass:"other__text",domProps:{innerHTML:t._s(t.priceInfo.extralDeductBonusIntegralDesc3)}})])])])]),s("div",{staticClass:"spec-confirm",on:{click:function(s){return t.handleDialog(!1)}}},[s("div",{staticClass:"full"},[t._v(t._s(t.$t("common.confirm")))])])])])]:t.showPage?t._e():s("loading-line")],2)},n=[],o=e("56c1"),r=o["a"],l=(e("ccc0"),e("2877")),c=Object(l["a"])(r,i,n,!1,null,null,null),d=c.exports;e.p=publicPath,Object(a["a"])(d)},ccc0:function(t,s,e){"use strict";e("4a70")}});