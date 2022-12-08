"use strict";(()=>{var it=Object.defineProperty,st=Object.defineProperties;var nt=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var k=(c,r,o)=>r in c?it(c,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[r]=o,p=(c,r)=>{for(var o in r||(r={}))ot.call(r,o)&&k(c,o,r[o]);if(G)for(var o of G(r))rt.call(r,o)&&k(c,o,r[o]);return c},$=(c,r)=>st(c,nt(r));var lt=typeof require!="undefined"?require:c=>{throw new Error('Dynamic require of "'+c+'" is not supported')};(self.webpackChunkFalcon_theme=self.webpackChunkFalcon_theme||[]).push([[813,618],{7813:(c,r,o)=>{o.r(r),o.d(r,{default:()=>H});var U=o(5311),u=o.n(U),O=o(7618);const T="popover",M="4.6.0",A="bs.popover",h=`.${A}`,F=u().fn[T],i="bs-popover",w=new RegExp(`(^|\\s)${i}\\S+`,"g"),g=$(p({},O.default.Default),{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),m=$(p({},O.default.DefaultType),{content:"(string|element|function)"}),K="fade",y="show",f=".popover-header",j=".popover-body",L={HIDE:`hide${h}`,HIDDEN:`hidden${h}`,SHOW:`show${h}`,SHOWN:`shown${h}`,INSERTED:`inserted${h}`,CLICK:`click${h}`,FOCUSIN:`focusin${h}`,FOCUSOUT:`focusout${h}`,MOUSEENTER:`mouseenter${h}`,MOUSELEAVE:`mouseleave${h}`};class _ extends O.default{static get VERSION(){return M}static get Default(){return g}static get NAME(){return T}static get DATA_KEY(){return A}static get Event(){return L}static get EVENT_KEY(){return h}static get DefaultType(){return m}isWithContent(){return this.getTitle()||this._getContent()}addAttachmentClass(l){u()(this.getTipElement()).addClass(`${i}-${l}`)}getTipElement(){return this.tip=this.tip||u()(this.config.template)[0],this.tip}setContent(){const l=u()(this.getTipElement());this.setElementContent(l.find(f),this.getTitle());let a=this._getContent();typeof a=="function"&&(a=a.call(this.element)),this.setElementContent(l.find(j),a),l.removeClass(`${K} ${y}`)}_getContent(){return this.element.getAttribute("data-content")||this.config.content}_cleanTipClass(){const l=u()(this.getTipElement()),a=l.attr("class").match(w);a!==null&&a.length>0&&l.removeClass(a.join(""))}static _jQueryInterface(l){return this.each(function(){let a=u()(this).data(A);const v=typeof l=="object"?l:null;if(!(!a&&/dispose|hide/.test(l))&&(a||(a=new _(this,v),u()(this).data(A,a)),typeof l=="string")){if(typeof a[l]=="undefined")throw new TypeError(`No method named "${l}"`);a[l]()}})}}u().fn[T]=_._jQueryInterface,u().fn[T].Constructor=_,u().fn[T].noConflict=()=>(u().fn[T]=F,_._jQueryInterface);const H=_},7618:(c,r,o)=>{o.r(r),o.d(r,{default:()=>x});const U=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],O={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},T=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,M=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function A(C,t){const e=C.nodeName.toLowerCase();if(t.indexOf(e)!==-1)return U.indexOf(e)!==-1?Boolean(C.nodeValue.match(T)||C.nodeValue.match(M)):!0;const s=t.filter(n=>n instanceof RegExp);for(let n=0,d=s.length;n<d;n++)if(e.match(s[n]))return!0;return!1}function h(C,t,e){if(C.length===0)return C;if(e&&typeof e=="function")return e(C);const n=new window.DOMParser().parseFromString(C,"text/html"),d=Object.keys(t),P=[].slice.call(n.body.querySelectorAll("*"));for(let b=0,Y=P.length;b<Y;b++){const E=P[b],I=E.nodeName.toLowerCase();if(d.indexOf(E.nodeName.toLowerCase())===-1){E.parentNode.removeChild(E);continue}const tt=[].slice.call(E.attributes),et=[].concat(t["*"]||[],t[I]||[]);tt.forEach(B=>{A(B,et)||E.removeAttribute(B.nodeName)})}return n.body.innerHTML}var F=o(5311),i=o.n(F),w=o(8981),g=o(980);const m="tooltip",K="4.6.0",y="bs.tooltip",f=`.${y}`,j=i().fn[m],L="bs-tooltip",_=new RegExp(`(^|\\s)${L}\\S+`,"g"),H=["sanitize","whiteList","sanitizeFn"],z={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},l={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},a={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:O,popperConfig:null},v="show",W="out",Q={HIDE:`hide${f}`,HIDDEN:`hidden${f}`,SHOW:`show${f}`,SHOWN:`shown${f}`,INSERTED:`inserted${f}`,CLICK:`click${f}`,FOCUSIN:`focusin${f}`,FOCUSOUT:`focusout${f}`,MOUSEENTER:`mouseenter${f}`,MOUSELEAVE:`mouseleave${f}`},D="fade",N="show",Z=".tooltip-inner",X=".arrow",R="hover",V="focus",J="click",q="manual";class S{constructor(t,e){if(typeof w.Z=="undefined")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}static get VERSION(){return K}static get Default(){return a}static get NAME(){return m}static get DATA_KEY(){return y}static get Event(){return Q}static get EVENT_KEY(){return f}static get DefaultType(){return z}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(!!this._isEnabled)if(t){const e=this.constructor.DATA_KEY;let s=i()(t.currentTarget).data(e);s||(s=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(e,s)),s._activeTrigger.click=!s._activeTrigger.click,s._isWithActiveTrigger()?s._enter(null,s):s._leave(null,s)}else{if(i()(this.getTipElement()).hasClass(N)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout),i().removeData(this.element,this.constructor.DATA_KEY),i()(this.element).off(this.constructor.EVENT_KEY),i()(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&i()(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null}show(){if(i()(this.element).css("display")==="none")throw new Error("Please use show on visible elements");const t=i().Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){i()(this.element).trigger(t);const e=g.Z.findShadowRoot(this.element),s=i().contains(e!==null?e:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!s)return;const n=this.getTipElement(),d=g.Z.getUID(this.constructor.NAME);n.setAttribute("id",d),this.element.setAttribute("aria-describedby",d),this.setContent(),this.config.animation&&i()(n).addClass(D);const P=typeof this.config.placement=="function"?this.config.placement.call(this,n,this.element):this.config.placement,b=this._getAttachment(P);this.addAttachmentClass(b);const Y=this._getContainer();i()(n).data(this.constructor.DATA_KEY,this),i().contains(this.element.ownerDocument.documentElement,this.tip)||i()(n).appendTo(Y),i()(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new w.Z(this.element,n,this._getPopperConfig(b)),i()(n).addClass(N),i()(n).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&i()(document.body).children().on("mouseover",null,i().noop);const E=()=>{this.config.animation&&this._fixTransition();const I=this._hoverState;this._hoverState=null,i()(this.element).trigger(this.constructor.Event.SHOWN),I===W&&this._leave(null,this)};if(i()(this.tip).hasClass(D)){const I=g.Z.getTransitionDurationFromElement(this.tip);i()(this.tip).one(g.Z.TRANSITION_END,E).emulateTransitionEnd(I)}else E()}}hide(t){const e=this.getTipElement(),s=i().Event(this.constructor.Event.HIDE),n=()=>{this._hoverState!==v&&e.parentNode&&e.parentNode.removeChild(e),this._cleanTipClass(),this.element.removeAttribute("aria-describedby"),i()(this.element).trigger(this.constructor.Event.HIDDEN),this._popper!==null&&this._popper.destroy(),t&&t()};if(i()(this.element).trigger(s),!s.isDefaultPrevented()){if(i()(e).removeClass(N),"ontouchstart"in document.documentElement&&i()(document.body).children().off("mouseover",null,i().noop),this._activeTrigger[J]=!1,this._activeTrigger[V]=!1,this._activeTrigger[R]=!1,i()(this.tip).hasClass(D)){const d=g.Z.getTransitionDurationFromElement(e);i()(e).one(g.Z.TRANSITION_END,n).emulateTransitionEnd(d)}else n();this._hoverState=""}}update(){this._popper!==null&&this._popper.scheduleUpdate()}isWithContent(){return Boolean(this.getTitle())}addAttachmentClass(t){i()(this.getTipElement()).addClass(`${L}-${t}`)}getTipElement(){return this.tip=this.tip||i()(this.config.template)[0],this.tip}setContent(){const t=this.getTipElement();this.setElementContent(i()(t.querySelectorAll(Z)),this.getTitle()),i()(t).removeClass(`${D} ${N}`)}setElementContent(t,e){if(typeof e=="object"&&(e.nodeType||e.jquery)){this.config.html?i()(e).parent().is(t)||t.empty().append(e):t.text(i()(e).text());return}this.config.html?(this.config.sanitize&&(e=h(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e)}getTitle(){let t=this.element.getAttribute("data-original-title");return t||(t=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),t}_getPopperConfig(t){const e={placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:X},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:s=>{s.originalPlacement!==s.placement&&this._handlePopperPlacementChange(s)},onUpdate:s=>this._handlePopperPlacementChange(s)};return p(p({},e),this.config.popperConfig)}_getOffset(){const t={};return typeof this.config.offset=="function"?t.fn=e=>(e.offsets=p(p({},e.offsets),this.config.offset(e.offsets,this.element)||{}),e):t.offset=this.config.offset,t}_getContainer(){return this.config.container===!1?document.body:g.Z.isElement(this.config.container)?i()(this.config.container):i()(document).find(this.config.container)}_getAttachment(t){return l[t.toUpperCase()]}_setListeners(){this.config.trigger.split(" ").forEach(e=>{if(e==="click")i()(this.element).on(this.constructor.Event.CLICK,this.config.selector,s=>this.toggle(s));else if(e!==q){const s=e===R?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===R?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;i()(this.element).on(s,this.config.selector,d=>this._enter(d)).on(n,this.config.selector,d=>this._leave(d))}}),this._hideModalHandler=()=>{this.element&&this.hide()},i()(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=$(p({},this.config),{trigger:"manual",selector:""}):this._fixTitle()}_fixTitle(){const t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||t!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}_enter(t,e){const s=this.constructor.DATA_KEY;if(e=e||i()(t.currentTarget).data(s),e||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(s,e)),t&&(e._activeTrigger[t.type==="focusin"?V:R]=!0),i()(e.getTipElement()).hasClass(N)||e._hoverState===v){e._hoverState=v;return}if(clearTimeout(e._timeout),e._hoverState=v,!e.config.delay||!e.config.delay.show){e.show();return}e._timeout=setTimeout(()=>{e._hoverState===v&&e.show()},e.config.delay.show)}_leave(t,e){const s=this.constructor.DATA_KEY;if(e=e||i()(t.currentTarget).data(s),e||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),i()(t.currentTarget).data(s,e)),t&&(e._activeTrigger[t.type==="focusout"?V:R]=!1),!e._isWithActiveTrigger()){if(clearTimeout(e._timeout),e._hoverState=W,!e.config.delay||!e.config.delay.hide){e.hide();return}e._timeout=setTimeout(()=>{e._hoverState===W&&e.hide()},e.config.delay.hide)}}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=i()(this.element).data();return Object.keys(e).forEach(s=>{H.indexOf(s)!==-1&&delete e[s]}),t=p(p(p({},this.constructor.Default),e),typeof t=="object"&&t?t:{}),typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),typeof t.title=="number"&&(t.title=t.title.toString()),typeof t.content=="number"&&(t.content=t.content.toString()),g.Z.typeCheckConfig(m,t,this.constructor.DefaultType),t.sanitize&&(t.template=h(t.template,t.whiteList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this.config)for(const e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t}_cleanTipClass(){const t=i()(this.getTipElement()),e=t.attr("class").match(_);e!==null&&e.length&&t.removeClass(e.join(""))}_handlePopperPlacementChange(t){this.tip=t.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))}_fixTransition(){const t=this.getTipElement(),e=this.config.animation;t.getAttribute("x-placement")===null&&(i()(t).removeClass(D),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)}static _jQueryInterface(t){return this.each(function(){const e=i()(this);let s=e.data(y);const n=typeof t=="object"&&t;if(!(!s&&/dispose|hide/.test(t))&&(s||(s=new S(this,n),e.data(y,s)),typeof t=="string")){if(typeof s[t]=="undefined")throw new TypeError(`No method named "${t}"`);s[t]()}})}}i().fn[m]=S._jQueryInterface,i().fn[m].Constructor=S,i().fn[m].noConflict=()=>(i().fn[m]=j,S._jQueryInterface);const x=S}}]);})();
