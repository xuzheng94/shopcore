(function(t){function e(e){for(var s,a,r=e[0],c=e[1],u=e[2],d=0,m=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&m.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=i[0]))}return t}var s={},n={"pages/substitutesignup":0},o=[];function a(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=t,a.c=s,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;o.push([123,"chunk-vendors","chunk-common"]),i()})({"01d9":function(t,e,i){},123:function(t,e,i){t.exports=i("970e")},"2e04":function(t,e,i){"use strict";(function(t,s){i("8a58");var n=i("e41f"),o=(i("be7f"),i("565f")),a=(i("38d5"),i("772a")),r=(i("ac1f"),i("841c"),i("0db1")),c=i("41c5"),u=(i("4846"),i("3941")),l=i("ed08"),d={smsApi:"/api/usercenter/sqsendverifycode",bindMobile:"/api/usercenter/bindmobile",sqsendverifycode:"/api/usercenter/sqsendverifycode",sqweblogin:"/api/usercenter/sqweblogin"};e["a"]={name:"index",data:function(){return{isSending:!1,loading:!1,s:60,isLogin:!1,isSuccessSignUp:!1,changeNumberForm:{mobile:"",verifyCode:"",mobileArea:"86"},showDialog:!1,areaList:[],countryInfo:{cnTitle:"中国大陆",areaCode:"86"},isXhr:!1,success:null,identityInfo:{}}},components:{TCaptcha:r["a"],countryDialog:u["a"],"van-form":a["a"],"van-field":o["a"],"van-popup":n["a"]},computed:{isCheckButton:function(){return!(!this.changeNumberForm.mobile||!this.changeNumberForm.verifyCode)}},mounted:function(){var e=l["a"].parseLocator(window.location.search,"lower");e.mobile&&(this.changeNumberForm.mobile=e.mobile),t.setNavigationBarTitle({title:this.$t("substitutesignup.user_registration")})},methods:{validate:function(){return!!this.changeNumberForm.mobile||(t.showToast({title:this.$t("substitutesignup.please_mobile")}),!1)},getMemberCodeTime:function(){var t=this,e=59;this.timer||(this.s=e,this.timer=setInterval((function(){t.s>0&&t.s<=e?t.s--:(t.s=59,t.isSending=!1,clearInterval(t.timer))}),1e3))},handleSendSMS:function(e){var i=this;if(!this.loading&&(this.loading=!0,this.validate())){this.isSending=!0,this.getMemberCodeTime();var s=this.isLogin?d.sqsendverifycode:d.smsApi;c["a"].request({url:s,method:"post",data:{mobile:this.changeNumberForm.mobile,mobileAreaCode:this.countryInfo.areaCode,ticket:e.ticket,randstr:e.randstr,sourceType:e.sourceType}}).then((function(t){var e=t.existUser;i.loading=!1,i.isLogin&&(i.existUser=e,e&&(i.needInviteCode=!1)),i.isSending=!0,i.getMemberCodeTime()})).catch((function(e){i.loading=!1,t.showToast({title:e.message||e.msg||i.$t("substitutesignup.error_sending")})}))}},showCountryDialog:function(){var e=this;this.areaList&&this.areaList.length>0?this.showDialog=!0:(t.showLoading({title:this.$t("common.loading",["..."])}),c["a"].request({url:"api/usercenter/arealist"}).then((function(i){e.areaList=i.countries,e.showDialog=!0,t.hideLoading()})).catch((function(i){t.hideLoading(),t.showToast({title:i.message||i.msg||e.$t("substitutesignup.failed_obtain")})})))},selectCountry:function(t){this.countryInfo=t,this.changeNumberForm.mobileArea=t.areaCode||"86"},getKey:function(t){return t.toUpperCase()},setValue:function(t,e){this.identityInfo[this.getKey(t)]=e},clickCommit:function(){var e=this;if(this.changeNumberForm.mobile)if(this.changeNumberForm.verifyCode){if(this.isCheckButton&&!this.isXhr){t.showLoading({title:$t("common.loading",["..."])}),this.isXhr=!0;var i=d.sqweblogin;c["a"].request({url:i,method:"post",data:{mobile:this.changeNumberForm.mobile,verifyCode:this.changeNumberForm.verifyCode,inviteCode:"",mobileAreaCode:this.countryInfo.areaCode}}).then((function(i){t.hideLoading(),e.isXhr=!1,i&&i.accessToken?e.isSuccessSignUp=!0:t.showToast({title:e.$t("substitutesignup.fail_register")})})).catch((function(i){e.isXhr=!1,t.hideLoading(),(i.message||i.msg)&&t.showToast({title:i.message||i.msg})}))}}else t.showToast({title:this.$t("substitutesignup.enter_code")});else t.showToast({title:this.$t("substitutesignup.please_mobile")})},goHelpPay:function(){s.command("windowBack")}}}}).call(this,i("7189")["default"],i("d16c")["default"])},3941:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("Popup",{staticClass:"countrydialog",attrs:{value:t.value,zIndex:9999,position:"bottom","close-on-click-overlay":!1},on:{input:t.input}},[e("div",{staticClass:"container"},[e("div",{staticClass:"container__title"},[e("span",{staticClass:"container__title__text"},[t._v(t._s(t.title))]),e("span",{staticClass:"container__title__close",on:{click:function(e){return e.stopPropagation(),t.input(!1)}}})]),e("div",{staticClass:"container__list"},t._l(t.areaList,(function(i,s){return e("div",{key:s,class:["container__list__item",{item__active:t.countryInfo.cnTitle==i.cnTitle&&t.countryInfo.areaCode==i.areaCode}],on:{click:function(e){return t.selectCountry(i)}}},[e("div",{staticClass:"item__name"},[t._v(t._s(i.cnTitle))]),e("div",{staticClass:"item__code"},[t._v(t._s(i.areaCode))])])})),0)])])},n=[],o=(i("8a58"),i("e41f")),a=i("5138"),r={components:{Popup:o["a"]},mixins:[a["a"]],props:{value:{type:Boolean},title:{type:String},areaList:{type:Array},countryInfo:{type:Object}},data:function(){return{countryList:[]}},mounted:function(){},computed:{},methods:{input:function(t){this.$emit("input",t)},selectCountry:function(t){this.$emit("selectCountry",t),this.$emit("input",!1)}}},c=r,u=(i("ea7f"),i("7192"),i("2877")),l=Object(u["a"])(c,s,n,!1,null,"09b0fc68",null);e["a"]=l.exports},"694d":function(t,e,i){},7192:function(t,e,i){"use strict";i("bf70")},"8d24":function(t,e,i){"use strict";i("01d9")},"970e":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("56d7"),n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"substitute-sign-up"},[t.isSuccessSignUp?[e("div",{staticClass:"sign-up-success-div"},[e("div",{staticClass:"sign-up-success"},[e("img",{staticClass:"image-suc",attrs:{src:i("abb5")}}),e("div",{staticClass:"success-div"},[e("div",[t._v(t._s(t.$t("substitutesignup.registered_successfully")))]),e("div",{staticClass:"desc"},[t._v(t._s(t.$t("substitutesignup.customer")))])]),e("div",{staticClass:"wrap_btns"},[e("div",{staticClass:"btn-common btn-one",on:{click:t.goHelpPay}},[t._v(t._s(t.$t("substitutesignup.return_valet_purchase")))])])])])]:[e("div",{staticClass:"prompt-message"},[e("div",{staticClass:"message-top"},[t._v(t._s(t.$t("substitutesignup.mobile_phone_number")))])]),e("div",{staticClass:"sign-up-form"},[e("van-field",{staticClass:"region-phone",attrs:{center:"",clearable:"",placeholder:t.$t("substitutesignup.please_mobile"),type:"number"},scopedSlots:t._u([{key:"button",fn:function(){return[e("div",{staticClass:"region",on:{click:t.showCountryDialog}},[e("div",{staticClass:"areaCode"},[t._v("+"+t._s(t.countryInfo.areaCode))]),e("img",{staticClass:"trip",attrs:{src:i("5800")}})])]},proxy:!0}],null,!1,955739468),model:{value:t.changeNumberForm.mobile,callback:function(e){t.$set(t.changeNumberForm,"mobile",e)},expression:"changeNumberForm.mobile"}}),e("van-field",{attrs:{maxLength:"6",clearable:"",label:t.$t("substitutesignup.verification_code"),placeholder:t.$t("substitutesignup.enter_code")},model:{value:t.changeNumberForm.verifyCode,callback:function(e){t.$set(t.changeNumberForm,"verifyCode",e)},expression:"changeNumberForm.verifyCode"}},[e("template",{slot:"button"},[t.isSending?e("div",{staticClass:"action-sms action-sms--disabled"},[t._v(t._s(t.$t("substitutesignup.second_again",[t.s])))]):e("TCaptcha",{attrs:{loading:t.loading,validate:t.validate},on:{handleSendSMS:t.handleSendSMS}},[e("div",{staticClass:"action-sms"},[t._v(t._s(t.$t("substitutesignup.obtain_verification_code")))])])],1)],2)],1),e("div",{staticClass:"sign-up-bottom"},[e("div",{class:["button",{disabled:!t.isCheckButton}],on:{click:t.clickCommit}},[t._v(t._s(t.$t("substitutesignup.register")))])])],e("countryDialog",{attrs:{title:t.$t("substitutesignup.select_international"),areaList:t.areaList,countryInfo:t.countryInfo},on:{selectCountry:t.selectCountry},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],2)},o=[],a=i("2e04"),r=a["a"],c=(i("8d24"),i("2877")),u=Object(c["a"])(r,n,o,!1,null,null,null),l=u.exports;i.p=publicPath,Object(s["a"])(l)},abb5:function(t,e,i){t.exports=i.p+"static/img/substitute_pay_success.1c86a6e6.png"},bf70:function(t,e,i){},ea7f:function(t,e,i){"use strict";i("694d")}});