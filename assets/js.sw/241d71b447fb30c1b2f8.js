"use strict";(()=>{(self.webpackChunkmodern_prestashop_build_tool=self.webpackChunkmodern_prestashop_build_tool||[]).push([[376],{376:(W,b,u)=>{u.r(b),u.d(b,{default:()=>H});var y=u(7628),h=u(4625);function H(K){let{swiper:e,extendParams:U,on:m,emit:V}=K;const a=(0,y.Me)(),k=(0,y.Jj)();e.keyboard={enabled:!1},U({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function g(L){if(!e.enabled)return;const{rtlTranslate:s}=e;let t=L;t.originalEvent&&(t=t.originalEvent);const i=t.keyCode||t.charCode,_=e.params.keyboard.pageUpDown,o=_&&i===33,r=_&&i===34,d=i===37,f=i===39,c=i===38,p=i===40;if(!e.allowSlideNext&&(e.isHorizontal()&&f||e.isVertical()&&p||r)||!e.allowSlidePrev&&(e.isHorizontal()&&d||e.isVertical()&&c||o))return!1;if(!(t.shiftKey||t.altKey||t.ctrlKey||t.metaKey)&&!(a.activeElement&&a.activeElement.nodeName&&(a.activeElement.nodeName.toLowerCase()==="input"||a.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(o||r||d||f||c||p)){let E=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const C=e.$el,P=C[0].clientWidth,$=C[0].clientHeight,N=k.innerWidth,O=k.innerHeight,n=e.$el.offset();s&&(n.left-=e.$el[0].scrollLeft);const A=[[n.left,n.top],[n.left+P,n.top],[n.left,n.top+$],[n.left+P,n.top+$]];for(let w=0;w<A.length;w+=1){const l=A[w];if(l[0]>=0&&l[0]<=N&&l[1]>=0&&l[1]<=O){if(l[0]===0&&l[1]===0)continue;E=!0}}if(!E)return}e.isHorizontal()?((o||r||d||f)&&(t.preventDefault?t.preventDefault():t.returnValue=!1),((r||f)&&!s||(o||d)&&s)&&e.slideNext(),((o||d)&&!s||(r||f)&&s)&&e.slidePrev()):((o||r||c||p)&&(t.preventDefault?t.preventDefault():t.returnValue=!1),(r||p)&&e.slideNext(),(o||c)&&e.slidePrev()),V("keyPress",i)}}function v(){e.keyboard.enabled||((0,h.Z)(a).on("keydown",g),e.keyboard.enabled=!0)}function D(){!e.keyboard.enabled||((0,h.Z)(a).off("keydown",g),e.keyboard.enabled=!1)}m("init",()=>{e.params.keyboard.enabled&&v()}),m("destroy",()=>{e.keyboard.enabled&&D()}),Object.assign(e.keyboard,{enable:v,disable:D})}}}]);})();
