(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["img-text","space"],{"02de":function(t,e,i){"use strict";function a(t){var e=window.getComputedStyle(t),i="none"===e.display,a=null===t.offsetParent&&"fixed"!==e.position;return i||a}i.d(e,"a",(function(){return a}))},"0c30":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"parent-container",attrs:{id:"img-text"}},[e("timingWrap",{attrs:{isPreview:t.isPreview,part:t.part}}),e("inner-wrap",{attrs:{partProps:t.partProps,pageStyleMode:t.pageStyleMode,isDev:t.isDev,isActive:t.isActive}},[e("div",{class:[{"wrap-scroll":"scroll"===t.partProps.displayType&&(2==t.partProps.styleType||3==t.partProps.styleType||4==t.partProps.styleType||5==t.partProps.styleType)}]},[t.dataList.length>0?e("div",{class:["wrap",{"wrap-hidespace":t.hideSpaceAround},{"right-angle":t.rightAngle}],style:t.wrapStyle},[10===t.partProps.styleType?["swiper"!==t.partProps.displayType?t._l(t.dataList,(function(i,a){return e("div",{key:a,staticClass:"hot-img",style:[t.spaceStyle,t.imgStyle]},[i.picUrl?e("hotpotImg",{attrs:{item:i,hotAreasWidth:t.hotAreasWidth,isDev:t.isDev},on:{handleClick:t.handleClick}}):t.isDev?e("div",{staticClass:"image-demo",style:t.imgStyle}):t._e()],1)})):t._e(),"swiper"===t.partProps.displayType?[e("Swipe",{ref:"swipeRef",staticStyle:{width:"100%"},attrs:{autoplay:t.partProps.isAutoLoop?3e3:0,"indicator-color":"white"}},t._l(t.dataList,(function(i,a){return e("SwipeItem",{key:a},[e("div",{staticClass:"hot-img",style:[t.spaceStyle,t.imgStyle]},[i.picUrl?e("hotpotImg",{attrs:{item:i,hotAreasWidth:t.hotAreasWidth,isDev:t.isDev},on:{handleClick:t.handleClick}}):t.isDev?e("div",{staticClass:"image-demo",style:t.imgStyle}):t._e()],1)])})),1)]:t._e()]:t._l(t.dataList,(function(i,a){return e("div",{key:a,class:t.wrapTypeClass(t.partProps&&t.partProps.styleType),style:t.spaceStyle},[t.isDev?[i.picUrl?e("specialImage",{staticClass:"image",style:t.imgStyle,attrs:{url:i.picUrl}}):e("div",{staticClass:"image-demo",style:t.imgStyle})]:[i.picUrl?e("specialImage",{staticClass:"image",style:t.imgStyle,attrs:{url:i.picUrl},on:{tap:function(e){return t.handleClick(i)}}}):t._e()]],2)}))],2):t._e()])])],1)},s=[],n=i("29b9"),r=n["a"],o=(i("f225"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"36cab69a",null);e["default"]=c.exports},"120f":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base-wrap"},[t.showSpaceTop?e("space",{attrs:{isDev:t.isDev,isActive:t.isActive,position:"top",spaceSize:t.partProps.spaceTop,pageStyleMode:t.pageStyleMode,spaceType:t.spaceType}}):t._e(),t._t("default"),e("space",{attrs:{isDev:t.isDev,isActive:t.isActive,position:"bottom",spaceSize:t.partProps.spaceBottom,pageStyleMode:t.pageStyleMode,spaceType:t.spaceType}})],2)},s=[],n=(i("a9e3"),i("eca1")),r={components:{space:n["default"]},props:{partProps:{type:Object},showSpaceTop:{type:Boolean,default:!0},spaceType:{type:String,default:"large"},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},pageStyleMode:{type:Number,default:1}}},o=r,c=(i("eeef"),i("2877")),l=Object(c["a"])(o,a,s,!1,null,"540e39ed",null);e["a"]=l.exports},1974:function(t,e,i){"use strict";i("2930")},2532:function(t,e,i){"use strict";var a=i("23e7"),s=i("e330"),n=i("5a34"),r=i("1d80"),o=i("577e"),c=i("ab13"),l=s("".indexOf);a({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~l(o(r(this)),o(n(t)),arguments.length>1?arguments[1]:void 0)}})},2909:function(t,e,i){"use strict";i.d(e,"a",(function(){return c}));var a=i("6b75");function s(t){if(Array.isArray(t))return Object(a["a"])(t)}i("a4d3"),i("e01a"),i("d3b7"),i("d28b"),i("3ca3"),i("ddb0"),i("a630");function n(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var r=i("06c5");i("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return s(t)||n(t)||Object(r["a"])(t)||o()}},2930:function(t,e,i){},"29b9":function(t,e,i){"use strict";(function(t){var a=i("2909"),s=i("5530"),n=(i("4b0a"),i("2bb1")),r=(i("7844"),i("5596")),o=(i("a9e3"),i("ef16")),c=i("b023"),l=i("69c5"),p=i("8a76"),u=i("a8f5"),h=i("f354"),d=i("eca1");function f(t){return t/32}e["a"]={name:"ImgText",components:{space:d["default"],Swipe:r["a"],SwipeItem:n["a"],"inner-wrap":o["a"],specialImage:c["a"],hotpotImg:l["a"],timingWrap:p["a"]},mixins:[h["a"]],props:{part:{type:Object},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},pageStyleMode:{type:Number},activityId:{type:Number},activityType:{type:Number},isPreview:{type:Number,default:0}},data:function(){return{dataList:[],partProps:this.part.partProps||{styleType:1},hotAreasWidth:710,hideSpaceAround:!1,rightAngle:!1,wrapStyle:{},spaceStyle:{},imgStyle:{}}},watch:{part:"getPartData"},mounted:function(){this.getPartData()},methods:{handleClick:function(t){Object(u["b"])(this.getLinkData(t),this.ylogParams)},wrapTypeClass:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return"wrap-type wrap-type-".concat(t)},getPartData:function(){var t=this;this.getDatas((function(e){t.dataList=e&&e.list||[],t.isDev?(e.partProps&&t.handlePartprops(Object(s["a"])(Object(s["a"])({},t.partProps),e.partProps)),t.formatList(t.partProps.styleType)):t.handlePartprops(t.part.partProps)}))},formatList:function(t){var e=Object(a["a"])(this.dataList);if("number"===typeof t&&10!==t)while(e.length<t)e.push({picUrl:"",linkType:0,linkVal:""});else if(10===t)while(e.length<1)e.push({picUrl:"",linkType:0,linkVal:""});this.dataList=e},handlePartprops:function(e){if(e){var i=Object(s["a"])({},e||{styleType:1}),a=i.hideSpaceAround&&(1===i.styleType||10===i.styleType)||!1;if(a||1!=this.pageStyleMode||("number"!==typeof i.spaceTop&&(i.spaceTop=32),"number"!==typeof i.spaceBottom&&(i.spaceBottom=24)),a)i.innerAngle="right",i.spaceRight=0,i.spaceLeft=0;else{var n=t.skinManager.getHomeDefalutMargin()||24;"number"!==typeof i.spaceLeft&&(i.spaceLeft=n),"number"!==typeof i.spaceRight&&(i.spaceRight=n)}var r=12;"number"===typeof i.innerSpace&&(r=i.innerSpace);var o={margin:"0 -".concat(f(r/2),"rem")},c={padding:"0 ".concat(f(r/2),"rem")};"scroll"!==i.displayType||2!==i.styleType&&3!==i.styleType&&4!==i.styleType&&5!==i.styleType||(o={},c={marginRight:"".concat(f(r),"rem")});var l=i.innerAngle,p=i.innerAngleDegree;"round"===l&&"number"===typeof p?this.imgStyle.borderRadius="".concat(t.toRem(p),"rem"):"right"===l&&(this.imgStyle.borderRadius=0),this.isDev&&this.$refs.swipeRef&&this.$refs.swipeRef.resize(),i.hasOwnProperty("isAutoLoop")||(i.isAutoLoop=!1),this.hideSpaceAround=a,this.rightAngle="right"===i.innerAngle,this.hotAreasWidth=f(750-i.spaceLeft-i.spaceRight),this.wrapStyle=o,this.spaceStyle=c,this.partProps=i}}}}}).call(this,i("7189")["default"])},"2bb1":function(t,e,i){"use strict";var a=i("c31d"),s=i("d282"),n=i("9884"),r=Object(s["a"])("swipe-item"),o=r[0],c=r[1];e["a"]=o({mixins:[Object(n["a"])("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},e=this.parent,i=e.size,a=e.vertical;return i&&(t[a?"height":"width"]=i+"px"),this.offset&&(t.transform="translate"+(a?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,e=this.inited,i=this.parent,a=this.mounted;if(!i.lazyRender||e)return!0;if(!a)return!1;var s=i.activeIndicator,n=i.count-1,r=0===s&&i.loop?n:s-1,o=s===n&&i.loop?0:s+1,c=t===s||t===r||t===o;return c&&(this.inited=!0),c}},render:function(){var t=arguments[0];return t("div",{class:c(),style:this.style,on:Object(a["a"])({},this.$listeners)},[this.shouldRender&&this.slots()])}})},"2bde":function(t,e,i){"use strict";i("9528")},"2cb2":function(t,e,i){},"3c9b":function(t,e,i){"use strict";(function(t){var a=i("5530"),s=(i("a9e3"),i("120f"));e["a"]={components:{baseWrap:s["a"]},props:{partProps:{type:Object},spaceType:{type:String,default:"large"},pageStyleMode:{type:Number,default:1},showSpaceTop:{type:Boolean,default:!0},showBg:{type:Boolean},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1},hideSpace:{type:Boolean}},data:function(){return{props:{},spaceStyle:{}}},computed:{innerStyle:function(){var t={};return this.spaceStyle&&(t=Object(a["a"])(Object(a["a"])({},t),this.spaceStyle)),this.showBg&&(t=Object(a["a"])(Object(a["a"])({},t),this.cardBgStyle(this.props))),t}},watch:{partProps:{immediate:!0,handler:function(e){if(e){var i=Object(a["a"])({},e),s={};if(this.hideSpace)i.spaceLeft=0,i.spaceRight=0;else{var n=t.skinManager.getHomeDefalutMargin()||24;"number"!==typeof i.spaceLeft&&(i.spaceLeft=n),"number"!==typeof i.spaceRight&&(i.spaceRight=n)}"number"===typeof i.spaceLeft&&(s={paddingLeft:"".concat(t.toRem(i.spaceLeft),"rem")}),"number"===typeof i.spaceRight&&(s=Object(a["a"])(Object(a["a"])({},s),{},{paddingRight:"".concat(t.toRem(i.spaceRight),"rem")})),this.props=i,this.spaceStyle=s}},deep:!0}},methods:{cardBgStyle:function(){var t={};return this.partProps&&!this.partProps.hideModuleColor&&(t.backgroundColor=this.partProps.moduleColor||"white"),t}}}}).call(this,i("7189")["default"])},"3f8f":function(t,e,i){},4598:function(t,e,i){"use strict";(function(t){i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return l}));var a=i("a142"),s=Date.now();function n(t){var e=Date.now(),i=Math.max(0,16-(e-s)),a=setTimeout(t,i);return s=e+i,a}var r=a["g"]?t:window,o=r.requestAnimationFrame||n;r.cancelAnimationFrame||r.clearTimeout;function c(t){return o.call(r,t)}function l(t){c((function(){c(t)}))}}).call(this,i("c8ba"))},"4b0a":function(t,e,i){"use strict";i("68ef"),i("786d")},5596:function(t,e,i){"use strict";var a=i("d282"),s=i("02de"),n=i("1325"),r=i("4598"),o=i("482d"),c=i("3875"),l=i("9884"),p=i("5fbe"),u=Object(a["a"])("swipe"),h=u[0],d=u[1];e["a"]=h({mixins:[c["a"],Object(l["b"])("vanSwipe"),Object(p["a"])((function(t,e){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),e?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var e=this.vertical?"height":"width",i=this.vertical?"width":"height";t[e]=this.trackSize+"px",t[i]=this[i]?this[i]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!Object(s["a"])(this.$el)){clearTimeout(this.timer);var e={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=e,this.swiping=!0,this.active=t,this.computedWidth=+this.width||e.width,this.computedHeight=+this.height||e.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&(Object(n["c"])(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,e=this.delta,i=Date.now()-this.touchStartTime,a=e/i,s=Math.abs(a)>.25||Math.abs(e)>t/2;if(s&&this.isCorrectDirection){var n=this.vertical?this.offsetY:this.offsetX,r=0;r=this.loop?n>0?e>0?-1:1:0:-Math[e>0?"ceil":"floor"](e/t),this.move({pace:r,emitChange:!0})}else e&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var e=this.active,i=this.count,a=this.maxCount;return t?this.loop?Object(o["c"])(e+t,-1,i):Object(o["c"])(e+t,0,a):e},getTargetOffset:function(t,e){void 0===e&&(e=0);var i=t*this.size;this.loop||(i=Math.min(i,-this.minOffset));var a=e-i;return this.loop||(a=Object(o["c"])(a,this.minOffset,0)),a},move:function(t){var e=t.pace,i=void 0===e?0:e,a=t.offset,s=void 0===a?0:a,n=t.emitChange,r=this.loop,o=this.count,c=this.active,l=this.children,p=this.trackSize,u=this.minOffset;if(!(o<=1)){var h=this.getTargetActive(i),d=this.getTargetOffset(h,s);if(r){if(l[0]&&d!==u){var f=d<u;l[0].offset=f?p:0}if(l[o-1]&&0!==d){var m=d>0;l[o-1].offset=m?-p:0}}this.active=h,this.offset=d,n&&h!==c&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(r["a"])((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),Object(r["a"])((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,e){var i=this;void 0===e&&(e={}),this.correctPosition(),this.resetTouchStatus(),Object(r["a"])((function(){var a;a=i.loop&&t===i.count?0===i.active?0:t:t%i.count,e.immediate?Object(r["a"])((function(){i.swiping=!1})):i.swiping=!1,i.move({pace:a-i.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,e=this.autoplay;e>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),e))},genIndicator:function(){var t=this,e=this.$createElement,i=this.count,a=this.activeIndicator,s=this.slots("indicator");return s||(this.showIndicators&&i>1?e("div",{class:d("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(i)).map((function(i,s){return e("i",{class:d("indicator",{active:s===a}),style:s===a?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:d()},[t("div",{ref:"track",style:this.trackStyle,class:d("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}})},"5c03":function(t,e,i){},"64d2":function(t,e,i){},"69c5":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"wrap-areas"},[t.isDev?[t.item.picUrl?e("div",{staticClass:"image"},[e("specialImage",{attrs:{url:t.item.picUrl},on:{load:t.load,tap:t.handleDefaultTap}})],1):e("div",{staticClass:"image-demo"})]:[t.item.picUrl?e("div",{staticClass:"image"},[e("specialImage",{attrs:{url:t.item.picUrl},on:{load:t.load,tap:t.handleDefaultTap}})],1):t._e()],t.item.hotAreas&&t.item.hotAreas.length>0?e("div",{staticClass:"areas",style:{width:"".concat(t.hotAreasWidth,"rem")},on:{click:function(e){return e.stopPropagation(),t.handleDefaultTap.apply(null,arguments)}}},[t._l(t.item.hotAreas,(function(i,a){return[e("div",{key:a,staticClass:"areas__item",style:{top:"".concat(i.areaY*t.hotAreasWidth,"rem"),left:"".concat(i.areaX*t.hotAreasWidth,"rem"),width:"".concat(i.areaWidth*t.hotAreasWidth,"rem"),height:"".concat(i.areaHeight*t.hotAreasWidth,"rem")},on:{click:function(e){return e.stopPropagation(),t.handleClick(i)}}})]}))],2):t._e()],2)])},s=[],n=i("d63b"),r=n["a"],o=(i("1974"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"a27cd3a4",null);e["a"]=c.exports},7844:function(t,e,i){"use strict";i("68ef"),i("8270")},"786d":function(t,e,i){},8270:function(t,e,i){},"8a76":function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return t.isPreview&&t.getTimingDesc(t.part)?e("div",{staticClass:"timing-wrap"},[t._v(t._s(t.getTimingDesc(t.part)))]):t._e()},s=[],n=(i("99af"),{props:["isPreview","part"],data:function(){return{}},methods:{getTimingDesc:function(t){var e=t.beginTime,i=t.endTime,a="";return e&&i?a="定时发布：".concat(e," 开始，").concat(i," 结束"):e?a="定时发布：".concat(e," 开始"):i&&(a="定时发布：".concat(i," 结束")),a}}}),r=n,o=(i("9761"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"ca5331e4",null);e["a"]=c.exports},9528:function(t,e,i){},9587:function(t,e,i){"use strict";i("5c03")},9761:function(t,e,i){"use strict";i("3f8f")},9853:function(t,e,i){},b023:function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return t.ignoreLazy?e("div",{staticClass:"special-img"},[t.norImgUrl?e("img",{ref:"pic",staticClass:"img img--normal",attrs:{src:t.norImgUrl},on:{load:t.handleImgLoad,click:function(e){return e.stopPropagation(),t.handleTap.apply(null,arguments)}}}):t._e(),t.gifImgUrl?e("img",{staticClass:"img img--gif",attrs:{src:t.gifImgUrl},on:{click:function(e){return e.stopPropagation(),t.handleTap.apply(null,arguments)}}}):t._e()]):e("div",{staticClass:"special-img"},[t.norImgUrl?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.norImgUrl,expression:"norImgUrl"}],ref:"pic",staticClass:"img img--normal",on:{load:t.handleImgLoad,click:function(e){return e.stopPropagation(),t.handleTap.apply(null,arguments)}}}):t._e(),t.gifImgUrl?e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.gifImgUrl,expression:"gifImgUrl"}],staticClass:"img img--gif",on:{click:function(e){return e.stopPropagation(),t.handleTap.apply(null,arguments)}}}):t._e()])},s=[],n=i("fae7"),r=n["a"],o=(i("b277"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"5ecb013a",null);e["a"]=c.exports},b277:function(t,e,i){"use strict";i("9853")},d63b:function(t,e,i){"use strict";(function(t){i("a9e3");var a=i("b023");e["a"]={components:{specialImage:a["a"]},props:{item:{type:Object,default:function(){return{}}},hotAreasWidth:{type:Number,default:t.toRem(750)},isDev:{type:Boolean,default:!1}},methods:{handleClick:function(t){this.$emit("handleClick",t)},handleDefaultTap:function(){this.$emit("handleDefaultTap")},load:function(t){this.$emit("load",t)}}}}).call(this,i("7189")["default"])},e49e:function(t,e,i){"use strict";(function(t){i("a9e3");var a=[{small:{top:0,bottom:24},middle:{top:0,bottom:0},large:{top:0,bottom:0}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}},{small:{top:0,bottom:24},middle:{top:0,bottom:24},large:{top:0,bottom:24}},{small:{top:0,bottom:32},middle:{top:0,bottom:32},large:{top:0,bottom:48}}];e["a"]={props:{pageStyleMode:{type:Number,value:1},position:{type:String,default:"top"},spaceType:{type:String,default:"large"},spaceSize:{type:[Number,String],default:""},offset:{type:Number,default:0},isDev:{type:Boolean,default:!1},isActive:{type:Boolean,default:!1}},data:function(){return{}},computed:{heightCalc:function(){var e=0;if("number"===typeof this.spaceSize)e=this.spaceSize;else{var i=a[(this.pageStyleMode||1)-1];e=i[this.spaceType||"large"][this.position||"top"]||0}return this.aaa=e-this.offset,"".concat(t.toRem(e-this.offset),"rem")}}}}).call(this,i("7189")["default"])},eca1:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{class:["container",{"container--dev":t.isDev&&t.isActive}],style:{height:t.heightCalc}})},s=[],n=i("e49e"),r=n["a"],o=(i("2bde"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"5235f330",null);e["default"]=c.exports},eeef:function(t,e,i){"use strict";i("64d2")},ef16:function(t,e,i){"use strict";var a=function(){var t=this,e=t._self._c;return e("base-wrap",{attrs:{partProps:t.props,spaceType:t.spaceType,showSpaceTop:t.showSpaceTop,pageStyleMode:t.pageStyleMode,isDev:t.isDev,isActive:t.isActive}},[e("div",{staticClass:"wrap",style:t.innerStyle},[t._t("default")],2)])},s=[],n=i("3c9b"),r=n["a"],o=(i("9587"),i("2877")),c=Object(o["a"])(r,a,s,!1,null,"82a34ad8",null);e["a"]=c.exports},f225:function(t,e,i){"use strict";i("2cb2")},f354:function(t,e,i){"use strict";(function(t){var a=i("5530"),s=(i("caad"),i("2532"),i("d3b7"),i("b00c")),n=function(){},r={props:{isDev:{type:Boolean,default:!1},pageData:{type:Object,default:function(){return{}}},ylogParams:{type:Object,default:function(){return{}}}},methods:{getLinkData:function(t){var e=this.pageData&&this.pageData.tempCode||"";return[s["c"].BRAND_SUBJECT,s["c"].INBUY_SUBJECT].includes(e)&&(t.partId=this.part.partId||"",s["c"].BRAND_SUBJECT===e&&(t.brandId=this.pageData.brandId||""),s["c"].INBUY_SUBJECT===e&&(t.activityId=this.activityId||"",t.activityType=this.activityType||"")),t},fetchPartData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.part,s=i.partId,n=i.dataItems,r=i.partProps;return this.isDev?Promise.resolve({list:n||[],partProps:r}):s?t.request({url:"/api/prod/shophomepartdata",method:"get",params:Object(a["a"])(Object(a["a"])({},e),{},{PartId:s})}):Promise.reject({message:"partId 不存在"})},fetchPartCenterData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.part,s=i.dataItems,n=i.partProps;return this.isDev?Promise.resolve({list:s||[],partProps:n}):t.request({url:"/api/prod/shopcouponcentercouponlist",method:"get",params:Object(a["a"])({},e)})},getDatas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,a=this.part,s=a.partId,r=a.dataItems,o=a.partProps;this.isDev?e({list:r||[],partProps:o}):s?t.request({url:"/api/prod/shophomepartdata?PartId=".concat(s),method:"get"}).then((function(t){e(t||{})})).catch((function(t){i(t)})):i({message:"partId 不存在"})}}};e["a"]=r}).call(this,i("7189")["default"])},fae7:function(t,e,i){"use strict";(function(t){var a=i("a026"),s=i("caf9");a["default"].use(s["a"]),e["a"]={props:{dataset:{type:Object,default:function(){return{}}},ignoreLazy:{type:Boolean,default:!1},url:{type:String}},data:function(){return{norImgUrl:"",gifImgUrl:""}},watch:{url:{immediate:!0,handler:function(e){var i=t.parseImgUrl(e),a=i.imgUrl,s=i.maskUrl,n=void 0===s?"":s;this.norImgUrl=a,this.gifImgUrl=n}}},methods:{handleImgLoad:function(){this.$emit("load",this.$refs.pic.clientHeight),this.$emit("updateImageHeight",{height:this.$refs.pic.naturalHeight,width:this.$refs.pic.naturalWidth},this.dataset)},handleTap:function(t){this.$emit("tap",t)}}}}).call(this,i("7189")["default"])}}]);