(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["one-img-text","space"],{"120f":function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-wrap"},[t.showSpaceTop?e("space",{attrs:{isDev:t.isDev,isActive:t.isActive,position:"top",spaceSize:t.partProps.spaceTop,pageStyleMode:t.pageStyleMode,spaceType:t.spaceType}}):t._e(),t._t("default"),e("space",{attrs:{isDev:t.isDev,isActive:t.isActive,position:"bottom",spaceSize:t.partProps.spaceBottom,pageStyleMode:t.pageStyleMode,spaceType:t.spaceType}})],2)},i=[],o=(a("a9e3"),a("eca1")),r={components:{space:o["default"]},props:{partProps:{type:Object},showSpaceTop:{type:Boolean,default:!0},spaceType:{type:String,default:"large"},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},pageStyleMode:{type:Number,default:1}}},p=r,c=(a("eeef"),a("2877")),n=Object(c["a"])(p,s,i,!1,null,"540e39ed",null);e["a"]=n.exports},"18b0":function(t,e,a){"use strict";a("77a6")},"1ca6":function(t,e,a){"use strict";(function(t){var s=a("5530"),i=(a("a9e3"),a("f354")),o=a("a8f5"),r=a("ef16");function p(t){return t/32}e["a"]={name:"one-img-text",props:{pageData:{type:Object},part:{type:Object},parts:{type:Array},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},pageStyleMode:{type:Number}},mixins:[i["a"]],components:{innerWrap:r["a"]},data:function(){return{picUrl:"",dataList:[],imgStyle:{},partProps:{}}},watch:{part:"getPartData"},computed:{hotAreasWidth:function(){var t=750;return p(t)}},mounted:function(){this.getPartData()},methods:{getPartData:function(){var e=this;this.getDatas((function(a){e.picUrl=a&&a.list[0]&&a.list[0].picUrl||"",e.dataList=a&&a.list||[],e.picUrl&&t.$eventbus.emit("showactivity:wxshare",e.picUrl),e.picUrl||a.list&&a.list.left||(e.dataList=[{picUrl:""}]);var i=Object(s["a"])({},e.part.partProps),o=i.innerAngle,r=i.innerAngleDegree;"round"===o&&"number"===typeof r?e.imgStyle.borderRadius="".concat(t.toRem(r),"rem"):"right"===o&&(e.imgStyle.borderRadius=0);var p=i.hasOwnProperty("spaceLeft"),c=i.hasOwnProperty("spaceRight");(!p&&!c||0==i.spaceLeft&&0==i.spaceRight)&&(i.spaceLeft=0,i.spaceRight=0),i.spaceTop||"number"===typeof i.spaceTop||(i.spaceTop=0),i.spaceBottom||"number"===typeof i.spaceBottom||(i.spaceBottom=0),e.partProps=Object(s["a"])({},i)}))},handleClick:function(t){Object(o["b"])(t,this.ylogParams)}}}}).call(this,a("7189")["default"])},2532:function(t,e,a){"use strict";var s=a("23e7"),i=a("e330"),o=a("5a34"),r=a("1d80"),p=a("577e"),c=a("ab13"),n=i("".indexOf);s({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~n(p(r(this)),p(o(t)),arguments.length>1?arguments[1]:void 0)}})},"2bde":function(t,e,a){"use strict";a("9528")},"3c9b":function(t,e,a){"use strict";(function(t){var s=a("5530"),i=(a("a9e3"),a("120f"));e["a"]={components:{baseWrap:i["a"]},props:{partProps:{type:Object},spaceType:{type:String,default:"large"},pageStyleMode:{type:Number,default:1},showSpaceTop:{type:Boolean,default:!0},showBg:{type:Boolean},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},hideSpace:{type:Boolean}},data:function(){return{props:{},spaceStyle:{}}},computed:{innerStyle:function(){var t={};return this.spaceStyle&&(t=Object(s["a"])(Object(s["a"])({},t),this.spaceStyle)),this.showBg&&(t=Object(s["a"])(Object(s["a"])({},t),this.cardBgStyle(this.props))),t}},watch:{partProps:{immediate:!0,handler:function(e){if(e){var a=Object(s["a"])({},e),i={};if(this.hideSpace)a.spaceLeft=0,a.spaceRight=0;else{var o=t.skinManager.getHomeDefalutMargin()||24;"number"!==typeof a.spaceLeft&&(a.spaceLeft=o),"number"!==typeof a.spaceRight&&(a.spaceRight=o)}"number"===typeof a.spaceLeft&&(i={paddingLeft:"".concat(t.toRem(a.spaceLeft),"rem")}),"number"===typeof a.spaceRight&&(i=Object(s["a"])(Object(s["a"])({},i),{},{paddingRight:"".concat(t.toRem(a.spaceRight),"rem")})),this.props=a,this.spaceStyle=i}},deep:!0}},methods:{cardBgStyle:function(){var t={};return this.partProps&&!this.partProps.hideModuleColor&&(t.backgroundColor=this.partProps.moduleColor||"white"),t}}}}).call(this,a("7189")["default"])},"5c03":function(t,e,a){},"64d2":function(t,e,a){},"77a6":function(t,e,a){},9528:function(t,e,a){},9587:function(t,e,a){"use strict";a("5c03")},e49e:function(t,e,a){"use strict";(function(t){a("a9e3");var s=[{small:{top:0,bottom:24},middle:{top:0,bottom:0},large:{top:0,bottom:0}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}},{small:{top:0,bottom:24},middle:{top:0,bottom:24},large:{top:0,bottom:24}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}}];e["a"]={props:{pageStyleMode:{type:Number,value:1},position:{type:String,default:"top"},spaceType:{type:String,default:"large"},spaceSize:{type:[Number,String],default:""},offset:{type:Number,default:0},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{heightCalc:function(){var e=0;if("number"===typeof this.spaceSize)e=this.spaceSize;else{var a=s[(this.pageStyleMode||1)-1];e=a[this.spaceType||"large"][this.position||"top"]||0}return this.aaa=e-this.offset,"".concat(t.toRem(e-this.offset),"rem")}}}}).call(this,a("7189")["default"])},eca1:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{class:["container",{"container--dev":t.isDev&&t.isActive}],style:{height:t.heightCalc}})},i=[],o=a("e49e"),r=o["a"],p=(a("2bde"),a("2877")),c=Object(p["a"])(r,s,i,!1,null,"5235f330",null);e["default"]=c.exports},eeef:function(t,e,a){"use strict";a("64d2")},ef16:function(t,e,a){"use strict";var s=function(){var t=this,e=t._self._c;return e("base-wrap",{attrs:{partProps:t.props,spaceType:t.spaceType,showSpaceTop:t.showSpaceTop,pageStyleMode:t.pageStyleMode,isDev:t.isDev,isActive:t.isActive}},[e("div",{staticClass:"wrap",style:t.innerStyle},[t._t("default")],2)])},i=[],o=a("3c9b"),r=o["a"],p=(a("9587"),a("2877")),c=Object(p["a"])(r,s,i,!1,null,"82a34ad8",null);e["a"]=c.exports},f354:function(t,e,a){"use strict";(function(t){var s=a("5530"),i=(a("caad"),a("2532"),a("d3b7"),a("b00c")),o=function(){},r={props:{isDev:{type:Boolean,default:!1},pageData:{type:Object,default:function(){return{}}},ylogParams:{type:Object,default:function(){return{}}}},methods:{getLinkData:function(t){var e=this.pageData&&this.pageData.tempCode||"";return[i["c"].BRAND_SUBJECT,i["c"].INBUY_SUBJECT].includes(e)&&(t.partId=this.part.partId||"",i["c"].BRAND_SUBJECT===e&&(t.brandId=this.pageData.brandId||""),i["c"].INBUY_SUBJECT===e&&(t.activityId=this.activityId||"",t.activityType=this.activityType||"")),t},fetchPartData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,i=a.partId,o=a.dataItems,r=a.partProps;return this.isDev?Promise.resolve({list:o||[],partProps:r}):i?t.request({url:"/api/prod/shophomepartdata",method:"get",params:Object(s["a"])(Object(s["a"])({},e),{},{PartId:i})}):Promise.reject({message:"partId 不存在"})},fetchPartCenterData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,i=a.dataItems,o=a.partProps;return this.isDev?Promise.resolve({list:i||[],partProps:o}):t.request({url:"/api/prod/shopcouponcentercouponlist",method:"get",params:Object(s["a"])({},e)})},getDatas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,s=this.part,i=s.partId,r=s.dataItems,p=s.partProps;this.isDev?e({list:r||[],partProps:p}):i?t.request({url:"/api/prod/shophomepartdata?PartId=".concat(i),method:"get"}).then((function(t){e(t||{})})).catch((function(t){a(t)})):a({message:"partId 不存在"})}}};e["a"]=r}).call(this,a("7189")["default"])},f8d4:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"parent-container",attrs:{id:"one-img-text"}},[e("inner-wrap",{attrs:{partProps:t.partProps,pageStyleMode:t.pageStyleMode,isDev:t.isDev,isActive:t.isActive}},[e("div",{staticClass:"wrap"},t._l(t.dataList,(function(a,s){return e("div",{key:s,staticClass:"wrap-type"},[a.picUrl?[e("img",{staticClass:"image",style:t.imgStyle,attrs:{src:a.picUrl}})]:[e("div",{staticClass:"special-img-dev",style:t.imgStyle},[e("div",{staticClass:"image-demo",style:t.imgStyle})])],a.hotAreas&&a.hotAreas.length>0?e("div",{staticClass:"areas",style:{width:"".concat(t.hotAreasWidth,"rem")}},[t._l(a.hotAreas,(function(a,s){return[e("div",{key:s,staticClass:"areas__item",style:{top:"".concat(a.areaY*t.hotAreasWidth,"rem"),left:"".concat(a.areaX*t.hotAreasWidth,"rem"),width:"".concat(a.areaWidth*t.hotAreasWidth,"rem"),height:"".concat(a.areaHeight*t.hotAreasWidth,"rem")},on:{click:function(e){return t.handleClick(a)}}})]}))],2):t._e()],2)})),0)])],1)},i=[],o=a("1ca6"),r=o["a"],p=(a("18b0"),a("2877")),c=Object(p["a"])(r,s,i,!1,null,"6ce268a1",null);e["default"]=c.exports}}]);