(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product-brand","space"],{"04c1":function(t,e,a){"use strict";(function(t){var i=a("2909"),r=a("5530"),o=(a("a9e3"),a("d3b7"),a("159b"),a("d81d"),a("99af"),a("b0c0"),a("ef16")),n=a("7fb2"),s=a("9524"),c=a("05c3"),u=a("f354");e["a"]={name:"product-brand",components:{innerWrap:o["a"],fadeImg:n["a"],fadeProduct:s["a"]},props:{part:{type:Object},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},pageStyleMode:{type:Number}},mixins:[u["a"]],data:function(){return{pageId:"",picUrl:"",activeIndex:0,defaultImg:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png",defaultImgLogo:"https://staticontent.shop2cn.cn/shop2cn/mp/images/ic_brand_default_logo.png",styleMode:0,picList:[],prodList:[],productList:[],hideSpace:!1,showPage:!1,partProps:{},imgBgStyle:{},productBrandStyle:{"--title-color":"#090a0e","--button-bg-color":"#f23340"},moveStatus:""}},watch:{part:{immediate:!0,deep:!0,handler:function(e){if(e){var a=Object(r["a"])({},e.partProps),i=0,o=0,n=a.modulePicFull?0:t.skinManager.getHomeDefalutMargin()||24;"number"!==typeof a.spaceLeft&&(i=n,a.spaceLeft=n),"number"!==typeof a.spaceRight&&(o=n,a.spaceRight=n),"number"===typeof a.spaceLeft&&(i=a.spaceLeft),"number"===typeof a.spaceRight&&(o=a.spaceRight),a.modulePicFull&&(i=0,o=0);var s=0;"round"===a.innerAngle&&"number"===typeof a.innerAngleDegree?s=a.innerAngleDegree:"right"===a.innerAngle&&(s=0);var c=this.pageStyleMode||1;if("normal"===a.moduleStyleMode?c=3===c||a.modulePicFull?3:1:"card"===a.moduleStyleMode&&(c="outer"===a.titleStyle?2:4),this.styleMode=c,a.modulePicFull){var u=0,d=0,p=a.modulePicFull?0:t.skinManager.getHomeDefalutMargin()||24;"number"!==typeof a.spaceLeft&&(u=p),"number"!==typeof a.spaceRight&&(d=p),"number"===typeof a.spaceLeft&&(u=a.spaceLeft),"number"===typeof a.spaceRight&&(d=a.spaceRight),this.productBrandStyle["--padding-left"]="".concat(t.toRem(u||24),"rem"),this.productBrandStyle["--padding-right"]="".concat(t.toRem(d||24),"rem")}var l=.65*(750-i-o),f=Math.floor(3*l/2);this.productBrandStyle["--brand-pic-width"]="".concat(t.toRem(Math.floor(100*l)/100),"rem"),this.productBrandStyle["--brand-pic-height"]="".concat(t.toRem(Math.floor(100*f)/100),"rem"),this.productBrandStyle["--button-bg-color"]=a.buttonBgColor,this.productBrandStyle["--button-choose-bg-color"]=a.chooseBgColor,this.productBrandStyle["--title-size"]=a.titleSize?"".concat(t.toRem(2*a.titleSize),"rem"):"".concat(t.toRem(40),"rem"),this.productBrandStyle["--title-color"]=a.titleColor,this.productBrandStyle["--inner-border-radius"]="".concat(t.toRem(Math.floor(100*s)/100),"rem"),this.partProps=a,this.isDev&&this.handleDevUpdate()}}}},mounted:function(){this.isDev?this.handleDevUpdate():this.getPartData()},methods:{handleDevUpdate:function(){this.partProps=Object(r["a"])(Object(r["a"])({},this.partProps),this.part.partProps),this.part.dataItems&&this.part.dataItems.length&&this.part.dataItems[0].productList&&this.part.dataItems[0].productList.length||(this.part.dataItems[0].productList=c["e"]),this.prodList=this.part.dataItems||[]},handleClick:function(){t.ylog.send(Object(r["a"])({action_type:"click",sub_module_name:"more",target:this.pageId,target_type:4},this.ylogParams)),t.navigateTo({url:"/pages/showactivity/main?pageId=".concat(this.pageId)})},handleTabClick:function(t,e){this.activeIndex=e},getPartData:function(){var e=this,a=this.part.partId||"";a?t.request({url:"/api/prod/shophomepartdata?PartId=".concat(a),method:"get"}).then((function(t){if(t.list&&t.list.length){var a=[],r=[];t.list.forEach((function(t){r.push(t.picUrl),a.push(t.productList)}));var o=a.map((function(t){return 1==t.length&&(t=[].concat(Object(i["a"])(t),[{name:"mockName",pic:"mockPic"},{name:"mockName",pic:"mockPic"}])),2==t.length&&(t=[].concat(Object(i["a"])(t),[{name:"mockName",pic:"mockPic"}])),t.map((function(t){return{id:t.id,pic:t.pic,name:t.name,activityStatus:t.activityStatus,stock:t.stock,activityStock:t.activityStock,showSaleOut:t.showSaleOut,activityType:t.activityType}}))}));e.picList=r||[],e.productList=o||[],e.prodList=t.list||[],e.showPage=!0}else e.prodList=[],e.showPage=!1})).catch((function(){e.showPage=!1})):this.showPage=!1}}}}).call(this,a("7189")["default"])},"05c3":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"e",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"d",(function(){return d}));var i=a("5530"),r={isEmpty:!0,pic:"",name:"这里显示商品名称，最多显示两行",discountInfo:"抢购价 ¥99",originalPrice:9999,price:999,marketAmount:1e3},o={activityId:"",name:"这里显示商品名称",pic:"",price:999,originalPrice:9999,hh:99,mm:99,ss:99,timestamp:9999},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";t=t>20?20:t;for(var a=[],n="default"===e?r:o,s=0;s<t;s+=1)a.push(Object(i["a"])(Object(i["a"])({},n),{},{id:"p".concat(s+1)}));return a},s=function(t){t=t>20?20:t;for(var e=[],a=0;a<t;a+=1)e.push(Object(i["a"])(Object(i["a"])({},r),{},{id:"p".concat(a+1),pic:"https://staticontent.shop2cn.cn/shop2cn/h5demo/prodcard-setting/default_product.png"}));return e};e["b"]=n;var c=n(3),u=n(4),d=n(6);n(10)},"09f5":function(t,e,a){t.exports=a.p+"static/img/default_img_2.3343bc5e.png"},"120f":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-wrap"},[t.showSpaceTop?e("space",{attrs:{isDev:t.isDev,isActive:t.isActive,position:"top",spaceSize:t.partProps.spaceTop,pageStyleMode:t.pageStyleMode,spaceType:t.spaceType}}):t._e(),t._t("default"),e("space",{attrs:{isDev:t.isDev,isActive:t.isActive,position:"bottom",spaceSize:t.partProps.spaceBottom,pageStyleMode:t.pageStyleMode,spaceType:t.spaceType}})],2)},r=[],o=(a("a9e3"),a("eca1")),n={components:{space:o["default"]},props:{partProps:{type:Object},showSpaceTop:{type:Boolean,default:!0},spaceType:{type:String,default:"large"},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},pageStyleMode:{type:Number,default:1}}},s=n,c=(a("eeef"),a("2877")),u=Object(c["a"])(s,i,r,!1,null,"540e39ed",null);e["a"]=u.exports},"162f":function(t,e,a){},"1c59":function(t,e,a){"use strict";var i=a("6d61"),r=a("6566");i("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},2532:function(t,e,a){"use strict";var i=a("23e7"),r=a("e330"),o=a("5a34"),n=a("1d80"),s=a("577e"),c=a("ab13"),u=r("".indexOf);i({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~u(s(n(this)),s(o(t)),arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("6b75");function r(t){if(Array.isArray(t))return Object(i["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function o(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var n=a("06c5");a("d9e2");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||o(t)||Object(n["a"])(t)||s()}},"2a34":function(t,e,a){"use strict";(function(t){var i=a("2909"),r=a("5530"),o=(a("a9e3"),a("b0c0"),a("d3b7"),a("6062"),a("3ca3"),a("ddb0"),a("b64b"),a("99af"),a("a15b"),a("2f85")),n={SHOWSALEOUT:"show-saleout",SHOWSUPPLY:"show-supply",NOICON:"noicon",NORMAL:"normal"};e["a"]={name:"",mixins:[o["a"]],props:{isDev:{type:Boolean,default:!1},item:{type:Object,default:function(){}},activeIndex:{type:Number,default:function(){return 0}},index:{type:Number,default:function(){return 0}},cardType:{type:String,default:""}},watch:{item:{immediate:!0,handler:function(t,e){var a=this;setTimeout((function(){a.itemInfo=e||{},t&&t.name&&setTimeout((function(){"mockName"!=t.name&&a.$refs.infoName&&a.$nextTick((function(){a.$refs.infoName.innerHTML=t.name})),a.itemInfo=t||{}}),250),e&&e.name&&(a.moveStatus="out",setTimeout((function(){a.moveStatus="in"}),250))}),50*(this.index+1))}}},computed:{showProdSaleout:function(){if(!this.itemInfo)return"";var t=this.itemInfo,e=t.activityStatus,a=t.stock,i=t.activityStock,r=t.showSaleOut,o=t.activityType,s=n.NOICON;return(this.cardType||o)&&0===i?"home"===this.prodEnv?s=1===e?n.SHOWSALEOUT:n.NOICON:"landing"===this.prodEnv?(1===e&&(s=n.SHOWSALEOUT),2===e&&(s=n.NOICON)):1===e?s=n.SHOWSUPPLY:2===e&&(s="seckill"===this.cardType||2===o?n.NOICON:r?n.SHOWSUPPLY:n.SHOWSALEOUT):this.cardType||o||0!==a||(s=r?n.SHOWSUPPLY:n.SHOWSALEOUT),console.log("showProdSaleout--------",s),s}},data:function(){return{defaultImg:"https://s1.shop2cn.com/shopsqm/static/images/default_img.png",moveStatus:"",itemInfo:{},SALEENUM:n}},methods:{goProd:function(){if(3!==this.item.state||"col"!==this.prodBtnType){var e=this.item.id,a=t.getQuery(),o=a.isMiniApp,n=void 0!==o&&o;if(e){t.ylog.send(Object(r["a"])({action_type:"click",module_name:"product_list",sproductid:e,target:e,target_type:3,sub_module_name:"product"},this.ylogParams));var s=new Set;if(Object.keys(this.navigatorParams||{}).length>0)for(var c in this.navigatorParams)Object.prototype.hasOwnProperty.call(this.navigatorParams,c)&&s.add("".concat(c,"=").concat(this.navigatorParams[c]));n?wx.miniProgram.navigateTo({url:"/pages/item/item?productId=".concat(e,"&").concat(Object(i["a"])(s).join("&"))}):t.navigateTo({url:"/pages/item/main?productId=".concat(e,"&").concat(Object(i["a"])(s).join("&"))})}}else t.showToast({title:this.$t("components.product.item_viewed")})}}}}).call(this,a("7189")["default"])},"2bde":function(t,e,a){"use strict";a("9528")},"2f85":function(t,e,a){"use strict";(function(t){var i=a("5530"),r=(a("d3b7"),a("159b"),a("99af"),a("b64b"),{round:"round",right:"right"}),o={white:"white",gray:"gray",transparent:"transparent"},n={normal:"normal",thin:"thin"},s={thick:"thick",thin:"thin"},c={left:"left",center:"center"},u={prodShowBorder:!1,prodBoxShadow:!1,prodAngle:r.round,prodAngleDegree:8,prodBgColor:o.white,prodShowMask:!1,prodShowBrand:!1,prodTitleStyle:n.normal,prodPriceStyle:s.thick,prodTextAlign:c.left,prodSpace:12},d={},p={},l={price:[30,60],sub2:[10,40],market:[]};e["a"]={data:function(){return{prodThemeStyle:{},productStyleClass:[],priceStyleClass:[],productStyleData:{},luxuryStyle:0}},mounted:function(){var e=this;this.isDev||(t.skinManager.getSkinData()&&(d=t.skinManager.getSkinData(),p=d.prodSkinData||{},this.luxuryStyle=d.luxuryStyle),t.skinManager.onSkinEvent((function(t){d=t,p=d.prodSkinData||{},e.luxuryStyle=t.luxuryStyle})))},methods:{handleProdClass:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=Object(i["a"])(Object(i["a"])({},u),t),f=a.prodAngle,h=a.prodShowBorder,m=a.prodBoxShadow,v=a.prodBgColor,g=a.prodShowMask,y=(a.prodShowBrand,a.prodTitleStyle),b=a.prodPriceStyle,S=a.prodPriceColor,P=void 0===S?d.mainColor:S,I=a.prodTextAlign,w=a.prodMarketFontColor,O=void 0===w?p.prodMarketFontColor:w,x=a.prodSubColor,T=void 0===x?p.prodSubColor||d.sub2Color:x,k=[],L=[];f===r.right&&(k.push("wrap--rightangle"),L.push("wrap--rightangle")),h?k.push("wrap--hasBorder"):m&&k.push("wrap--hasShadow"),v===o.gray?k.push("wrap--gray"):v===o.transparent&&k.push("wrap--transparent"),g&&k.push("wrap--showMask"),"twoline"===e&&k.push("wrap--twoline"),y===n.thin&&k.push("wrap--titleFontThin"),b===s.thin&&L.push("wrap--priceFontThin"),I===c.center?(k.push("wrap--alignCenter"),L.push("wrap--alignCenter")):I===c.left&&L.push("wrap--alignLeft"),this.prodThemeStyle=Object(i["a"])(Object(i["a"])(Object(i["a"])({},this._handleRgba("--price-color",P,l.price)),this._handleRgba("--sub2-color",T,l.sub2)),this._handleRgba("--market-color",O,l.market)),this.productStyleClass=k,this.priceStyleClass=L,this.productStyleData=this._handleStyleData(t)},handleProdWrapStyle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.prodSpace,i=e.prodAngle,r=e.prodAngleDegree,o=12;o="number"===typeof a?a:this.cardDistance||12;var n={margin:"".concat(t.toRem(o/2),"rem")};return"round"===i&&"number"===typeof r&&(n.borderRadius="".concat(t.toRem(r),"rem")),n},_handleRgba:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(!e||!t)return{};var i={};i[t]=e;var r=e.lastIndexOf(","),o=e.lastIndexOf(")");return e.indexOf("rgba")>-1&&r>-1&&o>-1&&a.forEach((function(a){i["".concat(t,"-").concat(a)]="".concat(e.substring(0,r+1)," ").concat(a/100).concat(e.substring(o))})),i},_handleStyleData:function(t){var e=t.prodPriceFontSize,a=t.prodPriceType,i=t.prodMarketFontSize,r=t.prodTitleSize,o=t.prodDecimalFontSize,n={13:18,14:20,15:22},s={14:10,16:12,18:12},c={prodPriceFontSize:e||p.prodPriceFontSize,prodPriceType:a||p.prodPriceType,prodMarketFontSize:i||p.prodMarketFontSize,prodTitleSize:r||p.prodTitleSize,prodDecimalFontSize:o};c.prodTitleSize&&(c.prodTitleLineHeight=n[c.prodTitleSize]||""),c.prodPriceFontSize&&!c.prodDecimalFontSize&&(c.prodDecimalFontSize=s[c.prodPriceFontSize]||10);for(var u=Object.keys(c),d=0;d<u.length;d++)c[u[d]]||delete c[u[d]];return c}}}}).call(this,a("7189")["default"])},"3c9b":function(t,e,a){"use strict";(function(t){var i=a("5530"),r=(a("a9e3"),a("120f"));e["a"]={components:{baseWrap:r["a"]},props:{partProps:{type:Object},spaceType:{type:String,default:"large"},pageStyleMode:{type:Number,default:1},showSpaceTop:{type:Boolean,default:!0},showBg:{type:Boolean},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},hideSpace:{type:Boolean}},data:function(){return{props:{},spaceStyle:{}}},computed:{innerStyle:function(){var t={};return this.spaceStyle&&(t=Object(i["a"])(Object(i["a"])({},t),this.spaceStyle)),this.showBg&&(t=Object(i["a"])(Object(i["a"])({},t),this.cardBgStyle(this.props))),t}},watch:{partProps:{immediate:!0,handler:function(e){if(e){var a=Object(i["a"])({},e),r={};if(this.hideSpace)a.spaceLeft=0,a.spaceRight=0;else{var o=t.skinManager.getHomeDefalutMargin()||24;"number"!==typeof a.spaceLeft&&(a.spaceLeft=o),"number"!==typeof a.spaceRight&&(a.spaceRight=o)}"number"===typeof a.spaceLeft&&(r={paddingLeft:"".concat(t.toRem(a.spaceLeft),"rem")}),"number"===typeof a.spaceRight&&(r=Object(i["a"])(Object(i["a"])({},r),{},{paddingRight:"".concat(t.toRem(a.spaceRight),"rem")})),this.props=a,this.spaceStyle=r}},deep:!0}},methods:{cardBgStyle:function(){var t={};return this.partProps&&!this.partProps.hideModuleColor&&(t.backgroundColor=this.partProps.moduleColor||"white"),t}}}}).call(this,a("7189")["default"])},"4fad":function(t,e,a){var i=a("d039"),r=a("861d"),o=a("c6b6"),n=a("d86b"),s=Object.isExtensible,c=i((function(){s(1)}));t.exports=c||n?function(t){return!!r(t)&&((!n||"ArrayBuffer"!=o(t))&&(!s||s(t)))}:s},"5c03":function(t,e,a){},6062:function(t,e,a){a("1c59")},"64d2":function(t,e,a){},6566:function(t,e,a){"use strict";var i=a("9bf2").f,r=a("7c73"),o=a("6964"),n=a("0366"),s=a("19aa"),c=a("2266"),u=a("7dd0"),d=a("2626"),p=a("83ab"),l=a("f183").fastKey,f=a("69f3"),h=f.set,m=f.getterFor;t.exports={getConstructor:function(t,e,a,u){var d=t((function(t,i){s(t,f),h(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),p||(t.size=0),void 0!=i&&c(i,t[u],{that:t,AS_ENTRIES:a})})),f=d.prototype,v=m(e),g=function(t,e,a){var i,r,o=v(t),n=y(t,e);return n?n.value=a:(o.last=n={index:r=l(e,!0),key:e,value:a,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=n),i&&(i.next=n),p?o.size++:t.size++,"F"!==r&&(o.index[r]=n)),t},y=function(t,e){var a,i=v(t),r=l(e);if("F"!==r)return i.index[r];for(a=i.first;a;a=a.next)if(a.key==e)return a};return o(f,{clear:function(){var t=this,e=v(t),a=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete a[i.index],i=i.next;e.first=e.last=void 0,p?e.size=0:t.size=0},delete:function(t){var e=this,a=v(e),i=y(e,t);if(i){var r=i.next,o=i.previous;delete a.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),a.first==i&&(a.first=r),a.last==i&&(a.last=o),p?a.size--:e.size--}return!!i},forEach:function(t){var e,a=v(this),i=n(t,arguments.length>1?arguments[1]:void 0);while(e=e?e.next:a.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),o(f,a?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),p&&i(f,"size",{get:function(){return v(this).size}}),d},setStrong:function(t,e,a){var i=e+" Iterator",r=m(e),o=m(i);u(t,e,(function(t,e){h(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,a=t.last;while(a&&a.removed)a=a.previous;return t.target&&(t.last=a=a?a.next:t.state.first)?"keys"==e?{value:a.key,done:!1}:"values"==e?{value:a.value,done:!1}:{value:[a.key,a.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),a?"entries":"values",!a,!0),d(e)}}},6948:function(t,e,a){"use strict";a("f462")},6964:function(t,e,a){var i=a("cb2d");t.exports=function(t,e,a){for(var r in e)i(t,r,e[r],a);return t}},"6d61":function(t,e,a){"use strict";var i=a("23e7"),r=a("da84"),o=a("e330"),n=a("94ca"),s=a("cb2d"),c=a("f183"),u=a("2266"),d=a("19aa"),p=a("1626"),l=a("861d"),f=a("d039"),h=a("1c7e"),m=a("d44e"),v=a("7156");t.exports=function(t,e,a){var g=-1!==t.indexOf("Map"),y=-1!==t.indexOf("Weak"),b=g?"set":"add",S=r[t],P=S&&S.prototype,I=S,w={},O=function(t){var e=o(P[t]);s(P,t,"add"==t?function(t){return e(this,0===t?0:t),this}:"delete"==t?function(t){return!(y&&!l(t))&&e(this,0===t?0:t)}:"get"==t?function(t){return y&&!l(t)?void 0:e(this,0===t?0:t)}:"has"==t?function(t){return!(y&&!l(t))&&e(this,0===t?0:t)}:function(t,a){return e(this,0===t?0:t,a),this})},x=n(t,!p(S)||!(y||P.forEach&&!f((function(){(new S).entries().next()}))));if(x)I=a.getConstructor(e,t,g,b),c.enable();else if(n(t,!0)){var T=new I,k=T[b](y?{}:-0,1)!=T,L=f((function(){T.has(1)})),_=h((function(t){new S(t)})),C=!y&&f((function(){var t=new S,e=5;while(e--)t[b](e,e);return!t.has(-0)}));_||(I=e((function(t,e){d(t,P);var a=v(new S,t,I);return void 0!=e&&u(e,a[b],{that:a,AS_ENTRIES:g}),a})),I.prototype=P,P.constructor=I),(L||C)&&(O("delete"),O("has"),g&&O("get")),(C||k)&&O(b),y&&P.clear&&delete P.clear}return w[t]=I,i({global:!0,constructor:!0,forced:I!=S},w),m(I,t),y||a.setStrong(I,t,g),I}},"7fb2":function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fade-img-content"},[t._l(t.picList,(function(a,i){return[e("img",{class:["fade-img",{"fade-out-img":"out"===t.moveStatus&&(0!==t.urlIndex&&i===t.urlList[1]||1!==t.urlIndex&&i===t.urlList[0])},{"fade-op":i===t.urlList[1]||i===t.urlList[0]},{"z-index-4":0!==t.urlIndex&&i===t.urlList[1]||1!==t.urlIndex&&i===t.urlList[0]}],attrs:{src:a,alt:""},on:{click:t.goto}})]}))],2)},r=[],o=a("d8f6"),n=o["a"],s=(a("fe58"),a("2877")),c=Object(s["a"])(n,i,r,!1,null,"5e46810e",null);e["a"]=c.exports},8111:function(t,e,a){},"936f":function(t,e,a){"use strict";a("162f")},9524:function(t,e,a){"use strict";a("b0c0");var i=function(){var t=this,e=t._self._c;return t.itemInfo.pic&&t.itemInfo.name?e("div",{class:["product-pic-content",{"fade-out-product":"out"===t.moveStatus},{"fade-in-product":"in"===t.moveStatus},{saleoutwrap:t.showProdSaleout===t.SALEENUM.SHOWSALEOUT}],on:{click:t.goProd}},[e("div",{staticClass:"product-pic"},["mockPic"!=t.itemInfo.pic?[t.itemInfo.pic?e("img",{staticClass:"containerTopic-img-default",attrs:{"lazy-load":"",mode:"aspectFill",src:t.itemInfo.pic}}):e("img",{staticClass:"containerTopic-img-default",attrs:{src:a("09f5")}})]:t._e(),t.showProdSaleout===t.SALEENUM.SHOWSALEOUT?[t.luxuryStyle?e("div",{staticClass:"containerTopic-text-saleout"},[t._v(t._s(t.$t("components.product.grab")))]):e("img",{staticClass:"containerTopic-text-brand-saleout",attrs:{mode:"aspectFill",src:t.$t("components.img_icon_saleout_buy_sm")}})]:t._e()],2),t.itemInfo.name&&"mockName"!=t.itemInfo.name?e("div",{ref:"infoName",staticClass:"product-name"},[t._v(t._s(t.itemInfo.name))]):t._e()]):t._e()},r=[],o=a("2a34"),n=o["a"],s=(a("936f"),a("2877")),c=Object(s["a"])(n,i,r,!1,null,"0c702466",null);e["a"]=c.exports},9528:function(t,e,a){},9587:function(t,e,a){"use strict";a("5c03")},bb2f:function(t,e,a){var i=a("d039");t.exports=!i((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(t,e,a){var i=a("d039");t.exports=i((function(){if("function"==typeof ArrayBuffer){var t=new ArrayBuffer(8);Object.isExtensible(t)&&Object.defineProperty(t,"a",{value:8})}}))},d8f6:function(t,e,a){"use strict";(function(t){a("a9e3"),a("e9c4"),a("a8f5");e["a"]={name:"",props:{item:{type:Object,default:function(){}},url:{type:String,default:function(){return""}},picList:{type:Array,default:function(){return[]}},activeIndex:{type:Number,default:function(){return 0}}},watch:{activeIndex:{immediate:!0,handler:function(t){var e=this;this.urlList.length?(this.moveStatus="out",0===this.urlIndex?(this.urlList[1]=t,setTimeout((function(){e.urlIndex=1,e.moveStatus=""}),800)):(this.urlList[0]=t,setTimeout((function(){e.urlIndex=0,e.moveStatus=""}),800))):this.urlList.push(t)}}},data:function(){return{urlIndex:0,urlList:[],moveStatus:"",status:!1}},methods:{goto:function(){if(this.item.brandId){var e=JSON.stringify({brandId:this.item.brandId,title:this.item.brandName});t.navigateTo({url:"/pages/search/main?item=".concat(encodeURIComponent(e))})}}}}}).call(this,a("7189")["default"])},e49e:function(t,e,a){"use strict";(function(t){a("a9e3");var i=[{small:{top:0,bottom:24},middle:{top:0,bottom:0},large:{top:0,bottom:0}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}},{small:{top:0,bottom:24},middle:{top:0,bottom:24},large:{top:0,bottom:24}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}}];e["a"]={props:{pageStyleMode:{type:Number,value:1},position:{type:String,default:"top"},spaceType:{type:String,default:"large"},spaceSize:{type:[Number,String],default:""},offset:{type:Number,default:0},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{heightCalc:function(){var e=0;if("number"===typeof this.spaceSize)e=this.spaceSize;else{var a=i[(this.pageStyleMode||1)-1];e=a[this.spaceType||"large"][this.position||"top"]||0}return this.aaa=e-this.offset,"".concat(t.toRem(e-this.offset),"rem")}}}}).call(this,a("7189")["default"])},e645:function(t,e,a){"use strict";a.r(e);a("b0c0");var i=function(){var t=this,e=t._self._c;return t.showPage||t.isDev?e("div",{style:t.productBrandStyle,attrs:{id:"product-brand"}},[e("inner-wrap",{attrs:{partProps:t.partProps,pageStyleMode:t.styleMode,showBg:"normal"==t.partProps.moduleStyleMode,hideSpace:t.partProps.modulePicFull,isDev:t.isDev,isActive:t.isActive}},[e("div",{class:["product-brand-content",{"product-brand-content-normal":"normal"==t.partProps.moduleStyleMode},{"product-module-pic-full":!!t.partProps.modulePicFull}]},[e("div",{class:["brand-top-content",{"module-pic-full":t.partProps.modulePicFull}]},[e("div",{staticClass:"brand-top"},[e("div",{staticClass:"brand-title"},[t._v(t._s(t.part.name?t.part.name:"主题活动"))]),e("div",{ref:"contentWidth",staticClass:"brand-list-content"},[e("div",{staticClass:"brand-list"},t._l(t.prodList,(function(a,i){return e("div",{class:["brand-item-content",{active:t.activeIndex===i}]},[e("div",{ref:"itemWidth",refInFor:!0,staticClass:"brand-item",style:{"background-image":"url(".concat(t.isDev?a.brandLogo||t.defaultImg:a.brandLogo||t.defaultImgLogo,")")},on:{click:function(e){return t.handleTabClick(a,i)}}}),e("div",{class:["discount",{"un-choose-bg-show":!t.partProps.unChooseBgShow}]},[e("div",{staticClass:"discount-text"},[t._v(t._s(a.name?a.name:"卖点描述"))])])])})),0)])])]),e("div",{staticClass:"product-brand-bottom"},[e("div",{staticClass:"left-pic-url"},[t.isDev?[t.prodList[t.activeIndex].picUrl?e("div",[e("img",{staticClass:"img",attrs:{src:t.prodList[t.activeIndex].picUrl,alt:""}})]):e("div",{staticClass:"image-demo"})]:e("fade-img",{attrs:{"pic-list":t.picList,activeIndex:t.activeIndex,item:t.prodList[t.activeIndex],url:t.prodList[t.activeIndex].picUrl||t.defaultImg}})],2),e("div",{staticClass:"right-product"},[e("div",{class:["product-item-content",{shadow:t.partProps.moduleBoxShadow}]},[t.isDev?t._l(t.prodList[t.activeIndex].productList,(function(a,i){return e("div",{key:i,staticClass:"product-item"},[e("div",{staticClass:"product-pic"},[e("img",{staticClass:"img-dev",attrs:{src:t.isDev?t.defaultImg:a.pic||t.defaultImg,alt:""}})]),e("div",{staticClass:"product-name-dev"},[t._v("这里显示商品名称")])])})):t._l(t.productList[t.activeIndex],(function(a,i){return e("div",{key:i,staticClass:"product-item"},[e("fade-product",{attrs:{item:a,index:i,"is-dev":t.isDev,activeIndex:t.activeIndex}})],1)}))],2)])])])])],1):t._e()},r=[],o=a("04c1"),n=o["a"],s=(a("6948"),a("2877")),c=Object(s["a"])(n,i,r,!1,null,null,null);e["default"]=c.exports},eca1:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t._self._c;return e("div",{class:["container",{"container--dev":t.isDev&&t.isActive}],style:{height:t.heightCalc}})},r=[],o=a("e49e"),n=o["a"],s=(a("2bde"),a("2877")),c=Object(s["a"])(n,i,r,!1,null,"5235f330",null);e["default"]=c.exports},eeef:function(t,e,a){"use strict";a("64d2")},ef16:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;return e("base-wrap",{attrs:{partProps:t.props,spaceType:t.spaceType,showSpaceTop:t.showSpaceTop,pageStyleMode:t.pageStyleMode,isDev:t.isDev,isActive:t.isActive}},[e("div",{staticClass:"wrap",style:t.innerStyle},[t._t("default")],2)])},r=[],o=a("3c9b"),n=o["a"],s=(a("9587"),a("2877")),c=Object(s["a"])(n,i,r,!1,null,"82a34ad8",null);e["a"]=c.exports},f183:function(t,e,a){var i=a("23e7"),r=a("e330"),o=a("d012"),n=a("861d"),s=a("1a2d"),c=a("9bf2").f,u=a("241c"),d=a("057f"),p=a("4fad"),l=a("90e3"),f=a("bb2f"),h=!1,m=l("meta"),v=0,g=function(t){c(t,m,{value:{objectID:"O"+v++,weakData:{}}})},y=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,m)){if(!p(t))return"F";if(!e)return"E";g(t)}return t[m].objectID},b=function(t,e){if(!s(t,m)){if(!p(t))return!0;if(!e)return!1;g(t)}return t[m].weakData},S=function(t){return f&&h&&p(t)&&!s(t,m)&&g(t),t},P=function(){I.enable=function(){},h=!0;var t=u.f,e=r([].splice),a={};a[m]=1,t(a).length&&(u.f=function(a){for(var i=t(a),r=0,o=i.length;r<o;r++)if(i[r]===m){e(i,r,1);break}return i},i({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:d.f}))},I=t.exports={enable:P,fastKey:y,getWeakData:b,onFreeze:S};o[m]=!0},f354:function(t,e,a){"use strict";(function(t){var i=a("5530"),r=(a("caad"),a("2532"),a("d3b7"),a("b00c")),o=function(){},n={props:{isDev:{type:Boolean,default:!1},pageData:{type:Object,default:function(){return{}}},ylogParams:{type:Object,default:function(){return{}}}},methods:{getLinkData:function(t){var e=this.pageData&&this.pageData.tempCode||"";return[r["c"].BRAND_SUBJECT,r["c"].INBUY_SUBJECT].includes(e)&&(t.partId=this.part.partId||"",r["c"].BRAND_SUBJECT===e&&(t.brandId=this.pageData.brandId||""),r["c"].INBUY_SUBJECT===e&&(t.activityId=this.activityId||"",t.activityType=this.activityType||"")),t},fetchPartData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,r=a.partId,o=a.dataItems,n=a.partProps;return this.isDev?Promise.resolve({list:o||[],partProps:n}):r?t.request({url:"/api/prod/shophomepartdata",method:"get",params:Object(i["a"])(Object(i["a"])({},e),{},{PartId:r})}):Promise.reject({message:"partId 不存在"})},fetchPartCenterData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=this.part,r=a.dataItems,o=a.partProps;return this.isDev?Promise.resolve({list:r||[],partProps:o}):t.request({url:"/api/prod/shopcouponcentercouponlist",method:"get",params:Object(i["a"])({},e)})},getDatas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,i=this.part,r=i.partId,n=i.dataItems,s=i.partProps;this.isDev?e({list:n||[],partProps:s}):r?t.request({url:"/api/prod/shophomepartdata?PartId=".concat(r),method:"get"}).then((function(t){e(t||{})})).catch((function(t){a(t)})):a({message:"partId 不存在"})}}};e["a"]=n}).call(this,a("7189")["default"])},f462:function(t,e,a){},fe58:function(t,e,a){"use strict";a("8111")}}]);