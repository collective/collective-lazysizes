!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.lazysizes=e():t.lazysizes=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="++resource++collective.lazysizes/",e(e.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){t.exports=n.p+"lazysizes-icon.png"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=(n.n(i),n(5));n.n(r)},function(t,e,n){!function(e,i){var r=function(){i(e.lazySizes),e.removeEventListener("lazyunveilread",r,!0)};i=i.bind(null,e,e.document),"object"==typeof t&&t.exports?i(n(4)):e.lazySizes?r():e.addEventListener("lazyunveilread",r,!0)}(window,function(t,e,n){"use strict";function i(){if(t.twttr&&twttr.widgets)return void twttr.widgets.load();if(!r){var n=e.createElement("script"),i=e.getElementsByTagName("script")[0];n.src="//platform.twitter.com/widgets.js",r=!0,i.parentNode.insertBefore(n,i)}}var r;e.addEventListener("lazybeforeunveil",function(t){if(t.detail.instance==n){var e=t.target.getAttribute("data-twitter");e&&(n.aC(t.target,e),i())}})})},function(t,e){!function(e,n){var i=function(t,e){"use strict";if(e.getElementsByClassName){var n,i,r=e.documentElement,a=t.Date,o=t.HTMLPictureElement,s=t.addEventListener,l=t.setTimeout,u=t.requestAnimationFrame||l,c=t.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},v=Array.prototype.forEach,m=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},z=function(t,e){m(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},y=function(t,e){var n;(n=m(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(n," "))},p=function(t,e,n){var i=n?"addEventListener":"removeEventListener";n&&p(t,e),f.forEach(function(n){t[i](n,e)})},b=function(t,i,r,a,o){var s=e.createEvent("CustomEvent");return r||(r={}),r.instance=n,s.initCustomEvent(i,!a,!o,r),t.dispatchEvent(s),s},h=function(e,n){var r;!o&&(r=t.picturefill||i.pf)?r({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},E=function(){var t,n,i=[],r=[],a=i,o=function(){var e=a;for(a=i.length?r:i,t=!0,n=!1;e.length;)e.shift()();t=!1},s=function(i,r){t&&!r?i.apply(this,arguments):(a.push(i),n||(n=!0,(e.hidden?l:u)(o)))};return s._lsFlush=o,s}(),w=function(t,e){return e?function(){E(t)}:function(){var e=this,n=arguments;E(function(){t.apply(e,n)})}},x=function(t){var e,n=0,r=i.ricTimeout,o=function(){e=!1,n=a.now(),t()},s=c&&i.ricTimeout?function(){c(o,{timeout:r}),r!==i.ricTimeout&&(r=i.ricTimeout)}:w(function(){l(o)},!0);return function(t){var i;(t=!0===t)&&(r=33),e||(e=!0,i=125-(a.now()-n),i<0&&(i=0),t||i<9&&c?s():l(s,i))}},M=function(t){var e,n,i=function(){e=null,t()},r=function(){var t=a.now()-n;t<99?l(r,99-t):(c||i)(i)};return function(){n=a.now(),e||(e=l(r,99))}};!function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};i=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n)e in i||(i[e]=n[e]);t.lazySizesConfig=i,l(function(){i.init&&L()})}();var _=function(){var o,u,c,f,g,C,_,L,W,T,B,S,F,O,R=/^img$/i,P=/^iframe$/i,k="onscroll"in t&&!/glebot/.test(navigator.userAgent),j=0,H=0,$=-1,D=function(t){H--,t&&t.target&&p(t.target,D),(!t||H<0||!t.target)&&(H=0)},I=function(t,n){var i,a=t,o="hidden"==A(e.body,"visibility")||"hidden"!=A(t,"visibility");for(L-=n,B+=n,W-=n,T+=n;o&&(a=a.offsetParent)&&a!=e.body&&a!=r;)(o=(A(a,"opacity")||1)>0)&&"visible"!=A(a,"overflow")&&(i=a.getBoundingClientRect(),o=T>i.left&&W<i.right&&B>i.top-1&&L<i.bottom+1);return o},q=function(){var t,a,s,l,c,d,g,v,m,z=n.elements;if((f=i.loadMode)&&H<8&&(t=z.length)){a=0,$++,null==F&&("expand"in i||(i.expand=r.clientHeight>500&&r.clientWidth>500?500:370),S=i.expand,F=S*i.expFactor),j<F&&H<1&&$>2&&f>2&&!e.hidden?(j=F,$=0):j=f>1&&$>1&&H<6?S:0;for(;a<t;a++)if(z[a]&&!z[a]._lazyRace)if(k)if((v=z[a].getAttribute("data-expand"))&&(d=1*v)||(d=j),m!==d&&(C=innerWidth+d*O,_=innerHeight+d,g=-1*d,m=d),s=z[a].getBoundingClientRect(),(B=s.bottom)>=g&&(L=s.top)<=_&&(T=s.right)>=g*O&&(W=s.left)<=C&&(B||T||W||L)&&(i.loadHidden||"hidden"!=A(z[a],"visibility"))&&(u&&H<3&&!v&&(f<3||$<4)||I(z[a],d))){if(Y(z[a]),c=!0,H>9)break}else!c&&u&&!l&&H<4&&$<4&&f>2&&(o[0]||i.preloadAfterLoad)&&(o[0]||!v&&(B||T||W||L||"auto"!=z[a].getAttribute(i.sizesAttr)))&&(l=o[0]||z[a]);else Y(z[a]);l&&!c&&Y(l)}},G=x(q),J=function(t){z(t.target,i.loadedClass),y(t.target,i.loadingClass),p(t.target,Q),b(t.target,"lazyloaded")},K=w(J),Q=function(t){K({target:t.target})},U=function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}},V=function(t){var e,n=t.getAttribute(i.srcsetAttr);(e=i.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},X=w(function(t,e,n,r,a){var o,s,u,f,g,m;(g=b(t,"lazybeforeunveil",e)).defaultPrevented||(r&&(n?z(t,i.autosizesClass):t.setAttribute("sizes",r)),s=t.getAttribute(i.srcsetAttr),o=t.getAttribute(i.srcAttr),a&&(u=t.parentNode,f=u&&d.test(u.nodeName||"")),m=e.firesLoad||"src"in t&&(s||o||f),g={target:t},m&&(p(t,D,!0),clearTimeout(c),c=l(D,2500),z(t,i.loadingClass),p(t,Q,!0)),f&&v.call(u.getElementsByTagName("source"),V),s?t.setAttribute("srcset",s):o&&!f&&(P.test(t.nodeName)?U(t,o):t.src=o),a&&(s||f)&&h(t,{src:o})),t._lazyRace&&delete t._lazyRace,y(t,i.lazyClass),E(function(){(!m||t.complete&&t.naturalWidth>1)&&(m?D(g):H--,J(g))},!0)}),Y=function(t){var e,n=R.test(t.nodeName),r=n&&(t.getAttribute(i.sizesAttr)||t.getAttribute("sizes")),a="auto"==r;(!a&&u||!n||!t.getAttribute("src")&&!t.srcset||t.complete||m(t,i.errorClass)||!m(t,i.lazyClass))&&(e=b(t,"lazyunveilread").detail,a&&N.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,H++,X(t,e,a,r,n))},Z=function(){if(!u){if(a.now()-g<999)return void l(Z,999);var t=M(function(){i.loadMode=3,G()});u=!0,i.loadMode=3,G(),s("scroll",function(){3==i.loadMode&&(i.loadMode=2),t()},!0)}};return{_:function(){g=a.now(),n.elements=e.getElementsByClassName(i.lazyClass),o=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),O=i.hFac,s("scroll",G,!0),s("resize",G,!0),t.MutationObserver?new MutationObserver(G).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",G,!0),r.addEventListener("DOMAttrModified",G,!0),setInterval(G,999)),s("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,G,!0)}),/d$|^c/.test(e.readyState)?Z():(s("load",Z),e.addEventListener("DOMContentLoaded",G),l(Z,2e4)),n.elements.length?(q(),E._lsFlush()):G()},checkElems:G,unveil:Y}}(),N=function(){var t,n=w(function(t,e,n,i){var r,a,o;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),d.test(e.nodeName||""))for(r=e.getElementsByTagName("source"),a=0,o=r.length;a<o;a++)r[a].setAttribute("sizes",i);n.detail.dataAttr||h(t,n.detail)}),r=function(t,e,i){var r,a=t.parentNode;a&&(i=C(t,a,i),r=b(t,"lazybeforesizes",{width:i,dataAttr:!!e}),r.defaultPrevented||(i=r.detail.width)&&i!==t._lazysizesWidth&&n(t,a,r,i))},a=function(){var e,n=t.length;if(n)for(e=0;e<n;e++)r(t[e])},o=M(a);return{_:function(){t=e.getElementsByClassName(i.autosizesClass),s("resize",o)},checkElems:o,updateElem:r}}(),L=function(){L.i||(L.i=!0,N._(),_._())};return n={cfg:i,autoSizer:N,loader:_,init:L,uP:h,aC:z,rC:y,hC:m,fire:b,gW:C,rAF:E}}}(e,e.document);e.lazySizes=i,"object"==typeof t&&t.exports&&(t.exports=i)}(window)},function(t,e,n){var i,r;!function(a,o){var s=function(t,e){"use strict";if(e.getElementsByClassName){var n,i,r=e.documentElement,a=t.Date,o=t.HTMLPictureElement,s=t.addEventListener,l=t.setTimeout,u=t.requestAnimationFrame||l,c=t.requestIdleCallback,d=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],g={},v=Array.prototype.forEach,m=function(t,e){return g[e]||(g[e]=new RegExp("(\\s|^)"+e+"(\\s|$)")),g[e].test(t.getAttribute("class")||"")&&g[e]},z=function(t,e){m(t,e)||t.setAttribute("class",(t.getAttribute("class")||"").trim()+" "+e)},y=function(t,e){var n;(n=m(t,e))&&t.setAttribute("class",(t.getAttribute("class")||"").replace(n," "))},p=function(t,e,n){var i=n?"addEventListener":"removeEventListener";n&&p(t,e),f.forEach(function(n){t[i](n,e)})},b=function(t,i,r,a,o){var s=e.createEvent("CustomEvent");return r||(r={}),r.instance=n,s.initCustomEvent(i,!a,!o,r),t.dispatchEvent(s),s},h=function(e,n){var r;!o&&(r=t.picturefill||i.pf)?r({reevaluate:!0,elements:[e]}):n&&n.src&&(e.src=n.src)},A=function(t,e){return(getComputedStyle(t,null)||{})[e]},C=function(t,e,n){for(n=n||t.offsetWidth;n<i.minSize&&e&&!t._lazysizesWidth;)n=e.offsetWidth,e=e.parentNode;return n},E=function(){var t,n,i=[],r=[],a=i,o=function(){var e=a;for(a=i.length?r:i,t=!0,n=!1;e.length;)e.shift()();t=!1},s=function(i,r){t&&!r?i.apply(this,arguments):(a.push(i),n||(n=!0,(e.hidden?l:u)(o)))};return s._lsFlush=o,s}(),w=function(t,e){return e?function(){E(t)}:function(){var e=this,n=arguments;E(function(){t.apply(e,n)})}},x=function(t){var e,n=0,r=i.ricTimeout,o=function(){e=!1,n=a.now(),t()},s=c&&i.ricTimeout?function(){c(o,{timeout:r}),r!==i.ricTimeout&&(r=i.ricTimeout)}:w(function(){l(o)},!0);return function(t){var i;(t=!0===t)&&(r=33),e||(e=!0,i=125-(a.now()-n),i<0&&(i=0),t||i<9&&c?s():l(s,i))}},M=function(t){var e,n,i=function(){e=null,t()},r=function(){var t=a.now()-n;t<99?l(r,99-t):(c||i)(i)};return function(){n=a.now(),e||(e=l(r,99))}};!function(){var e,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};i=t.lazySizesConfig||t.lazysizesConfig||{};for(e in n)e in i||(i[e]=n[e]);t.lazySizesConfig=i,l(function(){i.init&&L()})}();var _=function(){var o,u,c,f,g,C,_,L,W,T,B,S,F,O,R=/^img$/i,P=/^iframe$/i,k="onscroll"in t&&!/glebot/.test(navigator.userAgent),j=0,H=0,$=-1,D=function(t){H--,t&&t.target&&p(t.target,D),(!t||H<0||!t.target)&&(H=0)},I=function(t,n){var i,a=t,o="hidden"==A(e.body,"visibility")||"hidden"!=A(t,"visibility");for(L-=n,B+=n,W-=n,T+=n;o&&(a=a.offsetParent)&&a!=e.body&&a!=r;)(o=(A(a,"opacity")||1)>0)&&"visible"!=A(a,"overflow")&&(i=a.getBoundingClientRect(),o=T>i.left&&W<i.right&&B>i.top-1&&L<i.bottom+1);return o},q=function(){var t,a,s,l,c,d,g,v,m,z=n.elements;if((f=i.loadMode)&&H<8&&(t=z.length)){a=0,$++,null==F&&("expand"in i||(i.expand=r.clientHeight>500&&r.clientWidth>500?500:370),S=i.expand,F=S*i.expFactor),j<F&&H<1&&$>2&&f>2&&!e.hidden?(j=F,$=0):j=f>1&&$>1&&H<6?S:0;for(;a<t;a++)if(z[a]&&!z[a]._lazyRace)if(k)if((v=z[a].getAttribute("data-expand"))&&(d=1*v)||(d=j),m!==d&&(C=innerWidth+d*O,_=innerHeight+d,g=-1*d,m=d),s=z[a].getBoundingClientRect(),(B=s.bottom)>=g&&(L=s.top)<=_&&(T=s.right)>=g*O&&(W=s.left)<=C&&(B||T||W||L)&&(i.loadHidden||"hidden"!=A(z[a],"visibility"))&&(u&&H<3&&!v&&(f<3||$<4)||I(z[a],d))){if(Y(z[a]),c=!0,H>9)break}else!c&&u&&!l&&H<4&&$<4&&f>2&&(o[0]||i.preloadAfterLoad)&&(o[0]||!v&&(B||T||W||L||"auto"!=z[a].getAttribute(i.sizesAttr)))&&(l=o[0]||z[a]);else Y(z[a]);l&&!c&&Y(l)}},G=x(q),J=function(t){z(t.target,i.loadedClass),y(t.target,i.loadingClass),p(t.target,Q),b(t.target,"lazyloaded")},K=w(J),Q=function(t){K({target:t.target})},U=function(t,e){try{t.contentWindow.location.replace(e)}catch(n){t.src=e}},V=function(t){var e,n=t.getAttribute(i.srcsetAttr);(e=i.customMedia[t.getAttribute("data-media")||t.getAttribute("media")])&&t.setAttribute("media",e),n&&t.setAttribute("srcset",n)},X=w(function(t,e,n,r,a){var o,s,u,f,g,m;(g=b(t,"lazybeforeunveil",e)).defaultPrevented||(r&&(n?z(t,i.autosizesClass):t.setAttribute("sizes",r)),s=t.getAttribute(i.srcsetAttr),o=t.getAttribute(i.srcAttr),a&&(u=t.parentNode,f=u&&d.test(u.nodeName||"")),m=e.firesLoad||"src"in t&&(s||o||f),g={target:t},m&&(p(t,D,!0),clearTimeout(c),c=l(D,2500),z(t,i.loadingClass),p(t,Q,!0)),f&&v.call(u.getElementsByTagName("source"),V),s?t.setAttribute("srcset",s):o&&!f&&(P.test(t.nodeName)?U(t,o):t.src=o),a&&(s||f)&&h(t,{src:o})),t._lazyRace&&delete t._lazyRace,y(t,i.lazyClass),E(function(){(!m||t.complete&&t.naturalWidth>1)&&(m?D(g):H--,J(g))},!0)}),Y=function(t){var e,n=R.test(t.nodeName),r=n&&(t.getAttribute(i.sizesAttr)||t.getAttribute("sizes")),a="auto"==r;(!a&&u||!n||!t.getAttribute("src")&&!t.srcset||t.complete||m(t,i.errorClass)||!m(t,i.lazyClass))&&(e=b(t,"lazyunveilread").detail,a&&N.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,H++,X(t,e,a,r,n))},Z=function(){if(!u){if(a.now()-g<999)return void l(Z,999);var t=M(function(){i.loadMode=3,G()});u=!0,i.loadMode=3,G(),s("scroll",function(){3==i.loadMode&&(i.loadMode=2),t()},!0)}};return{_:function(){g=a.now(),n.elements=e.getElementsByClassName(i.lazyClass),o=e.getElementsByClassName(i.lazyClass+" "+i.preloadClass),O=i.hFac,s("scroll",G,!0),s("resize",G,!0),t.MutationObserver?new MutationObserver(G).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",G,!0),r.addEventListener("DOMAttrModified",G,!0),setInterval(G,999)),s("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(t){e.addEventListener(t,G,!0)}),/d$|^c/.test(e.readyState)?Z():(s("load",Z),e.addEventListener("DOMContentLoaded",G),l(Z,2e4)),n.elements.length?(q(),E._lsFlush()):G()},checkElems:G,unveil:Y}}(),N=function(){var t,n=w(function(t,e,n,i){var r,a,o;if(t._lazysizesWidth=i,i+="px",t.setAttribute("sizes",i),d.test(e.nodeName||""))for(r=e.getElementsByTagName("source"),a=0,o=r.length;a<o;a++)r[a].setAttribute("sizes",i);n.detail.dataAttr||h(t,n.detail)}),r=function(t,e,i){var r,a=t.parentNode;a&&(i=C(t,a,i),r=b(t,"lazybeforesizes",{width:i,dataAttr:!!e}),r.defaultPrevented||(i=r.detail.width)&&i!==t._lazysizesWidth&&n(t,a,r,i))},a=function(){var e,n=t.length;if(n)for(e=0;e<n;e++)r(t[e])},o=M(a);return{_:function(){t=e.getElementsByClassName(i.autosizesClass),s("resize",o)},checkElems:o,updateElem:r}}(),L=function(){L.i||(L.i=!0,N._(),_._())};return n={cfg:i,autoSizer:N,loader:_,init:L,uP:h,aC:z,rC:y,hC:m,fire:b,gW:C,rAF:E}}}(a,a.document);"object"==typeof t&&t.exports?t.exports=s:(i=s,void 0!==(r="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=r))}(window)}])});
//# sourceMappingURL=lazysizes.js.map