(function(e){function t(t){for(var i,a,o=t[0],c=t[1],u=t[2],g=0,f=[];g<o.length;g++)a=o[g],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={"pages/generalsettings":0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(){return Promise.resolve()},a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([48,"chunk-vendors","chunk-common"]),n()})({"264d":function(e,t,n){"use strict";n("2f0f")},"2d64":function(e,t,n){"use strict";(function(e){n("ac1f"),n("841c"),n("d3b7"),n("159b");var i=n("fe47"),r=n("ed08"),s=n("a8f5"),a=n("1adf");t["a"]={mixins:[a["a"]],name:"Index",data:function(){return{agreementList:[],settings:[{name:this.$t("generalsettings.switch_language"),value:"member_language",isShow:!1},{name:this.$t("generalsettings.debugging"),value:"debugging",isShow:!1}],versionInfo:""}},computed:{showGeneralSettings:function(){return e.store.showGeneralSettings}},created:function(){var e=r["a"].parseUrl(window.location.search,"lower");this.isDebug=1==e.isdebug},mounted:function(){e.setNavigationBarTitle({title:this.$t("generalsettings.general_setting")}),this.getLang(),this.getAgreementlist(),this.getAppVersionInfo()},methods:{getAgreementlist:function(){var t=this;e.request({url:"/api/social/agreementlist",data:{pageType:4,timestamp:(new Date).getTime()}}).then((function(e){e&&e.agreementList&&e.agreementList.length&&(t.agreementList=e.agreementList)}))},getLang:function(){var t=this;e.request({url:"/api/prod/sqlangchoose",method:"GET",data:{mchId:i["a"].getMchId()}}).then((function(e){e.data&&e.data.length>1&&t.settings.forEach((function(e){"member_language"==e.value&&(e.isShow=!0)}))}))},settingClickHandle:function(t){switch(t.value){case"member_language":e.navigateTo({url:"/pages/switchlanguage/main"});break;case"debugging":wx.scanCode();break;default:break}},checkAgreement:function(e){Object(s["b"])({linkType:51,linkVal:e.agreementId,linkText:e.agreementName})},getAppVersionInfo:function(){var t=this;e.isBuyerApp&&wx&&wx.getResInfo&&wx.getResInfo({success:function(e){var n="";wx&&wx.getSystemInfo&&wx.getSystemInfo().version&&(n="v".concat(wx.getSystemInfo().version)),e.resVersion&&(n+=".".concat(e.resVersion)),t.versionInfo=n}})}}}}).call(this,n("7189")["default"])},"2f0f":function(e,t,n){},48:function(e,t,n){e.exports=n("eef0")},eef0:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("56d7"),r=(n("b0c0"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"tools"},[e.agreementList&&e.agreementList.length?e._l(e.agreementList,(function(i){return t("div",{key:i.agreementId,staticClass:"tools-item",on:{click:function(t){return e.checkAgreement(i)}}},[t("div",{staticClass:"tools-item-title"},[e._v(e._s(i.agreementName))]),t("img",{attrs:{src:n("fc8f")}})])})):e._e(),e._l(e.settings,(function(i){return("debugging"===i.value?e.isDebug:i.isShow)?t("div",{key:i.value,staticClass:"tools-item",on:{click:function(t){return e.settingClickHandle(i)}}},[t("div",{staticClass:"tools-item-title"},[e._v(e._s(i.name))]),t("img",{attrs:{src:n("fc8f")}})]):e._e()})),e.versionInfo?t("div",{staticClass:"version__text"},[e._v(e._s(e.versionInfo))]):e._e()],2)}),s=[],a=n("2d64"),o=a["a"],c=(n("264d"),n("2877")),u=Object(c["a"])(o,r,s,!1,null,null,null),l=u.exports;n.p=publicPath,Object(i["a"])(l)}});