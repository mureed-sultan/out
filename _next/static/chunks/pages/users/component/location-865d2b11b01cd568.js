(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6998],{33533:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/component/location",function(){return r(2585)}])},99811:function(e,a,r){"use strict";let t=(0,r(79668).eI)({projectId:"z5hb38ic",dataset:"production",token:"skuTNofc4vVsEsDYuCh86ehs6LxLpBNrENK39jHuEf7JgaENTOYCQb1B89nVQSLUcbGZBH9jcLbhKN5T7hHFbE11HbVGe11zfiSbhWrofum82mApqHd4uzMR8kzmI21aJnt8gM2GJBSfSPTyAykOQ1U0D6DSoaNVPHIuQpQl0SFmlu9OYhIk",apiVersion:"2022-03-07",useCdn:!0});a.Z=t},2585:function(e,a,r){"use strict";r.r(a);var t=r(85893),n=r(67294),s=r(99811),c=r(45007),l=r(89387);function i(){let[e,a]=(0,n.useState)([]),r=(0,c.v9)(e=>e.auth);return(0,n.useEffect)(()=>{(async()=>{try{let e=await s.Z.fetch('*[_type == "user" && username == "'.concat(r.name,'"][0]'));a(e.locations)}catch(e){console.error("Error fetching user locations:",e)}})()},[]),(0,t.jsxs)("div",{className:"col-lg-9",children:[(0,t.jsx)("div",{className:"widget-title",children:(0,t.jsx)("h4",{children:"Dashboard"})}),(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-lg-8 d-flex flex-column",children:[(0,t.jsx)("h6",{className:"user-title",children:"Recent Booking"}),(0,t.jsx)("div",{className:"table-responsive recent-booking flex-fill",children:(0,t.jsx)("table",{className:"table mb-0",children:(0,t.jsx)("tbody",{children:e?e.map((e,a)=>(0,t.jsx)("tr",{children:(0,t.jsx)("td",{className:"d-flex justify-content-between",children:(0,t.jsxs)("h2",{className:"table-avatar",children:[(0,t.jsx)("a",{href:"#",className:"avatar avatar-m me-2"}),(0,t.jsxs)("span",{children:[(0,t.jsx)("h6",{children:e.title}),(0,t.jsx)("br",{})]})]})})},a)):(0,t.jsx)("tr",{children:(0,t.jsx)("td",{children:"No locations found."})})})})})]})})]})}a.default=()=>(0,t.jsx)(c.zt,{store:l.Z,children:(0,t.jsx)(i,{})})},77941:function(e,a,r){"use strict";r.d(a,{n:function(){return l}});var t=r(13784),n=r(99811),s=r(89387),c=r(31623);let l=(0,t.hg)("getAmcContracts",async(e,a)=>{try{let e=await n.Z.fetch("*[_type == 'amcs'] | order(pricePerMonth asc)");s.Z.dispatch((0,c.R)(e)),Promise.resolve()}catch(e){alert("An error occurred while fetching Annual Maintenance Contracts"),Promise.reject()}})},73847:function(e,a,r){"use strict";r.d(a,{w:function(){return l}});var t=r(13784),n=r(47041);let s=(()=>{let e=(0,n.getCookie)("admin");return e?JSON.parse(e):null})()||{name:"",userId:"",imageUrl:""},c=(0,t.oM)({name:"auth",initialState:s,reducers:{setAdmin:(e,a)=>{e.name=a.payload.name,e.userId=a.payload.userId,e.imageUrl=a.payload.imageUrl}}}),{setAdmin:l}=c.actions;a.Z=c.reducer},31623:function(e,a,r){"use strict";r.d(a,{R:function(){return c}});var t=r(13784),n=r(77941);let s=(0,t.oM)({name:"amcContracts",initialState:{loader:!1,annualContracts:[]},reducers:{setAmcContracts:(e,a)=>{e.annualContracts=a.payload}},extraReducers:e=>{e.addCase(n.n.pending,e=>{e.loader=!0}),e.addCase(n.n.fulfilled,e=>{e.loader=!1}),e.addCase(n.n.rejected,e=>{e.loader=!1})}}),{setAmcContracts:c}=s.actions;a.Z=s.reducer},37495:function(e,a,r){"use strict";r.d(a,{Q:function(){return l}});var t=r(13784),n=r(47041);let s=(()=>{let e=(0,n.getCookie)("auth");return e?JSON.parse(e):null})()||{name:"",email:"",userId:"",imageUrl:""},c=(0,t.oM)({name:"auth",initialState:s,reducers:{setAuth:(e,a)=>{e.name=a.payload.name,e.email=a.payload.email,e.userId=a.payload.userId,e.imageUrl=a.payload.imageUrl}}}),{setAuth:l}=c.actions;a.Z=c.reducer},89387:function(e,a,r){"use strict";r.d(a,{Z:function(){return m}});var t=r(13784),n=r(37495),s=r(73847),c=r(47041);let l=(()=>{let e=(0,c.getCookie)("provider");return e?JSON.parse(e):null})()||{name:"",userId:"",imageUrl:""},i=(0,t.oM)({name:"provider",initialState:l,reducers:{setProvider:(e,a)=>{e.name=a.payload.name,e.userId=a.payload.userId,e.imageUrl=a.payload.imageUrl}}}),{setProvider:o}=i.actions;var d=i.reducer,u=r(31623),m=(0,t.xC)({reducer:{auth:n.Z,admin:s.Z,provider:d,amcContracts:u.Z}})}},function(e){e.O(0,[8764,9668,4440,2888,9774,179],function(){return e(e.s=33533)}),_N_E=e.O()}]);