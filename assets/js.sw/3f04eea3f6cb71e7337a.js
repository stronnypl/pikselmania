"use strict";(()=>{(self.webpackChunkmodern_prestashop_build_tool=self.webpackChunkmodern_prestashop_build_tool||[]).push([[372],{8372:(R,D,c)=>{c.r(D),c.d(D,{default:()=>A});var y=c(7628),O=c(4625),f=c(9482);function A(B){let{swiper:e,extendParams:C,on:X,emit:w}=B;const L=(0,y.Jj)();C({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let T,E=(0,f.zO)(),u;const i=[];function S(t){const s=10,g=40,d=800;let o=0,a=0,r=0,n=0;return"detail"in t&&(a=t.detail),"wheelDelta"in t&&(a=-t.wheelDelta/120),"wheelDeltaY"in t&&(a=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(o=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(o=a,a=0),r=o*s,n=a*s,"deltaY"in t&&(n=t.deltaY),"deltaX"in t&&(r=t.deltaX),t.shiftKey&&!r&&(r=n,n=0),(r||n)&&t.deltaMode&&(t.deltaMode===1?(r*=g,n*=g):(r*=d,n*=d)),r&&!o&&(o=r<1?-1:1),n&&!a&&(a=n<1?-1:1),{spinX:o,spinY:a,pixelX:r,pixelY:n}}function z(){!e.enabled||(e.mouseEntered=!0)}function H(){!e.enabled||(e.mouseEntered=!1)}function Y(t){return e.params.mousewheel.thresholdDelta&&t.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&(0,f.zO)()-E<e.params.mousewheel.thresholdTime?!1:t.delta>=6&&(0,f.zO)()-E<60?!0:(t.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),w("scroll",t.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),w("scroll",t.raw)),E=new L.Date().getTime(),!1)}function W(t){const s=e.params.mousewheel;if(t.direction<0){if(e.isEnd&&!e.params.loop&&s.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&s.releaseOnEdges)return!0;return!1}function v(t){let s=t,g=!0;if(!e.enabled)return;const d=e.params.mousewheel;e.params.cssMode&&s.preventDefault();let o=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(o=(0,O.Z)(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!o[0].contains(s.target)&&!d.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let a=0;const r=e.rtlTranslate?-1:1,n=S(s);if(d.forceToAxis)if(e.isHorizontal())if(Math.abs(n.pixelX)>Math.abs(n.pixelY))a=-n.pixelX*r;else return!0;else if(Math.abs(n.pixelY)>Math.abs(n.pixelX))a=-n.pixelY;else return!0;else a=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(a===0)return!0;d.invert&&(a=-a);let h=e.getTranslate()+a*d.sensitivity;if(h>=e.minTranslate()&&(h=e.minTranslate()),h<=e.maxTranslate()&&(h=e.maxTranslate()),g=e.params.loop?!0:!(h===e.minTranslate()||h===e.maxTranslate()),g&&e.params.nested&&s.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const l={time:(0,f.zO)(),delta:Math.abs(a),direction:Math.sign(a),raw:t};i.length>=2&&i.shift();const m=i.length?i[i.length-1]:void 0;if(i.push(l),m?(l.direction!==m.direction||l.delta>m.delta||l.time>m.time+150)&&Y(l):Y(l),W(l))return!0}else{const l={time:(0,f.zO)(),delta:Math.abs(a),direction:Math.sign(a)},m=u&&l.time<u.time+500&&l.delta<=u.delta&&l.direction===u.direction;if(!m){u=void 0,e.params.loop&&e.loopFix();let p=e.getTranslate()+a*d.sensitivity;const j=e.isBeginning,K=e.isEnd;if(p>=e.minTranslate()&&(p=e.minTranslate()),p<=e.maxTranslate()&&(p=e.maxTranslate()),e.setTransition(0),e.setTranslate(p),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!j&&e.isBeginning||!K&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(T),T=void 0,i.length>=15&&i.shift();const x=i.length?i[i.length-1]:void 0,I=i[0];if(i.push(l),x&&(l.delta>x.delta||l.direction!==x.direction))i.splice(0);else if(i.length>=15&&l.time-I.time<500&&I.delta-l.delta>=1&&l.delta<=6){const _=a>0?.8:.2;u=l,i.splice(0),T=(0,f.Y3)(()=>{e.slideToClosest(e.params.speed,!0,void 0,_)},0)}T||(T=(0,f.Y3)(()=>{const _=.5;u=l,i.splice(0),e.slideToClosest(e.params.speed,!0,void 0,_)},500))}if(m||w("scroll",s),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),p===e.minTranslate()||p===e.maxTranslate())return!0}}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function P(t){let s=e.$el;e.params.mousewheel.eventsTarget!=="container"&&(s=(0,O.Z)(e.params.mousewheel.eventsTarget)),s[t]("mouseenter",z),s[t]("mouseleave",H),s[t]("wheel",v)}function M(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",v),!0):e.mousewheel.enabled?!1:(P("on"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,v),!0):e.mousewheel.enabled?(P("off"),e.mousewheel.enabled=!1,!0):!1}X("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&M()}),X("destroy",()=>{e.params.cssMode&&M(),e.mousewheel.enabled&&b()}),Object.assign(e.mousewheel,{enable:M,disable:b})}}}]);})();
