(function(t){function e(e){for(var n,i,s=e[0],r=e[1],l=e[2],m=0,d=[];m<s.length;m++)i=s[m],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var t,e=0;e<c.length;e++){for(var o=c[e],n=!0,s=1;s<o.length;s++){var r=o[s];0!==a[r]&&(n=!1)}n&&(c.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={"pages/contactus":0},c=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(){return Promise.resolve()},i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=r;c.push([35,"chunk-vendors","chunk-common"]),o()})({"0b73":function(t,e,o){},2151:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("56d7"),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-us"},[t.showPage?[e("div",{staticClass:"contact-form"},[e("van-field",{attrs:{readonly:"",clickable:"",label:t.$t("contactus.consultation_type"),value:t.typeValue,placeholder:t.$t("contactus.choose_consultation")},on:{click:t.clickCancelConsult}},[e("template",{slot:"right-icon"},[e("img",{staticClass:"right-icon-img",attrs:{src:o("64ca"),alt:""}})])],2),e("van-field",{staticClass:"region-phone",attrs:{center:"",clearable:"",label:t.$t("contactus.phone_number"),placeholder:t.$t("contactus.fill_number"),type:"number"},scopedSlots:t._u([{key:"button",fn:function(){return[e("div",{staticClass:"region",on:{click:t.showCountryDialog}},[e("div",{staticClass:"areaCode"},[t._v("+"+t._s(t.countryInfo.areaCode))]),e("img",{staticClass:"trip",attrs:{src:o("7338")}})])]},proxy:!0}],null,!1,3060779041),model:{value:t.contactForm.mobile,callback:function(e){t.$set(t.contactForm,"mobile",e)},expression:"contactForm.mobile"}}),e("van-field",{attrs:{maxLength:"6",clearable:"",label:t.$t("contactus.verification_code"),placeholder:t.$t("contactus.fill_code")},model:{value:t.contactForm.verifyCode,callback:function(e){t.$set(t.contactForm,"verifyCode",e)},expression:"contactForm.verifyCode"}},[e("template",{slot:"button"},[t.isSending?e("div",{staticClass:"action-sms action-sms--disabled"},[t._v(t._s(t.$t("contactus.re_acquire",[t.s])))]):e("TCaptcha",{attrs:{loading:t.loading,validate:t.validate},on:{handleSendSMS:t.handleSendSMS}},[e("div",{staticClass:"action-sms"},[t._v(t._s(t.$t("contactus.get_verification_code")))])])],1)],2),e("van-field",{attrs:{center:"",clearable:"",label:t.$t("contactus.mail"),placeholder:t.$t("contactus.will_email")},model:{value:t.contactForm.email,callback:function(e){t.$set(t.contactForm,"email",e)},expression:"contactForm.email"}}),1===t.contactForm.type?[e("van-field",{attrs:{center:"",clearable:"",label:t.$t("contactus.company_name"),placeholder:t.$t("contactus.fill_company_name")},model:{value:t.contactForm.companyName,callback:function(e){t.$set(t.contactForm,"companyName",e)},expression:"contactForm.companyName"}}),e("van-field",{attrs:{center:"",clearable:"",label:t.$t("contactus.industry_type"),placeholder:t.$t("contactus.fill_industry_type")},model:{value:t.contactForm.companyType,callback:function(e){t.$set(t.contactForm,"companyType",e)},expression:"contactForm.companyType"}}),e("van-field",{attrs:{rows:"3",autosize:"",clearable:"",maxlength:"100",label:t.$t("contactus.company_profile"),type:"textarea",placeholder:t.$t("contactus.fill_company_profile"),"show-word-limit":""},model:{value:t.contactForm.companyIntro,callback:function(e){t.$set(t.contactForm,"companyIntro",e)},expression:"contactForm.companyIntro"}})]:t._e(),2===t.contactForm.type?[e("van-field",{attrs:{center:"",clearable:"",label:t.$t("contactus.thing"),placeholder:t.$t("contactus.fill_thing")},model:{value:t.contactForm.reason,callback:function(e){t.$set(t.contactForm,"reason",e)},expression:"contactForm.reason"}}),e("van-field",{attrs:{rows:"3",autosize:"",clearable:"",maxlength:"100",label:t.$t("contactus.describe"),type:"textarea",placeholder:t.$t("contactus.fill_information"),"show-word-limit":""},model:{value:t.contactForm.desc,callback:function(e){t.$set(t.contactForm,"desc",e)},expression:"contactForm.desc"}})]:t._e()],2),e("div",{staticClass:"contact-bottom"},[e("div",{class:["button",{disabled:!t.isCheckButton}],on:{click:t.clickCommit}},[t._v(t._s(t.$t("common.submit")))])]),e("div",{staticClass:"tools-bar"})]:t.showPage?t._e():e("loading-line"),e("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showConsultType,callback:function(e){t.showConsultType=e},expression:"showConsultType"}},[e("van-picker",{attrs:{"show-toolbar":"",columns:t.consultTypeList},on:{confirm:t.cancelConsultTypeChange,cancel:function(e){t.showConsultType=!1}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v(" "+t._s(e.content)+" ")]}},{key:"confirm",fn:function(){return[e("div",{staticClass:"refund-reason-confirm"},[t._v(t._s(t.$t("common.confirm")))])]},proxy:!0},{key:"cancel",fn:function(){return[e("div",{staticClass:"refund-reason-cancel"},[t._v(t._s(t.$t("common.cancel")))])]},proxy:!0}])})],1),e("countryDialog",{attrs:{title:t.$t("contactus.select_code"),areaList:t.areaList,countryInfo:t.countryInfo},on:{selectCountry:t.selectCountry},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}})],2)},c=[],i=o("fa4e"),s=i["a"],r=(o("a556"),o("2877")),l=Object(r["a"])(s,a,c,!1,null,null,null),u=l.exports;o.p=publicPath,Object(n["a"])(u)},35:function(t,e,o){t.exports=o("2151")},"64ca":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAACVElEQVRIS6WUy2sTURTGzxnGSGoqg3RRRBcFddOFCAGxVEOYe4kEAlIkiM9VVyLiwoLgI3UluFK67Uq70oWQipmHc7Um6M4/wI0bF24CukgwnZkjd7gTprWTGfDuBu73m3PP952D8J8Hpd5xnLuI+CAMQ7dUKl1ZWFgY5uXGgF8AcFCJ3uq6fqFarfp5IBHAdd1XRHQxFiDihmma1xCRsiARwLKsA5qmvQeA0wnBGuf8Vi6AvNTpdA7pur5FRPMJ0SrnvDUJElUQH9u2DyNiFwDmEs+5zRh7ngbZAVCVHNN1/RMRzSpRiIg3GGMv94L8A5CXPM87GQTBBwAwlGgbEZcYY5u7IXsCVDYWZX8BYEqJhmEYnq/ValtJSCpAVVIPguANAOxTIpmXKuf867hHWTY5jnOZiF4goqbu/iwUCmcrlco3+T2xghjuuu5NIlpLOPMdERdN0/yRCyCFrus+JKLVRMVfOOdncgMcxzkFAJ8BYH/cD865kQvged68snVGiQkRlxlj65kA27aPI6K0LgqWGrA7jLFnmU20LGtO07SPAHA08fZ7nPMnmTYKIY74vi//nJyLx4yxR5lBEkLM+r4v/3wiYd1TxthKZpSFEDOyYbvGOnU37GiiEMLwfd8DAGlZdIhonXO+nLadxoButzs9GAwcRExupY1er3e91WqFaZGPAO12e6pYLL4jonOJN7/u9/uXms1mMGle0pbqpmEYS+VyeTtr2OK1/hsAplVQnNFo1KjX63+yxOMg2ba9omnafTkzw+HwaqPRGOQRZyYxD+Qvg7fbHQhMJ7AAAAAASUVORK5CYII="},a556:function(t,e,o){"use strict";o("0b73")},fa4e:function(t,e,o){"use strict";(function(t){o("8a58");var n=o("e41f"),a=(o("5f5f"),o("f253")),c=(o("be7f"),o("565f")),i=(o("38d5"),o("772a")),s=(o("ac1f"),o("5319"),o("00b4"),o("44e4")),r=o("0db1"),l=o("b0ab"),u=o("41c5"),m=o("e8bf");var d={smsApi:"/api/usercenter/sqsendverifycode",bindMobile:"/api/usercenter/bindmobile",sqsendverifycode:"/api/usercenter/sqsendverifycode",sqweblogin:"/api/usercenter/sqweblogin"};e["a"]={name:"index",data:function(){return{showPage:!1,typeValue:this.$t("contactus.business_cooperation"),showConsultType:!1,isSending:!1,loading:!1,s:60,isLogin:!1,consultTypeList:[{id:1,content:this.$t("contactus.business_cooperation")},{id:2,content:this.$t("contactus.other")}],contactForm:{type:1,mobile:"",verifyCode:"",email:"",companyIntro:"",companyName:"",companyType:"",reason:"",desc:"",mobileArea:"86"},showDialog:!1,areaList:[],countryInfo:{cnTitle:this.$t("contactus.china_mainland"),areaCode:"86"},isXhr:!1}},components:{TCaptcha:r["a"],loadingLine:s["a"],countryDialog:m["a"],"van-form":i["a"],"van-field":c["a"],"van-picker":a["a"],"van-popup":n["a"]},computed:{isCheckButton:function(){return 1===this.contactForm.type?!!(this.contactForm.mobile&&this.contactForm.verifyCode&&this.contactForm.email&&this.contactForm.companyIntro&&this.contactForm.companyName&&this.contactForm.companyType):!!(this.contactForm.mobile&&this.contactForm.verifyCode&&this.contactForm.email&&this.contactForm.reason&&this.contactForm.desc)}},created:function(){var e=this;setTimeout((function(){e.showPage=!0})),t.setNavigationBarTitle({title:this.$t("contactus.contact_us")})},methods:{cancelConsultTypeChange:function(t){this.typeValue=t.content,this.contactForm.type=t.id,this.showConsultType=!1},clickCancelConsult:function(){this.showConsultType=!0},validate:function(){return!!this.contactForm.mobile||(l["a"].showToast({title:this.$t("contactus.enter_phone_number")}),!1)},getMemberCodeTime:function(){var t=this,e=59;this.timer||(this.s=e,this.timer=setInterval((function(){t.s>0&&t.s<=e?t.s--:(t.s=59,t.isSending=!1,clearInterval(t.timer))}),1e3))},handleSendSMS:function(t){var e=this;if(!this.loading&&(this.loading=!0,this.validate())){this.isSending=!0,this.getMemberCodeTime();var o=this.isLogin?d.sqsendverifycode:d.smsApi;u["a"].request({url:o,method:"post",data:{mobile:this.contactForm.mobile,mobileAreaCode:this.countryInfo.areaCode,ticket:t.ticket,randstr:t.randstr,sourceType:t.sourceType}}).then((function(t){var o=t.existUser;e.loading=!1,e.isLogin&&(e.existUser=o,o&&(e.needInviteCode=!1)),e.isSending=!0,e.getMemberCodeTime()})).catch((function(t){e.loading=!1,l["a"].showToast({title:t.message||t.msg||e.$t("contactus.verification_again")})}))}},destroyed:function(){clearInterval(this.timer)},showCountryDialog:function(){var t=this;this.areaList&&this.areaList.length>0?this.showDialog=!0:(l["a"].showLoading({title:this.$t("common.loading",["..."])}),u["a"].request({url:"api/usercenter/arealist"}).then((function(e){t.areaList=e.countries,t.showDialog=!0,l["a"].hideLoading()})).catch((function(e){l["a"].hideLoading(),l["a"].showToast({title:e.message||e.msg||t.$t("contactus.national_list_failed")})})))},selectCountry:function(t){this.countryInfo=t,this.contactForm.mobileArea=t.areaCode||"86"},clickCommit:function(){if(this.isCheckButton){if(this.isXhr)return;this.commitContactForm()}},commitContactForm:function(){var e=this;t.showLoading({title:this.$t("common.loading",["..."])}),this.isXhr=!0,t.request({method:"post",url:"api/usercenter/sqfeedback",data:this.contactForm}).then((function(o){e.isXhr=!1,o&&(t.showToast({title:e.$t("contactus.submitted_successfully")}),t.navigateBack({delta:1}))})).catch((function(o){e.isXhr=!1,t.hideLoading(),t.showToast({title:o.msg||o.message||e.$t("contactus.submit_again")})}))}}}}).call(this,o("7189")["default"])}});