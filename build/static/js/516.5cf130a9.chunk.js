/*! For license information please see 516.5cf130a9.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[516],{3244:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(4),l=n(27),o=n(1),i=n.n(o),c=n(912),u=n(916),d=n(904),v=n(905),s=n(245),m=n(907),f=n(894),h=n(908),p=n(909),g=n(895),y=n(85),E=n(44),b=n(5),O=n(73),N=n.n(O);function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var l=t&&t.prototype instanceof s?t:s,o=Object.create(l.prototype),i=new S(r||[]);return a(o,"_invoke",{value:O(e,n,i)}),o}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var v={};function s(){}function m(){}function f(){}var h={};c(h,l,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(x([])));g&&g!==t&&n.call(g,l)&&(h=g);var y=f.prototype=s.prototype=Object.create(h);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;a(this,"_invoke",{value:function(a,l){function o(){return new t((function(r,o){!function a(r,l,o,i){var c=d(e[r],e,l);if("throw"!==c.type){var u=c.arg,v=u.value;return v&&"object"==typeof v&&n.call(v,"__await")?t.resolve(v.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(v).then((function(e){u.value=e,o(u)}),(function(e){return a("throw",e,o,i)}))}i(c.arg)}(a,l,r,o)}))}return r=r?r.then(o,o):o()}})}function O(e,t,n){var a="suspendedStart";return function(r,l){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw l;return L()}for(n.method=r,n.arg=l;;){var o=n.delegate;if(o){var i=N(o,n);if(i){if(i===v)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=d(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function N(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var r=d(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,v;var l=r.arg;return l?l.done?(t[e.resultName]=l.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,v):l:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,v)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[l];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=f,a(y,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:m,configurable:!0}),m.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,n,a,r,l){void 0===l&&(l=Promise);var o=new b(u(t,n,a,r),l);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(y),c(y,i,"Generator"),c(y,l,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return a("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return a(l.catchLoc,!0);if(this.prev<l.finallyLoc)return a(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return a(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return a(l.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),_(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;_(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}var w=[],_=[],S=[];t.default=function(){var e,t,n,O,x,L,k,P=Object(o.useState)([]),F=Object(l.a)(P,2),C=F[0],A=F[1],D=Object(o.useState)([]),I=Object(l.a)(D,2),T=I[0],U=I[1],G=Object(o.useState)([]),H=Object(l.a)(G,2),J=H[0],W=H[1],R=Object(o.useState)([]),B=Object(l.a)(R,2),Y=B[0],q=B[1],z=Object(o.useState)([]),K=Object(l.a)(z,2),M=K[0],Q=K[1],V=Object(o.useState)([]),X=Object(l.a)(V,2),Z=X[0],$=X[1],ee=Object(o.useState)([]),te=Object(l.a)(ee,2),ne=(te[0],te[1]),ae=Object(o.useState)([]),re=Object(l.a)(ae,2),le=re[0],oe=re[1],ie=Object(o.useState)([]),ce=Object(l.a)(ie,2),ue=ce[0],de=ce[1],ve=Object(o.useState)(!1),se=Object(l.a)(ve,2),me=se[0],fe=se[1],he=Object(o.useState)(!1),pe=Object(l.a)(he,2),ge=pe[0],ye=pe[1],Ee=Object(o.useState)({}),be=Object(l.a)(Ee,2),Oe=be[0],Ne=be[1],je=Object(o.useState)([]),we=Object(l.a)(je,2),_e=(we[0],we[1]),Se=Object(o.useState)(!1),xe=Object(l.a)(Se,2),Le=xe[0],ke=xe[1],Pe=Object(o.useState)(!1),Fe=Object(l.a)(Pe,2),Ce=(Fe[0],Fe[1]),Ae=Object(o.useState)(!1),De=Object(l.a)(Ae,2),Ie=De[0],Te=De[1],Ue=Object(o.useState)(!1),Ge=Object(l.a)(Ue,2),He=(Ge[0],Ge[1]),Je=Object(o.useState)(""),We=Object(l.a)(Je,2),Re=We[0],Be=We[1],Ye=Object(o.useState)(""),qe=Object(l.a)(Ye,2),ze=qe[0],Ke=qe[1],Me=Object(o.useState)(""),Qe=Object(l.a)(Me,2),Ve=(Qe[0],Qe[1]),Xe=Object(o.useState)([]),Ze=Object(l.a)(Xe,2),$e=Ze[0],et=Ze[1],tt=Object(o.useState)([]),nt=Object(l.a)(tt,2),at=nt[0],rt=nt[1],lt=function(){var e=JSON.parse(localStorage.getItem("userData"));Object(E.cd)(b.g,null===e||void 0===e?void 0:e.database).then((function(e){var t;console.log(null===e||void 0===e?void 0:e.User);null===e||void 0===e||null===(t=e.User)||void 0===t||t.filter((function(e,t){return!(null===e||void 0===e?void 0:e.created_by)}));rt(null===e||void 0===e?void 0:e.User)})).catch((function(e){console.log(e)}))};Object(o.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));lt(),Object(E.cd)(b.Ub,null===e||void 0===e?void 0:e.database).then((function(e){A(null===e||void 0===e?void 0:e.Department)})).catch((function(e){console.log(e)}))}),[]);var ot=function(){var e=Object(r.a)(j().mark((function e(t){var n,a,r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=null===(n=_)||void 0===n?void 0:n.map((function(e,t){return{id:null===e||void 0===e?void 0:e._id}})),r={childs:a},e.next=5,Object(E.fd)(b.if,r).then((function(e){lt(),U([]),q([]),Be(""),oe([]),ye(!1),et([]),_=[],N()("UnLink Successfully")})).catch((function(e){N()("Something Went Wrong"),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),it=function(){var e=Object(r.a)(j().mark((function e(t){var n,a,r,l;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=null===Oe||void 0===Oe?void 0:Oe._id,r=null===(n=w)||void 0===n?void 0:n.map((function(e,t){return{id:null===e||void 0===e?void 0:e._id}})),l={parentId:a,childs:r},e.next=6,Object(E.fd)(b.hf,l).then((function(e){Ce(!1),lt(),U([]),q([]),Be(""),oe([]),ye(!1),et([]),w=[],N()("Assigned Successfully")})).catch((function(e){Ce(!1),N()("Something Went Wrong"),console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(le),i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement(u.a,null,i.a.createElement("div",{className:" m-2"},i.a.createElement(d.a,{className:""},i.a.createElement(v.a,null,i.a.createElement("h1",null,"Assign Team To Parent Node")),i.a.createElement(v.a,{lg:"2",md:"2"},i.a.createElement("div",{className:"float-right"},i.a.createElement(y.b,{render:function(e){var t=e.history;return i.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.goBack()}}," ","Back")}}))))),i.a.createElement("div",{className:" m-2"},i.a.createElement(d.a,{className:""},i.a.createElement(v.a,{lg:"3",md:"3"},i.a.createElement(m.a,null,"Select Department"),i.a.createElement(f.a,{value:J,onChange:function(e){if(ye(!1),W(e.target.value),0==e.target.value&&fe(!1),e.target.value?fe(!0):fe(!1),0==e.target.value&&fe(!1),"All_Dept_Heads"==e.target.value){var t;S=[],fe(!1),null===C||void 0===C||C.map((function(e,t){var n;null===e||void 0===e||null===(n=e.roles)||void 0===n||n.forEach((function(e,t){var n;1==(null===e||void 0===e?void 0:e.rolePosition)&&(null===(n=S)||void 0===n||n.push(e))}))})),ne(S);var n=[];null===(t=S)||void 0===t||t.map((function(e,t){null===at||void 0===at||at.forEach((function(t,a){var r,l;(null===t||void 0===t||null===(r=t.rolename)||void 0===r?void 0:r._id)==(null===e||void 0===e||null===(l=e.roleId)||void 0===l?void 0:l._id)&&n.push(t)}))})),oe(n),de(n);var a=JSON.parse(localStorage.getItem("userData"));q([a])}else{var r,l=null===C||void 0===C?void 0:C.filter((function(t,n){return(null===t||void 0===t?void 0:t._id)==e.target.value}));U(null===(r=l[0])||void 0===r?void 0:r.roles)}},type:"select"},i.a.createElement("option",{value:"0"},"--Select Department--"),i.a.createElement("option",{value:"All_Dept_Heads"},"All Department Head"),C&&(null===C||void 0===C?void 0:C.map((function(e,t){var n;return i.a.createElement("option",{"data-name":"".concat(null===e||void 0===e?void 0:e._id," ").concat(null===e||void 0===e?void 0:e.database),value:null===e||void 0===e?void 0:e._id},null===e||void 0===e||null===(n=e.departmentName)||void 0===n?void 0:n.departmentName)}))))),me&&me&&i.a.createElement(v.a,{lg:"3",md:"3"},i.a.createElement(m.a,null,"Select Parent Role"),i.a.createElement(f.a,{value:Re,onChange:function(e){if("NA"==e.target.value)ye(!1),Be(e.target.value);else{var t,n,a=null===(t=e.target.options[e.target.selectedIndex].getAttribute("data-name"))||void 0===t?void 0:t.split(" ");1===a[0]&&He(!0);var r=a.slice(2).join(" "),l=[];l="Sales Person"==r?null===at||void 0===at?void 0:at.filter((function(e){var t;return"Customer"==(null===e||void 0===e||null===(t=e.rolename)||void 0===t?void 0:t.roleName)})):null===T||void 0===T?void 0:T.filter((function(e){return(null===e||void 0===e?void 0:e.rolePosition)==Number(a[0])+1}));var o=null===at||void 0===at?void 0:at.filter((function(e){var t;return(null===e||void 0===e||null===(t=e.rolename)||void 0===t?void 0:t._id)==a[1]}));if(q(o),Q(o),Be(e.target.value),Ke(r),Ve(a[1]),null===(n=l)||void 0===n?void 0:n.length){var i=[];"Sales Person"==r?(oe(l),de(l),Te(!0),ye(!0),et(l)):(i=null===at||void 0===at?void 0:at.filter((function(e){var t,n,a;return(null===e||void 0===e||null===(t=e.rolename)||void 0===t?void 0:t._id)==(null===(n=l[0])||void 0===n||null===(a=n.roleId)||void 0===a?void 0:a._id)})),oe(i),de(i),ye(!0),Te(!1),et(l))}else et([]),oe([]),ke(!0),ye(!1)}},type:"select"},i.a.createElement("option",{value:"NA"},"--Select Role--"),T&&(null===T||void 0===T?void 0:T.map((function(e,t){var n;return i.a.createElement("option",{"data-name":"".concat(null===e||void 0===e?void 0:e.rolePosition," ").concat(null===e||void 0===e||null===(n=e.roleId)||void 0===n?void 0:n._id," ").concat(null===e||void 0===e?void 0:e.roleName),value:null===e||void 0===e?void 0:e._id},null===e||void 0===e?void 0:e.roleName," (Position-",null===e||void 0===e?void 0:e.rolePosition,")")}))))),ge&&ge?i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,{lg:"3",md:"3"},i.a.createElement(m.a,null,"Next Child"),i.a.createElement(h.a,{readOnly:!0,type:"text",value:(null===(e=$e[0])||void 0===e?void 0:e.roleName)&&(null===(t=$e[0])||void 0===t?void 0:t.roleName)})),w&&(null===(n=w)||void 0===n?void 0:n.length)>0&&i.a.createElement(v.a,{lg:"3",md:"3"},i.a.createElement(s.a,{color:"primary",onClick:function(e){return it(e)},className:"mt-2"},"Submit"))):i.a.createElement(i.a.Fragment,null,Le&&Le&&i.a.createElement(v.a,{lg:"3",md:"3"},i.a.createElement(m.a,{style:{color:"red"}},"No Next Child Found"),i.a.createElement(h.a,{readOnly:!0,type:"text",value:"No Child Found"}))),Z&&(null===Z||void 0===Z?void 0:Z.length)>0&&i.a.createElement(v.a,{lg:"3",md:"3"},i.a.createElement(s.a,{color:"primary",onClick:function(e){return ot(e)},className:"mt-2"},"UnLink")))),i.a.createElement("hr",null),i.a.createElement("div",{className:"p-2"},i.a.createElement(d.a,null,Y&&(null===Y||void 0===Y?void 0:Y.length)>0&&i.a.createElement(v.a,{lg:"6",md:"6",sm:"6"},i.a.createElement(d.a,null,i.a.createElement(v.a,{lg:"4",mg:"4",sm:"6"},i.a.createElement("h5",null,i.a.createElement("strong",null,ze&&ze?i.a.createElement(i.a.Fragment,null," ",ze," (Parent)"):"Head"," ","List"))),i.a.createElement(v.a,null),i.a.createElement(v.a,{lg:"4",mg:"4",sm:"6"},i.a.createElement("div",{className:"mr-2 pr-1"},i.a.createElement(h.a,{type:"text",className:"",name:"search",placeholder:"Search Here...",onChange:function(e){var t=Object(a.a)(Y),n=null===t||void 0===t?void 0:t.filter((function(t){var n,a;return(null===t||void 0===t||null===(n=t.firstName)||void 0===n?void 0:n.includes(e.target.value))||(null===t||void 0===t||null===(a=t.lastName)||void 0===a?void 0:a.includes(e.target.value))}));if(e.target.value)(null===n||void 0===n?void 0:n.length)&&q(n);else{var r=Object(a.a)(M);q(r)}}})))),i.a.createElement("div",{className:"p-1",style:{borderRight:"1px solid black"}},i.a.createElement(p.a,{className:"table_heading",style:{cursor:"pointer"},responsive:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Assigned To"),i.a.createElement("th",null,"First Name"),i.a.createElement("th",null,"Last Name"))),i.a.createElement("tbody",null,Y&&(null===Y||void 0===Y?void 0:Y.length)?i.a.createElement(i.a.Fragment,null,Y&&(null===Y||void 0===Y?void 0:Y.map((function(e,t){var n,a,r,l;return i.a.createElement("tr",{key:null===e||void 0===e?void 0:e._id},i.a.createElement("th",{scope:"row"},i.a.createElement("input",{name:"Parent",value:"checkbox1",type:"radio",onClick:function(t){Ne(e)}})),i.a.createElement("td",null,(null===e||void 0===e||null===(n=e.created_by)||void 0===n?void 0:n.firstName)&&(null===e||void 0===e||null===(a=e.created_by)||void 0===a?void 0:a.firstName)&&i.a.createElement(g.a,{color:"primary"},i.a.createElement("strong",null,(null===e||void 0===e||null===(r=e.created_by)||void 0===r?void 0:r.firstName)&&(null===e||void 0===e||null===(l=e.created_by)||void 0===l?void 0:l.firstName)))),i.a.createElement("td",null,null===e||void 0===e?void 0:e.firstName),i.a.createElement("td",null,null===e||void 0===e?void 0:e.lastName))})))):null)))),le&&(null===le||void 0===le?void 0:le.length)>0&&i.a.createElement(v.a,{lg:"6",md:"6",sm:"6"},i.a.createElement(d.a,null,i.a.createElement(v.a,{lg:"4",mg:"4",sm:"6"},i.a.createElement("h5",null,i.a.createElement("strong",null,(null===(O=$e[0])||void 0===O?void 0:O.roleName)&&(null===(x=$e[0])||void 0===x?void 0:x.roleName)?i.a.createElement(i.a.Fragment,null," ",(null===(L=$e[0])||void 0===L?void 0:L.roleName)&&(null===(k=$e[0])||void 0===k?void 0:k.roleName),"(child)"):i.a.createElement(i.a.Fragment,null,Ie&&Ie?"Party":"All Dept Head")," ","Users List"))),i.a.createElement(v.a,null),i.a.createElement(v.a,{lg:"4",mg:"4",sm:"6"},i.a.createElement("div",{className:"mr-2 pr-1"},i.a.createElement(h.a,{type:"text",className:"",name:"search",placeholder:"Search Here...",onChange:function(e){var t=Object(a.a)(le),n=null===t||void 0===t?void 0:t.filter((function(t){var n,a;return(null===t||void 0===t||null===(n=t.firstName)||void 0===n?void 0:n.includes(e.target.value))||(null===t||void 0===t||null===(a=t.lastName)||void 0===a?void 0:a.includes(e.target.value))}));if(e.target.value)(null===n||void 0===n?void 0:n.length)&&oe(n);else{var r=Object(a.a)(ue);oe(r)}}})))),i.a.createElement("div",{className:"p-1"},i.a.createElement(p.a,{className:"table_heading",style:{cursor:"pointer"},responsive:!0},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"#"),i.a.createElement("th",null,"Assigned To"),i.a.createElement("th",null,"First Name"),i.a.createElement("th",null,"Last Name"),i.a.createElement("th",null,"UnLink Child"))),i.a.createElement("tbody",null,le&&(null===le||void 0===le?void 0:le.map((function(e,t){var n,a,r,l,o,c,u,d;return i.a.createElement("tr",{key:null===e||void 0===e?void 0:e._id},i.a.createElement("th",{scope:"row"}," ",(null===e||void 0===e||null===(n=e.created_by)||void 0===n?void 0:n.firstName)&&(null===e||void 0===e||null===(a=e.created_by)||void 0===a?void 0:a.firstName)?null:i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{title:"Link to Parent",style:{position:"unset",margin:0},value:"checkbox1",type:"checkbox",onClick:function(t){return function(e,t){if(t.target.checked)w.push(e),_e(e);else{var n,a=null===(n=w)||void 0===n?void 0:n.indexOf(e);_e(w.splice(a,1))}}(e,t)}}))),i.a.createElement("td",null,(null===e||void 0===e||null===(r=e.created_by)||void 0===r?void 0:r.firstName)&&(null===e||void 0===e||null===(l=e.created_by)||void 0===l?void 0:l.firstName)?i.a.createElement(g.a,{color:"danger"},i.a.createElement("strong",null,(null===e||void 0===e||null===(o=e.created_by)||void 0===o?void 0:o.firstName)&&(null===e||void 0===e||null===(c=e.created_by)||void 0===c?void 0:c.firstName))):i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{color:"primary"},i.a.createElement("strong",null,"Not Assigned")))),i.a.createElement("td",null,null===e||void 0===e?void 0:e.firstName),i.a.createElement("td",null,null===e||void 0===e?void 0:e.lastName),i.a.createElement("td",null," ",(null===e||void 0===e||null===(u=e.created_by)||void 0===u?void 0:u.firstName)&&(null===e||void 0===e||null===(d=e.created_by)||void 0===d?void 0:d.firstName)?i.a.createElement(h.a,{title:"UnLink to Parent",style:{position:"unset",margin:0},value:"checkbox1",type:"checkbox",onClick:function(t){return function(e,t){if(t.target.checked)_.push(e),$(_);else{var n,a,r=null===(n=_)||void 0===n?void 0:n.indexOf(e);_.splice(r,1),(null===(a=_)||void 0===a?void 0:a.length)>0?$(_):$([])}}(e,t)}}):null))}))))))))))))}}}]);
//# sourceMappingURL=516.5cf130a9.chunk.js.map