(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8936],{26820:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/pages/wallet",function(){return t(86983)}])},85177:function(e,a,t){"use strict";t.r(a);var s=t(85893),n=t(67294),l=t(2999),r=t(3902);t(86142),a.default=e=>{let{children:a}=e,[t,c]=(0,n.useState)(!0);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"main-wrapper",children:[(0,s.jsx)(l.default,{}),(0,s.jsx)(r.default,{}),(0,s.jsx)("main",{children:a})]})})}},86983:function(e,a,t){"use strict";t.r(a);var s=t(85893),n=t(67294),l=t(25675),r=t.n(l),c=t(85177),i=t(46869),o=t(93680),d=t(99811);a.default=function(){let[e,a]=(0,n.useState)(!1),[t,l]=(0,n.useState)(!1),[m,p]=(0,n.useState)([]),[h,u]=(0,n.useState)({user:"",type:"Wallet Topup",amount:"",date:"",paymentType:"",status:"Pending"}),[x,j]=(0,n.useState)([]),[y,f]=(0,n.useState)();(0,n.useEffect)(()=>{(async()=>{try{let[e,a]=await Promise.all([d.Z.fetch('*[_type == "user"]{username, "profilepicture": profilepicture.asset->url, phonenumber}'),d.Z.fetch('*[_type == "walletTransaction"]')]),t=e.map(e=>e.username);p(t);let s=a.map(a=>{let t=e.find(e=>e.username===a.user);return{...a,profilepicture:t?t.profilepicture:null,phonenumber:t?t.phonenumber:"No Phone Found"}});j(s)}catch(e){console.error("Error fetching data:",e)}})()},[]);let b=()=>{a(e=>!e)},N=e=>{u({...h,[e.target.name]:e.target.value})},v=async e=>{f(e);try{let a={_key:new Date().toISOString(),type:h.type,amount:h.amount,date:h.date,paymentType:h.paymentType,status:h.status},t=x[e];if(!t){console.error("Transaction to update is undefined");return}let s=await d.Z.getDocument(t._id);if(!s){console.error("Fetched transaction is undefined");return}let n=s.walletBalance;"Wallet Topup"===h.type?n+=parseFloat(h.amount):("Purchase"===h.type||"Refund"===h.type)&&(n-=parseFloat(h.amount));let r=x.map((t,s)=>s===e?{...t,transactions:[...t.transactions,a],walletBalance:n}:t);await d.Z.patch(t._id).set({transactions:r[e].transactions,walletBalance:n}).commit(),j(r),l(!1)}catch(e){console.error("Error updating transaction:",e)}},g=async()=>{try{let e={_key:new Date().toISOString(),type:h.type,amount:h.amount,date:h.date,paymentType:h.paymentType,status:h.status},t=await d.Z.fetch('*[_type == "walletTransaction" && user == "'.concat(h.user,'"][0]'));if(t){let a=[...t.transactions,e];await d.Z.patch(t._id).set({transactions:a}).inc({walletBalance:parseInt(h.amount,10)}).commit()}else await d.Z.create({_type:"walletTransaction",user:h.user,transactions:[e],walletBalance:parseInt(h.amount,10)});a(!1)}catch(e){console.error("Error creating/updating wallet transaction:",e)}};return(0,s.jsx)(c.default,{children:(0,s.jsxs)("div",{className:"page-wrapper page-settings",children:[(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)("div",{className:"content-page-header content-page-headersplit",children:[(0,s.jsx)("h5",{children:"Wallet"}),(0,s.jsx)("div",{className:"list-btn",children:(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:(0,s.jsx)("a",{href:"#",onClick:b,className:"btn",children:"Add Amount"})})})})]}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-12 ",children:(0,s.jsx)("div",{className:"table-resposnive",children:(0,s.jsxs)("table",{className:"table datatable",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"#"}),(0,s.jsx)("th",{children:"User Name"}),(0,s.jsx)("th",{children:"Phone"}),(0,s.jsx)("th",{children:"Balance"}),(0,s.jsx)("th",{children:"Action"})]})}),(0,s.jsx)("tbody",{children:x.map((e,a)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:a+1}),(0,s.jsxs)("td",{className:"table-profileimage",children:[(0,s.jsx)("a",{className:"table-profileimage",children:(0,s.jsx)(r(),{width:1280,height:100,src:e.profilepicture||"/admin/img/customer/user-01.jpg",className:"me-2",alt:"img"})}),(0,s.jsxs)("a",{className:"table-name",children:[(0,s.jsx)("span",{children:e.user}),(0,s.jsx)("p",{children:(0,s.jsx)("span",{className:"__cf_email__","data-cfemail":"23494c4b4d504e4a574b63465b424e534f460d404c4e",children:"[email\xa0protected]"})})]})]}),(0,s.jsxs)("td",{children:[e.phonenumber," "]}),(0,s.jsxs)("td",{children:["AED ",e.walletBalance," "]}),(0,s.jsx)("td",{children:(0,s.jsx)("button",{className:"btn btn-history",onClick:()=>{l(!0),f(a)},children:"Edit"})})]},a))})]})})})})]}),(0,s.jsxs)(i.Z,{show:e,onHide:b,children:[(0,s.jsx)(i.Z.Header,{closeButton:!0,children:(0,s.jsx)(i.Z.Title,{children:"Add Amount"})}),(0,s.jsxs)(i.Z.Body,{children:[(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"user",className:"form-label",children:"User"}),(0,s.jsxs)("select",{className:"form-select",id:"user",value:h.user,onChange:e=>{u({...h,user:e.target.value})},children:[(0,s.jsx)("option",{value:"",children:"Select user"}),m.map((e,a)=>(0,s.jsx)("option",{value:e,children:e},a))]})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"type",className:"form-label",children:"Type"}),(0,s.jsx)("select",{className:"form-select",id:"type",name:"type",value:h.type,onChange:N,children:(0,s.jsx)("option",{value:"Wallet Topup",children:"Wallet Topup"})})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"amount",className:"form-label",children:"Amount"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"amount",name:"amount",value:h.amount,onChange:N,placeholder:"Enter transaction amount"})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"date",className:"form-label",children:"Date"}),(0,s.jsx)("input",{type:"datetime-local",className:"form-control",id:"date",name:"date",value:h.date,onChange:N})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"paymentType",className:"form-label",children:"Payment Type"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"paymentType",name:"paymentType",value:h.paymentType,onChange:N,placeholder:"Enter payment type"})]})]}),(0,s.jsxs)(i.Z.Footer,{children:[(0,s.jsx)(o.Z,{variant:"secondary",onClick:b,children:"Close"}),(0,s.jsx)(o.Z,{variant:"primary",onClick:g,children:"Submit"})]})]}),(0,s.jsxs)(i.Z,{show:t,onHide:()=>{l(!1)},children:[(0,s.jsx)(i.Z.Header,{closeButton:!0,children:(0,s.jsx)(i.Z.Title,{children:"Edit Transaction"})}),(0,s.jsxs)(i.Z.Body,{children:[(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"type",className:"form-label",children:"Type"}),(0,s.jsx)("select",{className:"form-select",id:"type",name:"type",value:h.type,onChange:N,children:(0,s.jsx)("option",{value:"Wallet Topup",children:"Wallet Topup"})})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"amount",className:"form-label",children:"Amount"}),(0,s.jsx)("input",{type:"number",className:"form-control",id:"amount",name:"amount",value:h.amount,onChange:N,placeholder:"Enter transaction amount"})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"date",className:"form-label",children:"Date"}),(0,s.jsx)("input",{type:"datetime-local",className:"form-control",id:"date",name:"date",value:h.date,onChange:N})]}),(0,s.jsxs)("div",{className:"mb-3",children:[(0,s.jsx)("label",{htmlFor:"paymentType",className:"form-label",children:"Payment Type"}),(0,s.jsx)("input",{type:"text",className:"form-control",id:"paymentType",name:"paymentType",value:h.paymentType,onChange:N,placeholder:"Enter payment type"})]})]}),(0,s.jsxs)(i.Z.Footer,{children:[(0,s.jsx)(o.Z,{variant:"secondary",onClick:()=>{l(!1)},children:"Close"}),(0,s.jsx)(o.Z,{className:"btn btn-history",onClick:()=>v(y),children:"Save Changes"})]})]})]})})}},86142:function(){}},function(e){e.O(0,[571,8764,5675,9668,4440,1664,4620,2010,3902,2999,7034,2888,9774,179],function(){return e(e.s=26820)}),_N_E=e.O()}]);