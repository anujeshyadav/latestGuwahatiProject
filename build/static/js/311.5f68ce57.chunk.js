(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[311],{1089:function(e,t,a){"use strict";var n=a(10),r=a(12),l=a(1),o=a.n(l),c=a(2),i=a.n(c),s=a(8),m=a.n(s),u=a(7),d=["className","cssModule","type","size","color","children","tag"],p={tag:u.tagPropType,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},v=function(e){var t=e.className,a=e.cssModule,l=e.type,c=e.size,i=e.color,s=e.children,p=e.tag,v=Object(r.a)(e,d),g=Object(u.mapToCssModules)(m()(t,!!c&&"spinner-"+l+"-"+c,"spinner-"+l,!!i&&"text-"+i),a);return o.a.createElement(p,Object(n.a)({role:"status"},v,{className:g}),s&&o.a.createElement("span",{className:Object(u.mapToCssModules)("sr-only",a)},s))};v.propTypes=p,v.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=v},2216:function(e,t,a){},3243:function(e,t,a){"use strict";a.r(t);var n=a(27),r=a(1),l=a.n(r),o=(a(2216),a(912)),c=a(1089),i=a(904),s=a(905),m=a(245),u=a(85),d=a(5),p=a(44),v=function e(t){var a,o,c=t.node,i=Object(r.useState)(!1),s=Object(n.a)(i,2),m=s[0],u=s[1];return l.a.createElement("div",{className:"container mt-1 mb-2 mainheader"},l.a.createElement("div",{className:"d-flex",style:{marginLeft:"".concat(20*c.depth,"px")}},l.a.createElement("span",{style:{fontSize:"20px"},onClick:function(){u(!m)}},c.roles&&(m?"[-]":"[+]")),l.a.createElement("h5",{style:{fontSize:"20px"},className:"mx-2"},(null===c||void 0===c||null===(a=c.departmentName)||void 0===a?void 0:a.departmentName)&&(null===c||void 0===c||null===(o=c.departmentName)||void 0===o?void 0:o.departmentName)||(null===c||void 0===c?void 0:c.roleName)&&l.a.createElement(l.a.Fragment,null,null===c||void 0===c?void 0:c.roleName,"(Position-",null===c||void 0===c?void 0:c.rolePosition,")"))),m&&c.roles&&c.roles.map((function(t){return l.a.createElement(e,{key:t.id,node:t})})))},g=function(e){var t=e.data;return l.a.createElement(v,{node:t})};t.default=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),a=t[0],v=t[1],f=Object(r.useState)(!1),E=Object(n.a)(f,2),y=E[0],h=E[1];return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));h(!0),Object(p.cd)(d.Ub,null===e||void 0===e?void 0:e.database).then((function(e){console.log(null===e||void 0===e?void 0:e.Department),h(!1),v(null===e||void 0===e?void 0:e.Department)})).catch((function(e){h(!1),console.log(e)}))}),[]),l.a.createElement(o.a,{style:{height:window.innerHeight}},l.a.createElement("div",null,y&&y?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"20rem"}},l.a.createElement(c.a,{style:{height:"4rem",width:"4rem"},color:"primary"},"Loading..."))):l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,null,l.a.createElement(s.a,null),l.a.createElement(s.a,{className:"m-2",lg:"2"},l.a.createElement(u.b,{render:function(e){var t=e.history;return l.a.createElement(m.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"primary",onClick:function(){return t.goBack()}}," ","Back")}}))),l.a.createElement(i.a,null,l.a.createElement(s.a,null,l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("h1",null,"Your Organization Structure")))),a&&a?null===a||void 0===a?void 0:a.map((function(e,t){return l.a.createElement(g,{key:t,data:e})})):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{color:"red"}},l.a.createElement("h3",null,"No Organization Structure found"))))))}}}]);
//# sourceMappingURL=311.5f68ce57.chunk.js.map