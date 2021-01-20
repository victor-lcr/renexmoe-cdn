var d=require("pjax/lib/execute-scripts"),h=require("pjax/lib/foreach-els"),f=require("pjax/lib/parse-options"),m=require("pjax/lib/switches"),u=require("pjax/lib/uniqueid"),w=require("pjax/lib/events/on"),a=require("pjax/lib/events/trigger"),p=require("pjax/lib/util/clone"),x=require("pjax/lib/util/contains"),b=require("pjax/lib/util/extend"),q=require("pjax/lib/util/noop"),c=function(e){this.state={numPendingSwitches:0,href:null,options:null},this.options=f(e),this.log("Pjax options",this.options),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=u(),this.parseDOM(document),w(window,"popstate",function(t){if(t.state){var i=p(this.options);i.url=t.state.url,i.title=t.state.title,i.history=!1,i.scrollPos=t.state.scrollPos,t.state.uid<this.lastUid?i.backward=!0:i.forward=!0,this.lastUid=t.state.uid,this.loadUrl(t.state.url,i)}}.bind(this))};c.switches=m,c.prototype={log:require("pjax/lib/proto/log"),getElements:function(e){return e.querySelectorAll(this.options.elements)},parseDOM:function(e){var t=require("pjax/lib/proto/parse-element");h(this.getElements(e),t,this)},refresh:function(e){this.parseDOM(e||document)},reload:function(){window.location.reload()},attachLink:require("pjax/lib/proto/attach-link"),attachForm:require("pjax/lib/proto/attach-form"),forEachSelectors:function(e,t,i){return require("pjax/lib/foreach-selectors").bind(this)(this.options.selectors,e,t,i)},switchSelectors:function(e,t,i,s){return require("pjax/lib/switches-selectors").bind(this)(this.options.switches,this.options.switchesOptions,e,t,i,s)},latestChance:function(e){window.location=e},onSwitch:function(){a(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()},loadContent:function(e,t){if(typeof e!="string"){a(document,"pjax:complete pjax:error",t);return}var i=document.implementation.createHTMLDocument("pjax"),s=/<html[^>]+>/gi,l=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,o=e.match(s);if(o&&o.length&&(o=o[0].match(l),o.length&&(o.shift(),o.forEach(function(r){var n=r.trim().split("=");n.length===1?i.documentElement.setAttribute(n[0],!0):i.documentElement.setAttribute(n[0],n[1].slice(1,-1))}))),i.documentElement.innerHTML=e,this.log("load content",i.documentElement.attributes,i.documentElement.innerHTML.length),document.activeElement&&x(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch(r){}this.switchSelectors(this.options.selectors,i,document,t)},abortRequest:require("pjax/lib/abort-request"),doRequest:require("./send-req.js"),handleResponse:require("pjax/lib/proto/handle-response"),loadUrl:function(e,t){t=typeof t=="object"?b({},this.options,t):p(this.options),this.log("load href",e,t),this.abortRequest(this.request),a(document,"pjax:send",t),this.request=this.doRequest(e,t,this.handleResponse.bind(this))},afterAllSwitches:function(){var e=Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();e&&document.activeElement!==e&&e.focus(),this.options.selectors.forEach(function(r){h(document.querySelectorAll(r),function(n){d(n)})});var t=this.state;if(t.options.history&&(window.history.state||(this.lastUid=this.maxUid=u(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=u(),window.history.pushState({url:t.href,title:t.options.title,uid:this.maxUid,scrollPos:[0,0]},t.options.title,t.href)),this.forEachSelectors(function(r){this.parseDOM(r)},this),a(document,"pjax:complete pjax:success",t.options),typeof t.options.analytics=="function"&&t.options.analytics(),t.options.history){var i=document.createElement("a");if(i.href=this.state.href,i.hash){var s=i.hash.slice(1);s=decodeURIComponent(s);var l=0,o=document.getElementById(s)||document.getElementsByName(s)[0];if(o&&o.offsetParent)do l+=o.offsetTop,o=o.offsetParent;while(o);window.scrollTo(0,l)}else t.options.scrollTo!==!1&&(t.options.scrollTo.length>1?window.scrollTo(t.options.scrollTo[0],t.options.scrollTo[1]):window.scrollTo(0,t.options.scrollTo))}else t.options.scrollRestoration&&t.options.scrollPos&&window.scrollTo(t.options.scrollPos[0],t.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}},c.isSupported=require("pjax/lib/is-supported");export default c;