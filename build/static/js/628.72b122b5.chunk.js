/*! For license information please see 628.72b122b5.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[628],{1091:function(e,t,n){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return(r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}).apply(null,arguments)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,s=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!==typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return r(e,o(t))});var y,b=L(Array.prototype.forEach),v=L(Array.prototype.pop),T=L(Array.prototype.push),N=L(String.prototype.toLowerCase),E=L(String.prototype.toString),A=L(String.prototype.match),w=L(String.prototype.replace),S=L(String.prototype.indexOf),_=L(String.prototype.trim),x=L(RegExp.prototype.test),k=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(y,t)});function L(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function O(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:N,l&&l(e,null);for(var o=t.length;o--;){var a=t[o];if("string"===typeof a){var i=n(a);i!==a&&(c(t)||(t[o]=i),a=i)}e[a]=!0}return e}function D(e){var t,n=p(null);for(t in e)!0===h(i,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return L(n.get);if("function"===typeof n.value)return L(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var C=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),M=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),U=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),z=m(["#text"]),P=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),B=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=f(/<%[\w\W]*|[\w\W]*%>/gm),Y=f(/\${[\w\W]*}/gm),$=f(/^data-[\-\w.\u00B7-\uFFFF]/),K=f(/^aria-[\-\w]+$/),V=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),J=f(/^(?:\w+script|data):/i),X=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=f(/^html$/i),Q=function(){return"undefined"===typeof window?null:window},ee=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null;n.currentScript&&n.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=n.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q(),r=function(e){return t(e)};if(r.version="2.4.7",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,s=n.Node,u=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,y=n.trustedTypes,L=u.prototype,te=R(L,"cloneNode"),ne=R(L,"nextSibling"),re=R(L,"childNodes"),oe=R(L,"parentNode");if("function"===typeof c){var ae=i.createElement("template");ae.content&&ae.content.ownerDocument&&(i=ae.content.ownerDocument)}var ie=ee(y,a),le=ie?ie.createHTML(""):"",ce=i,se=ce.implementation,ue=ce.createNodeIterator,me=ce.createDocumentFragment,fe=ce.getElementsByTagName,pe=a.importNode,de={};try{de=D(i).documentMode?i.documentMode:{}}catch(Ct){}var he={};r.isSupported="function"===typeof oe&&se&&void 0!==se.createHTMLDocument&&9!==de;var ge,ye,be=W,ve=q,Te=Y,Ne=$,Ee=K,Ae=J,we=X,Se=V,_e=null,xe=O({},[].concat(o(C),o(M),o(I),o(U),o(z))),ke=null,Le=O({},[].concat(o(P),o(B),o(j),o(G))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Re=null,Ce=!0,Me=!0,Ie=!1,Fe=!0,Ue=!1,He=!1,ze=!1,Pe=!1,Be=!1,je=!1,Ge=!1,We=!0,qe=!1,Ye="user-content-",$e=!0,Ke=!1,Ve={},Je=null,Xe=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Ze=null,Qe=O({},["audio","video","img","source","image","track"]),et=null,tt=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",rt="http://www.w3.org/2000/svg",ot="http://www.w3.org/1999/xhtml",at=ot,it=!1,lt=null,ct=O({},[nt,rt,ot],E),st=["application/xhtml+xml","text/html"],ut="text/html",mt=null,ft=i.createElement("form"),pt=function(e){return e instanceof RegExp||e instanceof Function},dt=function(t){mt&&mt===t||(t&&"object"===e(t)||(t={}),t=D(t),ge=ge=-1===st.indexOf(t.PARSER_MEDIA_TYPE)?ut:t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===ge?E:N,_e="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS,ye):xe,ke="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR,ye):Le,lt="ALLOWED_NAMESPACES"in t?O({},t.ALLOWED_NAMESPACES,E):ct,et="ADD_URI_SAFE_ATTR"in t?O(D(tt),t.ADD_URI_SAFE_ATTR,ye):tt,Ze="ADD_DATA_URI_TAGS"in t?O(D(Qe),t.ADD_DATA_URI_TAGS,ye):Qe,Je="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS,ye):Xe,De="FORBID_TAGS"in t?O({},t.FORBID_TAGS,ye):{},Re="FORBID_ATTR"in t?O({},t.FORBID_ATTR,ye):{},Ve="USE_PROFILES"in t&&t.USE_PROFILES,Ce=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,Ue=t.SAFE_FOR_TEMPLATES||!1,He=t.WHOLE_DOCUMENT||!1,Be=t.RETURN_DOM||!1,je=t.RETURN_DOM_FRAGMENT||!1,Ge=t.RETURN_TRUSTED_TYPE||!1,Pe=t.FORCE_BODY||!1,We=!1!==t.SANITIZE_DOM,qe=t.SANITIZE_NAMED_PROPS||!1,$e=!1!==t.KEEP_CONTENT,Ke=t.IN_PLACE||!1,Se=t.ALLOWED_URI_REGEXP||Se,at=t.NAMESPACE||ot,Oe=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&pt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&pt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Ue&&(Me=!1),je&&(Be=!0),Ve&&(_e=O({},o(z)),ke=[],!0===Ve.html&&(O(_e,C),O(ke,P)),!0===Ve.svg&&(O(_e,M),O(ke,B),O(ke,G)),!0===Ve.svgFilters&&(O(_e,I),O(ke,B),O(ke,G)),!0===Ve.mathMl&&(O(_e,U),O(ke,j),O(ke,G))),t.ADD_TAGS&&(_e===xe&&(_e=D(_e)),O(_e,t.ADD_TAGS,ye)),t.ADD_ATTR&&(ke===Le&&(ke=D(ke)),O(ke,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&O(et,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(Je===Xe&&(Je=D(Je)),O(Je,t.FORBID_CONTENTS,ye)),$e&&(_e["#text"]=!0),He&&O(_e,["html","head","body"]),_e.table&&(O(_e,["tbody"]),delete De.tbody),m&&m(t),mt=t)},ht=O({},["mi","mo","mn","ms","mtext"]),gt=O({},["foreignobject","desc","title","annotation-xml"]),yt=O({},["title","style","font","a","script"]),bt=O({},M);O(bt,I),O(bt,F);var vt=O({},U);O(vt,H);var Tt=function(e){var t=oe(e);t&&t.tagName||(t={namespaceURI:at,tagName:"template"});var n=N(e.tagName),r=N(t.tagName);return!!lt[e.namespaceURI]&&(e.namespaceURI===rt?t.namespaceURI===ot?"svg"===n:t.namespaceURI===nt?"svg"===n&&("annotation-xml"===r||ht[r]):Boolean(bt[n]):e.namespaceURI===nt?t.namespaceURI===ot?"math"===n:t.namespaceURI===rt?"math"===n&&gt[r]:Boolean(vt[n]):e.namespaceURI===ot?!(t.namespaceURI===rt&&!gt[r])&&!(t.namespaceURI===nt&&!ht[r])&&!vt[n]&&(yt[n]||!bt[n]):!("application/xhtml+xml"!==ge||!lt[e.namespaceURI]))},Nt=function(e){T(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Ct){try{e.outerHTML=le}catch(Ct){e.remove()}}},Et=function(e,t){try{T(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Ct){T(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!ke[e])if(Be||je)try{Nt(t)}catch(Ct){}else try{t.setAttribute(e,"")}catch(Ct){}},At=function(e){var t,n;if(Pe)e="<remove></remove>"+e;else{var r=A(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&at===ot&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(at===ot)try{t=(new g).parseFromString(o,ge)}catch(Ct){}if(!t||!t.documentElement){t=se.createDocument(at,"template",null);try{t.documentElement.innerHTML=it?le:o}catch(Ct){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),at===ot?fe.call(t,He?"html":"body")[0]:He?t.documentElement:a},wt=function(e){return ue.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT,null,!1)},St=function(e){return e instanceof h&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof d)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},_t=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},xt=function(e,t,n){he[e]&&b(he[e],(function(e){e.call(r,t,n,mt)}))},kt=function(e){var t;if(xt("beforeSanitizeElements",e,null),St(e))return Nt(e),!0;if(x(/[\u0080-\uFFFF]/,e.nodeName))return Nt(e),!0;var n=ye(e.nodeName);if(xt("uponSanitizeElement",e,{tagName:n,allowedTags:_e}),e.hasChildNodes()&&!_t(e.firstElementChild)&&(!_t(e.content)||!_t(e.content.firstElementChild))&&x(/<[/\w]/g,e.innerHTML)&&x(/<[/\w]/g,e.textContent))return Nt(e),!0;if("select"===n&&x(/<template/i,e.innerHTML))return Nt(e),!0;if(!_e[n]||De[n]){if(!De[n]&&Ot(n)){if(Oe.tagNameCheck instanceof RegExp&&x(Oe.tagNameCheck,n))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))return!1}if($e&&!Je[n]){var o=oe(e)||e.parentNode,a=re(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(te(a[i],!0),ne(e))}return Nt(e),!0}return e instanceof u&&!Tt(e)?(Nt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!x(/<\/no(script|embed|frames)/i,e.innerHTML)?(Ue&&3===e.nodeType&&(t=e.textContent,t=w(t,be," "),t=w(t,ve," "),t=w(t,Te," "),e.textContent!==t&&(T(r.removed,{element:e.cloneNode()}),e.textContent=t)),xt("afterSanitizeElements",e,null),!1):(Nt(e),!0)},Lt=function(e,t,n){if(We&&("id"===t||"name"===t)&&(n in i||n in ft))return!1;if(Me&&!Re[t]&&x(Ne,t));else if(Ce&&x(Ee,t));else if(!ke[t]||Re[t]){if(!(Ot(e)&&(Oe.tagNameCheck instanceof RegExp&&x(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&x(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&x(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(et[t]);else if(x(Se,w(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==S(n,"data:")||!Ze[e])if(Ie&&!x(Ae,w(n,we,"")));else if(n)return!1;return!0},Ot=function(e){return e.indexOf("-")>0},Dt=function(t){var n,o,a,i;xt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ke};for(i=l.length;i--;){var s=n=l[i],u=s.name,m=s.namespaceURI;if(o="value"===u?n.value:_(n.value),a=ye(u),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,xt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(Et(u,t),c.keepAttr))if(Fe||!x(/\/>/i,o)){Ue&&(o=w(o,be," "),o=w(o,ve," "),o=w(o,Te," "));var f=ye(t.nodeName);if(Lt(f,a,o)){if(!qe||"id"!==a&&"name"!==a||(Et(u,t),o=Ye+o),ie&&"object"===e(y)&&"function"===typeof y.getAttributeType)if(m);else switch(y.getAttributeType(f,a)){case"TrustedHTML":o=ie.createHTML(o);break;case"TrustedScriptURL":o=ie.createScriptURL(o)}try{m?t.setAttributeNS(m,u,o):t.setAttribute(u,o),v(r.removed)}catch(Ct){}}}else Et(u,t)}xt("afterSanitizeAttributes",t,null)}},Rt=function e(t){var n,r=wt(t);for(xt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)xt("uponSanitizeShadowNode",n,null),kt(n)||(n.content instanceof l&&e(n.content),Dt(n));xt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(t){var o,i,c,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((it=!t)&&(t="\x3c!--\x3e"),"string"!==typeof t&&!_t(t)){if("function"!==typeof t.toString)throw k("toString is not a function");if("string"!==typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(n.toStaticHTML)||"function"===typeof n.toStaticHTML){if("string"===typeof t)return n.toStaticHTML(t);if(_t(t))return n.toStaticHTML(t.outerHTML)}return t}if(ze||dt(f),r.removed=[],"string"===typeof t&&(Ke=!1),Ke){if(t.nodeName){var p=ye(t.nodeName);if(!_e[p]||De[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)1===(i=(o=At("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!Be&&!Ue&&!He&&-1===t.indexOf("<"))return ie&&Ge?ie.createHTML(t):t;if(!(o=At(t)))return Be?null:Ge?le:""}o&&Pe&&Nt(o.firstChild);for(var d=wt(Ke?t:o);c=d.nextNode();)3===c.nodeType&&c===u||kt(c)||(c.content instanceof l&&Rt(c.content),Dt(c),u=c);if(u=null,Ke)return t;if(Be){if(je)for(m=me.call(o.ownerDocument);o.firstChild;)m.appendChild(o.firstChild);else m=o;return(ke.shadowroot||ke.shadowrootmod)&&(m=pe.call(a,m,!0)),m}var h=He?o.outerHTML:o.innerHTML;return He&&_e["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&x(Z,o.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+h),Ue&&(h=w(h,be," "),h=w(h,ve," "),h=w(h,Te," ")),ie&&Ge?ie.createHTML(h):h},r.setConfig=function(e){dt(e),ze=!0},r.clearConfig=function(){mt=null,ze=!1},r.isValidAttribute=function(e,t,n){mt||dt({});var r=ye(e),o=ye(t);return Lt(r,o,n)},r.addHook=function(e,t){"function"===typeof t&&(he[e]=he[e]||[],T(he[e],t))},r.removeHook=function(e){if(he[e])return v(he[e])},r.removeHooks=function(e){he[e]&&(he[e]=[])},r.removeAllHooks=function(){he={}},r}()}()}}]);
//# sourceMappingURL=628.72b122b5.chunk.js.map