!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},e.parcelRequired7c6=a),a("kvC6y");var o=a("bpxeT"),r=a("8nrFW"),s=a("2TvXO"),l=a("4cG42"),d=a("fkFrJ"),c=a("Jmfug"),u=a("7iFtI"),L=a("5xtVg"),f=new(0,(j=a("kvC6y")).default);f.enable("preloader"),L.modal.addEventListener("click",(function(t){var e=(0,c.getCurrentPageFromLS)();t.target.name===L.btnNameKey.WATCHED&&e===c.keyLS.VALUE_PAGE_LIBRARY_W&&D(_);t.target.name===L.btnNameKey.QUEUE&&e===c.keyLS.VALUE_PAGE_LIBRARY_Q&&D(_)}));var g=window.matchMedia("(max-width: 767px)"),b=window.matchMedia("(min-width: 768px) and (max-width: 1279px)"),m=window.matchMedia("(min-width: 1280px)"),h=9,E=(0,c.getLanguageFromLS)(),_=c.keyLS.LS_WATHED_EN_DATA_KEY,p=document.querySelector(".box-main-btnss"),v=document.querySelector(".first-box-btn"),A=document.querySelector(".last-box-btn"),S=document.querySelector(".btn-arrow.left"),y=document.querySelector(".btn-arrow.right"),C=document.querySelector(".watched"),x=document.querySelector(".queue"),k=document.querySelector(".gallery"),T=null,N=0,U=1,w=0;function I(e){e.matches?function(e){U>e&&(U=e);P();var n="",i=0;if(v.classList.add("btn-hidden"),A.classList.add("btn-hidden"),e<=5&&e>0){i=e;for(var a=1;a<=i;a+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';return F(n),void t(r)(p.children).map((function(t,e){t.firstElementChild.textContent=e+1}))}if(e>5&&U<=3){i=5;for(var o=1;o<=i;o+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';return F(n),void t(r)(p.children).map((function(t,e){t.firstElementChild.textContent=e+1}))}if(e>5&&U>3&&U<=e-2){i=5;for(var s=1;s<=i;s+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';return F(n),void t(r)(p.children).map((function(t,e){t.firstElementChild.textContent=U-2+e}))}if(e>5&&U>=e-1){i=5;for(var l=1;l<=i;l+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';F(n),t(r)(p.children).map((function(t,n){t.firstElementChild.textContent=e-4+n}))}}(w):e.matches||function(e){U>e&&(U=e);P();var n="",i=0;if(e<=9){v.classList.add("btn-hidden"),A.classList.add("btn-hidden"),i=e;for(var a=1;a<=i;a+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';return F(n),void t(r)(p.children).map((function(t,e){t.firstElementChild.textContent=e+1}))}if(e>9&&U>5&&U<=e-5){v.classList.remove("btn-hidden"),A.classList.remove("btn-hidden"),i=5;for(var o=1;o<=i;o+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';return F(n),void t(r)(p.children).map((function(t,e){t.firstElementChild.textContent=U-2+e}))}if(e>9&&U<=5){v.classList.add("btn-hidden"),A.classList.remove("btn-hidden"),i=7;for(var s=1;s<=i;s+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';return F(n),t(r)(p.children).map((function(t,e){t.firstElementChild.textContent=e+1})),void G()}if(e>9&&U>e-5){v.classList.remove("btn-hidden"),A.classList.add("btn-hidden"),i=7;for(var l=1;l<=i;l+=1)n+='<li><button type="button" class="main-btn btn-pg"></button></li>';F(n),t(r)(p.children).map((function(t,n){t.firstElementChild.textContent=e-6+n})),G()}}(w)}function M(){E===l.Movie.language.ENGLISH?_=c.keyLS.LS_WATHED_EN_DATA_KEY:E===l.Movie.language.UKRAINIAN&&(_=c.keyLS.LS_WATHED_UA_DATA_KEY)}function D(t){if(T=function(t){try{var e=localStorage.getItem(t);return null===e?null:JSON.parse(e)}catch(t){!function(){K.apply(this,arguments)}(),console.error("Get state error: ",t.message)}}(t),null===T||0===T.length)return R(),O(),v.classList.add("btn-hidden"),A.classList.add("btn-hidden"),function(){H.apply(this,arguments)}(),void f.disable("loader");if(void 0===T)return R(),O(),v.classList.add("btn-hidden"),A.classList.add("btn-hidden"),void f.disable("loader");if(T){N=T.length,n=N,i=h,w=Math.ceil(n/i),O(),I(g),W(U);var e=T.slice((U-1)*h,U*h);(0,u.makeMarkupCard)({results:e})}var n,i}function H(){return(H=t(o)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(E=(0,c.getLanguageFromLS)())===l.Movie.language.ENGLISH?k.innerHTML='<p class="message info animate__bounceInDown">Your watch list is empty.</p>':E===l.Movie.language.UKRAINIAN&&(k.innerHTML='<p class="message info animate__bounceInDown">Ваш список доданих фільмів порожній.</p>');case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function K(){return(K=t(o)(t(s).mark((function e(){return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(E=(0,c.getLanguageFromLS)())===l.Movie.language.ENGLISH?k.innerHTML='<p class="message error animate__bounceInDown">Unknown error. Watched movies cannot be displayed.</p>':E===l.Movie.language.UKRAINIAN&&(k.innerHTML='<p class="message error animate__bounceInDown">Невідома помилка. Додані фільми не відображаються.</p>');case 2:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function R(){p.innerHTML=""}function Y(t){t.matches&&(h=4,D(_))}function q(t){t.matches&&(h=8,D(_),U>w&&(U=w,D(_)),G())}function B(t){t.matches&&(h=9,D(_),U>w&&(U=w,D(_)),G())}function F(t){p.innerHTML=t}function G(){A.lastElementChild.firstElementChild.textContent=w}function W(e){t(r)(p.children).find((function(t){t.firstElementChild.textContent===String(e)&&t.firstElementChild.classList.add("btn-current-pages")}))}function O(){S.classList.add("btn-hidden"),y.classList.add("btn-hidden")}function P(){w>1&U>1&U<w?(S.classList.remove("btn-hidden"),y.classList.remove("btn-hidden")):w<=1?O():w>1&1===U?y.classList.remove("btn-hidden"):w>1&U===w&&S.classList.remove("btn-hidden")}g.addListener(I),g.addListener(Y),b.addListener(q),m.addListener(B),C.addEventListener("click",(function(){f.enable("loader"),E=(0,c.getLanguageFromLS)(),M(),U=1,D(_),(0,c.setCurrentPageToLS)(c.keyLS.VALUE_PAGE_LIBRARY_W),C.classList.add("is-active"),x.classList.remove("is-active"),f.disable("loader")})),x.addEventListener("click",(function(){f.enable("loader"),E=(0,c.getLanguageFromLS)(),E===l.Movie.language.ENGLISH?_=c.keyLS.LS_QUEUE_EN_DATA_KEY:E===l.Movie.language.UKRAINIAN&&(_=c.keyLS.LS_QUEUE_UA_DATA_KEY),U=1,D(_),(0,c.setCurrentPageToLS)(c.keyLS.VALUE_PAGE_LIBRARY_Q),x.classList.add("is-active"),C.classList.remove("is-active"),f.disable("loader")})),p.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;(0,d.handleButtonClick)(),U=Number(t.target.textContent),D(_),W(U)})),v.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;if("..."===t.target.textContent)return U=U>=6?U-5:1,(0,d.handleButtonClick)(),D(_),void W(U);U=1,(0,d.handleButtonClick)(),D(_),W(U)})),A.addEventListener("click",(function(t){if("BUTTON"!==t.target.nodeName)return;if("..."===t.target.textContent)return U=w>=U+5?U+5:w,(0,d.handleButtonClick)(),D(_),void W(U);U=Number(t.target.textContent),(0,d.handleButtonClick)(),D(_),W(U)})),S.addEventListener("click",(function(){if(1===U)return;U-=1,(0,d.handleButtonClick)(),D(_),W(U)})),y.addEventListener("click",(function(){if(U===w)return;U+=1,(0,d.handleButtonClick)(),D(_),W(U)})),function(){E||(E=(0,c.setLanguageToLS)(l.Movie.language.ENGLISH));E===l.Movie.language.UKRAINIAN&&(_=c.keyLS.LS_WATHED_UA_DATA_KEY);(0,c.switchBtnLang)(E),(0,c.setCurrentPageToLS)(c.keyLS.VALUE_PAGE_LIBRARY_W),setTimeout((function(){f.disable("preloader")}),1e3)}(),M(),Y(g),q(b),B(m),a("3nfD2");l=a("4cG42"),c=a("Jmfug");var J=a("bEuMR"),j=a("kvC6y"),Q=(o=a("bpxeT"),s=a("2TvXO"),c=a("Jmfug"),l=a("4cG42"),c=a("Jmfug"),{linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),notLoggedMessage:document.querySelector(".js-notLoggedMessage")}),V=Q.linkHome,X=Q.linkMyLibrary,Z=Q.btnSignUp,z=Q.btnLogIn;function $(){return tt.apply(this,arguments)}function tt(){return(tt=t(o)(t(s).mark((function e(){var n;return t(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,c.getLanguageFromLS)();case 2:(n=t.sent)===l.Movie.language.ENGLISH&&(V.textContent="Home",X.textContent="My library",Z.textContent="Sign Up","Вхід"===z.textContent?z.textContent="Log In":"Вихід"===z.textContent&&(z.textContent="Log Out"),C.textContent="watched",x.textContent="queue",c.refs.btnSwitchEN.textContent="en",c.refs.btnSwitchUA.textContent="ua"),n===l.Movie.language.UKRAINIAN&&(V.textContent="Головна",X.textContent="Бібліотека",Z.textContent="Реєстрація","Log In"===z.textContent?z.textContent="Вхід":"Log Out"===z.textContent&&(z.textContent="Вихід"),C.textContent="Переглянуті",x.textContent="До перегляду",c.refs.btnSwitchEN.textContent="англ",c.refs.btnSwitchUA.textContent="укр");case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}$();var et=a("astf2"),nt=new(0,j.default);c.refs.btnSwitchEN.addEventListener("click",(function(){(0,c.setLanguageToLS)(l.Movie.language.ENGLISH),f.enable("loader"),D(_=_===c.keyLS.LS_WATHED_EN_DATA_KEY||_===c.keyLS.LS_WATHED_UA_DATA_KEY?c.keyLS.LS_WATHED_EN_DATA_KEY:c.keyLS.LS_QUEUE_EN_DATA_KEY),$(),(0,J.renderFooter)(),(0,et.translateAuthForms)(),nt.disable("loader")})),c.refs.btnSwitchUA.addEventListener("click",(function(){(0,c.setLanguageToLS)(l.Movie.language.UKRAINIAN),f.enable("loader"),D(_=_===c.keyLS.LS_WATHED_EN_DATA_KEY||_===c.keyLS.LS_WATHED_UA_DATA_KEY?c.keyLS.LS_WATHED_UA_DATA_KEY:c.keyLS.LS_QUEUE_UA_DATA_KEY),$(),(0,J.renderFooter)(),(0,et.translateAuthForms)(),nt.disable("loader")})),a("5xtVg"),a("fkFrJ"),a("bEuMR"),a("aZhHc"),a("sPj1j"),a("bmNaJ"),a("astf2")}();
//# sourceMappingURL=library.4bf7a19c.js.map
