/*! For license information please see 388.9d206beb.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[388],{3263:function(e,t,n){"use strict";n.r(t);var a=n(4),l=n(61),o=n(9),r=n(25),i=n(27),u=n(1),c=n.n(u),d=n(234),v=n.n(d),m=n(912),s=n(904),p=n(905),f=n(245),b=n(916),y=n(906),h=n(943),g=n(907),E=n(908),O=n(894),x=(n(28),n(171)),j=n.n(x),_=(n(235),n(927)),N=n(928),w=n(929),k=n(135),C=n(947),S=n.n(C),F=n(85),L=n(73),D=n.n(L),T=(n(645),n(44)),A=(n(233),n(56)),B=n(5),G=n(136),I=n.n(G);function R(){R=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},l="function"==typeof Symbol?Symbol:{},o=l.iterator||"@@iterator",r=l.asyncIterator||"@@asyncIterator",i=l.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(C){u=function(e,t,n){return e[t]=n}}function c(e,t,n,l){var o=t&&t.prototype instanceof m?t:m,r=Object.create(o.prototype),i=new N(l||[]);return a(r,"_invoke",{value:O(e,n,i)}),r}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var v={};function m(){}function s(){}function p(){}var f={};u(f,o,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(w([])));y&&y!==t&&n.call(y,o)&&(f=y);var h=p.prototype=m.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var l;a(this,"_invoke",{value:function(a,o){function r(){return new t((function(l,r){!function a(l,o,r,i){var u=d(e[l],e,o);if("throw"!==u.type){var c=u.arg,v=c.value;return v&&"object"==typeof v&&n.call(v,"__await")?t.resolve(v.__await).then((function(e){a("next",e,r,i)}),(function(e){a("throw",e,r,i)})):t.resolve(v).then((function(e){c.value=e,r(c)}),(function(e){return a("throw",e,r,i)}))}i(u.arg)}(a,o,l,r)}))}return l=l?l.then(r,r):r()}})}function O(e,t,n){var a="suspendedStart";return function(l,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===l)throw o;return k()}for(n.method=l,n.arg=o;;){var r=n.delegate;if(r){var i=x(r,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var u=d(e,t,n);if("normal"===u.type){if(a=n.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(a="completed",n.method="throw",n.arg=u.arg)}}}function x(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var l=d(a,e.iterator,t.arg);if("throw"===l.type)return t.method="throw",t.arg=l.arg,t.delegate=null,v;var o=l.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function w(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,l=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:k}}function k(){return{value:void 0,done:!0}}return s.prototype=p,a(h,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:s,configurable:!0}),s.displayName=u(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===s||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e},e.awrap=function(e){return{__await:e}},g(E.prototype),u(E.prototype,r,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,a,l,o){void 0===o&&(o=Promise);var r=new E(c(t,n,a,l),o);return e.isGeneratorFunction(n)?r:r.next().then((function(e){return e.done?e.value:r.next()}))},g(h),u(h,i,"Generator"),u(h,o,(function(){return this})),u(h,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=w,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return r.type="throw",r.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var l=this.tryEntries.length-1;l>=0;--l){var o=this.tryEntries[l],r=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(i&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a];if(l.tryLoc<=this.prev&&n.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var o=l;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=e,r.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(r)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var l=a.arg;_(n)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:w(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.default=function(){var e,t,n,d,x,C,L,G,P,M,J=Object(u.useState)([]),Y=Object(i.a)(J,2),K=Y[0],U=Y[1],W=Object(u.useState)([]),q=Object(i.a)(W,2),V=q[0],z=q[1],H=Object(u.useState)(!1),Z=Object(i.a)(H,2),$=Z[0],Q=Z[1],X=Object(u.useState)({}),ee=Object(i.a)(X,2),te=ee[0],ne=ee[1],ae=Object(u.useState)(null),le=Object(i.a)(ae,2),oe=le[0],re=le[1],ie=Object(u.useState)({}),ue=Object(i.a)(ie,2),ce=ue[0],de=ue[1],ve=Object(u.useState)([]),me=Object(i.a)(ve,2),se=me[0],pe=me[1],fe=Object(u.useState)({}),be=Object(i.a)(fe,2),ye=be[0],he=be[1],ge=Object(u.useState)([]),Ee=Object(i.a)(ge,2),Oe=Ee[0],xe=Ee[1],je=Object(u.useState)("Create"),_e=Object(i.a)(je,2),Ne=_e[0],we=_e[1],ke=Object(u.useState)(""),Ce=Object(i.a)(ke,2),Se=Ce[0],Fe=Ce[1],Le=Object(u.useState)(""),De=Object(i.a)(Le,2),Te=De[0],Ae=De[1],Be=Object(u.useState)([{bmName:"",bAddress:"",bContactNumber:"",bemail:"",BGstNumber:""}]),Ge=Object(i.a)(Be,2),Ie=Ge[0],Re=Ge[1],Pe=Object(u.useContext)(A.a),Me=Object(F.g)(),Je=Object(F.i)(),Ye=function(e,t){var n=Object(r.a)(Ie);n[e][t.target.name]=t.target.value,Re(n)},Ke=function(e,t,n){var a=e.target,r=a.name,i=a.value,u=a.checked;Fe(n),"checkbox"==t?he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},r,u))):"number"==t?/^\d{0,10}$/.test(i)&&(he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},r,i))),Ae("")):"file"==t?e.target.files&&he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},r,e.target.files[0]))):i.length<=10?(he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},r,i))),Ae("")):he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},r,i)))};Object(u.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){new Date(e.timestamp).toLocaleString();ye.Geotagging="".concat(e.coords.latitude,",").concat(e.coords.longitude)}),(function(e){D()("Error: ".concat(e))}),{timeout:1e4,enableHighAccuracy:!0}):D()("Error: Geolocation not found")}),[]),Object(u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));Object(T.qb)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){var t,n=null===e||void 0===e||null===(t=e.Role)||void 0===t?void 0:t.filter((function(e,t){var n,a;return null===e||void 0===e||null===(n=e.roleName)||void 0===n||null===(a=n.toLowerCase())||void 0===a?void 0:a.includes("transporter")}));z(n)})).catch((function(e){console.log(e),D()("Roles List Not found")}))}),[]),Object(u.useEffect)((function(){console.log(null===Je||void 0===Je?void 0:Je.id),0==(null===Je||void 0===Je?void 0:Je.id)?we("Create"):(we("Edit"),Object(T.cd)(B.zf,null===Je||void 0===Je?void 0:Je.id).then((function(e){var t,n=null===e||void 0===e?void 0:e.Transporter[0];if(n.Duedate=null===n||void 0===n||null===(t=n.Duedate)||void 0===t?void 0:t.split("T")[0],he(n),null===n||void 0===n?void 0:n.Country){var a,l=null===_.a||void 0===_.a||null===(a=_.a.getAllCountries())||void 0===a?void 0:a.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===n||void 0===n?void 0:n.Country)}));if(ne(l),null===n||void 0===n?void 0:n.State){var o,r,i=null===N.a||void 0===N.a||null===(o=N.a.getStatesOfCountry(null===(r=l[0])||void 0===r?void 0:r.isoCode))||void 0===o?void 0:o.filter((function(e,t){return(null===e||void 0===e?void 0:e.name)==(null===n||void 0===n?void 0:n.State)}));de(i),console.log(i),(null===n||void 0===n?void 0:n.City)&&pe(null===n||void 0===n?void 0:n.City)}}})).catch((function(e){console.log(e)})))}),[]),Object(u.useEffect)((function(){Object(T.dd)(B.gb).then((function(e){var t,n,a,l,o,r=v.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(r))||void 0===t?void 0:t.CreateCustomer),U(null===(n=JSON.parse(r))||void 0===n||null===(a=n.CreateCustomer)||void 0===a?void 0:a.input),xe(null===(l=JSON.parse(r))||void 0===l||null===(o=l.CreateCustomer)||void 0===o?void 0:o.MyDropDown)})).catch((function(e){console.log(e),D()("Something Went Wrong")}))}),[]);var Ue=function(){var e=Object(a.a)(R().mark((function e(t){var n,a,l,o,r,i,u;return R().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),null===oe&&void 0==oe){e.next=8;break}return(n=new FormData).append("file",oe),e.next=6,Object(T.ad)(B.k,n).then((function(e){D()("".concat(null===e||void 0===e?void 0:e.message))})).catch((function(e){console.log(e),D()("Something Went Wrong")}));case 6:e.next=18;break;case 8:i=JSON.parse(localStorage.getItem("userData")),(u=new FormData).append("".concat(null===Oe||void 0===Oe||null===(a=Oe.dropdown)||void 0===a||null===(l=a.name)||void 0===l?void 0:l._text),ye[null===Oe||void 0===Oe||null===(o=Oe.dropdown)||void 0===o||null===(r=o.name)||void 0===r?void 0:r._text]),null===K||void 0===K||K.map((function(e,t){var n,a,l,o,r,i,c;if("text"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type))"City"==(null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text)?u.append("".concat(null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text),JSON.stringify(se)):u.append("".concat(null===e||void 0===e?void 0:e.name._text),ye[null===e||void 0===e||null===(c=e.name)||void 0===c?void 0:c._text]);else if("file"==(null===e||void 0===e||null===(l=e.type)||void 0===l||null===(o=l._attributes)||void 0===o?void 0:o.type)){var d,v,m,s,p,f;if("Shopphoto"==(null===e||void 0===e||null===(d=e.name)||void 0===d?void 0:d._text))null===(m=ye[null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text])||void 0===m||m.map((function(t,n){var a;u.append("file",ye[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text][n])}));if("photo"==(null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text))null===(p=ye[null===e||void 0===e||null===(f=e.name)||void 0===f?void 0:f._text])||void 0===p||p.map((function(t,n){var a;u.append("files",ye[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text][n])}))}else{var b,y;u.append("".concat(null===e||void 0===e||null===(b=e.name)||void 0===b?void 0:b._text),ye[null===e||void 0===e||null===(y=e.name)||void 0===y?void 0:y._text])}})),u.append("status",null===ye||void 0===ye?void 0:ye.status),u.append("database",null===i||void 0===i?void 0:i.database),u.append("rolename",null===ye||void 0===ye?void 0:ye.rolename),u.append("transporterDetails",JSON.stringify(Ie)),u.forEach((function(e,t){console.log(t,e)})),Te||("0"==(null===Je||void 0===Je?void 0:Je.id)?Object(T.K)(u).then((function(e){console.log(e),e.status&&(Me.goBack(),D()("Transporter Created Successfully"))})).catch((function(e){console.log(e.response),D()("Please Fill correct details")})):Object(T.gd)(B.ef,null===Je||void 0===Je?void 0:Je.id,u).then((function(e){console.log(e),e.status&&(Me.goBack(),D()("Transporter Updated Successfully"))})).catch((function(e){console.log(e)})));case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),We=function(e,t){pe(e),console.log(e)},qe=function(e,t){console.log(e),pe(e)};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(m.a,null,c.a.createElement(s.a,{className:"m-2"},c.a.createElement(p.a,null,c.a.createElement("h1",{className:"float-left"},Ne&&Ne," Transporter")),$||$?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{lg:"1",md:"1"},c.a.createElement(f.a,{color:"primary",onClick:function(e){e.preventDefault(),Q(!1)}},"Back"))):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{lg:"2",md:"2"},c.a.createElement(f.a,{color:"primary",onClick:function(e){e.preventDefault(),Q(!0)}},"Bulk Upload"))),!$&&!$&&c.a.createElement(p.a,{lg:"1",md:"1"},c.a.createElement("div",{className:"float-right"},c.a.createElement(F.b,{render:function(e){var t=e.history;return c.a.createElement(f.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/accounSearch")}}," ","Back")}})))),c.a.createElement(b.a,null,$&&$?c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:"m-1",onSubmit:Ue},c.a.createElement(s.a,null,c.a.createElement(p.a,{lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(g.a,null,"Bulk Import(.xlsx Only)"),c.a.createElement(E.a,{className:"form-control",type:"file",placeholder:"",name:"BulkImport",onChange:function(e){re(e.target.files[0])}})))),c.a.createElement(s.a,null,c.a.createElement(p.a,null,c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Import")))))):c.a.createElement(c.a.Fragment,null,c.a.createElement(y.a,{className:"m-1",onSubmit:Ue},c.a.createElement(s.a,{className:"mb-2"},c.a.createElement(p.a,{lg:"4",md:"4"},c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"mb-1"},"Role List *"),c.a.createElement(O.a,{required:!0,type:"select",name:"rolename",value:ye.rolename,onChange:function(e){var t,n,a=null===(t=e.target.options[e.target.selectedIndex].getAttribute("data-name"))||void 0===t?void 0:t.split(" ");he(Object(o.a)(Object(o.a)({},ye),{},(n={},Object(l.a)(n,"rolename",e.target.value),Object(l.a)(n,"roleName",a[1]),n)))}},c.a.createElement("option",null,"--select Role--"),V&&(null===V||void 0===V?void 0:V.length)&&(null===V||void 0===V?void 0:V.map((function(e,t){return c.a.createElement("option",{"data-name":"".concat(null===e||void 0===e?void 0:e.position," ").concat(null===e||void 0===e?void 0:e.roleName),value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.roleName)})))))),Oe&&Oe?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"mb-1"},(null===Oe||void 0===Oe||null===(e=Oe.dropdown)||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text)&&(null===Oe||void 0===Oe||null===(n=Oe.dropdown)||void 0===n||null===(d=n.label)||void 0===d?void 0:d._text)," ","*"),c.a.createElement(O.a,{required:!0,type:"select",name:null===Oe||void 0===Oe||null===(x=Oe.dropdown)||void 0===x||null===(C=x.name)||void 0===C?void 0:C._text,value:ye[null===Oe||void 0===Oe||null===(L=Oe.dropdown)||void 0===L||null===(G=L.name)||void 0===G?void 0:G._text],onChange:Ke},c.a.createElement("option",{value:""},"--Select --"),null===Oe||void 0===Oe||null===(P=Oe.dropdown)||void 0===P||null===(M=P.option)||void 0===M?void 0:M.map((function(e,t){var n,a;return c.a.createElement("option",{key:t,value:null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)})))))):null,K&&(null===K||void 0===K?void 0:K.map((function(e,t){var n;if((null===ye||void 0===ye?void 0:ye.Registration_Type)&&"Unregistered"==(null===ye||void 0===ye?void 0:ye.Registration_Type)&&(null===e||void 0===e||null===(n=e.label)||void 0===n?void 0:n._text.includes("GST Number")))return null;(null===ye||void 0===ye?void 0:ye.roleName)&&(null===ye||void 0===ye||ye.roleName);var a,r,i,u,d,v,m,s,f,b,y,O,x,C,F,L,D,T,A,B,G,R,P,M,J,Y,K,U,W,q,V,z,H,Z,$,Q,X,ee,ae,le,oe,re,ie,ue,ve,me,pe;S()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),c.a.createElement(j.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var n,a;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text,value:ye[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var n;he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,t)))}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(u=e.label._text)||void 0===u?void 0:u.includes("ountry"))?c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(m=e.label)||void 0===m?void 0:m._text),c.a.createElement(k.a,{inputClass:"countryclass",className:"countryclassnw",options:_.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:te,onChange:function(e){ne(e),he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("tate"))?c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),c.a.createElement(k.a,{options:null===N.a||void 0===N.a?void 0:N.a.getStatesOfCountry(null===te||void 0===te?void 0:te.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ce,onChange:function(e){de(e),he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null))):(null===e||void 0===e||null===(v=e.label._text)||void 0===v?void 0:v.includes("ity"))?c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,null,c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(f=e.label)||void 0===f?void 0:f._text),c.a.createElement(I.a,{required:!0,isObject:"false",options:null===w.a||void 0===w.a?void 0:w.a.getCitiesOfState(null===ce||void 0===ce?void 0:ce.countryCode,null===ce||void 0===ce?void 0:ce.isoCode),selectedValues:se&&se,onSelect:We,onRemove:qe,displayValue:"name"}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null))):c.a.createElement(c.a.Fragment,null,"date"==(null===e||void 0===e||null===(b=e.type)||void 0===b||null===(y=b._attributes)||void 0===y?void 0:y.type)?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(O=e.label)||void 0===O?void 0:O._text),c.a.createElement(E.a,{onKeyDown:function(t){var n,a;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(x=e.type)||void 0===x||null===(C=x._attributes)||void 0===C?void 0:C.type,placeholder:null===e||void 0===e||null===(F=e.placeholder)||void 0===F?void 0:F._text,name:null===e||void 0===e||null===(L=e.name)||void 0===L?void 0:L._text,dateFormat:null===Pe||void 0===Pe||null===(D=Pe.UserInformatio)||void 0===D?void 0:D.dateFormat,value:S()(ye[null===e||void 0===e||null===(T=e.name)||void 0===T?void 0:T._text]).tz(null===Pe||void 0===Pe||null===(A=Pe.UserInformatio)||void 0===A?void 0:A.timeZone).format(null===Pe||void 0===Pe||null===(B=Pe.UserInformatio)||void 0===B?void 0:B.dateFormat),onChange:function(n){var a,l;return Ke(n,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null)))):c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(G=e.label)||void 0===G?void 0:G._text),c.a.createElement(E.a,{onKeyDown:function(t){var n,a;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(R=e.type)||void 0===R||null===(P=R._attributes)||void 0===P?void 0:P.type,placeholder:null===e||void 0===e||null===(M=e.placeholder)||void 0===M?void 0:M._text,name:null===e||void 0===e||null===(J=e.name)||void 0===J?void 0:J._text,value:ye[null===e||void 0===e||null===(Y=e.name)||void 0===Y?void 0:Y._text],onChange:function(n){var a,l;return Ke(n,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null))))):c.a.createElement(c.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(K=e.label)||void 0===K?void 0:K._text),c.a.createElement(E.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var n,a;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(U=e.type)||void 0===U||null===(W=U._attributes)||void 0===W?void 0:W.type,placeholder:null===e||void 0===e||null===(q=e.placeholder)||void 0===q?void 0:q._text,name:null===e||void 0===e||null===(V=e.name)||void 0===V?void 0:V._text,value:ye[null===e||void 0===e||null===(z=e.name)||void 0===z?void 0:z._text],onChange:function(n){var a,l;return Ke(n,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null)))):c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(h.a,{key:t},(null===e||void 0===e||null===(H=e.type)||void 0===H||null===(Z=H._attributes)||void 0===Z?void 0:Z.type)&&"file"==(null===e||void 0===e||null===($=e.type)||void 0===$||null===(Q=$._attributes)||void 0===Q?void 0:Q.type)?c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(X=e.label)||void 0===X?void 0:X._text),c.a.createElement(E.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(ee=e.type)||void 0===ee||null===(ae=ee._attributes)||void 0===ae?void 0:ae.type,placeholder:null===e||void 0===e||null===(le=e.placeholder)||void 0===le?void 0:le._text,name:null===e||void 0===e||null===(oe=e.name)||void 0===oe?void 0:oe._text,onChange:function(n){var a,r;!function(e,t,n){var a=e.target,r=a.name,i=(a.value,a.checked,Array.from(e.target.files));Fe(n),he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},r,i)))}(n,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(r=a._attributes)||void 0===r||r.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(g.a,{className:"mb-1"},null===e||void 0===e||null===(re=e.label)||void 0===re?void 0:re._text),c.a.createElement(E.a,{className:"form-control",onKeyDown:function(t){var n,a;"number"==(null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(ie=e.type)||void 0===ie||null===(ue=ie._attributes)||void 0===ue?void 0:ue.type,placeholder:null===e||void 0===e||null===(ve=e.placeholder)||void 0===ve?void 0:ve._text,name:null===e||void 0===e||null===(me=e.name)||void 0===me?void 0:me._text,value:ye[null===e||void 0===e||null===(pe=e.name)||void 0===pe?void 0:pe._text],onChange:function(n){var a,l;Ke(n,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type,t)}}),Se===t?c.a.createElement(c.a.Fragment,null,Te&&c.a.createElement("span",{style:{color:"red"}},Te)):c.a.createElement(c.a.Fragment,null)))))})))),c.a.createElement("br",null),Ie.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,null,c.a.createElement(p.a,{lg:"12",md:"12",sm:"12"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("h3",{key:t},"Service Location")))),c.a.createElement(s.a,{className:"mb-2"},c.a.createElement(p.a,{className:"mb-2",key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(g.a,null,"Branch Manager Name"),c.a.createElement(E.a,{type:"text",placeholder:"Branch Manage Name",name:"bmName",value:e.bmName||"",onChange:function(e){return Ye(t,e)}})),c.a.createElement(p.a,{className:"mb-2",key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(g.a,null,"Address"),c.a.createElement(E.a,{type:"text",placeholder:"Branch Address",name:"bAddress",value:e.bAddress||"",onChange:function(e){return Ye(t,e)}})),c.a.createElement(p.a,{className:"mb-2",key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(g.a,null,"Contact Number"),c.a.createElement(E.a,{type:"number",placeholder:"Branch Contact Number",name:"bContactNumber",value:e.bContactNumber||"",onChange:function(e){return Ye(t,e)}})),c.a.createElement(p.a,{className:"mb-2",key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(g.a,null,"Email Id"),c.a.createElement(E.a,{type:"email",placeholder:"Branch Email",name:"bemail",value:e.bemail||"",onChange:function(e){return Ye(t,e)}})),c.a.createElement(p.a,{className:"mb-2",key:t,lg:"4",md:"4",sm:"12"},c.a.createElement(g.a,null,"GST Number"),c.a.createElement(E.a,{type:"text",placeholder:"Branch GST",name:"BGstNumber",value:e.BGstNumber||"",onChange:function(e){return Ye(t,e)}})),c.a.createElement(p.a,{key:t,lg:"4",md:"4",sm:"12"},c.a.createElement("div",{className:"d-flex justify-content-space-around"},t?c.a.createElement(f.a,{color:"info",type:"button",className:"button remove mt-2",onClick:function(){return function(e){var t=Object(r.a)(Ie);t.splice(e,1),Re(t)}(t)}},"x"):null))))})),c.a.createElement(s.a,null,c.a.createElement(p.a,{lg:"12",md:"12",sm:"12"},c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(f.a,{color:"primary",className:"button add mt-2",type:"button",onClick:function(){Re([].concat(Object(r.a)(Ie),[{bmName:"",bAddress:"",bContactNumber:"",bemail:"",BGstNumber:""}]))}},"Add")))),c.a.createElement(s.a,{className:"mt-2"},c.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},c.a.createElement(g.a,{className:"mb-0"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:function(e){he(Object(o.a)(Object(o.a)({},ye),{},Object(l.a)({},"status",e.target.value)))}},c.a.createElement("input",{style:{marginRight:"3px"},checked:"Active"==(null===ye||void 0===ye?void 0:ye.status),type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",checked:"Deactive"==(null===ye||void 0===ye?void 0:ye.status),name:"status",value:"Deactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(s.a,null,c.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))))))))}},943:function(e,t,n){"use strict";var a=n(10),l=n(12),o=n(1),r=n.n(o),i=n(2),u=n.n(i),c=n(8),d=n.n(c),v=n(7),m=["className","cssModule","row","disabled","check","inline","tag"],s={children:u.a.node,row:u.a.bool,check:u.a.bool,inline:u.a.bool,disabled:u.a.bool,tag:v.tagPropType,className:u.a.string,cssModule:u.a.object},p=function(e){var t=e.className,n=e.cssModule,o=e.row,i=e.disabled,u=e.check,c=e.inline,s=e.tag,p=Object(l.a)(e,m),f=Object(v.mapToCssModules)(d()(t,!!o&&"row",u?"form-check":"form-group",!(!u||!c)&&"form-check-inline",!(!u||!i)&&"disabled"),n);return"fieldset"===s&&(p.disabled=i),r.a.createElement(s,Object(a.a)({},p,{className:f}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p}}]);
//# sourceMappingURL=388.9d206beb.chunk.js.map