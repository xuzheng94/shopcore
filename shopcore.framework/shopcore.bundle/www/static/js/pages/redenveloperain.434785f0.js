(function(t){function e(e){for(var a,o,r=e[0],h=e[1],c=e[2],m=0,d=[];m<r.length;m++)o=r[m],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(a in h)Object.prototype.hasOwnProperty.call(h,a)&&(t[a]=h[a]);l&&l(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var h=i[r];0!==s[h]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},s={"pages/redenveloperain":0},n=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.e=function(){return Promise.resolve()},o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],h=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=h;n.push([104,"chunk-vendors","chunk-common"]),i()})({"0254":function(t){t.exports=JSON.parse('{"frames":[{"filename":"bg.png","frame":{"x":0,"y":0,"w":750,"h":1624},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":750,"h":1624},"sourceSize":{"w":750,"h":1624}},{"filename":"rst_mask.png","frame":{"x":750,"y":0,"w":750,"h":1624},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":750,"h":1624},"sourceSize":{"w":750,"h":1624}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"game-0.png","format":"RGBA8888","size":{"w":1500,"h":1624},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:3a838f2b6e1671fff8c0c4ff98defe3a:168ad5f49098d285b75b2d5439919793:ede4a0362bf2a3dd9137b1a10b54faab$"}}')},104:function(t,e,i){t.exports=i("eb6a")},1800:function(t,e,i){"use strict";(function(t){i("18a5"),i("cb29"),i("99af");var a=i("b459"),s=function(t){this.game=t,this.config=null};s.prototype.show=function(t){var e=this.game.add.sprite(0,0,"pageBg","rst_mask.png");e.inputEnabled=!0,e.width=this.game.width,e.height=this.game.height;var i,s,n,o=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"game","rst_success.png");o.anchor.set(.5,.5),o.width=Object(a["b"])(266),o.height=Object(a["b"])(366),i=40===t.couponType?t.amount+"折":5===t.couponType?"兑换券":t.amount,40!==t.couponType&&5!==t.couponType?(s=Object(a["c"])(o,0,Object(a["b"])(95)),n=this.game.add.text(this.game.world.centerX+8,s.y,i),n.fontSize=Object(a["b"])(34)):(s=Object(a["c"])(o,0,Object(a["b"])(100)),n=this.game.add.text(this.game.world.centerX,s.y,i),n.fontSize=Object(a["b"])(24)),n.fontWeight="bold",n.fontFamily="DINAlternate-Bold, DINAlternate",n.fill="#F11032",n.anchor.set(.5,0);var r,h="";if(40!==t.couponType&&5!==t.couponType){h=t.currencySymbol;var c=Object(a["c"])(n,Object(a["b"])(-6),Object(a["b"])(17)),l=this.game.add.text(c.x,c.y,h);l.fontSize=Object(a["b"])(14),l.fontWeight="bold",l.fill="#F11032",l.anchor.set(1,0)}r=40!==t.couponType&&5!==t.couponType?Object(a["a"])(n,Object(a["b"])(3)):Object(a["a"])(n,Object(a["b"])(8));var m=this.game.add.text(this.game.world.centerX,r,t.couponName);m.fontSize=Object(a["b"])(14),m.fill="#F11032",m.anchor.set(.5,0);var d="满".concat(t.minOrderValue,"可用，").concat(t.subTitle);d.length>16&&(d=d.substring(0,15),d+="…");var g=Object(a["a"])(m,Object(a["b"])(8)),f=this.game.add.text(this.game.world.centerX,g,d);f.fontSize=Object(a["b"])(12),f.fontWeight="normal",f.fill="#666666",f.anchor.set(.5,0);var p=Object(a["a"])(f,Object(a["b"])(24)),u=this.game.add.text(this.game.world.centerX,p,t.timeLimit);u.fontSize=Object(a["b"])(10),u.fontWeight="normal",u.fill="#666666",u.anchor.set(.5,0);var b=Object(a["a"])(u,Object(a["b"])(36)),w=this.game.add.text(this.game.world.centerX,b,"优惠券已放入个人中心-优惠券 >");w.fontSize=Object(a["b"])(12),w.fill="#FFB594",w.anchor.set(.5,0),w.inputEnabled=!0,w.events.onInputDown.add(this.onTipTouched,this);var y=Object(a["c"])(o,0,Object(a["b"])(276)),v=this.game.add.button(this.game.world.centerX,y.y,"game",this.onBtnClicked,this,"rst_btn_use.png","rst_btn_use.png","rst_btn_use.png","rst_btn_use.png");if(v.width=Object(a["b"])(193),v.height=Object(a["b"])(52),v.anchor.set(.5,0),t.super){var j=Object(a["c"])(n,Object(a["b"])(212),Object(a["b"])(3)),O=this.game.add.sprite(j.x,j.y,"game","rst_super_icon.png");O.anchor.set(0,0),O.width=Object(a["b"])(40),O.height=Object(a["b"])(33)}},s.prototype.onBtnClicked=function(){t.navigateBack({delta:1})},s.prototype.onTipTouched=function(){t.navigateTo({url:"/pages/coupons/main"})},e["a"]=s}).call(this,i("7189")["default"])},"1dff":function(t,e,i){"use strict";var a=i("b459"),s=.5,n=50,o=function(t){this.game=t,this.group=null,this.timer=null};o.prototype.start=function(){this.group=this.game.add.group(),this.group.enableBody=!0,this.group.createMultiple(n,"game","light.png"),this.group.setAll("anchor.y",1),this.group.setAll("outOfBoundsKill",!0),this.group.setAll("checkWorldBounds",!0),this.timer=this.game.time.events.loop(Phaser.Timer.SECOND*s,this.createLight,this)},o.prototype.createLight=function(){var t=this.group.getFirstExists(!1);if(t){t.reset(this.game.rnd.integerInRange(.4*this.game.width,1.4*this.game.width),0),t.inputEnabled=!1,t.width=Object(a["b"])(5),t.height=Object(a["b"])(123),t.alpha=1,t.angle=30;var e=t.angle*Math.PI/180,i=this.game.rnd.integerInRange(700,900);t.body.velocity.x=-Math.sin(e)*i,t.body.velocity.y=Math.cos(e)*i}},e["a"]=o},"2d78":function(t,e,i){"use strict";var a=function(t){this.game=t};a.prototype.preload=function(){var t=i("9598"),e=i("e6c9"),a=i("8369"),s=i("0254");this.game.stage.backgroundColor="#9B0818",this.game.scale.scaleMode=Phaser.ScaleManager.EXACT_FIT,this.game.scale.forcePortrait=!0,this.game.scale.refresh(),this.game.load.atlasJSONHash("pre",t,null,e),this.game.load.atlasJSONHash("pageBg",a,null,s)},a.prototype.create=function(){this.game.state.start("preload")},e["a"]=a},"362f":function(t,e,i){"use strict";(function(t){i("d3b7"),i("ac1f"),i("841c"),i("5319"),i("a9e3"),i("25f0"),i("99af");var a=i("b68d"),s=i("603c"),n=i("191e"),o=i("44e4"),r=i("2d78"),h=i("e78e"),c=i("c960"),l=i("8035");e["a"]={name:"redenveloperain",mixins:[s["a"],n["a"],a["a"]],data:function(){return{phaserJSCount:0,isEndAni:!1,activeTimeStatus:!1,startDate:"",timeInfo:{hou:"",min:"",sec:""},showPage:!0,activeInfo:{}}},mounted:function(){this.initData()},components:{loadingLine:o["a"]},methods:{initData:function(){this.getActiveStatus()},getActiveStatus:function(){var e=this,i=this.getUrl(window.location.href).activityId;t.request({url:l["a"].getActiveInfoUrl,data:{activityId:i,activityType:101}}).then((function(t){e.activeInfo=t,0===t.activityStatus&&(e.startDate=e.formatStartTime(t.timeLabel),e.timeInfo=e.countDownUtil(t.timestamp),e.timeInfo.sec&&(e.activeTimeStatus=!0))})).catch((function(t){e.activeInfo=t,e.activeInfo.getHttpInfo="err"})).finally((function(){e.startGame()}))},getUrl:function(t){t||(t=window.location.search.substr(1));var e=/(([^?&=]+)(?:=([^?&=]*))*)/g,i={};return t.replace(e,(function(){var t=arguments[2],e=arguments[3]||"";i[t]=e})),i},startGame:function(){var e=this,i=null;if(null==i)try{var a=750,s=750*document.documentElement.clientHeight/document.documentElement.clientWidth;i=new Phaser.Game(a,s,Phaser.CANVAS,"game"),i.activeInfo=this.activeInfo,i.state.add("boot",new r["a"](i)),i.state.add("preload",new h["a"](i)),i.state.add("game",new c["a"](i)),setTimeout((function(){e.showPage=!1,i.state.start("boot")}),100)}catch(n){this.phaserJSCount++,this.phaserJSCount>=50?(this.showPage=!1,t.showToast({title:"加载失败，刷新一下再参与吧！"})):setTimeout((function(){e.startGame()}),100)}},countDownUtil:function(t){var e=this,i={hou:"",min:"",sec:""};if(t>0){var a=Math.floor(t/86400);i.hou=parseInt(t%86400/3600)<10?"0".concat(parseInt(t%86400/3600)):parseInt(t%86400/3600),i.min=parseInt(t%86400%3600/60)<10?"0".concat(parseInt(t%86400%3600/60)):parseInt(t%86400%3600/60),i.sec=parseInt(t%86400%3600%60)<10?"0".concat(parseInt(t%86400%3600%60)):parseInt(t%86400%3600%60),a>0&&(i.hou=24*a+Number(i.hou));var s=setInterval((function(){--i.sec,i.sec<0?(i.sec=59,--i.min,i.min<0?(i.min=59,--i.hou,i.hou<0?(e.activeTimeStatus=!1,clearInterval(s)):i.hou<10&&(i.hou="0".concat(i.hou))):i.min<10&&(i.min="0".concat(i.min))):i.sec<10&&(i.sec="0".concat(i.sec))}),1e3)}return i},formatStartTime:function(t){var e=Date.parse(t.replace(/-/g,"/")),i=new Date(e).getTime(),a=new Date(i),s=(a.getMonth()+1).toString();1===s.length&&(s="0"+s);var n=a.getDate().toString();1===n.length&&(n="0"+n);var o=a.getHours().toString();1===o.length&&(o="0"+o);var r=a.getMinutes().toString();return 1===r.length&&(r="0"+r),"".concat(s,"月").concat(n,"日 ").concat(o,":").concat(r)}}}}).call(this,i("7189")["default"])},5983:function(t,e,i){"use strict";(function(t){i("18a5"),i("cb29");var a=i("b459"),s=function(t){this.game=t};s.prototype.show=function(t){var e=this.game.add.sprite(0,0,"pre","bg.png");e.width=this.game.width,e.height=this.game.height;var i=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"game","rst_bg.png");i.anchor.set(.5,.5),i.width=Object(a["b"])(266),i.height=Object(a["b"])(366);var s=Object(a["c"])(i,0,Object(a["b"])(50)),n=this.game.add.image(this.game.world.centerX,s.y,"game","rst_cry.png");n.anchor.set(.5,0),n.width=Object(a["b"])(135),n.height=Object(a["b"])(118);var o=Object(a["c"])(i,0,Object(a["b"])(222)),r=this.game.add.text(this.game.world.centerX,o.y,t);r.fontSize=Object(a["b"])(18),r.fontWeight="bold",r.fill="white",r.anchor.set(.5,0);var h=Object(a["c"])(i,0,Object(a["b"])(280)),c=this.game.add.button(this.game.world.centerX,h.y,"game",this.onBtnClicked,this,"rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png");c.width=Object(a["b"])(193),c.height=Object(a["b"])(52),c.anchor.set(.5,0)},s.prototype.onBtnClicked=function(){t.navigateBack({delta:1})},e["a"]=s}).call(this,i("7189")["default"])},"5a73":function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var a={success:!0,errMsg:"",title:"红包雨",preloadTime:3,countdownTime:6,rainTime:10}},"5d80":function(t,e,i){"use strict";i("18a5"),i("cb29"),i("38cf");var a=i("b459"),s=function(t){this.game=t,this.cdTitle=null,this.outCircle=null,this.inCircle=null,this.daojishi=null,this.normalText=null,this.leftTime=5,this.onCompleteCB=null};s.prototype.show=function(t,e){this.leftTime=t,this.onCompleteCB=e,this.cdTitle=this.game.add.sprite(this.game.world.centerX,0,"game","cd_title.png"),this.cdTitle.anchor.set(.5,0),this.cdTitle.width=Object(a["b"])(351),this.cdTitle.height=Object(a["b"])(268);var i=Object(a["a"])(this.cdTitle,Object(a["b"])(12));this.normalText=this.game.add.text(this.game.world.centerX,i,"抢到的红包越多，越有机会获得丰厚的奖励哦！"),this.normalText.fontSize=Object(a["b"])(13),this.normalText.fill="#ffd899",this.normalText.anchor.set(.5,0);var s=this.game.world.centerX,n=this.game.world.centerY+Object(a["b"])(120);this.outCircle=this.game.add.sprite(s,n,"game","cd_circle_out.png"),this.outCircle.anchor.set(.5,.5),this.outCircle.width=Object(a["b"])(300),this.outCircle.height=Object(a["b"])(300),this.game.add.tween(this.outCircle).to({angle:360},15e3,Phaser.Easing.Linear.None,!0).loop(),this.inCircle=this.game.add.sprite(s,n,"game","cd_circle_in.png"),this.inCircle.anchor.set(.5,.5),this.inCircle.width=Object(a["b"])(230),this.inCircle.height=Object(a["b"])(230),this.game.add.tween(this.inCircle).to({angle:-360},15e3,Phaser.Easing.Linear.None,!0).loop();for(var o=[],r=6-t;r<=6;r+=1)r>=0&&o.push(r);this.daojishi=this.game.add.sprite(s,n,"daojishi"),this.daojishi.anchor.set(.5,.5),this.daojishi.width=Object(a["b"])(160),this.daojishi.height=Object(a["b"])(80);var h=this.daojishi.animations.add("daojishi",o);this.daojishi.play("daojishi",1,!1),h.onComplete.add(this.onComplete,this),this.game.time.events.repeat(Phaser.Timer.SECOND,t,this.refreshTime,this),this.refreshTime()},s.prototype.refreshTime=function(){var t=this.daojishi.scale,e=t.x,i=t.y;this.daojishi.scale.setTo(.1),this.game.add.tween(this.daojishi.scale).to({x:e,y:i},100,Phaser.Easing.Linear.None).start()},s.prototype.onComplete=function(){var t=this,e=200;this.cdTitle&&this.game.add.tween(this.cdTitle).to({y:-this.cdTitle.height-Object(a["b"])(10)},e,Phaser.Easing.Linear.None,!0),this.outCircle&&this.game.add.tween(this.outCircle).to({alpha:0},e,Phaser.Easing.Linear.None,!0),this.normalText&&this.game.add.tween(this.normalText).to({y:-this.cdTitle.height-Object(a["b"])(10)},e,Phaser.Easing.Linear.None,!0),this.inCircle&&this.game.add.tween(this.inCircle).to({alpha:0},e,Phaser.Easing.Linear.None,!0),this.daojishi&&this.game.add.tween(this.daojishi).to({alpha:0},e,Phaser.Easing.Linear.None,!0),setTimeout((function(){t.cdTitle&&t.cdTitle.kill(),t.outCircle&&t.outCircle.kill(),t.inCircle&&t.inCircle.kill(),t.daojishi&&t.daojishi.kill(),t.normalText&&t.normalText.kill(),t.onCompleteCB&&t.onCompleteCB()}),e+100)},e["a"]=s},"5e5b":function(t,e,i){t.exports=i.p+"static/img/game.e6d82096.png"},"6bb3":function(t){t.exports=JSON.parse('{"frames":[{"filename":"add_one.png","frame":{"x":80,"y":0,"w":108,"h":98},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":108,"h":98},"sourceSize":{"w":108,"h":98}},{"filename":"cd_circle_in.png","frame":{"x":522,"y":650,"w":512,"h":512},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":512,"h":512},"sourceSize":{"w":512,"h":512}},{"filename":"cd_circle_out.png","frame":{"x":1066,"y":1186,"w":748,"h":748},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":748,"h":748},"sourceSize":{"w":748,"h":748}},{"filename":"cd_title.png","frame":{"x":1034,"y":650,"w":702,"h":536},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":702,"h":536},"sourceSize":{"w":702,"h":536}},{"filename":"eff_boss.png","frame":{"x":0,"y":256,"w":370,"h":60},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":370,"h":60},"sourceSize":{"w":370,"h":60}},{"filename":"eff_five.png","frame":{"x":1004,"y":0,"w":292,"h":102},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":292,"h":102},"sourceSize":{"w":292,"h":102}},{"filename":"eff_four.png","frame":{"x":714,"y":0,"w":290,"h":102},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":290,"h":102},"sourceSize":{"w":290,"h":102}},{"filename":"eff_good.png","frame":{"x":476,"y":0,"w":238,"h":80},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":238,"h":80},"sourceSize":{"w":238,"h":80}},{"filename":"eff_perfect.png","frame":{"x":370,"y":256,"w":398,"h":84},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":398,"h":84},"sourceSize":{"w":398,"h":84}},{"filename":"eff_three.png","frame":{"x":1296,"y":0,"w":292,"h":102},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":292,"h":102},"sourceSize":{"w":292,"h":102}},{"filename":"eff_wonderful.png","frame":{"x":348,"y":360,"w":562,"h":80},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":562,"h":80},"sourceSize":{"w":562,"h":80}},{"filename":"firework.png","frame":{"x":1588,"y":0,"w":208,"h":186},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":208,"h":186},"sourceSize":{"w":208,"h":186}},{"filename":"light.png","frame":{"x":188,"y":0,"w":32,"h":256},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":32,"h":256},"sourceSize":{"w":32,"h":256}},{"filename":"rp1.png","frame":{"x":220,"y":0,"w":128,"h":162},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":162},"sourceSize":{"w":128,"h":162}},{"filename":"rp2.png","frame":{"x":348,"y":0,"w":128,"h":162},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":128,"h":162},"sourceSize":{"w":128,"h":162}},{"filename":"rst_bg.png","frame":{"x":0,"y":1186,"w":532,"h":730},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":532,"h":730},"sourceSize":{"w":532,"h":730}},{"filename":"rst_btn_ok.png","frame":{"x":768,"y":256,"w":386,"h":104},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":386,"h":104},"sourceSize":{"w":386,"h":104}},{"filename":"rst_btn_use.png","frame":{"x":1154,"y":256,"w":386,"h":104},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":386,"h":104},"sourceSize":{"w":386,"h":104}},{"filename":"rst_cpn_bg.png","frame":{"x":0,"y":650,"w":522,"h":164},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":522,"h":164},"sourceSize":{"w":522,"h":164}},{"filename":"rst_cry.png","frame":{"x":0,"y":360,"w":348,"h":290},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":348,"h":290},"sourceSize":{"w":348,"h":290}},{"filename":"rst_null_tip.png","frame":{"x":910,"y":360,"w":442,"h":216},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":442,"h":216},"sourceSize":{"w":442,"h":216}},{"filename":"rst_success.png","frame":{"x":532,"y":1186,"w":534,"h":732},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":534,"h":732},"sourceSize":{"w":534,"h":732}},{"filename":"rst_super_icon.png","frame":{"x":0,"y":0,"w":80,"h":66},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":80,"h":66},"sourceSize":{"w":80,"h":66}}],"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"g.png","format":"RGBA8888","size":{"w":1814,"h":1934},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:2196776b541bf8fb0c51481b183dd8df:1083eab60d21f09937bfd97a2b7c59d3:6a38d71e057779ec117f489ae8be014d$"}}')},"7f2c":function(t,e,i){"use strict";(function(t){i("18a5"),i("cb29");var a=i("b459"),s=function(t){this.game=t};s.prototype.show=function(){var t=this.game.add.sprite(0,0,"pre","bg.png");t.width=this.game.width,t.height=this.game.height;var e=this.game.add.graphics(0,0);e.beginFill(0,.1),e.drawRect(0,0,this.game.world.width,this.game.world.height);var i=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"game","rst_bg.png");i.anchor.set(.5,.5),i.width=Object(a["b"])(266),i.height=Object(a["b"])(366);var s=Object(a["c"])(i,0,Object(a["b"])(50)),n=this.game.add.image(this.game.world.centerX,s.y,"game","rst_cry.png");n.anchor.set(.5,0),n.width=Object(a["b"])(135),n.height=Object(a["b"])(118);var o=Object(a["a"])(n,Object(a["b"])(37)),r=this.game.add.text(this.game.world.centerX,o,"红包雨已经结束，下次早点来哦～");r.fontSize=Object(a["b"])(16),r.fontWeight="bold",r.fill="white",r.anchor.set(.5,0);var h=Object(a["c"])(i,0,Object(a["b"])(280)),c=this.game.add.button(this.game.world.centerX,h.y,"game",this.onBtnClicked,this,"rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png");c.width=Object(a["b"])(193),c.height=Object(a["b"])(52),c.anchor.set(.5,0)},s.prototype.onBtnClicked=function(){t.navigateBack({delta:1})},e["a"]=s}).call(this,i("7189")["default"])},8035:function(t,e,i){"use strict";e["a"]={getActiveInfoUrl:"/api/social/sqhomelottery",receiveCouponUrl:"/api/social/sqlottery"}},8369:function(t,e,i){t.exports=i.p+"static/img/page_bg.493376d8.png"},8669:function(t,e,i){},9598:function(t,e,i){t.exports=i.p+"static/img/pre.8efcec1d.png"},"9b62":function(t,e,i){"use strict";i("18a5");var a=i("b459"),s=.3,n=80,o=function(t,e,i){this.game=t,this.config=e,this.group=null,this.fallNums=[0,0,0],this.hitNums=[0,0,0],this.timer=null,this.openMusicAudio=null,this.onTouchedCB=i,this.lastHitTime=0,this.comboNum=0,this.effComboSprite=null,this.effComboTimer=null};o.prototype.start=function(){this.group=this.game.add.group(),this.group.enableBody=!0,this.group.createMultiple(n,"game","rp1.png"),this.group.setAll("anchor.y",1),this.group.setAll("outOfBoundsKill",!0),this.group.setAll("checkWorldBounds",!0),this.timer=this.game.time.events.loop(Phaser.Timer.SECOND*s,this.createRP,this),this.openMusicAudio=this.game.add.audio("openMusic"),this.fallNums=[0,0,0],this.hitNums=[0,0,0]},o.prototype.stop=function(){this.game.time.events.remove(this.timer),this.group.destroy()},o.prototype.createRP=function(){var t=this.group.getFirstExists(!1);if(t){t.reset(this.game.rnd.integerInRange(10,this.game.width-t.width),0),t.width=Object(a["b"])(59),t.height=Object(a["b"])(74),t.alpha=1,t.body.velocity.x=0;var e=0,i=this.game.rnd.integerInRange(0,1e3);e=i<=600?0:1;var s=Object(a["b"])(this.game.rnd.integerInRange(this.config.minSpeed,this.config.maxSpeed));0===e?(t.loadTexture("game","rp1.png"),t.width=Object(a["b"])(64),t.height=Object(a["b"])(81),t.angle=this.game.rnd.integerInRange(-30,30),t.body.angularVelocity=20,t.body.velocity.y=s):1===e&&(t.loadTexture("game","rp2.png"),t.width=Object(a["b"])(64),t.height=Object(a["b"])(81),t.angle=0,t.body.angularVelocity=0,t.body.velocity.y=1.4*s),t.rpType=e,t.inputEnabled=!0,t.events.onInputDown.removeAll(),t.events.onInputDown.add(this.onTouched,this),t.rpType>=0&&t.rpType<this.fallNums.length&&(this.fallNums[t.rpType]+=1)}},o.prototype.onTouched=function(t){var e=this,i=t.x,s=t.y,n=t.rpType;this.openMusicAudio.play(),t.kill(),n>=0&&n<this.hitNums.length&&(this.hitNums[n]+=1);var o=this.game.add.sprite(i,s,"game","firework.png");o.width=Object(a["b"])(104),o.height=Object(a["b"])(93),o.alpha=0;var r=this.game.add.tween(o).to({alpha:1},500,Phaser.Easing.Linear.None,!0);r.onComplete.add((function(t){t.kill()}),this,o);var h=this.game.add.sprite(i,s,"game","add_one.png");h.anchor.set(.5,.5),h.width=Object(a["b"])(55),h.height=Object(a["b"])(52),h.scale.setTo(1),h.x=i+o.width,h.y=s;var c=this.game.add.tween(h.scale).to({x:2,y:2},100,Phaser.Easing.Linear.None);c.onComplete.add((function(){e.game.add.tween(h.scale).to({x:1,y:1},100,Phaser.Easing.Linear.None).start()}),this),c.start(),setTimeout((function(){h.kill()}),500),this.combo(n),this.onTouchedCB&&this.onTouchedCB({hitNums:this.hitNums})},o.prototype.combo=function(t){var e=this,i=(new Date).getTime();i-this.lastHitTime<=800?this.comboNum+=1:this.comboNum=0,this.lastHitTime=i;var s="",n=0,o=0;if(2===t?(s="eff_boss.png",n=185,o=30):this.comboNum>=15?(s="eff_perfect.png",n=199,o=42):this.comboNum>=10?(s="eff_wonderful.png",n=281,o=40):this.comboNum>5?(s="eff_good.png",n=119,o=40):this.comboNum>4?(s="eff_five.png",n=146,o=51):this.comboNum>3?(s="eff_four.png",n=145,o=51):this.comboNum>2?(s="eff_three.png",n=146,o=51):(s="",n=0,o=0),s){this.effComboSprite||(this.effComboSprite=this.game.add.sprite(this.game.world.centerX,this.game.height-Object(a["b"])(150),"game",s),this.effComboSprite.anchor.set(.5,.5)),this.effComboSprite.loadTexture("game",s),this.effComboSprite.width=Object(a["b"])(n),this.effComboSprite.height=Object(a["b"])(o),this.effComboSprite.scale.setTo(1);var r=this.game.add.tween(this.effComboSprite.scale).to({x:2,y:2},100,Phaser.Easing.Linear.None);r.onComplete.add((function(){e.game.add.tween(e.effComboSprite.scale).to({x:1,y:1},100,Phaser.Easing.Linear.None).start()}),this),r.start(),this.effComboTimer&&(clearTimeout(this.effComboTimer),this.effComboTimer=null),this.effComboTimer=setTimeout((function(){e.effComboSprite.kill(),e.effComboSprite=null}),500)}},o.prototype.getHits=function(){for(var t=[],e=0;e<this.hitNums.length;e+=1)t.push({id:e,num:this.hitNums[e]});return t},o.prototype.getTotalHit=function(){for(var t=0,e=0;e<this.hitNums.length;e+=1)t+=this.hitNums[e];return t},e["a"]=o},"9d7a":function(t,e,i){t.exports=i.p+"static/img/daojishi.f667769a.png"},"9f32":function(t,e,i){"use strict";(function(t){i("b459");var a=function(t){this.game=t,this.bg=null,this.title=null,this.cancel=null,this.ok=null};a.prototype.show=function(){t.showModal({content:"真的要退出红包雨么？",confirmText:"退出",confirmColor:"#007AFF",cancelText:"继续玩",cancelColor:"#007AFF",success:function(e){e.confirm&&t.navigateBack({delta:1})}})},a.prototype.onOkClicked=function(){this.bg.kill(),this.title.kill(),this.cancel.kill(),this.ok.kill()},a.prototype.onCancelClicked=function(){this.bg.kill(),this.title.kill(),this.cancel.kill(),this.ok.kill(),t.navigateBack({delta:1})},e["a"]=a}).call(this,i("7189")["default"])},b459:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));i("18a5");function a(t){var e=750,i=Math.floor(t*e/375);return i}function s(t,e,i){return{x:t.x-t.width*t.anchor.x+e,y:t.y-t.height*t.anchor.y+i}}function n(t,e){return t.y-t.height*t.anchor.y+t.height+e}},c639:function(t,e,i){t.exports=i.p+"static/media/open.2d1e82e7.mp3"},c6a2:function(t,e,i){t.exports=i.p+"static/media/bg.20e3a380.mp3"},c960:function(t,e,i){"use strict";(function(t){i("cb29"),i("18a5"),i("38cf"),i("99af");var a=i("b459"),s=i("1dff"),n=i("5d80"),o=i("9b62"),r=i("7f2c"),h=i("f667"),c=i("1800"),l=i("ece9"),m=i("5983"),d=i("9f32"),g=i("5a73"),f=i("8035"),p=function(t){this.game=t,this.leftTime=15,this.redPacketManager=null,this.hitNumText=null,this.closeBtn=null,this.cpnNumIcon=null,this.cpnNumAdd=null,this.leftTimeTitle=null,this.receivePack={num:0,packInfo:{}}};p.prototype.create=function(){var t=this.game.add.audio("bgMusic",1,!0);t.play();var e=this.game.add.sprite(0,0,"pre","bg.png");if(e.width=this.game.width,e.height=this.game.height,new s["a"](this.game).start(),g["a"].success)if(this.closeBtn=this.game.add.button(Object(a["b"])(330),Object(a["b"])(48),"pre",this.onBtnCloseClicked,this,"close.png","close.png","close.png","close.png"),this.closeBtn.width=Object(a["b"])(16),this.closeBtn.height=Object(a["b"])(15),g["a"].countdownTime>0){var i=new n["a"](this.game);i.show(g["a"].countdownTime,this.onStartGame.bind(this))}else g["a"].rainTime>0?this.onStartGame():new r["a"](this.game).show();else new m["a"](this.game).show(g["a"].errMsg||"出错了!(".concat(g["a"].code,")"))},p.prototype.onStartGame=function(){this.leftTime=g["a"].rainTime;var t={selfPic:"redpacket",maxSpeed:300,minSpeed:260,max:95};this.redPacketManager=new o["a"](this.game,t,this.onRedPacketTouched.bind(this)),this.redPacketManager.start(),this.cpnNumIcon=this.game.add.image(Object(a["b"])(20),Object(a["b"])(48),"game","rp1.png"),this.cpnNumIcon.width=Object(a["b"])(22),this.cpnNumIcon.height=Object(a["b"])(27),this.cpnNumAdd=this.game.add.text(Object(a["b"])(47),Object(a["b"])(53),"+"),this.cpnNumAdd.fontSize=Object(a["b"])(18),this.cpnNumAdd.fontWeight="bold",this.cpnNumAdd.fill="#FFDD0F",this.hitNumText=this.game.add.text(Object(a["b"])(60),Object(a["b"])(51),"0"),this.hitNumText.fontSize=Object(a["b"])(18),this.hitNumText.fontWeight="bold",this.hitNumText.fill="#FFDD0F",this.hitNumText.align="right",this.leftTimeTitle=this.game.add.text(this.game.world.centerX,Object(a["b"])(36),"剩余时间"),this.leftTimeTitle.fontSize=Object(a["b"])(12),this.leftTimeTitle.fontWeight="normal",this.leftTimeTitle.fill="#FFFFFF",this.leftTimeTitle.anchor.set(.5,0),this.leftTimeText=this.game.add.text(this.game.world.centerX,Object(a["b"])(50)),this.leftTimeText.fontSize=Object(a["b"])(24),this.leftTimeText.fontWeight="bold",this.leftTimeText.fill="#FFFFFF",this.leftTimeText.anchor.set(.5,0),this.leftTimeText.text="".concat(this.leftTime,"s"),this.game.time.events.repeat(Phaser.Timer.SECOND,this.leftTime,this.refreshTime,this)},p.prototype.refreshTime=function(){this.leftTime-=1;var t=this.leftTime;this.leftTimeText.text="".concat(t,"s"),this.leftTime<=0&&(this.redPacketManager.stop(),this.showResult(this.receivePack.packInfo))},p.prototype.onRedPacketTouched=function(e){for(var i=this,a=e.hitNums,s=0,n=0;n<a.length;n+=1)s+=a[n];this.hitNumText.text=s,0===this.receivePack.num&&(this.receivePack.num++,t.request({url:f["a"].receiveCouponUrl,data:{activityId:this.game.activeInfo.activityId},method:"post"}).then((function(t){t.lucky?(i.receivePack.packInfo=t.awardInfo.awardResult[0],i.receivePack.packInfo.packNum=s,i.receivePack.packInfo.super=!0,i.receivePack.packInfo.timeLimit="".concat(t.awardInfo.awardResult[0].startTime,"-").concat(t.awardInfo.awardResult[0].endTime)):i.receivePack.packInfo.getHttpInfo="err"})).catch((function(t){i.receivePack.num++,i.receivePack.packInfo=t,i.receivePack.packInfo.getHttpInfo="err"})))},p.prototype.onBtnCloseClicked=function(){new d["a"](this.game).show()},p.prototype.showResult=function(t){var e=this.redPacketManager.getTotalHit();if(this.cpnNumIcon.kill(),this.cpnNumAdd.kill(),this.hitNumText.kill(),this.leftTimeTitle.kill(),this.leftTimeText.kill(),this.closeBtn.kill(),!t||e<=0)return new h["a"](this.game).show(),void this.closeBtn.bringToTop();var i=Object.assign({},t,{packNum:e});"err"===t.getHttpInfo?new l["a"](this.game).show(i):new c["a"](this.game).show(i),this.closeBtn.bringToTop()},e["a"]=p}).call(this,i("7189")["default"])},e6c9:function(t){t.exports=JSON.parse('{"frames":{"alert_bg.png":{"frame":{"x":750,"y":476,"w":540,"h":214},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":540,"h":214},"sourceSize":{"w":540,"h":214}},"bg.png":{"frame":{"x":0,"y":0,"w":750,"h":1624},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":750,"h":1624},"sourceSize":{"w":750,"h":1624}},"close.png":{"frame":{"x":1290,"y":476,"w":32,"h":30},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":32,"h":30},"sourceSize":{"w":32,"h":30}},"prog.png":{"frame":{"x":1074,"y":690,"w":320,"h":20},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":320,"h":20},"sourceSize":{"w":320,"h":20}},"prog_bg.png":{"frame":{"x":750,"y":690,"w":324,"h":28},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":324,"h":28},"sourceSize":{"w":324,"h":28}},"ready.png":{"frame":{"x":750,"y":0,"w":702,"h":476},"rotated":false,"trimmed":false,"spriteSourceSize":{"x":0,"y":0,"w":702,"h":476},"sourceSize":{"w":702,"h":476}}},"meta":{"app":"https://www.codeandweb.com/texturepacker","version":"1.0","image":"pre.png","format":"RGBA8888","size":{"w":1452,"h":1624},"scale":"1","smartupdate":"$TexturePacker:SmartUpdate:c103eb0753208672aefb1e5994101907:c36cc02f3b29266e309a8b30553bf12c:b19177772e5b315a118f6eaf8bbcdb97$"}}')},e78e:function(t,e,i){"use strict";i("18a5"),i("cb29"),i("38cf");var a=i("b459"),s=i("5a73"),n=i("9f32"),o=i("7f2c"),r=function(t){this.game=t,this.tipText=null,this.tipText2=null,this.closeBtn=null,this.tipTimeBlock=null,this.prog=null,this.totalLeftTime=0,this.leftTime=0};r.prototype.preload=function(){var t=i("5e5b"),e=i("6bb3"),a=i("9d7a"),s=i("c6a2"),n=i("c639");this.game.load.atlasJSONHash("game",t,null,e),this.game.load.spritesheet("daojishi",a,750,414,7),this.game.load.audio("bgMusic",s),this.game.load.audio("openMusic",n)},r.prototype.loadUpdate=function(){this.prog&&(this.prog.width=Object(a["b"])(1.6*this.game.load.progress))},r.prototype.loadRender=function(){this.notStart()},r.prototype.create=function(){var t=this;if("err"===this.game.activeInfo.getHttpInfo)s["a"].success=!1,s["a"].errMsg="获取红包雨信息错误",this.initUI();else if(2===this.game.activeInfo.activityStatus)new o["a"](this.game).show();else if(0===this.game.activeInfo.surplusCount)s["a"].success=!1,s["a"].errMsg="这次活动您已经参与过了",this.initUI();else if(null==this.game.activeInfo.activityId)s["a"].success=!1,s["a"].errMsg="获取红包雨信息错误",this.initUI();else if(0===this.game.activeInfo.activityStatus){var e=1e3*this.game.activeInfo.timestamp+1e3;setTimeout((function(){t.initUI()}),e)}else 1===this.game.activeInfo.activityStatus&&this.initUI()},r.prototype.notStart=function(){if(!this.tipText){var t=this.game.add.sprite(0,0,"pre","bg.png");t.width=this.game.width,t.height=this.game.height,this.closeBtn=this.game.add.button(Object(a["b"])(330),Object(a["b"])(48),"pre",this.onBtnCloseClicked,this,"close.png","close.png","close.png","close.png"),this.closeBtn.width=Object(a["b"])(16),this.closeBtn.height=Object(a["b"])(15);var e=this.game.add.sprite(this.game.world.centerX,0,"pre","ready.png");e.anchor.set(.5,0),e.width=Object(a["b"])(351),e.height=Object(a["b"])(238)}},r.prototype.initUI=function(){if(!this.tipText){var t=this.game.add.sprite(0,0,"pre","bg.png");t.width=this.game.width,t.height=this.game.height;var e=this.game.add.sprite(this.game.world.centerX,0,"pre","ready.png");e.anchor.set(.5,0),e.width=Object(a["b"])(351),e.height=Object(a["b"])(238);var i=Object(a["a"])(e,Object(a["b"])(8));this.tipText=this.game.add.text(this.game.world.centerX,i,"红包雨马上开始..."),this.tipText.fontSize=Object(a["b"])(20),this.tipText.fill="#FFDDA2",this.tipText.anchor.set(.5,0);var s=Object(a["a"])(e,Object(a["b"])(42));this.tipText2=this.game.add.text(this.game.world.centerX,s,"抢到的红包越多，越有机会获得丰厚的奖励哦！"),this.tipText2.fontSize=Object(a["b"])(13),this.tipText2.fill="#ffd899",this.tipText2.anchor.set(.5,0);var n=Object(a["a"])(this.tipText2,Object(a["b"])(80)),o=this.game.add.sprite(this.game.world.centerX,n,"pre","prog_bg.png");o.anchor.set(.5,0),o.width=Object(a["b"])(160),o.height=Object(a["b"])(10);var r=Object(a["c"])(o,0,0);this.prog=this.game.add.sprite(r.x,r.y,"pre","prog.png"),this.prog.anchor.set(0,0),this.prog.width=Object(a["b"])(1),this.prog.height=Object(a["b"])(10),this.closeBtn=this.game.add.button(Object(a["b"])(330),Object(a["b"])(48),"pre",this.onBtnCloseClicked,this,"close.png","close.png","close.png","close.png"),this.closeBtn.width=Object(a["b"])(16),this.closeBtn.height=Object(a["b"])(15),this.startGame()}},r.prototype.onBtnCloseClicked=function(){new n["a"](this.game).show()},r.prototype.startGame=function(){s["a"].preloadTime<=0?this.game.state.start("game"):(this.leftTime=s["a"].preloadTime,this.totalLeftTime=this.leftTime,this.game.time.events.repeat(Phaser.Timer.SECOND,this.leftTime,this.refreshTime,this))},r.prototype.refreshTime=function(){if(this.leftTime-=1,2!==this.game.activeInfo.activityStatus)if(this.leftTime<=0||this.totalLeftTime<=0)this.game.state.start("game");else if(this.tipText&&this.prog){this.tipText.text="正在玩命加载中...";var t=100*(this.totalLeftTime-this.leftTime)/this.totalLeftTime;this.prog.width=Object(a["b"])(1.6*t)}else this.leftTime=3},e["a"]=r},eb6a:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("56d7"),s=function(){var t=this,e=t._self._c;return e("div",[t.showPage?e("loading-line"):t._e(),t.activeTimeStatus?e("div",{staticClass:"time-box"},[e("div",{staticClass:"start-time"},[t._v(t._s(t.startDate)+" 准时开抢")]),e("div",{staticClass:"count-down-time"},[t._v(" 距离开抢"),e("span",[t._v(t._s(t.timeInfo.hou))]),t._v(" : "),e("span",[t._v(t._s(t.timeInfo.min))]),t._v(" : "),e("span",[t._v(t._s(t.timeInfo.sec))])])]):t._e()],1)},n=[],o=i("362f"),r=o["a"],h=(i("f631"),i("2877")),c=Object(h["a"])(r,s,n,!1,null,null,null),l=c.exports;i.p=publicPath,Object(a["a"])(l)},ece9:function(t,e,i){"use strict";(function(t){i("18a5"),i("cb29");var a=i("b459"),s=function(t){this.game=t,this.config=null};s.prototype.show=function(t){var e=this.game.add.sprite(0,0,"pageBg","rst_mask.png");e.inputEnabled=!0,e.width=this.game.width,e.height=this.game.height;var i=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"game","rst_bg.png");i.anchor.set(.5,.5),i.width=Object(a["b"])(266),i.height=Object(a["b"])(366);var s=Object(a["c"])(i,0,Object(a["b"])(146)),n=this.game.add.text(this.game.world.centerX,s.y,"对不起，您未中奖");n.fontSize=Object(a["b"])(26),n.fill="#ffd899",n.anchor.set(.5,0);var o=Object(a["c"])(i,0,Object(a["b"])(192)),r=this.game.add.text(this.game.world.centerX,o.y,"下次再来哦~");r.fontSize=Object(a["b"])(26),r.fill="#ffd899",r.anchor.set(.5,0);var h=Object(a["c"])(i,0,Object(a["b"])(250)),c=this.game.add.text(this.game.world.centerX,h.y,"红包越多中奖率越大");c.fontSize=Object(a["b"])(14),c.fill="#ffd899",c.anchor.set(.5,0);var l=Object(a["c"])(i,0,Object(a["b"])(280)),m=this.game.add.button(this.game.world.centerX,l.y,"game",this.onBtnClicked,this,"rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png");if(m.width=Object(a["b"])(193),m.height=Object(a["b"])(52),m.anchor.set(.5,0),t.super){var d=Object(a["c"])(i,Object(a["b"])(212),Object(a["b"])(3)),g=this.game.add.sprite(d.x,d.y,"game","rst_super_icon.png");g.anchor.set(0,0),g.width=Object(a["b"])(40),g.height=Object(a["b"])(33)}},s.prototype.onBtnClicked=function(){t.navigateBack({delta:1})},e["a"]=s}).call(this,i("7189")["default"])},f631:function(t,e,i){"use strict";i("8669")},f667:function(t,e,i){"use strict";(function(t){i("18a5"),i("cb29");var a=i("b459"),s=function(t){this.game=t};s.prototype.show=function(){var t=this.game.add.sprite(0,0,"pre","bg.png");t.width=this.game.width,t.height=this.game.height;var e=this.game.add.graphics(0,0);e.beginFill(0,.1),e.drawRect(0,0,this.game.world.width,this.game.world.height);var i=this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,"game","rst_bg.png");i.anchor.set(.5,.5),i.width=Object(a["b"])(266),i.height=Object(a["b"])(366);var s=Object(a["c"])(i,0,Object(a["b"])(50)),n=this.game.add.image(this.game.world.centerX,s.y,"game","rst_cry.png");n.anchor.set(.5,0),n.width=Object(a["b"])(135),n.height=Object(a["b"])(118);var o=Object(a["c"])(i,0,Object(a["b"])(222)),r=this.game.add.text(this.game.world.centerX,o.y,"手慢了，下次再快点哦~");r.fontSize=Object(a["b"])(18),r.fontWeight="bold",r.fill="white",r.anchor.set(.5,0);var h=Object(a["c"])(i,0,Object(a["b"])(280)),c=this.game.add.button(this.game.world.centerX,h.y,"game",this.onBtnClicked,this,"rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png","rst_btn_ok.png");c.width=Object(a["b"])(193),c.height=Object(a["b"])(52),c.anchor.set(.5,0)},s.prototype.onBtnClicked=function(){t.navigateBack({delta:1})},e["a"]=s}).call(this,i("7189")["default"])}});