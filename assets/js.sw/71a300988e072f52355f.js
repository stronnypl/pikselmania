"use strict";(()=>{var et=Object.defineProperty,it=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var nt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var L=(l,r,o)=>r in l?et(l,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[r]=o,f=(l,r)=>{for(var o in r||(r={}))nt.call(r,o)&&L(l,o,r[o]);if(I)for(var o of I(r))ot.call(r,o)&&L(l,o,r[o]);return l},P=(l,r)=>it(l,st(r));var lt=typeof require!="undefined"?require:l=>{throw new Error('Dynamic require of "'+l+'" is not supported')};(self.webpackChunkmodern_prestashop_build_tool=self.webpackChunkmodern_prestashop_build_tool||[]).push([[618],{7618:(l,r,o)=>{o.r(r),o.d(r,{default:()=>q});const U=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],j={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},$=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,F=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function H(g,t){const e=g.nodeName.toLowerCase();if(t.indexOf(e)!==-1)return U.indexOf(e)!==-1?Boolean(g.nodeValue.match($)||g.nodeValue.match(F)):!0;const s=t.filter(n=>n instanceof RegExp);for(let n=0,a=s.length;n<a;n++)if(e.match(s[n]))return!0;return!1}function w(g,t,e){if(g.length===0)return g;if(e&&typeof e=="function")return e(g);const n=new window.DOMParser().parseFromString(g,"text/html"),a=Object.keys(t),v=[].slice.call(n.body.querySelectorAll("*"));for(let d=0,O=v.length;d<O;d++){const c=v[d],b=c.nodeName.toLowerCase();if(a.indexOf(c.nodeName.toLowerCase())===-1){c.parentNode.removeChild(c);continue}const x=[].slice.call(c.attributes),tt=[].concat(t["*"]||[],t[b]||[]);x.forEach(R=>{H(R,tt)||c.removeAttribute(R.nodeName)})}return n.body.innerHTML}var K=o(5311),i=o.n(K),D=o(8981),u=o(980);const m="tooltip",M="4.6.0",A="bs.tooltip",h=`.${A}`,W=i().fn[m],N="bs-tooltip",k=new RegExp(`(^|\\s)${N}\\S+`,"g"),V=["sanitize","whiteList","sanitizeFn"],Y={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},z={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},G={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:j,popperConfig:null},E="show",y="out",Z={HIDE:`hide${h}`,HIDDEN:`hidden${h}`,SHOW:`show${h}`,SHOWN:`shown${h}`,INSERTED:`inserted${h}`,CLICK:`click${h}`,FOCUSIN:`focusin${h}`,FOCUSOUT:`focusout${h}`,MOUSEENTER:`mouseenter${h}`,MOUSELEAVE:`mouseleave${h}`},T="fade",_="show",B=".tooltip-inner",Q=".arrow",C="hover",S="focus",X="click",J="manual";class p{constructor(t,e){if(typeof D.Z=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}static get VERSION(){return M}static get Default(){return G}static get NAME(){return m}static get DATA_KEY(){return A}static get Event(){return Z}static get EVENT_KEY(){return h}static get DefaultType(){return Y}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(!!this._isEnabled)if(t){const e=this.constructor.DATA_KEY;let s=i()(t.currentTarget).data(e);s||(s=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(e,s)),s._activeTrigger.click=!s._activeTrigger.click,s._isWithActiveTrigger()?s._enter(null,s):s._leave(null,s)}else{if(i()(this.getTipElement()).hasClass(_)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),i().removeData(this.element,this.constructor.DATA_KEY),i()(this.element).off(this.constructor.EVENT_KEY),i()(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i()(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null}show(){if(i()(this.element).css("display")==="none")throw new Error("Please use show on visible elements");const t=i().Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i()(this.element).trigger(t);const e=u.Z.findShadowRoot(this.element),s=i().contains(e!==null?e:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!s)return;const n=this.getTipElement(),a=u.Z.getUID(this.constructor.NAME);n.setAttribute("id",a),this.element.setAttribute("aria-describedby",a),this.setContent(),this.config.animation&&i()(n).addClass(T);const v=typeof this.config.placement=="function"?this.config.placement.call(this,n,this.element):this.config.placement,d=this._getAttachment(v);this.addAttachmentClass(d);const O=this._getContainer();i()(n).data(this.constructor.DATA_KEY,this),i().contains(this.element.ownerDocument.documentElement,this.tip)||i()(n).appendTo(O),i()(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new D.Z(this.element,n,this._getPopperConfig(d)),i()(n).addClass(_),i()(n).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&i()(document.body).children().on("mouseover",null,i().noop);const c=()=>{this.config.animation&&this._fixTransition();const b=this._hoverState;this._hoverState=null,i()(this.element).trigger(this.constructor.Event.SHOWN),b===y&&this._leave(null,this)};if(i()(this.tip).hasClass(T)){const b=u.Z.getTransitionDurationFromElement(this.tip);i()(this.tip).one(u.Z.TRANSITION_END,c).emulateTransitionEnd(b)}else c()}}hide(t){const e=this.getTipElement(),s=i().Event(this.constructor.Event.HIDE),n=()=>{this._hoverState!==E&&e.parentNode&&e.parentNode.removeChild(e),this._cleanTipClass(),this.element.removeAttribute("aria-describedby"),i()(this.element).trigger(this.constructor.Event.HIDDEN),this._popper!==null&&this._popper.destroy(),t&&t()};if(i()(this.element).trigger(s),!s.isDefaultPrevented()){if(i()(e).removeClass(_),"ontouchstart"in document.documentElement&&i()(document.body).children().off("mouseover",null,i().noop),this._activeTrigger[X]=!1,this._activeTrigger[S]=!1,this._activeTrigger[C]=!1,i()(this.tip).hasClass(T)){const a=u.Z.getTransitionDurationFromElement(e);i()(e).one(u.Z.TRANSITION_END,n).emulateTransitionEnd(a)}else n();this._hoverState=""}}update(){this._popper!==null&&this._popper.scheduleUpdate()}isWithContent(){return Boolean(this.getTitle())}addAttachmentClass(t){i()(this.getTipElement()).addClass(`${N}-${t}`)}getTipElement(){return this.tip=this.tip||i()(this.config.template)[0],this.tip}setContent(){const t=this.getTipElement();this.setElementContent(i()(t.querySelectorAll(B)),this.getTitle()),i()(t).removeClass(`${T} ${_}`)}setElementContent(t,e){if(typeof e=="object"&&(e.nodeType||e.jquery)){this.config.html?i()(e).parent().is(t)||t.empty().append(e):t.text(i()(e).text());return}this.config.html?(this.config.sanitize&&(e=w(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e)}getTitle(){let t=this.element.getAttribute("data-original-title");return t||(t=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),t}_getPopperConfig(t){const e={placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Q},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:s=>{s.originalPlacement!==s.placement&&this._handlePopperPlacementChange(s)},onUpdate:s=>this._handlePopperPlacementChange(s)};return f(f({},e),this.config.popperConfig)}_getOffset(){const t={};return typeof this.config.offset=="function"?t.fn=e=>(e.offsets=f(f({},e.offsets),this.config.offset(e.offsets,this.element)||{}),e):t.offset=this.config.offset,t}_getContainer(){return this.config.container===!1?document.body:u.Z.isElement(this.config.container)?i()(this.config.container):i()(document).find(this.config.container)}_getAttachment(t){return z[t.toUpperCase()]}_setListeners(){this.config.trigger.split(" ").forEach(e=>{if(e==="click")i()(this.element).on(this.constructor.Event.CLICK,this.config.selector,s=>this.toggle(s));else if(e!==J){const s=e===C?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===C?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;i()(this.element).on(s,this.config.selector,a=>this._enter(a)).on(n,this.config.selector,a=>this._leave(a))}}),this._hideModalHandler=()=>{this.element&&this.hide()},i()(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=P(f({},this.config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||t!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}_enter(t,e){const s=this.constructor.DATA_KEY;if(e=e||i()(t.currentTarget).data(s),e||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(s,e)),t&&(e._activeTrigger[t.type==="focusin"?S:C]=!0),i()(e.getTipElement()).hasClass(_)||e._hoverState===E){e._hoverState=E;return}if(clearTimeout(e._timeout),e._hoverState=E,!e.config.delay||!e.config.delay.show){e.show();return}e._timeout=setTimeout(()=>{e._hoverState===E&&e.show()},e.config.delay.show)}_leave(t,e){const s=this.constructor.DATA_KEY;if(e=e||i()(t.currentTarget).data(s),e||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(s,e)),t&&(e._activeTrigger[t.type==="focusout"?S:C]=!1),!e._isWithActiveTrigger()){if(clearTimeout(e._timeout),e._hoverState=y,!e.config.delay||!e.config.delay.hide){e.hide();return}e._timeout=setTimeout(()=>{e._hoverState===y&&e.hide()},e.config.delay.hide)}}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=i()(this.element).data();return Object.keys(e).forEach(s=>{V.indexOf(s)!==-1&&delete e[s]}),t=f(f(f({},this.constructor.Default),e),typeof t=="object"&&t?t:{}),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),u.Z.typeCheckConfig(m,t,this.constructor.DefaultType),t.sanitize&&(t.template=w(t.template,t.whiteList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this.config)for(const e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t}_cleanTipClass(){const t=i()(this.getTipElement()),e=t.attr("class").match(k);e!==null&&e.length&&t.removeClass(e.join(""))}_handlePopperPlacementChange(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))}_fixTransition(){const t=this.getTipElement(),e=this.config.animation;t.getAttribute("x-placement")===null&&(i()(t).removeClass(T),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)}static _jQueryInterface(t){return this.each(function(){const e=i()(this);let s=e.data(A);const n=typeof t=="object"&&t;if(!(!s&&/dispose|hide/.test(t))&&(s||(s=new p(this,n),e.data(A,s)),typeof t=="string")){if(typeof s[t]=="undefined")throw new TypeError(`No method named "${t}"`);s[t]()}})}}i().fn[m]=p._jQueryInterface,i().fn[m].Constructor=p,i().fn[m].noConflict=()=>(i().fn[m]=W,p._jQueryInterface);const q=p}}]);})();
