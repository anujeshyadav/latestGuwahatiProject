/*! For license information please see 452.c845efe5.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[452],{3320:function(e,t,n){"use strict";n.r(t);var l=n(4),a=n(61),o=n(9),r=n(27),i=n(1),u=n.n(i),c=n(234),d=n.n(c),v=n(912),m=n(916),s=n(904),p=n(905),f=n(245),y=n(906),h=n(907),g=n(943),E=n(908),b=n(894),x=(n(28),n(171)),O=n.n(x),_=(n(235),n(927)),j=n(928),w=n(929),N=n(135),k=n(947),S=n.n(k),C=n(85),F=n(73),L=n.n(F),P=(n(645),n(44)),D=(n(233),n(56)),T=n(5);function A(){A=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,l=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",r=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(S){u=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var o=t&&t.prototype instanceof m?t:m,r=Object.create(o.prototype),i=new w(a||[]);return l(r,"_invoke",{value:x(e,n,i)}),r}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var v={};function m(){}function s(){}function p(){}var f={};u(f,o,(function(){return this}));var y=Object.getPrototypeOf,h=y&&y(y(N([])));h&&h!==t&&n.call(h,o)&&(f=h);var g=p.prototype=m.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;l(this,"_invoke",{value:function(l,o){function r(){return new t((function(a,r){!function l(a,o,r,i){var u=d(e[a],e,o);if("throw"!==u.type){var c=u.arg,v=c.value;return v&&"object"==typeof v&&n.call(v,"__await")?t.resolve(v.__await).then((function(e){l("next",e,r,i)}),(function(e){l("throw",e,r,i)})):t.resolve(v).then((function(e){c.value=e,r(c)}),(function(e){return l("throw",e,r,i)}))}i(u.arg)}(l,o,a,r)}))}return a=a?a.then(r,r):r()}})}function x(e,t,n){var l="suspendedStart";return function(a,o){if("executing"===l)throw new Error("Generator is already running");if("completed"===l){if("throw"===a)throw o;return k()}for(n.method=a,n.arg=o;;){var r=n.delegate;if(r){var i=O(r,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===l)throw l="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);l="executing";var u=d(e,t,n);if("normal"===u.type){if(l=n.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(l="completed",n.method="throw",n.arg=u.arg)}}}function O(e,t){var n=t.method,l=e.iterator[n];if(void 0===l)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var a=d(l,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,v;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function N(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var l=-1,a=function t(){for(;++l<e.length;)if(n.call(e,l))return t.value=e[l],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return s.prototype=p,l(g,"constructor",{value:p,configurable:!0}),l(p,"constructor",{value:s,configurable:!0}),s.displayName=u(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),u(b.prototype,r,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,l,a,o){void 0===o&&(o=Promise);var r=new b(c(t,n,l,a),o);return e.isGeneratorFunction(n)?r:r.next().then((function(e){return e.done?e.value:r.next()}))},E(g),u(g,i,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var l in t)n.push(l);return n.reverse(),function e(){for(;n.length;){var l=n.pop();if(l in t)return e.value=l,e.done=!1,e}return e.done=!0,e}},e.values=N,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function l(n,l){return r.type="throw",r.arg=e,t.next=n,l&&(t.method="next",t.arg=void 0),!!l}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],r=o.completion;if("root"===o.tryLoc)return l("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return l(o.catchLoc,!0);if(this.prev<o.finallyLoc)return l(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return l(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return l(o.finallyLoc)}}}},abrupt:function(e,t){for(var l=this.tryEntries.length-1;l>=0;--l){var a=this.tryEntries[l];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=e,r.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(r)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var l=n.completion;if("throw"===l.type){var a=l.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:N(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.default=function(){var e,t,n,c=Object(i.useState)([]),x=Object(r.a)(c,2),k=x[0],F=x[1],I=Object(i.useState)([]),M=Object(r.a)(I,2),U=M[0],R=M[1],W=Object(i.useState)([]),G=Object(r.a)(W,2),J=G[0],K=G[1],B=Object(i.useState)([]),Y=Object(r.a)(B,2),H=Y[0],V=Y[1],q=Object(i.useState)([]),z=Object(r.a)(q,2),Q=z[0],Z=z[1],$=Object(i.useState)({}),X=Object(r.a)($,2),ee=X[0],te=X[1],ne=Object(i.useState)(!1),le=Object(r.a)(ne,2),ae=le[0],oe=le[1],re=Object(i.useState)({}),ie=Object(r.a)(re,2),ue=ie[0],ce=ie[1],de=Object(i.useState)({}),ve=Object(r.a)(de,2),me=ve[0],se=ve[1],pe=Object(i.useState)({}),fe=Object(r.a)(pe,2),ye=fe[0],he=fe[1],ge=Object(i.useState)(null),Ee=Object(r.a)(ge,2),be=Ee[0],xe=Ee[1],Oe=Object(i.useState)(!1),_e=Object(r.a)(Oe,2),je=_e[0],we=_e[1],Ne=Object(i.useState)({}),ke=Object(r.a)(Ne,2),Se=ke[0],Ce=ke[1],Fe=Object(i.useState)(""),Le=Object(r.a)(Fe,2),Pe=Le[0],De=Le[1],Te=Object(i.useState)(""),Ae=Object(r.a)(Te,2),Ie=Ae[0],Me=Ae[1],Ue=Object(i.useState)({}),Re=Object(r.a)(Ue,2),We=(Re[0],Re[1],Object(i.useContext)(D.a)),Ge=Object(C.g)(),Je=function(e,t,n){var l=e.target,r=l.name,i=l.value,u=l.checked;if("Unit"==r){document.getElementById("unitType").value;var c,d=e.target.value,v=e.target.selectedIndex,m=null===(c=e.target.options[v])||void 0===c?void 0:c.text,s=ye;s.unitType=m,s.unitQty=d,he(s)}De(n),"checkbox"==t?he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},r,u))):"number"==t?/^\d{0,10}$/.test(i)?(he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},r,i))),Me("")):Me("Please enter a valid number with a maximum length of 10 digits"):"file"==t?e.target.files&&he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},r,e.target.files[0]))):i.length?(he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},r,i))),Me("")):he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},r,i)))};Object(i.useEffect)((function(){Object(P.u)().then((function(e){var t,n,l=d.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(l).createProduct),F(null===(t=JSON.parse(l))||void 0===t?void 0:t.createProduct),Ce(null===(n=JSON.parse(l))||void 0===n?void 0:n.createProduct)})).catch((function(e){console.log(e)}));JSON.parse(localStorage.getItem("userData"));var e=JSON.parse(localStorage.getItem("userData"));Object(P.c)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){console.log(e),(null===e||void 0===e?void 0:e.Category)&&R(e.Category)})).catch((function(e){console.log(e)})),Object(P.zc)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){console.log(null===e||void 0===e?void 0:e.Unit),K(null===e||void 0===e?void 0:e.Unit)})).catch((function(e){console.log(e)})),Object(P.cd)(T.Jf,null===e||void 0===e?void 0:e.database).then((function(e){var t=null===e||void 0===e?void 0:e.Warehouse;t&&V(t),console.log(null===e||void 0===e?void 0:e.Warehouse)})).catch((function(e){console.log(e)}))}),[]);var Ke=function(){var e=Object(l.a)(A().mark((function e(t){var n,l,a,o,r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null===be&&void 0==be){e.next=8;break}return(n=new FormData).append("file",be),e.next=6,Object(P.ad)(T.l,n).then((function(e){Ge.push("/app/freshlist/house/houseProductList"),L()("".concat(null===e||void 0===e?void 0:e.message))})).catch((function(e){console.log(e.response),L()("Something Went Wrong")}));case 6:e.next=17;break;case 8:o=new FormData,r=JSON.parse(localStorage.getItem("userData")),o.append("created_by",null===r||void 0===r?void 0:r._id),null===k||void 0===k||null===(l=k.input)||void 0===l||l.map((function(e,t){var n,l,a,r,i;if("text"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type))o.append("".concat(null===e||void 0===e?void 0:e.name._text),ye[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text]);else if("file"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(r=a._attributes)||void 0===r?void 0:r.type)){var u;o.append("file",ye[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text])}else{var c;o.append("".concat(null===e||void 0===e?void 0:e.name._text),ye[null===e||void 0===e||null===(c=e.name)||void 0===c?void 0:c._text])}})),o.append("unitType",null===ye||void 0===ye?void 0:ye.unitType),(null===ye||void 0===ye?void 0:ye.unitQty)&&o.append("unitQty",null===ye||void 0===ye?void 0:ye.unitQty),o.append("addProductType",null===ye||void 0===ye?void 0:ye.ProductType),null===k||void 0===k||null===(a=k.MyDropDown)||void 0===a||a.map((function(e,t){var n,l,a,r;o.append("".concat(null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(l=n.name)||void 0===l?void 0:l._text),ye[null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(r=a.name)||void 0===r?void 0:r._text])})),Ie?L()("Error occured while Entering Details"):(null===ye||void 0===ye?void 0:ye.ProductType)?Object(P.cc)(o).then((function(e){console.log(e),he({}),e.status&&(Ge.push("/app/freshlist/house/houseProductList"),L()("Product Created Successfully"))})).catch((function(e){console.log(e),L()("Enter All Details")})):L()("error","Choose Product Type");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(ye),u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(v.a,null,u.a.createElement(m.a,null,u.a.createElement(s.a,null,u.a.createElement(p.a,{lg:"8",md:"8",sm:"8",className:"mb-1 mt-1"},u.a.createElement("div",{className:"px-2"},u.a.createElement("h3",{className:"mb-2 mx-2"},"Add Product Type"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){oe(!0),he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},"ProductType",e.target.value)))}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"ProductType",className:"ml-1",value:"Product"}),u.a.createElement("span",{style:{marginRight:"20px",fontSize:"18px"}},u.a.createElement("strong",null,"Add Product")),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"ProductType",className:"ml-1",value:"Item"}),u.a.createElement("span",{style:{marginRight:"20px",fontSize:"18px"}},u.a.createElement("strong",null,"Add Item"))))),je||je?u.a.createElement(p.a,{lg:"1",md:"1"},u.a.createElement("div",{className:"mt-2"},u.a.createElement(f.a,{color:"primary",onClick:function(e){e.preventDefault(),we(!1)}},"Back"))):u.a.createElement(p.a,{lg:"3",md:"3"},u.a.createElement("div",{className:"d-flex justify-content-end"},u.a.createElement(f.a,{color:"primary",onClick:function(e){e.preventDefault(),we(!0)}},"Bulk Upload"))),!je&&!je&&u.a.createElement(p.a,{lg:"1",md:"1"},u.a.createElement("div",{className:"float-right"},u.a.createElement(C.b,{render:function(e){var t=e.history;return u.a.createElement(f.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/accounSearch")}}," ","Back")}}))))),u.a.createElement(m.a,null,je&&je?u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"m-1",onSubmit:Ke},u.a.createElement(s.a,null,u.a.createElement(p.a,{lg:"12",md:"12",sm:"12"},u.a.createElement(h.a,null,"OR")),u.a.createElement(p.a,{lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,null,u.a.createElement(h.a,null,"Bulk Import"),u.a.createElement(E.a,{className:"form-control",type:"file",placeholder:"",name:"BulkImport",onChange:function(e){xe(e.target.files[0])}})))),u.a.createElement(s.a,null,u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))):u.a.createElement(u.a.Fragment,null,ae&&ae&&u.a.createElement(y.a,{className:"m-1",onSubmit:Ke},u.a.createElement(s.a,{className:"mb-2"},(null===Se||void 0===Se||null===(e=Se.MyDropDown)||void 0===e?void 0:e.length)>0&&(null===Se||void 0===Se||null===(t=Se.MyDropDown)||void 0===t?void 0:t.map((function(e,t){var n,l,a,o,r,i,c,d,v,m,s,f,y,E,x,O,_,j,w,N,k,S,C,F,P,D,T,A,I,M,R,W,G,K,B,Y,V,q,z,$,X,ee,te,ne,le;return"category"==(null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(l=n.name)||void 0===l?void 0:l._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{key:t,lg:"4",md:"4"},u.a.createElement(h.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.dropdown)||void 0===s||null===(f=s.label)||void 0===f?void 0:f._text),u.a.createElement(b.a,{required:!0,type:"select",placeholder:"Select Category",name:null===e||void 0===e||null===(y=e.dropdown)||void 0===y||null===(E=y.name)||void 0===E?void 0:E._text,value:ye[null===e||void 0===e||null===(x=e.dropdown)||void 0===x||null===(O=x.name)||void 0===O?void 0:O._text],onChange:function(e){Je(e),function(e){if(console.log(e.target.value),"NA"!=e.target.value){var t,n,l=null===U||void 0===U?void 0:U.filter((function(t,n){return(null===t||void 0===t?void 0:t.name)==e.target.value}));console.log(null===(t=l[0])||void 0===t?void 0:t.subcategories),Z(null===(n=l[0])||void 0===n?void 0:n.subcategories)}else L()("Select Category")}(e)}},u.a.createElement("option",{value:"NA"},"--Select Category--"),U&&(null===U||void 0===U?void 0:U.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e.name,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))))):"SubCategory"==(null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(o=a.name)||void 0===o?void 0:o._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{key:t,lg:"4",md:"4"},u.a.createElement(h.a,{className:"mb-1"},null===e||void 0===e||null===(_=e.dropdown)||void 0===_||null===(j=_.label)||void 0===j?void 0:j._text),u.a.createElement(b.a,{required:!0,type:"select",placeholder:"Select Category",name:null===e||void 0===e||null===(w=e.dropdown)||void 0===w||null===(N=w.name)||void 0===N?void 0:N._text,value:ye[null===e||void 0===e||null===(k=e.dropdown)||void 0===k||null===(S=k.name)||void 0===S?void 0:S._text],onChange:Je},u.a.createElement("option",{value:"NA"},"--Select SubCategory--"),Q&&(null===Q||void 0===Q?void 0:Q.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e.name,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.name)})))))):(null===e||void 0===e||null===(r=e.dropdown)||void 0===r||null===(i=r.name)||void 0===i||null===(c=i._text)||void 0===c||null===(d=c.toLowerCase())||void 0===d?void 0:d.includes("arehouse"))?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{key:t,lg:"4",md:"4"},u.a.createElement(h.a,{className:"mb-1"},null===e||void 0===e||null===(C=e.dropdown)||void 0===C||null===(F=C.label)||void 0===F?void 0:F._text," *"),u.a.createElement(b.a,{required:!0,type:"select",placeholder:"Select WareHouse",name:null===e||void 0===e||null===(P=e.dropdown)||void 0===P||null===(D=P.name)||void 0===D?void 0:D._text,value:ye[null===e||void 0===e||null===(T=e.dropdown)||void 0===T||null===(A=T.name)||void 0===A?void 0:A._text],onChange:Je},u.a.createElement("option",{value:"NA"},"--Select WareHouse--"),H&&(null===H||void 0===H?void 0:H.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e._id,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.warehouseName)})))))):"Unit"==(null===e||void 0===e||null===(v=e.dropdown)||void 0===v||null===(m=v.name)||void 0===m?void 0:m._text)?u.a.createElement(u.a.Fragment,null,ye.ProductType&&"Item"==(null===ye||void 0===ye?void 0:ye.ProductType)?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{lg:"4",md:"4"},u.a.createElement("div",{className:""},u.a.createElement("label",{className:"mb-1",for:"unit"},"Select Unit"),u.a.createElement("select",{id:"unitType",className:"form-control",name:"Unit",placeholder:"selecetedUnit",value:ye[null===e||void 0===e||null===(I=e.dropdown)||void 0===I||null===(M=I.name)||void 0===M?void 0:M._text],onChange:Je},u.a.createElement("option",{value:""},"--select Unit--"),(null===J||void 0===J?void 0:J.length)>0&&(null===J||void 0===J?void 0:J.map((function(e){return u.a.createElement("option",{value:null===e||void 0===e?void 0:e.primaryUnit,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.primaryUnit)}))),u.a.createElement("option",{value:"kg"},"Kilogram (kg)"),u.a.createElement("option",{value:"Pcs"},"Pieces (Pcs)"),u.a.createElement("option",{value:"g"},"Gram (g)"),u.a.createElement("option",{value:"tonne"},"Metric Ton (tonne)"),u.a.createElement("option",{value:"m"},"Meter (m)"),u.a.createElement("option",{value:"cm"},"Centimeter (cm)"),u.a.createElement("option",{value:"mm"},"Millimeter (mm)"),u.a.createElement("option",{value:"in"},"Inch (in)"),u.a.createElement("option",{value:"ft"},"Foot (ft)"),u.a.createElement("option",{value:"m3"},"Cubic Meter (m\xb3)"),u.a.createElement("option",{value:"L"},"Liter (L)"),u.a.createElement("option",{value:"ml"},"Milliliter (ml)"),u.a.createElement("option",{value:"s"},"Second (s)"),u.a.createElement("option",{value:"min"},"Minute (min)"),u.a.createElement("option",{value:"hr"},"Hour (hr)"),u.a.createElement("option",{value:"\xb0C"},"Celsius (\xb0C)"),u.a.createElement("option",{value:"\xb0F"},"Fahrenheit (\xb0F)"),u.a.createElement("option",{value:"Pa"},"Pascal (Pa)"),u.a.createElement("option",{value:"bar"},"Bar (bar)"),u.a.createElement("option",{value:"m/s"},"Meters per Second (m/s)"),u.a.createElement("option",{value:"km/h"},"Kilometers per Hour (km/h)"),u.a.createElement("option",{value:"A"},"Ampere (A)"),u.a.createElement("option",{value:"V"},"Volt (V)"),u.a.createElement("option",{value:"W"},"Watt (W)"),u.a.createElement("option",{value:"kW"},"Kilowatt (kW)"))))):u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{key:t,lg:"4",md:"4"},u.a.createElement(h.a,{className:"mb-1"},null===e||void 0===e||null===(R=e.dropdown)||void 0===R||null===(W=R.label)||void 0===W?void 0:W._text),u.a.createElement(b.a,{required:!0,id:"unitType",type:"select",placeholder:"Select Category",name:null===e||void 0===e||null===(G=e.dropdown)||void 0===G||null===(K=G.name)||void 0===K?void 0:K._text,value:ye[null===e||void 0===e||null===(B=e.dropdown)||void 0===B||null===(Y=B.name)||void 0===Y?void 0:Y._text],onChange:Je},u.a.createElement("option",{value:"NA"},"--Select Unit--"),J&&(null===J||void 0===J?void 0:J.map((function(e){return u.a.createElement("option",{"data-order":e.primaryUnit,value:null===e||void 0===e?void 0:e.unitQty,key:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.primaryUnit)}))))))):u.a.createElement(p.a,{lg:"4",md:"4"},u.a.createElement(g.a,null,u.a.createElement(h.a,null,null===e||void 0===e||null===(V=e.dropdown)||void 0===V||null===(q=V.label)||void 0===q?void 0:q._text),u.a.createElement(b.a,{required:!0,type:"select",name:null===e||void 0===e||null===(z=e.dropdown)||void 0===z||null===($=z.name)||void 0===$?void 0:$._text,value:ye[null===e||void 0===e||null===(X=e.dropdown)||void 0===X||null===(ee=X.name)||void 0===ee?void 0:ee._text],onChange:Je},u.a.createElement("option",{value:""},"--Select Role--"),(null===e||void 0===e||null===(te=e.dropdown)||void 0===te?void 0:te.option)&&(null===e||void 0===e||null===(ne=e.dropdown)||void 0===ne||null===(le=ne.option)||void 0===le?void 0:le.map((function(e,t){var n,l;return u.a.createElement("option",{key:t,value:null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value},null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value)}))))))}))),k&&(null===k||void 0===k||null===(n=k.input)||void 0===n?void 0:n.map((function(e,t){var n,l,r,i,c,d,v,m,s,f,y,b,x,k,C,F,L,P,D,T,A,I,M,U,R,W,G,J,K,B,Y,H,V,q,z,Q,Z,$,X,ne,le,ae,oe,re,ie,de,ve;S()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,null,u.a.createElement(h.a,null,null===e||void 0===e||null===(n=e.label)||void 0===n?void 0:n._text),u.a.createElement(O.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,value:ye[null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text],onChange:function(t){var n;he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,t)))}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(i=e.label._text)||void 0===i?void 0:i.includes("ountry"))?(console.log(e),u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,null,u.a.createElement(h.a,null,null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(N.a,{inputClass:"countryclass",className:"countryclassnw",options:_.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ee,onChange:function(e){te(e),he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("tate"))?u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,null,u.a.createElement(h.a,null,null===e||void 0===e||null===(m=e.label)||void 0===m?void 0:m._text),u.a.createElement(N.a,{options:null===j.a||void 0===j.a?void 0:j.a.getStatesOfCountry(null===ee||void 0===ee?void 0:ee.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ue,onChange:function(e){ce(e),he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ity"))?u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,null,u.a.createElement(h.a,null,null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(N.a,{options:null===w.a||void 0===w.a?void 0:w.a.getCitiesOfState(null===ue||void 0===ue?void 0:ue.countryCode,null===ue||void 0===ue?void 0:ue.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:me,onChange:function(e){se(e),he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(f=e.type)||void 0===f||null===(y=f._attributes)||void 0===y?void 0:y.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,{key:t},u.a.createElement(h.a,null,null===e||void 0===e||null===(b=e.label)||void 0===b?void 0:b._text),u.a.createElement(E.a,{onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(x=e.type)||void 0===x||null===(k=x._attributes)||void 0===k?void 0:k.type,placeholder:null===e||void 0===e||null===(C=e.placeholder)||void 0===C?void 0:C._text,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,dateFormat:null===We||void 0===We||null===(L=We.UserInformatio)||void 0===L?void 0:L.dateFormat,value:S()(ye[null===e||void 0===e||null===(P=e.name)||void 0===P?void 0:P._text]).tz(null===We||void 0===We||null===(D=We.UserInformatio)||void 0===D?void 0:D.timeZone).format(null===We||void 0===We||null===(T=We.UserInformatio)||void 0===T?void 0:T.dateFormat),onChange:function(n){var l,a;return Je(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,{key:t},u.a.createElement(h.a,null,null===e||void 0===e||null===(A=e.label)||void 0===A?void 0:A._text),u.a.createElement(E.a,{onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(I=e.type)||void 0===I||null===(M=I._attributes)||void 0===M?void 0:M.type,placeholder:null===e||void 0===e||null===(U=e.placeholder)||void 0===U?void 0:U._text,name:null===e||void 0===e||null===(R=e.name)||void 0===R?void 0:R._text,value:ye[null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text],onChange:function(n){var l,a;return Je(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,{key:t},u.a.createElement(h.a,null,null===e||void 0===e||null===(G=e.label)||void 0===G?void 0:G._text),u.a.createElement(E.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(J=e.type)||void 0===J||null===(K=J._attributes)||void 0===K?void 0:K.type,placeholder:null===e||void 0===e||null===(B=e.placeholder)||void 0===B?void 0:B._text,name:null===e||void 0===e||null===(Y=e.name)||void 0===Y?void 0:Y._text,value:ye[null===e||void 0===e||null===(H=e.name)||void 0===H?void 0:H._text],onChange:function(n){var l,a;return Je(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(p.a,{className:"mt-1",key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(g.a,{key:t},(null===e||void 0===e||null===(V=e.type)||void 0===V||null===(q=V._attributes)||void 0===q?void 0:q.type)&&"file"==(null===e||void 0===e||null===(z=e.type)||void 0===z||null===(Q=z._attributes)||void 0===Q?void 0:Q.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{className:"mb-1"},null===e||void 0===e||null===(Z=e.label)||void 0===Z?void 0:Z._text),u.a.createElement(E.a,{className:"form-control",type:null===e||void 0===e||null===($=e.type)||void 0===$||null===(X=$._attributes)||void 0===X?void 0:X.type,placeholder:null===e||void 0===e||null===(ne=e.placeholder)||void 0===ne?void 0:ne._text,name:null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text,onChange:function(n){var l,r;!function(e,t,n){var l=e.target.name;De(n),he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},l,e.target.files[0])))}(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(r=l._attributes)||void 0===r||r.type,t)}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(h.a,{className:"mb-1"},null===e||void 0===e||null===(ae=e.label)||void 0===ae?void 0:ae._text),u.a.createElement(E.a,{className:"form-control",onKeyDown:function(t){var n,l;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(l=n._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(oe=e.type)||void 0===oe||null===(re=oe._attributes)||void 0===re?void 0:re.type,placeholder:null===e||void 0===e||null===(ie=e.placeholder)||void 0===ie?void 0:ie._text,name:null===e||void 0===e||null===(de=e.name)||void 0===de?void 0:de._text,value:ye[null===e||void 0===e||null===(ve=e.name)||void 0===ve?void 0:ve._text],onChange:function(n){var l,a;Je(n,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(a=l._attributes)||void 0===a?void 0:a.type,t)}}),Pe===t?u.a.createElement(u.a.Fragment,null,Ie&&u.a.createElement("span",{style:{color:"red"}},Ie)):u.a.createElement(u.a.Fragment,null)))))})))),u.a.createElement(s.a,null,u.a.createElement(p.a,{lg:"4",md:"4",sm:"6",className:"mb-2 mt-1"},u.a.createElement(h.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){he(Object(o.a)(Object(o.a)({},ye),{},Object(a.a)({},"status",e.target.value)))}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),u.a.createElement(s.a,null,u.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))))))))}},943:function(e,t,n){"use strict";var l=n(10),a=n(12),o=n(1),r=n.n(o),i=n(2),u=n.n(i),c=n(8),d=n.n(c),v=n(7),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:u.a.node,row:u.a.bool,check:u.a.bool,inline:u.a.bool,disabled:u.a.bool,tag:v.tagPropType,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.row,i=e.disabled,u=e.check,c=e.inline,s=e.tag,p=Object(a.a)(e,m),f=Object(v.mapToCssModules)(d()(t,!!o&&"row",u?"form-check":"form-group",!(!u||!c)&&"form-check-inline",!(!u||!i)&&"disabled"),n);return"fieldset"===s&&(p.disabled=i),r.a.createElement(s,Object(l.a)({},p,{className:f}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=452.c845efe5.chunk.js.map