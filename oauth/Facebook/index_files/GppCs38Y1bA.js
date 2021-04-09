/*!CK:3477022863!*//*1458074693,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["fsClt"]); }

__d("ClientServiceWorkerMessage",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){"use strict";this.$ClientServiceWorkerMessage1=i;this.$ClientServiceWorkerMessage2=j;this.$ClientServiceWorkerMessage3=k;}h.prototype.sendViaController=function(){"use strict";if(!navigator.serviceWorker||!navigator.serviceWorker.controller)return;var i=new MessageChannel();if(this.$ClientServiceWorkerMessage3)i.port1.onmessage=this.$ClientServiceWorkerMessage3;navigator.serviceWorker.controller.postMessage({command:this.$ClientServiceWorkerMessage1,data:this.$ClientServiceWorkerMessage2},[i.port2]);};f.exports=h;},null);
__d('ServiceWorkerLoginAndLogout',['ClientServiceWorkerMessage'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){new h(k,null).sendViaController();}var j={login:function(){i('login');},logout:function(){i('logout');}};f.exports=j;},null);
__d('tickerPhoteSnowLiftOpenStatus',['ArbiterMixin'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i='CheckIsOpen',j={registerOpenChecker:function(k){return j.subscribe(i,function(l,m){if(k())m.is_Open=true;});},checkIsOpen:function(){var k={is_Open:false};j.inform(i,k);return k.is_Open;}};Object.assign(j,h);f.exports=j;},null);
__d('XUIErrorDialogImpl',['ContextualDialog','ContextualLayerAutoFlip','ContextualLayerUpdateOnScroll','JSXDOM','LayerRefocusOnHide','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n={getNewDialog:function(){var o=k.div({className:"_1tp8"}),p=k.div({className:"_53ij _1tp9"},k.div({className:"_1tpa"}),o),q=new h({addedBehaviors:[j,i],theme:{wrapperClassName:"_1tpb",arrowDimensions:{offset:12,length:16}}},p);q.disableBehavior(l);q.shouldSetARIAProperties(false);return {dialog:q,dialogBodyNode:p,dialogMessageNode:o};}};f.exports=n;},null);
__d('LoginFormError',['DOM','Event','XUIErrorDialogImpl','containsNode'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l={set:function(m,n){var o=j.getNewDialog(),p=o.dialog,q=o.dialogMessageNode;h.setContent(q,n);p.setContext(m).setPosition('right').show();i.listen(m,'blur',function(r){!k(p.getContentRoot(),r.relatedTarget)&&p.hide();});i.listen(m,'focus',function(){return p.show();});i.listen(m,'mouseover',function(){return p.show();});}};f.exports=l;},null);
__d('VideoPermalinkURI',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={isValid:function(i){return h.parse(i)!==null;},parse:function(i){if(this.isValidLegacy(i)){var j=i.getQueryData();if(j.v)return {video_id:j.v,set_token:j.set};return null;}var k=i.getPath();if(k[k.length-1]==='/')k=k.substring(0,k.length-1);var l=k.split('/');if(l.length>=3&&l[2]==='videos')if(l.length===4&&/^\d+$/.exec(l[3])!==null){return {video_id:l[3],set_token:null};}else if(l.length===5&&/^\d+$/.exec(l[4])!==null)return {video_id:l[4],set_token:l[3]};return null;},isValidLegacy:function(i){var j=i.getPath();if(j[j.length-1]==='/')j=j.substring(0,j.length-1);if(j==='/photo.php'||j==='/force_photo/photo.php'||j==='/photo'||j==='/force_photo/photo/index.php'||j==='/photo/index.php'||j==='/force_photo/photo'||j==='/video.php'||j==='/video/video.php')return true;return false;}};f.exports=h;},null);
__d('ServiceWorkerLoginAndLogoutListener',['Event','ServiceWorkerLoginAndLogout'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={listen:function(k,l){var m=function(){if(l==='login'){i.login();}else if(l==='logout'){i.logout();}else throw new Error('bad login type given');};h.listen(k,{click:m,submit:m});}};f.exports=j;},null);
__d('Spotlight',['Arbiter','ArbiterMixin','DOM','JSXDOM','Layer','LayerAutoFocus','LayerTabIsolation','ModalLayer','Vector','classWithMixins','csx','cx','joinClasses','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w;v=babelHelpers.inherits(x,q(l,u(i)));w=v&&v.prototype;function x(z,aa){'use strict';w.constructor.call(this,z,aa);this.stageMinSize=new p(0,0);this.stagePadding=new p(0,0);}x.prototype._buildWrapper=function(z,aa){'use strict';var ba=t("_n8 _3qx",z.rootClassName);return (k.div({className:ba},k.div({className:"_n9"},aa)));};x.prototype._getDefaultBehaviors=function(){'use strict';return w._getDefaultBehaviors.call(this).concat([y,m,n,o]);};x.prototype.getContentRoot=function(){'use strict';if(!this._content)this._content=j.find(this.getRoot(),"div._n3");return this._content;};x.prototype.configure=function(z){'use strict';if(z.stageMinSize)this.stageMinSize=z.stageMinSize;if(z.stagePadding)this.stagePadding=z.stagePadding;};x.prototype.onContentLoaded=function(){'use strict';this.inform('content-load');};x.prototype.updatePermalink=function(z){'use strict';this.inform('permalinkchange',z);};Object.assign(x.prototype,{stageMinSize:null,stagePadding:null});function y(z){'use strict';this._layer=z;}y.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe(['show','hide'],function(z,aa){if(z==='show'){h.inform('layer_shown',{type:'Spotlight'});}else h.inform('layer_hidden',{type:'Spotlight'});});};y.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};Object.assign(y.prototype,{_subscription:null});f.exports=x;},null);
__d("XPhotosSnowliftProfilePicXOutAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/photos\/profilepic\/xout\/",{});},null);
__d("XPushRegisterServiceWorkerController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/push\/register\/service_worker\/",{});},null);