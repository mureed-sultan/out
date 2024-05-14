(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7899],{42486:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/pages/categories",function(){return a(4047)}])},85177:function(e,s,a){"use strict";a.r(s);var t=a(85893),l=a(67294),i=a(2999),r=a(3902);a(86142),s.default=e=>{let{children:s}=e,[a,c]=(0,l.useState)(!0);return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"main-wrapper",children:[(0,t.jsx)(i.default,{}),(0,t.jsx)(r.default,{}),(0,t.jsx)("main",{children:s})]})})}},4047:function(e,s,a){"use strict";a.r(s);var t=a(85893),l=a(67294),i=a(25675),r=a.n(i),c=a(85177),n=a(99811),d=a(46869),o=a(93680);s.default=function(){let[e,s]=(0,l.useState)([]),[a,i]=(0,l.useState)(null),[h,m]=(0,l.useState)(""),[x,j]=(0,l.useState)(""),[g,u]=(0,l.useState)(!1),[f,p]=(0,l.useState)(null),[y,N]=(0,l.useState)({title:"",image:null}),[b,v]=(0,l.useState)(!1);(0,l.useEffect)(()=>{(async()=>{try{let e=await n.Z.fetch('*[_type == "category"]');s(e)}catch(e){console.error("Error fetching category types:",e)}})()},[]);let _=e=>{i(e),m(e.title),j(e.image?e.image.asset._ref:""),u(!0)},C=async()=>{try{if(!a||!f)return;let e=await n.Z.assets.upload("image",f,{filename:f.name});await n.Z.patch(a._id).set({title:h,image:{asset:{_ref:e._id}}}).commit(),s(s=>s.map(s=>s._id===a._id?{...s,title:h,image:{asset:{_ref:e._id}}}:s)),u(!1)}catch(e){console.error("Error updating category:",e)}},Z=async e=>{try{await n.Z.delete(e._id),s(s=>s.filter(s=>s._id!==e._id)),alert("Category Deleted")}catch(e){console.error("Error deleting category:",e)}},w=async()=>{try{if(!y.title||!y.image)return;let e=await n.Z.assets.upload("image",y.image,{filename:y.image.name});await n.Z.create({_type:"category",title:y.title,image:{asset:{_ref:e._id}}}),v(!1)}catch(e){console.error("Error creating category:",e)}};return(0,t.jsxs)(c.default,{children:[(0,t.jsx)("div",{className:"page-wrapper page-settings",children:(0,t.jsxs)("div",{className:"content",children:[(0,t.jsxs)("div",{className:"content-page-header content-page-headersplit mb-0",children:[(0,t.jsx)("h5",{children:"Categories"}),(0,t.jsx)("div",{className:"list-btn",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("div",{className:"filter-sorting",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsxs)("a",{href:"javascript:void(0);",className:"filter-sets",children:[(0,t.jsx)("i",{className:"fe fe-filter me-2"}),"Filter"]})}),(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:(0,t.jsx)(r(),{width:20,height:20,src:"/admin/img/icons/sort.svg",className:"me-2",alt:"img"})}),(0,t.jsx)("div",{className:"review-sort",children:(0,t.jsxs)("select",{className:"select",children:[(0,t.jsxs)("option",{children:["A -",">"," Z"]}),(0,t.jsxs)("option",{children:["Z -",">"," A"]})]})})]})]})})}),(0,t.jsx)("li",{children:(0,t.jsxs)("button",{className:"btn btn-primary",type:"button","data-bs-toggle":"modal","data-bs-target":"#add-category",onClick:()=>v(!0),children:[(0,t.jsx)("i",{className:"fa fa-plus me-2"}),"Add Category"]})})]})})]}),(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col-12 ",children:(0,t.jsx)("div",{className:"table-resposnive table-div",children:(0,t.jsxs)("table",{className:"table datatable",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"#"}),(0,t.jsx)("th",{children:"Category Image"}),(0,t.jsx)("th",{children:"Category title"}),(0,t.jsx)("th",{children:"Data ID"}),(0,t.jsx)("th",{children:"Action"})]})}),(0,t.jsx)("tbody",{children:e.map((e,s)=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:s+1}),(0,t.jsx)("td",{children:(0,t.jsx)("div",{className:"table-imgname",children:e.image?(0,t.jsx)(r(),{width:1024,height:100,className:"img-fluid",alt:"Demo text",src:"https://cdn.sanity.io/images/z5hb38ic/production/".concat(e.image.asset._ref.replace("image-","").replace(/-([^/-]*)$/,".$1"))}):(0,t.jsx)(t.Fragment,{})})}),(0,t.jsx)("td",{children:e.title}),(0,t.jsx)("td",{children:e._id}),(0,t.jsx)("td",{children:(0,t.jsxs)("div",{className:"table-actions d-flex",children:[(0,t.jsx)("button",{className:"btn delete-table me-2",onClick:()=>_(e),children:(0,t.jsx)("i",{className:"fe fe-edit"})}),(0,t.jsx)("button",{className:"btn delete-table",onClick:()=>Z(e),children:(0,t.jsx)("i",{className:"fe fe-trash-2"})})]})})]},s))})]})})})})]})}),(0,t.jsxs)(d.Z,{show:g,onHide:()=>u(!1),children:[(0,t.jsx)(d.Z.Header,{closeButton:!0,children:(0,t.jsx)(d.Z.Title,{children:"Edit Category"})}),(0,t.jsxs)(d.Z.Body,{children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"form-label",children:"Category Title"}),(0,t.jsx)("input",{type:"text",className:"form-control",value:h,onChange:e=>m(e.target.value)})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"form-label",children:"Category Image URL"}),(0,t.jsx)("input",{type:"file",className:"form-control",accept:"image/*",onChange:e=>{let s=e.target.files&&e.target.files[0];s&&p(s)}})]})]}),(0,t.jsxs)(d.Z.Footer,{children:[(0,t.jsx)(o.Z,{variant:"secondary",onClick:()=>u(!1),children:"Close"}),(0,t.jsx)(o.Z,{variant:"primary",onClick:C,children:"Save changes"})]})]}),(0,t.jsxs)(d.Z,{show:b,onHide:()=>v(!1),children:[(0,t.jsx)(d.Z.Header,{closeButton:!0,children:(0,t.jsx)(d.Z.Title,{children:"Add New Category"})}),(0,t.jsxs)(d.Z.Body,{children:[(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"form-label",children:"Category Title"}),(0,t.jsx)("input",{type:"text",className:"form-control",value:y.title,onChange:e=>{N({...y,title:e.target.value})}})]}),(0,t.jsxs)("div",{className:"mb-3",children:[(0,t.jsx)("label",{className:"form-label",children:"Category Image"}),(0,t.jsx)("input",{type:"file",className:"form-control",accept:"image/*",onChange:e=>{let s=e.target.files&&e.target.files[0];s&&N({...y,image:s})}})]})]}),(0,t.jsxs)(d.Z.Footer,{children:[(0,t.jsx)(o.Z,{variant:"secondary",onClick:()=>v(!1),children:"Close"}),(0,t.jsx)(o.Z,{variant:"primary",onClick:w,children:"Save Category"})]})]})]})}},86142:function(){}},function(e){e.O(0,[571,8764,5675,9668,4440,1664,4620,2010,3902,2999,7034,2888,9774,179],function(){return e(e.s=42486)}),_N_E=e.O()}]);