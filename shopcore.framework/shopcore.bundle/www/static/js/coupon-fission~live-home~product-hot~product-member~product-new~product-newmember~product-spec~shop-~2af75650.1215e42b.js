(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["coupon-fission~live-home~product-hot~product-member~product-new~product-newmember~product-spec~shop-~2af75650","space"],{"120f":function(e,t,a){"use strict";var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"base-wrap"},[e.showSpaceTop?t("space",{attrs:{isDev:e.isDev,isActive:e.isActive,position:"top",spaceSize:e.partProps.spaceTop,pageStyleMode:e.pageStyleMode,spaceType:e.spaceType}}):e._e(),e._t("default"),t("space",{attrs:{isDev:e.isDev,isActive:e.isActive,position:"bottom",spaceSize:e.partProps.spaceBottom,pageStyleMode:e.pageStyleMode,spaceType:e.spaceType}})],2)},i=[],r=(a("a9e3"),a("eca1")),l={components:{space:r["default"]},props:{partProps:{type:Object},showSpaceTop:{type:Boolean,default:!0},spaceType:{type:String,default:"large"},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},pageStyleMode:{type:Number,default:1}}},s=l,n=(a("eeef"),a("2877")),p=Object(n["a"])(s,o,i,!1,null,"540e39ed",null);t["a"]=p.exports},2532:function(e,t,a){"use strict";var o=a("23e7"),i=a("e330"),r=a("5a34"),l=a("1d80"),s=a("577e"),n=a("ab13"),p=i("".indexOf);o({target:"String",proto:!0,forced:!n("includes")},{includes:function(e){return!!~p(s(l(this)),s(r(e)),arguments.length>1?arguments[1]:void 0)}})},"27b2":function(e,t,a){},"2bde":function(e,t,a){"use strict";a("9528")},"64d2":function(e,t,a){},"751d":function(e,t,a){"use strict";var o=function(){var e=this,t=e._self._c;return t("div",{class:["title",{"title-center":e.titleCenter}],style:{color:e.color},on:{click:e.goList}},[t("span",{staticClass:"title-txt"},[e._v(e._s(e.title))]),e.hasMore?t("div",{staticClass:"more__list"},[t("span",[e._v("MORE")]),t("van-icon",{staticClass:"arrow",attrs:{name:"play",color:e.color}})],1):e._e()])},i=[],r=(a("c3a6"),a("ad06")),l=(a("a9e3"),a("a8f5")),s={name:"module-title",components:{"van-icon":r["a"]},props:{title:{type:String,default:""},hasMore:{type:Boolean,default:!1},dataItems:{type:Object},pageStyleMode:{type:Number,default:0},titleCenter:{type:Boolean},color:{type:String,value:"#090A0E"},ylogParams:{type:Object,default:function(){return{}}}},methods:{goList:function(){if(this.hasMore)if(this.dataItems){var e=this.dataItems,t=e.linkType,a=e.linkVal,o=e.linkText;Object(l["b"])({linkType:t,linkVal:a,linkText:o},this.ylogParams)}else this.$emit("handleTitleMoreClick")}}},n=s,p=(a("a19e"),a("2877")),c=Object(p["a"])(n,o,i,!1,null,"3235df32",null);t["a"]=c.exports},9528:function(e,t,a){},a19e:function(e,t,a){"use strict";a("27b2")},ac33:function(e,t,a){"use strict";(function(e){var o=a("53ca"),i=(a("a9e3"),a("120f")),r=a("a8f5"),l=a("751d"),s=a("f354");t["a"]={components:{"base-wrap":i["a"],moduleTitle:l["a"]},mixins:[s["a"]],props:{part:{type:Object},partProps:{type:Object},headerPic:{type:String},title:{type:String},activityType:{type:Number},headerLinkData:{type:Object},catchHeaderClickEvent:{type:Boolean},titleDataItem:{type:Object},spaceType:{type:String,default:"large"},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},hasContentPadding:{type:Boolean,default:!0},customTitle:{type:Boolean},showTitleMore:{type:Boolean},pageStyleMode:{type:[Number,String],value:1},ylogParams:{type:Object,default:function(){return{}}}},data:function(){return{props:{},titleOffset:!1,shadowClass:"shadow",styleMode:0,cardStyle:"",spaceStyle:"",titleStyle:{},contentTop:!1,headerBorderRadiusStyle:{}}},computed:{watchData:function(){var e=this.partProps,t=this.headerPic,a=this.pageStyleMode;return{partProps:e,headerPic:t,pageStyleMode:a}}},watch:{watchData:{handler:function(t){if(t.partProps){var a=this.deepCopy(t.partProps);a.v||("marketing"!==a.moduleStyle?(a.moduleStyleMode=a.boxShadow?"card":"normal",a.moduleBoxShadow=a.boxShadow,a.titleStyle="outer",a.modulePic="",a.moduleColor=""):(a.moduleStyleMode="card",a.titleStyle=t.headerPic?"outer":"inner",a.hideName=!0,a.moduleBoxShadow=!0,a.modulePicStyle="overlay"));var o="shadow";t.headerPic?"card"===a.moduleStyleMode&&"inner"===a.titleStyle&&this.title&&!a.hideName&&(a.titleStyle="outer"):o="shadow-nor";var i=t.pageStyleMode||1;"normal"===a.moduleStyleMode?i=3===i||a.modulePicFull?3:1:"card"===a.moduleStyleMode&&(i="outer"===a.titleStyle?2:4);var r={},l={},s=e.skinManager.getHomeDefalutMargin()||24;"number"!==typeof a.spaceLeft&&(a.spaceLeft=s),"number"!==typeof a.spaceRight&&(a.spaceRight=s),"number"===typeof a.spaceLeft&&(a.modulePicFull?(l.paddingLeft="".concat(e.toRem(a.spaceLeft),"rem"),r.margin=0):r.marginLeft="".concat(e.toRem(a.spaceLeft),"rem")),"number"===typeof a.spaceRight&&(a.modulePicFull?(l.paddingRight="".concat(e.toRem(a.spaceRight),"rem"),r.margin=0):r.marginRight="".concat(e.toRem(a.spaceRight),"rem")),this.titleStyle={padding:"0 ".concat(e.toRem(s),"rem")};var n=!1;t.headerPic&&"overlay"!==a.modulePicStyle?n=!0:(t.headerPic||"card"!==a.moduleStyleMode||"outer"!==a.titleStyle)&&(t.headerPic||("card"!==a.moduleStyleMode||"outer"===a.titleStyle)&&3!==i||this.customTitle||!a.hideName)||(n=!0),"right"!==a.innerAngle&&a.innerAngleDegree&&t.headerPic&&(this.headerBorderRadiusStyle={"border-top-left-radius":"".concat(e.toRem(a.innerAngleDegree),"rem"),"border-top-right-radius":"".concat(e.toRem(a.innerAngleDegree),"rem")});var p="card"===a.moduleStyleMode&&"outer"===a.titleStyle&&!a.hideName;this.props=a,this.titleOffset=p,this.shadowClass=o,this.styleMode=i,this.spaceStyle=r,this.cardStyle=l,this.contentTop=n}},deep:!0,immediate:!0}},methods:{handleClick:function(){this.catchHeaderClickEvent?this.$emit("headerClick"):this.headerLinkData&&Object(r["b"])(this.getLinkData(this.headerLinkData),this.ylogParams)},handleTitleMoreClick:function(){this.$emit("handleTitleMoreClick")},handleCardStyle:function(t,a,o){if(!o)return{};var i={};return t&&t.modulePic&&a&&(i.backgroundImage="url(".concat(t.modulePic,")")),t&&!t.hideModuleColor&&(i.backgroundColor=t.moduleColor||"white"),t&&"card"===t.moduleStyleMode&&"round"==t.innerAngle&&"number"===typeof t.innerAngleDegree?i.borderRadius="".concat(e.toRem(t.innerAngleDegree),"rem"):t&&"right"==t.innerAngle&&(i.borderRadius=0),i},deepCopy:function(e){var t=Array.isArray(e)?[]:{};for(var a in e)t[a]="object"===Object(o["a"])(e[a])?e[a]?this.deepCopy(e[a]):null:e[a];return t}}}}).call(this,a("7189")["default"])},dd82:function(e,t,a){"use strict";var o=function(){var e=this,t=e._self._c;return t("base-wrap",{attrs:{partProps:e.props,spaceType:e.spaceType,isDev:e.isDev,isActive:e.isActive,pageStyleMode:e.styleMode}},[t("div",{staticClass:"wrap",style:e.handleCardStyle(e.props,!e.headerPic,"card"!=e.props.moduleStyleMode)},[!(e.customTitle||e.title&&!e.props.hideName)||"card"==e.props.moduleStyleMode&&"outer"!=e.props.titleStyle?1==e.styleMode?t("div",{staticStyle:{height:"1rem"}}):e._e():t("div",{class:["title-wrap",{"title-wrap__margin-top":e.titleOffset}],style:e.titleStyle},[e.title&&!e.props.hideName?t("module-title",{attrs:{title:e.title,hasMore:e.props.showDetail||e.showTitleMore,dataItems:e.titleDataItem,titleCenter:!!e.headerPic,color:e.props.titleColor,ylogParams:e.ylogParams},on:{handleTitleMoreClick:e.handleTitleMoreClick}}):e._t("title")],2),t("div",{class:["card-wrap",{"card-wrap__full":e.props.modulePicFull},{"card-wrap__card":"card"==e.props.moduleStyleMode},{"content-wrap__shadow":"card"==e.props.moduleStyleMode&&"outer"==e.props.titleStyle},"card"==e.props.moduleStyleMode&&e.props.moduleBoxShadow?e.shadowClass:""],style:[e.spaceStyle,e.handleCardStyle(e.props,!e.headerPic,"card"==e.props.moduleStyleMode)]},[(e.customTitle||e.title&&!e.props.hideName)&&"card"==e.props.moduleStyleMode&&"outer"!=e.props.titleStyle?t("div",{staticClass:"title-wrap title-wrap__padding"},[e.title&&!e.props.hideName?t("module-title",{attrs:{title:e.title,hasMore:e.props.showDetail||e.showTitleMore,"data-items":e.titleDataItem,titleCenter:!!e.headerPic,color:e.props.titleColor},on:{handleTitleMoreClick:e.handleTitleMoreClick}}):e._t("title")],2):e._e(),t("div",{staticClass:"content-wrap"},[e.headerPic?t("img",{class:["header-pic",{"no-radius":"right"==e.props.innerAngle}],style:e.headerBorderRadiusStyle,attrs:{src:e.headerPic},on:{click:e.handleClick}}):e._e(),t("div",{class:["content",{content__top:e.contentTop},{content__overlay:"overlay"==e.props.modulePicStyle&&e.headerPic},{"no-padding":!e.hasContentPadding}],style:e.cardStyle},[e._t("content")],2)])])])])},i=[],r=a("ac33"),l=r["a"],s=(a("feae"),a("2877")),n=Object(s["a"])(l,o,i,!1,null,"1aa024a9",null);t["a"]=n.exports},e49e:function(e,t,a){"use strict";(function(e){a("a9e3");var o=[{small:{top:0,bottom:24},middle:{top:0,bottom:0},large:{top:0,bottom:0}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}},{small:{top:0,bottom:24},middle:{top:0,bottom:24},large:{top:0,bottom:24}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}}];t["a"]={props:{pageStyleMode:{type:Number,value:1},position:{type:String,default:"top"},spaceType:{type:String,default:"large"},spaceSize:{type:[Number,String],default:""},offset:{type:Number,default:0},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{heightCalc:function(){var t=0;if("number"===typeof this.spaceSize)t=this.spaceSize;else{var a=o[(this.pageStyleMode||1)-1];t=a[this.spaceType||"large"][this.position||"top"]||0}return this.aaa=t-this.offset,"".concat(e.toRem(t-this.offset),"rem")}}}}).call(this,a("7189")["default"])},eca1:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("div",{class:["container",{"container--dev":e.isDev&&e.isActive}],style:{height:e.heightCalc}})},i=[],r=a("e49e"),l=r["a"],s=(a("2bde"),a("2877")),n=Object(s["a"])(l,o,i,!1,null,"5235f330",null);t["default"]=n.exports},eeef:function(e,t,a){"use strict";a("64d2")},f354:function(e,t,a){"use strict";(function(e){var o=a("5530"),i=(a("caad"),a("2532"),a("d3b7"),a("b00c")),r=function(){},l={props:{isDev:{type:Boolean,default:!1},pageData:{type:Object,default:function(){return{}}},ylogParams:{type:Object,default:function(){return{}}}},methods:{getLinkData:function(e){var t=this.pageData&&this.pageData.tempCode||"";return[i["c"].BRAND_SUBJECT,i["c"].INBUY_SUBJECT].includes(t)&&(e.partId=this.part.partId||"",i["c"].BRAND_SUBJECT===t&&(e.brandId=this.pageData.brandId||""),i["c"].INBUY_SUBJECT===t&&(e.activityId=this.activityId||"",e.activityType=this.activityType||"")),e},fetchPartData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,i=a.partId,r=a.dataItems,l=a.partProps;return this.isDev?Promise.resolve({list:r||[],partProps:l}):i?e.request({url:"/api/prod/shophomepartdata",method:"get",params:Object(o["a"])(Object(o["a"])({},t),{},{PartId:i})}):Promise.reject({message:"partId 不存在"})},fetchPartCenterData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,i=a.dataItems,r=a.partProps;return this.isDev?Promise.resolve({list:i||[],partProps:r}):e.request({url:"/api/prod/shopcouponcentercouponlist",method:"get",params:Object(o["a"])({},t)})},getDatas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,o=this.part,i=o.partId,l=o.dataItems,s=o.partProps;this.isDev?t({list:l||[],partProps:s}):i?e.request({url:"/api/prod/shophomepartdata?PartId=".concat(i),method:"get"}).then((function(e){t(e||{})})).catch((function(e){a(e)})):a({message:"partId 不存在"})}}};t["a"]=l}).call(this,a("7189")["default"])},f8d7:function(e,t,a){},feae:function(e,t,a){"use strict";a("f8d7")}}]);