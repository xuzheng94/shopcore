(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["product-relevance~search-relevance"],{"02de":function(t,e,i){"use strict";function s(t){var e=window.getComputedStyle(t),i="none"===e.display,s=null===t.offsetParent&&"fixed"!==e.position;return i||s}i.d(e,"a",(function(){return s}))},"04d1":function(t,e,i){var s=i("342f"),n=s.match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},"0aeb":function(t,e,i){"use strict";i("6c95")},"0bc9":function(t,e,i){},"0cc8":function(t,e,i){"use strict";i("68ef"),i("ae9e")},"13cb":function(t,e,i){"use strict";i("99af"),i("b0c0"),i("4e82"),i("4de4"),i("d3b7");var s=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"filter",style:{background:t.searchModuleColor}},[t.isShowSticky?e("van-sticky",[e("form",{class:["filter-search",{"search-page":"search"===t.source}],attrs:{action:"/"}},[e("div",{on:{click:t.clickSearch}},[e("van-search",{attrs:{"show-action":"default"==t.sourcePage||!t.isShowProduct,placeholder:t.$t("components.filter.enter_search_keywords"),background:t.searchModuleColor},on:{search:t.handleSearch,clear:t.handleCancel,input:t.handleInput,focus:t.handleFocus},scopedSlots:t._u([{key:"left-icon",fn:function(){return[e("div",{staticClass:"search-icon"},[e("span",{staticClass:"iconfont icon-search"})])]},proxy:!0},{key:"action",fn:function(){return[e("div",{staticClass:"search-cancel",on:{click:t.handleCancelBtn}},[t._v(t._s(t.$t("common.cancel")))])]},proxy:!0}],null,!1,3718501664),model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}}),t.purchasingPlaceholder?e("div",{staticClass:"filter-search-userid"},[t._v(" "+t._s(t.purchasingPlaceholder)+" ")]):t._e()],1)])]):[e("form",{class:["filter-search",{"search-page":"search"===t.source}],attrs:{action:"/"}},[e("div",{on:{click:t.clickSearch}},[e("van-search",{attrs:{"show-action":"default"==t.sourcePage||!t.isShowProduct,placeholder:t.$t("components.filter.enter_search_keywords"),background:t.searchModuleColor},on:{search:t.handleSearch,clear:t.handleCancel,input:t.handleInput,focus:t.handleFocus},scopedSlots:t._u([{key:"left-icon",fn:function(){return[e("div",{staticClass:"search-icon"},[e("span",{staticClass:"iconfont icon-search"})])]},proxy:!0},{key:"action",fn:function(){return[e("div",{staticClass:"search-cancel",on:{click:t.handleCancelBtn}},[t._v(t._s(t.$t("common.cancel")))])]},proxy:!0}]),model:{value:t.searchKeyword,callback:function(e){t.searchKeyword=e},expression:"searchKeyword"}})],1)])],t._t("searchBrand"),t.isShowProduct&&t.isShowOtherFilter?e("van-sticky",{class:[{"filter-static":!t.isFilterFixedActionFlag}],staticStyle:{"min-height":"35px"},attrs:{"offset-top":"search"===t.source?46:54}},[e("div",{staticClass:"filter-wrap",style:"borderColor:".concat(t.filterDividerColor,";background:").concat(t.filterModuleColor)},t._l(t.filters,(function(i,s){return e("div",{key:i.name,class:["filter_item","sort",{active:i.active},{sort:i.sort}],style:"display: flex;justify-content: center;align-items: center;color:".concat(i.active?t.filterActiveColor:t.filterTextColor),on:{click:function(e){return t.tabFilter(s)}}},[e("span",[t._v(t._s(i.name))]),i.sort?e("div",{staticClass:"icon"},[e("div",{staticClass:"icon-sort"},[e("span",{class:["iconfont","icon-shaixuanjiantou",{active:!i.isDesc}],style:"color:".concat(!i.isDesc&&i.active?t.filterActiveColor:t.filterTextColor)}),e("span",{class:["iconfont","icon-shaixuanjiantou",{active:i.isDesc}],style:"color:".concat(i.isDesc&&i.active?t.filterActiveColor:t.filterTextColor)})])]):i.filter?e("div",{staticClass:"icon"},[e("span",{staticClass:"iconfont icon-shaixuan"})]):t._e()])})),0)]):t._e()],2),e("popFilter",{attrs:{filterList:t.filterList,selectedList:t.selectedList},on:{filterHide:t.onFilterHide,confirm:t.onFilterConfirm,reset:t.onFilterReset},model:{value:t.showFilterPop,callback:function(e){t.showFilterPop=e},expression:"showFilterPop"}})],1)},n=[],r=i("7f3c"),a=r["a"],c=(i("2be1e"),i("19d2"),i("2877")),o=Object(c["a"])(a,s,n,!1,null,"9a9c3e26",null);e["a"]=o.exports},1437:function(t,e,i){"use strict";var s=i("c31d"),n=i("d282"),r=i("4598"),a=i("9884"),c=i("7744"),o=i("dfaf"),l=Object(n["a"])("collapse-item"),h=l[0],d=l[1],u=["title","icon","right-icon"];e["a"]=h({mixins:[Object(a["a"])("vanCollapse")],props:Object(s["a"])({},o["a"],{name:[Number,String],disabled:Boolean,lazyRender:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{currentName:function(){var t;return null!=(t=this.name)?t:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent,i=e.value,s=e.accordion;return s?i===this.currentName:i.some((function(e){return e===t.currentName}))}},created:function(){this.show=this.expanded,this.inited=this.expanded},watch:{expanded:function(t,e){var i=this;if(null!==e){t&&(this.show=!0,this.inited=!0);var s=t?this.$nextTick:r["b"];s((function(){var e=i.$refs,s=e.content,n=e.wrapper;if(s&&n){var a=s.offsetHeight;if(a){var c=a+"px";n.style.height=t?0:c,Object(r["a"])((function(){n.style.height=t?c:0}))}else i.onTransitionEnd()}}))}}},methods:{onClick:function(){this.disabled||this.toggle()},toggle:function(t){void 0===t&&(t=!this.expanded);var e=this.parent,i=this.currentName,s=e.accordion&&i===e.value,n=s?"":i;this.parent.switch(n,t)},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height="":this.show=!1},genTitle:function(){var t=this,e=this.$createElement,i=this.border,n=this.disabled,r=this.expanded,a=u.reduce((function(e,i){return t.slots(i)&&(e[i]=function(){return t.slots(i)}),e}),{});return this.slots("value")&&(a.default=function(){return t.slots("value")}),e(c["a"],{attrs:{role:"button",tabindex:n?-1:0,"aria-expanded":String(r)},class:d("title",{disabled:n,expanded:r,borderless:!i}),on:{click:this.onClick},scopedSlots:a,props:Object(s["a"])({},this.$props)})},genContent:function(){var t=this.$createElement;if(this.inited||!this.lazyRender)return t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:d("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:d("content")},[this.slots()])])}},render:function(){var t=arguments[0];return t("div",{class:[d({border:this.index&&this.border})]},[this.genTitle(),this.genContent()])}})},"19d2":function(t,e,i){"use strict";i("0bc9")},"2be1e":function(t,e,i){"use strict";i("3d9c")},3104:function(t,e,i){"use strict";var s=i("02de"),n=i("ea8e"),r=i("d282"),a=i("a142"),c=i("a8c1"),o=i("5fbe"),l=Object(r["a"])("sticky"),h=l[0],d=l[1];e["a"]=h({mixins:[Object(o["a"])((function(t,e){if(this.scroller||(this.scroller=Object(c["d"])(this.$el)),this.observer){var i=e?"observe":"unobserve";this.observer[i](this.$el)}t(this.scroller,"scroll",this.onScroll,!0),this.onScroll()}))],props:{zIndex:[Number,String],container:null,offsetTop:{type:[Number,String],default:0}},data:function(){return{fixed:!1,height:0,transform:0}},computed:{offsetTopPx:function(){return Object(n["b"])(this.offsetTop)},style:function(){if(this.fixed){var t={};return Object(a["c"])(this.zIndex)&&(t.zIndex=this.zIndex),this.offsetTopPx&&this.fixed&&(t.top=this.offsetTopPx+"px"),this.transform&&(t.transform="translate3d(0, "+this.transform+"px, 0)"),t}}},watch:{fixed:function(t){this.$emit("change",t)}},created:function(){var t=this;!a["g"]&&window.IntersectionObserver&&(this.observer=new IntersectionObserver((function(e){e[0].intersectionRatio>0&&t.onScroll()}),{root:document.body}))},methods:{onScroll:function(){var t=this;if(!Object(s["a"])(this.$el)){this.height=this.$el.offsetHeight;var e=this.container,i=this.offsetTopPx,n=Object(c["c"])(window),r=Object(c["a"])(this.$el),a=function(){t.$emit("scroll",{scrollTop:n,isFixed:t.fixed})};if(e){var o=r+e.offsetHeight;if(n+i+this.height>o){var l=this.height+n-o;return l<this.height?(this.fixed=!0,this.transform=-(l+i)):this.fixed=!1,void a()}}n+i>r?(this.fixed=!0,this.transform=0):this.fixed=!1,a()}}},render:function(){var t=arguments[0],e=this.fixed,i={height:e?this.height+"px":null};return t("div",{style:i},[t("div",{class:d({fixed:e}),style:this.style},[this.slots()])])}})},"342a":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("bff0")},"3d9c":function(t,e,i){},4598:function(t,e,i){"use strict";(function(t){i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return l}));var s=i("a142"),n=Date.now();function r(t){var e=Date.now(),i=Math.max(0,16-(e-n)),s=setTimeout(t,i);return n=e+i,s}var a=s["g"]?t:window,c=a.requestAnimationFrame||r;a.cancelAnimationFrame||a.clearTimeout;function o(t){return c.call(a,t)}function l(t){o((function(){o(t)}))}}).call(this,i("c8ba"))},"4e82":function(t,e,i){"use strict";var s=i("23e7"),n=i("e330"),r=i("59ed"),a=i("7b0b"),c=i("07fa"),o=i("083a"),l=i("577e"),h=i("d039"),d=i("addb"),u=i("a640"),f=i("04d1"),p=i("d998b"),v=i("2d00"),b=i("512c"),y=[],g=n(y.sort),m=n(y.push),L=h((function(){y.sort(void 0)})),w=h((function(){y.sort(null)})),x=u("sort"),C=!h((function(){if(v)return v<70;if(!(f&&f>3)){if(p)return!0;if(b)return b<603;var t,e,i,s,n="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(s=0;s<47;s++)y.push({k:e+s,v:i})}for(y.sort((function(t,e){return e.v-t.v})),s=0;s<y.length;s++)e=y[s].k.charAt(0),n.charAt(n.length-1)!==e&&(n+=e);return"DGBEFHACIJK"!==n}})),k=L||!w||!x||!C,S=function(t){return function(e,i){return void 0===i?-1:void 0===e?1:void 0!==t?+t(e,i)||0:l(e)>l(i)?1:-1}};s({target:"Array",proto:!0,forced:k},{sort:function(t){void 0!==t&&r(t);var e=a(this);if(C)return void 0===t?g(e):g(e,t);var i,s,n=[],l=c(e);for(s=0;s<l;s++)s in e&&m(n,e[s]);d(n,S(t)),i=n.length,s=0;while(s<i)e[s]=n[s++];while(s<l)o(e,s++);return e}})},"512c":function(t,e,i){var s=i("342f"),n=s.match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},5343:function(t,e,i){"use strict";i("5c9d")},5852:function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("1146"),i("f032")},"5c9d":function(t,e,i){},"5d17":function(t,e,i){"use strict";i("68ef")},"6c95":function(t,e,i){},"7f3c":function(t,e,i){"use strict";(function(t){var s=i("2909"),n=i("5530"),r=(i("0cc8"),i("3104")),a=(i("5852"),i("d961")),c=(i("d3b7"),i("159b"),i("4de4"),i("4e82"),i("d81d"),i("bd36")),o=i("ed08"),l={default:{pageIndex:1,sortType:1,sortMode:0},sales:{pageIndex:1,sortType:3,sortMode:0},new:{pageIndex:1,sortType:5,sortMode:0},price:{pageIndex:1,sortType:2,sortMode:1},filter:{pageIndex:1,sortType:2,sortMode:0}};e["a"]={name:"FilterBar",components:{popFilter:c["a"],"van-search":a["a"],"van-sticky":r["a"]},props:{purchasingPlaceholder:{type:String,default:""},filterList:{type:Object},source:{type:String},recWord:{type:String},sourcePage:{type:String,default:""},isShowProduct:{type:Boolean,default:!1},selectedListSearch:{type:Object},isFilterFixed:{type:Boolean,default:!1},isShowSticky:{type:Boolean,default:!0},searchModuleColor:{type:String,default:"#ffffff"},filterModuleColor:{type:String,default:"#ffffff"},filterDividerColor:{type:String,default:"#f8f8fa"},filterActiveColor:{type:String,default:"var(--main-color, #f23340)"},filterTextColor:{type:String,default:"#999999"},isShowOtherFilter:{type:Boolean,default:!0}},data:function(){return{filter:{},lastFilterIdx:0,showFilterPop:!1,filters:[{name:this.$t("components.synthesize"),active:!0,key:"default"},{name:this.$t("components.sales"),active:!1,isDesc:!1,key:"sales"},{name:this.$t("components.new_product"),active:!1,isDesc:!1,key:"new"},{name:this.$t("components.price"),sort:!0,active:!1,isDesc:!1,key:"price"},{name:this.$t("components.screen"),filter:!0,active:!1,isDesc:!1,key:"filter"}],queryObj:l.default,showSearchCancel:!1,searchKeyword:"",isClickFilter:!1,selectedList:{},isFilterFixedActionFlag:!1,isFilterFixedActionFlagSetted:!1}},watch:{filters:function(t){var e=this;t.forEach((function(t,i){t.active&&(e.lastFilterIdx=i)}))},recWord:function(t){this.searchKeyword=t||"",this.queryObj.keyword=t||""},isFilterFixed:function(t){this.changeFilterFixed(t)}},created:function(){this.selectedList=Object(n["a"])({},this.selectedListSearch||{})},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{tabFilter:function(t){var e=this,i=Object(s["a"])(this.filters);if(this.lastFilterIdx===t){if(i[t].filter)return i[t].active=!i[t].active,void this.toFilter(t);if(!i[t].sort)return;var n=i[t];return n.isDesc=!n.isDesc,void this.toFilter(t)}"filter"!==i[t].key&&i.map((function(i,s){return s===t?(i.active=!0,e.lastFilterIdx=s,i.sort&&(i.isDesc=!i.isDesc)):"filter"===i.key&&e.isClickFilter?i.active=!0:i.active=!1,i})),this.filters=i,this.toFilter(t)},toFilter:function(t){var e=this.filters[t];this.filterChange({filter:e,filters:this.filters})},onFilterHide:function(){this.checkFilterSelect()},checkFilterSelect:function(){var t=this;this.filters&&this.filters.forEach((function(e){"filter"===e.key&&(t.selectedList?t.filterIsBlank()?e.active=!1:e.active=!0:e.active=!1)}))},onFilterConfirm:function(e){for(var i in this.checkFilterSelect(),l)if(l.hasOwnProperty(i)){var s=l[i];s.pageIndex=1}this.queryObj.pageIndex=1,this.partId&&this.filterIsBlank()&&(this.partId=null,this.category={},t.setNavigationBarTitle({title:this.$t("components.all_goods")})),this.showFilterPop=!1,!e.minPrice&&!e.maxPrice&&e.brandList.length<=0&&e.categoryList.length<=0?(this.selectedList=this.selectedList,this.isClickFilter=!1,this.filters[this.filters.length-1].active=!1):(this.selectedList=e,this.isClickFilter=!0,this.filters[this.filters.length-1].active=!0),this.$emit("getSearchResult",{needClearOldData:!0,queryObj:this.queryObj,selectedList:e,refreshProduct:!0,showloading:!0})},filterChange:function(t){var e=t.filter;if(this.filters=t.filters,"filter"!==e.key){var i=l[e.key||""];i&&(e.sort&&(i.sortMode=e.isDesc?2:1),i.pageIndex=1,i.firstCategoryList=this.queryObj.firstCategoryList,i.secondCategoryList=this.queryObj.secondCategoryList,i.thirdCategoryList=this.queryObj.thirdCategoryList,i.brandList=this.queryObj.brandList,i.keyword=this.queryObj.keyword,this.queryObj=i,this.$emit("getSearchResult",{needClearOldData:!0,queryObj:i,selectedList:this.selectedList,refreshProduct:!0,showloading:!0}))}else this.showFilterPop=!0},filterIsBlank:function(){return!this.selectedList||Object(o["c"])(this.selectedList.brandList)&&Object(o["c"])(this.selectedList.categoryList)&&Object(o["c"])(this.selectedList.minPrice)&&Object(o["c"])(this.selectedList.maxPrice)},keywordSearch:function(t){t?this.queryObj.keyword=t:(this.queryObj.keyword=t,this.isClickFilter=!1,this.filters[this.filters.length-1].active=!1,this.selectedList={}),this.$emit("getSearchResult",{needClearOldData:!0,queryObj:this.queryObj,selectedList:this.selectedList,refreshProduct:!0,showloading:!0,changeKeyword:!0})},handleSearch:function(t){t?this.queryObj.keyword=t:(this.queryObj.keyword=t,this.isClickFilter=!1,this.filters[this.filters.length-1].active=!1,this.selectedList={}),this.$emit("setStorageKeyword",t),this.$emit("getSearchResult",{needClearOldData:!0,queryObj:this.queryObj,selectedList:this.selectedList,refreshProduct:!0,showloading:!0,changeKeyword:!0})},handleCancelBtn:function(){this.$emit("handleCancelBtn"),this.showSearchCancel=!1,this.searchKeyword="",this.isClickFilter=!0,this.queryObj.keyword="",this.$emit("getSearchResult",{needClearOldData:!0,queryObj:this.queryObj,selectedList:this.selectedList,refreshProduct:!0,showloading:!0,changeKeyword:!0})},handleCancel:function(){this.queryObj.keyword=""},clickSearch:function(){"default"!==this.sourcePage&&this.$emit("clickSearch")},handleFocus:function(){this.$emit("handleFocus")},handleInput:function(t){this.$emit("handleInput",t)},onFilterReset:function(){this.selectedList={},this.isClickFilter=!1,this.filters[this.filters.length-1].active=!1},handleScroll:function(){this.isFilterFixedActionFlagSetted||(this.isFilterFixedActionFlagSetted=!0,this.changeFilterFixed(this.isFilterFixed),window.removeEventListener("scroll",this.handleScroll))},changeFilterFixed:function(t){var e=this;setTimeout((function(){e.isFilterFixedActionFlag=t}),100)}}}}).call(this,i("7189")["default"])},a866:function(t,e,i){"use strict";(function(t){var s=i("5530"),n=i("0644"),r=i.n(n),a=(i("342a"),i("1437")),c=(i("5d17"),i("f9bd")),o=(i("8a58"),i("e41f"));i("d81d"),i("d3b7"),i("159b");e["a"]={components:{"van-popup":o["a"],"van-collapse":c["a"],"van-collapse-item":a["a"]},props:{value:{type:Boolean},filterList:{type:Object},selectedList:{type:Object}},data:function(){return{selectList:{},activeNames:[],activeBrandNames:[this.$t("components.filter.brand")],brandList:[],categoryList:[],brandStyle:{"--brand-height":"252px"}}},watch:{watchData:{immediate:!0,deep:!0,handler:function(t){var e=t.selectedList,i=void 0===e?{}:e,s=t.filterList,n=void 0===s?{}:s;this.selectList=r()(i);var a=r()(n);0===this.brandList.length&&(this.brandList=a.brandList||[]),0===this.categoryList.length&&(this.categoryList=a.categoryList||[]),this.resetSelect(),this.setupSelect()}},value:{immediate:!0,handler:function(e){var i=this;e&&setTimeout((function(){var e=i.$refs.brandRef.clientHeight-38;i.brandStyle={"--brand-height":"".concat(t.toRem(Math.min(2*e,252)),"rem")},i.activeBrandNames=[]}),0)}}},computed:{watchData:function(){return{selectedList:this.selectedList,filterList:this.filterList}}},methods:{itemClass:function(t){return["item-nor",{"item-sel":t.select}]},inputMin:function(e){var i=e.target.value;isNaN(i)?t.showToast({title:this.$t("components.filter.enter_number")}):this.selectList.minPrice=i},inputMax:function(e){var i=e.target.value;isNaN(i)?t.showToast({title:this.$t("components.filter.enter_number")}):this.selectList.maxPrice=i},onBrandSelect:function(t,e){t.id&&this.$set(this.brandList,e,Object(s["a"])(Object(s["a"])({},this.brandList[e]),{},{select:!this.brandList[e].select}))},onCategorySelect:function(t,e,i){"undefined"!==typeof i?this.$set(this.categoryList[e].subCategoryList,i,Object(s["a"])(Object(s["a"])({},this.categoryList[e].subCategoryList[i]),{},{select:!this.categoryList[e].subCategoryList[i].select})):this.$set(this.categoryList,e,Object(s["a"])(Object(s["a"])({},this.categoryList[e]),{},{select:!this.categoryList[e].select}))},reset:function(){this.brandList&&(this.brandList=this.brandList.map((function(t){return t.select=!1,t}))),this.categoryList&&(this.categoryList=this.categoryList.map((function(t){return t.subCategoryList=t.subCategoryList.map((function(t){return t.select=!1,t})),t}))),this.selectList={},this.$emit("reset")},confirm:function(){var t=[],e=[];this.brandList&&this.brandList.forEach((function(e){e.select&&t.push(e.id)})),this.categoryList&&this.categoryList.forEach((function(t){t.subCategoryList.forEach((function(t){t.select&&e.push(t.id)}))})),this.selectList.brandList=t,this.selectList.categoryList=e;var i=this.selectList,s=i.minPrice,n=i.maxPrice;s>n&&(this.selectList.minPrice=n,this.selectList.maxPrice=s),this.$emit("confirm",this.selectList)},setupSelect:function(){var t=this;this.selectList.brandList&&this.selectList.brandList.forEach((function(e){if(t.brandList)for(var i=0;i<t.brandList.length;i+=1){var s=t.brandList[i];if(s.id===e){t.brandList[i].select=!0;break}}})),this.selectList.categoryList&&this.selectList.categoryList.forEach((function(e){t.categoryList&&(t.categoryList=t.categoryList.map((function(t){return t.subCategoryList.map((function(i){return i.id===e&&(i.select=!0,t.select=!0),i})),t})))}))},resetSelect:function(){t.isBlank(this.brandList)||(this.brandList=this.brandList.map((function(t){return t.select=!1,t}))),t.isBlank(this.categoryList)||(this.categoryList=this.categoryList.map((function(t){return t.select=!1,t.subCategoryList=t.subCategoryList.map((function(t){return t.select=!1,t})),t})))},clickOverlay:function(){this.confirm()}}}}).call(this,i("7189")["default"])},addb:function(t,e,i){var s=i("4dae"),n=Math.floor,r=function(t,e){var i=t.length,o=n(i/2);return i<8?a(t,e):c(t,r(s(t,0,o),e),r(s(t,o),e),e)},a=function(t,e){var i,s,n=t.length,r=1;while(r<n){s=r,i=t[r];while(s&&e(t[s-1],i)>0)t[s]=t[--s];s!==r++&&(t[s]=i)}return t},c=function(t,e,i,s){var n=e.length,r=i.length,a=0,c=0;while(a<n||c<r)t[a+c]=a<n&&c<r?s(e[a],i[c])<=0?e[a++]:i[c++]:a<n?e[a++]:i[c++];return t};t.exports=r},ae9e:function(t,e,i){},bd36:function(t,e,i){"use strict";i("b0c0");var s=function(){var t=this,e=this,i=e._self._c;return i("van-popup",{staticClass:"container filter-container",attrs:{position:"right",value:e.value},on:{"click-overlay":e.clickOverlay,input:function(e){return t.$emit("input",e)}}},[i("div",{staticClass:"content"},[i("div",{staticClass:"head"},[i("label",[e._v(e._s(e.$t("components.filter.price_range")))])]),i("div",{staticClass:"price-container"},[i("div",{staticClass:"price-container-input"},[i("input",{staticClass:"input",attrs:{placeholder:e.$t("components.filter.lowest_price"),"placeholder-class":"input-placeholder",type:"text"},domProps:{value:e.selectList.minPrice||""},on:{change:e.inputMin}})]),i("div",{staticClass:"line"}),i("div",{staticClass:"price-container-input"},[i("input",{staticClass:"input",attrs:{placeholder:e.$t("components.filter.highest_price"),"placeholder-class":"input-placeholder",type:"text"},domProps:{value:e.selectList.maxPrice||""},on:{change:e.inputMax}})])]),e.brandList&&e.brandList.length>0?i("div",{staticClass:"sep"}):e._e(),i("van-collapse",{attrs:{border:!1},model:{value:e.activeBrandNames,callback:function(t){e.activeBrandNames=t},expression:"activeBrandNames"}},[i("div",{ref:"brandRef",class:[{"filter-brandnames":0===e.activeBrandNames.length}],style:e.brandStyle},[e.brandList&&e.brandList.length>0?i("van-collapse-item",{attrs:{title:e.$t("components.filter.brand"),name:e.$t("components.filter.brand"),border:!1}},e._l(e.brandList,(function(t,s){return i("div",{key:t.itemkey,staticClass:"item-wrap"},[i("div",{class:e.itemClass(t),on:{click:function(i){return e.onBrandSelect(t,s)}}},[i("span",{staticClass:"text"},[e._v(e._s(t.name))])])])})),0):e._e()],1)]),i("div",{staticClass:"sep"}),i("van-collapse",{attrs:{border:!1},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.categoryList,(function(t,s){return i("van-collapse-item",{key:t.id,attrs:{title:t.name,name:t.name}},e._l(t.subCategoryList,(function(n,r){return i("div",{key:n.id,staticClass:"item-wrap"},[i("div",{class:e.itemClass(n),on:{click:function(i){return e.onCategorySelect(t,s,r)}}},[i("span",{staticClass:"text"},[e._v(e._s(n.name))])])])})),0)})),1)],1),i("div",{staticClass:"bottom-container"},[i("div",{staticClass:"reset",on:{click:e.reset}},[i("span",[e._v(e._s(e.$t("common.reset")))])]),i("div",{staticClass:"confirm",on:{click:e.confirm}},[i("span",[e._v(e._s(e.$t("common.confirm")))])])])])},n=[],r=i("a866"),a=r["a"],c=(i("5343"),i("0aeb"),i("2877")),o=Object(c["a"])(a,s,n,!1,null,"5ce17b78",null);e["a"]=o.exports},bff0:function(t,e,i){},d961:function(t,e,i){"use strict";var s=i("2638"),n=i.n(s),r=i("c31d"),a=i("d282"),c=i("ba31"),o=i("1325"),l=i("565f"),h=Object(a["a"])("search"),d=h[0],u=h[1],f=h[2];function p(t,e,i,s){function a(){if(i.label||e.label)return t("div",{class:u("label")},[i.label?i.label():e.label])}function h(){if(e.showAction)return t("div",{class:u("action"),attrs:{role:"button",tabindex:"0"},on:{click:n}},[i.action?i.action():e.actionText||f("cancel")]);function n(){i.action||(Object(c["a"])(s,"input",""),Object(c["a"])(s,"cancel"))}}var d={attrs:s.data.attrs,on:Object(r["a"])({},s.listeners,{keypress:function(t){13===t.keyCode&&(Object(o["c"])(t),Object(c["a"])(s,"search",e.value)),Object(c["a"])(s,"keypress",t)}})},p=Object(c["b"])(s);return p.attrs=void 0,t("div",n()([{class:u({"show-action":e.showAction}),style:{background:e.background}},p]),[null==i.left?void 0:i.left(),t("div",{class:u("content",e.shape)},[a(),t(l["a"],n()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable,clearTrigger:e.clearTrigger},scopedSlots:{"left-icon":i["left-icon"],"right-icon":i["right-icon"]}},d]))]),h()])}p.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}},e["a"]=d(p)},d998b:function(t,e,i){var s=i("342f");t.exports=/MSIE|Trident/.test(s)},f032:function(t,e,i){},f9bd:function(t,e,i){"use strict";var s=i("d282"),n=i("9884"),r=i("b1d2"),a=Object(s["a"])("collapse"),c=a[0],o=a[1];e["a"]=c({mixins:[Object(n["b"])("vanCollapse")],props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter((function(e){return e!==t}))),this.$emit("change",t),this.$emit("input",t)}},render:function(){var t,e=arguments[0];return e("div",{class:[o(),(t={},t[r["d"]]=this.border,t)]},[this.slots()])}})}}]);