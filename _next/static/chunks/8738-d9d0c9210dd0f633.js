(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8738],{99811:function(e,s,a){"use strict";let r=(0,a(79668).eI)({projectId:"z5hb38ic",dataset:"production",token:"skuTNofc4vVsEsDYuCh86ehs6LxLpBNrENK39jHuEf7JgaENTOYCQb1B89nVQSLUcbGZBH9jcLbhKN5T7hHFbE11HbVGe11zfiSbhWrofum82mApqHd4uzMR8kzmI21aJnt8gM2GJBSfSPTyAykOQ1U0D6DSoaNVPHIuQpQl0SFmlu9OYhIk",apiVersion:"2022-03-07",useCdn:!0});s.Z=r},28738:function(e,s,a){"use strict";a.d(s,{Z:function(){return y}});var r=a(85893),n=a(67294),t=a(11163),i=a.n(t),l=a(25675),c=a.n(l),o=a(41664),d=a.n(o),h=a(45007),m=a(89387),u=a(99811);function j(){let[e,s]=(0,n.useState)(!1),[a,t]=(0,n.useState)(null),i=(0,h.v9)(e=>e.auth),l=(0,h.v9)(e=>e.provider);(0,n.useEffect)(()=>{i.name&&u.Z.fetch('*[_type == "user" && username == $username][0]{\n                    username,\n                    "imageUrl": profilepicture.asset->url,\n                }',{username:i.name}).then(e=>{t(e)}).catch(e=>{console.error("Error fetching user information:",e)})},[i.name]);let o=()=>{s(!e)};return(0,r.jsx)("header",{className:"header header-one",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("nav",{className:"navbar navbar-expand-lg header-nav",children:[(0,r.jsxs)("div",{className:"navbar-header",children:[(0,r.jsx)("a",{onClick:o,className:"menu-toggle-button",children:(0,r.jsx)("i",{className:"fas fa-bars"})}),(0,r.jsx)(d(),{legacyBehavior:!0,href:"/",children:(0,r.jsx)("a",{className:"navbar-brand logo d-flex justify-content-center align-items-center",children:(0,r.jsx)(c(),{width:250,height:80,src:"/assets/img/logofooter.png",className:"Image-fluid",alt:"Logo"})})})]}),(0,r.jsxs)("div",{className:"main-menu-wrapper ".concat(e?"show-mobile-menu":""),children:[(0,r.jsxs)("div",{className:"menu-header",children:[(0,r.jsx)(d(),{legacyBehavior:!0,href:"/",children:(0,r.jsx)("a",{className:"menu-logo",children:(0,r.jsx)(c(),{width:100,height:100,src:"/assets/img/logofooter.png",className:"Image-fluid",alt:"Logo"})})}),(0,r.jsx)("a",{onClick:o,className:"menu-close",children:(0,r.jsx)("i",{className:"fas fa-times"})})]}),(0,r.jsxs)("ul",{className:"main-nav",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/users/signup",children:"Register"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/users/signin",children:"Login"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{className:"nav-link ",href:"/ContactUs",children:"Get Free Quote"})})]})]}),(0,r.jsx)(d(),{className:"btn btn-primary btn-mobile-hide",href:"/ContactUs",children:"Get Free Quote"}),(0,r.jsxs)("ul",{className:"nav header-navbar-rht",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsxs)("a",{href:"tel:+971505937572",className:"no-bold",children:[(0,r.jsx)("i",{className:"fa-solid fa-phone"})," +971 50 593 7572"]})}),i.name?(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(d(),{className:"nav-link header-reg",href:"/users/signup",children:"Register"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsxs)(d(),{className:"nav-link header-login",href:"/users/signin",children:[(0,r.jsx)("i",{className:"fa-regular fa-circle-user me-2"}),"Login"]})})]}),l.name?(0,r.jsx)("li",{children:(0,r.jsxs)(d(),{href:"/provider/pages/dashboard",className:"user-info mr-3 justify-content-center align-items-center d-flex flex-column",children:[(0,r.jsx)(c(),{src:l.imageUrl?l.imageUrl:"/assets/img/profiles/avatar-02.jpg",alt:"User",width:40,height:40,className:"rounded-circle"}),(0,r.jsx)("span",{className:"ml-2",children:l.name})]})}):(0,r.jsx)(r.Fragment,{}),(null==a?void 0:a.username)?(0,r.jsx)("li",{children:(0,r.jsxs)(d(),{href:"/users/dashboard",className:"user-info mr-3 justify-content-center align-items-center d-flex flex-column",children:[(0,r.jsx)(c(),{src:a.imageUrl?a.imageUrl:"/assets/img/profiles/avatar-02.jpg",alt:"User",width:40,height:40,className:"rounded-circle"}),(0,r.jsx)("span",{className:"ml-2",children:a.username})]})}):(0,r.jsx)(r.Fragment,{})]})]})})})}var x=()=>(0,r.jsx)(h.zt,{store:m.Z,children:(0,r.jsx)(j,{})}),g=()=>{let[e,s]=(0,n.useState)("English"),a=()=>{new window.google.translate.TranslateElement({pageLanguage:"en",includedLanguages:"en,ar",autoDisplay:!0},"google_translate_element")};return(0,n.useEffect)(()=>{let e=document.createElement("script");e.setAttribute("src","//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"),document.body.appendChild(e),window.googleTranslateElementInit=a},[]),(0,r.jsxs)("footer",{className:"footer",children:[(0,r.jsx)("script",{src:"path/to/your/script.js"}),(0,r.jsx)("div",{className:"footer-top aos","data-aos":"fade-up",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,r.jsxs)("div",{className:"footer-widget",children:[(0,r.jsx)("div",{className:"footer-logo",children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)(c(),{width:250,height:100,src:"/assets/img/Sticker-01.png",alt:"logo"})})}),(0,r.jsxs)("div",{className:"footer-selects",children:[(0,r.jsx)("h2",{className:"footer-title",children:"Language & Currency"}),(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-lg-12 d-flex",children:[(0,r.jsx)("div",{className:"footer-select",children:(0,r.jsx)("div",{id:"google_translate_element"})}),(0,r.jsx)("div",{className:"footer-select",children:(0,r.jsx)("select",{className:"select",children:(0,r.jsx)("option",{children:"AED"})})})]})})]})]})}),(0,r.jsx)("div",{className:"col-lg-2 col-md-6",children:(0,r.jsxs)("div",{className:"footer-widget footer-menu",children:[(0,r.jsx)("h2",{className:"footer-title",children:"Quick Links"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/faqs",children:"FAQ's"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"blog-grid.html",children:"Blogs"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/ContactUs",children:"Contact Us"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/contactProvider",children:"Become a Partner"})})]})]})}),(0,r.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,r.jsxs)("div",{className:"footer-widget footer-contact",children:[(0,r.jsx)("h2",{className:"footer-title",children:"Contact Us"}),(0,r.jsxs)("div",{className:"footer-contact-info",children:[(0,r.jsx)("div",{className:"footer-address",children:(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"feather feather-globe"})}),"MAINTAINIT TECHNOLOGIES L.L.C-FZ"]})}),(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"feather-phone"})}),(0,r.jsx)("a",{href:"tel:+971505937572",children:"  +971 50 593 7572"})]}),(0,r.jsxs)("p",{className:"mb-0",children:[(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"feather-mail"})}),(0,r.jsx)("a",{href:"mailto:sales@maintainit.ae",className:"__cf_email__",children:"sales@maintainit.ae"})]}),(0,r.jsxs)("p",{className:"mt-2",children:[(0,r.jsx)("span",{children:(0,r.jsx)("i",{className:"feather-map-pin"})}),(0,r.jsx)("a",{children:"Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E"})]})]})]})}),(0,r.jsx)("div",{className:"col-lg-3 col-md-6",children:(0,r.jsxs)("div",{className:"footer-widget",children:[(0,r.jsx)("h2",{className:"footer-title",children:"Follow Us"}),(0,r.jsx)("div",{className:"social-icon",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.facebook.com/maintainit.ae",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-facebook"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.linkedin.com/company/maintainit-technologies/",target:"_blank",children:(0,r.jsx)("i",{className:"fab fa-linkedin"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.instagram.com/maintainitae",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-instagram"})})}),"   ",(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.tiktok.com/@maintainitae",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-tiktok"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.youtube.com/@maintainitae",target:"_blank",children:(0,r.jsx)("i",{className:"fa-brands fa-youtube"})})})]})}),(0,r.jsx)("h2",{className:"footer-subtitle",children:"Newsletter Signup"}),(0,r.jsxs)("div",{className:"subscribe-form",children:[(0,r.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter Email Address"}),(0,r.jsx)("button",{type:"submit",className:"btn footer-btn",children:(0,r.jsx)("i",{className:"feather-send"})})]})]})})]})})}),(0,r.jsx)("div",{className:"footer-bottom",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"copyright",children:(0,r.jsxs)("div",{className:"row align-items-center",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("div",{className:"copyright-text",children:(0,r.jsx)("p",{className:"mb-0",children:"Copyright \xa9 2024. All Rights Reserved."})})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("div",{className:"payment-image",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:(0,r.jsx)(c(),{width:57,height:28,src:"/assets/img/payment/visa.png",alt:"img"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:(0,r.jsx)(c(),{width:57,height:28,src:"/assets/img/payment/mastercard.png",alt:"img"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:(0,r.jsx)(c(),{width:57,height:28,src:"/assets/img/payment/stripe.png",alt:"img"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{children:(0,r.jsx)(c(),{width:57,height:28,src:"/assets/img/payment/discover.png",alt:"img"})})})]})})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("div",{className:"copyright-menu",children:(0,r.jsxs)("ul",{className:"policy-menu",children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/privacy",children:"Privacy Policy"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/term",children:"Terms & Conditions"})})]})})})]})})})})]})},f=a(97975);a(1941),a(35280),a(56776),a(90305);var p=a(2711),N=a.n(p),v=a(9008),b=a.n(v),y=e=>{let{children:s}=e,[a,t]=(0,n.useState)(!1),[l,c]=(0,n.useState)(null),[o,d]=(0,n.useState)(null);return(0,n.useEffect)(()=>{u.Z.fetch('*[_type=="hfcm" && status == true]').then(e=>{let s=e.find(e=>"header"===e.location),a=e.find(e=>"footer"===e.location);s&&c(s),a&&d(a)}).catch(e=>{console.error("Error fetching data:",e)}),N().init({duration:1e3});let e=()=>t(!0),s=()=>t(!1);return i().events.on("routeChangeStart",e),i().events.on("routeChangeComplete",s),i().events.on("routeChangeError",s),()=>{i().events.off("routeChangeStart",e),i().events.off("routeChangeComplete",s),i().events.off("routeChangeError",s)}},[]),(0,r.jsxs)(r.Fragment,{children:[l&&(0,r.jsxs)(b(),{children:[(0,r.jsx)("title",{children:"Maintainit"}),l.snippets.map((e,s)=>(0,r.jsxs)(n.Fragment,{children:["meta"===e.type&&(0,r.jsx)("meta",{name:e.name,content:e.content}),"scriptSrc"===e.type&&(0,r.jsx)("script",{src:e.content}),"scriptInline"===e.type&&(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:e.content}})]},s))]}),(0,r.jsx)(x,{}),(0,r.jsx)("main",{children:s}),(0,r.jsx)(g,{}),o&&(0,r.jsx)("footer",{children:o.snippets.map((e,s)=>(0,r.jsxs)(n.Fragment,{children:["scriptSrc"===e.type&&(0,r.jsx)("script",{src:e.content}),"scriptInline"===e.type&&(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:e.content}})]},s))}),a&&(0,r.jsx)(f.Z,{loaded:!a})]})}},97975:function(e,s,a){"use strict";var r=a(85893),n=a(67294),t=a(25675),i=a.n(t);s.Z=function(e){let{loaded:s}=e,[a,t]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(s&&a<100){let e=setTimeout(()=>{t(100)},1e3);return()=>clearTimeout(e)}},[s,a]),(0,n.useEffect)(()=>{if(!s&&a<50){let e=setTimeout(()=>{t(50)},0);return()=>clearTimeout(e)}},[s,a]),(0,r.jsx)("div",{className:"loading-overlay z-9",children:(0,r.jsxs)("div",{className:"loading-content",children:[(0,r.jsx)("div",{className:"logo-container",children:(0,r.jsx)(i(),{width:500,height:500,src:"/assets/img/logofooter.png",className:"Image-fluid loading-logo z-9999",alt:"Logo"})}),(0,r.jsx)("div",{className:"progress-bar-container",children:(0,r.jsx)("div",{className:"progress-bar",style:{width:"".concat(a,"%")}})})]})})}},77941:function(e,s,a){"use strict";a.d(s,{n:function(){return l}});var r=a(13784),n=a(99811),t=a(89387),i=a(31623);let l=(0,r.hg)("getAmcContracts",async(e,s)=>{try{let e=await n.Z.fetch("*[_type == 'amcs'] | order(pricePerMonth asc)");t.Z.dispatch((0,i.R)(e)),Promise.resolve()}catch(e){alert("An error occurred while fetching Annual Maintenance Contracts"),Promise.reject()}})},73847:function(e,s,a){"use strict";a.d(s,{w:function(){return l}});var r=a(13784),n=a(47041);let t=(()=>{let e=(0,n.getCookie)("admin");return e?JSON.parse(e):null})()||{name:"",userId:"",imageUrl:""},i=(0,r.oM)({name:"auth",initialState:t,reducers:{setAdmin:(e,s)=>{e.name=s.payload.name,e.userId=s.payload.userId,e.imageUrl=s.payload.imageUrl}}}),{setAdmin:l}=i.actions;s.Z=i.reducer},31623:function(e,s,a){"use strict";a.d(s,{R:function(){return i}});var r=a(13784),n=a(77941);let t=(0,r.oM)({name:"amcContracts",initialState:{loader:!1,annualContracts:[]},reducers:{setAmcContracts:(e,s)=>{e.annualContracts=s.payload}},extraReducers:e=>{e.addCase(n.n.pending,e=>{e.loader=!0}),e.addCase(n.n.fulfilled,e=>{e.loader=!1}),e.addCase(n.n.rejected,e=>{e.loader=!1})}}),{setAmcContracts:i}=t.actions;s.Z=t.reducer},37495:function(e,s,a){"use strict";a.d(s,{Q:function(){return l}});var r=a(13784),n=a(47041);let t=(()=>{let e=(0,n.getCookie)("auth");return e?JSON.parse(e):null})()||{name:"",email:"",userId:"",imageUrl:""},i=(0,r.oM)({name:"auth",initialState:t,reducers:{setAuth:(e,s)=>{e.name=s.payload.name,e.email=s.payload.email,e.userId=s.payload.userId,e.imageUrl=s.payload.imageUrl}}}),{setAuth:l}=i.actions;s.Z=i.reducer},89387:function(e,s,a){"use strict";a.d(s,{Z:function(){return m}});var r=a(13784),n=a(37495),t=a(73847),i=a(47041);let l=(()=>{let e=(0,i.getCookie)("provider");return e?JSON.parse(e):null})()||{name:"",userId:"",imageUrl:""},c=(0,r.oM)({name:"provider",initialState:l,reducers:{setProvider:(e,s)=>{e.name=s.payload.name,e.userId=s.payload.userId,e.imageUrl=s.payload.imageUrl}}}),{setProvider:o}=c.actions;var d=c.reducer,h=a(31623),m=(0,r.xC)({reducer:{auth:n.Z,admin:t.Z,provider:d,amcContracts:h.Z}})},1941:function(){}}]);