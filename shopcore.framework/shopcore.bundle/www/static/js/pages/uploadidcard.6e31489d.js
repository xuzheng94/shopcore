(function(a){function t(t){for(var i,c,o=t[0],r=t[1],n=t[2],u=0,p=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i]);l&&l(t);while(p.length)p.shift()();return d.push.apply(d,n||[]),e()}function e(){for(var a,t=0;t<d.length;t++){for(var e=d[t],i=!0,o=1;o<e.length;o++){var r=e[o];0!==s[r]&&(i=!1)}i&&(d.splice(t--,1),a=c(c.s=e[0]))}return a}var i={},s={"pages/uploadidcard":0},d=[];function c(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=a,c.c=i,c.d=function(a,t,e){c.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},c.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},c.t=function(a,t){if(1&t&&(a=c(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var i in a)c.d(e,i,function(t){return a[t]}.bind(null,i));return e},c.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return c.d(t,"a",t),t},c.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},c.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var n=0;n<o.length;n++)t(o[n]);var l=r;d.push([127,"chunk-vendors","chunk-common"]),e()})({"033a":function(a,t,e){"use strict";e("67f0")},127:function(a,t,e){a.exports=e("9074")},"1a9c":function(a,t,e){a.exports=e.p+"static/img/upload_reverse_bg.f588fae0.png"},5532:function(a,t,e){a.exports=e.p+"static/img/upload_right_bg.4e511dc5.png"},"67f0":function(a,t,e){},9074:function(a,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d"),e("75fc");var i=e("56d7"),s=(e("99af"),e("b0c0"),function(){var a=this,t=a._self._c;return t("div",{staticClass:"container",style:a.pageThemeStyle},[a.failMessage?t("notice",{attrs:{noticeBarText:"".concat(a.$t("uploadidcard.cause_failure"),"：").concat(a.failMessage)}}):a._e(),t("div",{staticClass:"idcard-top"},[t("div",{staticClass:"panel_title"},[t("p",{staticClass:"title"},[a._v(a._s(a.$t("uploadidcard.name_consignee")))]),t("div",{staticClass:"notice-bar"},[t("img",{staticClass:"notice-bar-icon",attrs:{src:e("81b8")}}),t("span",{staticClass:"notice-bar-text"},[a._v(a._s(a.$t("uploadidcard.customs_policy")))])])]),t("div",{staticClass:"panel_body cells"},[t("div",{staticClass:"cell"},[t("div",{staticClass:"cell-name-input"},[t("span",{staticClass:"cell-label"},[a._v(a._s(a.$t("uploadidcard.please_fill_name")))]),t("div",{staticClass:"cell-input"},[a.canEditName?t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"name"}],attrs:{placeholder:a.$t("uploadidcard.real_name"),type:"text"},domProps:{value:a.name},on:{input:function(t){t.target.composing||(a.name=t.target.value)}}}),a.name.length>0?t("div",{staticClass:"text-clear",on:{click:a.clearName}}):a._e()]):t("span",{staticClass:"input-text"},[a._v(a._s(a.name))])])]),a.detailAddress?t("span",{staticClass:"cell-address"},[a._v(a._s(a.detailAddress))]):a._e()]),t("div",{staticClass:"cell"},[t("div",{staticClass:"cell-name-input"},[t("span",{staticClass:"cell-label"},[a._v(a._s(a.$t("uploadidcard.id_number")))]),t("div",{staticClass:"cell-input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.cardNo,expression:"cardNo"}],attrs:{type:"text",placeholder:a.$t("uploadidcard.please_id_number")},domProps:{value:a.cardNo},on:{input:function(t){t.target.composing||(a.cardNo=t.target.value)}}}),a.cardNo.length>0?t("div",{staticClass:"text-clear",on:{click:a.clearCardNo}}):a._e()])])])])]),t("div",{staticClass:"idcard-content"},[t("div",{staticClass:"panel_title"},[t("p",{staticClass:"title"},[a._v(a._s(a.$t("uploadidcard.id_card_photos")))]),t("p",{staticClass:"sub-title"},[a._v(a._s(a.$t("uploadidcard.landscape_image")))])]),t("div",{staticClass:"panel_body upload-wrap"},[t("div",{staticClass:"upload-content"},[t("div",{staticClass:"upload-card",on:{click:function(t){return a.chooseImage("rightSide")}}},[a.rightSide?t("div",{staticClass:"upload-card_uploaded"},[t("img",{staticClass:"idcard",attrs:{mode:"aspectFit",src:a.rightSide}}),t("div",{staticClass:"switch"},[a._v(a._s(a.$t("uploadidcard.click_picture")))])]):t("div",{staticClass:"upload-card_placeholder"},[t("img",{staticClass:"icon",attrs:{src:e("1a9c")}}),t("div",{staticClass:"upload-bg-placeholder"},[a._m(0),t("div",{staticClass:"text"},[a._v(a._s(a.$tc("uploadidcard.upload_id_card",1)))])])])]),t("div",{staticClass:"upload-card",on:{click:function(t){return a.chooseImage("reverseSide")}}},[a.reverseSide?t("div",{staticClass:"upload-card_uploaded"},[t("img",{staticClass:"idcard",attrs:{mode:"aspectFit",src:a.reverseSide}}),t("div",{staticClass:"switch"},[a._v(a._s(a.$t("uploadidcard.click_picture")))])]):t("div",{staticClass:"upload-card_placeholder"},[t("img",{staticClass:"icon",attrs:{src:e("5532")}}),t("div",{staticClass:"upload-bg-placeholder"},[a._m(1),t("div",{staticClass:"text"},[a._v(a._s(a.$tc("uploadidcard.upload_id_card",2)))])])])])]),t("div",{staticClass:"upload-tips"},[t("div",{staticClass:"upload-tips_title"},[a._v(a._s(a.$t("uploadidcard.ensure_id_card"))+"}：")]),t("img",{staticClass:"upload-tips_example",attrs:{src:a.$t("uploadidcard.img_example")}})])])]),t("div",{staticClass:"optBtn"},[t("van-button",{staticClass:"bottom-button",attrs:{round:"",type:"danger"},on:{click:function(t){return t.stopPropagation(),a.handleSave.apply(null,arguments)}}},[a._v(a._s(a.$t("common.save")))])],1)],1)}),d=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-id-iconfont"},[t("span",{staticClass:"iconfont icon-shangchuanshenfenzheng"})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"card-id-iconfont"},[t("span",{staticClass:"iconfont icon-shangchuanshenfenzheng"})])}],c=e("995e"),o=c["a"],r=(e("033a"),e("2877")),n=Object(r["a"])(o,s,d,!1,null,"6a948bfa",null),l=n.exports;e.p=publicPath,Object(i["a"])(l)},"995e":function(a,t,e){"use strict";(function(a,i){var s=e("5530"),d=(e("66b9"),e("b650")),c=(e("b0c0"),e("e9c4"),e("2ca0"),e("191e")),o=e("bcad"),r=e("b286"),n=e("ed08"),l=e("f901"),u=e("b68d"),p=e("a8f5");t["a"]={rightSideBase64:"",reverseSideBase64:"",isBackHome:!1,data:function(){return{isUpdate:!1,canEditName:!0,validData:{},addressId:"",orderId:"",name:"",cardNo:"",rightSide:"",reverseSide:"",detailAddress:"",failMessage:""}},mixins:[c["a"],o["a"],u["a"]],components:{"van-button":d["a"],notice:r["a"]},created:function(){var t=a.getQuery(),e=t.validData,i=t.name,s=t.addressId,d=void 0===s?"":s,c=t.orderId,o=void 0===c?"":c,r=t.isBackHome,n=t.detailAddress,l=t.addressee;this.isBackHome=!!r,i&&(this.name=decodeURIComponent(i),this.canEditName=!1),n&&(this.detailAddress=decodeURIComponent(n)),l&&(this.name=decodeURIComponent(l)),e&&(this.isUpdate=!0,this.validData=JSON.parse(e),this.getIdCardByName()),this.addressId=d,this.orderId=o,a.setNavigationBarTitle({title:this.$t("uploadidcard.upload_id")})},methods:{clearName:function(){this.name=""},clearCardNo:function(){this.cardNo=""},chooseImage:function(a){var t=this;n["a"].isSellerApp?i.command("choosePhoto").then((function(e){t[a]=t.getFullBase64(e.data),t["".concat(a,"Base64")]=t.getFullBase64(e.data)})):wx.chooseImage({count:1,sizeType:["original"],success:function(e){e.localIds[0]&&t.imageToBase64(e.localIds[0],a)}})},imageToBase64:function(a,t){var e=this;wx.getLocalImgData({localId:a,success:function(a){e[t]=e.getFullBase64(a.localData),e["".concat(t,"Base64")]=e.getFullBase64(a.localData)},fail:function(a){alert(JSON.stringify(a))}})},getFullBase64:function(a){return a.startsWith("data:image/")?a:"data:image/png;base64,".concat(a)},handleSave:function(){this.verifyData()&&(this.isUpdate?this.updateIdCard():this.addIdCard())},addIdCard:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i={forceUpload:e,addressId:this.addressId,cardNo:this.cardNo,name:this.name,reverseSide:this.reverseSideBase64,rightSide:this.rightSideBase64};this.orderId&&(i.orderId=this.orderId),a.showLoading({title:this.$t("uploadidcard.is_save")}),a.request({url:l["a"].addApi,data:i,method:"POST"}).then((function(e){if(0===e.state&&(a.hideLoading(),t.failMessage=e.message),1===e.state)if(t.isBackHome)a.hideLoading(),a.showModal({content:t.$t("uploadidcard.save_successfully",["！"]),showCancel:!1,confirmText:t.$t("uploadidcard.return_home"),success:function(){Object(p["b"])({linkType:999})}});else var i=setTimeout((function(){clearTimeout(i),a.hideLoading(),a.navigateBack({delta:1})}),1e3);2===e.state&&(a.hideLoading(),a.showModal({content:e.message,cancelText:t.$t("uploadidcard.change_information"),cancelColor:"#3CC51F",confirmText:t.$t("uploadidcard.continue_upload"),confirmColor:"#000",success:function(a){a.confirm&&t.addIdCard(!0)}}))})).catch((function(e){a.hideLoading(),a.showToast({title:e.message||e.msg||t.$t("uploadidcard.save_failed",["！"])})}))},updateIdCard:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=Object(s["a"])(Object(s["a"])({},this.validData),{},{forceUpload:e,addressId:this.addressId,cardNo:this.cardNo,name:this.name,reverseSide:this.reverseSideBase64||this.reverseSide,rightSide:this.rightSideBase64||this.rightSide});this.orderId&&(i.orderId=this.orderId),a.showLoading({title:this.$t("uploadidcard.is_save")}),a.request({url:l["a"].editApi,data:i,method:"POST"}).then((function(e){a.hideLoading(),0===e.state&&(t.failMessage=e.message),1===e.state&&a.navigateBack({delta:1}),2===e.state&&a.showModal({content:e.message,cancelText:t.$t("uploadidcard.change_information"),cancelColor:"#3CC51F",confirmText:t.$t("uploadidcard.continue_upload"),confirmColor:"#000",success:function(a){a.confirm&&t.updateIdCard(!0)}})})).catch((function(e){a.hideLoading(),a.showToast({title:e.message||e.msg||t.$t("uploadidcard.save_failed",["！"])})}))},getIdCardByName:function(){var t=this,e=Object(s["a"])(Object(s["a"])({},this.validData),{},{name:this.name});a.showLoading({title:this.$t("uploadidcard.get_details")}),a.request({url:l["a"].idCardDetApi,data:e}).then((function(e){for(var i in a.hideLoading(),e)t.res[i]=e.res[i]})).catch((function(){a.hideLoading()}))},verifyData:function(){return this.name?this.cardNo?this.rightSide?!!this.reverseSide||(a.showToast({title:this.$t("uploadidcard.please_national_emblem")}),!1):(a.showToast({title:this.$t("uploadidcard.please_profile_picture")}),!1):(a.showToast({title:this.$t("uploadidcard.please_id_card")}),!1):(a.showToast({title:this.$t("uploadidcard.please_name")}),!1)}}}}).call(this,e("7189")["default"],e("d16c")["default"])},f901:function(a,t,e){"use strict";t["a"]={idCardDetApi:"/api/usercenter/security/idcarddetail",editApi:"/api/usercenter/security/idcardu",addApi:"/api/usercenter/security/idcard"}}});