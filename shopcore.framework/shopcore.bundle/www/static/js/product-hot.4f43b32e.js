(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product-hot"],{"05c3":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"e",(function(){return d})),r.d(e,"c",(function(){return p})),r.d(e,"d",(function(){return c}));var a=r("5530"),o={isEmpty:!0,pic:"",name:"这里显示商品名称，最多显示两行",discountInfo:"抢购价 ¥99",originalPrice:9999,price:999,marketAmount:1e3},i={activityId:"",name:"这里显示商品名称",pic:"",price:999,originalPrice:9999,hh:99,mm:99,ss:99,timestamp:9999},s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";t=t>20?20:t;for(var r=[],s="default"===e?o:i,n=0;n<t;n+=1)r.push(Object(a["a"])(Object(a["a"])({},s),{},{id:"p".concat(n+1)}));return r},n=function(t){t=t>20?20:t;for(var e=[],r=0;r<t;r+=1)e.push(Object(a["a"])(Object(a["a"])({},o),{},{id:"p".concat(r+1),pic:"https://staticontent.shop2cn.cn/shop2cn/h5demo/prodcard-setting/default_product.png"}));return e};e["b"]=s;var d=s(3),p=s(4),c=s(6);s(10)},"0d88":function(t,e,r){"use strict";r.r(e);r("b0c0");var a=function(){var t=this,e=t._self._c;return t.showPage||t.isDev?e("div",{attrs:{id:"product-hot"}},[e("card-wrap",{attrs:{ylogParams:t.ylogParams,isDev:t.isDev,isActive:t.isActive,activityType:t.activityType,part:t.part,pageData:t.pageData,title:2===t.partProps.headType&&!t.partProps.hideName||1===t.partProps.headType?t.part.name||t.$t("skins.hot_sale_item"):"",partProps:t.partProps,headerPic:"marketing"===t.partProps.moduleStyle||t.partProps.v?t.partProps.modulePic:t.bannerList[0]&&t.bannerList[0].picUrl||"",headerLinkData:"marketing"===t.partProps.moduleStyle||t.partProps.v?t.partProps.moduleLinkData:t.bannerList[0],pageStyleMode:t.pageStyleMode}},[e("div",{attrs:{slot:"content"},slot:"content"},[4==t.partProps.styleType?e("product-list-single",{attrs:{isDev:t.isDev,ylogParams:t.ylogParams,partProps:t.partProps,prodList:t.prodList,prodEnv:"home"}}):2==t.partProps.styleType||3==t.partProps.styleType?e("product-list-card",{attrs:{prodType:t.partProps.styleType,isDev:t.isDev,ylogParams:t.ylogParams,prodList:t.prodList,partProps:t.partProps,prodEnv:"home"}}):e("product-list-scroll",{attrs:{isDev:t.isDev,ylogParams:t.ylogParams,prodList:t.prodList,partProps:t.partProps,prodEnv:"home"}})],1)])],1):t._e()},o=[],i=r("50d6"),s=i["a"],n=r("2877"),d=Object(n["a"])(s,a,o,!1,null,"7d5d9a1e",null);e["default"]=d.exports},"2a94":function(t,e,r){"use strict";r("e6a2")},"416c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAAEEfUpiAAAAAXNSR0IArs4c6QAABLVJREFUWAm1V01IJEcUftMzmOgGQUWTCfEmrih4W9iAsBNQJngIRBDEEBAUlBwUD3rLCrMexB/2IBtPniQgeAisRCIGd0EhCyFiJiqsmIuRMSgqGXfR+IP5vpqptnu6emaETcNM1Xvvez9V79XrapH0U1paesppgH8lJSU3HPlYWpIiDYggJVB5VlRUdH12dvZngPr19fUSj8dTWmTwt7+/r0aF0AY5KrcVFRX1l5eXvzsFnJ+cnAQsOnAKt7a2bBxNW4FA4LnNwSSZTDrJlAtyiHZJQNCFzaurqyvAql8D+MJmYuLZGy2E673j4+PKALTe3Nzc3KMAq5GDgwONkVAoFLa0kFwKGxoabMDV1dW+ZVPpSXFxsYvlAgwPD8vCwoILEEQWmJFH5C4vL7uEaicR6WNE/MolAcEAybvdCBBVVVXvQeHIGThBzgfGntCo5ikDVDw6OjrXzHxGRgVDn1rMgEm5oKBAmPjq6mqjPUT5EDn4x0Kh/WFCXFxcSG1trWxvb8vm5qa0trZ6YDBSzEQlPBIHo7u7W66vr2Vubs7BvZ361srk5KTU1NRIU1PTLdo7m7KzgPX8hWg+8WLMHKbx8PDwb9uAhpWXl3+EkF9zfZrnGKdQHN84aPMU0UR5LjCe4scz8ozZMqFdEQAcg+dvTUDykPu3wJTt7Oz8qzG2AQjusgf1WIpKvzotUP7lLhsI73FWL6OwuGlQfqhD0uPMzIyeGkeeGQos7rgJgRBlZWXFJFI8OL3HjWUlmtIlvb29Mj8/L2tra75GEonE05CvFILR0VHZ3d1VZwHePFBkpdHVcjwIMGZnZ9VZ6OrqMonDWSOgBo90f3+/LC4uegxg+b/5GrAsSzY2NqS9vV3W19c9ymRgCSPBwsLCDzF/kIlgD4hGo6ofZMo0jUx9rSrR9OLQIL8R3lVvVAZYTOzyfuBMPpTVe4V8lQWea92mM8GZNJTZTCs1304jjWBNjGhKC50jFJN0wk7s4jsJ0zy9PL5cvvKr2kw9OgP2eziMMbBMuZO224GTme5qP8CI55A6cfnOuW3BYPBLUzCuANKOf4XjvHtzvkEQh0D2EMgDZyB2DtlNWUn/l3MGQNv0QV+k+agAcA6+g9C3laegqX++7ni8l5aWpLLSLkYnJOecvuiTQF6xomD8lFPLAWCbiMVi0tLSoq6FPT09vu3CoeaZIiWf8+rKW2HEI82TwZtDX1+fYGtlYGDA2PSymHrJHTjFDnyQBZSXqLm5WUZGRnjvk4mJCZmens6phx14wxrIejfKaQWAtrY2GRsbE1S4DA0N5eU8bTcRwup/BmG+A+bwPjg4KB0dHXJ+fi5Mxerqag4Nt5i+A3wx44p5CML4bnariPDeOj4+Lo2NjYJ7rXR2dmZ95WTqaxrbnwyHw+UhvLcu0IDu43axgyDUB4cGmUbeOFG4EolEXB8lJqwfD87fIl336dvuhOnvg5cI4p203yzOX6HwI/p6aAegFfjxiCP1IwJ5p+0Yq96DzWZ9pdT+VCfUBEd8zsX5vi0rK3sfSk+4XU75XebUpQ3aos1M57Tl2QE/B+li/Qyr+AKYWhj+GCN/fBLg8zhvgf8cxfWC+VWSHH//AUCVDt2OasDqAAAAAElFTkSuQmCC"},"50d6":function(t,e,r){"use strict";(function(t){var a=r("5530"),o=(r("a9e3"),r("99af"),r("dd82")),i=r("cd92"),s=r("68a7"),n=r("732d"),d=r("a8f5"),p=r("ed08"),c=r("f354"),l=r("05c3");e["a"]={name:"ProductHot",components:{cardWrap:o["a"],productListCard:i["a"],productListSingle:s["a"],productListScroll:n["a"]},mixins:[c["a"]],props:{part:{type:Object},pageData:{type:Object},isDev:{type:Boolean,default:!1},pageStyleMode:{type:Number},isActive:{type:Boolean,default:!1},authCode:{type:String,default:""},activityType:{type:Number}},data:function(){return{prodList:[],bannerList:[],partProps:{styleType:3,hideName:!1,headType:this.isDev?2:1,prodType:this.isDev?2:1,btnDes:"",showProdIcon:!1,prodIconType:1,prodIconCustomUrl:""},showPage:!0}},computed:{partStyle:function(){var t="";return"marketing"===this.partProps.moduleStyle&&(this.partProps.modulePic&&(t+="background-image: url(".concat(this.partProps.modulePic||"",");")),this.partProps.moduleColor&&(t+="background-color: ".concat(this.partProps.moduleColor||"",";"))),t},hotStyle:function(){var t={};return"marketing"===this.partProps.moduleStyle?t["hot-marketing"]="marketing"===this.partProps.moduleStyle:t["hot-shadow"]=this.partProps.boxShadow,t}},watch:{part:"initDataRefresh"},mounted:function(){this.initDataRefresh({firstLoad:!0})},methods:{initDataRefresh:function(t){this.isDev&&(this.prodList=l["e"],this.handleDevUpdate()),!t.firstLoad&&this.isDev||(this.getHotProdData(),this.setPartProp())},handleClick:function(t){Object(d["b"])(t,this.ylogParams)},handleClickForScroll:function(e){t.ylog.send({action_type:"click",module_name:"product_list",sproductid:e}),e?t.navigateTo({url:"/pages/item/main?productId=".concat(e)}):"marketing"===this.partProps.moduleStyle?this.handleClick(this.partProps.moduleLinkData):this.handleClick(this.bannerList[0])},handleDevUpdate:function(){this.partProps=Object(a["a"])(Object(a["a"])({},this.partProps),this.part.partProps),this.prodList=Object(l["b"])(this.partProps.styleType),this.isDev&&(this.part&&this.part.subPart&&this.part.subPart.dataItems&&this.part.subPart.dataItems.length?this.bannerList=this.part.subPart.dataItems:this.bannerList=[])},setPartProp:function(){var t=this,e=p["a"].setPartProps({props:t.part.partProps,oldProps:t.partProps}),r=e.prodList,a=e.partProps;this.prodList=r,this.partProps=a},getHotProdData:function(){var e=this,r=this.part.partId||"";r?t.request({url:"/api/prod/shophomepartdata?PartId=".concat(r,"&pageSize=21&tokenCode=").concat(this.authCode||""),method:"get"}).then((function(t){e.prodList=t&&t.list||[],e.bannerList=t&&t.subPart&&t.subPart.list||[],e.showPage=0!==e.prodList.length})).catch((function(){e.showPage=!1})):this.showPage=!1},goPage:function(){Object(d["b"])(this.partProps.moduleLinkData||{},this.ylogParams)}}}}).call(this,r("7189")["default"])},"58b0":function(t,e,r){"use strict";(function(t){var a=r("5530"),o=(r("a9e3"),r("d3b7"),r("1041")),i=r("b565"),s=r("2f85"),n=r("ecd3");e["a"]={components:{productCard:n["a"]},mixins:[o["a"],i["a"],s["a"]],props:{prodList:{type:Array},partProps:{type:Object},prodType:{type:[Number,String],default:3},titleType:{type:String,default:"twoline"},cardDistance:{type:Number,default:12},priceLabel:{type:String,default:""},priceType:{type:String,default:"twoline"},cardType:{type:String,default:""},isShowTaxTag:{type:Boolean,value:!1},hidePriceControlType:{type:Boolean,value:!1},hasShadow:{type:Boolean,default:!1},showAddBtn:{type:[Boolean,String],default:!1},addBtnDisabled:{type:Boolean,default:!1},brandPriceControl:{type:Boolean,default:!1},prodEnv:{type:String,value:""},prodSkinData:{type:Object},ylogParams:{type:Object,default:function(){return{}}},navigatorParams:{type:Object},memberPic:{type:String},memberGrade:{type:Object,default:function(){return{}}},isDev:{type:Boolean,default:!1},showBrandDev:{type:Boolean,default:!1},pageType:{type:String,default:""}},data:function(){return{marketPricePlaced:!1,isFixedPlace:!1,brandNamePlaced:!1,prodListStyle:{},prodIconCustomUrl:"",showProdIcon:!1,hideSystemIcon:!1,prodWrapStyle:{}}},watch:{prodList:{immediate:!0,handler:function(e){var r=this;3===this.prodType?(t.store.isBrandPriceType?this.isFixedPlace=e.some((function(t){return t.discountInfo})):this.marketPricePlaced=e.some((function(t){return r.getMarketPrice(t)})),this.brandNamePlaced=e.some((function(t){return t.brandName}))):(this.isFixedPlace=!0,this.marketPricePlaced=!0)},deep:!0},partProps:{immediate:!0,handler:function(t){var e=this;t&&(this.prodListStyle=this.handleProdListStyle(t),this.$nextTick((function(){e.setProdAttr(t)})))},deep:!0},prodSkinData:{immediate:!0,handler:function(t){var e=this;t&&(this.prodListStyle=this.handleProdListStyle(t),this.$nextTick((function(){e.setProdAttr(t)})))},deep:!0}},methods:{handleAdd:function(t){this.$emit("handleAddBtn",t)},handleReduce:function(t){this.$emit("handleReduceBtn",t)},handleProdListStyle:function(e){var r=e||{},a=r.prodSpace,o=12;o="number"===typeof a?a:this.cardDistance||12;var i={margin:"-".concat(t.toRem(o/2),"rem")};return i},setProdAttr:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.prodIconCustomUrl=t.showProdIcon&&t.prodIconCustomUrl||"",this.showProdIcon=t.showProdIcon||!1,this.hideSystemIcon=t.hideSystemIcon||!1,this.handleProdClass(t,this.titleType),this.prodWrapStyle=Object(a["a"])({},this.handleProdWrapStyle(t))}}}}).call(this,r("7189")["default"])},"732d":function(t,e,r){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"scroll-wrap",style:[t.prodListStyle,t.prodThemeStyle]},[t.customProd?t._t("default"):t._e(),t.prodList&&!t.customProd?t._l(t.prodList,(function(r,a){return e("product-card",{key:a,staticClass:"scroll-wrap-card",attrs:{prodItem:r,titleType:t.titleType,marketPricePlaced:t.marketPricePlaced,isFixedPlace:t.isFixedPlace,ylogParams:t.ylogParams,cardType:t.cardType,prodEnv:t.prodEnv,brandNamePlaced:t.brandNamePlaced,isDev:t.isDev,priceLabel:t.priceLabel,navigatorParams:t.navigatorParams,memberPic:t.memberPic,memberGrade:t.memberGrade,prodIconCustomUrl:t.prodIconCustomUrl,showProdIcon:t.showProdIcon,hideSystemIcon:t.hideSystemIcon,prodWrapStyle:t.prodWrapStyle,productStyleClass:t.productStyleClass,priceStyleClass:t.priceStyleClass,luxuryStyle:t.luxuryStyle,productStyleData:t.productStyleData}})})):t._e(),e("div",{staticClass:"more-wrap"},[t.showMore&&(t.customProd||t.prodList.length>3)?e("div",{staticClass:"content",on:{click:function(e){return t.handleClick(0)}}},[e("div",{staticClass:"info"},[t._v(t._s(t.$t("components.product.see_more")))]),e("img",{staticClass:"icon",attrs:{src:r("416c")}})]):t._e()])],2)},o=[],i=r("8a16"),s=i["a"],n=(r("2a94"),r("2877")),d=Object(n["a"])(s,a,o,!1,null,"51093eb6",null);e["a"]=d.exports},"8a16":function(t,e,r){"use strict";(function(t){var a=r("5530"),o=(r("a9e3"),r("d3b7"),r("1041")),i=r("b565"),s=r("2f85"),n=r("ecd3");e["a"]={components:{"product-card":n["a"]},mixins:[o["a"],i["a"],s["a"]],props:{prodList:{type:Array},cardDistance:{type:Number,default:12},partProps:{type:Object},ylPage:{type:Object},showMore:{type:Boolean},customProd:{type:Boolean},ylogParams:{type:Object,default:function(){return{}}},cardType:{type:String,value:""},priceLabel:{type:String,value:""},prodEnv:{type:String,value:""},prodSkinData:{type:Object},memberPic:{type:String},memberGrade:{type:Object,default:function(){return{}}},isDev:{type:Boolean},navigatorParams:{type:Object}},data:function(){return{prodListStyle:"",marketPricePlaced:!1,isFixedPlace:!1,brandNamePlaced:!1,titleType:"twoline",prodWrapStyle:{},showProdIcon:!1,hideSystemIcon:!1,prodIconCustomUrl:""}},watch:{prodList:{deep:!0,immediate:!0,handler:function(e){var r=this;e&&(t.store.isBrandPriceType?this.isFixedPlace=e.some((function(t){return t.discountInfo})):this.marketPricePlaced=e.some((function(t){return r.getMarketPrice(t)})),this.brandNamePlaced=e.some((function(t){return t.brandName})))}},partProps:{immediate:!0,handler:function(t){var e=this;t&&(this.prodListStyle=this.handleProdListStyle(t),this.$nextTick((function(){e.setProdAttr(t)})))},deep:!0},prodSkinData:{immediate:!0,handler:function(t){var e=this;t&&(this.prodListStyle=this.handleProdListStyle(t),this.$nextTick((function(){e.setProdAttr(t)})))},deep:!0}},methods:{handleClick:function(t){this.$emit("handleClick",t)},handleProdListStyle:function(e){var r=e||{},a=r.prodSpace,o=12;o="number"===typeof a?a:this.cardDistance||12;var i={margin:"-".concat(t.toRem(o/2),"rem")};return i},setProdAttr:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.prodIconCustomUrl=t.showProdIcon&&t.prodIconCustomUrl||"",this.showProdIcon=t.showProdIcon||!1,this.hideSystemIcon=t.hideSystemIcon||!1,this.handleProdClass(t,this.titleType),this.prodWrapStyle=Object(a["a"])(Object(a["a"])({},this.handleProdWrapStyle(t)),this.handleScrollCardStyle(t))},handleScrollCardStyle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.scrollType,a=void 0===r?3:r,o=e.moduleStyleMode,i=void 0===o?"normal":o,s={};switch(a){case 1:s.width="".concat(t.toRem("card"===i?284:300),"rem");break;case 2:s.width="".concat(t.toRem("card"===i?224:240),"rem");break;case 3:s.width="".concat(t.toRem("card"===i?192:200),"rem");break;default:s.width="".concat(t.toRem("card"===i?284:300),"rem");break}return s}}}}).call(this,r("7189")["default"])},b777:function(t,e,r){"use strict";r("d78f")},cd92:function(t,e,r){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"prodlist",style:[t.prodListStyle,t.prodThemeStyle]},t._l(t.prodList,(function(r){return e("div",{key:r.id,class:["container",{"container-type2":2==t.prodType}]},[e("product-card",{attrs:{prodItem:r,titleType:t.titleType,priceLabel:t.priceLabel,isFixedPlace:t.isFixedPlace,cardType:t.cardType,marketPricePlaced:t.marketPricePlaced,hasShadow:t.hasShadow,isShowTaxTag:t.isShowTaxTag,prodType:t.prodType,showAddBtn:t.showAddBtn,addBtnDisabled:t.addBtnDisabled,priceType:2==t.prodType?"normal":t.priceType,hidePriceControlType:t.hidePriceControlType,ylogParams:t.ylogParams,brandPriceControl:t.brandPriceControl,prodEnv:t.prodEnv,brandNamePlaced:t.brandNamePlaced,isDev:t.isDev,showBrandDev:t.showBrandDev,navigatorParams:t.navigatorParams,prodIconCustomUrl:t.prodIconCustomUrl,memberPic:t.memberPic,memberGrade:t.memberGrade,showProdIcon:t.showProdIcon,hideSystemIcon:t.hideSystemIcon,prodWrapStyle:t.prodWrapStyle,productStyleClass:t.productStyleClass,priceStyleClass:t.priceStyleClass,luxuryStyle:t.luxuryStyle,productStyleData:t.productStyleData,productNum:r.productNum,pageType:t.pageType},on:{handleAddBtn:t.handleAdd,handleReduceBtn:t.handleReduce}})],1)})),0)},o=[],i=r("58b0"),s=i["a"],n=(r("b777"),r("2877")),d=Object(n["a"])(s,a,o,!1,null,"d4f25bd2",null);e["a"]=d.exports},d78f:function(t,e,r){},e6a2:function(t,e,r){}}]);