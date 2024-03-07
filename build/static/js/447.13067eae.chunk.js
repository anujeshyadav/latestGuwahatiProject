(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[447],{3190:function(e,a,t){"use strict";t.r(a);var l=t(61),n=t(9),r=t(27),o=t(1),s=t.n(o),c=(t(234),t(912)),u=t(904),i=t(905),m=t(245),d=t(916),b=t(906),v=t(943),h=t(907),g=t(908),E=t(73),p=t.n(E),N=t(85),f=(t(171),t(235),t(645),t(44)),O=(t(233),t(5));a.default=function(){var e=Object(o.useState)({}),a=Object(r.a)(e,2),t=(a[0],a[1],Object(o.useState)({})),E=Object(r.a)(t,2),j=E[0],w=E[1],y=Object(o.useState)(""),S=Object(r.a)(y,2),W=S[0],k=S[1],M=Object(o.useState)("Create"),x=Object(r.a)(M,2),C=x[0],A=x[1],D=Object(N.i)();Object(o.useEffect)((function(){JSON.parse(localStorage.getItem("userData"));0==(null===D||void 0===D?void 0:D.id)?A("Create"):(A("Update"),Object(f.cd)(O.Cf,null===D||void 0===D?void 0:D.id).then((function(e){var a=null===e||void 0===e?void 0:e.Warehouse;w({warehouseName:null===a||void 0===a?void 0:a.warehouseName,warehouseAddress:null===a||void 0===a?void 0:a.address,warehouseMobile:null===a||void 0===a?void 0:a.mobileNo,landlineNumber:null===a||void 0===a?void 0:a.landlineNumber,status:null===a||void 0===a?void 0:a.status})})).catch((function(e){console.log(e)})))}),[]);var H=function(e){var a=e.target,t=a.name,r=a.value;"number"==a.type?/^\d{0,10}$/.test(r)?(w(Object(n.a)(Object(n.a)({},j),{},Object(l.a)({},t,r))),k("")):k("Please enter a valid number with a maximum length of 10 digits"):w(Object(n.a)(Object(n.a)({},j),{},Object(l.a)({},t,r)))};return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement(c.a,null,s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h1",{className:"float-left"},C&&C," WareHouse")),s.a.createElement(i.a,null,s.a.createElement(N.b,{render:function(e){var a=e.history;return s.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/softNumen/system/WareHouseListSoft")}},"Back")}}))),s.a.createElement(d.a,null,s.a.createElement(b.a,{className:"m-1",onSubmit:function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),t={warehouseName:null===j||void 0===j?void 0:j.warehouseName,mobileNo:null===j||void 0===j?void 0:j.warehouseMobile,address:null===j||void 0===j?void 0:j.warehouseAddress,landlineNumber:null===j||void 0===j?void 0:j.landlineNumber,database:null===a||void 0===a?void 0:a.database,status:null===j||void 0===j?void 0:j.status};0==(null===D||void 0===D?void 0:D.id)?W?p()("Error occured while Entering Details"):Object(f.D)(t).then((function(e){w({warehouseName:"",warehouseMobile:"",address:"",landlineNumber:"",status:""}),p()("Warehouse  ".concat(e.message))})).catch((function(e){console.log(e),p()("Somthing Went Wrong")})):Object(f.gd)(O.ff,null===D||void 0===D?void 0:D.id,t).then((function(e){console.log(e),p()("Updated Successfully")})).catch((function(e){console.log(e),p()("Somthing Went Wrong")}))}},s.a.createElement(u.a,null,s.a.createElement(i.a,{lg:"3",md:"3",sm:"12"},s.a.createElement(v.a,null,s.a.createElement(h.a,null,"WareHouse Name"),s.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Name",name:"warehouseName",value:j.warehouseName,onChange:H}))),s.a.createElement(i.a,{lg:"3",md:"3",sm:"12"},s.a.createElement(v.a,null,s.a.createElement(h.a,null,"WareHouse Address"),s.a.createElement(g.a,{required:!0,type:"text",placeholder:"Enter Address",name:"warehouseAddress",value:j.warehouseAddress,onChange:H}))),s.a.createElement(i.a,{lg:"3",md:"3",sm:"12"},s.a.createElement(v.a,null,s.a.createElement(h.a,null,"WareHouse Mobile "),s.a.createElement(g.a,{required:!0,type:"number",placeholder:"Enter Mobile No.",name:"warehouseMobile",value:j.warehouseMobile,onChange:H}))),s.a.createElement(i.a,{lg:"3",md:"3",sm:"12"},s.a.createElement(v.a,null,s.a.createElement(h.a,null,"WareHouse LandLine Number"),s.a.createElement(g.a,{required:!0,type:"number",placeholder:"Enter LandLine Number",name:"landlineNumber",value:j.landlineNumber,onChange:H})))),s.a.createElement(u.a,{className:"mb-2"},s.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},s.a.createElement(h.a,{className:"mb-0"},"Status"),s.a.createElement("div",{className:"form-label-group",onChange:function(e){w(Object(n.a)(Object(n.a)({},j),{},Object(l.a)({},"status",e.target.value)))}},s.a.createElement("input",{checked:"Active"==j.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),s.a.createElement("span",{style:{marginRight:"20px"}},"Active"),s.a.createElement("input",{checked:"Deactive"==j.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),s.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),s.a.createElement("hr",null),s.a.createElement(u.a,null,s.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},C&&C)))))))}},943:function(e,a,t){"use strict";var l=t(10),n=t(12),r=t(1),o=t.n(r),s=t(2),c=t.n(s),u=t(8),i=t.n(u),m=t(7),d=["className","cssModule","row","disabled","check","inline","tag"],b={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},v=function(e){var a=e.className,t=e.cssModule,r=e.row,s=e.disabled,c=e.check,u=e.inline,b=e.tag,v=Object(n.a)(e,d),h=Object(m.mapToCssModules)(i()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!u)&&"form-check-inline",!(!c||!s)&&"disabled"),t);return"fieldset"===b&&(v.disabled=s),o.a.createElement(b,Object(l.a)({},v,{className:h}))};v.propTypes=b,v.defaultProps={tag:"div"},a.a=v}}]);
//# sourceMappingURL=447.13067eae.chunk.js.map