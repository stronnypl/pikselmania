"use strict";(()=>{(self.webpackChunkFalcon_theme=self.webpackChunkFalcon_theme||[]).push([[333],{8333:(_,b,m)=>{m.r(b),m.d(b,{default:()=>S});var C=m(9482),w=m(4625);function S(T){let{swiper:e,extendParams:P,on:c}=T;P({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let x=!1,I=!1;e.thumbs={swiper:null};function O(){const i=e.thumbs.swiper;if(!i||i.destroyed)return;const s=i.clickedIndex,a=i.clickedSlide;if(a&&(0,w.Z)(a).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof s=="undefined"||s===null)return;let r;if(i.params.loop?r=parseInt((0,w.Z)(i.clickedSlide).attr("data-swiper-slide-index"),10):r=s,e.params.loop){let n=e.activeIndex;e.slides.eq(n).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,n=e.activeIndex);const d=e.slides.eq(n).prevAll(`[data-swiper-slide-index="${r}"]`).eq(0).index(),u=e.slides.eq(n).nextAll(`[data-swiper-slide-index="${r}"]`).eq(0).index();typeof d=="undefined"?r=u:typeof u=="undefined"?r=d:u-n<n-d?r=u:r=d}e.slideTo(r)}function v(){const{thumbs:i}=e.params;if(x)return!1;x=!0;const s=e.constructor;if(i.swiper instanceof s)e.thumbs.swiper=i.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if((0,C.Kn)(i.swiper)){const a=Object.assign({},i.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new s(a),I=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",O),!0}function f(i){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const a=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():s.params.slidesPerView,r=e.params.thumbs.autoScrollOffset,n=r&&!s.params.loop;if(e.realIndex!==s.realIndex||n){let t=s.activeIndex,l,h;if(s.params.loop){s.slides.eq(t).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,t=s.activeIndex);const p=s.slides.eq(t).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),o=s.slides.eq(t).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof p=="undefined"?l=o:typeof o=="undefined"?l=p:o-t==t-p?l=s.params.slidesPerGroup>1?o:t:o-t<t-p?l=o:l=p,h=e.activeIndex>e.previousIndex?"next":"prev"}else l=e.realIndex,h=l>e.previousIndex?"next":"prev";n&&(l+=h==="next"?r:-1*r),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(l)<0&&(s.params.centeredSlides?l>t?l=l-Math.floor(a/2)+1:l=l+Math.floor(a/2)-1:l>t&&s.params.slidesPerGroup===1,s.slideTo(l,i?0:void 0))}let d=1;const u=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),s.slides.removeClass(u),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let t=0;t<d;t+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+t}"]`).addClass(u);else for(let t=0;t<d;t+=1)s.slides.eq(e.realIndex+t).addClass(u)}c("beforeInit",()=>{const{thumbs:i}=e.params;!i||!i.swiper||(v(),f(!0))}),c("slideChange update resize observerUpdate",()=>{f()}),c("setTransition",(i,s)=>{const a=e.thumbs.swiper;!a||a.destroyed||a.setTransition(s)}),c("beforeDestroy",()=>{const i=e.thumbs.swiper;!i||i.destroyed||I&&i.destroy()}),Object.assign(e.thumbs,{init:v,update:f})}}}]);})();
