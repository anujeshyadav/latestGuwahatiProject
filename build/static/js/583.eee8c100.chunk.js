(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[583],{1862:function(e,t,a){"use strict";a.r(t);var l=a(25),n=a(27),r=a(1),o=a.n(r),c=(a(234),a(912)),u=a(904),i=a(905),d=a(245),m=a(916),s=a(906),v=a(907),b=a(908),E=(a(235),a(85)),p=(a(233),a(44));t.default=function(e){var t=Object(r.useState)(""),a=Object(n.a)(t,2),f=(a[0],a[1]),y=Object(r.useState)(""),N=Object(n.a)(y,2),O=N[0],g=(N[1],Object(r.useState)([])),j=Object(n.a)(g,2),S=(j[0],j[1]),h=Object(r.useState)(0),I=Object(n.a)(h,2),P=I[0],_=I[1],Q=Object(r.useState)({}),R=Object(n.a)(Q,2),x=(R[0],R[1]),T=Object(r.useState)({}),k=Object(n.a)(T,2),J=(k[0],k[1]),q=Object(r.useState)([]),w=Object(n.a)(q,2),D=(w[0],w[1]),C=(Object(E.i)(),Object(E.h)()),z=Object(r.useState)([{productId:"",Product_Title:"",Qty_Sales:"",Qty_Return:0,Product_Price:""}]),M=Object(n.a)(z,2),B=M[0],F=M[1],G=function(e,t){f(t);var a=e.target,n=a.name,r=a.value,o=Object(l.a)(B);o[t][n]=Number(r),F(o);var c=null===o||void 0===o?void 0:o.map((function(e){return Number((null===e||void 0===e?void 0:e.price)*(null===e||void 0===e?void 0:e.returnQty))})),u=null===c||void 0===c?void 0:c.reduce((function(e,t){return e+t}),0);_(u)};Object(r.useEffect)((function(){var e,t=null===(e=JSON.parse(localStorage.getItem("OrderList")))||void 0===e?void 0:e.orderItems;if(null===C||void 0===C?void 0:C.state){var a,l;F(null===C||void 0===C?void 0:C.state.orderItems);var n=null===C||void 0===C||null===(a=C.state)||void 0===a||null===(l=a.orderItems)||void 0===l?void 0:l.reduce((function(e,t){var a;return e+(null===t||void 0===t||null===(a=t.productId)||void 0===a?void 0:a.Product_MRP)}),0);_(n),localStorage.setItem("EditoneProduct",null===C||void 0===C?void 0:C.state),x(null===C||void 0===C?void 0:C.state)}else{var r,o;F(t);var c=null===C||void 0===C||null===(r=C.state)||void 0===r||null===(o=r.orderItems)||void 0===o?void 0:o.reduce((function(e,t){var a;return e+(null===t||void 0===t||null===(a=t.productId)||void 0===a?void 0:a.Product_MRP)}),0);console.log(c),_(c)}}),[]),Object(r.useEffect)((function(){}),[B]),Object(r.useEffect)((function(){Object(p.F)().then((function(e){D(null===e||void 0===e?void 0:e.SalesPerson)})).catch((function(e){return console.log(e)}));var e=JSON.parse(localStorage.getItem("userData"));Object(p.Nb)(null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.database).then((function(e){S(null===e||void 0===e?void 0:e.Product)})).catch((function(e){console.log(e)}))}),[]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));console.log(e),J(e)}),[]);return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(c.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(i.a,{className:""},o.a.createElement("div",null,o.a.createElement("h1",{className:""},"Sales Return"))),o.a.createElement(i.a,null,o.a.createElement("div",{className:"float-right"},o.a.createElement(E.b,{render:function(e){var t=e.history;return o.a.createElement(d.a,{style:{cursor:"pointer"},className:"float-right mr-1",color:"danger",size:"sm",onClick:function(){return t.goBack()}},"Back")}})))),o.a.createElement(m.a,null,o.a.createElement(s.a,{className:"m-1",onSubmit:function(e){var t,a,l;e.preventDefault(),console.log(B);var n=JSON.parse(localStorage.getItem("userData"));console.log(n);var r=null===B||void 0===B?void 0:B.map((function(e,t){var a;return{productId:null===e||void 0===e||null===(a=e.productId)||void 0===a?void 0:a._id,Qty_Sales:null===e||void 0===e?void 0:e.qty,Qty_Return:Number(null===e||void 0===e?void 0:e.returnQty),Product_Price:null===e||void 0===e?void 0:e.price}})),o={partyId:null===C||void 0===C||null===(t=C.state)||void 0===t||null===(a=t.partyId)||void 0===a?void 0:a._id,userId:null===n||void 0===n?void 0:n._id,returnItems:r,mobileNumber:null===n||void 0===n?void 0:n.mobileNumber,email:n.email,Return_amount:P,orderId:null===C||void 0===C||null===(l=C.state)||void 0===l?void 0:l._id,created_by:null===n||void 0===n?void 0:n._id};O?swal("Error occured while Entering Details"):Object(p.Wb)(o).then((function(e){swal("Sales Returned Successfully"),console.log(e)})).catch((function(e){console.log(e)}))}},B&&(null===B||void 0===B?void 0:B.map((function(e,t){var a,l;return console.log(e),o.a.createElement(u.a,{className:"",key:t},o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Product Name"),o.a.createElement(b.a,{type:"text",name:"Product_Title",readOnly:!0,placeholder:"Product Name",value:null===e||void 0===e||null===(a=e.productId)||void 0===a?void 0:a.Product_Title}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Price"),o.a.createElement(b.a,{type:"text",name:"price",readOnly:!0,placeholder:"Price",value:null===e||void 0===e||null===(l=e.productId)||void 0===l?void 0:l.Product_MRP}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Purchased Quantity"),o.a.createElement(b.a,{type:"number",readOnly:!0,name:"qty",placeholder:"Req_Qty",value:(null===e||void 0===e?void 0:e.qty)*(null===e||void 0===e?void 0:e.Size),onChange:function(e){return G(e,t)}}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"UnitType"),o.a.createElement(b.a,{type:"text",readOnly:!0,name:"unitType",placeholder:"unit Type",value:null===e||void 0===e?void 0:e.unitType,onChange:function(e){return G(e,t)}}))),o.a.createElement(i.a,{className:"mb-1",lg:"2",md:"2",sm:"12"},o.a.createElement("div",{className:""},o.a.createElement(v.a,null,"Return Quantity"),o.a.createElement(b.a,{min:0,max:(null===e||void 0===e?void 0:e.qty)*(null===e||void 0===e?void 0:e.Size)-1,type:"number",name:"returnQty",placeholder:"Return Quantity",value:null===B||void 0===B?void 0:B.returnQty,onChange:function(e){return G(e,t)}}))))}))),o.a.createElement(u.a,null,o.a.createElement(i.a,{className:"mb-1",lg:"12",md:"12",sm:"12"},o.a.createElement("div",{className:" d-flex justify-content-end"},o.a.createElement(v.a,{className:"pr-5"},"Grand Total :",o.a.createElement("strong",null,P&&"NaN"==P?0:P))))),o.a.createElement(u.a,null,o.a.createElement(i.a,null,o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mt-2"},"Submit")))))))))}}}]);
//# sourceMappingURL=583.eee8c100.chunk.js.map