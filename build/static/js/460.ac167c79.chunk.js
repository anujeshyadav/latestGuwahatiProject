(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[460],{2964:function(e,a,t){"use strict";t.r(a);var l=t(61),n=t(9),r=t(27),c=t(1),m=t.n(c),s=t(912),o=t(904),i=t(905),d=t(245),u=t(916),p=t(906),E=t(943),b=t(907),h=t(908),g=(t(28),t(6)),v=t(85);a.default=function(e){var a=Object(c.useState)({name:"",email:"",password:"",mobile:"",address:"",delivery_zone:"",status:""}),t=Object(r.a)(a,2),y=t[0],f=t[1],N=function(e){f(Object(n.a)(Object(n.a)({},y),{},Object(l.a)({},e.target.name,e.target.value)))};return m.a.createElement("div",null,m.a.createElement(s.a,null,m.a.createElement(o.a,{className:"m-2"},m.a.createElement(i.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Hub")),m.a.createElement(i.a,null,m.a.createElement(v.b,{render:function(e){var a=e.history;return m.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/hubs/hubList")}},"Back")}}))),m.a.createElement(u.a,null,m.a.createElement(p.a,{className:"m-1",onSubmit:function(a){a.preventDefault(),console.log("submitHandler",y),g.a.post("/admin/addhub",y).then((function(a){console.log("response",a.data.data),e.history.push("/app/freshlist/hubs/hubList")})).catch((function(e){console.log(e)}))}},m.a.createElement(o.a,{className:"mb-2"},m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Hub Name"),m.a.createElement(h.a,{type:"text",placeholder:"Hub Name",name:"name",value:y.name,onChange:N}))),m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Mobile No."),m.a.createElement(h.a,{type:"tel",maxlength:"10",placeholder:"Mobile",name:"mobile",value:y.mobile,onChange:N}))),m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Email"),m.a.createElement(h.a,{type:"email",placeholder:"Enter Email",name:"email",value:y.email,onChange:N}))),m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Password"),m.a.createElement(h.a,{type:"password",placeholder:"Enter Password",name:"password",value:y.password,onChange:N}))),m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Address"),m.a.createElement(h.a,{type:"text",placeholder:"Enter Address",name:"address",id:"address",value:y.address,onChange:N}))),m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(b.a,null,"Delivery Zone"),m.a.createElement(h.a,{type:"text",placeholder:"",name:"delivery_zone",value:y.delivery_zone,onChange:N}))),m.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},m.a.createElement(b.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:N},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),m.a.createElement(o.a,{className:"m-2"},m.a.createElement(v.b,{render:function(e){e.history;return m.a.createElement(d.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Hub")}}))))))}},943:function(e,a,t){"use strict";var l=t(10),n=t(12),r=t(1),c=t.n(r),m=t(2),s=t.n(m),o=t(8),i=t.n(o),d=t(7),u=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:d.tagPropType,className:s.a.string,cssModule:s.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.row,m=e.disabled,s=e.check,o=e.inline,p=e.tag,E=Object(n.a)(e,u),b=Object(d.mapToCssModules)(i()(a,!!r&&"row",s?"form-check":"form-group",!(!s||!o)&&"form-check-inline",!(!s||!m)&&"disabled"),t);return"fieldset"===p&&(E.disabled=m),c.a.createElement(p,Object(l.a)({},E,{className:b}))};E.propTypes=p,E.defaultProps={tag:"div"},a.a=E}}]);
//# sourceMappingURL=460.ac167c79.chunk.js.map