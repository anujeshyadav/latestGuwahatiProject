(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[386],{3495:function(e,t,a){"use strict";a.r(t);var l=a(61),n=a(9),o=a(27),i=a(1),u=a.n(i),r=a(234),c=a.n(r),d=a(912),m=a(904),v=a(905),s=a(245),b=a(916),p=a(906),E=a(943),y=a(907),g=a(908),f=(a(28),a(171)),O=a.n(f),j=(a(235),a(927)),h=a(928),_=a(929),x=a(135),C=a(947),N=a.n(C),k=a(85),F=a(73),S=a.n(F),D=(a(645),a(44)),w=(a(233),a(56));t.default=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],f=Object(i.useState)({}),C=Object(o.a)(f,2),F=C[0],M=C[1],A=Object(i.useState)({}),J=Object(o.a)(A,2),K=J[0],R=J[1],Y=Object(i.useState)({}),T=Object(o.a)(Y,2),H=T[0],I=T[1],L=Object(i.useState)({}),U=Object(o.a)(L,2),V=U[0],W=U[1],z=Object(i.useState)({}),P=Object(o.a)(z,2),B=(P[0],P[1]),Z=Object(i.useState)(""),$=Object(o.a)(Z,2),q=$[0],G=$[1],Q=Object(i.useState)(""),X=Object(o.a)(Q,2),ee=X[0],te=X[1],ae=Object(i.useState)({}),le=Object(o.a)(ae,2),ne=(le[0],le[1],Object(i.useContext)(w.a)),oe=function(e,t,a){var o=e.target,i=o.name,u=o.value,r=o.checked;G(a),"checkbox"==t?W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},i,r))):"number"==t?/^\d{0,10}$/.test(u)&&(W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},i,u))),te("")):"file"==t?e.target.files&&W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},i,e.target.files[0]))):u.length<=10?(W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},i,u))),te("")):W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},i,u)))};Object(i.useEffect)((function(){console.log(V)}),[V]),Object(i.useEffect)((function(){Object(D.x)().then((function(e){var t,a,l,n,o,i,u=c.a.xml2json(e.data,{compact:!0,spaces:2});console.log(null===(t=JSON.parse(u))||void 0===t?void 0:t.Createsalesmanager),r(null===(a=JSON.parse(u))||void 0===a||null===(l=a.Createsalesmanager)||void 0===l?void 0:l.input),B(null===(n=JSON.parse(u))||void 0===n||null===(o=n.CreateCustomer)||void 0===o||null===(i=o.MyDropDown)||void 0===i?void 0:i.dropdown)})).catch((function(e){console.log(e),S()("Something Went Wrong")}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(m.a,{className:"m-2"},u.a.createElement(v.a,null,u.a.createElement("h1",{className:"float-left"},"Create Sales Manager")),u.a.createElement(v.a,null,u.a.createElement("div",{className:"float-right"},u.a.createElement(k.b,{render:function(e){var t=e.history;return u.a.createElement(s.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.push("/app/SoftNumen/CreateSalesManager")}}," ","Back")}})))),u.a.createElement(b.a,null,u.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),ee?S()("Error occured while Entering Details"):Object(D.H)(V).then((function(e){console.log(e),e.status&&S()("SalesManager Created Successfully")})).catch((function(e){console.log(e.response)}))}},u.a.createElement(m.a,{className:"mb-2"},a&&(null===a||void 0===a?void 0:a.map((function(e,t){var a,o,i,r,c,d,m,s,b,p,f,C,k,S,D,w,A,J,Y,T,L,U,z,P,B,Z,$,Q,X,te,ae,le,ie,ue,re,ce,de,me,ve,se,be,pe,Ee,ye,ge,fe,Oe;N()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),u.a.createElement(O.a,{inputClass:"myphoneinput",country:"in",onKeyDown:function(t){var a,l;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:V[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var a;W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,t)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("ountry"))?(console.log(e),u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(m=e.label)||void 0===m?void 0:m._text),u.a.createElement(x.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:F,onChange:function(e){M(e),W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("tate"))?u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(x.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===F||void 0===F?void 0:F.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:K,onChange:function(e){R(e),W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ity"))?u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(b=e.label)||void 0===b?void 0:b._text),u.a.createElement(x.a,{options:null===_.a||void 0===_.a?void 0:_.a.getCitiesOfState(null===K||void 0===K?void 0:K.countryCode,null===K||void 0===K?void 0:K.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:H,onChange:function(e){I(e),W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(p=e.type)||void 0===p||null===(f=p._attributes)||void 0===f?void 0:f.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(C=e.label)||void 0===C?void 0:C._text),u.a.createElement(g.a,{onKeyDown:function(t){var a,l;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(k=e.type)||void 0===k||null===(S=k._attributes)||void 0===S?void 0:S.type,placeholder:null===e||void 0===e||null===(D=e.placeholder)||void 0===D?void 0:D._text,name:null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text,dateFormat:null===ne||void 0===ne||null===(A=ne.UserInformatio)||void 0===A?void 0:A.dateFormat,value:N()(V[null===e||void 0===e||null===(J=e.name)||void 0===J?void 0:J._text]).tz(null===ne||void 0===ne||null===(Y=ne.UserInformatio)||void 0===Y?void 0:Y.timeZone).format(null===ne||void 0===ne||null===(T=ne.UserInformatio)||void 0===T?void 0:T.dateFormat),onChange:function(a){var l,n;return oe(a,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(L=e.label)||void 0===L?void 0:L._text),u.a.createElement(g.a,{onKeyDown:function(t){var a,l;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(U=e.type)||void 0===U||null===(z=U._attributes)||void 0===z?void 0:z.type,placeholder:null===e||void 0===e||null===(P=e.placeholder)||void 0===P?void 0:P._text,name:null===e||void 0===e||null===(B=e.name)||void 0===B?void 0:B._text,value:V[null===e||void 0===e||null===(Z=e.name)||void 0===Z?void 0:Z._text],onChange:function(a){var l,n;return oe(a,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,(null===e||void 0===e?void 0:e.number)?u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===($=e.label)||void 0===$?void 0:$._text),u.a.createElement(g.a,{onWheel:function(e){e.preventDefault()},onKeyDown:function(t){var a,l;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Q=e.type)||void 0===Q||null===(X=Q._attributes)||void 0===X?void 0:X.type,placeholder:null===e||void 0===e||null===(te=e.placeholder)||void 0===te?void 0:te._text,name:null===e||void 0===e||null===(ae=e.name)||void 0===ae?void 0:ae._text,value:V[null===e||void 0===e||null===(le=e.name)||void 0===le?void 0:le._text],onChange:function(a){var l,n;return oe(a,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(v.a,{key:t,lg:"4",md:"4",sm:"12"},u.a.createElement(E.a,{key:t},(null===e||void 0===e||null===(ie=e.type)||void 0===ie||null===(ue=ie._attributes)||void 0===ue?void 0:ue.type)&&"file"==(null===e||void 0===e||null===(re=e.type)||void 0===re||null===(ce=re._attributes)||void 0===ce?void 0:ce.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(de=e.label)||void 0===de?void 0:de._text),u.a.createElement(g.a,{multiple:!0,className:"form-control",type:null===e||void 0===e||null===(me=e.type)||void 0===me||null===(ve=me._attributes)||void 0===ve?void 0:ve.type,placeholder:null===e||void 0===e||null===(se=e.placeholder)||void 0===se?void 0:se._text,name:null===e||void 0===e||null===(be=e.name)||void 0===be?void 0:be._text,onChange:function(a){var o,i;!function(e,t,a){var o=e.target,i=o.name,u=(o.value,o.checked,Array.from(e.target.files));G(a),W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},i,u)))}(a,null===e||void 0===e||null===(o=e.type)||void 0===o||null===(i=o._attributes)||void 0===i||i.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)):u.a.createElement(u.a.Fragment,null,u.a.createElement(y.a,{className:"mb-1"},null===e||void 0===e||null===(pe=e.label)||void 0===pe?void 0:pe._text),u.a.createElement(g.a,{className:"form-control",onKeyDown:function(t){var a,l;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(Ee=e.type)||void 0===Ee||null===(ye=Ee._attributes)||void 0===ye?void 0:ye.type,placeholder:null===e||void 0===e||null===(ge=e.placeholder)||void 0===ge?void 0:ge._text,name:null===e||void 0===e||null===(fe=e.name)||void 0===fe?void 0:fe._text,value:V[null===e||void 0===e||null===(Oe=e.name)||void 0===Oe?void 0:Oe._text],onChange:function(a){var l,n;oe(a,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type,t)}}),q===t?u.a.createElement(u.a.Fragment,null,ee&&u.a.createElement("span",{style:{color:"red"}},ee)):u.a.createElement(u.a.Fragment,null)))))})))),u.a.createElement("hr",null),u.a.createElement(v.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},u.a.createElement(y.a,{className:"mb-0"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(e){W(Object(n.a)(Object(n.a)({},V),{},Object(l.a)({},"status",e.target.value)))}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Deactive"))),u.a.createElement(m.a,null,u.a.createElement(s.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},943:function(e,t,a){"use strict";var l=a(10),n=a(12),o=a(1),i=a.n(o),u=a(2),r=a.n(u),c=a(8),d=a.n(c),m=a(7),v=["className","cssModule","row","disabled","check","inline","tag"],s={children:r.a.node,row:r.a.bool,check:r.a.bool,inline:r.a.bool,disabled:r.a.bool,tag:m.tagPropType,className:r.a.string,cssModule:r.a.object},b=function(e){var t=e.className,a=e.cssModule,o=e.row,u=e.disabled,r=e.check,c=e.inline,s=e.tag,b=Object(n.a)(e,v),p=Object(m.mapToCssModules)(d()(t,!!o&&"row",r?"form-check":"form-group",!(!r||!c)&&"form-check-inline",!(!r||!u)&&"disabled"),a);return"fieldset"===s&&(b.disabled=u),i.a.createElement(s,Object(l.a)({},b,{className:p}))};b.propTypes=s,b.defaultProps={tag:"div"},t.a=b}}]);
//# sourceMappingURL=386.72720d4c.chunk.js.map